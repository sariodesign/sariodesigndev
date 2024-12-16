import {
	Camera,
	Mesh,
	Plane,
	Program,
	Renderer,
	RenderTarget
} from "ogl";
import { resolveLygia } from "resolve-lygia";

import fragment from "../glsl/fragment.glsl?raw";
import vertex from "../glsl/vertex.glsl?raw";
import asciiVertex from '../glsl/ascii-vertex.glsl?raw';
import asciiFragment from '../glsl/ascii-fragment.glsl?raw';

const renderer = new Renderer({alpha: true});
const gl = renderer.gl;
const renderTarget = new RenderTarget(gl);
document.body.appendChild(gl.canvas);
gl.clearColor(0.0, 0.0, 0.0, 0.0);

const camera = new Camera(gl, { near: 0.1, far: 100 });
camera.position.set(0, 0, 3);

function resize() {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
}

window.addEventListener("resize", resize);
resize();

const program = new Program(gl, {
	vertex,
	fragment: resolveLygia(fragment),
	uniforms: {
		uTime: { value: 0 },
		uFrequency: { value: 5.0 },
		uBrightness: { value: 0.0 },
		uSpeed: { value: 0.5 },
		uValue: { value: 0.30 },
		uAlpha: { value: 0.0 }
	},
});

const geometry = new Plane(gl, {
  width: 2,
  height: 2,
});

const mesh = new Mesh(gl, { geometry, program });

const asciiShaderProgram = new Program(gl, {
	vertex: asciiVertex,
	fragment: asciiFragment,
	uniforms: {
			uTexture: {
				value: renderTarget.texture,
			},
			uBrightness: { value: 1.00 },
			uAlpha: { value: 0.5 },
	},
});

const asciiMesh = new Mesh(gl, { geometry, program: asciiShaderProgram }); 



function update(t) {
	requestAnimationFrame(update);
	
	const elapsedTime = t * 0.001;
	program.uniforms.uTime.value = elapsedTime;

	program.uniforms.uAlpha.value = Math.abs(Math.sin(elapsedTime));
	asciiShaderProgram.uniforms.uAlpha.value = 0.5

	// Cancella il canvas mantenendo la trasparenza
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	// Aggiorna gli uniformi per l'alfa
	program.uniforms.uAlpha.value = 1.0; // Effetto completamente visibile
	asciiShaderProgram.uniforms.uAlpha.value = 1.0; // Lo stesso per l'ASCII

	const width = gl.canvas.width;
	const height = gl.canvas.height;

	asciiShaderProgram.uniforms.uResolution = {
		value: [width, height],
	};
	renderer.render({ scene: mesh, camera, target: renderTarget });
	renderer.render({ scene: asciiMesh, camera });
}
requestAnimationFrame(update);
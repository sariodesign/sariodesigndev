// src/scripts/loader.js
import { gsap } from 'gsap';

export function initPageTransition() {
  const overlay = document.getElementById('page-overlay');
  if (!overlay) {
    console.warn('[loader] #page-overlay non trovato');
    return;
  }

  // mostra l’overlay (lo fa “calare” dall’alto)
  const showOverlay = () =>
    gsap.to(overlay, { y: 0, duration: 0.5, ease: 'power1.out' });
  // nasconde l’overlay (lo riporta fuori)
  const hideOverlay = () =>
    gsap.to(overlay, { y: '-100%', duration: 0.5, ease: 'power1.in' });

  // al caricamento della pagina, lo facciamo sparire
  window.addEventListener('load', hideOverlay);

  // ogni click su link interno…
  document
    .querySelectorAll('a[href^="/"]')
    .forEach((link) =>
      link.addEventListener('click', (e) => {
        // skip sui click con ctrl/meta/shift o target="_blank"
        if (e.metaKey || e.ctrlKey || e.shiftKey || link.target === '_blank')
          return;
        e.preventDefault();
        showOverlay();
        // dopo 500ms navighiamo
        setTimeout(() => (window.location.href = link.href), 500);
      })
    );
}

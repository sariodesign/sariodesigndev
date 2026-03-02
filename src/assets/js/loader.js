const DEFAULT_BRAND_TEXT = '<sario/design>';
const SHUFFLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/*+-_';
const CHAR_STAGGER_MS = 52;
const CHAR_SWAP_MS = 68;
const CHAR_SWAP_COUNT = 3;
const FINAL_HOLD_MS = 380;
const RELOAD_NAV_DELAY_MS = 180;

const isInternalHref = (href) => {
	if (!href) {
		return false;
	}

	if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
		return false;
	}

	try {
		const url = new URL(href, window.location.href);
		return url.origin === window.location.origin;
	} catch {
		return false;
	}
};

const randomChar = () =>
	SHUFFLE_CHARS[Math.floor(Math.random() * SHUFFLE_CHARS.length)];

const createBrandAnimator = (brandEl) => {
	const brandText = brandEl.textContent?.trim() || DEFAULT_BRAND_TEXT;
	const chars = [];
	let scheduled = [];

	brandEl.textContent = '';
	brandEl.setAttribute('aria-label', brandText);

	for (const [index, char] of [...brandText].entries()) {
		const charEl = document.createElement('span');
		charEl.className = 'page-loader__char';
		charEl.dataset.final = char;
		charEl.dataset.accent = index % 2 === 0 ? 'a' : 'b';
		charEl.textContent = '\u00A0';
		brandEl.append(charEl);
		chars.push(charEl);
	}

	const clearSchedule = () => {
		for (const timeoutId of scheduled) {
			window.clearTimeout(timeoutId);
		}
		scheduled = [];
	};

	const schedule = (callback, delay) => {
		const timeoutId = window.setTimeout(callback, delay);
		scheduled.push(timeoutId);
		return timeoutId;
	};

	const reset = () => {
		clearSchedule();
		brandEl.classList.remove('is-complete');

		for (const charEl of chars) {
			charEl.textContent = '\u00A0';
			charEl.classList.remove(
				'is-active',
				'is-settled',
				'is-accent-a',
				'is-accent-b'
			);
		}
	};

	const play = () => {
		reset();

		for (const [index, charEl] of chars.entries()) {
			const finalChar = charEl.dataset.final || '';
			const accentClass =
				charEl.dataset.accent === 'a' ? 'is-accent-a' : 'is-accent-b';
			const startDelay = index * CHAR_STAGGER_MS;

			for (let step = 0; step < CHAR_SWAP_COUNT - 1; step += 1) {
				schedule(() => {
					charEl.classList.add('is-active', accentClass);
					charEl.classList.remove('is-settled');
					charEl.textContent = randomChar();
				}, startDelay + step * CHAR_SWAP_MS);
			}

			schedule(() => {
				charEl.classList.add('is-active', 'is-settled');
				charEl.classList.remove('is-accent-a', 'is-accent-b');
				charEl.textContent = finalChar;
			}, startDelay + (CHAR_SWAP_COUNT - 1) * CHAR_SWAP_MS);
		}

		const revealDuration =
			Math.max(chars.length - 1, 0) * CHAR_STAGGER_MS +
			(CHAR_SWAP_COUNT - 1) * CHAR_SWAP_MS;
		const totalDuration = revealDuration + FINAL_HOLD_MS;

		schedule(() => {
			brandEl.classList.add('is-complete');
		}, revealDuration);

		return totalDuration;
	};

	return {
		play,
		minVisibleMs:
			Math.max(chars.length - 1, 0) * CHAR_STAGGER_MS +
			(CHAR_SWAP_COUNT - 1) * CHAR_SWAP_MS +
			FINAL_HOLD_MS,
	};
};

export function initPageLoader() {
	const loader = document.querySelector('#page-loader');
	if (!loader || loader.dataset.loaderReady === 'true') {
		return;
	}
	loader.dataset.loaderReady = 'true';
	const loaderBrand = loader.querySelector('.js-page-loader-brand');

	let shownAt = Date.now();
	let hideTimer = null;
	const brandAnimator = loaderBrand ? createBrandAnimator(loaderBrand) : null;
	const minVisibleMs = brandAnimator?.minVisibleMs ?? FINAL_HOLD_MS;

	const showLoader = () => {
		shownAt = Date.now();
		if (hideTimer) {
			window.clearTimeout(hideTimer);
			hideTimer = null;
		}

		document.documentElement.classList.add('is-loading-page');
		loader.classList.remove('is-hidden');
		brandAnimator?.play();
	};

	const hideLoader = () => {
		const elapsed = Date.now() - shownAt;
		const wait = Math.max(minVisibleMs - elapsed, 0);

		if (hideTimer) {
			window.clearTimeout(hideTimer);
		}

		hideTimer = window.setTimeout(() => {
			loader.classList.add('is-hidden');
			document.documentElement.classList.remove('is-loading-page');
		}, wait);
	};

	// First paint loader
	showLoader();

	if (document.readyState === 'complete') {
		hideLoader();
	} else {
		window.addEventListener('load', hideLoader, { once: true });
	}

	// Astro SPA lifecycle hooks
	document.addEventListener('astro:before-preparation', showLoader);
	document.addEventListener('astro:page-load', hideLoader);

	// Handle clicks early so loader appears before navigation starts.
	document.addEventListener(
		'click',
		(event) => {
			if (event.defaultPrevented) {
				return;
			}

			const anchor = event.target instanceof Element ? event.target.closest('a[href]') : null;
			if (!anchor) {
				return;
			}

			if (
				event.metaKey ||
				event.ctrlKey ||
				event.shiftKey ||
				event.altKey ||
				anchor.hasAttribute('download') ||
				anchor.target === '_blank' ||
				!isInternalHref(anchor.getAttribute('href'))
			) {
				return;
			}

			showLoader();

			// Links with data-astro-reload do a hard reload: delay it a bit for the loader reveal.
			if (anchor.hasAttribute('data-astro-reload')) {
				event.preventDefault();
				const to = anchor.href;
				window.setTimeout(() => {
					window.location.href = to;
				}, RELOAD_NAV_DELAY_MS);
			}
		},
		{ capture: true }
	);
}

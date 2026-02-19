const MIN_VISIBLE_MS = 380;
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

export function initPageLoader() {
	const loader = document.querySelector('#page-loader');
	if (!loader) {
		return;
	}

	let shownAt = Date.now();
	let hideTimer = null;

	const showLoader = () => {
		shownAt = Date.now();
		if (hideTimer) {
			window.clearTimeout(hideTimer);
			hideTimer = null;
		}

		document.documentElement.classList.add('is-loading-page');
		loader.classList.remove('is-hidden');
	};

	const hideLoader = () => {
		const elapsed = Date.now() - shownAt;
		const wait = Math.max(MIN_VISIBLE_MS - elapsed, 0);

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

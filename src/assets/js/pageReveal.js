export const PAGE_REVEAL_EVENT = 'sario:page-reveal-ready';

const isPageRevealReady = () => {
	const loader = document.querySelector('#page-loader');

	if (!loader) {
		return true;
	}

	return document.documentElement.dataset.pageRevealReady === 'true';
};

export const onPageRevealReady = (callback) => {
	const runCallback = () => {
		window.requestAnimationFrame(() => {
			callback();
		});
	};

	if (isPageRevealReady()) {
		runCallback();
		return () => {};
	}

	const handleReady = () => {
		runCallback();
	};

	document.addEventListener(PAGE_REVEAL_EVENT, handleReady, { once: true });

	return () => {
		document.removeEventListener(PAGE_REVEAL_EVENT, handleReady);
	};
};

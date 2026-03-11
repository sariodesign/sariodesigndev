export interface LocalizedPost {
	title: string;
	category: string;
	date: string;
	readTime: string;
	excerpt: string;
}

export interface LocalizedProjectTextBlock {
	type: "text";
	value: string;
}

export interface LocalizedProjectImageBlock {
	type: "image";
	src: string;
	alt: string;
}

export type LocalizedProjectDetailBlock =
	| LocalizedProjectTextBlock
	| LocalizedProjectImageBlock;

export interface LocalizedProject {
	slug: string;
	name: string;
	year: string;
	services: string;
	description: string;
	metaDescription: string;
	image: string;
	client: string;
	techStack: string;
	detailBlocks: LocalizedProjectDetailBlock[];
}

export interface LocalizedHomeOffer {
	title: string;
	description: string;
}

export interface LocalizedServiceItem {
	title: string;
	description: string;
}

export interface LocalizedAboutTimelineItem {
	year: string;
	title: string;
	description: string;
}

export interface Dictionary {
	meta: {
		home: {
			title: string;
			description: string;
		};
		blog: {
			title: string;
			description: string;
		};
		works: {
			title: string;
			description: string;
		};
		services: {
			title: string;
			description: string;
		};
		about: {
			title: string;
			description: string;
		};
	};
	navigation: {
		home: string;
		works: string;
		services: string;
		blog: string;
		about: string;
		menu: string;
		openMenuAria: string;
		switchLanguage: string;
		closeMenuAria: string;
	};
	footer: {
		linkedin: string;
		github: string;
	};
	home: {
		photoAlt: string;
		availability: string;
		headingStart: string;
		headingHighlightFast: string;
		headingMiddle: string;
		headingHighlightEasy: string;
		headingEnd: string;
		headingTags: string[];
		valueEyebrow: string;
		offers: LocalizedHomeOffer[];
		stackLabel: string;
		stackItems: string[];
		ctaWorks: string;
		ctaEmail: string;
	};
	blog: {
		heading: string;
		listAriaLabel: string;
		posts: LocalizedPost[];
	};
	works: {
		heading: string;
		listAriaLabel: string;
		openProjectAria: string;
		clientLabel: string;
		techStackLabel: string;
		backToWorksLabel: string;
		projects: LocalizedProject[];
	};
	services: {
		heading: string;
		intro: string;
		background: string;
		valueEyebrow: string;
		offers: LocalizedServiceItem[];
		processTitle: string;
		processItems: LocalizedServiceItem[];
		deliverablesTitle: string;
		deliverablesItems: string[];
		stackFrontendTitle: string;
		stackUITitle: string;
		stackUIText: string[];
		stackFrontendItems: string[];
		stackToolTitle: string;
		stackToolText: string[];
		stackBackendTitle: string;
		stackBackendItems: string[];
		lifestyle: string;
		ctaTitle: string;
		ctaDescription: string;
		ctaPrimary: string;
		ctaSecondary: string;
	};
	about: {
		heading: string;
		intro: string;
		paragraphs: string[];
		timelineTitle: string;
		timelineItems: LocalizedAboutTimelineItem[];
		passionsTitle: string;
		passionsIntro: string;
		passionsItems: string[];
		closing: string;
	};
}

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
	image: string;
	client: string;
	techStack: string;
	detailBlocks: LocalizedProjectDetailBlock[];
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
	};
	navigation: {
		works: string;
		blog: string;
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
		headingLead: string;
		headingHighlight: string;
		headingTrail: string;
		summary: string;
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
}

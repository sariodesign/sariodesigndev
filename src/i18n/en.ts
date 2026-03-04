import type { Dictionary } from "./schema";

const en: Dictionary = {
	meta: {
		home: {
			title: "Rosario Russo | Web Developer - Front-end & UI/UX",
			description:
				"Rosario Russo | Front-end and UI/UX web developer. Fast, polished and accessible websites.",
		},
		blog: {
			title: "Blog | SarioDesign",
			description:
				"Rosario Russo's blog: notes on UI, design systems, accessibility and web architecture.",
		},
		works: {
			title: "Works | SarioDesign",
			description: "Selected projects and case studies.",
		},
		services: {
			title: "Services | SarioDesign",
			description:
				"Profile and services by Rosario Russo: front-end development, UI engineering, and preferred stack.",
		},
	},
	navigation: {
		home: "Home",
		works: "Works",
		services: "Services",
		blog: "Blog",
		menu: "Menu",
		openMenuAria: "Open menu",
		switchLanguage: "Switch to",
		closeMenuAria: "Close menu",
	},
	footer: {
		linkedin: "LINKEDIN",
		github: "GITHUB",
	},
	home: {
		photoAlt: "Portrait of Rosario Russo",
		availability: "Available for freelance",
		headingStart: "I build web interfaces that are",
		headingHighlightFast: "fast",
		headingMiddle: "and",
		headingHighlightEasy: "easy",
		headingEnd: "to use",
		headingTags: ["Web Apps", "Portals", "SaaS", "E-commerce"],
		valueEyebrow: "How I can help",
		offers: [
			{
				title: "UI Development",
				description:
					"Modern, responsive front-end interfaces built to ship and last.",
			},
			{
				title: "Design Systems",
				description:
					"Reusable components and clear patterns for products that need to scale.",
			},
			{
				title: "Performance & Accessibility",
				description:
					"Practical improvements across speed, semantics, and inclusive UX.",
			},
		],
		stackLabel: "Frequently used stack",
		stackItems: [
			"TypeScript",
			"Next.js",
			"Nuxt",
			"Tailwind",
			"Node.js",
			"Supabase",
		],
		ctaWorks: "View works",
		ctaEmail: "Learn more",
	},
	blog: {
		heading: "Building thoughtful digital products.",
		listAriaLabel: "Posts list",
		posts: [
			{
				title: "Design tokens that actually scale",
				category: "Design System",
				date: "12 jan 2026",
				readTime: "7 min read",
				excerpt:
					"How to keep visual consistency between product teams while leaving room for experimentation.",
			},
			{
				title: "Shipping fast without breaking accessibility",
				category: "Front-end",
				date: "10 dec 2025",
				readTime: "6 min read",
				excerpt:
					"A compact workflow to validate semantics, keyboard navigation, and contrast before each release.",
			},
			{
				title: "The right way to structure UI animation",
				category: "Motion",
				date: "18 nov 2025",
				readTime: "5 min read",
				excerpt:
					"Use animation as communication: reveal hierarchy, confirm actions, and reduce visual noise.",
			},
			{
				title: "When Astro is a better fit than heavier stacks",
				category: "Architecture",
				date: "02 oct 2025",
				readTime: "8 min read",
				excerpt:
					"Tradeoffs and decisions from real projects where content, performance, and maintainability mattered most.",
			},
		],
	},
	works: {
		heading: "Explore my works",
		listAriaLabel: "Projects list",
		openProjectAria: "Open project",
		clientLabel: "Client",
		techStackLabel: "Tech stack",
		backToWorksLabel: "Back to works",
		projects: [
			{
				slug: "custom-saas-management-system",
				name: "Custom SaaS Management System",
				year: "2026",
				services: "Hono, Drizzle, PostgreSQL, Zod, Vue.js, TypeScript",
				description:
					"I designed and developed a custom, modular, and scalable SaaS management system to centralize operations, customer data, and internal workflows.",
				image: "/work-placeholder.svg",
				client: "Confidential client",
				techStack: "Hono, PostgreSQL, Drizzle, Zod, Vue.js, TypeScript",
				detailBlocks: [
					{
						type: "text",
						value:
							"I planned the product architecture around real operational workflows: onboarding, role management, and daily process tracking. The goal was a clean and scalable foundation.",
					},
					{
						type: "image",
						src: "/work-detail-placeholder-1.svg",
						alt: "Custom SaaS project detail placeholder",
					},
					{
						type: "text",
						value:
							"I designed and implemented typed APIs, data model, and back-office UI with strong focus on performance and long-term maintainability.",
					},
					{
						type: "image",
						src: "/work-detail-placeholder-2.svg",
						alt: "Second Custom SaaS project detail placeholder",
					},
				],
			},
			{
				slug: "headless-ecommerce",
				name: "Headless E-commerce",
				year: "2025",
				services: "Nuxt, PayPal API, Supabase, Prisma",
				description:
					"Built a headless e-commerce with a Nuxt frontend, API-first backend, and Prisma-managed database, including product variants, cart, checkout, and UX-focused performance/SEO.",
				image: "/work-placeholder.svg",
				client: "Retail company",
				techStack: "Nuxt, Supabase, Prisma, PostgreSQL, PayPal API",
				detailBlocks: [
					{
						type: "text",
						value:
							"The project was designed to fully decouple frontend experience from backend logic, enabling faster release cycles on campaigns and catalog updates.",
					},
					{
						type: "image",
						src: "/work-detail-placeholder-1.svg",
						alt: "Headless E-commerce project detail placeholder",
					},
					{
						type: "text",
						value:
							"I structured listing, product detail and checkout flows with attention to UX clarity, cart state reliability, and payment robustness.",
					},
					{
						type: "image",
						src: "/work-detail-placeholder-2.svg",
						alt: "Second Headless E-commerce project detail placeholder",
					},
				],
			},
			{
				slug: "marco-iannaccone",
				name: "Marco Iannaccone",
				year: "2025",
				services: "Next.js, Tailwind, Sanity",
				description:
					"Bilingual portfolio website for artist and photographer Marco Iannaccone (aka Scarlet Lovejoy), designed to present his creative universe in a clear and easy-to-navigate way.",
				image: "/work-placeholder.svg",
				client: "Marco Iannaccone",
				techStack: "Next.js, Tailwind, Framer Motion, Sanity CMS",
				detailBlocks: [
					{
						type: "text",
						value:
							"I designed an editorial layout that stays easy to update, focusing on readability, visual rhythm, and autonomous CMS content management.",
					},
					{
						type: "image",
						src: "/work-detail-placeholder-1.svg",
						alt: "Marco Iannaccone project detail placeholder",
					},
					{
						type: "text",
						value:
							"The result is a bilingual portfolio with straightforward navigation, fast pages, and sections built to support both artwork and narrative.",
					},
					{
						type: "image",
						src: "/work-detail-placeholder-2.svg",
						alt: "Second Marco Iannaccone project detail placeholder",
					},
				],
			},
		],
	},
	services: {
		heading: "Services",
		intro:
			"I have been working in digital products for about ten years. I started in design, then moved step by step into code, mainly across publishing projects.",
		background:
			"Today I help teams and companies with front-end development and UI engineering, with a strong focus on performance, accessibility, and maintainable code.",
		stackTitle: "Languages and frameworks",
		stackItems: [
			"HTML",
			"CSS / SCSS",
			"JavaScript (ES6+)",
			"TypeScript",
			"React",
			"Vue",
			"Svelte",
			"Next.js",
			"Nuxt",
			"Astro",
		],
		toolingTitle: "Tools I use",
		toolingItems: [
			"Git and GitHub",
			"Figma",
			"VS Code",
			"Node.js",
			"Vite",
			"Prisma",
			"Supabase",
			"PostgreSQL",
		],
		lifestyle:
			"In my free time I keep personal projects alive and keep exploring new ecosystems, together with books, music, TV series, and video game adventures.",
	},
};

export default en;

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
		about: {
			title: "About | SarioDesign",
			description:
				"Who I am, how I work, and the principles I apply while building digital products.",
		},
	},
	navigation: {
		home: "Home",
		works: "Works",
		services: "Services",
		blog: "Blog",
		about: "About",
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
		valueEyebrow: "How I can support you",
		offers: [
			{
				title: "UI Development",
				description:
					"Modern, responsive interfaces built for real production environments and long-term product growth.",
			},
			{
				title: "Design Systems and Components",
				description:
					"Reusable UI libraries and consistent patterns that reduce friction between design and engineering.",
			},
			{
				title: "Front-end Refactoring",
				description:
					"Improvements on existing codebases to raise clarity, performance, and maintainability without stopping delivery.",
			},
		],
		processTitle: "How we work",
		processItems: [
			{
				title: "Initial alignment",
				description:
					"We define goals, constraints, priorities, and KPIs to keep the execution path clear from day one.",
			},
			{
				title: "Technical direction",
				description:
					"I translate requirements and mockups into a practical front-end plan with clear milestones.",
			},
			{
				title: "Iterative implementation",
				description:
					"Incremental releases, fast feedback loops, and steady code quality throughout delivery.",
			},
			{
				title: "QA and handoff",
				description:
					"Functional checks, accessibility validation, and lightweight documentation for clean team handover.",
			},
		],
		deliverablesTitle: "What you can expect",
		deliverablesItems: [
			"Technical audit with priorities and quick wins",
			"Reusable components and consistent UI patterns",
			"Performance and accessibility improvements",
			"Operational guidelines for onboarding and maintenance",
			"Support on deployment and post-release monitoring",
		],
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
			"I collaborate flexibly with freelancers, in-house teams, and agencies, from focused consulting to ongoing product support.",
		ctaTitle: "Have a product that needs to evolve?",
		ctaDescription:
			"If you are starting from scratch or improving an existing platform, we can define a practical and sustainable technical roadmap.",
		ctaPrimary: "Send me an email",
		ctaSecondary: "View works",
	},
	about: {
		heading: "About",
		intro:
			"I am Rosario Russo, and I have been designing web interfaces for over ten years, combining visual culture and front-end engineering.",
		paragraphs: [
			"Over time I worked across different contexts, from publishing to SaaS products, always aiming for experiences that are fast, reliable, and easy to use.",
			"I care about interface quality, but also code quality: well-structured components, clear naming, accessibility, and performance as baseline standards.",
		],
		focusTitle: "What I bring to projects",
		focusItems: [
			{
				title: "Product mindset",
				description:
					"I start from real business goals and convert requirements into a sustainable technical direction.",
			},
			{
				title: "Cross-team collaboration",
				description:
					"I work between design, engineering, and stakeholders with shared language and verifiable decisions.",
			},
			{
				title: "Operational quality",
				description:
					"I prefer iterative, readable delivery with continuous focus on maintainability and stability.",
			},
		],
		timelineTitle: "Journey",
		timelineItems: [
			{
				year: "2015",
				title: "Starting point: design and web",
				description:
					"I started from visual design, learning how to build interfaces around hierarchy and readability.",
			},
			{
				year: "2019",
				title: "Full transition to front-end",
				description:
					"My focus moved fully into implementation: components, UI architecture, and release workflows.",
			},
			{
				year: "Today",
				title: "UI engineering for teams and companies",
				description:
					"I collaborate on new products and refactoring existing platforms with a pragmatic approach.",
			},
		],
		closing:
			"When I am not coding client work, I keep experimenting on personal side projects and studying new workflows to improve delivery.",
	},
};

export default en;

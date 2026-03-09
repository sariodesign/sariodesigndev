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
		about: "About me",
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
							"Revolutionizing operations for a printing systems provider began with a deep dive into daily inefficiencies. Through targeted interviews across departments, I mapped every bottleneck to convert real-world business needs into a fluid digital workflow. The goal was to move beyond the constraints of off-the-shelf software to create a solution that faithfully reflects the company's unique dynamics.",
					},
					{
						type: "image",
						src: "/work-detail-placeholder-1.svg",
						alt: "Custom SaaS project detail placeholder",
					},
					{
						type: "text",
						value:
							"The answer is a sartorial product: a bespoke API-first ecosystem with a dedicated frontend, designed to fit the client’s processes like a glove. By bypassing the rigidity of pre-configured management tools, I developed a lean and scalable solution stitched around the specific needs of its daily users, ensuring the software evolves alongside the business.",
					},
					{
						type: "image",
						src: "/work-detail-placeholder-2.svg",
						alt: "Second Custom SaaS project detail placeholder",
					},
					{
						type: "text",
						value:
							"Technical stability is powered by a cutting-edge stack: Hono and TypeScript deliver an ultra-fast backend, while PostgreSQL and Drizzle ensure absolute data integrity. On the surface, a Vue.js interface provides a reactive and intuitive experience, simplifying the management of complex information volumes with natural ease and high performance.",
					},
					{
						type: "text",
						value:
							"The system centralizes the entire value chain—from a strategic dashboard to the full lifecycle of orders, quotes, and delivery notes (DDT). Dedicated modules for fleet monitoring, technical ticketing, and a custom events calendar allow for total control over logistics and support, all secured by a granular role-based access system to protect sensitive data."
					},
					{
						type: "text",
						value:
							"The final result is a high-impact digital asset that has eliminated information gaps and drastically boosted operational efficiency. This case study bridges the gap between active listening and software engineering, proving how a bespoke approach can generate excellence: solid in code, elegant in function, and transformative for the business."
					}
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
			"I help companies and product teams build web interfaces that are reliable, performant, and easy to maintain.",
		background:
			"My focus is UI engineering and front-end architecture for digital products where technical quality directly impacts business outcomes and release speed.",
		valueEyebrow: "How I can support you",
		offers: [
			{
				title: "Interfaces for SaaS and complex platforms",
				description:
					"Front-end implementation for dashboards, private areas, and structured flows with strong focus on clarity and scalability.",
			},
			{
				title: "Operational design systems",
				description:
					"I build component libraries and shared rules to reduce delivery time, inconsistency, and technical debt.",
			},
			{
				title: "Refactoring and stabilization",
				description:
					"I improve existing codebases to raise maintainability, performance, and release quality without blocking product progress.",
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
			"Technical audit with priorities, risks, and quick wins",
			"Reusable components and documented UI patterns",
			"Core Web Vitals and accessibility improvements",
			"Practical guidelines for onboarding and maintenance",
			"Support on release, QA, and post-go-live monitoring",
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
			"I work with in-house teams, agencies, and freelancers through flexible setups, from focused audits to ongoing product support.",
		ctaTitle: "Have a product that needs to evolve?",
		ctaDescription:
			"If you are starting from scratch or improving an existing platform, we can define a practical and sustainable technical roadmap.",
		ctaPrimary: "Send me an email",
		ctaSecondary: "View works",
	},
	about: {
		heading: "About me",
		intro:
			"I am Rosario Russo. Over the last 15 years I moved across design, content, and front-end engineering. This path taught me to look at digital products from different angles, with a practical mindset that keeps vision, detail, and technical responsibility together.",
		paragraphs: [
			"I enjoy building digital products that are genuinely useful: clear for users and sustainable for the teams who maintain them.",
			"Over time I learned how to keep aesthetics, performance, and pragmatism together without losing the human side of the work.",
		],
		timelineTitle: "Professional journey",
		timelineItems: [
			{
				year: "2023 - Today",
				title: "Freelance",
				description:
					"I build web solutions for travel, agencies, and commercial clients: corporate websites, booking tools, and custom management systems.",
			},
			{
				year: "2020 - 2023",
				title: "Ciaopeople",
				description:
					"Senior Front-end Developer: designed and scaled a cross-brand design system with strong focus on accessibility and consistency.",
			},
			{
				year: "2018 - 2020",
				title: "IT Hub",
				description:
					"Front-end Developer: improved UI and performance for editorial products such as blastingnews.com and supermoney.eu.",
			},
			{
				year: "2015 - 2018",
				title: "Citynews",
				description:
					"Web Designer: collaborated on the design system and on the company website citynews.it.",
			},
			{
				year: "2012 - 2015",
				title: "Ringmaster / Gi Group Qbit Division",
				description:
					"Web Designer and Web Content Manager: managed corporate portals in the gaming sector and delivered product pages and content.",
			},
		],
		passionsTitle: "Outside work",
		passionsIntro:
			"When I close the editor and terminal, I still stay close to creativity, just with a different pace.",
		passionsItems: [
			"Music and guitar",
			"Reading and note writing",
			"TV series and cinema",
			"Anime and manga",
			"Narrative and indie gaming",
			"Experimenting on personal side projects",
		],
		closing:
			"This personal side keeps me creative and curious, and it consistently improves how I approach professional projects.",
	},
};

export default en;

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
				name: "Engineering business processes",
				year: "2026",
				services: "Hono, Drizzle, PostgreSQL, Zod, Vue.js, TypeScript",
				description:
					"A custom API-first architecture for managing machinery and service operations.",
				metaDescription:
					"Case study of a custom API-first management platform for service operations and machinery tracking, built to streamline workflows, ticketing, and logistics.",
				image: "/work-placeholder.svg",
				client: "Firenze ufficio",
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
				name: "The digital debut of a fashion brand",
				year: "2025",
				services: "Nuxt, PayPal API, Supabase, Prisma",
				description:
					"A minimalist e-commerce designed for a friction-free shopping experience.",
				metaDescription:
					"Case study of a headless e-commerce for an emerging fashion brand, focused on minimal UX, guest checkout, PayPal payments, and order management.",
				image: "/work-placeholder.svg",
				client: "Ottaviano",
				techStack: "Nuxt, Supabase, Prisma, PostgreSQL, PayPal API",
				detailBlocks: [
					{
						type: "text",
						value:
							"Launching a debut fashion line requires a digital presence that matches the exclusivity of the collection. Collaborating closely with a lead designer, I transformed a curated 10-piece vision into a high-performance web portal. The focus was on creating a minimalist yet impactful entry point for a brand making its first mark on the market, ensuring the digital experience felt as premium as the garments themselves.",
					},
					{
						type: "image",
						src: "/work-detail-placeholder-1.svg",
						alt: "Headless E-commerce project detail placeholder",
					},
					{
						type: "text",
						value:
							"We adopted a sartorial approach to the user experience, intentionally eliminating the friction of mandatory registration. By implementing a seamless guest checkout, we ensured that the journey from discovery to purchase remains uninterrupted. This 'guest-first' philosophy prioritizes the customer's immediate engagement, making the brand accessible and inviting from the very first click.",
					},
					{
						type: "image",
						src: "/work-detail-placeholder-2.svg",
						alt: "Second Headless E-commerce project detail placeholder",
					},
					{
						type: "text",
						value:
							"The technical foundation is built on Nuxt, delivering a lightning-fast, SEO-optimized interface tailored for high-quality visual storytelling. To ensure global reach and trust, I integrated PayPal APIs for a streamlined and secure payment flow. This modern stack provides a robust infrastructure that balances aesthetic elegance with the performance needed for a successful market debut.",
					},
					{
						type: "text",
						value:
							"Beyond the sleek storefront lies a custom-built management dashboard designed for effortless operational control. This private panel allows the client to manage the limited-edition inventory and monitor incoming orders in real-time without technical overhead. It bridges the gap between high-end fashion and practical business management, providing a professional 'all-in-one' command center.",
					},
					{
						type: "text",
						value:
							"As a new player in a competitive industry, the project's success lies in its total readiness for the spotlight. While post-launch analytics will guide future data-driven optimizations, the brand now possesses a bespoke digital asset that is solid in its code and elegant in its delivery. It is a launch-ready platform built to grow and evolve alongside the collection.",
					}
				],
			},
			{
				slug: "marco-iannaccone",
				name: "Beyond the limits of traditional CMS",
				year: "2025",
				services: "Next.js, Tailwind, Sanity",
				description:
					"Architectural and performance redesign for an artistic portfolio.",
				metaDescription:
					"Case study of a headless redesign for a photography portfolio: migration from WordPress to Next.js and Sanity for speed, SEO, and archive management.",
				image: "/work-placeholder.svg",
				client: "Marco Iannaccone",
				techStack: "Next.js, Tailwind, Framer Motion, Sanity CMS",
				detailBlocks: [
					{
						type: "text",
						value:
							"This project involved the radical transformation of a professional photographer's digital presence, migrating from a limited WordPress architecture to a modern Headless ecosystem. The challenge was twofold: to elevate the portfolio's visual performance and to simplify the archiving of a diverse body of work, ranging from international exhibitions and artistic performances to the author's bibliography.",
					},
					{
						type: "image",
						src: "/work-detail-placeholder-1.svg",
						alt: "Marco Iannaccone project detail placeholder",
					},
					{
						type: "text",
						value:
							"The solution is a sartorial product built on Next.js and Sanity CMS, where loading speed and image rendering are the core pillars of the user experience. Leveraging this stack, I developed a flexible data structure that empowers the client to manage content autonomously while maintaining a minimalist aesthetic and a level of navigational fluidity that traditional systems simply cannot match.",
					},
					{
						type: "image",
						src: "/work-detail-placeholder-2.svg",
						alt: "Second Marco Iannaccone project detail placeholder",
					},
					{
						type: "text",
						value:
							"The final result is a digital gallery where technology serves art. The shift to Sanity has turned archive management into an intuitive process, while Next.js ensures flawless SEO indexing for books and exhibitions. This case study proves that migrating to the 'decoupled web' is not just a technical upgrade, but a commitment to aesthetic excellence, designed to protect and enhance an artist's visual legacy."
					}
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
		stackFrontendTitle: "Front-end",
		stackFrontendItems: [
			"TypeScript",
			"Vue",
			"Nuxt",
			"React",
			"Next.js",
			"Astro",
		],
		stackUITitle: "UI/UX",
		stackUIText: [
			"HTML", "CSS/SCSS", "Tailwind"
		],
		stackToolTitle: "Tool & Workflow",
		stackToolText: [
			"GitHub", "Figma", "Vite"
		],
		stackBackendTitle: "Backend",
		stackBackendItems: [
			"Node.js",
			"Hono",
			"Supabase",
			"Prisma",
			"Drizzle ",
			"PostgreSQL"
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

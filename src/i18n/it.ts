import type { Dictionary } from "./schema";

const it: Dictionary = {
	meta: {
		home: {
			title: "Rosario Russo | Web Developer Front-end e UI/UX",
			description:
				"Rosario Russo | Web developer front-end e UI/UX. Siti e interfacce web veloci, curate e accessibili.",
		},
		blog: {
			title: "Blog | SarioDesign",
			description:
				"Blog di Rosario Russo: note su UI, design system, accessibilita e architettura web.",
		},
		works: {
			title: "Works | SarioDesign",
			description: "Progetti selezionati e case study.",
		},
	},
	navigation: {
		works: "Works",
		blog: "Blog",
		switchLanguage: "Passa a",
		closeMenuAria: "Chiudi menu",
	},
	footer: {
		linkedin: "LINKEDIN",
		github: "GITHUB",
	},
	home: {
		photoAlt: "Ritratto di Rosario Russo",
		availability: "Disponibile per freelance",
		headingLead: "Progetto e sviluppo interfacce web",
		headingHighlight: "veloci e intuitive",
		headingTrail: "su misura.",
		summary:
			"Aiuto team e aziende a trasformare idee in siti e web app affidabili, con UI curate, performance solide e accessibilita integrata.",
		ctaWorks: "Vedi i lavori",
		ctaEmail: "Scrivimi via email",
	},
	blog: {
		heading: "Progettare prodotti digitali con intenzione.",
		listAriaLabel: "Lista articoli",
		posts: [
			{
				title: "Design token che scalano davvero",
				category: "Design System",
				date: "12 gen 2026",
				readTime: "7 min di lettura",
				excerpt:
					"Come mantenere coerenza visiva tra team diversi lasciando spazio alla sperimentazione.",
			},
			{
				title: "Rilasciare velocemente senza rompere l'accessibilita",
				category: "Front-end",
				date: "10 dic 2025",
				readTime: "6 min di lettura",
				excerpt:
					"Un workflow compatto per validare semantica, navigazione da tastiera e contrasto prima di ogni release.",
			},
			{
				title: "Come strutturare correttamente le animazioni UI",
				category: "Motion",
				date: "18 nov 2025",
				readTime: "5 min di lettura",
				excerpt:
					"Usare le animazioni come comunicazione: evidenziare gerarchie, confermare azioni e ridurre rumore visivo.",
			},
			{
				title: "Quando Astro e meglio di stack piu pesanti",
				category: "Architettura",
				date: "02 ott 2025",
				readTime: "8 min di lettura",
				excerpt:
					"Tradeoff e decisioni reali dove contenuti, performance e manutenibilita sono priorita.",
			},
		],
	},
	works: {
		heading: "Esplora i miei lavori",
		listAriaLabel: "Lista progetti",
		openProjectAria: "Apri progetto",
		clientLabel: "Cliente",
		techStackLabel: "Tech stack",
		backToWorksLabel: "Torna ai lavori",
		projects: [
			{
				slug: "custom-saas-management-system",
				name: "Custom SaaS Management System",
				year: "2026",
				services: "Hono, PostgreSQL, Drizzle, Vue.js",
				description:
					"Ho progettato e sviluppato un sistema SaaS modulare e scalabile per centralizzare operazioni, dati cliente e workflow interni.",
				image: "/work-placeholder.svg",
				client: "Cliente riservato",
				techStack: "Hono, PostgreSQL, Drizzle, Zod, Vue.js, TypeScript",
				detailBlocks: [
					{
						type: "text",
						value:
							"Ho definito l'architettura del prodotto partendo da processi reali: onboarding utenti, gestione ruoli e tracciamento operativo. L'obiettivo era avere una base chiara e scalabile da estendere modulo per modulo.",
					},
					{
						type: "image",
						src: "/work-detail-placeholder-1.svg",
						alt: "Placeholder dettaglio progetto Custom SaaS",
					},
					{
						type: "text",
						value:
							"Ho progettato e implementato API tipizzate, modello dati e interfaccia operativa, con attenzione a performance e coerenza UI nei flussi quotidiani.",
					},
					{
						type: "image",
						src: "/work-detail-placeholder-2.svg",
						alt: "Placeholder secondo dettaglio progetto Custom SaaS",
					},
				],
			},
			{
				slug: "headless-ecommerce",
				name: "Headless E-commerce",
				year: "2025",
				services: "Nuxt, PayPal API, Supabase, Prisma",
				description:
					"E-commerce headless con frontend Nuxt, backend API-first e database gestito con Prisma, con focus su varianti prodotto, checkout, performance e SEO.",
				image: "/work-placeholder.svg",
				client: "Retail company",
				techStack: "Nuxt, Supabase, Prisma, PostgreSQL, PayPal API",
				detailBlocks: [
					{
						type: "text",
						value:
							"Il progetto nasce per separare completamente esperienza frontend e logica business, mantenendo alta velocita di rilascio su campagne e aggiornamenti catalogo.",
					},
					{
						type: "image",
						src: "/work-detail-placeholder-1.svg",
						alt: "Placeholder dettaglio progetto Headless E-commerce",
					},
					{
						type: "text",
						value:
							"Ho strutturato listing, scheda prodotto e checkout con particolare attenzione a UX, stato carrello e resilienza del flusso di pagamento.",
					},
					{
						type: "image",
						src: "/work-detail-placeholder-2.svg",
						alt: "Placeholder secondo dettaglio progetto Headless E-commerce",
					},
				],
			},
			{
				slug: "marco-iannaccone",
				name: "Marco Iannaccone",
				year: "2025",
				services: "Next.js, Tailwind, Motion, Sanity",
				description:
					"Sito portfolio bilingue per l'artista e fotografo Marco Iannaccone (aka Scarlet Lovejoy), pensato per raccontare il suo universo creativo in modo chiaro.",
				image: "/work-placeholder.svg",
				client: "Marco Iannaccone",
				techStack: "Next.js, Tailwind, Framer Motion, Sanity CMS",
				detailBlocks: [
					{
						type: "text",
						value:
							"Ho progettato una struttura editoriale semplice da aggiornare, con priorita su leggibilita, ritmo visivo e gestione autonoma dei contenuti da CMS.",
					},
					{
						type: "image",
						src: "/work-detail-placeholder-1.svg",
						alt: "Placeholder dettaglio progetto Marco Iannaccone",
					},
					{
						type: "text",
						value:
							"Il risultato e un portfolio bilingue con navigazione lineare, pagine rapide e sezioni pensate per valorizzare sia progetto che biografia.",
					},
					{
						type: "image",
						src: "/work-detail-placeholder-2.svg",
						alt: "Placeholder secondo dettaglio progetto Marco Iannaccone",
					},
				],
			},
		],
	},
};

export default it;

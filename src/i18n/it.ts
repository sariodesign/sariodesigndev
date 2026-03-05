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
		services: {
			title: "Servizi | SarioDesign",
			description:
				"Profilo e servizi di Rosario Russo: front-end development, UI engineering e stack utilizzato.",
		},
		about: {
			title: "About | SarioDesign",
			description:
				"Chi sono, come lavoro e quali principi applico nello sviluppo di prodotti digitali.",
		},
	},
	navigation: {
		home: "Home",
		works: "Works",
		services: "Servizi",
		blog: "Blog",
		about: "About",
		menu: "Menu",
		openMenuAria: "Apri menu",
		switchLanguage: "Passa a",
		closeMenuAria: "Chiudi menu",
	},
	footer: {
		linkedin: "LINKEDIN",
		github: "GITHUB",
	},
	home: {
		photoAlt: "Ritratto di Rosario Russo",
		availability: "Parlami del tuo progetto",
		headingStart: "Sviluppo interfacce web",
		headingHighlightFast: "veloci",
		headingMiddle: "e",
		headingHighlightEasy: "facili",
		headingEnd: "da usare",
		headingTags: ["Web App", "Portali", "SaaS", "E-commerce"],
		valueEyebrow: "Come posso aiutarti",
		offers: [
			{
				title: "UI Development",
				description:
					"Interfacce front-end moderne, responsive e pronte per la produzione.",
			},
			{
				title: "Design Systems",
				description:
					"Componenti riusabili e pattern coerenti per prodotti che devono scalare.",
			},
			{
				title: "Performance & Accessibilita",
				description:
					"Ottimizzazioni concrete su velocita, semantica e qualita dell'esperienza.",
			},
		],
		stackLabel: "Stack ricorrente",
		stackItems: [
			"TypeScript",
			"Next.js",
			"Nuxt",
			"Tailwind",
			"Node.js",
			"Supabase",
		],
		ctaWorks: "Vedi i lavori",
		ctaEmail: "Scopri di più",
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
	services: {
		heading: "Servizi",
		intro:
			"Lavoro nel digitale da circa dieci anni. Ho iniziato dal design e, progetto dopo progetto, mi sono spostato sempre di piu sul codice, lavorando soprattutto in ambito publishing.",
		background:
			"Oggi supporto team e aziende su front-end development e UI engineering, con attenzione a performance, accessibilita e qualita del codice.",
		valueEyebrow: "Come posso supportarti",
		offers: [
			{
				title: "UI Development",
				description:
					"Interfacce moderne, responsive e solide, pensate per una produzione reale e per evolvere nel tempo.",
			},
			{
				title: "Design System e componenti",
				description:
					"Costruzione di librerie UI riusabili e coerenti, utili a ridurre frizioni tra design e sviluppo.",
			},
			{
				title: "Refactoring front-end",
				description:
					"Interventi su codice esistente per migliorare leggibilita, performance e manutenibilita senza bloccare il rilascio.",
			},
		],
		processTitle: "Metodo di lavoro",
		processItems: [
			{
				title: "Allineamento iniziale",
				description:
					"Definiamo obiettivi, vincoli, priorita e KPI per evitare ambiguita fin dall'inizio.",
			},
			{
				title: "Design tecnico",
				description:
					"Traduco requisiti e mockup in una strategia front-end pragmatica con milestone chiare.",
			},
			{
				title: "Implementazione iterativa",
				description:
					"Rilasci incrementali, feedback continuo e attenzione a qualita del codice durante tutta la delivery.",
			},
			{
				title: "QA e handoff",
				description:
					"Test funzionali, controlli accessibilita e documentazione essenziale per un passaggio pulito al team.",
			},
		],
		deliverablesTitle: "Output concreti",
		deliverablesItems: [
			"Analisi tecnica con priorita e quick wins",
			"Componenti riusabili e pattern UI consistenti",
			"Ottimizzazioni su performance e accessibilita",
			"Linee guida operative per onboarding e manutenzione",
			"Supporto su deploy e monitoraggio post-rilascio",
		],
		stackTitle: "Linguaggi e framework",
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
		toolingTitle: "Tool che utilizzo",
		toolingItems: [
			"Git e GitHub",
			"Figma",
			"VS Code",
			"Node.js",
			"Vite",
			"Prisma",
			"Supabase",
			"PostgreSQL",
		],
		lifestyle:
			"Collaboro in modo flessibile con freelance, team interni e agenzie: da consulenze mirate a supporti continuativi su prodotto.",
		ctaTitle: "Hai un prodotto da far evolvere?",
		ctaDescription:
			"Se stai avviando un nuovo progetto o vuoi migliorare una base esistente, possiamo impostare un piano tecnico concreto e sostenibile.",
		ctaPrimary: "Scrivimi",
		ctaSecondary: "Vedi i lavori",
	},
	about: {
		heading: "About",
		intro:
			"Sono Rosario Russo e progetto interfacce web da oltre dieci anni, unendo cultura visuale e sviluppo front-end.",
		paragraphs: [
			"Nel tempo ho lavorato su contesti diversi, dal publishing ai prodotti SaaS, con l'obiettivo di costruire esperienze veloci, solide e facili da usare.",
			"Mi interessa la qualita dell'interfaccia ma anche la qualita del codice: componenti ben strutturati, naming chiaro, accessibilita e performance come standard, non come extra.",
		],
		focusTitle: "Cosa porto nei progetti",
		focusItems: [
			{
				title: "Approccio prodotto",
				description:
					"Parto dagli obiettivi reali del business e trasformo i requisiti in una direzione tecnica sostenibile.",
			},
			{
				title: "Collaborazione trasversale",
				description:
					"Mi muovo tra design, sviluppo e stakeholder con un linguaggio comune e decisioni verificabili.",
			},
			{
				title: "Qualita operativa",
				description:
					"Preferisco rilasci iterativi e leggibili, con attenzione continua a manutenzione e stabilita.",
			},
		],
		timelineTitle: "Percorso",
		timelineItems: [
			{
				year: "2015",
				title: "Dai primi lavori tra grafica e web",
				description:
					"Ho iniziato dal design visuale, imparando a costruire interfacce centrate su gerarchia e leggibilita.",
			},
			{
				year: "2019",
				title: "Transizione completa al front-end",
				description:
					"Ho spostato il focus sull'implementazione: componenti, architetture UI e processi di rilascio.",
			},
			{
				year: "Oggi",
				title: "UI engineering per team e aziende",
				description:
					"Collaboro su nuovi prodotti e refactoring di piattaforme esistenti, con un approccio pragmatico.",
			},
		],
		closing:
			"Quando non lavoro al codice, continuo a sperimentare su side project personali e studio nuovi workflow per migliorare la delivery.",
	},
};

export default it;

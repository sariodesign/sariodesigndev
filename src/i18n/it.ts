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
		works: "Lavori",
		services: "Servizi",
		blog: "Blog",
		about: "Chi sono",
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
				client: "Firenze Ufficio",
				techStack: "Hono, PostgreSQL, Drizzle, Zod, Vue.js, TypeScript",
				detailBlocks: [
					{
						type: "text",
						value:
							"Trasformare l'operatività di un fornitore di sistemi di stampa partendo dai problemi reali: attraverso interviste mirate ai reparti, ho mappato ogni inefficienza per convertire i bisogni aziendali in un flusso digitale fluido. L'obiettivo era superare i limiti dei software standard, creando una soluzione che rispecchiasse fedelmente le dinamiche del business.",
					},
					{
						type: "image",
						src: "/works/gestionale-01.png",
						alt: "Placeholder dettaglio progetto Custom SaaS",
					},
					{
						type: "text",
						value:
							"La risposta è un prodotto sartoriale, un ecosistema API-first con frontend dedicato, progettato per aderire perfettamente ai processi del cliente. Superando la rigidità dei gestionali preconfigurati, ho sviluppato uno strumento snello e scalabile, cucito attorno alle necessità uniche di chi lo utilizza ogni giorno.",
					},
					{
						type: "image",
						src: "/works/gestionale-02.png",
						alt: "Placeholder secondo dettaglio progetto Custom SaaS",
					},
					{
						type: "text",
						value:
							"La solidità tecnica poggia su uno stack d'avanguardia: Hono e TypeScript garantiscono un backend ultra-veloce, mentre PostgreSQL e Drizzle assicurano la massima integrità del dato. L’interfaccia in Vue.js offre un'esperienza utente reattiva e intuitiva, semplificando la gestione di volumi complessi di informazioni con naturalezza.",
					},
					{
						type: "text",
						value:
							"Il sistema centralizza l'intera catena del valore: dalla dashboard strategica alla gestione documentale di ordini e DDT. Moduli per il monitoraggio del parco macchine, ticketing e un calendario eventi personalizzato permettono di dominare logistica e assistenza tecnica, il tutto protetto da una gestione granulare dei ruoli utente."
					},
					{
						type: "text",
						value:
							"Il risultato è un asset digitale che ha azzerato le dispersioni informative, elevando drasticamente l'efficienza aziendale. Questo case study dimostra come l'unione tra ascolto attivo e ingegneria del software possa generare una soluzione d'eccellenza: solida nel codice, elegante nel funzionamento e d'impatto sul business."
					},
					{
						type: "image",
						src: "/works/gestionale-03.png",
						alt: "Placeholder secondo dettaglio progetto Custom SaaS",
					}
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
				image: "/works/marco-iannaccone-01.png",
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
			"Aiuto team e aziende a progettare e sviluppare interfacce web affidabili, performanti e facili da mantenere.",
		background:
			"Mi concentro su UI engineering e front-end architecture per prodotti digitali dove la qualita tecnica ha un impatto diretto su business, tempi di rilascio e soddisfazione utente.",
		valueEyebrow: "Come posso supportarti",
		offers: [
			{
				title: "Interfacce per SaaS e piattaforme complesse",
				description:
					"Sviluppo front-end per dashboard, aree riservate e flussi articolati con attenzione a chiarezza e scalabilita.",
			},
			{
				title: "Design system operativi",
				description:
					"Costruisco librerie di componenti e regole condivise per ridurre tempi, inconsistenze e debito tecnico.",
			},
			{
				title: "Refactoring e stabilizzazione",
				description:
					"Intervengo su codice esistente per migliorare manutenibilita, performance e qualita dei rilasci senza fermare il prodotto.",
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
			"Analisi tecnica con priorita, rischi e quick wins",
			"Componenti riusabili e pattern UI documentati",
			"Interventi su Core Web Vitals e accessibilita",
			"Linee guida pratiche per onboarding e manutenzione",
			"Supporto su rilascio, QA e monitoraggio post-go-live",
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
			"Collaboro con team interni, agenzie e freelance in formule flessibili: da audit mirati a supporti continuativi su roadmap prodotto.",
		ctaTitle: "Hai un prodotto da far evolvere?",
		ctaDescription:
			"Se stai avviando un nuovo progetto o vuoi migliorare una base esistente, possiamo impostare un piano tecnico concreto e sostenibile.",
		ctaPrimary: "Scrivimi",
		ctaSecondary: "Vedi i lavori",
	},
	about: {
		heading: "Chi sono",
		intro:
			"Sono Rosario Russo: negli ultimi 15 anni ho attraversato il web passando da design, contenuti e front-end engineering. Questo percorso mi ha insegnato a guardare i prodotti digitali da piu prospettive, con un approccio pratico che tiene insieme visione, dettaglio e responsabilita tecnica.",
		paragraphs: [
			"Mi piace lavorare su prodotti digitali che devono essere utili davvero: chiari per gli utenti e sostenibili per i team che li mantengono.",
			"Negli anni ho imparato a tenere insieme estetica, performance e pragmatismo, senza perdere il lato umano del lavoro.",
		],
		timelineTitle: "Percorso professionale",
		timelineItems: [
			{
				year: "2023 - Oggi",
				title: "Freelance",
				description:
					"Sviluppo soluzioni web per travel, agenzie e aziende: siti corporate, booking tool e sistemi gestionali custom.",
			},
			{
				year: "2020 - 2023",
				title: "Ciaopeople",
				description:
					"Senior Front-end Developer: progettazione e consolidamento di design system cross-brand, con focus su accessibilita e scalabilita.",
			},
			{
				year: "2018 - 2020",
				title: "IT Hub",
				description:
					"Front-end Developer: miglioramento UI e performance per progetti editoriali internazionali come blastingnews.com e supermoney.eu.",
			},
			{
				year: "2015 - 2018",
				title: "Citynews",
				description:
					"Web Designer: collaborazione sul design system e sviluppo del sito corporate citynews.it.",
			},
			{
				year: "2012 - 2015",
				title: "Ringmaster / Gi Group Qbit Division",
				description:
					"Web Designer e Web Content Manager: gestione portali corporate nel settore gaming, pubblicazione contenuti e pagine prodotto.",
			},
		],
		passionsTitle: "Fuori dal lavoro",
		passionsIntro:
			"Quando chiudo editor e terminale, torno comunque alla creativita ma con ritmi diversi.",
		passionsItems: [
			"Musica e concerti",
			"Lettura e scrittura di appunti",
			"Serie TV e cinema",
			"Anime e manga",
			"Gaming narrativo e indie",
			"Sperimentazione su side project personali",
		],
		closing:
			"Questa parte piu personale mi tiene creativo e curioso, e finisce sempre per migliorare anche il mio modo di lavorare.",
	},
};

export default it;

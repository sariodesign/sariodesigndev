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
			description:
				"Scopri i miei case study: soluzioni web su misura progettate per risolvere problemi reali. Sviluppo software, e-commerce e architetture headless.",
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
		headingStart: "Sviluppo prodotti digitali",
		headingHighlightFast: "su misura",
		headingMiddle: "progettati per essere",
		headingHighlightEasy: "veloci",
		headingEnd: "intuitivi e orientati al business.",
		headingTags: ["Web App", "SaaS", "E-commerce"],
		valueEyebrow: "Come posso aiutarti",
		offers: [
			{
				title: "Sviluppo Web su Misura",
				description:
					"Piattaforme digitali solide e intuitive. Progetto interfacce sartoriali pensate per guidare l'utente e massimizzare i risultati del tuo business.",
			},
			{
				title: "Architetture Scalabili",
				description:
					"Costruisco il tuo prodotto pensando al futuro. Sviluppo ecosistemi flessibili e modulari, pronti a crescere ed espandersi senza limiti tecnici.",
			},
			{
				title: "Performance & Accessibilita",
				description:
					"L'estetica non basta senza affidabilità. Garantisco caricamenti fulminei e codice accessibile per un'esperienza utente e un'indicizzazione impeccabili.",
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
		collaborationsHeading: "Collaborazioni",
		listAriaLabel: "Lista progetti",
		collaborationsListAriaLabel: "Lista collaborazioni",
		openProjectAria: "Apri progetto",
		clientLabel: "Cliente",
		techStackLabel: "Tech stack",
		backToWorksLabel: "Torna ai lavori",
		projects: [
			{
				slug: "custom-saas-management-system",
				name: "Ingegnerizzare i processi aziendali",
				year: "2026",
				services: "Hono, PostgreSQL, Drizzle, Vue.js",
				description: "Un'architettura API-First su misura per la gestione del parco macchine e assistenza",
				metaDescription:
					"Scopri come ho progettato un gestionale sartoriale API-first (Vue.js, Hono) per ottimizzare e centralizzare i flussi di un'azienda di office automation.",
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
						type: "text",
						value:
							"La risposta è un prodotto sartoriale, un ecosistema API-first con frontend dedicato, progettato per aderire perfettamente ai processi del cliente. Superando la rigidità dei gestionali preconfigurati, ho sviluppato uno strumento snello e scalabile, cucito attorno alle necessità uniche di chi lo utilizza ogni giorno.",
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
						src: "/works/gestionale-01.png",
						alt: "Placeholder dettaglio progetto Custom SaaS",
					},
					{
						type: "image",
						src: "/works/gestionale-02.png",
						alt: "Placeholder secondo dettaglio progetto Custom SaaS",
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
				name: "Il debutto digitale di un brand di moda",
				year: "2025",
				services: "Nuxt, PayPal API, Supabase, Prisma",
				description:
					"Un e-commerce minimalista progettato per un'esperienza d'acquisto senza attriti",
				metaDescription:
					"Case study: sviluppo di un e-commerce su misura in Nuxt per il lancio di un brand di moda. Checkout fluido senza registrazione per un debutto perfetto.",
				image: "/work-placeholder.svg",
				client: "Ottaviano",
				techStack: "Nuxt, Supabase, Prisma, PostgreSQL, PayPal API",
				detailBlocks: [
					{
						type: "text",
						value:
							"Il lancio di una linea di abbigliamento di debutto richiede una presenza digitale all'altezza dell'esclusività della collezione. In stretta collaborazione con un lead designer, ho trasformato una visione curata di dieci capi in un portale web ad alte prestazioni. Il focus è stato creare un punto d'ingresso minimalista ma d'impatto per un brand che muove i suoi primi passi, garantendo un'esperienza digitale premium quanto i capi stessi.",
					},
					{
						type: "text",
						value:
							"Ho strutturato listing, scheda prodotto e checkout con particolare attenzione a UX, stato carrello e resilienza del flusso di pagamento.",
					},
					{
						type: "text",
						value:
							"Abbiamo adottato un approccio sartoriale all'esperienza utente, eliminando intenzionalmente la frizione della registrazione obbligatoria. Implementando un sistema di guest checkout fluido, abbiamo assicurato che il percorso dalla scoperta all'acquisto rimanga ininterrotto. Questa filosofia mette al centro l'immediatezza, rendendo il brand accessibile e invitante fin dal primo click, senza barriere d'ingresso per il nuovo pubblico.",
					},
					{
						type: "text",
						value:
							"Le fondamenta tecniche poggiano su Nuxt, offrendo un'interfaccia ultra-veloce e ottimizzata lato SEO, ideale per uno storytelling visivo di alta qualità. Per garantire fiducia e portata internazionale, ho integrato le API di PayPal per un flusso di pagamento snello e sicuro. Questo stack moderno fornisce un'infrastruttura robusta che bilancia l'eleganza estetica con le prestazioni necessarie per un debutto di successo sul mercato.",
					},
					{
						type: "text",
						value:
							"Oltre la vetrina raffinata si cela un pannello di gestione personalizzato, progettato per un controllo operativo senza sforzo. Questa dashboard privata consente al cliente di gestire l'inventario in edizione limitata e monitorare gli ordini in tempo reale senza complicazioni tecniche. Il sistema colma il divario tra l'estetica della moda e la gestione pratica del business, fornendo un centro di comando professionale e intuitivo.",
					},
					{
						type: "text",
						value:
							"Come nuovo attore in un settore competitivo, il valore del progetto risiede nella sua totale prontezza per la ribalta. Mentre le analisi post-lancio guideranno le future ottimizzazioni basate sui dati, il brand possiede ora un asset digitale su misura, solido nel codice ed elegante nella sua erogazione. È una piattaforma costruita non solo per vendere, ma per crescere ed evolversi insieme alla collezione stessa",
					}
				],
			},
			{
				slug: "marco-iannaccone",
				name: "Oltre i limiti del CMS tradizionale",
				year: "2025",
				services: "Next.js, Tailwind, Motion, Sanity",
				description:
					"Riprogettazione architetturale e di performance per un portfolio artistico",
				metaDescription:
					"Migrazione headless da WordPress a Next.js e Sanity CMS. Leggi il case study sul restyling tecnico e performante per il portfolio di un fotografo.",
				image: "/works/marco-iannaccone-01.png",
				client: "Marco Iannaccone",
				techStack: "Next.js, Tailwind, Framer Motion, Sanity CMS",
				detailBlocks: [
					{
						type: "text",
						value:
							"Il progetto ha riguardato la trasformazione radicale della presenza digitale di un fotografo professionista, migrando da un'architettura WordPress limitata a un moderno ecosistema Headless. L'esigenza era duplice: elevare la performance visiva del portfolio e semplificare l'archiviazione di un corpo di lavoro eterogeneo, che spazia dalle esposizioni internazionali alle performance artistiche, fino alla bibliografia curata dall'autore",
					},
					{
						type: "text",
						value:
							"La soluzione è un prodotto sartoriale basato su Next.js e Sanity CMS, dove la velocità di caricamento e la resa d'immagine sono diventate i pilastri dell'esperienza utente. Grazie a questo stack, ho costruito una struttura dati flessibile che permette al cliente di gestire in autonomia ogni contenuto, garantendo al contempo un'estetica minimalista e una fluidità di navigazione inarrivabile per i sistemi tradizionali.",
					},
					{
						type: "text",
						value:
							"Il risultato è una galleria digitale dove la tecnologia si mette al servizio dell’arte. Il passaggio a Sanity ha trasformato la gestione del catalogo in un processo intuitivo, mentre Next.js assicura un’indicizzazione SEO impeccabile per libri e mostre. Questo case study dimostra come la migrazione verso il 'decoupled web' non sia solo una scelta tecnica, ma un atto di cura estetica per proteggere e valorizzare il patrimonio visivo di un artista.",
					},
				],
			},
		],
		collaborations: [
			{
				slug: "upclose-studio",
				name: "Upclose studio",
				year: "2025",
				services: "Nuxt, Headless CMS",
				description: "Sviluppo front-end in Nuxt e integrazione con Headless CMS a partire da design Figma.",
				metaDescription: "Sviluppo interfacce front-end in Nuxt collegate a CMS Headless (Hygraph, Contentful).",
				image: "/work-placeholder.svg",
				client: "Upclose studio",
				techStack: "Nuxt, Hygraph, Contentful, Figma",
				agencyUrl: "https://upclose.studio/",
				detailBlocks: [
					{
						type: "text",
						value: "Details about the collaboration...",
					}
				],
			},
			{
				slug: "ribrain",
				name: "Ribrain",
				year: "2024",
				services: "WordPress, Shopify",
				description: "Sviluppo di temi custom per WordPress e Shopify con UI sartoriale creata da layout XD.",
				metaDescription: "Sviluppo e customizzazione di template premium per WordPress e Shopify.",
				image: "/work-placeholder.svg",
				client: "Ribrain",
				techStack: "WordPress, Shopify, Adobe XD",
				agencyUrl: "https://www.ribrainstudio.com/",
				detailBlocks: [
					{
						type: "text",
						value: "Details about the collaboration...",
					}
				],
			}
		],
	},
	services: {
		heading: "Servizi",
		intro:
			"Aiuto team e aziende (PMI) a trasformare idee complesse in prodotti digitali solidi, performanti e facili da scalare.",
		background:
			"Non mi limito a scrivere codice: progetto ecosistemi web su misura dove la stabilità tecnica diventa un vantaggio competitivo, accelerando i tempi di rilascio e massimizzando la soddisfazione dell'utente finale.",
		valueEyebrow: "Come posso supportarti",
		offers: [
			{
				title: "Sviluppo Web su Misura",
				description:
					"Sviluppo interfacce front-end per SaaS, e-commerce e piattaforme complesse. Soluzioni sartoriali progettate per gestire flussi articolati con la massima chiarezza, guidando l'utente verso l'obiettivo.",
			},
			{
				title: "Architetture Scalabili",
				description:
					"Basta reinventare la ruota a ogni rilascio. Costruisco librerie di componenti coerenti (Design System) per ridurre il debito tecnico, accelerare i tempi di sviluppo e far scalare il tuo prodotto in sicurezza.",
			},
			{
				title: "Performance & Accessibilità",
				description:
					"Intervengo sul codice per eliminare i colli di bottiglia. Miglioro i tempi di caricamento, la stabilità dei rilasci e l'inclusività della piattaforma, garantendo un'esperienza utente e un posizionamento SEO impeccabili.",
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

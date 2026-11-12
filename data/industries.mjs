/** Editorial category guidance; availability and project suitability require confirmation. */
export default [
  {
    id: 'aggregates', group: 'industries',
    en: {
      slug: 'industries/aggregates', title: 'Screening for aggregates',
      description: 'Explore screening considerations for sand, gravel and crushed stone. Discuss material, product sizes and site requirements for a Canadian project.',
      eyebrow: 'INDUSTRIES / AGGREGATES',
      intro: 'Turn a material description into a clear equipment enquiry. Sand, gravel and crushed stone each place different demands on the screen, feed arrangement and discharge system.',
      sections: [
        { title: 'Start with the products you need', body: 'Specify the desired size fractions and how each will be used. A screen configuration for separating sand from gravel may differ from one used to produce several crushed-stone products.', items: ['Feed material, largest particle and gradation', 'Target product sizes and number of fractions', 'Moisture, clay content and expected feed consistency'] },
        { title: 'Plan the whole material flow', body: 'Consider the loader or crusher feeding the screen, stockpile space and how oversize will be handled. Conveyors, access for cleaning and a workable traffic pattern belong in the same discussion as the screening unit.' },
        { title: 'Validate the application before selecting', body: 'Aperture alone does not establish production capacity or finished-product quality. Feed characteristics, screen media and operating conditions matter. Request a configuration review and confirm any required performance evidence with the proposed supplier.' }
      ],
      faq: [
        { q: 'Which screener is best for aggregate processing?', a: 'The right choice depends on feed size, material condition, target fractions and the process around the screen. Share these details before comparing mobile, vibrating or stationary arrangements.' },
        { q: 'Can I request several product sizes?', a: 'Yes. List every required size range and expected use in your enquiry. The number of screen decks, media and discharge arrangements must be confirmed for the proposed equipment.' }
      ]
    },
    fr: {
      slug: 'industries/granulats', title: 'Criblage des granulats',
      description: 'Précisez vos besoins de criblage du sable, du gravier et de la pierre concassée : matériaux, fractions recherchées et contraintes du chantier.',
      eyebrow: 'INDUSTRIES / GRANULATS',
      intro: 'Transformez la description de votre matériau en une demande précise. Le sable, le gravier et la pierre concassée imposent des exigences différentes au crible, à l’alimentation et à l’évacuation.',
      sections: [
        { title: 'Définir les produits recherchés', body: 'Précisez les fractions granulométriques voulues et leur utilisation. La séparation du sable et du gravier peut demander une configuration différente de celle servant à produire plusieurs calibres de pierre concassée.', items: ['Matériau à traiter, plus gros morceau et granulométrie', 'Calibres recherchés et nombre de fractions', 'Humidité, teneur en argile et régularité de l’alimentation'] },
        { title: 'Planifier le cheminement des matériaux', body: 'Tenez compte de la chargeuse ou du concasseur qui alimente le crible, de l’espace de stockage et du traitement des refus. Les convoyeurs, l’accès pour le nettoyage et la circulation doivent faire partie de la réflexion.' },
        { title: 'Valider l’application avant de choisir', body: 'L’ouverture des mailles ne détermine pas à elle seule le débit ni la qualité du produit fini. Les caractéristiques du matériau, les surfaces de criblage et les conditions d’exploitation comptent. Demandez une étude de configuration et confirmez les données de rendement requises auprès du fournisseur proposé.' }
      ],
      faq: [
        { q: 'Quel crible convient le mieux aux granulats?', a: 'Le choix dépend de la taille et de l’état du matériau, des fractions visées et du procédé qui entoure le crible. Transmettez ces renseignements avant de comparer les configurations mobiles, vibrantes ou fixes.' },
        { q: 'Puis-je demander plusieurs calibres de produits?', a: 'Oui. Indiquez chaque plage granulométrique et son usage prévu dans votre demande. Le nombre d’étages, les surfaces de criblage et les sorties doivent être confirmés pour l’équipement proposé.' }
      ]
    }
  },
  {
    id: 'construction', group: 'industries',
    en: {
      slug: 'industries/construction', title: 'Screening for construction projects',
      description: 'Plan screening for excavation and construction materials. Review site access, material suitability, project duration and equipment requirements.',
      eyebrow: 'INDUSTRIES / CONSTRUCTION',
      intro: 'Construction screening starts with the jobsite: what is coming out of the ground, what can be separated, and where the resulting material will go.',
      sections: [
        { title: 'Characterize the excavated material', body: 'Describe soil, rock, demolition-derived material and any known contaminants separately. Screening separates material by size; it does not establish that a material is clean or approved for reuse.', items: ['Approximate quantity and largest feed size', 'Target use for screened material and oversize', 'Known moisture, debris or contamination concerns'] },
        { title: 'Match equipment to the working area', body: 'Provide access width, ground conditions, loading equipment and available stockpile space. A compact machine may help on a constrained site, but its suitability and production rate still depend on the actual feed.' },
        { title: 'Compare project-based options', body: 'Purchase, rental and on-site screening enquiries can be considered against project duration and operating resources. Transport, unloading, operator responsibilities and local requirements should be confirmed before scheduling.' }
      ],
      faq: [
        { q: 'Does screening make excavated soil suitable for reuse?', a: 'No. Screening changes size distribution and can remove some oversized debris. Testing, material classification and applicable reuse requirements remain separate matters.' },
        { q: 'What should I send for a jobsite screening enquiry?', a: 'Send the material description, approximate volume, location, desired separation, access limitations and project dates. Photos can help clarify the feed and working area.' }
      ]
    },
    fr: {
      slug: 'industries/construction', title: 'Criblage pour les chantiers de construction',
      description: 'Planifiez le criblage de matériaux d’excavation et de chantier selon l’accès, les caractéristiques du matériau et la durée des travaux.',
      eyebrow: 'INDUSTRIES / CONSTRUCTION',
      intro: 'Sur un chantier, le choix du criblage commence par trois questions : quels matériaux sont excavés, que peut-on séparer et où iront les produits obtenus?',
      sections: [
        { title: 'Caractériser les matériaux excavés', body: 'Décrivez séparément les sols, les roches, les matériaux issus de la démolition et les contaminants connus. Le criblage sépare les matériaux selon leur taille; il ne confirme pas leur propreté ni leur admissibilité à la réutilisation.', items: ['Quantité approximative et taille maximale à l’alimentation', 'Utilisation prévue des matériaux criblés et des refus', 'Humidité, débris ou contamination connus'] },
        { title: 'Adapter l’équipement à l’espace disponible', body: 'Précisez la largeur des accès, les conditions du sol, les équipements de chargement et l’espace de stockage. Une machine compacte peut faciliter le travail sur un site restreint, mais sa pertinence et son débit dépendent du matériau réel.' },
        { title: 'Comparer les options selon le projet', body: 'L’achat, la location et le criblage sur place peuvent être étudiés selon la durée des travaux et les ressources disponibles. Le transport, le déchargement, les responsabilités d’exploitation et les exigences locales doivent être confirmés avant la planification.' }
      ],
      faq: [
        { q: 'Le criblage rend-il un sol excavé réutilisable?', a: 'Non. Il modifie la granulométrie et peut retirer certains débris surdimensionnés. Les analyses, la classification des matériaux et les exigences de réutilisation demeurent des questions distinctes.' },
        { q: 'Quels renseignements fournir pour un chantier?', a: 'Indiquez le matériau, le volume approximatif, le lieu, la séparation voulue, les contraintes d’accès et les dates. Des photos peuvent aider à comprendre le matériau et l’aire de travail.' }
      ]
    }
  },
  {
    id: 'mining', group: 'industries',
    en: {
      slug: 'industries/mining', title: 'Screening for mining applications',
      description: 'Define screening requirements for mining applications, from feed characterization to process integration, wear considerations and remote logistics.',
      eyebrow: 'INDUSTRIES / MINING',
      intro: 'A mining screening enquiry needs more than a target opening. Material characteristics, the surrounding process and site conditions all shape the equipment review.',
      sections: [
        { title: 'Define the process duty', body: 'Identify where screening sits in the flowsheet and whether the application is dry or wet. Distinguish a general category enquiry from an engineered process requirement.', items: ['Material composition, density and abrasiveness where known', 'Feed gradation, moisture and target separation', 'Required duty cycle and upstream/downstream equipment'] },
        { title: 'Consider wear and maintainability', body: 'Media selection, access for inspection and the availability of replacement components can affect equipment planning. Provide existing drawings, part numbers or maintenance requirements when they are available.' },
        { title: 'Bring site constraints into the enquiry', body: 'Remote access, transport dimensions, utilities and site-specific safety requirements need early review. Capacity, materials of construction and compliance must be documented for a proposed machine; no category description substitutes for that review.' }
      ],
      faq: [
        { q: 'Can a category page establish a screen’s mining suitability?', a: 'No. Suitability requires an application-specific review of the feed, process duty, proposed machine specifications and site requirements.' },
        { q: 'Can I enquire about replacement screening components?', a: 'Yes. Provide manufacturer, model, serial number and component references when available. Compatibility and availability must be confirmed before ordering.' }
      ]
    },
    fr: {
      slug: 'industries/exploitation-miniere', title: 'Criblage pour les applications minières',
      description: 'Définissez vos besoins de criblage minier : caractéristiques du minerai, intégration au procédé, usure, entretien et logistique du site.',
      eyebrow: 'INDUSTRIES / EXPLOITATION MINIÈRE',
      intro: 'Une demande de criblage minier exige plus qu’une ouverture de maille. Les caractéristiques du matériau, le procédé environnant et les conditions du site orientent l’étude de l’équipement.',
      sections: [
        { title: 'Définir le rôle dans le procédé', body: 'Indiquez la place du criblage dans le schéma de traitement et précisez s’il s’agit d’une application à sec ou par voie humide. Distinguez une recherche générale d’équipement d’un besoin d’ingénierie de procédé.', items: ['Composition, densité et abrasivité du matériau, si connues', 'Granulométrie, humidité et séparation recherchée', 'Régime de fonctionnement et équipements en amont et en aval'] },
        { title: 'Prévoir l’usure et l’entretien', body: 'Le choix des surfaces de criblage, l’accès pour l’inspection et la disponibilité des composants de rechange influencent la planification. Joignez les dessins, les numéros de pièces ou les exigences d’entretien disponibles.' },
        { title: 'Intégrer les contraintes du site', body: 'Les accès éloignés, le gabarit de transport, les services disponibles et les exigences de sécurité du site doivent être étudiés tôt. La capacité, les matériaux de fabrication et la conformité doivent être documentés pour la machine proposée; une description générale ne remplace pas cette validation.' }
      ],
      faq: [
        { q: 'Une page de catégorie confirme-t-elle l’aptitude d’un crible à une application minière?', a: 'Non. Il faut étudier le matériau, le rôle dans le procédé, les caractéristiques de la machine proposée et les exigences du site.' },
        { q: 'Puis-je demander des composants de criblage de rechange?', a: 'Oui. Fournissez le fabricant, le modèle, le numéro de série et les références des composants, si disponibles. La compatibilité et la disponibilité doivent être confirmées avant la commande.' }
      ]
    }
  },
  {
    id: 'recycling', group: 'industries',
    en: {
      slug: 'industries/recycling', title: 'Screening for recycling and material recovery',
      description: 'Explore size separation for recycling streams. Describe feed variability, contamination, target fractions and downstream sorting requirements.',
      eyebrow: 'INDUSTRIES / RECYCLING',
      intro: 'Recycling streams vary from one load to the next. A useful equipment enquiry describes the mixture, the target fractions and the steps before and after screening.',
      sections: [
        { title: 'Describe the stream, including the difficult parts', body: 'Include bulky pieces, flexible material, moisture and fines rather than describing only the recoverable fraction. Wood, mixed construction material and other recovery streams may require different screening arrangements.', items: ['Typical and worst-case feed composition', 'Oversize, fines and contamination to be managed', 'Target fractions and downstream destinations'] },
        { title: 'Separate size from material identity', body: 'A screen separates by size. Magnets, manual sorting, air separation or other processes may still be needed to address composition and quality. Review the full recovery line before selecting a screening unit.' },
        { title: 'Plan cleaning and changeovers', body: 'Ask how the proposed equipment handles media access, wrapping and material build-up. A description of feed variability helps identify cleaning needs and supports a more useful application review.' }
      ],
      faq: [
        { q: 'Will a screen remove every contaminant?', a: 'No. Contaminants can share the same size as valuable material. Additional sorting and material-quality checks may be needed for the intended end use.' },
        { q: 'What information helps assess a mixed recycling stream?', a: 'Provide photos, the typical mixture, maximum piece size, moisture, desired fractions and known troublesome materials. State whether the feed changes by season or source.' }
      ]
    },
    fr: {
      slug: 'industries/recyclage', title: 'Criblage pour le recyclage et la récupération',
      description: 'Étudiez la séparation granulométrique des matières à recycler : variabilité, contaminants, fractions visées et besoins de tri en aval.',
      eyebrow: 'INDUSTRIES / RECYCLAGE',
      intro: 'Les matières à recycler varient d’un chargement à l’autre. Une demande utile décrit le mélange, les fractions recherchées et les étapes qui précèdent et suivent le criblage.',
      sections: [
        { title: 'Décrire le flux, y compris ses difficultés', body: 'Mentionnez les morceaux volumineux, les matières souples, l’humidité et les fines, pas seulement la fraction valorisable. Le bois, les résidus de construction mélangés et les autres matières peuvent exiger des configurations différentes.', items: ['Composition habituelle et cas les plus difficiles', 'Refus, fines et contaminants à gérer', 'Fractions recherchées et destinations en aval'] },
        { title: 'Distinguer la taille de la nature du matériau', body: 'Un crible sépare selon la taille. Des aimants, du tri manuel, une séparation aéraulique ou d’autres procédés peuvent rester nécessaires pour la composition et la qualité. Examinez l’ensemble de la chaîne avant de choisir le crible.' },
        { title: 'Prévoir le nettoyage et les changements de matière', body: 'Demandez comment l’équipement proposé facilite l’accès aux surfaces de criblage et gère l’enroulement de matières ou les accumulations. Une description de la variabilité aide à cerner les besoins de nettoyage et à mieux étudier l’application.' }
      ],
      faq: [
        { q: 'Un crible élimine-t-il tous les contaminants?', a: 'Non. Certains contaminants ont la même taille que les matières valorisables. Des étapes de tri et des contrôles de qualité supplémentaires peuvent être nécessaires selon l’usage prévu.' },
        { q: 'Comment décrire un mélange de matières à recycler?', a: 'Fournissez des photos, la composition habituelle, la taille maximale, l’humidité, les fractions voulues et les matières problématiques. Précisez si le mélange varie selon la saison ou la provenance.' }
      ]
    }
  },
  {
    id: 'landscaping-and-topsoil', group: 'industries',
    en: {
      slug: 'industries/landscaping-and-topsoil', title: 'Screening for landscaping and topsoil',
      description: 'Compare screening considerations for topsoil and landscape materials, including moisture, roots, stones, finished texture and stockpile handling.',
      eyebrow: 'INDUSTRIES / LANDSCAPING & TOPSOIL',
      intro: 'For topsoil and landscape materials, the condition of the feed can matter as much as its volume. Moisture, roots and stones affect how consistently a screen can separate it.',
      sections: [
        { title: 'Specify the finish you are aiming for', body: 'Describe the intended application and desired texture. Garden soil, landscape fill and other products can require different separations; screening alone does not establish agronomic quality.', items: ['Soil composition and moisture condition', 'Stone size, roots and other debris', 'Desired finished size and planned use'] },
        { title: 'Account for changing material conditions', body: 'Wet or cohesive soil can blind openings and reduce effective separation. Explain whether material will be screened as received, dried, blended or pre-processed so equipment options can be reviewed realistically.' },
        { title: 'Plan loading, movement and storage', body: 'Include the loader size, available work area and stockpile arrangement. Purchase or rental enquiries should also state how often the equipment will move between sites and the expected operating season.' }
      ],
      faq: [
        { q: 'Can wet topsoil be screened?', a: 'Some conditions are more difficult than others. Moisture, clay content, desired opening and the proposed machine all affect suitability. Describe the actual feed rather than assuming a dry-material production rate.' },
        { q: 'Does screening determine soil quality?', a: 'No. Screening separates sizes and can remove oversized debris. Nutrient content, contamination and suitability for an intended growing use require separate assessment.' }
      ]
    },
    fr: {
      slug: 'industries/amenagement-paysager-et-terre-vegetale', title: 'Criblage pour l’aménagement paysager et la terre végétale',
      description: 'Planifiez le criblage de terre végétale : humidité, racines, pierres, texture finale, chargement et gestion des piles de matériaux.',
      eyebrow: 'INDUSTRIES / AMÉNAGEMENT PAYSAGER',
      intro: 'Pour la terre végétale et les matériaux paysagers, l’état du matériau peut compter autant que le volume. L’humidité, les racines et les pierres influencent la régularité de la séparation.',
      sections: [
        { title: 'Préciser le résultat recherché', body: 'Décrivez l’application et la texture voulue. La terre de jardin, les remblais paysagers et les autres produits peuvent nécessiter des séparations différentes; le criblage seul ne confirme pas la qualité agronomique.', items: ['Composition du sol et état d’humidité', 'Taille des pierres, racines et autres débris', 'Calibre final recherché et usage prévu'] },
        { title: 'Tenir compte des variations du matériau', body: 'Un sol humide ou cohésif peut colmater les ouvertures et nuire à la séparation. Précisez si le matériau sera criblé tel quel, séché, mélangé ou prétraité afin d’étudier les options de façon réaliste.' },
        { title: 'Planifier le chargement et le stockage', body: 'Indiquez la taille de la chargeuse, l’aire de travail et la disposition des piles. Pour l’achat ou la location, précisez aussi la fréquence des déplacements entre les sites et la saison d’exploitation prévue.' }
      ],
      faq: [
        { q: 'Peut-on cribler une terre végétale humide?', a: 'Certaines conditions sont plus difficiles que d’autres. L’humidité, la teneur en argile, l’ouverture voulue et la machine proposée influencent la faisabilité. Décrivez le matériau réel plutôt que de supposer un débit de matière sèche.' },
        { q: 'Le criblage détermine-t-il la qualité d’un sol?', a: 'Non. Il sépare les calibres et peut retirer les débris surdimensionnés. Les éléments nutritifs, la contamination et l’aptitude à un usage de culture exigent une évaluation distincte.' }
      ]
    }
  },
  {
    id: 'agriculture-and-compost', group: 'industries',
    en: {
      slug: 'industries/agriculture-and-compost', title: 'Screening for agriculture and compost',
      description: 'Define compost and agricultural material screening needs, including maturity, moisture, oversize recovery, cleanliness and seasonal scheduling.',
      eyebrow: 'INDUSTRIES / AGRICULTURE & COMPOST',
      intro: 'Compost and other agricultural materials can change with moisture, preparation and season. Define the feed and final use before comparing screening equipment.',
      sections: [
        { title: 'Describe the organic material', body: 'State the source, condition and processing stage. Finished compost, woody oversize and other organic mixtures may behave differently and should not be treated as interchangeable applications.', items: ['Feed composition, moisture and processing stage', 'Target finished fraction and oversize handling', 'Known plastic, stone or other contamination'] },
        { title: 'Look beyond the screen opening', body: 'Screening can separate coarse material for further processing, but it does not certify compost maturity or product cleanliness. Include your quality requirements and any additional sorting steps in the enquiry.' },
        { title: 'Plan for the operating season', body: 'Give the expected quantity, working window, loading method and site access. For seasonal rental or service requests, dates and availability must be confirmed before making a production plan.' }
      ],
      faq: [
        { q: 'Can screening certify compost quality?', a: 'No. Screening addresses particle size. Maturity, stability, contaminants and other quality criteria require their own testing and assessment.' },
        { q: 'What should a seasonal screening enquiry include?', a: 'Provide the location, material condition, approximate quantity, required separation, operating dates and loading equipment. Note whether the oversize will be recirculated or removed.' }
      ]
    },
    fr: {
      slug: 'industries/agriculture-et-compost', title: 'Criblage pour l’agriculture et le compost',
      description: 'Définissez vos besoins de criblage du compost : état de la matière, humidité, récupération des refus, propreté et calendrier saisonnier.',
      eyebrow: 'INDUSTRIES / AGRICULTURE ET COMPOST',
      intro: 'Le compost et les autres matières agricoles changent selon l’humidité, la préparation et la saison. Définissez le matériau et son utilisation finale avant de comparer les équipements.',
      sections: [
        { title: 'Décrire la matière organique', body: 'Précisez sa provenance, son état et l’étape de traitement. Le compost fini, les refus ligneux et les autres mélanges organiques ne se comportent pas tous de la même façon.', items: ['Composition, humidité et étape du traitement', 'Fraction finale recherchée et gestion des refus', 'Présence connue de plastique, de pierres ou d’autres contaminants'] },
        { title: 'Aller au-delà de l’ouverture des mailles', body: 'Le criblage peut séparer les éléments grossiers à retraiter, mais il ne certifie ni la maturité du compost ni sa propreté. Incluez vos critères de qualité et les autres étapes de tri dans la demande.' },
        { title: 'Prévoir la saison d’exploitation', body: 'Indiquez la quantité prévue, la période de travail, le mode de chargement et les accès. Pour une demande de location ou de service saisonnier, les dates et la disponibilité doivent être confirmées avant de fixer le programme de production.' }
      ],
      faq: [
        { q: 'Le criblage certifie-t-il la qualité du compost?', a: 'Non. Il agit sur la granulométrie. La maturité, la stabilité, les contaminants et les autres critères de qualité exigent des analyses et une évaluation propres.' },
        { q: 'Que fournir pour une demande de criblage saisonnier?', a: 'Précisez le lieu, l’état de la matière, la quantité approximative, la séparation voulue, les dates et les équipements de chargement. Indiquez si les refus seront réintroduits dans le procédé ou évacués.' }
      ]
    }
  },
  {
    id: 'manufacturing', group: 'industries',
    en: {
      slug: 'industries/manufacturing', title: 'Screening for industrial manufacturing',
      description: 'Review screening needs for manufacturing processes, including particle separation, product contact, dust considerations and line integration.',
      eyebrow: 'INDUSTRIES / MANUFACTURING',
      intro: 'Manufacturing applications need an equipment review tied to the process. Particle size, product-contact requirements and integration constraints should lead the conversation.',
      sections: [
        { title: 'Define the separation task', body: 'Explain whether the goal is removing oversize, classifying several fractions or protecting a downstream process. Provide representative material information and any existing process specifications.', items: ['Material identity and relevant handling characteristics', 'Feed and target particle-size ranges', 'Required cleanliness and product-contact conditions'] },
        { title: 'Identify requirements that need engineering review', body: 'Dust, combustible material, hygiene, temperature and electrical classification can change the specification. No certification or hazardous-location suitability is implied by a general screening category.' },
        { title: 'Plan integration with the line', body: 'Provide the available footprint, inlet and outlet elevations, utilities and access for cleaning or maintenance. Confirm machine-specific construction, controls and performance against your documented requirements.' }
      ],
      faq: [
        { q: 'Are all industrial screens suitable for food or hazardous materials?', a: 'No. Hygiene, material compatibility, dust hazards and certification requirements must be assessed for the exact application and equipment. Do not infer suitability from a category name.' },
        { q: 'Can an enquiry include an existing production line?', a: 'Yes. Include process drawings, connection points, space limitations and the reason for the change. Sensitive production information can be discussed before sharing detailed documents.' }
      ]
    },
    fr: {
      slug: 'industries/fabrication-industrielle', title: 'Criblage pour la fabrication industrielle',
      description: 'Étudiez les besoins de criblage d’un procédé : granulométrie, contact avec le produit, poussières et intégration à la chaîne de fabrication.',
      eyebrow: 'INDUSTRIES / FABRICATION INDUSTRIELLE',
      intro: 'Dans la fabrication, l’étude de l’équipement doit suivre le procédé. La granulométrie, les exigences de contact avec le produit et les contraintes d’intégration orientent la discussion.',
      sections: [
        { title: 'Définir la séparation recherchée', body: 'Expliquez s’il faut retirer les éléments surdimensionnés, classer plusieurs fractions ou protéger une étape en aval. Fournissez des renseignements représentatifs sur le matériau et les spécifications existantes.', items: ['Nature du matériau et caractéristiques de manutention pertinentes', 'Granulométrie à l’entrée et calibres recherchés', 'Exigences de propreté et conditions de contact avec le produit'] },
        { title: 'Repérer les besoins d’étude technique', body: 'Les poussières, les matières combustibles, l’hygiène, la température et la classification électrique peuvent modifier la spécification. Une catégorie générale de criblage ne suppose aucune certification ni aptitude aux emplacements dangereux.' },
        { title: 'Prévoir l’intégration à la chaîne', body: 'Indiquez l’espace disponible, les hauteurs d’entrée et de sortie, les services disponibles et les accès pour le nettoyage ou l’entretien. Confirmez la construction, les commandes et le rendement de la machine selon vos exigences documentées.' }
      ],
      faq: [
        { q: 'Tous les cribles industriels conviennent-ils aux aliments ou aux matières dangereuses?', a: 'Non. L’hygiène, la compatibilité des matériaux, les risques liés aux poussières et les certifications doivent être évalués pour l’application et l’équipement précis. Le nom d’une catégorie ne confirme pas leur aptitude.' },
        { q: 'Puis-je présenter une chaîne de production existante?', a: 'Oui. Joignez les schémas de procédé, les points de raccordement, les contraintes d’espace et la raison du changement. Il est possible de discuter des renseignements sensibles avant de transmettre des documents détaillés.' }
      ]
    }
  },
  {
    id: 'ontario', group: 'locations',
    en: {
      slug: 'locations/ontario', title: 'Screening equipment enquiries in Ontario',
      description: 'Plan an Ontario screening project with site-specific material, access and transport details for urban construction, aggregate or northern work.',
      eyebrow: 'LOCATIONS / ONTARIO',
      intro: 'An Ontario enquiry may involve a constrained urban excavation, an aggregate operation or a remote project. The useful starting point is the actual material and site, not a city label.',
      sections: [
        { title: 'Urban work and material movement', body: 'For projects in built-up areas, describe access limits, working space, nearby receptors and how material will enter and leave the site. Screening does not replace the testing, documentation or handling requirements that may apply to excavated soil.' },
        { title: 'Aggregate and seasonal applications', body: 'Provide the required fractions, feed variability and intended production period. Wet ground, freezing conditions and changing material moisture can affect access and processing; include the planned operating window rather than assuming year-round conditions.' },
        { title: 'Regional transport and remote access', body: 'Give the delivery postal code, unloading arrangements and any route or site restrictions. For northern or remote work, explain the access schedule and support requirements. Equipment, transport, rental and service availability are confirmed for each enquiry.', items: ['Municipality, postal code and delivery location', 'Material, target separation and approximate quantity', 'Project dates, loading equipment and site access'] }
      ],
      faq: [
        { q: 'Does SCREENERS.CA have an Ontario office or equipment yard?', a: 'No local office or yard is listed. Contact SCREENERS.CA for a project-specific availability review; do not assume equipment is stocked near your site.' },
        { q: 'Should I include excess-soil information?', a: 'Yes, when relevant. Describe known material classification and handling constraints. Equipment selection does not determine whether soil can be moved, reused or accepted at a destination.' }
      ]
    },
    fr: {
      slug: 'regions/ontario', title: 'Demandes d’équipement de criblage en Ontario',
      description: 'Préparez un projet de criblage en Ontario : matériau, accès et transport pour un chantier urbain, une exploitation de granulats ou un site éloigné.',
      eyebrow: 'RÉGIONS / ONTARIO',
      intro: 'En Ontario, une demande peut viser une excavation urbaine, une exploitation de granulats ou un projet éloigné. Le point de départ utile est le matériau et le site réels.',
      sections: [
        { title: 'Travaux urbains et déplacement des matériaux', body: 'En milieu bâti, décrivez les limites d’accès, l’espace de travail, le voisinage et les mouvements de matériaux. Le criblage ne remplace pas les exigences d’analyse, de documentation ou de manutention pouvant s’appliquer aux sols excavés.' },
        { title: 'Granulats et applications saisonnières', body: 'Précisez les fractions voulues, la variabilité du matériau et la période de production. Les sols détrempés, le gel et les variations d’humidité peuvent influer sur les accès et le traitement. Indiquez la période prévue sans supposer des conditions constantes toute l’année.' },
        { title: 'Transport régional et accès éloignés', body: 'Fournissez le code postal de livraison, les modalités de déchargement et les restrictions d’itinéraire ou de chantier. Pour le Nord et les sites éloignés, précisez les périodes d’accès et les besoins de soutien. La disponibilité des équipements, du transport, de la location et des services est confirmée pour chaque demande.', items: ['Municipalité, code postal et lieu de livraison', 'Matériau, séparation voulue et quantité approximative', 'Dates, équipements de chargement et accès au site'] }
      ],
      faq: [
        { q: 'SCREENERS.CA possède-t-elle un bureau ou une cour d’équipement en Ontario?', a: 'Aucun bureau ni aucune cour locale n’est indiqué. Communiquez avec SCREENERS.CA pour vérifier la disponibilité selon votre projet; ne supposez pas qu’un équipement est stocké près du site.' },
        { q: 'Dois-je fournir les renseignements sur les sols excédentaires?', a: 'Oui, s’ils sont pertinents. Décrivez la classification connue et les contraintes de manutention. Le choix d’un équipement ne détermine pas si un sol peut être déplacé, réutilisé ou accepté à destination.' }
      ]
    }
  },
  {
    id: 'quebec', group: 'locations',
    en: {
      slug: 'locations/quebec', title: 'Screening equipment enquiries in Quebec',
      description: 'Prepare a Quebec screening enquiry in English or French with material, seasonal conditions, transport access and project requirements.',
      eyebrow: 'LOCATIONS / QUEBEC',
      intro: 'Describe your Quebec screening project in English or French. Material condition, the operating season and the delivery location are central to a useful equipment review.',
      sections: [
        { title: 'Describe the material and its destination', body: 'State whether the application involves aggregates, soil, compost or recovered material. Include target sizes and intended use. Screening does not establish environmental classification or authorize material reuse.' },
        { title: 'Build seasonal conditions into the request', body: 'Freezing temperatures, spring thaw and wet feed can change handling and access. Provide the intended operating dates, ground preparation and any restrictions affecting heavy equipment movement.' },
        { title: 'Clarify language, delivery and remote logistics', body: 'Let us know your preferred working language and documentation needs. Include the exact delivery location, unloading method and access limitations; for remote sites, outline the travel or seasonal access schedule. Availability and project scope require confirmation.', items: ['Material description and required separation', 'Municipality, delivery details and site access', 'Operating dates and preferred language'] }
      ],
      faq: [
        { q: 'Can I submit a screening enquiry in French?', a: 'Yes. The website and enquiry process are available in French and English. State any project-specific documentation or communication requirements in your request.' },
        { q: 'Is delivery to a remote Quebec site guaranteed?', a: 'No. Provide the exact site, access conditions and dates so transport and equipment availability can be reviewed. No local stock or delivery timeframe is assumed.' }
      ]
    },
    fr: {
      slug: 'regions/quebec', title: 'Demandes d’équipement de criblage au Québec',
      description: 'Préparez une demande de criblage au Québec en français ou en anglais : matériau, conditions saisonnières, transport et exigences du projet.',
      eyebrow: 'RÉGIONS / QUÉBEC',
      intro: 'Présentez votre projet de criblage au Québec en français ou en anglais. L’état des matériaux, la saison d’exploitation et le lieu de livraison sont essentiels à l’étude des équipements.',
      sections: [
        { title: 'Décrire le matériau et sa destination', body: 'Précisez s’il s’agit de granulats, de sols, de compost ou de matières récupérées. Indiquez les calibres voulus et l’usage prévu. Le criblage ne confirme pas la classification environnementale et n’autorise pas la réutilisation des matériaux.' },
        { title: 'Intégrer les conditions saisonnières', body: 'Le gel, le dégel printanier et l’humidité peuvent modifier la manutention et les accès. Fournissez les dates d’exploitation, la préparation du sol et les restrictions touchant le déplacement des équipements lourds.' },
        { title: 'Préciser la langue et la logistique', body: 'Indiquez votre langue de travail et vos besoins de documentation. Fournissez le lieu exact, le mode de déchargement et les limites d’accès. Pour un site éloigné, décrivez le calendrier de déplacement ou d’accès saisonnier. La disponibilité et la portée du projet doivent être confirmées.', items: ['Description du matériau et séparation recherchée', 'Municipalité, modalités de livraison et accès au site', 'Dates d’exploitation et langue de communication'] }
      ],
      faq: [
        { q: 'Puis-je présenter ma demande en français?', a: 'Oui. Le site et le processus de demande sont offerts en français et en anglais. Précisez les exigences de documentation ou de communication propres au projet.' },
        { q: 'La livraison dans une région éloignée du Québec est-elle garantie?', a: 'Non. Indiquez le site exact, les conditions d’accès et les dates afin de vérifier le transport et la disponibilité. Aucun stock local ni délai de livraison n’est présumé.' }
      ]
    }
  },
  {
    id: 'british-columbia', group: 'locations',
    en: {
      slug: 'locations/british-columbia', title: 'Screening equipment enquiries in British Columbia',
      description: 'Plan a British Columbia screening enquiry around coastal moisture, Interior conditions, route access and project-specific transport requirements.',
      eyebrow: 'LOCATIONS / BRITISH COLUMBIA',
      intro: 'A screening project on the coast can present different feed and access conditions from one in the Interior. Provide site-specific details so equipment and logistics can be reviewed together.',
      sections: [
        { title: 'Distinguish coastal and Interior conditions', body: 'Describe the moisture of the feed and the planned season. Wet soil or organic material can behave differently from dry aggregate, while freezing conditions can affect handling. Regional climate is a planning consideration, not a substitute for a material description.' },
        { title: 'Explain the route to the site', body: 'Include route constraints, steep or unpaved access, unloading space and ground preparation. If the project involves an island or remote destination, identify ferry or transfer arrangements that must be considered in the transport review.' },
        { title: 'Define the process and project window', body: 'Whether the enquiry concerns aggregate, construction material or organics, provide target fractions and expected quantities. State the required dates and loading resources. Equipment suitability, rental options, transport and any on-site services remain subject to confirmation.', items: ['Material condition, largest feed size and target fractions', 'Site postal code, route limits and unloading method', 'Required dates and planned operating arrangement'] }
      ],
      faq: [
        { q: 'Can I enquire about an island or remote project?', a: 'Yes. Include the exact location, access schedule and transfer requirements. Transport feasibility and availability must be reviewed before any delivery commitment.' },
        { q: 'Does SCREENERS.CA list a British Columbia rental fleet?', a: 'No local fleet or stock is claimed. Submit the equipment type and project dates to request availability for your location.' }
      ]
    },
    fr: {
      slug: 'regions/colombie-britannique', title: 'Demandes d’équipement de criblage en Colombie-Britannique',
      description: 'Planifiez le criblage en Colombie-Britannique selon l’humidité côtière, les conditions de l’intérieur, les accès et les besoins de transport.',
      eyebrow: 'RÉGIONS / COLOMBIE-BRITANNIQUE',
      intro: 'Un projet côtier peut présenter des matériaux et des accès différents d’un projet dans l’intérieur de la province. Fournissez les détails du site pour étudier ensemble l’équipement et la logistique.',
      sections: [
        { title: 'Distinguer les conditions côtières et intérieures', body: 'Décrivez l’humidité du matériau et la saison prévue. Un sol ou une matière organique humide peut se comporter autrement qu’un granulat sec, et le gel peut compliquer la manutention. Le climat régional aide à planifier, mais ne remplace pas la description du matériau.' },
        { title: 'Décrire le trajet jusqu’au site', body: 'Précisez les limites d’itinéraire, les accès en pente ou non pavés, l’espace de déchargement et la préparation du sol. Pour une île ou une destination éloignée, indiquez les traversiers ou transbordements à prévoir dans l’étude du transport.' },
        { title: 'Définir le procédé et la période de travail', body: 'Pour des granulats, des matériaux de construction ou des matières organiques, précisez les fractions et les quantités attendues. Indiquez les dates et les moyens de chargement. L’aptitude de l’équipement, la location, le transport et les services sur place restent à confirmer.', items: ['État du matériau, taille maximale et fractions voulues', 'Code postal, limites d’itinéraire et mode de déchargement', 'Dates et organisation de l’exploitation'] }
      ],
      faq: [
        { q: 'Puis-je présenter un projet insulaire ou éloigné?', a: 'Oui. Indiquez le lieu exact, les périodes d’accès et les besoins de transfert. La faisabilité du transport et la disponibilité doivent être étudiées avant tout engagement de livraison.' },
        { q: 'SCREENERS.CA présente-t-elle une flotte de location en Colombie-Britannique?', a: 'Aucune flotte locale ni aucun stock n’est annoncé. Transmettez le type d’équipement et les dates pour vérifier la disponibilité à votre emplacement.' }
      ]
    }
  }
];

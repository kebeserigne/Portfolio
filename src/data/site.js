// ============================================================
// FICHIER UNIQUE À ÉDITER POUR TOUT TON CONTENU
// ============================================================

export const profil = {
  nom: "Serigne KEBE",
  titre: "Étudiant BUT Science des Données — parcours EMS",
  sousTitre: "Programmeur Statisticien · Futur ingénieur Data & IA",
  accroche:
    "J'aime transformer des données complexes en outils clairs et utiles. En alternance chez LYSARC, je conçois des visualisations et des analyses statistiques pour la recherche clinique.",
  email: "serignemodoumaikebe@gmail.com",      
  linkedin: "https://www.linkedin.com/in/kebe-serigne/",
  github: "https://github.com/kebeserigne",  
  cv: "/cv.pdf",
  photo: "/photo.jpg", // mets ta photo dans public/photo.jpg
};

// ------------------------------------------------------------
// PAGE "À PROPOS" — sections dépliables
// ------------------------------------------------------------
export const aProposIntro =
  "Après un Bac Scientifique à Dakar et un passage en classe préparatoire, j'ai rejoint le BUT Science des Données à Grenoble. Un échange en datavisualisation à Prague et une alternance en biostatistique chez LYSARC ont confirmé mon goût pour la data appliquée à des problèmes réels.";

export const aProposSections = [
  {
    titre: "Parcours académique",
    icone: "school",
    items: [
      "BUT Science des Données, parcours EMS — IUT2 Grenoble (en cours)",
      "Échange en datavisualisation — Université d'Économie et de Statistiques de Prague",
      "Classe préparatoire MPCI (L1)",
      "Bac Scientifique — Dakar",
    ],
  },
  {
    titre: "Expérience professionnelle",
    icone: "briefcase",
    items: [
      "Alternance — Programmeur Statisticien chez LYSARC (Lyon)",
      "Stage — Traitement de données pharmaceutiques au CHU Grenoble (labo TIMC)",
    ],
  },
  {
    titre: "Centres d'intérêt",
    icone: "heart",
    items: [
      "Datavisualisation et design d'interfaces",
      "Statistiques appliquées à la santé",
      " Mangas : Kingdom & Naturo & Classroom of Elite",
      // Ajoute / modifie tes vrais centres d'intérêt ici
    ],
  },
];

// ------------------------------------------------------------
// PAGE "COMPÉTENCES" — les 4 compétences EMS
// niveau = nombre d'étoiles sur 5 (ajuste selon ton ressenti)
// ------------------------------------------------------------
export const competences = [
  {
    numero: "01",
    titre: "Traiter des données à des fins décisionnelles",
    niveau: 4,
    description:
      "Collecter, nettoyer et structurer les données pour les rendre exploitables et fiables.",
    amelioration: ["Bases de données à très grande échelle", "Automatisation des pipelines"],
    projets: ["Application Shiny LYSARC", "Pipeline CHU Grenoble"],
    entreprise: ["Programmeur Statisticien chez LYSARC"],
    techs: ["R", "SAS", "SQL"],
  },
  {
    numero: "02",
    titre: "Analyser statistiquement les données",
    niveau: 4,
    description:
      "Décrire, explorer et restituer les données par des analyses statistiques et des visualisations claires.",
    amelioration: ["Méthodes de survie avancées", "Modèles bayésiens"],
    projets: ["Suite de visualisations d'effets indésirables", "Application Shiny LYSARC"],
    entreprise: ["Programmeur Statisticien chez LYSARC"],
    techs: ["R", "ggplot2", "plotly"],
  },
  {
    numero: "03",
    titre: "Valoriser une production dans un contexte professionnel",
    niveau: 4,
    description:
      "Communiquer les résultats via des rapports, des applications et des restitutions orales adaptées au public.",
    amelioration: ["Storytelling data avancé", "Déploiement d'applications en production"],
    projets: ["Application Shiny LYSARC", "Rapport et soutenance d'alternance"],
    entreprise: ["Programmeur Statisticien chez LYSARC"],
    techs: ["Shiny", "R Markdown"],
  },
  {
    numero: "04",
    titre: "Modéliser les données dans un cadre statistique",
    niveau: 3,
    description:
      "Choisir et appliquer le modèle statistique adapté à la situation (compétence spécifique au parcours EMS).",
    amelioration: ["Machine learning", "Sélection de modèles complexes"],
    projets: ["Comparaison de bras de traitement (GLM Poisson, IRR)"],
    entreprise: ["Programmeur Statisticien chez LYSARC"],
    techs: ["R", "GLM Poisson", "Biostatistique"],
  },
];

// ------------------------------------------------------------
// COMPÉTENCES TECHNIQUES par catégories (style image 9)
// ------------------------------------------------------------
export const techCategories = [
  {
    nom: "Data Science & Analyse",
    items: ["R", "Python", "SAS", "Jupyter", "Power BI", "SQL"],
  },
  {
    nom: "Data Visualisation",
    items: ["ggplot2", "plotly", "ggiraph", "Shiny", "R Markdown"],
  },
  {
    nom: "Statistiques",
    items: ["GLM Poisson", "Tests statistiques", "IRR", "Régression"],
  },
  {
    nom: "Outils",
    items: ["Git", "RStudio", "GitHub", "VS Code"],
  },
  {
    nom: "Langues",
    items: ["Français", "Anglais (B1)"],
  },
];

// ------------------------------------------------------------
// PAGE "SAÉ" — à compléter (S5 et S6)
// ------------------------------------------------------------
export const saes = [
  {
    titre: "SAÉ à compléter",
    annee: "S5",
    competence: "Compétence visée",
    description:
      "Décris ici ce que tu as concrètement réalisé : sujet, données, outils, résultat.",
    image: "", // ex: "/saes/sae1.png"
  },
  // Duplique pour chaque SAÉ S5 et S6
];

// ------------------------------------------------------------
// PAGE "EXPÉRIENCES PRO" (stage + alternance)
// ------------------------------------------------------------
export const experiences = [
  {
    poste: "Programmeur Statisticien — Alternance",
    structure: "LYSARC (Pôle Biométrie, Département de Biostatistique), Lyon",
    periode: "Septembre 2025 — Juillet 2026",
    description: `Contexte & environnement
Pendant 12 mois, j'ai effectué mon alternance en tant que Programmeur Statisticien au sein du département de biostatistique de LYSARC (Lymphoma Academic Research Organisation), une organisation académique française spécialisée dans la recherche clinique contre les cancers du sang. Intégré à une équipe composée de biostatisticiens, de gestionnaires de données et de médecins, j'ai travaillé dans un cadre rigoureux où la qualité des analyses doit répondre aux exigences des autorités de santé internationales.
Ma mission tournait autour d'un sujet central en médecine : la sécurité des patients dans les essais cliniques. Concrètement, quand un médicament est testé sur des patients, il faut surveiller en permanence les effets secondaires qui apparaissent — les classer, les mesurer, les comparer d'un groupe de patients à l'autre — pour s'assurer que le traitement ne cause pas plus de mal que de bien. C'est précisément ce domaine que mes travaux ont cherché à outiller et à rendre plus efficace.

Mission 1 — Représenter visuellement les effets secondaires
La première grande mission de mon alternance a consisté à créer en R une série d'outils graphiques permettant d'explorer et de visualiser les effets secondaires observés chez les patients d'un essai clinique. Là où les équipes devaient auparavant produire chaque graphique à la main, de façon répétitive et chronophage, l'objectif était de disposer de fonctions prêtes à l'emploi, fiables et réutilisables d'un essai à l'autre.
J'ai ainsi développé plusieurs types de représentations complémentaires : des graphiques en barres classant les effets secondaires du plus fréquent au moins fréquent, des courbes de survie montrant à quel moment dans le temps ces effets apparaissent chez les patients, des graphiques mosaïques croisant deux caractéristiques en même temps sur une seule image, des graphiques de suivi individuel permettant de voir l'évolution de chaque patient au fil des cycles de traitement, et enfin des représentations circulaires en couches — appelées sunburst — qui organisent les effets secondaires selon leur catégorie médicale et leur terme précis, avec des couleurs et des informations interactives au survol de la souris.
Chaque outil a été conçu pour être rigoureux sur le plan statistique : les calculs de fréquence sont toujours faits sur l'ensemble des patients, indépendamment des filtres appliqués ensuite, ce qui garantit que les pourcentages affichés restent justes quelle que soit la sélection. Tous les graphiques peuvent être exportés en plusieurs formats d'image pour être intégrés directement dans des rapports officiels.

Mission 2 — Comparer statistiquement deux groupes de patients
La deuxième mission a porté sur la comparaison des effets secondaires entre les différents groupes de traitement d'un essai clinique — par exemple, comparer les patients ayant reçu le médicament testé à ceux ayant reçu le traitement de référence.
Pour cela, j'ai développé un moteur de calcul automatique qui, à partir des données brutes, produit l'ensemble des indicateurs statistiques utiles : la différence de fréquence entre les deux groupes, le rapport de chances mesurant combien de fois un effet est plus probable dans un groupe que dans l'autre, les intervalles de confiance encadrant ces estimations, et des tests statistiques permettant de distinguer une vraie différence d'un simple hasard. Lorsque certains effets secondaires sont très rares et apparaissent chez très peu de patients, des ajustements mathématiques sont appliqués automatiquement pour éviter des résultats aberrants.
Ces calculs alimentent deux types de graphiques pensés pour les médecins et les comités de surveillance : des graphiques à points montrant pour chaque effet secondaire sa fréquence dans chaque groupe ainsi que l'incertitude autour de la différence observée, et des graphiques en volcan qui permettent de voir en un seul coup d'œil, sur l'ensemble des effets répertoriés, lesquels sont à la fois fréquents et statistiquement significatifs. Ces représentations sont directement utilisables lors des réunions de surveillance médicale indépendantes.

Mission 3 — Une application pour les équipes médicales
Le projet le plus ambitieux de l'alternance a été la conception et le déploiement d'une application interactive à destination des équipes de pharmacovigilance — c'est-à-dire les professionnels chargés de surveiller la sécurité des médicaments en cours d'évaluation.
L'idée de départ était simple : les outils développés lors des deux premières missions ne sont accessibles qu'à des personnes sachant programmer en R. Or les médecins, chefs de projet et attachés de recherche clinique qui ont besoin de ces analyses au quotidien n'ont pas nécessairement ces compétences. L'application a donc été conçue pour rendre tout cela accessible en quelques clics, sans écrire une seule ligne de code.
L'interface permet de charger des fichiers de données dans plusieurs formats, d'appliquer jusqu'à quatre filtres personnalisables — par population, par groupe de traitement, par cycle ou par niveau de gravité — et de générer l'ensemble des graphiques développés au cours de l'alternance de façon dynamique et interactive. Chaque visualisation peut être téléchargée dans le format souhaité pour être insérée directement dans un rapport ou une présentation.
Cette application remplace un processus entièrement manuel qui nécessitait auparavant de construire chaque graphique à la main sous PowerPoint avant chaque réunion de sécurité. En centralisant et en automatisant ces analyses, elle réduit considérablement le temps de préparation et garantit que les mêmes calculs produisent toujours les mêmes résultats — ce qu'on appelle la reproductibilité, une exigence fondamentale en recherche clinique.
Pour accompagner la prise en main de l'outil, j'ai également rédigé un guide utilisateur complet de treize sections, illustré et aux couleurs de l'organisation, couvrant l'installation, la navigation pas à pas et la description de chaque fonctionnalité.

Ce que cette expérience m'a apporté
Cette alternance m'a permis de développer une expertise rare, à la croisée de trois domaines : la statistique appliquée à la santé, la programmation et l'ingénierie logicielle, et la communication de données à destination de publics non techniques.
Travailler dans un environnement médical et réglementaire exigeant m'a appris à produire des livrables irréprochables sur le fond comme sur la forme, à vulgariser des résultats complexes pour des médecins ou des comités de surveillance, et à m'inscrire dans des projets longs avec des enjeux concrets sur la prise en charge des patients.`,
    techs: ["R", "Shiny", "ggplot2", "plotly", "ggiraph", "SAS", "R Markdown", "GLM Poisson", "IRR"],
  },
  {
    poste: "Stage — Traitement de données en santé publique",
    structure: "CHU Grenoble, Laboratoire TIMC (Équipe MESP)",
    periode: "Avril 2025 - Juin 2025",
    description: `Contexte & environnement
En deuxième année de BUT Sciences des Données, j'ai effectué un stage de dix semaines au sein du laboratoire TIMC (Recherche Translationnelle et Innovation en Médecine et Complexité), et plus précisément au sein de l'équipe MESP (Modélisation et Évaluation des données complexes en Santé Publique). Ce laboratoire interdisciplinaire du bassin grenoblois regroupe plus de 350 membres — chercheurs, statisticiens, cliniciens — et travaille à l'intersection des mathématiques appliquées, des sciences numériques et de la santé publique. Ce stage a été réalisé en collaboration étroite avec le service de pharmacie clinique du CHU de Grenoble.
Le projet central de ce stage était l'observatoire Act-IP®, un outil national créé par la Société Française de Pharmacie Clinique (SFPC) pour collecter et analyser les interventions pharmaceutiques réalisées en milieu hospitalier et en officine. Une intervention pharmaceutique, c'est le moment où un pharmacien détecte un problème dans le traitement d'un patient — une dose incorrecte, un médicament inapproprié, une interaction dangereuse — et propose une modification au médecin prescripteur. Cet observatoire existe depuis 2006 et constitue une base de données nationale unique sur les pratiques de pharmacie clinique en France.

Mission 1 — Nettoyage et intégration des données hospitalières
La première mission, et la plus technique, a consisté à intégrer de nouvelles données dans un historique déjà constitué. L'observatoire couvrait les années 2006 à 2022 sous une forme déjà traitée et figée. Mon rôle était d'y ajouter les données collectées entre 2023 et début 2025, puis de procéder au gel définitif de l'observatoire pour l'année 2024 — c'est-à-dire de figer la base à un instant précis, de façon à ce qu'elle serve de référence stable pour les analyses futures.
Ce travail de préparation a été plus complexe qu'il n'y paraît. Les fichiers reçus provenaient de sources différentes, dans des formats variables — CSV, Excel — avec des structures de colonnes hétérogènes, des problèmes d'encodage des caractères accentués, et des données parfois incomplètes ou mal renseignées. J'ai effectué un nettoyage rigoureux sous R : renommage systématique des colonnes avec un préfixe unifié pour garantir la cohérence de l'ensemble, harmonisation des formats, suppression des variables inutiles, et vérification de la cohérence entre les différentes années. Pour guider ce travail, je me suis appuyé sur un code Stata existant fourni par l'équipe, que j'ai traduit et adapté en R.
Une fois les données nettoyées et alignées sur la structure de la base historique, les fichiers ont été fusionnés pour constituer un observatoire unique couvrant près de vingt ans d'interventions pharmaceutiques, de 2006 à février 2025.

Mission 2 — Analyse descriptive des interventions pharmaceutiques
Une fois la base consolidée, j'ai réalisé une analyse descriptive complète des données hospitalières, avec un double objectif : vérifier la cohérence des nouvelles années par rapport aux tendances historiques, et produire des résultats exploitables par l'équipe de recherche.
L'analyse a porté sur plusieurs dimensions. L'évolution temporelle du nombre d'interventions révèle une croissance continue de 2006 à 2021, période pendant laquelle l'observatoire s'est développé et le nombre d'hôpitaux participants a augmenté. À partir de 2022, le volume d'interventions enregistrées diminue, ce qui peut refléter des changements dans les pratiques de saisie plutôt qu'une baisse réelle de l'activité pharmaceutique.
L'analyse typologique des interventions montre que les pharmaciens interviennent très majoritairement sur deux problèmes : l'adaptation de la posologie — c'est-à-dire ajuster la dose d'un médicament en fonction du profil du patient — et la substitution ou l'échange de médicaments, qui représentent à eux deux plus de la moitié des cas. À l'inverse, certains types d'interventions très spécialisés, comme le choix de la voie d'administration, restent marginaux. L'analyse des résultats montre par ailleurs que la grande majorité des propositions du pharmacien sont acceptées par le médecin prescripteur, ce qui témoigne de la légitimité et de la pertinence reconnues de la démarche de pharmacie clinique.

Mission 3 — Application Shiny pour le volet hospitalier
En parallèle de l'analyse, j'ai développé un tableau de bord interactif sous R Shiny permettant aux équipes de la pharmacie clinique et aux chercheurs d'explorer les données de l'observatoire sans avoir à écrire de code. L'objectif était de rendre ces vingt ans de données accessibles, lisibles et interrogeables en quelques clics.
L'application est organisée en plusieurs onglets thématiques. Un premier onglet présente les indicateurs clés de l'observatoire : nombre total d'interventions, répartition entre interventions acceptées et refusées, types d'établissements. Un deuxième onglet permet d'explorer le profil démographique des patients concernés, avec des visualisations par sexe et par tranche d'âge. Un troisième onglet détaille les types d'interventions, les problèmes identifiés et les résultats obtenus, avec la possibilité d'analyser les liens entre ces différentes dimensions. Un quatrième onglet permet de filtrer les données par établissement, pour consulter les interventions réalisées dans un hôpital en particulier. Un cinquième onglet est dédié à l'analyse par médicament ou par classe thérapeutique — grâce aux codes ATC, classification internationale qui regroupe les médicaments par famille — afin d'identifier quels traitements sont le plus souvent concernés par des interventions. Enfin, un accès aux données brutes sous forme de tableau filtrable et triable est disponible pour des analyses plus poussées.

Mission 4 — Données officinales et second tableau de bord
La quatrième mission portait sur un territoire encore peu exploré : les interventions pharmaceutiques réalisées non plus à l'hôpital, mais en pharmacie de ville (officine). Ce module est plus récent — les données ne couvrent que la période 2022-2025 — et n'existait pas dans la version initiale de l'observatoire Act-IP®.
Le traitement de ces données a présenté des difficultés spécifiques. Le principal défi concernait les formats de dates, qui variaient considérablement d'un fichier à l'autre : certaines étaient stockées sous forme de nombres Excel, d'autres comportaient des années incorrectes, d'autres encore utilisaient des séparateurs différents. J'ai développé une fonction de conversion automatique des dates sous R pour harmoniser l'ensemble vers un format unifié, sans perte d'information. D'autres travaux de standardisation ont porté sur les variables patient — sexe, âge, unité de mesure de l'âge — ainsi que sur la codification des résultats des interventions, pour les rendre comparables entre les différentes années.
Une fois les données nettoyées et harmonisées en un fichier unique de 34 variables, j'ai conduit une première analyse descriptive des interventions officinales, en étudiant leur évolution dans le temps, la répartition par sexe et tranche d'âge des patients concernés, et les médicaments les plus fréquemment impliqués. J'ai ensuite développé une seconde application R Shiny dédiée à ce volet officinal, reprenant la même logique de navigation par onglets que l'application hospitalière, et permettant aux équipes d'explorer ces données inédites de façon interactive.

Ce que ce stage m'a apporté
Ce stage m'a permis de travailler sur un projet de santé publique à l'échelle nationale, avec des données réelles accumulées sur deux décennies par des professionnels de santé de toute la France. C'est une expérience rare pour un étudiant de deuxième année, qui m'a confronté à la réalité du travail de data scientist dans un contexte de recherche : des données hétérogènes à réconcilier, des contraintes méthodologiques à respecter, et des utilisateurs finaux — médecins, pharmaciens, chercheurs — à qui il faut rendre les résultats accessibles et utiles.
Sur le plan technique, j'ai consolidé mes compétences en traitement et nettoyage de données sous R, en développement d'applications interactives avec R Shiny, et en analyse descriptive appliquée à la santé. J'ai également appris à structurer un projet sur la durée, à documenter mon travail de façon à ce qu'il soit réutilisable par l'équipe après mon départ, et à communiquer mes résultats à des interlocuteurs aux profils très variés.`,
    techs: ["R", "Shiny", "ggplot2", "tidyverse", "R Markdown", "Excel", "Stata", "Data cleaning"],
  },
];
// ------------------------------------------------------------
// PAGE "PROJETS" (style image 6 : image + mots-clés)
// ------------------------------------------------------------
export const projets = [
  {
    titre: "Application Shiny — Pharmacovigilance",
    type: "Projet professionnel",
    description:
      "Application multi-onglets de suivi de sécurité (vue Population et profil Patient), avec filtres dynamiques et graphiques interactifs. Supporte plusieurs formats de données cliniques.",
    techs: ["R", "Shiny", "ggiraph", "plotly"],
    motsCles: ["santé", "data viz", "pharmacovigilance"],
    image: "", // ex: "/projets/shiny.png"
    lien: "",
    github: "",
  },
  {
    titre: "Suite de visualisations d'effets indésirables",
    type: "Projet professionnel",
    description:
      "Bibliothèque de fonctions R pour visualiser les effets indésirables : barplot, sunburst, mosaic, swimmer, volcano plot et dot/forest plot, avec un moteur de calcul statistique (RD, OR, IRR).",
    techs: ["R", "ggplot2", "GLM Poisson"],
    motsCles: ["data viz", "biostatistique"],
    image: "",
    lien: "",
    github: "",
  },
  {
    titre: "Comparaison statistique de bras de traitement",
    type: "Projet professionnel",
    description:
      "Outils comparant deux bras actifs (doublet vs triplet) sur l'essai OASIS II, via régression de Poisson et calcul d'IRR.",
    techs: ["R", "Biostatistique"],
    motsCles: ["statistiques", "essai clinique"],
    image: "",
    lien: "",
    github: "",
  },
];

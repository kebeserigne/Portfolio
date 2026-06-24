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
  linkedin: "linkedin.com/in/KEBE-Serigne",
  github: "https://github.com/ton-pseudo",  
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
    structure: "LYSARC (Lymphoma Academic Research Organisation), Lyon",
    periode: "2024 — 2026",
    description:
      "Développement d'outils de visualisation et d'analyse statistique pour les essais cliniques en hématologie : suite de fonctions R pour les effets indésirables, outils de comparaison statistique et application Shiny de pharmacovigilance, sur l'essai OASIS II.",
    techs: ["R", "Shiny", "SAS", "GLM Poisson"],
  },
  {
    poste: "Stage — Traitement de données pharmaceutiques",
    structure: "CHU Grenoble, laboratoire TIMC",
    periode: "2024",
    description:
      "Traitement de données d'interventions pharmaceutiques et développement d'un pipeline de traitement de données en R.",
    techs: ["R", "Data cleaning"],
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

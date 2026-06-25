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
    description: `Contexte : Alternance au sein du pôle Biométrie de LYSARC. Ma mission centrale était d'améliorer le suivi de la sécurité des patients dans les essais cliniques (pharmacovigilance) en automatisant l'analyse et la détection des effets secondaires.

Missions de Visualisation & Statistiques : J'ai développé une suite d'outils en R permettant d'explorer visuellement les effets indésirables (sunburst, volcano plots, graphiques mosaïques, survie). En parallèle, j'ai conçu un moteur de calcul automatique pour comparer statistiquement différents groupes de traitement (calculs d'IRR, Odds Ratio, tests de significativité) en gérant les événements rares.

Application Shiny : Pour rendre ces outils accessibles aux équipes médicales (médecins, attachés de recherche), j'ai conçu, déployé et documenté une application R Shiny interactive. Elle permet de filtrer dynamiquement les données cliniques et de générer des graphiques reproductibles directement exportables pour les réunions de sécurité.

Bilan : Cette expérience m'a permis de forger une double expertise en ingénierie logicielle et biostatistique, tout en m'apprenant à vulgariser des analyses complexes pour un public non technique dans un cadre réglementaire strict.`,
    techs: ["R", "Shiny", "ggplot2", "plotly", "ggiraph", "SAS", "R Markdown", "GLM Poisson", "IRR"],
  },
  {
    poste: "Stage — Traitement de données en santé publique",
    structure: "CHU Grenoble, Laboratoire TIMC (Équipe MESP)",
    periode: "Avril 2025 — Juin 2025 (10 semaines)",
    description: `Contexte : Stage de 10 semaines réalisé en collaboration avec le CHU de Grenoble. Le projet portait sur l'observatoire national Act-IP®, une base de données regroupant les interventions pharmaceutiques (corrections de prescriptions) en milieu hospitalier et en officine.

Data Cleaning & Analyse : J'ai nettoyé, harmonisé (formats de dates complexes, encodages) et fusionné des données hétérogènes pour consolider un historique unique couvrant 20 ans d'interventions. J'ai ensuite mené une analyse descriptive pour en extraire les grandes tendances (adaptations de posologie, taux d'acceptation par les médecins prescripteurs).

Développement de Tableaux de Bord : J'ai développé deux applications interactives R Shiny distinctes (volet hospitalier et volet officine). Elles permettent aux chercheurs et pharmaciens d'explorer visuellement les indicateurs clés, la démographie et les classes thérapeutiques (codes ATC) sans avoir à écrire la moindre ligne de code.

Bilan : Ce projet à l'échelle nationale m'a confronté aux réalités du nettoyage de données de santé hétérogènes et a solidement ancré mes compétences de data scientist dans l'écosystème R (manipulation et datavisualisation).`,
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

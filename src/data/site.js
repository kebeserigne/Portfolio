// ============================================================
// FICHIER UNIQUE À ÉDITER POUR TOUT TON CONTENU
// Modifie ce fichier pour mettre à jour ton portfolio.
// ============================================================


// ------------------------------------------------------------
// PROFIL — informations personnelles
// ------------------------------------------------------------

export const profil = {
  nom:      "Serigne KEBE",
  titre:    "Étudiant BUT Science des Données — parcours Exploration et Modélisation Statistique (EMS)",
  sousTitre: "Programmeur Statisticien · Futur ingénieur Data & IA",
  accroche:
    "J'aime transformer des données complexes en outils clairs et utiles. " +
    "En alternance chez LYSARC, je conçois des visualisations et des analyses " +
    "statistiques pour la recherche clinique.",
  email:    "serignemodoumaikebe@gmail.com",
  linkedin: "https://www.linkedin.com/in/kebe-serigne/",
  github:   "https://github.com/kebeserigne",
  cv:       "/cv.pdf",
  photo:    "/photo.jpg",
};


// ------------------------------------------------------------
// PAGE "À PROPOS" — intro + sections dépliables
// Le doublon avec "Expériences pro" a été supprimé ici.
// ------------------------------------------------------------

export const aProposIntro =
  "Après un Bac Scientifique à Dakar et un passage en classe préparatoire, " +
  "j'ai rejoint le BUT Science des Données à Grenoble. " +
  "Un échange en datavisualisation à Prague et une alternance en biostatistique " +
  "chez LYSARC ont confirmé mon goût pour la data appliquée à des problèmes réels.";

export const aProposSections = [

  {
    titre: "Parcours académique",
    icone: "school",
    items: [
      "BUT Science des Données, parcours EMS — IUT2 Grenoble (en cours)",
      "Échange en datavisualisation — Université d'Économie et de Statistiques de Prague",
      "Classe préparatoire MPCI (L1) — Grenoble",
      "Bac Scientifique — Dakar",
    ],
  },

  {
    titre: "Centres d'intérêt",
    icone: "heart",
    items: [
      "Datavisualisation et design d'interfaces",
      "Statistiques appliquées à la santé",
      "Mangas : Kingdom, Naruto, Classroom of the Elite",
    ],
  },

];


// ------------------------------------------------------------
// PAGE "COMPÉTENCES" — les 4 compétences officielles BUT SD EMS
//
// niveau    = étoiles sur 5 (ton auto-évaluation)
// preuves   = ce que tu as CONCRÈTEMENT fait (tiré de tes SAÉ + alternance)
// amelioration = axes de progression honnêtes
// projets   = noms courts des projets qui prouvent la compétence
// entreprise = où tu l'as appliquée en contexte pro
// techs     = outils utilisés pour cette compétence
// ------------------------------------------------------------

export const competences = [

  {
    numero: "01",
    titre:  "Traiter des données à des fins décisionnelles",
    niveau: 4,
    description:
      "Collecter, nettoyer, structurer et intégrer des données hétérogènes " +
      "pour les rendre exploitables et fiables.",
    preuves: [
      "Migration PostgreSQL → Neo4j : nettoyage de 55 lignes aberrantes, " +
      "validation de 115 000+ nœuds et 712M+ votants (SAÉ 5.02)",
      "Nettoyage et fusion de 20 ans de données Act-IP® au CHU Grenoble " +
      "(formats de dates complexes, encodages hétérogènes)",
      "Traitement des données cliniques OASIS II (fusion ADSL, " +
      "multi-formats : .xlsx, .RData, .csv, .sas7bdat) chez LYSARC",
    ],
    amelioration: [
      "Bases de données à très grande échelle (Big Data)",
      "Automatisation des pipelines ETL",
    ],
    projets:    ["SAÉ 5.02 — Migration NoSQL", "Stage CHU Grenoble", "Alternance LYSARC"],
    entreprise: ["Programmeur Statisticien chez LYSARC", "Stage CHU Grenoble"],
    techs:      ["R", "SAS", "SQL", "Neo4j", "Cypher", "tidyverse"],
  },

  {
    numero: "02",
    titre:  "Analyser statistiquement les données",
    niveau: 4,
    description:
      "Décrire, explorer et modéliser les données par des méthodes statistiques " +
      "adaptées, et restituer les résultats de façon claire.",
    preuves: [
      "Prédiction du churn client (7 032 clients) : k-NN, LDA, arbres de décision " +
      "CART, ACM sur 16 variables qualitatives — taux d'erreur final 19,34 % (SAÉ 5.01)",
      "Visualisations d'effets indésirables chez LYSARC : sunburst, volcano plot, " +
      "swimmer plot, dot/forest plot, kaplan-Meier",
      "Analyse descriptive de l'observatoire Act-IP® au CHU Grenoble",
    ],
    amelioration: [
      "Méthodes de survie avancées (Cox, fragilité)",
      "Modèles bayésiens",
    ],
    projets:    ["SAÉ 5.01 — Prédiction Churn", "Alternance LYSARC", "Stage CHU Grenoble"],
    entreprise: ["Programmeur Statisticien chez LYSARC"],
    techs:      ["R", "ggplot2", "plotly", "ggiraph", "rpart", "MASS"],
  },

  {
    numero: "03",
    titre:  "Valoriser une production dans un contexte professionnel",
    niveau: 4,
    description:
      "Communiquer les résultats via des applications, des rapports et des " +
      "restitutions orales adaptées à des publics variés (techniques et non techniques).",
    preuves: [
      "Application Shiny de pharmacovigilance chez LYSARC : interface accessible " +
      "aux médecins et attachés de recherche, sans connaissance en R",
      "Deux tableaux de bord Shiny au CHU Grenoble pour l'observatoire Act-IP®",
      "Rapport d'alternance et soutenance finale BUT3",
      "Dossier écrit professionnel sur STMicroelectronics — sans support visuel (SAÉ 2.05)",
    ],
    amelioration: [
      "Storytelling data avancé",
    ],
    projets:    ["Application Shiny LYSARC", "Tableaux de bord CHU Grenoble", "SAÉ 2.05 — STMicro"],
    entreprise: ["Programmeur Statisticien chez LYSARC", "Stage CHU Grenoble"],
    techs:      ["Shiny", "R Markdown", "plotly", "ggiraph"],
  },

  {
    numero: "04",
    titre:  "Modéliser les données dans un cadre statistique",
    niveau: 3,
    description:
      "Choisir, appliquer et valider le modèle statistique adapté à la problématique " +
      "(compétence spécifique du parcours EMS).",
    preuves: [
      "Apprentissage supervisé : régression logistique, Bagging Bootstrap " +
      "(100 et 1 000 échantillons) sur classifieur anti-spam — erreur 11,21 % (SAÉ R6.EMS.05)",
      "Forêts aléatoires de Breiman (1 000 arbres) pour la prédiction " +
      "de popularité de confiseries (SAÉ R6.EMS.05)",
      "GLM Poisson et calcul d'IRR pour la comparaison de bras de traitement " +
      "OASIS II chez LYSARC",
    ],
    amelioration: [
      "Réseaux de neurones et deep learning",
      "Sélection de modèles complexes (hyperparamètres, validation croisée avancée)",
    ],
    projets:    ["SAÉ R6.EMS.05 — Apprentissage IA", "Alternance LYSARC — comparaison de bras"],
    entreprise: ["Programmeur Statisticien chez LYSARC"],
    techs:      ["R", "GLM Poisson", "randomForest", "rpart", "caret"],
  },

];


// ------------------------------------------------------------
// COMPÉTENCES TECHNIQUES — par catégories
// Mis à jour selon ton profil réel (R central, Python secondaire)
// ------------------------------------------------------------

export const techCategories = [

  {
    nom:   "Langages & Analyse",
    items: ["R", "Python", "SAS", "SQL", "Pack Office Microsoft 365" ],
  },

  {
    nom:   "Data Visualisation",
    items: ["ggplot2", "plotly", "ggiraph", "Shiny", "R Markdown", "Power BI"],
  },

  {
    nom:   "Statistiques & Machine Learning",
    items: [
      "GLM Poisson", "Régression logistique",
      "Arbres de décision (CART)", "Forêts aléatoires",
      "Bagging / Bootstrap", "ACM", "k-NN", "LDA",
    ],
  },

  {
    nom:   "Bases de données",
    items: ["PostgreSQL", "Neo4j", "Cypher", "MySQL"],
  },

  {
    nom:   "Outils & Environnement",
    items: ["Git", "GitHub", "RStudio", "VS Code", "Jupyter", "Excel", "Stata"],
  },

  {
    nom:   "Langues",
    items: ["Français (courant)", "Anglais (B1)", "Wolof (natif)"],
  },

];


// ------------------------------------------------------------
// PAGE "PROJETS ACADÉMIQUES" — SAÉ S5, S6 (+ une de S2 notable)
//
// emoji  = icône affiché à la place d'une image manquante
// annee  = semestre (S2, S5, S6)
// ------------------------------------------------------------

export const projetsAcademiques = [

  {
    titre:      "SAÉ 5.02 — Migration de données vers un environnement NoSQL",
    annee:      "S5",
    competence: "Compétence 1 — Traiter des données à des fins décisionnelles",
    emoji:      "🗄️",
    description:
      "Migration complète d'une base PostgreSQL (contentieux électoral du cabinet JADE) " +
      "vers Neo4j. J'ai audité la base source, nettoyé 55 lignes aberrantes, modélisé " +
      "8 labels de nœuds et automatisé l'import en Cypher (LOAD CSV). " +
      "Validation à 100 % : 115 000+ nœuds et 712M+ votants vérifiés à l'unité près.",
    image: "",
  },

  {
    titre:      "SAÉ 5.01 — Prédiction de l'Attrition Client (Churn)",
    annee:      "S5",
    competence: "Compétence 2 — Analyser statistiquement les données",
    emoji:      "📊",
    description:
      "Moteur de prédiction du churn sur 7 032 clients télécom sous R. " +
      "Comparaison de k-NN, LDA et arbres de décision CART. " +
      "ACM sur 16 variables qualitatives (61,87 % d'inertie captée) injectée comme prédicteurs. " +
      "Stabilité validée par Monte Carlo (500 simulations) — taux d'erreur final : 19,34 %.",
    image: "",
  },

  {
    titre:      "SAÉ R6.EMS.05 — Apprentissage Statistique pour l'IA",
    annee:      "S6",
    competence: "Compétence 4 — Modéliser les données dans un cadre statistique (EMS)",
    emoji:      "🤖",
    description:
      "Deux volets d'apprentissage supervisé sous R. " +
      "1/ Classifieur anti-spam (4 601 e-mails, 57 variables) : régression logistique " +
      "et Bagging Bootstrap (100 et 1 000 échantillons) — erreur : 11,21 %. " +
      "2/ Prédiction de popularité de confiseries (85 types) : arbres CART " +
      "et forêts aléatoires de Breiman (1 000 arbres). " +
      "Diagnostic du sur-apprentissage et analyse des variables importantes.",
    image: "",
  },

  {
    titre:      "SAÉ 2.05 — Indicateurs de performance (STMicroelectronics)",
    annee:      "S2",
    competence: "Compétence 3 — Valoriser une production dans un contexte professionnel",
    emoji:      "📝",
    description:
      "Analyse stratégique de STMicroelectronics (marché B2B semi-conducteurs). " +
      "Diagnostic du positionnement, de la politique d'innovation (automobile, IoT, carbure de silicium) " +
      "et des enjeux juridiques (brevets). " +
      "Contrainte : restitution écrite uniquement (sans PowerPoint), " +
      "ce qui a développé ma communication professionnelle et ma capacité à vulgariser " +
      "des enjeux technologiques complexes.",
    image: "",
  },

];


// ------------------------------------------------------------
// PAGE "EXPÉRIENCES PRO" — stage + alternance
// ------------------------------------------------------------

export const experiences = [

  {
    poste:     "Programmeur Statisticien — Alternance",
    structure: "LYSARC (Pôle Biométrie — Département de Biostatistique), Lyon",
    periode:   "Septembre 2025 — Juillet 2026",
    description:
      "Contexte : Au sein du pôle Biométrie de LYSARC, ma mission centrale était " +
      "d'améliorer le suivi de la sécurité des patients dans les essais cliniques " +
      "(pharmacovigilance) en automatisant l'analyse des effets secondaires.\n\n" +

      "Visualisation & Statistiques : Développement d'une suite d'outils en R pour " +
      "explorer visuellement les effets indésirables (sunburst, volcano plots, graphiques " +
      "mosaïques, swimmer plot, Kaplan-Meier). Moteur de calcul automatique pour comparer " +
      "statistiquement différents groupes de traitement (IRR, Odds Ratio, tests de Fisher).\n\n" +

      "Application Shiny : Conception, développement et documentation d'une application " +
      "R Shiny interactive à destination des équipes médicales (médecins, attachés de recherche " +
      "clinique). L'outil permet de filtrer dynamiquement les données et de générer des " +
      "graphiques reproductibles exportables pour les réunions de sécurité.\n\n" +

      "Bilan : Double expertise en ingénierie logicielle et biostatistique, " +
      "appliquée dans un cadre réglementaire strict.",
    techs: ["R", "Shiny", "ggplot2", "plotly", "ggiraph", "SAS", "R Markdown", "GLM Poisson"],
  },

  {
    poste:     "Stage — Traitement de données en santé publique",
    structure: "CHU Grenoble, Laboratoire TIMC (Équipe MESP)",
    periode:   "Avril 2025 — Juin 2025 (10 semaines)",
    description:
      "Contexte : Stage réalisé autour de l'observatoire national Act-IP®, " +
      "base de données regroupant les interventions pharmaceutiques " +
      "(corrections de prescriptions) en milieu hospitalier et en officine.\n\n" +

      "Data Cleaning & Analyse : Nettoyage, harmonisation et fusion de données hétérogènes " +
      "couvrant 20 ans d'interventions (formats de dates complexes, encodages multiples). " +
      "Analyse descriptive des grandes tendances (adaptations de posologie, taux d'acceptation " +
      "par les médecins prescripteurs).\n\n" +

      "Tableaux de bord : Développement de deux applications R Shiny distinctes " +
      "(volet hospitalier et volet officine) permettant aux chercheurs et pharmaciens " +
      "d'explorer les indicateurs clés, la démographie et les classes thérapeutiques (codes ATC) " +
      "sans écrire de code.\n\n" +

      "Bilan : Confrontation aux réalités du nettoyage de données de santé hétérogènes " +
      "à l'échelle nationale.",
    techs: ["R", "Shiny", "ggplot2", "tidyverse", "R Markdown", "Excel", "Stata"],
  },

];

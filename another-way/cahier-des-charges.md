# Création d'un site vitrine professionnel – Prestations équestres

Je souhaite créer un site internet vitrine professionnel pour présenter mon activité indépendante de cavalière et prestataire de services dans le domaine équestre.

Mon activité est spécialisée dans le travail, l'éducation et la préparation des chevaux de sport, avec une approche inspirée de l'équitation éthologique. Je propose également des prestations d'accompagnement et d'enseignement auprès des propriétaires et cavaliers.

L'objectif du site est de présenter mon profil, mon expérience professionnelle, mes différentes prestations et mes tarifs, tout en permettant aux visiteurs de me contacter facilement.

---

## 0. Décisions de cadrage (validées le 24/11/2026)

| Sujet | Décision |
|---|---|
| **Nom du site** | **Another Way** (affiché dans l'en-tête avec le logo, titres de pages, données SEO). |
| **Zone / point de départ** | **Orléans** : point de départ des frais kilométriques et base du référencement local (ex. « éducation du cheval Orléans », « débourrage Loiret »). Zone d'intervention affichée : **« Proche Orléans / Île-de-France, autres sur demande »** (Loiret et Île-de-France ciblés pour le SEO). |
| **SIRET** | **842 590 606 00021** (affiché dans les mentions légales et le pied de page). |
| **Statut juridique** | **Entreprise individuelle, régime micro-entreprise** (Élodie Bourguignon EI). |
| **Adresse officielle** | **37 avenue Corot, 78110 Le Vésinet** — affichée **uniquement dans les mentions légales** (pas sur la page Contact ni dans le pied de page, qui affichent la zone d'intervention). |
| **Langues** | Site bilingue **français + anglais**. Français par défaut, sélecteur de langue FR / EN dans l'en-tête (à droite, près des icônes réseaux sociaux). URL distinctes par langue (`/` pour le français, `/en/` pour l'anglais) avec balises `hreflang`. |
| **Modification des contenus** | **Pas d'interface d'administration.** Textes, tarifs, prestations, coordonnées et liste des photos stockés dans des **fichiers texte simples** (Markdown / JSON ou YAML), un fichier par langue, séparés du code de mise en page. Modifier un tarif = modifier une ligne dans un fichier. Un court guide « Comment modifier mon site » sera fourni. |
| **Technologie** | Site statique (générateur type Astro), sans base de données : rapide, sécurisé, peu de maintenance. |
| **Hébergement** | **Vercel**, HTTPS automatique. Déploiement automatique à chaque modification des fichiers (via un dépôt Git). |
| **Nom de domaine** | **another-way.fr** (déjà réservé) — à rattacher à Vercel (version avec et sans `www`, redirection vers une seule adresse). Adresse d'envoi du formulaire via Resend : ex. `contact@another-way.fr` (domaine à vérifier chez Resend). |
| **Formulaire de contact** | **Fonction serveur Vercel + Resend** pour envoyer les messages par e-mail vers l'adresse de la cavalière. Protection anti-spam (champ piège invisible + limitation du nombre d'envois), validation des champs, message de confirmation après envoi et message d'erreur en cas d'échec. Nécessite : un compte Resend (gratuit jusqu'à 3 000 e-mails/mois) et la vérification du nom de domaine chez Resend pour l'expéditeur. |
| **Galerie photo** | **Section de la page d'Accueil** (pas de 4e page) : grille élégante en bas de page, agrandissement au clic (lightbox avec navigation précédente/suivante, fermeture clavier/tactile). |
| **Logo** | **Fourni** par la cavalière. Formats souhaités : SVG ou PNG fond transparent, en version claire (pour fonds sombres) et foncée (pour fonds clairs). |
| **Photographies** | **Fournies** par la cavalière. Elles seront optimisées automatiquement (formats modernes WebP/AVIF, tailles adaptées à chaque écran, chargement différé). Chaque photo aura un texte alternatif (FR et EN) pour l'accessibilité et le SEO. |
| **Liste des prestations** | **Fournie** — voir le tableau des tarifs en section 4. |
| **TVA** | Prix **non assujettis à la TVA**. Mention affichée sous la grille tarifaire et dans les mentions légales : « TVA non applicable, article 293 B du CGI ». |

### Contenus repris de l'ancien site (www.another-way.fr, relevé le 24/11/2026)

| Élément | Contenu |
|---|---|
| Nom | **Élodie Bourguignon** — activité **Another Way**, fondée en 2021 |
| Téléphone | +33 6 13 22 31 30 |
| E-mail | contact@another-way.fr |
| Instagram | https://www.instagram.com/another_way_education/ |
| Facebook | https://www.facebook.com/AnotherwayEducationEquine |
| Logo | `https://www.another-way.fr/assets/logo-Cvuy9qPk.jpg` (JPG — une version SVG/PNG transparente reste préférable) |
| Photos récupérables | bannière accueil (`accueiltiptop`), bannière contact (`contact`), photo d'Élodie (`dodi`), bannière structure, séjours courts — toutes sous `https://www.another-way.fr/assets/` |
| Accroche | « Débourrage / Éducation / Travail du cheval » |

**Texte « Approche » (base de la page d'accueil) :**

> Avant même de parler d'équitation ou de performance, une période de formation est nécessaire et trop souvent sous-estimée, afin de mettre en place les bases d'une communication saine. Spécialisée dans le domaine de l'éducation équine ainsi que dans la rééducation comportementale des chevaux de sport et de loisir, Another Way, fondée en 2021, propose ses services à tout professionnel ou propriétaire rencontrant des difficultés avec ses chevaux ou souhaitant une approche respectant l'intégrité physique et mentale de l'animal. La méthode éthique d'éducation proposée est fondée sur les différentes avancées scientifiques concernant les capacités cognitives du cheval et devrait être le pilier de toutes pratiques équestres.

**Texte « Parcours professionnel » (rubrique À propos) :**

> Passionnée par les chevaux depuis toujours, Élodie Bourguignon passe son BPJEPS à Maisons-Laffitte. Elle part ensuite se former au pôle éducation du Haras de Hus auprès de Sébastien Jaulin et Robyn Arnold pendant 10 mois, avant d'y être engagée pendant 2 ans. Durant cette période, elle valide le Brevet Fédéral d'Encadrement d'Équitation Éthologique de niveaux 1 et 2. Elle renforce ensuite temporairement l'équipe de Grégory Wathelet lors de la tournée espagnole du Sunshine Tour, puis est recrutée par l'élevage Massa pour le débourrage et l'éducation de leurs chevaux d'élevage durant 2 ans. Ces expériences lui ont permis d'acquérir l'expertise nécessaire pour proposer ses services sous le nom d'Another Way.

*(Textes repris quasi à l'identique, seules l'orthographe et la ponctuation sont corrigées. Ils seront traduits en anglais.)*

**Éléments de l'ancien site NON repris :**
- Adresse « La Niessonnerie, 72210 Louplande » et page « Structure » (écuries, manège, piste…) : **supprimées totalement** (confirmé). L'activité est présentée comme prestataire au départ d'Orléans.
- Pensions (vacances, manipulation foal, pré-débourrage 500 €/15 j, bien-être, débourrage 1 000 €/mois, rééducation 1 200 €/mois, travail, propriétaire) : remplacées par la nouvelle grille tarifaire. La **rééducation comportementale** est conservée comme prestation **sur devis** (voir section 4).

### Informations restant à fournir

Conformément à la consigne « ne rien inventer », les champs suivants resteront des **emplacements provisoires clairement identifiés** (`[À COMPLÉTER : …]`) tant qu'ils ne sont pas fournis :

- Logo en haute qualité (SVG/PNG) et photos pour chaque prestation et la galerie (logo JPG et quelques photos récupérables sur l'ancien site)
- Validation des 4 descriptions proposées en section 4 (cours, stage, passages, évaluation)

---

## 1. Structure générale du site

Créer un site internet composé de trois pages principales accessibles depuis un menu de navigation situé en haut de chaque page :

- Accueil
- Prestations et tarifs
- Contact

Chaque page existe en français et en anglais (Home / Services & Rates / Contact). La galerie photo est une section de la page d'Accueil. Les mentions légales et la politique de confidentialité sont des pages secondaires accessibles depuis le pied de page.

Le site doit être entièrement responsive, adapté aux ordinateurs, tablettes et smartphones.

## 2. Identité visuelle et direction artistique

Je souhaite une identité visuelle élégante, sobre, moderne et professionnelle.

**Palette de couleurs :**
- Noir profond
- Blanc
- Gris anthracite
- Quelques nuances de gris clair pour apporter de la légèreté.

Mon logo devra apparaître en haut à gauche du site, dans l'en-tête, et rester visible sur toutes les pages.

Les photographies seront en couleurs afin de créer un contraste avec le design noir et blanc du site.

**Ambiance recherchée :**
- Univers équestre chic et contemporain.
- Design minimaliste et épuré.
- Typographie élégante et lisible.
- Grandes photographies immersives.
- Espaces aérés et mise en page harmonieuse.
- Animations discrètes et transitions fluides (désactivées si l'utilisateur a demandé à réduire les animations dans son système).

Éviter les designs trop chargés, les couleurs criardes et les codes visuels traditionnels des centres équestres.

## 3. Page d'accueil

La page d'accueil doit permettre de découvrir rapidement mon profil et mon univers professionnel.

Prévoir :

- Une grande photographie bannière en haut de page, représentant un cheval au travail ou une scène équestre esthétique.
- Une présentation personnelle avec une photographie de moi à cheval.
- Une rubrique « À propos » présentant mon parcours professionnel et mon expérience dans le milieu équestre.
- Une mise en avant de mon approche du travail du cheval, notamment l'éducation, la progression et la relation cavalier-cheval.
- Une présentation synthétique de mes principales prestations avec des photographies illustratives.
- Un bouton permettant d'accéder directement à la page « Prestations et tarifs ».
- Un bouton de contact pour faciliter les demandes de renseignements.
- **La galerie photo** (voir section 7), en bas de page.

La page doit donner envie de découvrir mon travail et instaurer une relation de confiance.

## 4. Page Prestations et tarifs

Créer une page dédiée à la présentation détaillée de mes différentes prestations.

Chaque prestation devra être présentée sous forme de bloc ou de carte comprenant :

- Une photographie illustrative en couleurs.
- Le nom de la prestation.
- Une description claire et professionnelle.
- Les objectifs et le contenu de la prestation.
- Le tarif correspondant.
- Éventuellement les informations pratiques complémentaires.

Prévoir une mise en page élégante et facile à parcourir, avec une photographie différente pour chaque prestation.

Les prestations et tarifs devront être facilement modifiables afin de pouvoir les actualiser ultérieurement : **chaque prestation est une entrée dans un fichier de données** (un par langue) ; ajouter, retirer ou réordonner une prestation ne demande aucune modification du code. Le tarif est un champ texte libre (ex. « 45 € / séance », « sur devis »).

### Prestations et tarifs fournis

| Prestation | Tarif | Précisions |
|---|---|---|
| Cours individuel | 65 € | Aucune durée affichée |
| Stage – 1 journée | 130 € | |
| Stage – ½ journée | 70 € | |
| Passage de Savoir | 70 € | Savoirs d'équitation éthologique (FFE) |
| Passage de Galop | 50 € | |
| Séance d'évaluation | 100 € | |
| Séance de travail du cheval | 50 € | |
| Débourrage | 700 € / mois | 4 séances / semaine |
| Pré-débourrage | 350 € / mois | 4 séances / semaine |
| Rééducation comportementale | Sur devis | Chevaux de sport et de loisir ; le bouton de la carte ouvre le formulaire avec l'objet « Demande de devis » |
| Frais de déplacement | 0,50 € / km | Calculés depuis Orléans ; affichés en bas de page, pas sous forme de carte |

### Descriptions des prestations

Les descriptions de l'ancien site étaient masquées dans des volets dépliants. Elles ont été récupérées et sont reprises **telles quelles** (orthographe corrigée, références aux pensions et aux installations de Louplande retirées). Les prestations sans équivalent sur l'ancien site ont une description **proposée, à valider**.

**Reprises de l'ancien site :**

- **Séance de travail du cheval** *(ancienne « Pension travail »)* — Établissement des codes de la basse école, entretien physique et locomoteur. Rendre le cheval plus pratique et perméable aux aides.
- **Pré-débourrage** — Permet une éducation plus progressive en installant des codes en amont du débourrage. La majeure partie du travail se fait au sol et comprend du contrôle des pieds et de la désensibilisation. Mise de la selle et montoirs suivant les capacités physiques du poulain. *4 séances par semaine.*
- **Débourrage** — Étape la plus importante dans la vie d'un cheval. Elle va déterminer et conditionner toute la future relation entre le poulain et l'homme, ainsi que l'association que le cheval va faire avec l'humain. Le but est de rendre le cheval confiant, réceptif et perméable aux aides du cavalier. Chaque poulain étant différent, la durée peut varier d'un à plusieurs mois suivant le caractère et les capacités cognitives de chaque cheval. *4 séances par semaine.*
- **Rééducation comportementale** — Des incompréhensions entre l'homme et le cheval peuvent amener à l'apparition de comportements non souhaités, voire dangereux. Le but est ici de comprendre pourquoi le cheval a développé ces comportements et de lui apprendre ceux souhaités. Les exemples de rééducation sont nombreux et variés : embarquement, peur au montoir, agressivité, stress et anxiété… *Sur devis.*

**Propositions à valider (aucune description sur l'ancien site) :**

- **Cours individuel** — Un accompagnement personnalisé, cavalier et cheval ensemble, pour progresser à pied comme monté dans une relation de confiance et de respect mutuel. Le contenu s'adapte au niveau, aux objectifs et au rythme de chaque couple.
- **Stage (journée / demi-journée)** — Un temps dédié pour approfondir un thème : travail à pied, communication, bases de l'éducation ou préparation d'un objectif précis.
- **Passage de Savoir / de Galop** — Préparation et passage des Savoirs d'équitation éthologique (FFE) et des Galops, encadrés par une enseignante titulaire du BPJEPS et du Brevet Fédéral d'Encadrement d'Équitation Éthologique.
- **Séance d'évaluation** — Une première rencontre pour observer le cheval, comprendre ses besoins et ses éventuelles difficultés, et définir ensemble le programme de travail le plus adapté.

Tous les prix sont **nets, TVA non applicable (art. 293 B du CGI)**. Les stages (1 journée / ½ journée) et les passages d'examen (Savoir / Galop) sont regroupés chacun dans une seule carte avec deux tarifs.

Ajouter en bas de page une mention concernant les déplacements et les frais kilométriques (**0,50 € / km, calculés au départ d'Orléans**), ainsi qu'un bouton permettant de demander un devis ou de me contacter (le bouton ouvre la page Contact avec l'objet « Demande de devis » présélectionné).

## 5. Page Contact

Créer une page contact simple, claire et professionnelle.

Elle devra contenir :

- Mon numéro de téléphone (cliquable sur mobile).
- Mon adresse e-mail (cliquable).
- Ma zone géographique d'intervention.
- Un lien direct vers mon compte Instagram.
- Un lien direct vers ma page Facebook.

Ajouter un formulaire de contact comprenant :
- Nom et prénom.
- Adresse e-mail.
- Numéro de téléphone (facultatif).
- Objet de la demande (liste déroulante, ex. renseignement, demande de devis, prestation spécifique, autre).
- Message.
- Case de consentement au traitement des données (RGPD) avec lien vers la politique de confidentialité.

Prévoir un bouton d'envoi du formulaire et un message de confirmation après son envoi. L'envoi passe par une **fonction serveur Vercel qui transmet le message par e-mail via Resend** ; l'adresse de réponse est celle du visiteur, pour pouvoir répondre directement. Les messages ne sont pas stockés sur le site.

Ajouter une photographie d'ambiance équestre en bannière afin de conserver une cohérence graphique avec les autres pages.

## 6. Réseaux sociaux et navigation

Afficher des raccourcis vers Instagram et Facebook dans l'en-tête du site, idéalement à droite du menu de navigation, à côté du **sélecteur de langue FR / EN**.

Ajouter également les icônes des réseaux sociaux dans le pied de page.

Le logo situé en haut à gauche doit permettre de revenir à la page d'accueil en cliquant dessus.

Le menu de navigation doit être simple, fluide et accessible depuis toutes les pages. Sur smartphone, il se replie dans un menu « burger ».

## 7. Photographies et galerie

Je souhaite utiliser de grandes photographies en couleurs pour illustrer chaque page. **Les photos sont fournies par la cavalière.**

Prévoir :
- Une photographie bannière pour la page d'accueil.
- Une photographie bannière pour la page Prestations et tarifs.
- Une photographie bannière pour la page Contact.
- Une photographie pour illustrer chaque prestation.
- Une galerie photo complémentaire présentant mon travail avec les chevaux, **intégrée en section de la page d'Accueil**.

La galerie devra présenter les photographies dans une grille élégante, avec possibilité de cliquer sur une image pour l'afficher en grand. Ajouter ou retirer une photo de la galerie se fait en déposant le fichier dans un dossier et en l'ajoutant à la liste dans un fichier de données.

Privilégier des photographies équestres authentiques, professionnelles et naturelles : chevaux de sport, travail à pied, séances montées, éducation, relation homme-cheval et moments de complicité.

Éviter les images trop artificielles ou les photographies génériques de centres équestres.

## 8. Pied de page

Créer un pied de page sobre comprenant :
- Mon logo.
- Les liens vers les trois pages du site.
- Les raccourcis Instagram et Facebook.
- Mes coordonnées.
- Les mentions légales.
- La politique de confidentialité.

## 9. Aspects techniques et référencement

Le site doit :
- Être responsive et rapide à charger (site statique, images optimisées, objectif score Lighthouse ≥ 90).
- Être optimisé pour le référencement naturel (SEO).
- Permettre de modifier facilement les textes, les photographies et les tarifs (fichiers texte simples, voir section 0).
- Disposer d'une navigation intuitive.
- Être sécurisé en HTTPS (automatique sur Vercel).
- Être conçu pour pouvoir évoluer avec mon activité.
- Être accessible (contrastes, navigation au clavier, textes alternatifs).
- Ne pas déposer de cookies de suivi (pas de bandeau cookies nécessaire tant qu'aucun outil de mesure d'audience intrusif n'est ajouté).

Prévoir une structure SEO adaptée aux recherches locales concernant le travail, l'éducation, la préparation et l'accompagnement des chevaux :
- Titres et méta-descriptions propres à chaque page et à chaque langue.
- Balises `hreflang` FR / EN, plan du site (`sitemap.xml`), `robots.txt`.
- Données structurées (schema.org `LocalBusiness` / `Service`) avec la zone d'intervention.
- Aperçus pour les réseaux sociaux (Open Graph).

**Important :** Ne pas inventer mes informations personnelles, mon parcours, mes tarifs ou mes coordonnées. Utiliser des champs provisoires clairement identifiés lorsque ces informations ne sont pas encore fournies.

Le résultat attendu est un site vitrine élégant, professionnel, moderne et immersif, qui valorise mon expertise équestre et donne envie aux propriétaires de chevaux de faire appel à mes services.

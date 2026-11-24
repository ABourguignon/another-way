# Another Way – site vitrine

Site d'Élodie Bourguignon (another-way.fr), en français et en anglais.
Construit avec [Astro](https://astro.build) (site statique) et hébergé sur Vercel.

---

## Comment modifier mon site

Tout le contenu se trouve dans **deux dossiers**. Vous n'avez jamais besoin de toucher au reste.

| Je veux changer…                                 | Fichier à modifier                                   |
| ------------------------------------------------ | ---------------------------------------------------- |
| Téléphone, e-mail, Instagram, Facebook, SIRET…   | `contenu/site.yaml`                                  |
| Un texte, un tarif, une prestation (français)    | `contenu/fr.yaml`                                    |
| La même chose en anglais                         | `contenu/en.yaml`                                    |
| Une photo                                        | dossier `src/images/`                                |
| Le logo                                          | dossier `public/` + ligne `logo:` de `site.yaml`     |

### Règles simples pour les fichiers `.yaml`

- Ne modifiez que ce qui est **après les deux-points**, jamais le mot avant.
- Gardez les **guillemets** autour du texte : `tarif: "65 €"`.
- Respectez les **espaces en début de ligne** (ils indiquent la structure).
- Les lignes qui commencent par `#` sont des commentaires (ignorés).

### Changer un tarif

Dans `contenu/fr.yaml`, cherchez la prestation et changez la ligne `tarif:` :

```yaml
    - nom: "Cours individuel"
      tarif: "70 €"          ← nouveau prix
```

Faites la même chose dans `contenu/en.yaml` (`tarif: "€70"`).

### Ajouter une prestation

Copiez un bloc complet dans la liste `liste:` (de `- nom:` jusqu'avant le `- nom:` suivant), collez-le où vous voulez qu'il apparaisse, puis modifiez-le.

Champs possibles :

| Champ         | Rôle                                                                |
| ------------- | ------------------------------------------------------------------- |
| `nom`         | Nom affiché                                                         |
| `tarif`       | Prix unique (`"65 €"`, `"Sur devis"`)                               |
| `tarifs`      | Plusieurs prix (voir « Stage »)                                     |
| `frequence`   | Ex. `"4 séances par semaine"` (facultatif)                          |
| `image`       | Nom du fichier photo dans `src/images/`                             |
| `description` | Premier paragraphe                                                  |
| `details`     | Second paragraphe (facultatif)                                      |
| `infos`       | Informations pratiques (facultatif)                                 |
| `accueil`     | `true` pour l'afficher aussi sur la page d'accueil                  |
| `devis`       | `true` pour que le bouton propose « Demander un devis »             |

### Changer ou ajouter une photo

1. Déposez la photo (JPG, PNG ou WebP, idéalement au moins 2000 px de large pour les bannières) dans `src/images/`.
2. Écrivez son nom exact dans le fichier de contenu, par exemple `image: "debourrage-2025.jpg"`.

Les photos sont **compressées et redimensionnées automatiquement** à la publication.
Tant qu'un fichier n'existe pas, un cadre gris « Photo à fournir » s'affiche à sa place.

Noms de fichiers attendus actuellement :

- Bannières : `banniere-accueil.jpg`, `banniere-prestations.jpg`, `banniere-contact.jpg`
- À propos : `elodie.jpg`
- Prestations : `prestation-cours.jpg`, `prestation-stage.jpg`, `prestation-examens.jpg`, `prestation-evaluation.jpg`, `prestation-travail.jpg`, `prestation-pre-debourrage.jpg`, `prestation-debourrage.jpg`, `prestation-reeducation.jpg`
- Galerie : `galerie-01.jpg` à `galerie-06.jpg` (ajoutez-en autant que vous voulez dans la liste `galerie: images:`, avec une courte description `alt` pour Google et l'accessibilité)

### Publier les modifications

Le site est relié à un dépôt Git (GitHub). Chaque modification enregistrée sur la branche principale est **publiée automatiquement par Vercel en une à deux minutes**. Sur GitHub, vous pouvez modifier un fichier directement dans le navigateur (icône crayon), puis cliquer sur « Commit changes ».

---

## Mise en ligne (une seule fois)

1. **GitHub** : créer un dépôt et y envoyer ce dossier.
2. **Vercel** : « Add New → Project », importer le dépôt (Astro est détecté automatiquement).
3. **Nom de domaine** : dans Vercel → Settings → Domains, ajouter `another-way.fr` et `www.another-way.fr`, puis appliquer les enregistrements DNS indiqués chez le bureau d'enregistrement du domaine. Le HTTPS est automatique.
4. **Formulaire de contact (Resend)** :
   - créer un compte sur [resend.com](https://resend.com) ;
   - Domains → ajouter `another-way.fr` et ajouter les enregistrements DNS demandés (SPF/DKIM) ;
   - API Keys → créer une clé ;
   - dans Vercel → Settings → Environment Variables, ajouter :
     - `RESEND_API_KEY` = la clé Resend
     - `CONTACT_TO` = l'adresse qui reçoit les messages (ex. `contact@another-way.fr`)
     - `CONTACT_FROM` = `Another Way <formulaire@another-way.fr>`
   - redéployer.

Sans ces variables, le site fonctionne mais le formulaire affiche un message d'erreur invitant à appeler ou écrire directement.

---

## Pour le développement

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # vérifie que tout compile
```

Structure :

```
contenu/            ← textes, tarifs, coordonnées (FR / EN)
src/images/         ← photos (optimisées automatiquement)
public/             ← logo, favicon, robots.txt
src/views/          ← mise en page des pages
src/components/     ← en-tête, pied de page, galerie, bannière…
src/pages/          ← routes FR (/, /prestations, /contact…) et EN (/en/…)
src/pages/api/contact.ts  ← envoi du formulaire via Resend (fonction Vercel)
```

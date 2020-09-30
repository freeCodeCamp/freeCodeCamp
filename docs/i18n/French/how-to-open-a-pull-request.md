# Comment ouvrir une Pull Request (PR)

Une pull request vous permet d'envoyer des changements depuis votre fork sur GitHub vers le dépôt principal de freeCodeCamp.org. Une fois que vous avez fait des modifications au code, ou des défis de codage, vous devriez suivre ces directives pour envoyer une PR.

## Préparer un bon titre PR

Nous recommandons d'utiliser [titre et messages conventionnels](https://www.conventionalcommits.org/) pour les commits et les pull requests. La convention a le format suivant :

> `<type>([téles(s) optionnelle(s)) : <description>`
> 
> Par exemple :
> 
> `fix(learn): tests pour le défi de boucle...while`

Lorsque vous ouvrez une Pull Request(PR), vous pouvez utiliser ce qui suit pour déterminer le type, la portée (optionnelle) et la description.

**Type :**

| Type de texte | Quand sélectionner                                                                         |
|:------------- |:------------------------------------------------------------------------------------------ |
| réparer       | Modifié ou mis à jour/amélioré la fonctionnalité, les tests, le verbiage d'une leçon, etc. |
| don           | Seulement si vous ajoutez une nouvelle fonctionnalité, des tests, etc.                     |
| corniche      | Les changements qui ne sont pas liés au code, aux tests ou au verbiage d'une leçon.        |
| docs          | Modifie le répertoire `/docs` ou les lignes directrices de contribution, etc.              |

**Portée :**

Vous pouvez sélectionner une portée dans [cette liste d'étiquettes](https://github.com/freeCodeCamp/freeCodeCamp/labels?q=scope).

**Description :**

Gardez-le court (moins de 30 caractères) et simple, vous pouvez ajouter plus d'informations dans la zone de description des relations publiques et les commentaires.

Quelques exemples de bons titres de PRs seraient :

- `fix(a11y): contraste amélioré de la barre de recherche`
- `feat: ajouter plus de tests aux défis html et css`
- `fix(api,client): Empêcher les erreurs CORS lors de l'envoi du formulaire`
- `docs(i18n): Traduction en chinois de la configuration locale`

## Proposer une demande d'ajout

1. Une fois les modifications validées, vous serez invité à créer une pull request sur la page GitHub de votre fork.

   ![Image - Comparer l'invite de demande de fusion sur GitHub](./images/github/compare-pull-request-prompt.png)

2. Par défaut, toutes les demandes de fusion devraient être contre le dépôt principal de freeCodeCamp, la branche `master`.

   Assurez-vous que votre fork de base est réglé sur freeCodeCamp/freeCodeCamp lors de l'ascension d'une Pull Request.

   ![Image - Comparaison des forks lors d'une demande d'ajout](./images/github/comparing-forks-for-pull-request.png)

3. Soumettez la demande d'ajout de votre branche à la branche `master` de freeCodeCamp.

4. Dans le corps de votre RP, incluez un résumé plus détaillé des modifications que vous avez apportées et pourquoi.

   - Un modèle de pull request vous sera présenté. Il s'agit d'une liste de contrôle que vous devriez avoir suivie avant d'ouvrir la demande de tirage au sort.

   - Remplissez les détails comme bon vous semble. Ces renseignements seront examinés et les examinateurs décideront si votre demande d'ajout est acceptée ou non.

   - Si la PR est destinée à traiter un problème GitHub existant, alors, à la fin de le corps de description de votre PR, utiliser le mot clé _Ferme_ avec le numéro de la fiche à [fermer automatiquement ce problème si la PR est acceptée et fusionnée](https://help.github.com/en/articles/closing-issues-using-keywords).

     > Exemple: `Fermeture #123` fermera le ticket 123

5. Indiquez si vous avez testé ou non sur une copie locale du site.

   Ceci est très important lorsque vous effectuez des modifications qui ne sont pas seulement des modifications de contenu texte comme la documentation ou une description de défi. Des exemples de changements nécessitant des tests locaux incluent JavaScript, CSS, ou HTML qui pourraient modifier la fonctionnalité ou la disposition d'une page.

## Commentaires sur les demandes de Pull

> Félicitations ! :tada: pour avoir fait une PR et merci beaucoup d'avoir pris le temps de contribuer.

Nos modérateurs vont maintenant jeter un coup d'œil et vous laisser des commentaires. S'il vous plaît, soyez patient avec les autres modérateurs et respectez leur temps. Toutes les demandes d'ajout sont examinées en temps voulu.

Si vous avez besoin d'aide, veuillez discuter dans le salon de discussion [contributeurs](https://gitter.im/FreeCodeCamp/Contributors), nous sommes ravis de vous aider.

> [!TIP] Si vous voulez contribuer plus de pull requests, nous vous recommandons de lire les directives [en faisant des modifications et en synchronisant](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally?id=making-changes-locally) pour éviter d'avoir à supprimer votre fork.

## Conflit sur une pull request

Des conflits peuvent survenir parce que de nombreux contributeurs travaillent sur le référentiel, et les changements peuvent casser votre PR qui est en attente de révision et de fusion.

Le plus souvent vous n'aurez peut-être pas besoin d'une rebase, car nous écrasons tous les engagements, Cependant, si une rebase est demandée ici, c'est ce que vous devriez faire.

### Pour les corrections de bugs et les fonctionnalités habituelles

Lorsque vous travaillez sur des bugs et des fonctionnalités réguliers sur notre branche de développement `master`, vous êtes en mesure de faire une simple rebase :

1. Rebaser votre copie locale:

   ```console
   git checkout <pr-branch>
   git pull --rebase amont master
   ```

2. Résoudre les conflits et ajouter/modifier les commits

   ```console
   # Soit
   git add .
   git commit -m "chore: resolve conflicts"

   # Ou
   git add .
   Git commit --amende --no-edit
   ```

3. Repousser vos modifications à la PR

   ```console
   git push --force origine <pr-branch>
   ```

### Pour le programme et les fonctionnalités à venir

Lorsque vous travaillez sur les fonctionnalités de notre prochain programme `next-*` succursales, vous avez fait une sélection de cerises:

1. Assurez-vous que votre amont est synchronisé avec votre local:

   ```console
   git checkout master
   git fetch --all --prune
   git checkout next-python-projects
   git reset --hard upstream/next-python-projects
   ```

2. Prendre une sauvegarde

   a. Supprimez votre branche locale après avoir pris une sauvegarde (si vous l'avez toujours localement) :

      ```console
      git checkout <pr-branch-name>

      # exemple :
      # git checkout feat/add-numpy-video-question

      git checkout -b <backup-branch-name>

      # exemple :
      # git checkout -b backup-feat/add-numpy-video-question

      git branch -D <pr-branch-name>
      ```

   b. Ou juste une sauvegarde de votre branche pr (si vous ne l'avez pas localement) :

      ```console
      git checkout -b <backup-branch-name> origin/<pr-branch-name>

      # exemple :
      # git checkout -b backup-feat/add-numpy-video-question origin/feat/add-numpy-video-question
      ```

4. Commencez par un ardoise propre :

   ```console
   git checkout -b <pr-branch-name> next-python-projects
   git cherry-pick <commit-hash>
   ```

5. Résoudre tous les conflits, et nettoyer, installer les tests d'exécution

   ```console
   npm run clean

   npm ci
   npm exécuter test:curriculum --superblock=<superblock-name>

   # exemple :

   # npm exécuter test:curriculum --superblock=python-for-everyone

   ```

6. Si tout semble bien repoussé vers la PR

   ```console
   git push --force origine <pr-branch-name>
   ```

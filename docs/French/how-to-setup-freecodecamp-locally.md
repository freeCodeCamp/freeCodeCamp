# Configurer freeCodeCamp localement

Suivez ces instructions pour obtenir freeCodeCamp localement sur votre système. Ceci est fortement recommandé si vous souhaitez contribuer régulièrement.

Certains flux de travaux contributifs, tels que la prévisualisation des pages du guide ou les problèmes de codage, le débogage et la correction des bogues dans Codebase nécessitent l’exécution locale de freeCodeCamp.

## Fork le dépôt sur GitHub

['Forking'] (https://help.github.com/articles/about-forks/) est une étape où vous obtenez votre propre copie du référentiel principal de freeCodeCamp (a.k.a _repo_) sur GitHub.

Ceci est essentiel car vous pouvez ainsi travailler sur votre copie de freeCodeCamp sur GitHub ou la télécharger pour travailler localement. Plus tard, vous pourrez demander que les modifications soient extraites dans le référentiel principal via une demande d'extraction.

> ** Conseils: **
> Le référentiel principal à `https://github.com/freeCodeCamp/freeCodeCamp` est souvent désigné sous le nom de référentiel`upstream`.
> Votre fork à `https://github.com/YOUR_USER_NAME/freeCodeCamp` est souvent désigné sous le nom de référentiel`origin`.

** Suivez ces étapes pour créer le référentiel `https://github.com/freeCodeCamp/freeCodeCamp`: **

1. Accédez au référentiel freeCodeCamp sur GitHub: <https://github.com/freeCodeCamp/freeCodeCamp>
2. Cliquez sur le bouton "Fourchette" dans le coin supérieur droit de l'interface ([Plus de détails ici] (https://help.github.com/articles/fork-a-repo/)).
3. Une fois le référentiel créé, vous accéderez à votre copie de freeCodeCamp à l'adresse suivante: `https:// github.com/YOUR_USER_NAME/freeCodeCamp`.

! [GIF - Comment fourcher freeCodeCamp sur Github] (/docs /images/github/comment-fork-freeCodeCamp.gif)

## Préparation de l'environnement de développement

Une fois les conditions préalables installées, vous devez préparer votre environnement de développement. C'est courant pour de nombreux workflows de développement, et vous ne devez le faire qu'une seule fois.

** Suivez ces étapes pour préparer votre environnement de développement: **

1. Installez [Git] (https://git-scm.com/) ou votre client Git préféré, si ce n'est déjà fait. Mise à jour vers la dernière version, celle fournie avec votre système d'exploitation est peut-être obsolète.

2. (Facultatif mais recommandé) [Configurer une clé SSH] (https://help.github.com/articles/generating-an-ssh-key/) pour GitHub.

3. Installez un éditeur de code de votre choix.

    Nous vous recommandons vivement d’utiliser [Code VS] (https://code.visualstudio.com/) ou [Atom] (https://atom.io/). Ce sont quelques grands éditeurs de code gratuits et open source.

4. Configurez votre éditeur de code.

    Vous devez avoir [ESLint en cours d'exécution dans votre éditeur] (http://eslint.org/docs/user-guide/integrations.html), et il mettra en évidence tout ce qui n'est pas conforme au [Guide de style JavaScript de freeCodeCamp] (http: / /forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

    > Veuillez ne pas ignorer les erreurs de peluchage. Ils sont conçus pour vous aider et assurer une base de code propre et simple.

## Clonez votre copie de freeCodeCamp

Le ['clonage'] (https://help.github.com/articles/cloning-a-repository/) est une étape dans laquelle vous ** téléchargez ** une copie d'un référentiel dont vous êtes le propriétaire ou un tiers. un emplacement `distant`. Dans votre cas, cet emplacement distant est votre "fork" du référentiel de freeCodeCamp, qui devrait être disponible à l'adresse https://github.com/YOUR_USER_NAME/freeCodeCamp`.

Exécutez ces commandes sur votre ordinateur local:

1. Ouvrez un terminal / une invite de commande / Bash Shell dans votre répertoire de projets.

    _i.e ​​.: `/ votre répertoire de projet /` _

2. Clonez votre fork de freeCodeCamp en remplaçant `YOUR_USER_NAME` par votre nom d'utilisateur GitHub.

    ```shell
        git clone https://github.com/YOUR_USER_NAME/freeCodeCamp.git
    ```

Cela téléchargera l'intégralité du référentiel freeCodeCamp dans votre répertoire de projets.

## Configurer un `upstream` vers le dépôt principal

Maintenant que vous avez téléchargé une copie de votre fork, vous devez configurer un fichier `upstream`.

Comme mentionné précédemment, le référentiel principal à `https://github.com/freeCodeCamp/freeCodeCamp` est souvent désigné sous le nom de référentiel`upstream`. Votre fork à `https://github.com/YOUR_USER_NAME/freeCodeCamp` est souvent désigné sous le nom de référentiel`origin`.

Vous devez faire pointer votre clone local vers le `amont' en plus du `origin`. Cela vous permet de synchroniser les modifications depuis le référentiel principal. De cette façon, vous ne devez pas avoir à faire de la fourche et du clonage encore et encore.

1. Remplacez le répertoire par le nouveau répertoire freeCodeCamp:

    ```shell
    cd freeCodeCamp
    ```

2. Ajoutez une télécommande au référentiel principal freeCodeCamp:

    ```shell
    git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
    ```

3. Vérifiez que la configuration vous convient:

    ```shell
        git remote -v
    ```

        La sortie devrait être quelque chose comme ci-dessous:

    ```shell
        origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
        origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (push)
        upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
        upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (push)
    ```

## Exécution de freeCodeCamp localement sur votre machine

Maintenant que vous avez une copie locale de freeCodeCamp, vous pouvez suivre ces instructions pour le faire fonctionner localement. Cela vous aidera à:

- Prévisualiser les modifications apportées aux pages telles qu'elles apparaissent sur la plate-forme d'apprentissage.
- Travailler sur les problèmes et améliorations liés à l'interface utilisateur.
- Déboguer et résoudre les problèmes liés aux serveurs d'applications et aux applications client.

Vous pouvez ignorer l'exécution de freeCodeCamp localement, si vous ne faites que modifier des fichiers, effectuer un rebase ou résoudre des conflits de fusion. Vous pouvez toujours revenir à cette partie des instructions plus tard.

[Ignorer l'exécution de freeCodeCamp localement] (# apporter localement des modifications à votre clone de freecodecamp)

### Installation des prérequis

Commencez par installer ces logiciels prérequis.

| Prérequis | Version | Notes |
| ------------------------------------------- | ------- | ----- |
| [MongoDB Community Server] (https://docs.mongodb.com/manual/administration/install-community/) | `3.6` | [Notes de version] (https://docs.mongodb.com/manual/release-notes/), Remarque: nous sommes actuellement sur la version 3.6, une [mise à niveau est prévue] (https://github.com/freeCodeCamp/freeCodeCamp / issues / 18275).
| [Node.js] (http://nodejs.org) | `8.x` | [Calendrier LTS] (https://github.com/nodejs/Release#release-schedule) |
| npm (livré avec Node) | `6.x` | N'ayant pas de version LTS, nous utilisons la version fournie avec Node LTS |

**Important:**

Nous vous recommandons vivement de mettre à jour les dernières versions stables de a.k.a des versions de support à long terme (LTS) de ce qui précède.
Si Node.js ou MongoDB est déjà installé sur votre ordinateur, exécutez les commandes suivantes pour valider les versions:

```shell
node -v
mongo --version
npm -v
```

> Si vous avez une version différente, installez la version recommandée. Nous pouvons prendre en charge les problèmes d'installation pour les versions recommandées uniquement.

** J'ai des problèmes pour installer les conditions préalables recommandées. Que devrais-je faire?**

Nous développons régulièrement sur des systèmes d'exploitation populaires et récents, tels que macOS 10.12 ou ultérieur, Ubuntu 16.04 ou ultérieure et Windows 10. Il est recommandé de rechercher votre problème spécifique sur des ressources telles que: Google, Stack Overflow ou Stack Exchange. Il y a de fortes chances que quelqu'un ait été confronté au même problème et qu'il existe déjà une réponse à votre question spécifique.

Si vous utilisez un système d'exploitation différent et / ou que vous rencontrez toujours des problèmes, contactez la [communauté des contributeurs sur notre forum public] (https://www.freeCodeCamp.org/c/contributors) ou le [forum de discussion du contributeur]. (https://gitter.im/freeCodeCamp/Contributors). Nous pourrons peut-être résoudre certains problèmes courants.

Nous ne pouvons pas vous aider sur GitHub, car les problèmes d’installation de logiciels sortent du cadre de ce projet.

### Installation des dépendances

Commencez par installer les dépendances requises pour le démarrage de l'application.

`` `shell
# Installer les dépendances NPM
npm install
`` `

Ensuite, vous devez ajouter les variables d’environnement privé (API Keys):

```shell
# Créez une copie du fichier "sample.env" et nommez-le ".env".
# Remplissez-le avec les clés d'API et les secrets nécessaires:

# macOS / Linux
cp sample.env .env

# Les fenêtres
copy sample.env .env
```

Il n'est pas nécessaire que les clés soient modifiées pour exécuter l'application localement. Vous pouvez laisser les valeurs par défaut de `sample.env` telles quelles.

`MONGOHQ_URL` est le plus important. Sauf si MongoDB est exécuté dans une configuration différente de celle par défaut, l'URL dans le fichier `sample.env` devrait fonctionner correctement.

Vous pouvez laisser les autres clés telles quelles. N'oubliez pas que si vous souhaitez utiliser davantage de services, vous devez obtenir vos propres clés d'API pour ces services et modifier ces entrées en conséquence dans le fichier `.env`.

Ensuite, amorçons les différents services, à savoir le serveur api, l'application d'interface utilisateur client, etc. Vous pouvez [en savoir plus sur ces services dans ce guide] (#).

En amorçant vous liez les liens entre les services. Ils sont semi-indépendants. Cela signifie que ces services sont déployés en production sur leurs propres sites, mais lors de l'exécution locale, vous souhaitez qu'ils soient tous disponibles.

```shell
# Bootstrap tous les projets à l'intérieur de ce référentiel
npm run bootstrap
```

### Démarrer MongoDB

Avant de pouvoir lancer l’application, vous devez démarrer MongoDB:

Démarrer le serveur MongoDB dans un terminal séparé

- sur macOS et Ubuntu:

    ```shell
    Mongod
    ```

- Sous Windows, vous devez spécifier le chemin complet du binaire `mongod`

    Assurez-vous de remplacer `3.6` par la version que vous avez installée

    ```shell
    "C:\Program Files\MongoDB\Server\3.6\bin\mongod"
    ```

> ProTip:
> Vous pouvez éviter de devoir démarrer MongoDB à chaque fois, en l'installant en tant que service en arrière-plan.
> Vous pouvez [en savoir plus à ce sujet dans la documentation de votre système d'exploitation] (https://docs.mongodb.com/manual/administration/install-community/)

### Envois de la base de données

Ensuite, permet d'ensemencer la base de données. Dans cette étape, nous exécutons la commande ci-dessous qui remplira le serveur MongoDB avec certains ensembles de données initiaux requis par les autres services. Cela inclut quelques schémas, entre autres.

```shell
npm run seed
```

### Démarrer l'application cliente freeCodeCamp et le serveur d'API

Vous pouvez maintenant démarrer le serveur API et les applications client.

```shell
npm run develop
```

Cette commande unique déclenche tous les services, y compris le serveur API et les applications client sur lesquelles vous pouvez travailler.

Ouvrez maintenant un navigateur Web et visitez <http://localhost: 8000>. Si l'application se charge, félicitations, vous êtes prêt.

> ProTip:
>
> Le serveur d'API sert les API à l'adresse http://localhost:3000
> L’application Gatsby sert l’application cliente à l’adresse `http://localhost:8000`

Cela signifie que si vous visitez <http://localhost:3000/explorer>, vous devriez voir les API que nous avons.

Félicitations! Vous avez maintenant une copie de l'intégralité de la plate-forme d'apprentissage de freeCodeCamp s'exécutant sur votre ordinateur local.

## Référence aux commandes rapides lorsque vous travaillez localement

[Voici une référence rapide] (/docs/README.md) à une liste de commandes dont vous pourriez avoir besoin localement de temps en temps:

## Modifier localement votre clone de freeCodeCamp

Ensuite, vous pouvez modifier les fichiers et les valider.

Suivez ces étapes:

1. Vérifiez que vous êtes sur la branche `master`

    ```shell
    git status
    ```

    Vous devriez obtenir un résultat comme ceci:

    ```shell
    On branch master
    Your branch is up-to-date with 'origin/master'.

    nothing to commit, working directory clean
    ```

    Si vous n'êtes pas sur master ou si votre répertoire de travail n'est pas propre, résolvez tous les fichiers / commits en attente et extrayez le fichier `master`:

    ```shell
    git checkout master
    ```

2. Ensuite, vous voudriez `rebase` à partir du `upstream`.

    Cette étape ** synchronisera les dernières modifications ** du référentiel principal de freeCodeCamp. Il est important que vous rebasiez le plus souvent possible, pour éviter les conflits plus tard.

   ```shell
    git pull --rebase upstream master
    ```

    Vous pouvez éventuellement repousser cette branche à votre origine, pour avoir un historique vierge sur votre fork sur GitHub.

    ```shell
    git push origin master --force
    ```

3. Ensuite, vous devrez créer une nouvelle branche.

    Travailler sur une branche distincte pour chaque problème vous permet de garder votre copie de travail locale propre. Vous ne devriez jamais travailler sur le `master`. Cela va souiller votre copie de freeCodeCamp et vous devrez peut-être recommencer avec un clone ou une fourchette fraîche.

    Vérifiez que vous êtes sur `master` comme expliqué précédemment, et branchez à partir de là:

    ```shell
    git checkout -b fix/update-guide-for-xyz
    ``'

    Le nom de votre branche devrait commencer par `fix/`, `feat/`, etc. Évitez l’utilisation du problème no.s dans les branches. Gardez-les courts, significatifs et uniques.

    Quelques exemples de bons noms de branches sont:

     ```md
    fix/update-challenges-for-react
    fix/update-guide-for-html-css
    fix/platform-bug-sign-in-issues
    feat/add-guide-article-for-javascript
    translate/add-spanish-basic-html
    ```

4. Ensuite, vous pouvez travailler sur les pages d'édition et sur le code dans votre éditeur de texte préféré.

5. Une fois que vous êtes satisfait des modifications, vous devez éventuellement exécuter freeCodeCamp localement pour prévisualiser les modifications.

6. Assurez-vous de réparer les erreurs et vérifiez le formatage de vos modifications. Nous avons un guide de style pour les articles du Guide et les défis de codage.

7. Ensuite, vérifiez et confirmez les fichiers que vous mettez à jour

    ```shell
    git status
    ```

    Cela devrait afficher une liste des fichiers `unstaged` que vous avez édités.

    ```shell
    On branch feat/documentation
    Your branch is up to date with 'upstream/feat/documentation'.

    Changes not staged for commit:
    (use "git add/rm <file>..." to update what will be committed)
    (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   CONTRIBUTING.md
        modified:   docs/README.md
        modified:   docs/how-to-setup-freecodecamp-locally.md
        modified:   docs/how-to-work-on-guide-articles.md
    ...
    ```

8. Définissez les modifications et effectuez un commit.

    Dans cette étape, vous ne devez marquer que les fichiers que vous avez modifiés ou ajoutés. Vous pouvez effectuer une réinitialisation et résoudre les fichiers que vous n'aviez pas l'intention de modifier.

    ```shell
    git add path/to/my/changed/file.ext
    ```

    Ou bien, vous pouvez également ajouter tous les fichiers `unstaged` à la zone de stockage intermédiaire:

    ```shell
    git add .
    ```

    Seuls les fichiers qui ont été déplacés vers la zone de transfert seront ajoutés lors de la validation.

    ```shell
    git status
    ```

    Sortie:
    Output:
    ```shell
    On branch feat/documentation
    Your branch is up to date with 'upstream/feat/documentation'.

    Changes to be committed:
    (use "git reset HEAD <file>..." to unstage)

        modified:   CONTRIBUTING.md
        modified:   docs/README.md
        modified:   docs/how-to-setup-freecodecamp-locally.md
        modified:   docs/how-to-work-on-guide-articles.md
    ```

    Maintenant, vous pouvez valider vos modifications avec un court message comme ceci:

    ```shell
    git commit -m "fix: my short commit message"
    ```

    Quelques exemples:

    ```md
    fix: update guide article for Java - for loop
    feat: add guide article for alexa skills
    ```

    Optionnel:

    Nous vous recommandons fortement de faire un message de commit conventionnel. C’est une bonne pratique que vous verrez sur certains des référentiels Open Source populaires. En tant que développeur, cela vous encourage à suivre les pratiques standard.

    Voici quelques exemples de messages de validation classiques:

     ```md
    fix: update HTML guide article
    fix: update build scripts for Travis-CI
    feat: add article for JavaScript hoisting
    docs: update contributing guidelines
    ```

    Gardez ces courts, pas plus de 50 caractères. Vous pouvez toujours ajouter des informations supplémentaires dans la description du message de validation.

    Cela ne prend pas plus de temps qu'un message non conventionnel tel que 'update file' ou 'add index.md'

    Vous pouvez en apprendre plus sur les raisons pour lesquelles vous devriez utiliser des commits conventionnels [ici] (https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

9. Si vous vous rendez compte que vous devez éditer un fichier ou mettre à jour le message de validation après avoir validé, vous pouvez le faire après avoir édité les fichiers avec:

    ```shell
    git commit --amend
    ```

    Cela ouvrira un éditeur de texte par défaut comme `nano` ou` vi` où vous pourrez éditer le titre du message de validation et ajouter / éditer la description.

10. Ensuite, vous pouvez appliquer vos modifications à votre fork.

    ```shell
    git push origin branch/name-here
    ```

## Proposer une demande de tirage (PR)

1. Une fois les modifications validées, vous serez invité à créer une demande d'extraction sur la page GitHub de votre fork.

    ! [Image - Invite de demande de pull sur GitHub] (/ docs / images / github / compare-pull-request-prompt.png)

2. Par défaut, toutes les demandes d'extraction doivent être dirigées contre le référentiel principal de freeCodeCamp, branche `master`.

    Assurez-vous que votre fourche de base est définie sur freeCodeCamp / freeCodeCamp lorsque vous soulevez une demande d'extraction. **

    ! [Image - Comparaison de fourchettes lors d'une demande d'extraction] (/ docs / images / github / compare-forks-for-pull-request.png)

3. Soumettez la demande d'extraction de votre branche à la branche `master` de freeCodeCamp.

4. Dans le corps de votre PR, incluez un résumé plus détaillé des modifications que vous avez apportées et pourquoi.

    - Un modèle de demande de tirage vous sera présenté. C’est une liste de contrôle que vous auriez dû suivre avant d’ouvrir la demande de tirage.

    - Remplissez les détails comme ils vous conviennent. Ces informations seront examinées et décideront si votre demande d'extraction sera acceptée ou non.

    - Si le PR est censé résoudre un bug / problème existant, à la fin de
      Dans la description de votre PR, ajoutez le mot-clé `closes` et #xxxx (où xxxx
      est le numéro d'émission). Exemple: `ferme # 1337`. Ceci dit à GitHub de
      fermer automatiquement le numéro existant, si le RP est accepté et fusionné.

5. Indiquez si vous avez testé sur une copie locale du site ou non.

    Ceci est très important lorsque vous apportez des modifications qui ne sont pas des versions de fichiers de réduction d'édition. Par exemple, modifications apportées au code CSS ou JavaScript, etc.

## Obtenez votre PR accepté



## Obtenir de l'aide

Si vous êtes bloqué et avez besoin d’aide, faites-le nous savoir dans la catégorie ["Contributeurs" de notre forum] (https://www.freecodecamp.org/forum/c/contributors) ou dans le [forum de discussion des contributeurs] ( https://gitter.im/FreeCodeCamp/Contributors) sur Gitter.

Une erreur dans la console de votre navigateur ou dans Bash / Terminal / Ligne de commande peut aider à identifier le problème.

### Dépannage

Si l'application démarre mais que vous rencontrez des erreurs avec l'interface utilisateur elle-même, par exemple si les polices ne sont pas chargées ou si l'éditeur de code ne s'affiche pas correctement, vous pouvez essayer les étapes de dépannage suivantes au moins une fois:

```shell
# Supprimer tous les modules de noeud installés
rm -rf node_modules ./**/node_modules

# Réinstallez les paquets npm
npm install

# Bootstrap le projet
npm run bootstrap

# Semer la base de données
npm run seed

# Redémarrer l'application
npm run develop
```
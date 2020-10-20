Suivez ces directives pour configurer freeCodeCamp localement sur votre système. Ceci est fortement recommandé si vous voulez contribuer régulièrement.

Pour certains des flux de travail de contributions, vous devez faire fonctionner freeCodeCamp localement. Par exemple, la prévisualisation des défis de codage ou le débogage et la correction des bogues dans le codebase.

> [!TIP] Si vous n'êtes pas intéressé par la configuration locale de freeCodeCamp envisagez d'utiliser Gitpod, un environnement de développement gratuit en ligne.
> 
> [![Ouvrir dans Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)
> 
> (Démarre un environnement de développement prêt à être codé pour freeCodeCamp dans votre navigateur.)

## Préparez votre machine locale

Commencez par installer le logiciel requis pour votre système d'exploitation.

Nous supportons principalement le développement sur les systèmes **\*nix**. Notre personnel et nos contributeurs communautaires travaillent régulièrement avec la base de code en utilisant des outils installés sur Ubuntu et macOS.

Nous prenons également en charge Windows 10 via WSL2, que vous pouvez préparer en [lisant ce guide](/how-to-setup-wsl).

Certains membres de la communauté développent également sous Windows 10 nativement avec Git for Windows (Git Bash), et d'autres outils installés sous Windows. Nous n'avons pas de support officiel pour une telle configuration pour le moment, nous vous recommandons d'utiliser WSL2 à la place.

**Pré-requis :**

| Pré-requis                                                                                         | Version | Notes                                                                                                                                                                                                       |
| -------------------------------------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)                                                                       | `12.x`  | [Planification LTS](https://github.com/nodejs/Release#release-schedule)                                                                                                                                     |
| npm (livré avec un nœud)                                                                           | `6.x`   | N'a pas de versions LTS, nous utilisons la version fournie avec Node LTS                                                                                                                                    |
| [Serveur Communautaire MongoDB](https://docs.mongodb.com/manual/administration/install-community/) | `3.6`   | [Notes de publication](https://docs.mongodb.com/manual/release-notes/), Note : Nous sommes actuellement sur `3.6`, une mise à jour [est prévue](https://github.com/freeCodeCamp/freeCodeCamp/issues/18275). |

> [!DANGER] Si vous avez une version différente, veuillez installer la version recommandée. Nous ne pouvons supporter les problèmes d'installation que pour les versions recommandées. Voir [dépannage](#troubleshooting) pour plus de détails.

Si Node.js est déjà installé sur votre machine, exécutez les commandes suivantes pour valider les versions:

```console
noeud -v
npm -v
```

> [!TIP] Nous vous recommandons fortement de mettre à jour vers les dernières versions stables des logiciels énumérés ci-dessus, également connues sous le nom de versions de support à long terme (LTS).

Une fois les conditions préalables installées, vous devez préparer votre environnement de développement. Ceci est courant pour de nombreux flux de développement, et vous n'aurez besoin de le faire qu'une seule fois.

**Suivez ces étapes pour préparer votre environnement de développement :**

1. Installez [Git](https://git-scm.com/) ou votre client Git favori, si vous ne l'avez pas déjà fait. Mise à jour vers la dernière version ; la version qui est livrée avec votre OS peut être obsolète.

2. (Optionnel mais recommandé) [Configurer une clé SSH](https://help.github.com/articles/generating-an-ssh-key/) pour GitHub.

3. Installez un éditeur de code de votre choix.

   Nous vous recommandons fortement d'utiliser [Visual Studio Code](https://code.visualstudio.com/) ou [Atom](https://atom.io/). Ce sont de grands éditeurs de code gratuit et open source.

4. Configurez le linting pour votre éditeur de code.

   Vous devriez avoir [ESLint en cours d'exécution dans votre éditeur](http://eslint.org/docs/user-guide/integrations.html), et il mettra en évidence tout ce qui n'est pas conforme au [Guide de style JavaScript de freeCodeCamp](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

   > [!TIP] Veuillez ne pas ignorer les erreurs de linting. Ils sont destinés à **vous aider** et à assurer une base de code simple et propre.

## Fork le dépôt sur GitHub

[Forking](https://help.github.com/articles/about-forks/) est une étape où vous obtenez votre propre copie du dépôt principal de freeCodeCamp (a.k.a _repo_) sur GitHub.

C'est essentiel, car cela vous permet de travailler sur votre propre copie de freeCodeCamp sur GitHub, ou pour télécharger (cloner) votre référentiel pour travailler localement. Plus tard, vous serez en mesure de demander que des modifications soient introduites dans le dépôt principal à partir de votre fork via une pull request (PR).

> [!TIP] Le dépôt principal sur `https://github.com/freeCodeCamp/freeCodeCamp` est souvent appelé le dépôt `amont`.
> 
> Votre fork sur `https://github.com/YOUR_USER_NAME/freeCodeCamp` est souvent appelé le dépôt `origine`.

**Suivez ces étapes pour fork le dépôt `https://github.com/freeCodeCamp/freeCodeCamp`:**

1. Allez dans le dépôt freeCodeCamp sur GitHub : <https://github.com/freeCodeCamp/freeCodeCamp>

2. Cliquez sur le bouton "Fork" dans le coin supérieur droit de l'interface ([Plus de détails ici](https://help.github.com/articles/fork-a-repo/))

3. Une fois que le dépôt a été créé, vous serez redirigé vers votre copie du dépôt freeCodeCamp à `https://github.com/YOUR_USER_NAME/freeCodeCamp`

<details>
   <summary>
      Comment fork freeCodeCamp sur GitHub (capture d'écran)
   </summary>

   <br>
   <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/github/how-to-fork-freeCodeCamp.gif" alt="Comment fork freeCodeCamp sur GitHub" />
</details>

## Cloner votre fork depuis GitHub

[Cloner](https://help.github.com/articles/cloning-a-repository/) est l'endroit où vous **téléchargez** une copie d'un dépôt à partir d'un emplacement `distant` qui est soit la propriété de vous soit de quelqu'un d'autre. Dans votre cas, cet emplacement distant est votre `fork` du dépôt de freeCodeCamp qui devrait être disponible sur `https://github.com/YOUR_USER_NAME/freeCodeCamp`.

Exécutez ces commandes sur votre machine locale:

1. Ouvrir un Terminal / Invite de Commandes / Shell dans le répertoire de vos projets

   _i.e.: `/yourprojectsdirectory/`_

2. Clonez votre fork de freeCodeCamp, remplaçant `VOTRE_USER_NOM` par votre nom d'utilisateur GitHub

   ```console
   git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

Ceci va télécharger l'intégralité du dépôt freeCodeCamp dans votre répertoire de projets.

Remarque : `--depth=1` crée un clone peu profond de votre fork, avec seulement l'historique/livraison la plus récente.

## Configurer la synchronisation à partir du parent

Maintenant que vous avez téléchargé une copie de votre fork, vous devrez configurer une télécommande `amont` dans le dépôt parent.

[Comme mentionné précédemment](#fork-the-repository-on-github), le dépôt principal est référé `au dépôt amont`. Votre fork est le dépôt `origine`.

Vous avez besoin d'une référence de votre clone local vers le dépôt `amont` en plus du dépôt `origine`. C'est pour que vous puissiez synchroniser les changements depuis le référentiel principal sans avoir besoin de forking et de clonage à plusieurs reprises.

1. Changer de répertoire vers le nouveau répertoire de freeCodeCamp :

   ```console
   cd freeCodeCamp
   ```

2. Ajouter une référence distante au dépôt principal de freeCodeCamp :

   ```console
   git remote add amont https://github.com/freeCodeCamp/freeCodeCamp.git
   ```

3. Assurez-vous que la configuration semble correcte :

   ```console
   git remote -v
   ```

   La sortie devrait ressembler à quelque chose comme ci-dessous:

   ```console
   origine https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
   origine https://github.com/YOUR_USER_NAME/freeCodeCamp.git (push)
   amont https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
   amont https://github.com/freeCodeCamp/freeCodeCamp.git (push)
   ```

## Exécution locale de freeCodeCamp

Maintenant que vous avez une copie locale de freeCodeCamp, vous pouvez suivre ces instructions pour l'exécuter localement. Cela vous permettra de :

- Aperçu des modifications des pages telles qu'elles apparaîtraient sur la plateforme d'apprentissage.
- Travailler sur les problèmes et améliorations liés à l'interface utilisateur.
- Déboguer et corriger les problèmes avec les serveurs d'application et les applications clients.

Si vous rencontrez des problèmes, effectuez d'abord une recherche sur le Web pour trouver votre problème et vérifiez s'il a déjà été répondu. Si vous ne trouvez pas de solution, veuillez rechercher une solution dans notre page des [problèmes GitHub](https://github.com/freeCodeCamp/freeCodeCamp/issues) et signaler le problème s'il n'a pas encore été signalé.

Et comme toujours, n'hésitez pas à vous rendre sur notre salon de discussion [Contributeurs sur Gitter](https://gitter.im/FreeCodeCamp/Contributors) ou [notre serveur Discord](https://discord.gg/pFspAhS), pour des requêtes rapides.

> [!TIP] Vous pouvez ignorer l'exécution de freeCodeCamp localement si vous éditez simplement des fichiers. Par exemple, effectuer un `rebase`, ou résoudre `fusion` conflits.
> 
> Vous pouvez toujours revenir à cette partie des instructions plus tard. Vous devriez **seulement** sauter cette étape si vous n'avez pas besoin d'exécuter les applications sur votre machine.
> 
> [Passez à apporter des modifications](#making-changes-locally).

### Configuration des dépendances

#### Étape 1 : Configurez le fichier de variable d'environnement

Les clés API par défaut et les variables d'environnement sont stockées dans le fichier `sample.env`. Ce fichier doit être copié dans un nouveau fichier nommé `.env` qui est accédé dynamiquement à l'étape d'installation.

```console
# Créez une copie du fichier "sample.env" et nommez-le ".env".
# Remplissez-le avec les clés API nécessaires et les secrets :

# macOS / Linux
cp échantillon. nv .env

# Windows
copier sample.env .env .env
```

Les clés du fichier `.env` sont _pas_ nécessaires pour exécuter l'application localement. Vous pouvez laisser les valeurs par défaut copiées depuis `sample.env` tel quel.

> [!TIP] Gardez à l'esprit si vous voulez utiliser des services comme Auth0 ou Algolia, vous devrez acquérir vos propres clés API pour ces services et modifier les entrées en conséquence dans le `. fichier nv`.

#### Étape 2 : Installer les dépendances

Cette étape va installer les dépendances nécessaires à l'exécution de l'application :

```console
npm ci
```

#### Étape 3: Démarrer MongoDB et semer la base de données

Avant de pouvoir exécuter l'application localement, vous devrez démarrer le service MongoDB.

> [!NOTE] Sauf si vous avez MongoDB en cours d'exécution dans une configuration différente de celle par défaut, l'URL stockée comme la valeur `MONGOHQ_URL` dans le `. le fichier nv` devrait fonctionner correctement. Si vous utilisez une configuration personnalisée, modifiez cette valeur si nécessaire.

Lancer le serveur MongoDB dans un terminal séparé :

- Sur macOS & Ubuntu:

  ```console
  mongod
  ```

- Sous Windows, vous devez spécifier le chemin complet vers le binaire `mondieu`

  ```console
  "C:\Program Files\MongoDB\Server\3.6\bin\mongod"
  ```

  Assurez-vous de remplacer `3.6` par la version que vous avez installée

> [!TIP] Vous pouvez éviter d'avoir à démarrer MongoDB à chaque fois en l'installant en tant que service d'arrière-plan. Vous pouvez [en apprendre plus à ce sujet dans leur documentation pour votre OS](https://docs.mongodb.com/manual/administration/install-community/)

Ensuite, nous allons semer la base de données. Dans cette étape, nous exécutons la commande ci-dessous qui remplit le serveur MongoDB avec des jeux de données initiaux qui sont requis par les services. Il s'agit notamment de quelques schémas.

```console
graine npm run
```

#### Étape 4 : Démarrez l'application client et le serveur API de FreeCodeCamp

Vous pouvez maintenant démarrer le serveur API et les applications client.

```console
Développement de npm run
```

Cette commande unique lancera tous les services, y compris le serveur API et les applications client sur lesquelles vous pouvez travailler.

> [!NOTE] Une fois prêt, ouvrez un navigateur web et **visitez <http://localhost:8000>**. Si l'application se charge, félicitations, vous êtes prêt ! Vous avez maintenant une copie de la totalité de la plate-forme d'apprentissage de FreeCodeCamp fonctionnant sur votre machine locale.

> [!TIP] Le serveur API sert les API à `http://localhost:3000`. L'application Gatsby sert l'application client à `http://localhost:8000`

> Si vous visitez <http://localhost:3000/explorer> vous devriez voir les API disponibles.

## Se connecter avec un utilisateur local

Votre configuration locale remplit automatiquement un utilisateur local dans la base de données. En cliquant sur le bouton `Se connecter` vous authentifiera automatiquement dans l'application locale.

Cependant, accéder à la page du portfolio de l'utilisateur est un peu délicat. En cours de développement, Gatsby prend en charge les pages côté client et vous obtiendrez donc une page `404` pour le portefeuille utilisateur lorsque vous travaillez localement.

Cliquez simplement sur le bouton **"Aperçu de la page personnalisée 404 page"** vous dirigera vers la bonne page.

<details>
   <summary>
      Comment se connecter lorsque vous travaillez localement (capture d'écran)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/29990697/71541249-f63cdf00-2923-11ea-8a85-cefb6f9c9977.gif" alt="Comment se connecter lorsque vous travaillez localement" />
</details>

## Effectuer des modifications localement

Vous pouvez maintenant apporter des modifications aux fichiers et valider vos modifications à votre clone local de votre fork.

Suivez ces étapes:

1. Validez que vous êtes sur la branche `master`:

   ```console
   git status
   ```

   Vous devriez obtenir une sortie comme ceci :

   ```console
   Sur le maître de la branche
   Votre branche est à jour avec 'origin/master'.

   rien à valider, le dossier de travail est nettoyé
   ```

   Si vous n'êtes pas sur master ou que votre répertoire de travail n'est pas propre, résolvez tous les fichiers/commits en suspens et vérifiez `master`:

   ```console
   Git checkout master
   ```

2. Synchronisez les derniers changements depuis la branche principale `master` de freeCodeCamp vers votre branche locale principale :

   > [!AVERTISSEMENT] Si vous avez une demande de pull en suspens que vous avez faite à partir de la branche `master` de votre fork, vous les perdrez à la fin de cette étape.
   > 
   > Vous devez vous assurer que votre pull request est fusionné par un modérateur avant d'effectuer cette étape. Pour éviter ce scénario, vous devriez **toujours** travailler sur une branche autre que le `maître`.

   Cette étape **synchronisera les derniers changements** depuis le dépôt principal de freeCodeCamp. Il est important que vous refondiez votre branche au dessus de la dernière `amont / maître` aussi souvent que possible pour éviter les conflits plus tard.

   Mettez à jour votre copie locale du dépôt amont de freeCodeCamp :

   ```console
   git récupère en amont
   ```

   Réinitialisation dure de votre branche principale avec le maître de freeCodeCamp :

   ```console
   git reset --hard upstream/master
   ```

   Poussez votre branche principale vers votre origine pour avoir un historique propre sur votre fork sur GitHub :

   ```console
   git push origin master --force
   ```

   Vous pouvez valider votre maître actuel correspond à l'amont / maître en effectuant un diff :

   ```console
   Git diff amont / maître
   ```

   La sortie résultante doit être vide.

3. Créer une nouvelle branche:

   Travailler sur une branche distincte pour chaque problème vous aide à garder votre copie de travail locale propre. Vous ne devriez jamais travailler sur le `maître`. Cela permettra de salir votre copie de freeCodeCamp et vous devrez peut-être recommencer avec un nouveau clone ou une nouvelle fourchette.

   Vérifiez que vous êtes sur `master` comme expliqué précédemment, et la branche à partir de là :

   ```console
   git checkout -b fixe/update-guide-for-xyz
   ```

   Le nom de votre branche doit commencer par un `fix/`, `feat/`, `docs/`, etc. Évitez d'utiliser les numéros de fiches dans les branches. Gardez-les courtes, significatives et uniques.

   Quelques exemples de bons noms de branches sont :

   ```md
   fix/update-challenges-for-react
   fix/update-guide-for-html-css
   fix/platform-bug-sign-in-issues
   feat/add-guide-article-for-javascript
   translate/add-spanish-basic-html
   ```

4. Modifiez les pages et travaillez sur le code dans votre éditeur de texte favori.

5. Une fois que vous êtes satisfait des modifications, vous devriez éventuellement exécuter freeCodeCamp localement pour prévisualiser les modifications.

6. Assurez-vous de corriger toutes les erreurs et vérifiez le formatage de vos modifications.

7. Vérifiez et confirmez les fichiers que vous mettez à jour :

   ```console
   git status
   ```

   Ceci devrait afficher une liste de `fichiers non staged` que vous avez modifiés.

   ```console
   Sur le feat/documentation de la branche
   Votre branche est à jour avec 'upstream/feat/documentation'.

   Changements non staged pour commit:
   (utilisez "git add/rm <file>... pour mettre à jour ce qui sera livré)
   (utilisez "git checkout -- <file>. ." pour ignorer les changements dans le répertoire de travail)

       modifié : CONTRIBUTING. d
       modifié : docs/README.md
       modifié : docs/how-to-setup-freecodecamp-locally. d
       modifié: docs/how-to-work-on-guide-articles.md
...
   ```

8. Étapez les modifications et validez:

   Dans cette étape, vous ne devriez marquer que les fichiers que vous avez modifiés ou ajoutés vous-même. Vous pouvez effectuer une réinitialisation et résoudre les fichiers que vous n'aviez pas l'intention de modifier si nécessaire.

   ```console
   git add path/to/my/changed/file.ext
   ```

   Ou vous pouvez ajouter tous les fichiers `non staged` à la zone de staging :

   ```console
   git add .
   ```

   Seuls les fichiers qui ont été déplacés dans la zone de pré-production seront ajoutés lorsque vous effectuerez une livraison.

   ```console
   git status
   ```

   Sortie :

   ```console
   Sur le feat/documentation de la branche
   Votre branche est à jour avec 'upstream/feat/documentation'.

   Changements à valider :
   (utiliser "git reset HEAD <file>..." pour unstage)

       modifié : CONTRIBUTING.md
       modifié : docs/README.md
       modifié : docs/how-to-setup-freecodecamp-locally.md
       modifié : docs/how-to-work-on-guide-articles.md
   ```

   Maintenant, vous pouvez valider vos changements avec un message court comme ceci:

   ```console
   git commit -m "fix: mon message de commit court"
   ```

   Quelques exemples:

   ```md
   Correction : mise à jour de l'article de guide pour Java - don pour la boucle
   : ajout d'un article de guide pour les compétences alexa
   ```

   Optionnel:

   Nous vous recommandons vivement de faire un message d'engagement conventionnel. C'est une bonne pratique que vous verrez sur certains des dépôts populaires Open Source. En tant que développeur, cela vous encourage à suivre les pratiques standard.

   Quelques exemples de messages de commit conventionnels sont :

   ```md
   Correction : mise à jour de l'article du guide HTML
   : mise à jour des scripts de construction pour Travis-CI
   feat: ajout d'un article pour le hachage JavaScript
   docs : mise à jour des lignes directrices de contribution
   ```

   Conservez ces caractères courts, pas plus de 50 caractères. Vous pouvez toujours ajouter des informations supplémentaires dans la description du message de livraison.

   Cela ne prend pas de temps supplémentaire qu'un message non conventionnel comme 'fichier de mise à jour' ou 'ajouter index.md'

   Vous pouvez en savoir plus sur pourquoi vous devriez utiliser des commits conventionnels [ici](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

9. Si vous vous rendez compte que vous devez éditer un fichier ou mettre à jour le message de commit après avoir fait une livraison, vous pouvez le faire après avoir édité les fichiers avec:

   ```console
   Git commit --amender
   ```

   Cela ouvrira un éditeur de texte par défaut comme `nano` ou `vi` où vous pourrez modifier le titre du message de commit et ajouter/modifier la description.

10. Ensuite, vous pouvez envoyer vos modifications à votre fork:

    ```console
    Git pousser la branche/le nom de l'origine ici
    ```

## Proposer une Pull Request (PR)

Après avoir validé vos modifications, vérifiez ici : [comment ouvrir une Pull Request](how-to-open-a-pull-request.md).

## Référence des commandes rapides

Une référence rapide aux commandes dont vous aurez besoin lorsque vous travaillerez localement.

| commande                                                            | Libellé                                                                                            |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `npm ci`                                                            | Installe / réinstalle toutes les dépendances et amorce les différents services.                    |
| `graine npm run`                                                    | Analyse tous les fichiers markdown du challenge et les insère dans MongoDB.                        |
| `Développement de npm run`                                          | Démarre le serveur API et les applications client de freeCodeCamp.                                 |
| `Test npm`                                                          | Exécutez tous les tests JS du système, y compris le client, le serveur, lint et les tests de défi. |
| `npm exécuter test:client`                                          | Exécutez la suite de tests client.                                                                 |
| `npm exécuter test:curriculum`                                      | Exécutez la suite de tests du programme.                                                           |
| `npm exécuter test:curriculum --block='HTML de base et HTML5'`      | Teste un bloc spécifique.                                                                          |
| `npm exécuter test:curriculum --superblock='responsive-web-design'` | Teste un SuperBlock spécifique.                                                                    |
| `npm run testest-curriculum-full-output`                            | Exécuter la suite de test du curriculum vitae sans se détourner après la première erreur           |
| `npm exécuter test:server`                                          | Exécutez la suite de tests du serveur.                                                             |
| `npm run e2e`                                                       | Exécutez la fin de Cypress pour terminer les tests.                                                |
| `npm run clean`                                                     | Désinstalle toutes les dépendances et nettoie les caches.                                          |

## Dépannage

### Problèmes avec l'installation des conditions préalables recommandées

Nous développons régulièrement sur les systèmes d'exploitation les plus récents ou les plus populaires comme macOS 10.15 ou supérieurs, Ubuntu 18.04 ou plus récent et Windows 10 (avec WSL2).

Il est recommandé d'étudier votre problème spécifique sur des ressources telles que Google, Stack Overflow et Stack Exchange. Il y a de bonnes chances que quelqu'un ait été confronté au même problème et il y a déjà une réponse à votre question spécifique.

Si vous êtes sur un système d'exploitation différent et/ou que vous rencontrez toujours des problèmes, consultez [obtenir de l'aide](#getting-help).

> [!ATTENTION]
> 
> Veuillez éviter de créer des tickets GitHub pour les problèmes préalables. Ils sont hors du champ d'application de ce projet.

### Problèmes avec l'interface utilisateur, les polices, les erreurs de construction, etc.

Si vous rencontrez des problèmes avec l'interface utilisateur, les polices ou les erreurs de compilation, un nettoyage peut être utile :

```console
npm run clean
npm ci
npm run seed
npm run develop
```

OU

Utiliser le raccourci

```
npm run cleanan-and-develop
```

Si vous continuez à rencontrer des problèmes avec la compilation, le nettoyage de l'espace de travail est recommandé.

Utilisez `git clean` en mode interatif:

```
git clean -ifdX
```

<details>
   <summary>
      Comment nettoyer les fichiers non suivis git (capture d'écran)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/1884376/94270515-ca579400-ff5d-11ea-8ff1-152cade31654.gif" alt="Comment nettoyer les fichiers git non suivis" />
</details>

### Problèmes avec API, Login, Soumissions de défi, etc.

Si vous ne pouvez pas vous connecter, et à la place vous voyez une bannière avec un message d'erreur qu'il sera signalé à freeCodeCamp, veuillez vérifier que votre port local `3000` n'est pas utilisé par un autre programme.

**Sous Linux / macOS / WSL sous Windows - Depuis le Terminal :**

```console
netstat -ab | grep "3000"

tcp4 0 0 0.0.0.0:3000 DESKTOP LISTEN
```

**Sous Windows - À partir de PowerShell élevé :**

```powershell
netstat -ab | Chaîne de sélection "3000"

TCP 0.0.0.0:3000 DESKTOP LISTENING
```

### Problèmes d'installation des dépendances

Si vous obtenez des erreurs lors de l'installation des dépendances, assurez-vous que vous n'êtes pas dans un réseau restreint ou que vos paramètres de pare-feu ne vous empêchent pas d'accéder aux ressources.

La première configuration peut prendre un certain temps selon la bande passante de votre réseau. Soyez patient, et si vous êtes toujours coincés, nous vous recommandons d'utiliser GitPod au lieu d'une installation hors ligne.

## Obtenir de l'aide

Si vous êtes coincé et avez besoin d'aide, faites-le nous savoir en demandant dans la catégorie ['Contributeurs' sur notre forum](https://forum.freecodecamp.org/c/contributors) ou dans la salle de discussion [Contributeurs](https://gitter.im/FreeCodeCamp/Contributors) sur Gitter.

Il peut y avoir une erreur dans la console de votre navigateur ou dans Bash / Terminal / Ligne de commande qui aidera à identifier le problème. Fournissez ce message d'erreur dans votre description de problème afin que les autres puissent plus facilement identifier le problème et vous aider à trouver une solution.

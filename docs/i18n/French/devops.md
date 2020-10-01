# Opérations des développeurs sur freeCodeCamp.org

Ce guide vous aidera à comprendre notre pile d'infrastructures et comment nous maintenons nos plates-formes. Bien que ce guide n'ait pas de détails exhaustifs pour toutes les opérations, il pourrait être utilisé comme référence pour votre compréhension des systèmes.

Faites-nous savoir si vous avez des commentaires ou des questions, et nous serons heureux de les clarifier.

## Comment construire, tester et déployer la base de code?

Ce dépôt est continuellement construit, testé et déployé sur **des ensembles d'infrastructures séparés (serveurs, bases de données, CDNs, etc.)**.

Cela implique trois étapes à suivre dans l'ordre :

1. De nouveaux changements (correctifs et fonctionnalités) sont fusionnés dans notre branche de développement primaire (`master`) via des demandes de fusion.
2. Ces changements sont exécutés par une série de tests automatisés.
3. Une fois les tests passés, nous publions les changements (ou les mettre à jour si nécessaire) vers les déploiements de notre infrastructure.

#### Construction de la base de code - Mapping Git Branches to Deployments.

Généralement, [`master`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master) (la branche de développement par défaut) est fusionnée dans la branche [`production-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) une fois par jour et est libérée dans une infrastructure isolée.

Il s'agit d'une version intermédiaire pour nos développeurs et nos contributeurs bénévoles. Il est également connu sous le nom de notre version « stagiaire » ou « bêta ».

Il est identique à notre environnement de production en direct sur `freeCodeCamp.org`, en utilisant un ensemble séparé de bases de données, de serveurs, de proxys Web, etc. Cette isolation nous permet de tester le développement et les fonctionnalités en cours dans une "production" comme le scénario, sans affecter les utilisateurs réguliers des plates-formes principales de freeCodeCamp.org.

Une fois que l'équipe de développeurs [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) est satisfaite des changements sur la plate-forme de mise en scène, ces changements sont déplacés tous les quelques jours vers la branche [`en cours de production`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current).

C'est la version finale qui déplace les changements sur nos plateformes de production sur freeCodeCamp.org.

#### Changements de test - Essais d'intégration et d'acceptation de l'utilisateur.

Nous employons différents niveaux d’intégration et d’acceptation pour vérifier la qualité du code. Tous nos tests sont effectués par le biais de logiciels tels que [Travis CI](https://travis-ci.org/freeCodeCamp/freeCodeCamp) et [Pipelines Azure](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp).

Nous avons des tests unitaires pour tester nos solutions de défi, les API serveur et les interfaces utilisateur client. Celles-ci nous aident à tester l'intégration entre les différents composants.

> [!NOTE] Nous sommes également en train d'écrire des tests utilisateur final qui aideront à reproduire des scénarios de monde réel comme la mise à jour d'un e-mail ou un appel à l'API ou aux services tiers.

Ensemble, ces tests aident à empêcher les problèmes de se répéter et à s'assurer que nous n'introduisons pas de bogue lorsque nous travaillons sur un autre bogue ou une fonctionnalité.

#### Déploiement des modifications - Envoi des modifications aux serveurs.

Nous avons configuré des logiciels de livraison continue pour pousser les changements à nos serveurs de développement et de production.

Une fois que les modifications sont poussées vers les branches de version protégées, un pipeline de construction est automatiquement déclenché pour la branche. Les pipelines de construction sont chargés de construire des artefacts et de les garder dans un entrepôt froid pour une utilisation ultérieure.

Le pipeline de construction continue à déclencher un pipeline de sortie correspondant s'il termine une exécution réussie. Les pipelines de version sont responsables de la collecte des artefacts de compilation, de leur déplacement vers les serveurs et de leur mise en ligne.

Le statut des versions et des versions sont [disponibles ici](#build-test-and-deployment-status).

## Déclenchement d'une construction, d'un test et d'un déploiement.

Actuellement, seuls les membres de l'équipe de développement peuvent pousser vers les branches de production. Les modifications apportées aux branches `production-*` ne peuvent atterrir que via une fusion rapide vers le [`amont`](https://github.com/freeCodeCamp/freeCodeCamp).

> [!NOTE] Dans les jours à venir, nous améliorerions ce flux à faire via pull-requests, pour une meilleure gestion de l'accès et de la transparence.

### Envoi des modifications vers les applications de pré-production.

1. Configurez vos télécommandes correctement.

   ```sh
   git remote -v
   ```

   **Résultats :**

   ```
   origine git@github.com:raisedadead/freeCodeCamp.git (fetch)
   origine git@github.com:raisedadead/freeCodeCamp.git (push)
   amont git@github.com:freeCodeCamp/freeCodeCamp.git (fetch)
   amont git@github.com:freeCodeCamp/freeCodeCamp.git (push)
   ```

2. Assurez-vous que votre branche `master` est intacte et synchronisée avec le flux amont.

   ```sh
   git checkout master
   git fetch --all --prune
   git reset --hard upstream/master
   ```

3. Vérifiez que le CI Travis passe la branche `master` pour amont.

   Les [tests d'intégration continue](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) doivent être verts et PASSING pour la branche `maître`.

    <details> <summary> Vérification de l'état sur Travis CI (capture d'écran) </summary>
      <br>
      ![Vérifier l'état de la construction sur Travis CI](https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/devops/travis-build.png)
    </details>

   Si cela échoue, vous devriez vous arrêter et enquêter sur les erreurs.

4. Confirmez que vous êtes en mesure de construire le dépôt localement.

   ```
   npm run cleanan-and-develop
   ```

5. Déplacer les modifications de `master` vers `production-staging` via une fusion rapide

   ```
   git checkout production-staging
   git merge master
   git push amont
   ```

   > [!NOTE] Vous ne serez pas en mesure de forcer le push et si vous avez réécrit l'historique de toute façon, ces commandes seront erronées.
   > 
   > S'ils le font, vous avez peut-être fait quelque chose d'incorrectement et vous devriez juste recommencer.

Les étapes ci-dessus déclencheront automatiquement un lancement sur le pipeline de construction pour la branche `en pré-production`. Une fois la compilation terminée, les artefacts sont enregistrés en tant que fichiers `.zip` dans un stockage froid à récupérer et à utiliser plus tard.

Le pipeline de publication est déclenché automatiquement lorsqu'un nouvel artefact est disponible à partir du pipeline de construction connecté. Pour les plates-formes de pré-diffusion, ce processus ne nécessite pas d'approbation manuelle et les artefacts sont poussés vers le CDN client et les serveurs API.

> [!TIP|label:Estimes] Typiquement, le build run prend environ 20-25 minutes pour être terminé suivi de la release run qui prend environ 15-20 minutes pour le client, et ~5-10 minutes pour que l'API soit disponible en direct. Du push de code à la mise en ligne sur les plates-formes de pré-production, tout le processus prend **~35-45 minutes** au total.

### Envoi des modifications aux applications de production.

Le processus est essentiellement le même que les plates-formes de pré-diffusion, avec quelques vérifications supplémentaires en place. C'est juste pour s'assurer que nous ne brisons rien sur freeCodeCamp.org qui peut voir des centaines d'utilisateurs l'utilisant à tout moment.

| N'exécutez PAS ces commandes à moins que vous n'ayez vérifié que tout fonctionne sur la plate-forme de pré-production. Vous ne devriez pas contourner ou ignorer les tests lors de la mise en scène avant de poursuivre. |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                                                                                                                          |


1. Assurez-vous que votre branche `production-staging` est intacte et synchronisée avec le flux amont.

   ```sh
   git checkout production-staging
   git fetch --all --prune
   git reset --hard upstream/production-staging
   ```

2. Déplacer les modifications de `production-staging` vers `production-current` via une fusion rapide

   ```
   git checkout production-current
   git merge production-staging
   git push amont
   ```

   > [!NOTE] Vous ne serez pas en mesure de forcer le push et si vous avez réécrit l'historique de toute façon, ces commandes seront erronées.
   > 
   > S'ils le font, vous avez peut-être fait quelque chose d'incorrectement et vous devriez juste recommencer.

Les étapes ci-dessus déclencheront automatiquement un lancement sur le pipeline de construction pour la branche `en cours de production`. Une fois qu'un artefact de construction est prêt, il déclenchera un run sur le pipeline de publication.

> [!TIP|label:Estimes] Généralement, la compilation prend entre 20 et 25 minutes pour être terminée.

**Étapes supplémentaires pour l'action du personnel**

Une fois la version déclenchée, les membres du personnel du développeur recevront un courriel d’intervention manuelle automatisé. Ils peuvent soit _approuver_ ou _rejeter_ la release run.

Si les changements fonctionnent bien et ont été testés sur la plate-forme de mise en scène, alors ils peuvent être approuvés. L'approbation doit être donnée dans les 4 heures suivant le déclenchement de la publication avant d'être rejetée automatiquement. Une équipe peut relancer manuellement l'exécution de la version pour les exécutions rejetées, ou attendre le prochain cycle de publication.

Pour l'utilisation du personnel :

| Vérifiez votre email pour un lien direct ou [allez dans le tableau de bord de la version](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) une fois que la version est terminée. |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                                               |


Une fois que l'un des membres du personnel aura approuvé une publication, le pipeline poussera les changements en direct vers les serveurs CDN de production et API de freeCodeCamp.org. Ils prennent généralement ~15-20 minutes pour le client, et ~5 minutes pour que les serveurs API soient disponibles en direct.

> [!TIP|label:Estimes] Le lancement de la version prend généralement entre 15 et 20 minutes pour chaque instance du client, et entre 5 et 10 minutes pour chaque instance de l'API qui sera disponible en direct. Du push de code au live sur les plates-formes de production, tout le processus prend **~90-120 minutes** au total (sans compter le temps d'attente pour l'approbation du personnel).

## Construire, tester et déployer le statut

Voici l'état actuel du test, de la construction et du déploiement du codebase.

| Type de texte          | Branche                                                                                             | Statut                                                                                                                                                                                                                                                          | Tableau de bord                                                                                         |
|:---------------------- |:--------------------------------------------------------------------------------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------------------- |
| Tests de CI            | [`maître`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master)                                | ![Statut de la construction de Travis CI](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=master)                                                                                                                                                    | [Aller au tableau de bord des statuts](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Tests de CI            | [`production-pré-production`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | ![Statut de la construction de Travis CI](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-staging)                                                                                                                                        | [Aller au tableau de bord des statuts](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Construire un pipeline | [`production-pré-production`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | [![Statut de la compilation](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-dev-ci?branchName=production-staging)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=15&branchName=production-staging) | [Aller au tableau de bord des statuts](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| Relâcher le Pipeline   | [`production-pré-production`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) |                                                                                                                                                                                                                                                                 | [Aller au tableau de bord des statuts](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |
| Tests de CI            | [`production-actuelle`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current)       | ![Statut de la construction de Travis CI](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-current)                                                                                                                                        | [Aller au tableau de bord des statuts](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Construire un pipeline | [`production-actuelle`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)       | [![Statut de la compilation](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-org-ci?branchName=production-current)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=17&branchName=production-current) | [Aller au tableau de bord des statuts](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| Relâcher le Pipeline   | [`production-actuelle`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)       |                                                                                                                                                                                                                                                                 | [Aller au tableau de bord des statuts](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |

## Accès anticipé et test bêta

Nous vous souhaitons la bienvenue pour tester ces versions en mode **« bêta test publique »** et obtenir un accès rapide aux fonctionnalités à venir sur les plates-formes. Parfois, ces fonctionnalités/modifications sont appelées **suivantes, bêta, stagnation,** etc. de manière interchangeable.

Vos contributions par le biais de commentaires et de rapports de problèmes nous aideront à faire des plates-formes de production sur `freeCodeCamp. rg` plus **résilient**, **cohérent** et **stable** pour tout le monde.

Nous vous remercions d'avoir signalé les bogues que vous rencontrez et d'aider à améliorer freeCodeCamp.org. Vous piquez!

### Identification de la prochaine version des plates-formes

Actuellement, une version publique de test bêta est disponible sur :

<h1 align="center"><a href='https://www.freecodecamp.dev' _target='blank'>freecodecamp.dev</a></h1>

> [!NOTE] Le nom de domaine est différent de **`freeCodeCamp.org`**. Ceci est intentionnel pour empêcher l'indexation des moteurs de recherche et éviter la confusion pour les utilisateurs réguliers de la plate-forme.

### Identification de la version actuelle des plateformes

**La version actuelle de la plateforme est toujours disponible sur [`freeCodeCamp.org`](https://www.freecodecamp.org).**

L'équipe du développeur fusionne les changements de la branche `pré-production` à la branche `production-current` quand ils publient des changements. Le meilleur commit devrait être ce que vous voyez en direct sur le site.

Vous pouvez identifier la version exacte déployée en visitant les journaux de construction et de déploiement disponibles dans la section d'état. Vous pouvez également nous envoyer un message dans le salon de discussion [contributeurs](https://gitter.im/FreeCodeCamp/Contributors) pour une confirmation.

### Limitations connues

Il y a des limitations et des compromis connus lors de l'utilisation de la version bêta de la plate-forme.

- #### All data / personal progress on these beta platforms `will NOT be saved or carried over` to production.

  **Les utilisateurs de la version bêta auront un compte séparé de la production.** La version bêta utilise une base de données physiquement séparée de la production. Cela nous permet de prévenir toute perte accidentelle de données ou de modifications. L'équipe de développement peut purger la base de données sur cette version bêta si nécessaire.

- #### Il n'y a aucune garantie quant à la disponibilité et à la fiabilité des plates-formes bêta.

  Le déploiement devrait être fréquent et en itérations rapides, parfois plusieurs fois par jour. En conséquence, il y aura des temps d'arrêt inattendus ou des fonctionnalités cassées sur la version bêta.

- #### N'envoyez pas des utilisateurs réguliers sur ce site pour confirmer un correctif

  Le site bêta est et a toujours été d'augmenter le développement local et de tester, rien d'autre. Ce n’est pas une promesse de ce qui va se passer, mais un aperçu de ce sur quoi on travaille.

- #### La page des signes peut sembler différente de la production

   Nous utilisons un locataire de test pour freecodecamp.dev sur Auth0, et donc nous n'avons pas la possibilité de définir un domaine personnalisé. Cela fait que tous les callbacks de redirection et la page de connexion apparaissent dans un domaine par défaut comme : `https://freecodecamp-dev.auth0.com/`. Cela n'affecte pas la fonctionnalité est aussi proche de la production que nous pouvons obtenir.

## Signaler des problèmes et laisser un commentaire

Veuillez ouvrir de nouveaux tickets pour les discussions et rapporter des bogues. Vous pouvez les étiqueter comme **[`version : next/beta`](https://github.com/freeCodeCamp/freeCodeCamp/labels/release%3A%20next%2Fbeta)** pour le triage.

Vous pouvez envoyer un email à `dev[at]freecodecamp.org` si vous avez des questions. Comme toujours, toutes les vulnérabilités de sécurité doivent être signalées à `sécurité[at]freecodecamp.org` au lieu du tracker public et du forum.

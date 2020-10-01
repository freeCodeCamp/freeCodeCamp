# Utiliser les modèles de réponse

Voici quelques-uns des modèles de réponse standard que vous pouvez utiliser lors de l'examen des demandes d'ajout et du triage des problèmes.

> Vous pouvez créer votre propre compte avec la fonctionnalité intégrée de GitHub [**Réponses enregistrées**](https://github.com/settings/replies/) ou utiliser celles ci-dessous.

### Merci

```markdown
Merci pour votre contribution à la page! :thumbs_up :
Nous sommes heureux d'accepter ces changements et nous attendons avec impatience les contributions futures. 🎉
```

### Merci et félicitations

> Pour remercier et encourager les contributeurs pour la première fois.

```markdown
Bonjour @username. Félicitations pour votre première pull request (PR)! 🎉

Merci pour votre contribution à la page ! :thumbs_up :
Nous sommes heureux d'accepter ces changements et nous attendons avec impatience les contributions futures. 📝
```

### Erreur de compilation

```markdown
Bonjour @username

Nous aimerions pouvoir fusionner vos modifications, mais il semble qu'il y ait une erreur avec la version CI de Travis. ⚠️

Une fois que vous aurez résolu ces problèmes, nous pourrons revoir votre PR et la fusionner. 😊

---

> N'hésitez pas à faire référence au [Guide de style pour écrire des articles](https://github. om/freeCodeCamp/freeCodeCamp#article-title) pour ce dépôt sur le formatage d'un article correctement pour que votre version Travis CI passe bien. ✅
>
> De plus, il est préférable d'écrire une brève description de vos changements lors de la création d'une PR. 📝
```

### Synchronisation de la fourche

> Lorsque la PR n'est pas à jour avec la branche `master`.

``````markdown
Bonjour @username

Nous aimerions pouvoir fusionner vos modifications, mais il semble qu'il y ait une erreur avec la version CI de Travis. ⚠️

```bash
Erreur: ENOTDIR: pas un répertoire, ouvrez 'src/pages/java/data-abstraction/index.md'
``````

Cette erreur particulière n'a pas été causée par votre fichier mais était une ancienne erreur causée par la fusion du code défectueux à la branche `master`. Depuis, il a été résolu.

Pour passer la compilation, vous devrez synchroniser les dernières modifications depuis la branche `master` du dépôt `freeCodeCamp/freeCodeCamp`.

En utilisant la ligne de commande, vous pouvez le faire en trois étapes simples :

```bash
git remote add amont git://github.com/freeCodeCamp/freeCodeCamp.git

git fetch amont

git pull upstream master
```

Si vous utilisez une GUI, vous pouvez simplement `ajouter une nouvelle télécommande...` et utiliser le lien `git://github.com/freeCodeCamp/freeCodeCamp.git` d'en haut.

Une fois que vous aurez synchronisé votre fork et passé la compilation, nous pourrons revoir votre PR et la fusionner. 😊

---

> N'hésitez pas à référencer l'article [Synchroniser un fork](https://help.github.com/articles/syncing-a-fork/) sur GitHub pour plus d'informations sur la façon de maintenir votre fork à jour avec le dépôt amont. 🔄
> 
> En outre, il est bon de noter sur GitHub une brève description de vos changements lors de la création d'une PR. 📝
``````

### Fusionner les conflits

> Quand PR a des conflits de fusion qui doivent être résolus.1

```markdown
Hey @username

Nous aimerions pouvoir fusionner vos modifications, mais il semble que vous ayez des conflits de fusion.

⚠️

Une fois que vous aurez résolu ces conflits, nous pourrons revoir votre PR et la fusionner. 😊

---

> Si vous n'êtes pas familier avec le processus de conflit de fusion, n'hésitez pas à consulter le guide de GitHub sur ["Résoudre un conflit de fusion"](https://help. ithub.com/articles/resolving-a-merge-conflict-on-github/). 🔍
>
> De plus, il est préférable d'écrire une brève description de vos changements lors de la création d'une PR. 📝
``````
1 Si un contributeur pour la première fois a un conflit de fusion, les responsables résoudront le conflit pour eux.

### Duplicate

> Lorsque la PR est répétitive ou un doublon.

```markdown
Bonjour @username

Il semble que des modifications similaires aient déjà été acceptées plus tôt pour cet article que vous modifiez, désolé. 😓

Si vous avez plus à ajouter, n'hésitez pas à ouvrir une nouvelle PR.

Merci encore! 😊

---

> Si vous avez des questions, n'hésitez pas à rejoindre par [Gitter](https://gitter.im/FreeCodeCamp/Contributeurs) ou en commentant ci-dessous. 💬
```

### Fermeture des demandes de fusion non valides

> Quand la PR est invalide.

```markdown
Hey @username

Vous n'avez ajouté aucun contenu, nous allons fermer cette PR et la marquer comme `invalid`. 😓

Mais n'hésitez pas à ouvrir une autre PR ! 👍
```
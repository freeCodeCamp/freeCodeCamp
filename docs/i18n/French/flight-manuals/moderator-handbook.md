# Le manuel officiel du modérateur de freeCodeCamp.

Cela vous aidera à modérer différents endroits dans notre communauté, y compris :

- Problèmes GitHub & demandes de fusion
- Le forum, les salons de chat, les groupes Facebook et d'autres lieux de rencontre en ligne
- Événements en personne comme les groupes d'étude, les hackathons et les conférences

**Tous les modérateurs de freeCodeCamp sont des modérateurs à l'échelle de la communauté. Cela signifie que nous avons confiance en vous pour superviser l'un de ces endroits.**

Ceci dit, vous pouvez être modérateur dans tous les endroits qui vous intéressent le plus. Certains modérateurs aident simplement sur GitHub. D'autres aident simplement sur le forum. Certains modérateurs sont actifs partout.

En fin de compte, nous voulons que vous aimiez être modérateur, et investissez votre peu de temps dans des endroits qui vous intéressent.

> [!NOTE] « Avec une grande puissance, il y a une grande responsabilité. » - Oncle Ben

En tant que modérateur, le tempérament est plus important que la compétence technique.

« Écoutez. » Soyez utile. N'abusez pas de votre pouvoir.

freeCodeCamp est une communauté inclusive, et nous devons le garder ainsi.

Nous avons un code de conduite unique qui régit toute notre communauté. Moins il y a de règles, plus il est facile de s'en souvenir. Vous pouvez lire ces règles et les valider dans la mémoire [ici](https://code-of-conduct.freecodecamp.org).

# Moderating GitHub

Les modérateurs ont la possibilité de fermer les tickets et d'accepter ou de fermer les pull requests.

Les modérateurs ont deux responsabilités principales vis-à-vis de GitHub :

1. QA et fusion des demandes de fusion
2. Évaluation et réponse aux problèmes

## Modération des demandes d'ajout

Les Pull Requests (PR) sont la façon dont les contributeurs soumettent des modifications au dépôt de freeCodeCamp. Il est important que nous réalisions une assurance qualité (QA) sur les demandes de fusion avant de décider si nous devons les fusionner ou les fermer.

### Types de demandes d'ajout

1. **Modifications d'instructions de défi** Ce sont des changements au texte des défis - la description, les instructions ou le texte de test. Vous pouvez également consulter ces droits sur GitHub et décider de les fusionner. Nous devons être un peu plus prudents à cet égard, parce que des millions de personnes rencontreront ce texte au fur et à mesure qu'elles fonctionneront dans le programme de freeCodeCamp. La demande d'ajout rend-elle le texte plus clair sans le rendre beaucoup plus long ? Les modifications sont-elles pertinentes et pas excessivement pédantes ? Rappelez-vous que notre objectif est que les défis soient aussi clairs et aussi courts que possible. Ils ne sont pas l'endroit pour des détails obscurs. En outre, les contributeurs peuvent essayer d'ajouter des liens vers des ressources aux défis. Vous pouvez fermer ces pull requests et y répondre avec ceci:

   > Je vous remercie pour votre pull request.
   > 
   > Je termine cette demande de tirage au sort. Veuillez ajouter des liens et d'autres détails à l'article correspondant au challenge à la place.
   > 
   > Si vous pensez que je me trompe en fermant ce problème, veuillez le rouvrir et ajouter des précisions supplémentaires. Je vous remercie et je suis heureux de coder.

2. **Défiez des modifications de Code** Ce sont des modifications au code dans un défi - la graine de défi, la solution de défi et les chaînes de test. Ces demandes de fusion doivent être retirées de GitHub et testées sur votre ordinateur local pour s'assurer que les tests de challenge peuvent toujours être passés avec la solution actuelle, et le nouveau code n'introduit aucune erreur. Certains contributeurs peuvent essayer d'ajouter des tests supplémentaires pour couvrir les angles pédantiques. Nous devons veiller à ne pas compliquer le défi. Ces défis et leurs tests devraient être aussi simples et intuitifs que possible. Outre les défis liés à l'algorithme et la section de préparation aux entretiens, les apprenants devraient être en mesure de résoudre chaque défi en environ 2 minutes.

3. **Changements de Codebase** Ces modifications de code modifient la fonctionnalité de la plate-forme freeCodeCamp elle-même. Parfois, les contributeurs essaient de faire des changements sans grande explication, mais pour les changements de code, nous devons nous assurer qu'il y a un véritable besoin de changement. Ainsi, ces pull requests devraient faire référence à un problème GitHub existant où les raisons du changement sont discutées. Ensuite, vous pouvez ouvrir la demande de tirage sur votre ordinateur et les tester localement. Une fois que vous avez fait cela, si les changements sont bons, ne les fusionnez pas encore. Vous pouvez commenter la pull request en disant "LGTM", puis mentionner @raisedadead pour qu'il puisse y jeter un coup d'œil.

### Comment fusionner ou fermer les demandes de fusion

Tout d'abord, lorsque vous choisissez une demande d'ajout à QA, vous devez vous y assigner. Vous pouvez le faire en cliquant sur le lien "assigner vous-même" sous la partie "assignés" dans la colonne de droite de l'interface de GitHub.

Selon le type de pull request il est, suivez les règles correspondantes énumérées ci-dessus.

Avant de fusionner toute demande de pull, assurez-vous que GitHub a des coches vertes pour tout. S'il y a des X's, étudiez-les d'abord et voyez comment les faire passer en coches vertes.

Parfois, il y aura un conflit de fusion. Cela signifie qu'une autre demande d'ajout a modifié exactement la même partie du même fichier. GitHub a un outil pour résoudre ces conflits de fusion sur GitHub. Vous pouvez essayer de résoudre ces conflits. Utilisez simplement votre meilleur jugement. Les changements de la demande de tirage seront en haut et les changements de la branche principale seront en bas. Parfois, il y aura des informations redondantes qui pourront être supprimées. Before you finish, be sure to delete the `<<<<<<`, `======`, and `>>>>>>` that Git adds to indicate areas of conflict.

Si la pull request semble prête à fusionner (et ne nécessite pas l'approbation de @raisedadead), vous pouvez aller de l'avant et la fusionner. Assurez-vous d'utiliser la fonctionnalité par défaut "Squash and Merge" sur GitHub. Cela va écraser toutes les livraisons de requêtes de fusion en une seule livraison, ce qui rend l'histoire de Git beaucoup plus facile à lire.

Vous devriez ensuite commenter la pull request, en remerciant le contributeur de votre manière personnelle.

Si l'auteur de la pull request est un « contributeur pour la première fois », vous devriez également les féliciter pour leur première pull request fusionnée au dépôt. Vous pouvez regarder le coin supérieur droit du corps du RP pour déterminer un contributeur pour la première fois.  Il affichera `Premier contributeur` comme indiqué ci-dessous:

![Copy_edits_for_Java_arrays_article_by_karentobo_%C2%B7_Pull_Request__20615_%C2%B7_freeCodeCamp_freeCodeCamp|690x281](https://i.imgur.com/dTQMjGM.png)

Si la demande d'ajout ne semble pas prête à fusionner, vous pouvez poliment répondre à l'auteur en disant ce qu'il doit faire pour qu'elle soit prête. Espérons qu'ils répondront et se rapprocheront de leur demande de tirage pour être prêts.

Souvent, une pull request sera évidemment un effort faible. Vous pouvez souvent le dire immédiatement lorsque le contributeur n'a pas pris la peine de vérifier les cases à cocher dans le modèle de Pull Request, ou a utilisé un titre générique de demande d'ajout comme « made changes » ou « Update index.

Il y a également des situations où le contributeur essaie d'ajouter un lien vers son propre site web, ou inclure une bibliothèque qu'ils ont eux-mêmes créée, ou a un montage frivole qui ne sert à personne d'autre que lui-même.

Dans ces deux situations, vous devriez aller de l'avant et fermer leur pull request et répondre avec ce message standard :

> Merci d'avoir ouvert cette pull request.
> 
> Ceci est un message standard vous informant que nous avons vérifié votre pull request et que nous avons décidé de ne pas la fusionner. Nous serions heureux de recevoir de votre part de futures demandes de tirage au sort.
> 
> Je vous remercie et je suis heureux de coder.

Si vous avez besoin d'un deuxième avis sur une pull request, allez-y et laissez vos commentaires sur la pull request, puis ajoutez l'étiquette "discussing" à la pull request.

## Modération des tickets GitHub

freeCodeCamp est un projet open source actif. Nous recevons chaque jour de nouvelles questions, qui doivent toutes être triées et étiquetées.

### Types de problèmes GitHub

1. **Demande d'aide de code**, pour laquelle les gens ont créé des problèmes GitHub. Si quelqu'un demande de l'aide, collez le message suivant, puis fermez le problème.

   > Merci d'avoir signalé ce problème.
   > 
   > Ceci est un message standard vous informant que ce problème semble être une demande d'aide. Au lieu de demander de l'aide ici, veuillez cliquer sur le bouton \*\*"Aide"\*\* sur le défi sur freeCodeCamp, qui vous aidera à créer une question dans la bonne partie du forum. Les bénévoles sur le forum répondent généralement aux questions en quelques heures et peuvent aider à déterminer s'il y a un problème avec votre code ou les tests du défi.
   > 
   > Si les membres du forum déterminent qu'il n'y a rien de mal avec votre code, vous pouvez demander que ce problème soit réouvert. 
   > 
   > Je vous remercie et je suis heureux de coder.

2. **Problèmes de bogue ou de clarification** Essayez de reproduire le bogue vous-même si vous le pouvez. Sinon, demandez-leur les étapes pour reproduire le bogue, et s'ils ont des captures d'écran, des vidéos ou des détails supplémentaires qui peuvent vous aider à reproduire le problème. Une fois que vous pouvez reproduire le problème - ou au moins confirmer qu'il s'agit d'un problème légal - étiquez-le `confirmé`. Alors:

- S'il s'agit d'un simple changement par rapport à un défi existant, étiqueter comme `premiers minuteurs seulement`, sinon étiqueter comme `aide voulait`. Utilisez d'autres étiquettes comme il se doit.
- Si le problème est plus significatif, marquer comme `bogue`. &nbsp; S'il y a une ambiguïté quant à la bonne façon d'agir sur une question, N'hésitez pas à taguer @raisedadead sur le problème obtenez son avis, puis ajoutez l'étiquette `Discussing`.

3. **Problèmes dupliqués** Si un problème est le même qu'un autre problème signalé, le problème signalé précédemment doit avoir la priorité. Marquer comme `Dupliquer`, coller le message suivant en remplaçant `#XXXXX` par le numéro du ticket, puis fermer le ticket.

   > Merci d'avoir signalé ce problème.
   > 
   > Ceci est un message standard vous informant que ce problème semble être très similaire au problème #XXXXX, donc je le ferme comme un doublon.
   > 
   > Si vous pensez que je me trompe en fermant ce problème, veuillez le rouvrir et ajouter des précisions supplémentaires. Je vous remercie et je suis heureux de coder.

4. **Correction en pré-production** Certains problèmes ont peut-être déjà été résolus dans la mise en scène, mais aucun problème GitHub ne leur est associé. Si c'est le cas, vous pouvez coller le message suivant, fermer le problème et ajouter un label `: résolu/expédition`:

   > Merci d'avoir signalé ce problème.
   > 
   > Ceci est un message standard vous informant que le problème que vous avez mentionné ici est présent en production, mais qu'il a déjà été corrigé dans la mise en scène. Cela signifie que la prochaine fois que nous pousserons notre branche de production vers la production, ce problème devrait être résolu. À cause de cela, je clôt cette question.
   > 
   > Si vous pensez que je me trompe en fermant ce problème, veuillez le rouvrir et ajouter des précisions supplémentaires. Je vous remercie et je suis heureux de coder.

### Étape de clôture, obsolète, problèmes inactifs et demandes de fusion

- Les problèmes ou PRs sont ceux qui n'ont pas vu d'activité de l'OP depuis 21 jours (3 semaines de la dernière activité), mais seulement après qu'un modérateur a demandé plus d'informations/de modifications.  Ils peuvent être fermés dans un script automatisé/bot ou par les modérateurs eux-mêmes.

- L'activité est définie en tant que : Commentaires demandant une mise à jour sur la PR et les triages comme le statut `: mise à jour de l'étiquette` requise, etc.

- Si l'OP demande une aide supplémentaire ou même du temps, ce qui précède peut être assoupli et révisé après qu'une réponse ait été donnée. Dans tous les cas, les mods doivent utiliser leur meilleur jugement pour résoudre le statut du PR.

### Autres directives pour les modérateurs sur GitHub

Bien que vous ayez accès en écriture au dépôt de freeCodeCamp, **vous ne devriez jamais envoyer de code directement dans les dépôts de freeCodeCamp**. Tout le code doit entrer la base de code de freeCodeCamp sous la forme d'une pull request depuis un fork du dépôt.

En outre, vous ne devriez jamais accepter vos propres PR. Ils doivent être QA'd par un autre modérateur, comme pour tout autre PR.

Si vous remarquez quelqu'un qui enfreint le [code de conduite](https://code-of-conduct.freecodecamp.org) sur les problèmes GitHub, ou en ouvrant des demandes d'ajout avec un contenu ou un code malveillant, envoyez un courriel à dev@freecodecamp. rg avec un lien vers la pull request offensante et nous pouvons envisager de les bannir de l'organisation GitHub de freeCodeCamp.

# Modération du forum

En tant que modérateur, vous aidez à faire de notre communauté un endroit agréable pour que tout le monde apprenne et obtienne de l'aide. Vous vous occuperez des messages signalés et gérerez le spam, hors sujet et autres conversations inappropriées.

Notez qu'une fois que vous êtes modérateur sur le forum, vous allez commencer à voir des conseils de modérateur bleu sur les membres du forum, comme "c'est la première fois que [person] a posté - bienvenue à la communauté ! ou"[person] n'a pas posté depuis longtemps - saluons-les à nouveau."

![Un message texte bleu disant "c'est la première fois que [person] est posté - bienvenue à la communauté !](https://i.imgur.com/mPmVgzK.png)

Ce sont des occasions pour vous de les accueillir et de les rendre plus spéciaux. Vous ne savez jamais quelle personne est marginalement impliquée peut devenir notre prochain super-aideur, en aidant beaucoup d'autres personnes dans leur voyage de codage. Même la moindre bonté peut déclencher une cascade de bonnes actions.

### Suppression des messages du forum

Les modérateurs du forum ont la possibilité de supprimer les messages de l'utilisateur. Vous ne devriez le faire que pour les instances suivantes :

1. Quelqu'un a posté une image pornographique ou graphiquement violente.
2. Quelqu'un a posté un lien ou un code qui est malveillant dans la nature, et pourrait nuire à d'autres campeurs qui cliquent dessus.
3. Quelqu'un a inondé un fil de discussion avec beaucoup de spam.

### Traiter avec du spam

Pour le premier message de spam d'un utilisateur, envoyez-lui un message expliquant le problème et supprimez le lien ou le message si nécessaire. Laissez une note sur le profil de l'utilisateur expliquant l'action que vous avez faite. Si le problème persiste, suivez le processus ci-dessus. Empêcher silencieusement l'utilisateur de poster (en utilisant l'option silence sur le panneau d'administration de l'utilisateur), puis envoyer un avertissement avec le Code de Conduite. Cochez la case dans le message privé indiquant que votre message est un « avertissement officiel ».

Vous pouvez poser des questions et signaler des incidents dans la section [du forum du personnel](https://forum.freecodecamp.com/c/staff).

### Traiter des conversations hors-sujet

Les messages ou les sujets qui semblent être au mauvais endroit peuvent être recatégorisés ou renommés en ce qui serait approprié.

Dans des circonstances exceptionnelles, il peut être approprié pour un modérateur de créer une discussion sur plusieurs sujets.

Encore une fois, si vous avez des problèmes ou des questions, écrivez avec vos actions dans la catégorie du personnel, et taguer un autre modérateur si vous voulez qu'ils passent en revue vos actions de modération.

### Utilisateurs mineurs

Nos conditions générales de service exigent que les utilisateurs de freeCodeCamp aient au moins 13 ans. Si un utilisateur révèle qu'il a moins de 13 ans, envoyer le message ci-dessous et supprimer leur compte de forum (si la suppression n'est pas disponible, la suspension du compte est suffisante). Ensuite envoyez un e-mail à [Quincy](https://forum.freecodecamp.org/u/QuincyLarson) (quincy@freecodecamp.org) ou [Mrugesh](https://forum.freecodecamp.org/u/raisedadead) (mrugesh@freecodecamp.org) pour supprimer également le compte de l'utilisateur freeCodeCamp.

```markdown
SUBJET : Les utilisateurs de moins de 13 ans ne sont pas autorisés à utiliser le forum par conditions d'utilisation

Il nous a été signalé que vous avez moins de 13 ans. Par [conditions d'utilisation du freeCodeCamp](https://www.freecodecamp.org/news/conditions-of-service), vous devez avoir au moins 13 ans pour utiliser le site ou le forum. Nous allons supprimer à la fois votre compte freeCodeCamp et votre compte de forum. Cette restriction nous maintient en conformité avec les lois américaines.

Veuillez vous inscrire une fois que vous avez atteint l'âge d'au moins 13 ans.

Je vous remercie de votre compréhension.
```

# Modération de Facebook

Si vous voyez quelque chose qui semble enfreindre notre [Code de Conduite](https://code-of-conduct.freecodecamp.org/), vous devriez le supprimer immédiatement.

Parfois, les gens publieront des choses qu'ils jugent drôles. Ils ne se rendent pas compte que ce qu'ils ont dit ou ce qu'ils ont partagé pourrait être interprété comme offensant. Dans ces cas, leur publication devrait être supprimée, mais la personne qui l'a postée n'a pas nécessairement besoin d'être interdite. En faisant supprimer leur poste, ils comprendront, espérons-le, que ce qu'ils ont posté est inapproprié.

Mais s'il s'agit d'une infraction flagrante qui ne peut raisonnablement être attribuée à une différence culturelle ou à un malentendu de la langue anglaise. alors vous devriez fortement envisager de bloquer le membre du groupe Facebook.

# Modération de Discord

Voici comment les modérateurs traitent les violations de notre [Code de conduite](https://code-of-conduct.freecodecamp.org/) sur Discord :

1. **Assurez-vous que l'intention était d'enfreindre le Code de Conduite.** Toutes les violations du CoC n'étaient pas prévues en tant que telles. Un nouveau campeur peut poster une grande quantité de code pour de l'aide, sans savoir que cela peut être considéré comme du spamming. Dans ces cas, vous pouvez simplement leur demander de coller leur code avec des services comme Codepen ou Pastebin.

2. **Si le campeur viole clairement le Code de Conduite, le modérateur procédera comme suit:**

- Suspendre le campeur, mais ne pas les avertir ou les menacer. Au lieu de cela, donnez-leur tranquillement le rôle suspendu sur Discord, puis envoyez-leur le message suivant :

```
Ceci est un message standard vous informant que j'ai dû vous suspendre temporairement de parler sur le serveur Discord de freeCodeCamp.

Je suis un modérateur agissant au nom de notre communauté open source. Je peux envisager de supprimer votre suspension, mais j'ai besoin que vous preniez d'abord les 3 étapes suivantes :

1. Lisez notre Code de Conduite: https://code-of-conduct.freecodecamp.org/
2. Envoyez-moi un message de retour confirmant que vous avez fini de le lire. 3. Expliquez-moi pourquoi vous pensez que je vous ai suspendu et pourquoi je devrais supprimer votre suspension.
```

- Signaler un bref résumé de l'événement et comment ils y ont répondu dans le canal #admin. Voici un exemple de ce à quoi un tel résumé pourrait ressembler :

```
Suspendu : _@username_
Raison(s): _Spamming, trolling_
Preuvement: _Un ou plusieurs liens vers le(s) message(s) offensant(s)_
CoC: _Envoyé_
```

- Un rapport pour supprimer une suspension devrait ressembler à :

```
J'ai retiré la suspension de `@username `. Je leur ai envoyé le code de conduite. Ils ont tout juste compris aujourd'hui qu'ils avaient été suspendus et se sont excusés pour ce qu'ils ont fait.
```

- Selon la réponse des délinquants, le modérateur décidera si la suspension doit être retirée du campeur. S'ils semblent respectueux et excusables, le modérateur peut supprimer la suspension. En matière de politique, les modérateurs seront polis au cours de ce processus, même si le campeur offensant s'est mal comporté. S'ils ne sont pas respectueux ou peu disposés à accepter le CoC, la suspension devrait être suivie avec un ban du serveur Discord. Utilisez le même résumé que ci-dessus, mais remplacez "Suspended:" par "Banni :".

3. **Comment bannir et/ou débannir**

- Pour bannir quelqu'un, faites un clic droit sur son nom d'utilisateur/photo de profil et sélectionnez "Bannir <username>". Vous aurez la possibilité de supprimer leurs messages précédents - sélectionnez "Ne pas supprimer aucun message", car les messages doivent rester présents en tant que documents historiques.
- Si vous décidez d'interdire quelqu'un, cela signifie qu'ils ne sont pas disposés à respecter notre code de conduite. C'est pourquoi il est rare que l'interdiction d'un Camper se produise. Cependant, si le besoin se présente, vous pouvez le faire en cliquant sur le nom du serveur, en choisissant "Paramètres du serveur", en choisissant "Bans", en sélectionnant l'utilisateur que vous souhaitez débannir, et en cliquant sur "Révoquer Ban".

Les bannissements de Discord sont globaux - vous ne pouvez pas bannir un utilisateur d'un canal spécifique, seulement du serveur entier.

4. **Suppression des messages** Les modérateurs ont la possibilité de supprimer des messages sur Discord. Ils ne devraient exercer cette capacité que dans quatre situations très spécifiques:

- Quelqu'un a posté une image pornographique ou graphiquement violente.
- Quelqu'un a posté un lien ou un code qui est malveillant dans la nature, et pourrait nuire à d'autres campeurs qui cliquent dessus.
- Quelqu'un a inondé le chat avec de nombreux messages de spam dans une mesure aussi extrême (généralement impliquant des bots) que pour rendre le chat complètement inutilisable.
- Quelqu'un a publié de la publicité et / ou un message d'auto-promotion / image (médias sociaux).

Dans toutes les autres situations - même les situations où le code de conduite est violé - les modérateurs ne devraient pas supprimer le message car il s'agit d'un historique important. Lorsque vous supprimez un message, assurez-vous de prendre d'abord une capture d'écran de celui-ci ! La capture d'écran peut être enregistrée dans le canal #mod-log, mais pour le #journal des activités, il est suffisant de dire que la preuve a été "retirée en raison du contenu sensible". Note: Si le message contient du matériel qui serait illégal de prendre une capture d'écran de, copier le lien du message à la place - fournir ce lien de message vers @raisedadead pour transférer à l'équipe de Confiance et Sécurité de Discord.

5. **N'utilisez pas @everyone ou @here** N'utilisez pas @everyone ou @here dans aucune circonstance ! Chaque personne de ce salon de discussion recevra une notification. Dans certains cas, des dizaines de milliers de personnes. Au lieu de cela, si vous voulez que les gens voient une annonce, vous pouvez l'épingler sur le canal pour permettre à tout le monde de la lire.

6. **Ne menacez pas d'interdire ou de suspendre** Si un campeur enfreint le code de conduite, ne menacent pas de les interdire ou de les suspendre, et ne les avertissent jamais en public. Au lieu de cela, parlez-leur en privé ou envoyez-leur un DM et émettez une suspension (par le protocole ci-dessus). Personne d'autre dans ce canal n'a besoin de savoir que vous avez banni / suspendu la personne - les campeurs peuvent voir le résumé dans le canal #activity-log s'ils veulent rester au courant de cette information. Si une violation était clairement involontaire et ne justifie pas une suspension ou une conversation privée, informer le campeur offensant de ses actions sans le faire passer pour un avertissement. Par exemple :

- Le campeur pose un mur de code pour demander de l'aide

  Modérateur : @nom d'utilisateur Veuillez utiliser Codepen ou Pastebin lorsque vous publiez de grandes quantités de code.

- Ou si vous devez vraiment expliquer pourquoi:

  Modérateur : @nom d'utilisateur Veuillez utiliser Codepen ou Pastebin lorsque vous publiez de grandes quantités de code, parce que cela perturbe le chat pour tout le monde et peut être considéré comme du spamming selon notre Code de Conduite.

- Pour les violations légères et involontaires du code de conduite

  Modérateur: Ceci est un rappel amical pour tout le monde à suivre le code de conduite : https://code-of-conduct.freecodecamp.org/

7. **Ne vous vantez pas d'être modérateur** Ne vous voyez pas au-dessus de la communauté. Vous êtes la communauté. Et la communauté vous a fait confiance pour aider à protéger quelque chose de rare que nous partageons tous - un endroit _accueillant_ pour les nouveaux développeurs. Si vous vous vantez d'être modérateur, les gens peuvent se sentir mal autour de vous, de la même manière que les gens peuvent se sentir mal à l’aise autour d’un policier, même s’ils ne font rien de mal. Ce n'est que de la nature humaine.

8. **Ne pas contredire les autres modérateurs** Si vous n'êtes pas d'accord avec l'action d'un modérateur, discutez avec eux en privé ou faites-le apparaître dans le canal #mod-chat. Ne jamais outrepasser un ban, et ne jamais contredire publiquement les autres modérateurs. Au lieu de cela, ayez une discussion froide dans le mod-chat et convainquez le modérateur qu'il devrait lui-même inverser son interdiction ou modifier son point de vue. Rappelez-vous : nous sommes tous dans la même équipe. Nous voulons honorer le rôle des modérateurs et présenter un front unifié.

9. **Parlez avec d'autres modérateurs** Nous avons seulement une place pour les modérateurs. Utilisez-le! Si vous ne vous sentez pas à l'aise avec la façon de gérer une certaine situation, demandez de l'aide à d'autres modérateurs. Si vous pensez que quelque chose devrait être discuté, faites-le. Vous faites partie de l'équipe et nous apprécions la contribution de chaque membre de l'équipe! Même si vous êtes totalement en désaccord avec quelque chose dans ces lignes directrices ou dans le code de conduite!

10. **Temporairement inactif** Si vous ne serez pas actif en tant que modérateur pendant un certain temps en raison de vacances, maladie ou toute autre raison, assurez-vous de prévenir les autres personnes dans le canal #mod-chat. C'est ainsi que nous savons si nous pouvons compter sur vous pour être régulièrement actif sur le serveur ou non.

# Comment devenir modérateur

Si vous aidez les gens de la communauté de façon constante au fil du temps, notre équipe de modérateurs finira par prendre note, et l'un d'eux vous mentionnera en tant que modérateur possible à [notre staff](https://forum.freecodecamp.org/g/Team). Il n'y a pas de raccourcis pour devenir modérateur.

Si vous êtes approuvé, nous vous ajouterons à nos équipes de modérateurs sur [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), [forum](https://forum.freecodecamp.org/g/moderators), etc.

> [!NOTE] > **Pour GitHub :** Après avoir été accepté comme modérateur, vous recevrez une invitation de dépôt Github. Vous devrez vous diriger vers [freeCodeCamp GitHub Organisation Invitation](https://github.com/orgs/freeCodeCamp/invitation) pour pouvoir accepter l'invitation. Ceci est nécessaire pour que nous puissions vous donner un accès en écriture sur certains de nos dépôts.

# Comment nous retirons les modérateurs inactifs

Veuillez noter que nous supprimerons fréquemment les mods qui, selon nous, sont inactifs. Lorsque nous le ferons, nous enverrons le message suivant :

> Ceci est un message standard vous informant de cela, comme vous ne semblez pas avoir été un modérateur actif récemment, nous vous retirons de notre équipe de modérateurs. Nous apprécions grandement votre aide dans le passé.

> Si vous pensez que nous avons fait cela par erreur, ou une fois que vous êtes prêt à revenir et contribuer plus, répondez simplement à ce message me faisant savoir.

# Comment fonctionne la salle de nos Contributeurs

N'importe qui est bienvenu dans la salle des contributeurs [sur notre Discord](https://discord.gg/KVUmVXA). C'est la salle de chat désignée pour les modérateurs et autres campeurs qui contribuent à notre communauté de toutes les manières. y compris par le biais de groupes d'étude.

Notre hypothèse est que les contributeurs liront tout ce qui se trouve dans cette salle qui les mentionne directement avec un `@username`. Tout le reste est facultatif. Mais n'hésitez pas à lire tout ce que n'importe qui y écrit et à interagir.

# Traiter avec des avocats

Vous pouvez être approché par des organisations qui veulent vous associer ou comarquer avec freeCodeCamp d'une manière ou d'une autre. Une fois que vous vous rendez compte que c'est ce qui leur revient, cessez de leur parler et dites-leur d'envoyer un courriel à quincy@freecodecamp.org. Il reçoit des propositions de ce genre tout le temps et est dans la meilleure position pour juger si une telle relation en vaudra la peine pour notre communauté (et elle l'est rarement).

# Traitement des demandes de renseignements (mentaux) sur la santé

Il se peut que vous vous rencontriez dans des situations où les utilisateurs demandent des conseils médicaux ou s’occupent de problèmes de santé mentale et où ils cherchent de l’aide. En matière de politique, vous devriez éviter de parler en privé de ces questions. Si la situation à un moment donné revient à la FCC, nous voulons que la ou les conversations soient consignées. Précisez clairement que nous ne sommes pas des professionnels de la santé et que vous encouragez l'utilisateur à trouver de l'aide professionnelle. Aussi difficile que cela puisse être, évitez de donner des conseils ou des conseils autres que de diriger l'utilisateur dans la direction de l'aide professionnelle!

Si cela se produit sur Discord: Suspendre l'utilisateur. Ce n'est pas pour les punir! Suspendre un utilisateur créera un canal privé qui n'est accessible que par l'utilisateur et l'équipe. Cela profitera à la fois à l'utilisateur et à fCC de plusieurs façons :

- L'utilisateur a la garantie d'une certaine confidentialité
- Le chat public n'est plus perturbé
- Les autres membres de l'équipe peuvent s'incliner, si vous ne vous sentez pas à l'aise de gérer vous-même la situation

> [!NOTE] Suspendre automatiquement un utilisateur lui donne un message à propos de la lecture de notre Code de Conduite. Assurez-vous d'informer l'utilisateur que vous les avez suspendus pour leur donner une certaine confidentialité et qu'ils ne sont pas punis. C'est très important! Nous voulons absolument éviter de donner aux utilisateurs l'idée qu'ils sont punis pour avoir atteint le but d'obtenir de l'aide !

Si vous pensez que l'utilisateur est capable de rejoindre la communauté, faites un clic droit sur le canal privé et copiez l'ID. Mettre le message suivant dans #mod-log:

> Avis médical de référence : <channel ID> <username>

Après cela, vous pouvez supprimer la suspension de l'utilisateur comme vous le faites habituellement.

URLs utiles :

http://www.suicide.org/international-suicide-hotlines.html

# Une note sur la liberté d'expression

Parfois, les gens défendront quelque chose d'offensant ou d'incendiaire qu'ils ont dit "liberté d'expression".

Cette bande dessinée XKCD résume parfaitement les pensées de la plupart des communautés sur la liberté d'expression. Donc, si quelqu'un défend quelque chose qu'il dit comme "liberté d'expression", n'hésitez pas à lui envoyer.

<div align="center"><img src='https://aws1.discourse-cdn.com/freecodecamp/original/3X/4/3/43a8b2eafe4c8622e02838f66f1dc6227de32c70.png' width="400" height="400" /></div>

Merci d'avoir lu ceci, et merci d'aider la communauté des développeurs !

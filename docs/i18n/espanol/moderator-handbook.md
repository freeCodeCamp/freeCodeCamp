# El Manual oficial para moderador de freeCodeCamp.

Esto te ayudará a moderar diferentes lugares en nuestra comunidad, incluyendo:

- Peticiones de GitHub & pull requests
- Los foros, salas de chat, grupos de facebook y otros lugares de reuniones en línea
- Eventos presenciales y grupos de estudio, competencias y conferencias

**Todos los moderadores de freeCodeCamp son de amplio acceso. Esto significa que confiamos en ti para supervisar cualquiera de estos lugares.**

This said you can serve as a moderator in whichever places are of the most interest to you. Algunos moderadores solo ayudan en GitHub. Otros solo contribuyen en foros. Otros moderadores se mantienen activos en todo.

Al final, lo que queremos es que disfrutes ser un moderador y que inviertas tu tiempo en los sitios que te interesen.

> [!NOTE] "Un gran poder conlleva una gran responsabilidad." - Tío Ben

Como moderador, el temperamento es más importante que las habilidades técnicas.

Escucha. Presta ayuda. No abuses de tu poder.

freeCodeCamp es una comunidad inclusiva y necesitamos conservarla así.

Tenemos un único código de conducta que regula por completo nuestra comunidad. Mientras menos reglas, más fácil es recordarlas. Puedes leer las reglas y fijarlas en tu memoria [aquí](https://code-of-conduct.freecodecamp.org).

## Moderando GitHub

Los moderadores tienen la habilidad de cerrar conflictos, y aceptar pull requests.

Los moderadores tienen dos responsabilidades principales en GitHub:

1. Probando y fusionando pull requests
2. Evaluar y responder a problemas

### Moderando Pull Requests

Los Pull Requests (PRs) son la vía que utilizan los colaboradores para someter cambios al repositorio de freeCodeCamp. We must perform Quality Assurance (QA) on pull requests before we decide whether to merge them or close them.

#### Tipo de Pull Requests

1. **Challenge Instruction Edits** These are changes to the text of challenges - the Description, Instructions, or Test Text. You can also review these right on GitHub and decide whether to merge them. We need to be a bit more careful about these because millions of people will encounter this text as they work through the freeCodeCamp curriculum. Does the pull request make the text more clear without making it much longer? Are the edits relevant and not overly pedantic? Remember that our goal is for challenges to be as clear and as short as possible. They aren't the place for obscure details. Also, contributors may try to add links to resources to the challenges. You can close these pull requests and reply to them with this:

```markdown
Thank you for your pull request.

We are closing this pull request. Please add links and other details to the challenge's corresponding guide article instead.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you, and happy coding.
```

2. **Challenge Code Edits** These are changes to the code in a challenge - the Challenge Seed, Challenge Solution, and Test Strings. These pull requests need to be pulled down from GitHub and tested on your local computer to make sure the challenge tests can still be passed with the current solution, and the new code doesn't introduce any errors. Some contributors may try to add additional tests to cover pedantic corner-cases. We need to be careful to not make the challenge too complicated. These challenges and their tests should be as simple and intuitive as possible. Aside from the algorithm challenges and interview prep section, learners should be able to solve each challenge within about 2 minutes.

3. **Codebase Changes** These code edits change the functionality of the freeCodeCamp platform itself. Sometimes contributors try to make changes without much explanation, but for code changes, we need to make sure there's a genuine need for the change. So these pull requests should reference an existing GitHub issue where the reasons for the change are discussed. Then you can open the pull request on your computer and test them out locally. After you've done so, if the changes look good, don't merge them quite yet. You can comment on the pull request saying "LGTM", then mention @raisedadead so he can take a final look.

#### Cómo combinar o cerrar pull requests

En primer lugar, cuando elijas un pull request a QA, deberás asignarte a él. You can do this by clicking the "assign yourself" link below the "assignees" part on the right-hand column of GitHub's interface.

Dependiendo del tipo de pull request que sea, siga las reglas indicadas arriba.

Antes de fusionar cualquier pull request, asegúrate de que GitHub tiene marcas verdes para todo. Si hay alguna X, averigua primero y descubre cómo convertirlas en marcas de verificación verdes primero.

A veces habrá un conflicto de fusión. This means that another pull request has made a change to that same part of that same file. GitHub tiene una herramienta para abordar estos conflictos de fusión en GitHub. Puedes tratar de resolver estos conflictos. Just use your best judgment. The pull request's changes will be on top, and the Master branch's changes will be on the bottom. A veces habrá información redundante que se puede eliminar. Antes de que finalices, cerciórate de eliminar el `<<<<<<`, `======`, y `>>>>>>` que Git añade para indicar áreas de conflicto.

Si el pull request parece estar listo para fusionarse (y no requiere la aprobación de @raisedadead), puedes seguir adelante y fusionarlo. Asegúrate de utilizar la funcionalidad predeterminada "Squash and Merge" en GitHub. Esto aplastará todas las solicitudes pull se compromete a un solo commit, lo que hace que la historia de Git sea mucho más fácil de leer.

A continuación, deberías comentar sobre la solicitud de extracción, dando las gracias al colaborador de tu propia manera personal.

If the author of the pull request is a "first-time contributor" you should also congratulate them on their first merged pull request to the repository. Puedes mirar la esquina superior derecha del cuerpo del PR, para determinar un colaborador de primera vez. Mostrará `First-time contributor` como se muestra a continuación:

![Copiar_edits_for_Java_arrays_article_by_karentobo_%C2%B7_Pull_Request__20615_%C2%B7_freeCodeCamp_freeCodeCamp|690x281](https://i.imgur.com/dTQMjGM.png)

Si el pull request no parece listo para fusionarse, puedes responder amablemente al autor que debe hacer para prepararlo. Hopefully, they will reply and get their pull request closer to ready.

A menudo, un pull request será obviamente poco esfuerzo. You can often tell this immediately when the contributor didn't bother checking the checkboxes in the Pull Request Template or used a generic pull request title like "made changes" or "Update index.md".

También hay situaciones en las que el colaborador está intentando añadir un enlace a su propio sitio web, o incluir una biblioteca que ellos mismos crearon, o tiene una edición frívola que no sirve para ayudar a nadie más que a sí mismos.

En ambas situaciones, debes seguir adelante y cerrar su pull request y responder con este mensaje estándar:

```markdown
Thank you for opening this pull request.

This is a standard message notifying you that we've reviewed your pull request and have decided not to merge it. We would welcome future pull requests from you.

Thank you and happy coding.
```

Si necesitas una segunda opinión sobre un pull request, sigue adelante y deja tus comentarios sobre el pull request, luego agregue la etiqueta "discussing" al pull request.

### Moderando problemas de GitHub

freeCodeCamp es un proyecto activo de código abierto. Cada día recibimos nuevos asuntos, todos los cuales necesitan ser probados y etiquetados.

#### Tipos de problemas de GitHub

1. **Code Help Requests**, which people have mistakenly created GitHub issues for. If someone is asking for help, paste the following message, then close the issue.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that this issue seems to be a request for help. Instead of asking for help here, please click the **"Help"** button on the challenge on freeCodeCamp, which will help you create a question in the right part of the forum. Volunteers on the forum usually respond to questions within a few hours and can help determine if there is an issue with your code or the challenge's tests.

If the forum members determine there is nothing wrong with your code, you can request this issue to be reopened.

Thank you and happy coding.
```

2. **Bug or Clarification issues** Try to reproduce the bug yourself if you can. If not, ask them for the steps to reproduce the bug, and whether they have any screenshots, videos, or additional details that can help you reproduce the issue. Once you can reproduce the issue - or at least confirm it's a legit issue - label it `confirmed`. Then:

- If it's a simple change to an existing challenge, label it as `first timers only`, otherwise label it as `help wanted`. Utilice otras etiquetas según corresponda.
- If the issue is more significant, flag it as `bug`. &nbsp; Si hay alguna ambigüedad en cuanto al curso correcto de acción en un problema, siéntate libre de etiquetar a @raisedadead sobre el problema y luego añade la etiqueta `Discutir`.

3. **Duplicate Issues** If an issue is the same as another reported issue, the prior reported issue should take precedence. Flag as `Duplicate`, paste the following message replacing `#XXXXX` with the issue number, then close the issue.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that this issue appears to be very similar to issue #XXXXX, so we are closing it as a duplicate.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

4. **Fixed in staging** Some problems may have already been fixed in staging, but don't have a GitHub issue associated with them. If this is the case, you can paste the following message, close the issue, and add a `status: resolved/shipping` label:

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that the problem you mentioned here is present in production, but that it has already been fixed in staging. This means that the next time we push our staging branch to production, this problem should be fixed. Because of this, we're closing this issue.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

#### Cerrando pedidos, obsoletos, problemas inactivos y solicitudes de Pull

- Stale issues or PRs are those that have not seen any activity from the OP for 21 days (3 weeks from the last activity), but only after a moderator has requested more information/changes. Estos pueden ser cerrados en un script automático/bot o por los propios moderadores.

- La actividad se define como: Comentarios que solicitan una actualización en PR y clases como `estado: actualización necesaria` etiqueta etc.

- Si el OP solicita ayuda adicional o incluso tiempo, lo anterior puede ser relajado y revisado después de que se dé una respuesta. In any case, the mods should use their best judgment to resolve the outstanding PR's status.

#### Otras pautas para moderadores en GitHub

Aunque tendrás acceso de escritura al repositorio de freeCodeCamp, **nunca deberías enviar código directamente a los repositorios freeCodeCamp**. Todo el código debe introducir el código base de freeCodeCamp en forma de pull request desde un fork del repositorio.

Además, nunca debes aceptar tus propios PRs. Deben ser QA'd por otro moderador, al igual que cualquier otro PR.

Si observas que alguien rompe el código de conducta [](https://code-of-conduct.freecodecamp.org) en problemas de GitHub, o abrir solicitudes de extracción con contenido o código malicioso, envíe un correo electrónico a dev@freecodecamp. rg con un enlace a la solicitud de extracción ofensiva y podemos considerar prohibirlos de la organización GitHub de freeCodeCamp por completo.

## Moderando el foro

Como moderador, usted ayuda a mantener a nuestra comunidad un lugar agradable para que cualquiera aprenda y obtenga ayuda. Usted tratará con mensajes marcados y manejará el spam, fuera de tema y otras conversaciones inapropiadas.

Ten en cuenta que una vez que seas un moderador en el foro, empezarás a ver pistas azules de los miembros del foro, como "esta es la primera vez que [person] ha publicado - ¡Bienvenidos a la comunidad! o "[person] no ha publicado en mucho tiempo - ¡Bienvenidos de nuevo! "

![Un mensaje de texto azul que dice "esta es la primera vez que [person] ha publicado - ¡Demos la bienvenida a la comunidad!](https://i.imgur.com/mPmVgzK.png)

Estas son oportunidades para que usted las acoja y haga que se sientan muy especiales. Nunca sabes qué persona que está involucrada marginalmente puede convertirse en nuestro próximo super-ayudante, ayudando a muchas otras personas en su viaje de codificación. Incluso la bondad más pequeña puede desencadenar una cascada de buenas acciones.

### Eliminando mensajes del foro

Los moderadores del foro tienen la capacidad de borrar los mensajes del usuario. Sólo deberías hacer esto para las siguientes instancias:

1. Someone has posted a pornographic or graphically violent image.
2. Someone has posted a link or code that is malicious in nature and could harm other campers who click on it.
3. Someone has flooded a thread with lots of spam messages.

### Tratando con spam

Para el primer mensaje de correo no deseado de un usuario, envíe un mensaje explicando el problema, y elimine el enlace o mensaje según corresponda. Deja una nota en el perfil del usuario explicando la acción que has tomado. If the problem persists, then quietly block the user from posting (using the silence option on the User Admin panel). Send the user a warning with the Code of Conduct. Marque la casilla del mensaje privado indicando que su mensaje es una "advertencia formal".

Puedes hacer preguntas e informar de incidentes en la sección [del foro del personal](https://forum.freecodecamp.com/c/staff).

### Tratando con conversaciones fuera de tema

Mensajes o temas que parecen estar en el lugar equivocado pueden ser recategorizados o renombrados a cualquier cosa que sea apropiada.

En circunstancias excepcionales, puede ser apropiado que un moderador bifurque una discusión en múltiples hilos.

De nuevo, si tienes algún problema o pregunta, haz un post con tus acciones en la categoría de personal, y etiquetar a otro moderador si quieres que revisen tus acciones de moderación.

### Usuarios Inderramados

Nuestros Términos de Servicio requieren que los usuarios de freeCodeCamp tengan al menos 13 años de edad. En el caso de que un usuario revele que es menor de 13 años enviarles el siguiente mensaje y eliminar su cuenta del foro (si la eliminación no está disponible, suspender la cuenta es suficiente). Luego envía un correo electrónico a [Quincy](https://forum.freecodecamp.org/u/QuincyLarson) (quincy@freecodecamp.org) o [Mrugesh](https://forum.freecodecamp.org/u/raisedadead) (mrugesh@freecodecamp.org) para eliminar también la cuenta freeCodeCamp del usuario.

```markdown
SUBJECT: Users under 13 are not allowed to use the forum per Terms of Service

It has come to our attention that you are under 13 years of age. Per the [freeCodeCamp terms of service](https://www.freecodecamp.org/news/terms-of-service), you must be at least 13 years old to use the site or the forum. We will be deleting both your freeCodeCamp account and your forum account. This restriction keeps us in compliance with United States laws.

Please rejoin once you have reached at least 13 years of age.

Thank you for understanding.
```

## Moderando Facebook

Si ves algo que parezca incumplir nuestro [Código de Conducta](https://code-of-conduct.freecodecamp.org/), deberías eliminarlo inmediatamente.

A veces la gente publicará cosas que creen que son divertidas. No se dan cuenta de que lo que dijeron o lo que compartieron podría interpretarse como ofensivo. En estos casos, su publicación debe ser eliminada, pero la persona que la publicó no necesariamente necesita ser prohibida. Con la eliminación de su correo, espero que lleguen a comprender que lo que publicaron era inapropiado.

Pero si se trata de una ofensa atroz que no puede atribuirse razonablemente a una diferencia cultural o a un malentendido del idioma inglés. entonces debe considerar fuertemente bloquear al miembro del grupo de Facebook.

## Moderating Chat

Here's how moderators deal with violations of our [Code of Conduct](https://code-of-conduct.freecodecamp.org/) on our chat server:

1. **Make sure it was intended to violate the Code of Conduct.** Not all violations of the CoC were intended as such. A new camper might post a large amount of code for help, unaware that this can be considered spamming. In these cases, you can just ask them to paste their code with services like Codepen or Pastebin.

2. **If the camper clearly and intentionally violates the Code of Conduct, the moderator will proceed as follows:** Kick or mute the offending person from the chat room. In order to kick or mute someone, left-click on their profile picture, select the three dots, and select "Remove from room" to kick or "Mute user" to prevent them from sending messages. Then report a short summary of the event in the #mod-log channel. Here's an example of what such a summary might look like:

```
Kicked: _@username_
Reason(s): _Spamming, trolling_
Evidence: _One or more links to the offending message(s)_
```

3. **Creating a Private Discussion** There may be situations where you need to address a concern with a camper privately. This should not be done through DMs, as this can lead to situations where you claim one thing and the camper claims another. Instead, use the bot's functionality to create a private discussion:

- Call the `!fCC private username` command, where `username` is the camper's chat user name.
- The bot will create a new channel, and add the mentioned camper and all moderators with the `Your Friendly Moderator` role. While all moderators are added to the channel for transparency, the moderator who calls this command should be the only one to interact with the camper unless they request assistance.
- When the conversation is complete, call the `!fCC close` command _in the private channel_ to have the bot close and delete that channel.

4. **Deleting messages** Moderators can delete messages on our chat server. They should only exercise this ability in four very specific situations:

- Someone has posted a pornographic or graphically violent image.
- Someone has posted a link or code that is malicious in nature and could harm other campers who click on it.
- Someone has flooded the chat with lots of spam messages to such an extreme extent (usually involving bots) as to render chat completely unusable.
- Someone has posted an advertisement and/or a self-promoting message/image (social media).

In all other situations - even situations where the code of conduct is violated - moderators should not delete the messages as they are important historic records. When you do delete a message, make sure you take a screenshot of it first! The screenshot can be logged in the #mod-log channel.

> [!NOTE] If the message contains material that would be illegal to take a screenshot of, copy the message link instead - provide that message link to @raisedadead to forward to Discord's Trust and Safety team.

5. **Don’t use @all or @here** Don’t use @all or @here under any circumstances! Every single person in that chat room will get a notification. In some cases, tens of thousands of people. Instead, if you want people to see an announcement, you can pin it to the channel to allow everyone to read it.

6. **Don’t threaten to take action** If a camper is breaking the code of conduct, don’t threaten to take moderator action, and never warn them in public. Instead, talk to them privately using the bot's `private` command. No one else in that channel needs to know that you banned/suspended the person. If a violation was clearly unintended and doesn't warrant a suspension or private conversation, make the offending camper aware of his / her actions without making it come across as a warning. For example:

- Camper posts a wall of code to request help:

  Moderator: @username Please use Codepen or Pastebin when posting large amounts of code.

- Or if you really have to explain why:

  Moderator: @username Please use Codepen or Pastebin when posting large amounts of code, because it disrupts the chat for everyone and could be considered spamming according to our Code of Conduct.

- For mild and unintentional violations of the code of conduct:

  Moderator: This is a friendly reminder for everyone to follow the code of conduct: https://code-of-conduct.freecodecamp.org/

7. **Don’t brag about being a moderator** Do not see yourself as above the community. You are the community. And the community has trusted you to help protect something rare that we all share - a _welcoming_ place for new developers. If you brag about being a moderator, people may feel uneasy around you, in the same way that people may feel uneasy around a police officer, even if they’re doing nothing wrong. This is just human nature.

8. **Don’t contradict other moderators** If you disagree with the action of a moderator, talk with them in private or bring it up in the #mod-chat channel. Never override a moderator's action, and never contradict the other moderator(s) publicly. Instead, have a cool-headed discussion in #mod-chat and convince the moderator that they themselves should reverse their ban or change their point of view. Remember: we’re all on the same team. We want to dignify the role of moderators and present a unified front.

9. **Talk with other moderators** We have a room for moderators only. Use it! If you feel uncomfortable with how to handle a certain situation, ask other moderators for help. If you think something should be discussed, do it. You're part of the team and we value the input of every team member! Even if you totally disagree with anything in these guidelines or the Code of Conduct!

10. **Temporarily inactive** If you're not going to be active as a Moderator for a while due to vacation, illness, or any other reason, make sure to let the others know in the #mod-chat channel. This is so we know if we can count on you to be regularly active on the server or not.

## How to become a moderator

If you are helping people in the community consistently over time, our Moderator Team will eventually take notice, and one of them will mention you as a possible moderator to [our staff](https://forum.freecodecamp.org/g/Team). There are no shortcuts to becoming a moderator.

If you are approved, we will add you to our Moderator Teams on [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), [forum](https://forum.freecodecamp.org/g/moderators), etc.

> [!NOTE] > **For GitHub:** After you've been accepted as a moderator, you will receive a Github repository invitation. You'll need to head over towards [freeCodeCamp GitHub Organisation Invitation](https://github.com/orgs/freeCodeCamp/invitation) to be able to accept the invitation. This is required for us to be able to give you write access to some of our repositories.

## How we retire inactive moderators

Please note that we will frequently remove mods whom we think are inactive. When we do this we will send the following message:

> This is a standard message notifying you that, since you don't seem to have been an active moderator recently, we're removing you from our Moderator team. We deeply appreciate your help in the past.

> If you think we did this in error, or once you're ready to come back and contribute more, just reply to this message letting me know.

## How our Contributors room works

Anyone is welcome in the [Contributors room on our chat server](https://chat.freecodecamp.org/channel/contributors). It is the designated chat room for moderators and other campers who are contributing to our community in any number of ways, including through study groups.

Our assumption is that contributors will read anything in this room that directly mentions them with an `@username`. Everything else is optional. But feel free to read anything anyone posts in there and interact.

## Dealing with solicitors

You may be approached by organizations who want to partner or co-brand with freeCodeCamp in some way. Once you realize that this is what they're after, please stop talking to them and tell them to email quincy@freecodecamp.org. He gets proposals like this all the time and is in the best position to judge whether such a relationship will be worth it for our community (and it rarely is).

## Dealing with (mental) health inquiries

You may come across situations where users are seeking medical advice or are dealing with mental health issues and are looking for support. As a matter of policy, you should avoid talking privately about these matters. Should the situation at some point reflect back to fCC, we want to have the conversation(s) on record. Make it clear that we are not medical professionals and that you encourage the user to find professional help. As difficult as it sometimes can be, avoid giving any tips or advice other than pointing the user in the direction of professional help!

If this happens on our chat server: Create a private channel for the user and the mod team. This can be done with the bot's `private` command.

- The user is guaranteed some privacy
- Public chat is no longer disrupted
- Other team members can pitch in, should you be uncomfortable dealing with the situation yourself

Helpful URLs:

http://www.suicide.org/international-suicide-hotlines.html

## A note on free speech

Sometimes people will defend something offensive or incendiary that they said as "free speech."

This XKCD comic perfectly summarizes most communities' thoughts on free speech. So if someone defends something they're saying as "free speech" feel free to send it to them.

<div align="center"><img src='https://aws1.discourse-cdn.com/freecodecamp/original/3X/4/3/43a8b2eafe4c8622e02838f66f1dc6227de32c70.png' width="400" height="400" /></div>

Thanks for reading this, and thanks for helping the developer community!

## Reply Templates

These are some of the standard reply templates that you may use while reviewing pull requests and triaging issues.

> You can make your own with GitHub's built-in [**Saved replies**](https://github.com/settings/replies/) feature or use the ones below.

### Thank you

```markdown
Thank you for your contribution to the page! 👍
We are happy to accept these changes and look forward to future contributions. 🎉
```

### Thank you and congrats

> For thanking and encouraging first-time contributors.

```markdown
Hi @username. Congrats on your first pull request (PR)! 🎉

Thank you for your contribution to the page! 👍
We are happy to accept these changes and look forward to future contributions. 📝
```

### Build Error

```markdown
Hey @username

We would love to be able to merge your changes but it looks like there is an error with the CI build. ⚠️

Once you resolve these issues, We will be able to review your PR and merge it. 😊

---

Feel free to reference the [contributing guidelines](https://contribute.freecodecamp.org/#/how-to-work-on-coding-challenges?id=testing-challenges) for instructions on running the CI build locally. ✅
```

### Syncing Fork

> When PR is not up to date with the `main` branch.

````markdown
Hey @username

We would love to be able to merge your changes but it looks like the branch is not up to date. ⚠️

To resolve this error, you will have to sync the latest changes from the `main` branch of the `freeCodeCamp/freeCodeCamp` repo.

Using the command line, you can do this in three easy steps:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git fetch upstream

git pull upstream master
````

If you're using a GUI, you can simply `Add a new remote...` and use the link `git://github.com/freeCodeCamp/freeCodeCamp.git` from above.

Once you sync your fork and pass the build, we will be able to review your PR and merge it. 😊

---

Feel free to reference the [Syncing a Fork](https://help.github.com/articles/syncing-a-fork/) article on GitHub for more insight on how to keep your fork up-to-date with the upstream repository. 🔄
````

### Merge Conflicts

> When PR has merge conflicts that need to be resolved.¹

```markdown
Hey @username

We would love to be able to merge your changes but it looks like you have some merge conflicts. ⚠️

Once you resolve these conflicts, We will be able to review your PR and merge it. 😊

---

If you're not familiar with the merge conflict process, feel free to look over GitHub's guide on ["Resolving a merge conflict"](https://help.github.com/articles/resolving-a-merge-conflict-on-github/). 🔍️

Also, it's good practice on GitHub to write a brief description of your changes when creating a PR. 📝
````

¹ If a first-time-contributor has a merge conflict, maintainers will resolve the conflict for them.

### Duplicate

> When PR is repetitive or a duplicate.

```markdown
Hey @username

This PR seems to make similar changes as the existing PR <#number>. As such, we are going to close this as duplicate.

If you feel you have additional changes to expand upon this PR, please feel free to push your commits and request this PR be reopened.

Thanks again! 😊

---

If you have any questions, feel free to ask questions on the ['Contributors' category on our forum](https://forum.freecodecamp.org/c/contributors) or [the contributors chat room](https://chat.freecodecamp.org/channel/contributors).
```

### Closing invalid pull requests

> When PR is invalid.

```markdown
Hey @username

Thank you for opening this pull request.

This is a standard message notifying you that we've reviewed your pull request and have decided not to merge it. We would welcome future pull requests from you.

Thank you and happy coding.
```

> When PR adds links to external resources.

```markdown
Thank you for your pull request.

We are closing this pull request. Please suggest links and other details to add the challenge's corresponding guide post through [a forum topic](https://forum.freecodecamp.org/new-topic?category=Contributors&title=&body=**What%20is%20your%20hint%20or%20solution%20suggestion%3F**%0A%0A%0A%0A%0A**Challenge%3A**%0A%0A%0A**Link%20to%20the%20challenge%3A**) instead.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you, and happy coding.
```

### Closing Invalid Issues

> When an issue relates to the camper's code.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that this issue seems to be a request for help. Instead of asking for help here, please click the **"Get Help"** button on the challenge on freeCodeCamp and choose the **"Ask for help"** option, which will help you create a question in the right part of the forum. Volunteers on the forum usually respond to questions within a few hours and can help determine if there is an issue with your code or the challenge's tests.

If the forum members determine there is nothing wrong with your code, you can request this issue to be reopened.

Thank you and happy coding.
```

> When an issue is duplicate of an earlier issue

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that this issue appears to be very similar to issue #XXXXX, so we are closing it as a duplicate.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

> When an issue is fixed in staging.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that the problem you mentioned here is present in production, but that it has already been fixed in staging. This means that the next time we push our staging branch to production, this problem should be fixed. Because of this, we're closing this issue.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

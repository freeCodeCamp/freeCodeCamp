# El Manual Oficial del Moderador de freeCodeCamp

Este manual te ayudará a moderar diferentes secciones dentro de nuestra comunidad. Esto cubre conversaciones e interacciones en asuntos e hilos de pull request en GitHub, el foro de la comunidad, las salas de chat y otras comunidades oficiales que proveemos.

> [!NOTE] Todos los moderadores de freeCodeCamp son moderadores de toda la comunidad. Esto significa que confiamos en ti para supervisar cualquiera de estos lugares.

Puedes ser moderador en cualquiera de las plataformas que sea de mas interés para ti. Algunos moderadores solo ayudan a través de GitHub, mientras que otros solo ayudan a través del foro. Algunos moderadores son activos en todas partes.

Al final, lo que queremos es que disfrutes siendo moderador, e inviertas tu tiempo en las secciones que sean de tu interés.

> "Con un gran poder, viene una gran responsabilidad" - Tio Ben

Como moderador, el temperamento es más importante que las habilidades técnicas.

Escucha. Se servicial. No abuses de tu poder.

freeCodeCamp es una comunidad inclusiva y necesitamos mantenerla de esa manera.

Tenemos un solo [Código de Conducta](https://code-of-conduct.freecodecamp.org) que gobierna toda nuestra comunidad. Cuantas menos reglas, mas fácil serán de recordar. Puedes leerlas y memorizarlas [aquí](https://code-of-conduct.freecodecamp.org).

> [!NOTE] Como moderador, te añadiríamos a uno o más equipos en GitHub, nuestros foros de la comunidad & servidores de chat. Si no tienes acceso a una plataforma que te gustaría moderar, por favor [ponte en contacto con uno de los miembros del personal](FAQ.md#additional-assistance).

## Moderando GitHub

Las moderadoras tienen dos responsabilidades principales en GiHub:

1. Evaluar y responder a problemas.
2. Revisión y fusión de pull requests (también conocido como QA).

### Moderando conflictos (issues) de GitHub

Utilizamos nuestro repositorio principal [`freeCodeCamp/freeCodeCamp`](https://github.com/freeCodeCamp/freeCodeCamp/issues) como un rastreador de problemas común para todos nuestros repositorios. Todos los días recibimos nuevos problemas, que hay que clasificar, etiquetar y tratar. Hay tambien una gran seccion para empezar a ayudar con proyectos de origen-abierto (open-source).

#### Problema de clasificación

La clasificación (o triaging en inglés) es un proceso de priorización de atención para un nuevo reporte de problema. Tenemos una extensa lista de etiquetas que utilizamos para marcar la prioridad, categoría, estado y alcance de cada tema.

Puedes ayudarnos a organizar y clasificar los reportes de problemas mediante la aplicación de etiquetas de [esta lista](https://github.com/freeCodeCamp/freeCodeCamp/labels). Por lo general, hay una descripción junto a la etiqueta que explica su significado.

Por favor, presta especial atención a las etiquetas `"help wanted"` y `"first timers only"`. Estos se deben agregar a los hilos que creas que se puedan abrir a posibles contribuyentes para realizar una pull request.

Se debe aplicar una etiqueta `"first timer only"` a un problema trivial (por ejemplo, una corrección de errores tipográficos) y debe incluir información adicional. Puedes utilizar esta [plantilla de respuesta](moderator-handbook.md#first-timer-only-issues) para la clasificación.

#### Cierre de solicitudes de extracción y problemas obsoletos, desactualizados e inactivos

- Los problemas obsoletos o RP son aquellos que no han visto ninguna actividad del autor durante 21 días (3 semanas desde la última actividad), pero solo después de que un moderador haya solicitado más información / cambios.

- La actividad se define como: Comentarios que solicitan una actualización en PR y clases como `estado: actualización necesaria` etiqueta, etc.

- Si el colaborador solicita ayuda adicional o incluso tiempo, lo anterior se puede relajar y revisar después de que se dé una respuesta. En cualquier caso, los mods deben usar su mejor criterio para resolver el estado de PR.

> Le recomendamos que utilice esta lista de [ plantillas de respuesta ](moderator-handbook.md#reply-templates) estándar al evaluar los problemas.

### Moderación de solicitudes de extracción

Las solicitudes de extracción (PRs) es la forma en que los colaboradores envían cambios a los repositorios de freeCodeCamp´s. Debemos realizar un control de calidad (QA) en los pull requests antes de decidir si, cambios de solicitud, o cerrarlos.

#### Tipo de Pull Requests

1. **Edición a las instrucciones del desafío**

   Estos son cambios en el texto de los desafíos: la descripción, las instrucciones o el texto de prueba.

   Puedes revisar las ediciones directamente en GitHub y decidir ahí si aceptar o no los cambios. Aqui debemos ser un poco mas cuidadosos, porque millones de personas leerán estos textos en la medida que vayan completando el programa de freeCodeCamp. ¿El pull request hace más claro el texto sin alargarlo demasiado? ¿Son las recomendaciones relevantes o pedantes en exceso? Recuerda que nuestro objetivo es que los retos sean lo más claro y cortos posibles. No son el lugar para detalles oscuros. Además, los colaboradores podrían intentar añadir enlaces hacia recursos en los desafíos.

   Tu puedes cerrar pull requests no válidas y responderlas con estas [ plantillas de respuesta ](moderator-handbook.md#closing-invalid-pull-requests).

   Si los cambios se ven bien, por favor asegúrese de dejar una aprobación con un comentario "LGTM" (Looks Good To Me). Una vez que un Pull Request recibe al menos dos aprobaciones (incluyendo la tuya) de los moderadores o del equipo de desarrollo, puedes hacer un Merge.

2. **Edición al código del desafío**

   These are changes to the code in a challenge - the challenge seed, challenge solution, and test strings.

   These pull requests need to be pulled down from GitHub and tested on your local computer or Gitpod to make sure the challenge tests can still be passed with the current solution and to make sure the new code doesn't introduce any errors.

   Algunos colaboradores pueden intentar añadir pruebas adicionales para cubrir casos marginales. Debemos tener cuidado de no complicar demasiado el reto. Estos retos y sus pruebas deben ser tan simples e intuitivas como sea posible. Aparte de los desafíos del algoritmo y la sección de preparación de la entrevista, los estudiantes deberían ser capaces de resolver cada desafío en unos 2 minutos.

   Tu puedes cerrar pull requests no válidas y responderlas con estas [ plantillas de respuesta ](moderator-handbook.md#closing-invalid-pull-requests).

   If the changes look good, please ensure to leave an approval with a "LGTM" comment. Una vez que un Pull Request recibe al menos dos aprovaciones (incluyendo la tuya) de los moderadores o del equipo de desarrollo, puedes hacer un Merge.

3. **Cambios a la Plataforma**

   Estas ediciones de código cambian la funcionalidad de la propia plataforma freCodeCamp.

   A veces los colaboradores tratan de hacer cambios sin mucha explicación, pero para cambios de código necesitamos asegurarnos de que alla una verdadera necesidad para los mismos. Estos Pull Request deben hacer referencia a un GitHub Issue preexistente, donde discutir las razones del cambio. Entonces puede abrir el pull request en su computadora y probarlo localmente.

   Después de haberlo hecho, si los cambios se ven bien, no los fusiones todavía. Puede comentar sobre la solicitud de extracción diciendo "LGTM", luego mencionar ** "@ freeCodeCamp / dev-team" ** para que puedan echar un vistazo final.

4. **Relaciones públicas automatizadas (Dependabot)**

   Algunos RP son actualizaciones de dependencia automatizadas realizadas a través de una integración. Tu no debes fusionar ni aprobar estos RP. Uno de los miembros del equipo de desarrollo se encargará de revisar y fusionar dichos PRs automatizados.

#### Cómo combinar o cerrar pull requests

##### Asignarse a una solicitud de extracción:

En primer lugar, cuando elijas un pull request a QA, deberás asignarte a él. Puedes hacer esto haciendo clic en el enlace "assign yourself" debajo de la parte "assignees" en la columna derecha de la interfaz de GitHub.

Dependiendo del tipo de pull request que sea, siga las reglas indicadas arriba.

##### Asegúrese de que las comprobaciones de CI estén pasando:

Antes de hacer Merge a cualquier Pull Request, asegúrate que Github está tomando todos los Checks (las marcas verdes de aprobación) y que están pasando correctamente en los Pull Request. Si ves que falla alguna de las comprobaciones, investiga y obtén alguna aclaración sobre la causa raíz. ¿Se está realizando el cambio rompiendo nuestras pruebas? ¿El sitio compilará correctamente si el PR hace Merge? Estos controles son fundamentales para la estabilidad de la plataforma.

> [!ALERTA] Al fusionar un PR que no cumple con las comprobaciones de CI/CD puede causar dificultades a todas las partes interesadas, incluido el equipo de desarrollo y los colaboradores.

##### Handling Merge Conflicts:

Sometimes there will be a merge conflict.

Esto significa que otro pull request ha hecho un cambio a esa parte exacta del mismo archivo. GitHub tiene una herramienta para abordar estos conflictos de fusión en GitHub. Puedes tratar de resolver estos conflictos. Utilice su mejor criterio.

Los cambios del pull request estarán en la parte superior, y los cambios de la rama principal estarán en la parte inferior. A veces habrá información redundante que se puede eliminar. Antes de que finalices, cerciórate de eliminar el `<<<<<<`, `======`, y `>>>>>>` que Git añade para indicar áreas de conflicto.

Si no está seguro, pida ayuda a uno de los compañeros moderadores o al equipo de desarrollo.

##### Cerrando pull requests no válidos:

Si el pull request parece estar listo para fusionarse (y no requiere la aprobación de @raisedadead), puedes seguir adelante y fusionarlo. Asegúrese de utilizar la opción predeterminada ** "Squash and Merge" **. Esto juntará todos los commits de las solicitudes de extracción en un solo commit, lo que hará que el historial de Git sea mucho más fácil de leer.

> You should then comment on the pull request, thanking the contributor in your own personal way!

Si el autor del pull request es un "colaborador por primera vez" también deberias felicitarlos por su primera fusión de pull request en el repositorio. Puedes mirar la esquina superior derecha del cuerpo del PR, para determinar un colaborador de primera vez. Mostrará `First-time contributor` como se muestra a continuación:

<details>
   <summary>
      First-time contributor badge on pull requests (screenshot)
   </summary>

   <br>
   <img src="https://i.imgur.com/dTQMjGM.png" alt="Insignia de colaborador por primera vez en solicitudes de extracción (captura de pantalla" />
</details>

Si el pull request no parece listo para fusionarse, puedes responder amablemente al autor que debe hacer para prepararlo. Con suerte, responderán y prepararán sus pull request.

Si necesitas una segunda opinión sobre un pull request, sigue adelante y deja tus comentarios sobre el pull request, luego agregue la etiqueta "discussing" al pull request.

##### Closing an Invalid Pull Request:

A menudo, una pull request requiere poco esfuerzo. You can usually tell this immediately when the contributor didn't bother checking the checkboxes in the Pull Request Template or used a generic pull request title like "Made changes" or "Update index.md".

También hay situaciones en las que el colaborador está tratando de agregar un enlace a su sitio web, incluir una librería que creó o realizar una edición frívola que no ayuda a nadie más que a ellos mismos.

You can close these invalid pull requests and reply to them with these [reply templates](moderator-handbook.md#closing-invalid-pull-requests).

#### Otras Directrices para Moderadores en GitHub

Aunque tendrá acceso de escritura al repositorio de freeCodeCamp, ** nunca debe enviar código directamente a los repositorios de freeCodeCamp **. Todo el código debe ingresar a la base de código de freeCodeCamp en forma de una solicitud de extracción desde una bifurcación del repositorio.

Además, nunca debe aceptar sus propios RP. Deben ser revisados ​​por otro moderador, al igual que con cualquier otro RP.

If you notice anyone breaking the [Code of Conduct](https://code-of-conduct.freecodecamp.org) on GitHub issues, or opening pull requests with malicious content or code, email `support[at]freecodecamp.org` with a link to the offending pull request, and we can consider banning them from freeCodeCamp's GitHub organization entirely.

## Moderando el foro

As a moderator, you help keep our community an enjoyable place for anyone to learn and get help. Se ocupará de las publicaciones marcadas y manejará el spam, las conversaciones fuera de tema y otras conversaciones inapropiadas.

Tenga en cuenta que una vez que sea un moderador en el foro, comenzará a ver sugerencias azules de moderador sobre los miembros del foro, como "esta es la primera vez que [persona] publica: ¡démosle la bienvenida a la comunidad!" o "[persona] no ha publicado en mucho tiempo, démosle la bienvenida".

![Un mensaje de texto azul que dice "esta es la primera vez que [person] ha publicado - ¡Demos la bienvenida a la comunidad!](https://i.imgur.com/mPmVgzK.png)

Estas son oportunidades para que les dé la bienvenida y los haga sentir muy especiales. Nunca se sabe qué persona que a sido marginada puede convertirse en nuestro próximo súper ayudante, ayudando a muchas otras personas en su viaje de codificación. Incluso la más mínima bondad puede desencadenar una cascada de buenas acciones.

### Eliminando mensajes del foro

Los moderadores del foro pueden borrar las publicaciones de los usuarios. Solo debes hacer esto en los siguientes casos:

1. Alguien ha publicado una imagen pornográfica o gráficamente violenta.
2. Alguien ha publicado un enlace o código que es de naturaleza maliciosa y podría dañar a otros usuarios que hagan clic en él.
3. Alguien ha inundado un hilo con muchos mensajes de spam.
4. An account has been created, beyond a reasonable doubt, to spam.

### Tratando con Spam

For the first spam post of a legitimate user (ie. whose intent isn't to spam the forum but to learn/contribute to the forum), send them a message explaining the problem, and remove the link or post as appropriate. Deje una nota en el perfil del usuario explicando la acción que ha realizado. Si el problema persiste, bloquee silenciosamente al usuario para que no publique (usando la opción de silencio en el panel de administración de usuarios). Send the user a warning with the [Code of Conduct](https://code-of-conduct.freecodecamp.org). Marque la casilla en el mensaje privado que indica que su mensaje es una "advertencia formal".

As a moderator, you can ask questions and report incidents in the [mod-team forum section](https://forum.freecodecamp.org/c/mod-team/4).

### Dealing with Off-Topic Conversations

Posts or topics that seem to be in the wrong place can be recategorized or renamed to whatever would be appropriate.

En circunstancias excepcionales, puede ser apropiado que un moderador divida una discusión en varios hilos.

Again, if you have any problems or questions, make a post with your actions in the `"Staff"` category, and tag another moderator if you want them to review your moderating actions.

### Dealing with Posted Solutions

If a user replies in a help thread for the freeCodeCamp curriculum with a solution, remove it and use the **Solution Instead of Help** canned reply (or a similar response in your own words).

If the OP (Original Poster) replies within a freeCodeCamp curriculum help thread with their final solution, blur it and use the **Blurred Spoiler Solution** canned reply.

If a user creates a thread asking for feedback on a solution, move the thread to the feedback subforum and blur the solution, as necessary. If the user is only posting the solution to show it off, then unlist the thread and use the **Solutions Thread** canned reply.

### Underage Users

Our [Terms of Service](https://freecodecamp.org/terms) require that freeCodeCamp users be at least 13 years of age. If a user reveals that they are under the age of 13, send them the message (below), suspend the account then **Email `support[at]freecodecamp.org` to delete the user's freeCodeCamp /learn and forum accounts as well (providing a link to the offending forum account).**

```markdown
SUBJECT: Los usuarios menores de 13 años no pueden utilizar el foro según nuestras Condiciones de Servicio.

Nos hemos enterado de que usted es menor de 13 años. Por los [Términos de servicio de freeCodeCamp](https://freecodecamp.org/terms), debes tener al menos 13 años para usar el sitio o el foro. Eliminaremos tu cuenta de freeCodeCamp y tu cuenta del foro. Esta restricción nos mantiene en cumplimiento de las leyes estadounidenses.

Por favor, vuelva a unirse una vez que haya alcanzado al menos 13 años de edad.

Gracias por su entendimiento.
```

### Moderating Via Cell-phone

Moderating the forum is possible via a cell-phone but you may encounter some usage quirks. This is not an exhaustive list.

- When trying to include a "Canned reply" in a response, if the menu doesn't open (after clicking on the gear), click on the text area first then try it again.
- The moderator's 'wrench' is at the bottom of the view-port but if you click it and cannot see the "Select Posts" button because it has scrolled out of view, you may need to try to scroll to it, though sometimes that doesn't work in which case moving to a desktop/laptop monitor may be needed.
- Sometimes clicking on the three-dot menu below a post can hide the reply icon. Reload the page to get it back.

## Moderando Facebook

If you see anything that seems to break our [Code of Conduct](https://code-of-conduct.freecodecamp.org/), you should delete it immediately.

Sometimes people will post things that they think are funny. They don't realize that what they said or what they shared could be interpreted as offensive. You should delete such posts, but not necessarily ban the person. Hopefully, the user will come to understand that what they posted was inappropriate because the post was deleted.

But if it is an egregious offense that can't reasonably be attributed to a cultural difference or a misunderstanding of the English language. In that case, you should strongly consider blocking the member from the Facebook group.

## Moderando Discord

Here's how moderators deal with violations of our [Code of Conduct](https://code-of-conduct.freecodecamp.org/) on our chat server:

> [!NOTE] Camperbot serves as our moderation bot, and all of the commands use Discord's native slash command interface. You can see a list of all of the commands by typing `/` in any channel.

1. **Asegúrese de que el usuario ha querido violar el [Código de Conducta](https://code-of-conduct.freecodecamp.org).**

   Not all violations of the [Code of Conduct](https://code-of-conduct.freecodecamp.org) were intended as such. A new camper might post a large amount of code for help, unaware that this can be disruptive to conversation. En estos casos, puedes pedir que copien su código en aplicaciones como CodePen o Pastebin.

2. **If the camper clearly and intentionally violates the [Code of Conduct](https://code-of-conduct.freecodecamp.org), the moderator will proceed as follows:**

   For minor offences, a warning may be issued with the `/warn` command. For more egregious offences, you can remove the member from the server temporarily with the `/kick` command, or permanently with the `/ban` command. In some cases, a member may just need some time to cool off and collect their thoughts - the `/mute` command allows you to prevent them from engaging with our community for a set period of time. A muted member can see the conversation, but cannot post messages or add reactions.

   All moderation commands will take a `reason` parameter, which should be a short explanation of why the action was taken. Moderation actions done with the bot will be logged in `#mod-log`, which allows us all to stay on the same page. As such, we should avoid using Discord's built-in moderation tools, as they will not be logged.

   > [!WARNING] The reason provided to a moderation command will also be included in the DM notification to the camper. Please remember to be professional here.

3. **Creando una discusión privada**

   Puede haber situaciones en las que necesites abordar una inquietud con un usuario en privado. Esto no debe hacerse a través de Mensajes Directos, lo que puede llevar a situaciones en las que reclamas una cosa y el campista reclama otra. En su lugar, use la funcionalidad del bot para crear una discusión privada:

   - Call the `/private` command, where `target` is the camper you want to open a private channel with.
   - The bot will create a new channel, and add the mentioned camper and all moderators with the `Your Friendly Moderator` role. While all moderators are added to the channel for transparency, the moderator who calls this command should be the only one to interact with the camper unless they request assistance.
   - When the conversation is complete, click the `❌ Close` button _on the first message in the private channel_ to have the bot close and delete that channel.

4. **Deleting messages**

   Our moderation bot is configured to log deleted messages automatically in the `#mod-log` channel. If a message is not in line with our Code of Conduct, or otherwise not appropriate for our community, you are generally safe to delete it.

   Note that if the message contains content that violates Discord's terms of service, you'll want to report it via https://dis.gd/report **prior to** deleting it.

5. **Don’t threaten to take action**

   If a camper breaks the [Code of Conduct](https://code-of-conduct.freecodecamp.org), don’t threaten to take moderator action, and never warn them in public. Instead, talk to them privately using the bot's `/private` command, or use the bot's moderation commands.

   If a violation was clearly unintended and doesn't warrant moderation action or private conversation, make the offending camper aware of their actions without making it come across as a warning.

   Por ejemplo:

   - Camper posts a wall of code to request help:

     Moderator: **@username** Please use CodePen or Pastebin when posting large amounts of code.

   - Or if you really have to explain why:

     Moderator: **@username** Please use CodePen or Pastebin when posting large amounts of code, because it disrupts the chat for everyone and could be considered spamming according to our [Code of Conduct](https://code-of-conduct.freecodecamp.org).

   - For mild and unintentional violations of the [Code of Conduct](https://code-of-conduct.freecodecamp.org):

     Moderator: This is a friendly reminder for everyone to follow the [Code of Conduct](https://code-of-conduct.freecodecamp.org): https://code-of-conduct.freecodecamp.org/

6. **No se preocupe de ser un moderador**

   Do not see yourself as above the community. **You are the community.** And the community has trusted you to help protect something rare that we all share - a _welcoming_ place for new developers.

   If you brag about being a moderator, people may feel uneasy around you, in the same way that people may feel uneasy around a police officer, even if they’re doing nothing wrong. This is just human nature.

7. **No contradigas a otros moderadores**

   If you disagree with a moderator's action, talk with them in private or bring it up in the #mod-chat channel. Never override a moderator's action, and never contradict the other moderator(s) publicly. Instead, have a cool-headed discussion in `#mod-chat` and convince the moderator that they themselves should reverse their ban or change their PoV (Point of View).

   _Remember: We’re all on the same team. We want to dignify the role of moderators and present a unified front._

8. **Habla con otros moderadores**

   We have a `#mod-chat` room for moderators only. Use it! If you feel uncomfortable with handling a certain situation, ask other moderators for help. If you think something should be discussed, do it. You're part of the team, and we value every team member's input! Even if you totally disagree with anything in these guidelines or the [Code of Conduct](https://code-of-conduct.freecodecamp.org)!

9. **Temporalmente inactivo**

   If you're not going to be active as a Moderator for a while due to vacation, illness, or any other reason, make sure to let the others know in the `#mod-chat` channel. This is so we know if we can count on you to be regularly active on the server or not.

## Cómo convertirse en moderador

Suppose you are helping people in the community consistently over time. In that case, our moderator team will eventually take notice, and one of them will mention you as a possible moderator to [our staff](https://forum.freecodecamp.org/g/Team). There are no shortcuts to becoming a moderator.

If you are approved, we will add you to our moderator teams on [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), [forum](https://forum.freecodecamp.org/g/moderators), chat, etc.

> [!NOTE] For GitHub: After you've been accepted as a moderator, you will receive a Github repository invitation. You'll need to head over towards [freeCodeCamp GitHub Organization Invitation](https://github.com/orgs/freeCodeCamp/invitation) to be able to accept the invitation.
> 
> This is required for us to be able to give you write access to some of our repositories.

## How We Retire Inactive Moderators

Please note that we will frequently remove moderators whom we think are inactive. When we do this, we will send the following message:

```markdown
This is a standard message notifying you that, since you don't seem to have been an active moderator recently, we're removing you from our moderator team. Agradecemos profundamente tu ayuda en el pasado.

If you think we did this in error, or once you're ready to come back and contribute more, just reply to this message letting us know.
```

## How Our Contributors Room Works

Anyone is welcome in the [contributors room on our chat server](https://discord.gg/PRyKn3Vbay). It is the designated chat room for moderators and other campers who contribute to our community in any number of ways, including through study groups.

We assume contributors will read anything in this room that directly mentions them with an **@username**. Everything else is optional, but feel free to read anything anyone posts in there and interact.

## Lidiando con solicitantes

You may be approached by organizations who want to partner or co-brand with freeCodeCamp somehow. Once you realize that this is what they're after, **please stop talking to them** and tell them to email `team[at]freecodecamp.org`.

We get proposals like this all the time, and the staff are in the best position to judge whether such a relationship will be worth it for our community (and it rarely is).

## Tratamiento de consultas (mentales) de salud

You may come across situations where users seek medical advice or are dealing with mental health issues and are looking for support.

As a matter of policy, you should avoid talking privately about these matters. Should the situation reflect back to freeCodeCamp, we want to have the conversation(s) on record. Make it clear that we are not medical professionals and that you encourage the user to find professional help.

As difficult as it sometimes can be, avoid giving any tips or advice and rather point the user in the direction of seeking professional help!

If this happens on our chat server: Create a private channel for the user and the moderator team. This can be done with the bot's `private` command.

- The user is guaranteed some privacy.
- Public chat is no longer disrupted.
- Other team members can pitch in, should you feel uncomfortable dealing with the situation yourself.

Helpful URLs:

http://suicide.org/international-suicide-hotlines.html

## Una nota sobre la libertad de expresión

Sometimes people will defend something offensive or incendiary that they said as "free speech."

This XKCD comic summarizes perfectly most communities' thoughts on free speech.

<div align="center"><img src='./images/github/xkcd-free-speech.png' width="400" height="400" /></div>

Thanks for reading this, and thanks for helping the developer community!

## Plantillas de Respuesta

These are some of the standard reply templates that you may use while reviewing pull requests and triaging issues/pull requests.

> You can make your own saved replies with GitHub's built-in [saved replies](https://github.com/settings/replies/) feature or use the ones below.

### Thank You

```markdown
Gracias por su contribución a la página! 👍
Estamos felices de aceptar estos cambios y esperamos futuras contribuciones. 🎉
```

### Thank you and congrats

> Por dar las gracias y animar a los que han contribuido por primera vez.

```markdown
Hola @nombre de usuario. ¡Felicidades por tu primer pull request (PR)! 🎉

¡Gracias por tu contribución a la página! : Techns_up:
Estamos encantados de aceptar estos cambios y esperamos futuras contribuciones. 📝
```

### Build Error

```markdown
Hola @username

Nos encantaría poder combinar tus cambios, pero parece que hay un error con la construcción de Travis CI. Una vez resueltos estos problemas, revisaremos tu PR para hacer un Merge. No dude en consultar las [pautas de contribución] (how-to-work-on-coding-challenges.md#testing-challenges) para obtener instrucciones sobre cómo ejecutar la compilación de CI localmente. ✅
```

### Syncing Fork

> When PR is not up to date with the `main` branch.

````markdown
Hey @username

Nos encantaría hacer Merge a los cambios realizados, pero parece que la rama aún no se encuentra actualizada.  ⚠️Para pasar la compilación, tendrás que sincronizar los últimos cambios desde la rama master del repositorio freeCodeCamp/freeCodeCamp.

Usando la línea de comando, puede hacer esto en tres sencillos pasos:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git fetch upstream

git pull upstream main
````

If you're using a GUI, you can simply `Add a new remote...` and use the link `git://github.com/freeCodeCamp/freeCodeCamp.git` from above.

Once you sync your fork and pass the build, we will be able to review your PR and merge it. 😊

---

Feel free to reference the ["Syncing a fork"](https://help.github.com/articles/syncing-a-fork/) article on GitHub for more insight on how to keep your fork up-to-date with the upstream repository. 🔄
````

### Fusionar conflictos

> Cuando las PR tienen conflictos que necesitan ser resueltos.1


Nos encantaría poder fusionar sus cambios, pero parece que tiene algunos conflictos de fusion. Una vez que resuelva estos conflictos, podremos revisar su RP y fusionarlo. 😊

---

 Si no estás familiarizado con el proceso de fusión de conflictos, no dudes en echar un vistazo a la guía de GitHub en ["Resolviendo un conflicto de fusiones"](https://help. ithub.com/articles/resolving-a-merge-conflict-on-github/). 🔍️

 Además, es buena práctica en GitHub escribir una breve descripción de los cambios al crear un PR. 📝
````

¹ If a first-time-contributor has a merge conflict, maintainers will resolve the conflict for them.

### Duplicate

> When PR is repetitive or a duplicate.

```markdown
Hola @nombredeusuario

Este RP parece realizar cambios similares a los del RP existente & lt; # number & gt .

 Como tal, vamos a cerrar esto como duplicado.

Si cree que tiene cambios adicionales para expandir este PR, no dude en presionar sus confirmaciones y solicitar que este PR se vuelva a abrir.

¡Gracias de nuevo! 😊

---

Si tienes alguna pregunta, no dudes en hacer preguntas en la categoría ["Colaboradores" en nuestro foro](https://forum.freecodecamp.org/c/contributors) o [la sala de chat de colaboradores](https://discord.gg/PRyKn3Vbay).
```

### Closing Invalid Pull Requests

> When PR is invalid.

```markdown
Hola @username

Gracias por abrir este pull request.

Este es un mensaje estándar notificándole que hemos revisado su pull request y hemos decidido no fusionarlo. Damos la bienvenida a tus futuras pull request.

Gracias y ten un feliz día programando.
```

> When PR adds links to external resources.

```markdown
Gracias por abrir esta solicitud de extracción.

Cerramos esta solicitud de extracción. Sugiera enlaces y otros detalles para agregar la publicación de la guía correspondiente al desafío a través de [un tema del foro] (https://forum.freecodecamp.org/new-topic?category=Contributors&title=&body=**What%20is% 20su% 20sugestión% 20o% 20solución% 20sugerencia% 3F **% 0A% 0A% 0A% 0A% 0A ** Desafío% 3A **% 0A% 0A% 0A ** Vínculo% 20a% 20el% 20 desafío% 3A **) en lugar de.

Si consideras que nos hemos equivocado cerrando esta incidencia, por favor solicita su reapertura y añade más aclaraciones. Thank you and happy coding.
```

### Adding comment about newbie mistakes

```markdown
As a new contributor, we encourage you to read our [contributing guidelines](https://contribute.freecodecamp.org).

We expect our contributors to be aware of the process specific to this project. Following the guidelines religiously earns you the respect of fellow maintainers and saves everyone time.

Some examples of this are:

1. Do not edit files directly through GitHub – while you can, it's not a good idea.
2. Make sure you follow the PR checklist and not just tick things off; otherwise, we won't take you seriously.
3. Use the correct way to link issues in the description of the PR by updating the `XXXXXX`. Do not just add issue numbers everywhere and anywhere you feel like.
4. Keep mentions and review requests to a minimum. We understand you are excited about contributing, and our maintainers will get back to you as soon as they get a chance.
5. Do not work directly off your `main` branch - create a new branch for the changes you are working on.

We appreciate you taking the time to help us, and we hope to see more contributions from you.

Happy Contributing.
```

### Closing Invalid Issues

> When an issue relates to the camper's code.

```markdown
Gracias por reportar este problema. 

This is a standard message notifying you that this issue seems to be a request for help. Instead of asking for help here, please click the **"Get Help"** button on the challenge on freeCodeCamp and choose the **"Ask for help"** option, which will help you create a question in the right part of the forum. Volunteers on the forum usually respond to questions within a few hours and can help determine if there is an issue with your code or the challenge's tests.

If the forum members determine there is nothing wrong with your code, you can request this issue to be reopened.

Thank you and happy coding.
```

> When an issue is duplicate of an earlier issue.

```markdown
Gracias por reportar elproblema. 

This is a standard message notifying you that this issue appears to be very similar to issue #XXXXX, so we are closing it as a duplicate.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

> When an issue is fixed in staging.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that the problem you mentioned here is present in production, but that it has already been fixed in staging. This means that the next time we push our staging branch to production, this problem should be fixed. Because of this, we're closing this issue.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

### `first timer only` Issues

> When an issue is deemed to be eligible for first-time code contributors.

```markdown
Thanks for opening this issue.

This looks like something that can be fixed by "first-time" code contributors to this repository. Here are the files that you should be looking at to work on a fix:

List of files:

1. ...
2. ...
3. ...

Please make sure you read our [guidelines for contributing](https://contribute.freecodecamp.org/#/), we prioritize contributors following the instructions in our guides. Join us in our [chat room](https://discord.gg/PRyKn3Vbay) or our [forum](https://forum.freecodecamp.org/c/contributors/3) if you need help contributing; our moderators will guide you through this.

Sometimes we may get more than one pull request. We typically accept the most quality contribution followed by the one that is made first.

Happy contributing.
```

### Requests for Assignment

```md
We typically do not assign issues. Instead, we accept the first pull request that comprehensively solves the issue.

Issues labelled with `help wanted` or `first timers only` are open for contributions.

Please make sure you read [our guidelines for contributing](https://contribute.freecodecamp.org/#/). We prioritize contributors following the instructions in our guide. Join us in [our chat room](https://discord.gg/PRyKn3Vbay) or [the forum](https://forum.freecodecamp.org/c/contributors/3) if you need help contributing - our community will be happy to assist you.
```

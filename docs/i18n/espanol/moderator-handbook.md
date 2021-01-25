# El Manual oficial para moderador de freeCodeCamp.

Esto te ayudará a moderar diferentes lugares en nuestra comunidad, incluyendo:

- Peticiones de GitHub & pull requests
- Los foros, salas de chat, grupos de facebook y otros lugares de reuniones en línea
- Eventos presenciales y grupos de estudio, competencias y conferencias

**Todos los moderadores de freeCodeCamp son de amplio acceso. Esto significa que confiamos en ti para supervisar cualquiera de estos lugares.**

Dicho esto, puedes servir como moderador en los lugares que más te interesen. Algunos moderadores solo ayudan en GitHub. Otros solo contribuyen en foros. Otros moderadores se mantienen activos en todo.

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

Los Pull Requests (PRs) son la vía que utilizan los colaboradores para someter cambios al repositorio de freeCodeCamp. Es importante que realicemos un control de calidad (QA) en los pull requests antes de decidir si aceptarlos o cerrarlos.

#### Tipo de Pull Requests

1. **Edición de las instrucciones de los ejercicios**. Estos son cambios en el texto de los ejercicios - la descripción, instrucciones o el texto de las pruebas. Puedes revisar las ediciones directamente en GitHub y decidir ahí si aceptar o no los cambios. En esto debemos ser más que cuidadosos, porque millones de personas leerán estos textos en la medida que vayan completando el programa de freeCodeCamp. ¿El pull request hace más claro el texto sin alargarlo demasiado? ¿Son las recomendaciones relevantes o pedantes en exceso? Recuerda que nuestro objetivo es que los retos sean lo más claro y cortos posibles. No son el lugar para detalles oscuros. Además, los colaboradores podrían intentar añadir enlaces hacia recursos en los desafíos. Podrías cerrar estos pull request y responder como sigue:

   > Muchas gracias por tus recomendaciones.
   > 
   > Cerraré este pull request. Por favor, añade enlaces y otros detalles a los desafíos en el artículo guía correspondiente.
   > 
   > Si consideras que me equivoco al cerrar este requerimiento, vuelve a abrirlo y añade más aclaraciones. Muchas gracias y sigue programado.

2. **Ediciones del Código del Desafío** Estos son cambios en el código de un desafío - Semilla del Desafío, Solución del Desafío y Strings de Pruebas. Estos pull requests necesitan ser retirados de GitHub y probados en su computadora local para asegurarse que las pruebas de desafío pueden ser pasadas con la solución actual, y el nuevo código no introduce errores. Algunos colaboradores pueden intentar añadir pruebas adicionales para cubrir casos pedánticos. Debemos tener cuidado de no complicar demasiado el reto. Estos retos y sus pruebas deben ser tan simples e intuitivas como sea posible. Aparte de los desafíos del algoritmo y la sección de preparación de la entrevista, los estudiantes deberían ser capaces de resolver cada desafío en unos 2 minutos.

3. **Cambios de código base** Estos códigos modifican la funcionalidad de la plataforma freeCodeCamp en sí. A veces los colaboradores tratan de hacer cambios sin mucha explicación, pero para los cambios de código necesitamos asegurarnos de que hay una verdadera necesidad para el cambio. Así que estas solicitudes de extracción deben referirse a un problema existente de GitHub en el que se discuten las razones del cambio. Entonces puede abrir el pull request en su computadora y probarlo localmente. Después de haberlo hecho, si los cambios se ven bien, no los fusiones todavía. Puedes comentar en la pull request diciendo "LGTM", luego mencionar @raisedadead para que pueda echar un vistazo final.

#### Cómo combinar o cerrar pull requests

En primer lugar, cuando elijas un pull request a QA, deberás asignarte a él. Puedes hacer esto haciendo clic en el enlace "assign yourself" debajo de la parte "assignees" en la columna derecha de la interfaz de GitHub.

Dependiendo del tipo de pull request que sea, siga las reglas indicadas arriba.

Antes de fusionar cualquier pull request, asegúrate de que GitHub tiene marcas verdes para todo. Si hay alguna X, averigua primero y descubre cómo convertirlas en marcas de verificación verdes primero.

A veces habrá un conflicto de fusión. Esto significa que otro pull request ha hecho un cambio a esa parte exacta del mismo archivo. GitHub tiene una herramienta para abordar estos conflictos de fusión en GitHub. Puedes tratar de resolver estos conflictos. Simplemente utiliza su mejor criterio. Los cambios de la solicitud de extracción estarán en la parte superior, y los cambios de la sucursal principal estarán en la parte inferior. A veces habrá información redundante que se puede eliminar. Antes de que finalices, cerciórate de eliminar el `<<<<<<`, `======`, y `>>>>>>` que Git añade para indicar áreas de conflicto.

Si el pull request parece estar listo para fusionarse (y no requiere la aprobación de @raisedadead), puedes seguir adelante y fusionarlo. Asegúrate de utilizar la funcionalidad predeterminada "Squash and Merge" en GitHub. Esto aplastará todas las solicitudes pull se compromete a un solo commit, lo que hace que la historia de Git sea mucho más fácil de leer.

A continuación, deberías comentar sobre la solicitud de extracción, dando las gracias al colaborador de tu propia manera personal.

Si el autor de pull request es un "colaborador por primera vez" también debe felicitarlos por su primera solicitud de pull fusión en el repositorio. Puedes mirar la esquina superior derecha del cuerpo del PR, para determinar un colaborador de primera vez. Mostrará `First-time contributor` como se muestra a continuación:

![Copiar_edits_for_Java_arrays_article_by_karentobo_%C2%B7_Pull_Request__20615_%C2%B7_freeCodeCamp_freeCodeCamp|690x281](https://i.imgur.com/dTQMjGM.png)

Si el pull request no parece listo para fusionarse, puedes responder amablemente al autor que debe hacer para prepararlo. Esperemos que respondan y tengan su pull request  lo más listo posible.

A menudo, un pull request será obviamente poco esfuerzo. A menudo puedes decirle esto inmediatamente cuando el colaborador no se molestó en marcar las casillas de verificación en la Plantilla de Pull Request o usó un título genérico para el pull request como "made changes" o "Update index.md".

También hay situaciones en las que el colaborador está intentando añadir un enlace a su propio sitio web, o incluir una biblioteca que ellos mismos crearon, o tiene una edición frívola que no sirve para ayudar a nadie más que a sí mismos.

En ambas situaciones, debes seguir adelante y cerrar su pull request y responder con este mensaje estándar:

> Gracias por abrir esta solicitud de extracción.
> 
> Este es un mensaje estándar notificándole que hemos revisado su pull request y hemos decidido no fusionarlo. Damos la bienvenida a tus futuras pull request.
> 
> Gracias y ten un feliz día programando.

Si necesitas una segunda opinión sobre un pull request, sigue adelante y deja tus comentarios sobre el pull request, luego agregue la etiqueta "discussing" al pull request.

### Moderando problemas de GitHub

freeCodeCamp es un proyecto activo de código abierto. Cada día recibimos nuevos asuntos, todos los cuales necesitan ser probados y etiquetados.

#### Tipos de problemas de GitHub

1. **Solicitudes de ayuda de código**, para los que la gente ha creado erróneamente problemas en GitHub. Si alguien está pidiendo ayuda, pega el siguiente mensaje, entonces cierre el problema.

   > Gracias por informar de este problema.
   > 
   > Este es un mensaje estándar que le notifica que esta cuestión parece ser una solicitud de ayuda. En lugar de pedir ayuda aquí, por favor haga clic en el botón \*\*"Ayuda"\*\* en el desafío en freeCodeCamp, que te ayudará a crear una pregunta en la parte derecha del foro. Los voluntarios en el foro generalmente responden a preguntas en unas pocas horas y pueden ayudar a determinar si hay un problema con tu código o con las pruebas del desafío.
   > 
   > Si los miembros del foro determinan que no hay nada malo en su código, puede solicitar que se vuelva a abrir este problema.
   > 
   > Gracias y ten un feliz día programando.

2. **Problemas de error o aclaración** Intenta reproducir el error tú mismo si puedes. Si no, pídeles los pasos para reproducir el error y si tienen alguna captura de pantalla, o detalles adicionales que le pueden ayudar a reproducir el problema. Una vez que se pueda reproducir el problema - o al menos confirmar que es un problema legítimo - etiquétalo `confirmado`. Luego:

- Si es un simple cambio en un desafío existente, etiqueta como ` solo principiantes`, de lo contrario etiqueta como `ayuda deseada`. Utilice otras etiquetas según corresponda.
- Si el problema es más significativo, marca como `bug`. &nbsp; Si hay alguna ambigüedad en cuanto al curso correcto de acción en un problema, siéntate libre de etiquetar a @raisedadead sobre el problema y luego añade la etiqueta `Discutir`.

3. **Problemas duplicados** Si un problema es el mismo que otro problema reportado, el problema reportado previamente debería tener precedencia. Marcar como `Duplicar`, pegar el siguiente mensaje reemplazando `#XXXXX` con el número de incidencia, luego cerrar el asunto.

   > Gracias por informar de este problema.
   > 
   > Este es un mensaje estándar notificándole que este problema parece muy similar a la incidencia #XXXXX, Así que lo estoy cerrando como un duplicado.
   > 
   > Si consideras que me equivoco al cerrar este requerimiento, vuelve a abrirlo y añade más aclaraciones. Gracias y codificación feliz.

4. **Corregido en staging** Algunos problemas pueden haber sido arreglados en staging, pero no tiene un problema de GitHub asociado con ellos. Si este es el caso, puede pegar el siguiente mensaje, cerrar el problema y añadir un estado `: etiqueta` resuelto/envío:

   > Gracias por informar de este problema.
   > 
   > Este es un mensaje estándar que le notifica que el problema que ha mencionado aquí está presente en la producción, pero que ya ha sido arreglado en la etapa. Esto significa que la próxima vez que empujemos nuestra rama de montaje hacia la producción, este problema debería solucionarse. Debido a esto, estoy cerrando este problema.
   > 
   > Si consideras que me equivoco al cerrar este requerimiento, vuelve a abrirlo y añade más aclaraciones. Gracias y codificación feliz.

#### Cerrando pedidos, obsoletos, problemas inactivos y solicitudes de Pull

- Los números obsoletos o PRs son aquellos que no han visto ninguna actividad del OP durante 21 días (3 semanas desde la última actividad), pero sólo después de que un moderador haya solicitado más información/cambios. Estos pueden ser cerrados en un script automático/bot o por los propios moderadores.

- La actividad se define como: Comentarios que solicitan una actualización en PR y clases como `estado: actualización necesaria` etiqueta etc.

- Si el OP solicita ayuda adicional o incluso tiempo, lo anterior puede ser relajado y revisado después de que se dé una respuesta. En cualquier caso, los mods deben usar su mejor criterio para resolver el estado de PR.

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

1. Alguien ha publicado una imagen pornográfica o gráficamente violenta.
2. Alguien ha publicado un enlace o código que es de naturaleza maliciosa, y podría dañar a otros campistas que hacen clic en él.
3. Alguien ha inundado un hilo con muchos mensajes de spam.

### Tratando con spam

Para el primer mensaje de correo no deseado de un usuario, envíe un mensaje explicando el problema, y elimine el enlace o mensaje según corresponda. Deja una nota en el perfil del usuario explicando la acción que has tomado. Si el problema persiste, siga el proceso anterior. Bloquear silenciosamente al usuario de publicar (usando la opción de silencio en el panel de Administración de Usuarios), luego enviar una advertencia con el Código de Conducta. Marque la casilla del mensaje privado indicando que su mensaje es una "advertencia formal".

Puedes hacer preguntas e informar de incidentes en la sección [del foro del personal](https://forum.freecodecamp.com/c/staff).

### Tratando con conversaciones fuera de tema

Mensajes o temas que parecen estar en el lugar equivocado pueden ser recategorizados o renombrados a cualquier cosa que sea apropiada.

En circunstancias excepcionales, puede ser apropiado que un moderador bifurque una discusión en múltiples hilos.

De nuevo, si tienes algún problema o pregunta, haz un post con tus acciones en la categoría de personal, y etiquetar a otro moderador si quieres que revisen tus acciones de moderación.

### Usuarios Inderramados

Nuestros Términos de Servicio requieren que los usuarios de freeCodeCamp tengan al menos 13 años de edad. En el caso de que un usuario revele que es menor de 13 años enviarles el siguiente mensaje y eliminar su cuenta del foro (si la eliminación no está disponible, suspender la cuenta es suficiente). Luego envía un correo electrónico a [Quincy](https://forum.freecodecamp.org/u/QuincyLarson) (quincy@freecodecamp.org) o [Mrugesh](https://forum.freecodecamp.org/u/raisedadead) (mrugesh@freecodecamp.org) para eliminar también la cuenta freeCodeCamp del usuario.

```markdown
SUBJETIVO: Los usuarios menores de 13 años no pueden utilizar el foro por las Condiciones de Servicio

Hemos sabido que usted es menor de 13 años. Por los [términos de servicio gratis de CodeCamp](https://www.freecodecamp.org/news/terms-of-service), debes tener al menos 13 años de edad para usar el sitio o el foro. Eliminaremos tu cuenta de freeCodeCamp y tu cuenta de foro. Esta restricción nos mantiene en conformidad con las leyes estadounidenses.

Por favor, vuelva a unirse una vez que haya alcanzado al menos 13 años de edad.

Gracias por entender.
```

## Moderando Facebook

Si ves algo que parezca incumplir nuestro [Código de Conducta](https://code-of-conduct.freecodecamp.org/), deberías eliminarlo inmediatamente.

A veces la gente publicará cosas que creen que son divertidas. No se dan cuenta de que lo que dijeron o lo que compartieron podría interpretarse como ofensivo. En estos casos, su publicación debe ser eliminada, pero la persona que la publicó no necesariamente necesita ser prohibida. Con la eliminación de su correo, espero que lleguen a comprender que lo que publicaron era inapropiado.

Pero si se trata de una ofensa atroz que no puede atribuirse razonablemente a una diferencia cultural o a un malentendido del idioma inglés. entonces debe considerar fuertemente bloquear al miembro del grupo de Facebook.

## Moderando Discord

Así es como los moderadores tratan las violaciones de nuestro [Código de Conducta](https://code-of-conduct.freecodecamp.org/) en Discord:

1. **Asegúrese de que tenía la intención de violar el Código de Conducta.** No todas las violaciones del CoC fueron pensadas como tales. Un nuevo acampador podría publicar una gran cantidad de código de ayuda, sin darse cuenta de que esto puede considerarse spaming. En estos casos, puedes pedirles que peguen su código con servicios como Codepen o Pastebin.

2. **Si el acampador viola claramente el Código de Conducta, el moderador procederá de la siguiente manera:**

- Suspender al campesino que ofende, pero no advertirles ni amenazarlos. En lugar de ello, démosles en silencio el papel suspendido en Discord, y después enviarles el siguiente mensaje:

```
Este es un mensaje estándar que te notifica que tuve que suspender temporalmente de hablar en el servidor freeCodeCamp Discord.

Soy un moderador que actúa en nombre de nuestra comunidad de código abierto. Puedo considerar eliminar su suspensión, pero necesito que tome los siguientes 3 pasos primero:

1. Lea nuestro Código de Conducta: https://code-of-conduct.freecodecamp.org/
2. Envíame de vuelta confirmando que has terminado de leerlo.
3. Explíqueme por qué cree que le he suspendido y por qué debería retirar su suspensión.
```

- Reporta un breve resumen del evento y cómo respondieron al mismo en el canal #admin. He aquí un ejemplo de cómo podría ser un resumen así:

```
Suspendido: _@username_
Razón(s): _Spamming, trolling_
Razón: _Uno o más enlaces al mensaje(s) ofendido(s)_
CoC: _Sent_
```

- Un informe para eliminar una suspensión debería ser así:

```
He eliminado la suspensión de ` @username `. Les envié el Código de Conducta. Justo hoy se dieron cuenta de que fueron suspendidos y disculpados por lo que hicieron.
```

- Basado en la respuesta de los delincuentes, el moderador decidirá si retira o no la suspensión del camp. Si parecen respetuosos y disculpados, el moderador puede eliminar la suspensión. Como una cuestión de política, los moderadores serán educados durante este proceso, sin importar cuán mal se haya comportado el acampador ofendedor. Si no son respetuosos o no están dispuestos a aceptar el CoC, la suspensión debe ser seguida con una prohibición del servidor de Discord. Utilice el mismo resumen que arriba, pero reemplace "Suspendido:" con "Baneado:".

3. **Cómo prohibir y/o desbanear**

- Para prohibir a alguien, haga clic derecho en su foto de usuario/perfil y seleccione "Banear <username>". Se le dará la opción de eliminar sus mensajes anteriores - seleccione "No eliminar ninguno", ya que los mensajes deben permanecer presentes como un registro histórico.
- Si decides prohibir a alguien, significa que no están dispuestos a respetar nuestro Código de Conducta. Por lo tanto, la prohibición de un Camper raras veces debería producirse. Sin embargo, si surge la necesidad, puede hacerlo haciendo clic en el nombre del servidor, eligiendo "Configuración del servidor", escogiendo "Bans", seleccionando el usuario que desea desbanear, y haciendo clic en "Revocar Baneo".

Los Bans de Discord son globales - no puedes banear a un usuario de un canal específico, solo de todo el servidor.

4. **Eliminando mensajes** Los moderadores pueden eliminar mensajes en Discord. Sólo deberían ejercer esta capacidad en cuatro situaciones muy concretas:

- Alguien ha publicado una imagen pornográfica o gráficamente violenta.
- Alguien ha publicado un enlace o código que es de naturaleza maliciosa, y podría dañar a otros campistas que hacen clic en él.
- Alguien ha inundado el chat con muchos mensajes de correo no deseado hasta tal extremo (generalmente con bots) que hacen que el chat sea completamente inutilizable.
- Alguien ha publicado anuncios y / o un mensaje auto-promocionante / imagen (redes sociales).

En todas las demás situaciones -incluso situaciones en las que se viole el código de conducta- los moderadores no deben eliminar el mensaje, ya que son un registro histórico importante. Cuando eliminas un mensaje, ¡asegúrate de tomar una captura de pantalla primero! La captura de pantalla puede ser registrada en el canal #mod-log, pero para el #activity-log es suficiente decir que la evidencia fue "eliminada debido al contenido sensible". Nota: Si el mensaje contiene material que sería ilegal para tomar una captura de pantalla de, copiar el enlace del mensaje en su lugar - proporcionar ese enlace del mensaje a @raisedadead para reenviar al equipo de Confianza y Seguridad de Discord.

5. **No utilices @everyone o @here** ¡No utilices @everyone o @here bajo ningún concepto! Cada persona en esa sala de chat recibirá una notificación. En algunos casos, decenas de miles de personas. En su lugar, si quieres que la gente vea un anuncio, puedes anclarlo al canal para permitir que todo el mundo lo lea.

6. **No amenazes con banear o suspender** Si un campador está rompiendo el código de conducta, no amenazar con prohibirlos o suspenderlos, y nunca advertirlos en público. En cambio, hable con ellos privadamente, o envíelos un DM y emita una suspensión (por el protocolo anterior). Nadie más en ese canal necesita saber que has prohibido o suspendido a la persona - los campistas pueden ver el resumen en el canal #activity-log si quieren mantenerse al tanto de esa información. Si una violación era claramente inintencionada y no garantiza una suspensión o conversación privada, hacer que el campador ofendente sepa de sus acciones sin hacerla aparecer como una advertencia. Por ejemplo:

- Camper publica un muro de código para solicitar ayuda

  Moderador: @username Por favor use Codepen o Pastebin cuando publique grandes cantidades de código.

- O si realmente tienes que explicar por qué:

  Moderador: @username Por favor use Codepen o Pastebin cuando publique grandes cantidades de código, porque interrumpe el chat para todos y podría considerarse spamming de acuerdo con nuestro Código de Conducta.

- En caso de violaciones leves e involuntarias del código de conducta

  Moderador: Este es un recordatorio amistoso para que todos sigan el código de conducta: https://code-of-conduct.freecodecamp.org/

7. **No se preocupe por ser moderador** No se vea a sí mismo como superior a la comunidad. Eres la comunidad. Y la comunidad ha confiado en que ayudes a proteger algo raro que todos compartimos: _un lugar de bienvenida_ para nuevos desarrolladores. Si te molestas por ser un moderador, la gente puede sentirse incómoda a tu alrededor. del mismo modo que la gente puede sentirse incómoda en torno a un agente de policía, incluso si no está haciendo nada mal. Esto no es más que una naturaleza humana.

8. **No contradigas a otros moderadores** Si no estás de acuerdo con la acción de un moderador, hable con ellos en privado o hágalo en el canal #mod-chat. Nunca anules una prohibición, y nunca contradigas públicamente a los otros moderadores. En lugar de ello, mantengan una discusión fría en mod-chat y convenzan al moderador de que ellos mismos deberían revertir su prohibición o cambiar su punto de vista. Recuerde: todos estamos en el mismo equipo. Queremos dignificar el papel de los moderadores y presentar un frente unificado.

9. **Habla con otros moderadores** Solo tenemos una sala para moderadores. ¡Utilícelo! Si te sientes incómodo con cómo manejar una situación determinada, pide ayuda a otros moderadores. Si usted piensa que algo debería debatirse, hágalo. ¡Eres parte del equipo y valoramos la aportación de cada miembro del equipo! ¡Incluso si usted está totalmente en desacuerdo con cualquier cosa de estas directrices o con el Código de Conducta!

10. **Temporalmente inactivo** Si no vas a estar activo como moderador por un tiempo debido a las vacaciones, o cualquier otra razón, asegúrate de avisar a los demás en el canal #mod-chat. Esto es así que sabemos si podemos contar con usted para estar regularmente activo en el servidor o no.

## Cómo convertirse en un moderador

Si estás ayudando a las personas de la comunidad consistentemente con el tiempo, nuestro Equipo de Moderadores eventualmente tomará nota, y uno de ellos te mencionará como un posible moderador para [nuestro personal](https://forum.freecodecamp.org/g/Team). No hay atajos para convertirse en moderador.

Si estás aprobado, te añadiremos a nuestros Equipos de Moderador en [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), [foro](https://forum.freecodecamp.org/g/moderators), etc.

> [!NOTE] > **Para GitHub:** Después de que hayas sido aceptado como moderador, recibirás una invitación al repositorio de Github. Tendrás que dirigirte hacia [freeCodeCamp GitHub Organisation Invitation](https://github.com/orgs/freeCodeCamp/invitation) para poder aceptar la invitación. Esto es necesario para que podamos darle acceso de escritura en algunos de nuestros repositorios.

## Cómo retiramos a los moderadores inactivos

Tenga en cuenta que frecuentemente eliminaremos mods que consideramos inactivos. Cuando lo hagamos, enviaremos el siguiente mensaje:

> Este es un mensaje estándar notificándole que, ya que no parece haber sido un moderador activo recientemente, le estamos quitando de nuestro equipo de moderadores. Agradecemos profundamente su ayuda en el pasado.

> Si crees que hicimos esto por error, o una vez que estés listo para volver y contribuir más, simplemente responde a este mensaje haciéndome saber.

## Cómo funciona nuestra sala de colaboradores

Cualquiera es bienvenido en la sala de [colaboradores en nuestro Discord](https://discord.gg/KVUmVXA). Es la sala de chat designada para moderadores y otros campistas que están contribuyendo a nuestra comunidad de cualquier forma incluyendo a través de grupos de estudio.

Nuestro supuesto es que los contribuyentes leerán cualquier cosa en esta sala que los mencione directamente con un `@nombre de usuario`. Todo lo demás es opcional. Pero siéntete libre de leer cualquier cosa que se publique allí e interactuar.

## Tratando con los abogados

Es posible que te acerquen organizaciones que quieran asociar o co-marca con freeCodeCamp de alguna manera. Una vez que te das cuenta de que esto es lo que están haciendo, por favor deja de hablar con ellos y dales un correo electrónico a quincy@freecodecamp.org. Obtiene propuestas como ésta todo el tiempo y está en la mejor posición para juzgar si una relación de este tipo valdrá la pena para nuestra comunidad (y rara vez lo eso).

## Tratamiento de consultas (mentales) de salud

Usted puede encontrarse con situaciones en las que los usuarios están buscando asesoramiento médico o están tratando con problemas de salud mental y están buscando apoyo. Como cuestión política, debería evitar hablar en privado de estos asuntos. En caso de que la situación en algún momento refleje de nuevo a fCC, queremos tener las conversaciones registradas. Deja claro que no somos profesionales médicos y que animas al usuario a encontrar ayuda profesional. ¡Tan difícil como a veces puede ser, evitar dar consejos o consejos que no apunten al usuario en la dirección de la ayuda profesional!

Si esto sucede en Discord: Suspenda al usuario. Esto no es para castigarlos. Suspender un usuario creará un canal privado al que sólo pueden acceder el usuario y el equipo. Esto beneficiará tanto al usuario como a fCC de varias maneras:

- El usuario tiene garantizado cierta privacidad
- El chat público ya no está interrumpido
- Otros miembros del equipo pueden entrar, en caso de que te sientas incómodo enfrentándote a la situación tú mismo

> [!NOTE] Suspender un usuario automáticamente le da un mensaje sobre cómo leer nuestro Código de Conducta. Asegúrese de informar al usuario de que usted suspendió para darle cierta privacidad y que no están siendo castigados. Esto es muy importante. ¡Deseamos evitar dar a los usuarios la idea de que están siendo castigados por ponerse en contacto para obtener ayuda!

Si crees que el usuario es capaz de volver a unirse a la comunidad, haz clic derecho en el canal privado y copia el ID. Poner el siguiente mensaje en #mod-log:

> Asesoramiento médico de referencia: <channel ID> <username>

Después de eso, puede eliminar la suspensión del usuario como lo hace normalmente.

URL útiles:

http://www.suicide.org/international-suicide-hotlines.html

## Una nota sobre la libertad de expresión

A veces la gente defenderá algo ofensivo o incentivo que dijo como "libertad de expresión".

Este cómic XKCD resume perfectamente los pensamientos de la mayoría de las comunidades sobre la libertad de expresión. Así que si alguien defiende algo, están diciendo como "libertad de expresión" siéntase libre de enviársela.

<div align="center"><img src='https://aws1.discourse-cdn.com/freecodecamp/original/3X/4/3/43a8b2eafe4c8622e02838f66f1dc6227de32c70.png' width="400" height="400" /></div>

¡Gracias por leer esto, y gracias por ayudar a la comunidad de desarrolladores!

## Usando plantillas de respuesta

Estas son algunas de las plantillas de respuesta estándar que puede usar al revisar solicitudes de extracción y problemas de prueba.

> Puedes hacer tu propio con la función integrada de GitHub [**Respuestas guardadas**](https://github.com/settings/replies/) o usar las que se muestran a continuación.

### Gracias.

```markdown
Gracias por su contribución a la página! :Techns_up:
Estamos encantados de aceptar estos cambios y esperamos futuras contribuciones. 🎉
```

### Muchas gracias y felicidades

> Por dar las gracias y animar a los que han intervenido por primera vez.

```markdown
Hola @nombre de usuario. ¡Felicidades por tu primer pull request (PR)! 🎉

¡Gracias por tu contribución a la página! :Techns_up:
Estamos encantados de aceptar estos cambios y esperamos futuras contribuciones. 📝
```

### Error de compilación

```markdown
Hola @username

Nos encantaría poder combinar tus cambios, pero parece que hay un error con la construcción de Travis CI. ⚠️

Una vez resuelvas estos problemas, podremos revisar tus PR y fusionarlos. 😊

---

> Siéntase libre de hacer referencia a la [Guía de estilo para escribir artículos](https://github. om/freeCodeCamp/freeCodeCamp#article-title) para este repositorio sobre el formato de un artículo correctamente para que tu Travis CI build pase. ✅
>
> Además, es buena práctica en GitHub escribir una breve descripción de los cambios al crear un PR. 📝
```

### Sincronizando bifurcación

> Cuando las relaciones públicas no están actualizadas con la rama `principal`.

````markdown
Hola @username

Nos encantaría poder combinar tus cambios, pero parece que hay un error con la construcción de Travis CI. ⚠️

```bash
Error: ENOTDIR: no es un directorio, abre 'src/pages/java/data-abstraction/index.md'
````

Este error en particular no fue causado por su archivo, pero fue un error antiguo causado por la fusión de código defectuoso en la rama `master`. Desde entonces se ha resuelto.

Para pasar la compilación, tendrás que sincronizar los últimos cambios desde la rama `master` del repositorio `freeCodeCamp/freeCodeCamp`.

Usando la línea de comandos, puedes hacer esto en tres sencillos pasos:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git fetch upstream

git pull upstream master
```

Si estás usando un GUI, puedes simplemente `Añadir un nuevo remoto...` y usar el enlace `git://github.com/freeCodeCamp/freeCodeCamp.git` desde arriba.

Una vez que sincronice su bifurcación y pase la compilación, podremos revisar su PR y fusionarla. 😊

---

> Siéntase libre de hacer referencia al artículo de [Sincronizar un Fork](https://help.github.com/articles/syncing-a-fork/) en GitHub para obtener más información sobre cómo mantener su fork actualizado con el repositorio del desarrollador principal. 🔄
> 
> También, es buena práctica en GitHub escribir una breve descripción de sus cambios al crear un PR. 📝
````

### Fusionar conflictos

> Cuando las relaciones públicas tienen conflictos que necesitan ser resueltos.1

```markdown
Hola @nombre de usuario

Nos encantaría poder combinar tus cambios, pero parece que tienes algunos conflictos de fusión. ⚠️

Una vez que resuelvas estos conflictos, podremos revisar tus relaciones públicas y fusionarlos. 😊

---

> Si no estás familiarizado con el proceso de fusión de conflictos, no dudes en echar un vistazo a la guía de GitHub en ["Resolviendo un conflicto de fusiones"](https://help. ithub.com/articles/resolving-a-merge-conflict-on-github/). 🔍
>
> Además, es buena práctica en GitHub escribir una breve descripción de sus cambios al crear un PR. 📝
````

1 Si un primer contribuyente tiene un conflicto de fusión, los mantenedores resolverán el conflicto por ellos.

### Duplicate

> Cuando las relaciones públicas son repetitivas o duplicadas.

```markdown
Hey @username

Parece que los cambios similares ya han sido aceptados anteriormente para este artículo que está editando, lo sentimos. 😓

Si crees que tienes más que añadir, por favor no dudes en abrir una nueva PR.

¡Gracias de nuevo! 😊

---

> Si tienes alguna pregunta, no dudes en hacer preguntas en la categoría ['Contributors' en nuestro foro](https://forum. reecodecamp.org/c/contributors) o [nuestro servidor de Discord](https://discord.gg/pFspAhS).
```

### Cerrando pull requests no válidos

> Cuando PR no es válido.

```markdown
Hola @username

Gracias por abrir este pull request.

Este es un mensaje estándar notificándole que hemos revisado su pull request y hemos decidido no fusionarlo. Nos gustaría recibir futuras solicitudes de extracción por su parte.

Gracias y codificación feliz.
```

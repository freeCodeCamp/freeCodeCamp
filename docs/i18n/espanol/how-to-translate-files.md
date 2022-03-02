# Cómo traducir recursos de freeCodeCamp

Es nuestro sueño proporcionarles los recursos para aprender, sin importar el idioma que hables. Para ayudarnos con este esfuerzo masivo, hemos integrado nuestra base de código abierto & plan de estudio con [Crowdin](https://crowdin.com/) - Una herramienta que nos ayuda a localizar nuestra base de código.

El flujo de trabajo de traducción se divide en dos actividades principales:

- **Traduciendo** archivos de currículo, documentación y elementos de interfaz de usuario como botones, etiquetas, etc.:

  Como traductor puedes registrarte en [nuestra plataforma de traducción](https://translate.freecodecamp.org) y contribuir con las traducciones en cualquiera de los más de 30 idiomas habilitados allí.

- **Revisando** las traducciones de todo lo anterior.

  Los revisores verifican que las traducciones aportadas por la comunidad sean uniformes en el tono y libres de problemas comunes como errores tipográficos, etc. En resumen, aseguran que la calidad de las traducciones sea alta. Ten en cuenta que no utilizamos traducciones automáticas por una razón.

> [!WARNING] Ya no estamos usando GitHub para traducir archivos directamente, si eres un colaborador que regresa, dirígete a nuestro [plataforma de traducción](https://translate.freecodecamp.org/) en su lugar.

## Prepárate para las contribuciones

> La hoja de ruta de localización de freeCodeCamp - No hay límites de velocidad

Puedes traducir tanto como quieras, cuando quieras. Es solo cuestión de cuanto tiempo y energía estás dispuesto a invertir como traductor voluntario.

Solo te pedimos que entiendas lo siguiente:

1. **Las traducciones son un esfuerzo de equipo.**

   Traducir los recursos de freeCodeCamp es una de las experiencias más divertidas y gratificantes como colaborador, y funciona mejor si involucras a tus amigos y colegas que hablan el mismo idioma que tú.

   Recomendamos que te unas al [foro de la comunidad](https://forum.freecodecamp.org/c/contributors/3) y al [chat de colaboradores](https://chat.freecodecamp.org/channel/contributors) con tus amigos y muestren su interés antes de comenzar a traducir. CrowdIn hace que sea fácil contribuir con traducciones, pero sigue siendo mucho trabajo.

   Queremos que disfrutes contribuyendo y no te canses o pierdas interés.

   Un grupo pequeño de 4 a 5 personas es un buen tamaño para comenzar tu específico idioma. Y después puedes reclutar aún más amigos para unirse al equipo.

2. **Cuesta bastante girar servidores para cada idioma.**

   En la superficie puede no parecer lo complicado que es la pila técnica, pero cuesta bastante mantener los motores en funcionamiento. Esto incluye el aprovisionamiento de servidores adicionales y la dedicación de personal para cuidarlos.

   freeCodeCamp.org está comprometido a ofrecerlos gratis como siempre. Sin embargo, debemos priorizar los recursos para aquellos que más lo necesitan. Lo último que queremos es cerrar los servidores de un idioma si la actividad de traducción se apaga y las cosas se vuelven obsoletas.

   Una vez que un idioma alcance al menos algunas certificaciones en el plan de estudios, podemos comenzar a implementar el idioma en vivo en [`/learn`](https://www.freecodecamp.org/learn), mientras continúas traduciendo las certificaciones restantes.

   Por ejemplo, nos gustaría implementar al menos toda la suite de certificaciones de front-end cuando enviamos un nuevo idioma por primera vez.

3. **Pero, ¿qué pasa con los idiomas que no figuran en la plataforma de traducción?**

   Hemos revisado nuestra base de usuarios y hemos añadido más de 30 idiomas más hablados a la lista de idiomas habilitados en la plataforma de traducciones. Algunos idiomas como el chino y español ya están implementados en vivo en **"/learn"** en este momento.

   Desafortunadamente, la lista no incluye cientos de idiomas. Recibimos docenas de solicitudes de colaboradores como tú todos los días que quieren ayudar a traducir el sitio a un idioma que hablan.

   Definitivamente estamos deseando agregar más idiomas a la lista, pero como ya puedes adivinar, solo sería factible si obtenemos suficiente impulso alrededor de un idioma.

   Si deseas que incluyamos un nuevo idioma, te recomendamos que entusiasmes a tus amigos con esto.

   Una vez que tengas un pequeño grupo de personas (al menos 4-5) interesadas y comprometidas, podemos llamar. Te explicaremos todos los detalles y te guiaremos a través de algunas de las herramientas y procesos.

## Empezando

Primero, asegura de decir "Hola" en nuestro [chat de colaboradores](https://chat.freecodecamp.org/channel/contributors). Publicamos actualizaciones regulares sobre los recursos de traducción y respondemos a muchas de tus consultas allí.

A continuación, dirígete a nuestro [plataforma de traducción](https://translate.freecodecamp.org/) e inicia sesión (si no has contribuido a traducciones anteriormente, deberás crear una cuenta).

Por último, ve a través del recorrido detallado a continuación para comprender las herramientas de traducción y los flujos de trabajo a tu disposición.

Feliz traducción.

## Selecciona un proyecto y un archivo

Una vez que visites la plataforma de traducción, verás varios "proyectos" disponibles para traducción:

1. [Documentación del proyecto de contribución ](https://translate.freecodecamp.org/contributing-docs),  el cual contiene los archivos para este sitio de documentación.
2. [Proyecto de currículo de programación](https://translate.freecodecamp.org/curriculum), el cual contiene nuestros archivos de desafío para nuestro plan de estudios.
3. [Aprende Interfaz de usuario](https://translate.freecodecamp.org/learn-ui) proyecto que contiene cadenas para elementos de interfaz de usuario como botones, etiquetas, etc. para nuestra plataforma de aprendizaje.

Selecciona cualquier proyecto al que desees contribuir y verás una lista de los idiomas disponibles para la traducción.

![Imagen - Lista de idiomas disponibles](https://contribute.freecodecamp.org/images/crowdin/languages.png)

Selecciona el idioma en el que deseas trabajar y verás el árbol de archivos completo.

![Imagen - Lista de archivos disponibles](https://contribute.freecodecamp.org/images/crowdin/file-tree.png)

Cada archivo y carpeta mostrará una barra de progreso. La parte **azul** de la barra de progreso indica qué porcentaje del archivo se ha traducido, mientras que la parte **verde** de la barra de progreso indica qué porcentaje del archivo ha sido aprobado por el equipo de revisión.

Selecciona un archivo para trabajar y Crowdin abrirá la vista de edición.

> [!NOTE] Cuando se abra la vista de edición, deberás hacer clic en el icono de configuración (que se muestra como un engranaje) y cambiar la configuración de ''HTML tags displaying (Mostrar etiquetas HTML)" a "SHOW (Mostrar)". Esto asegurará que puedas ver las etiquetas como `<code></code>` en lugar de `<0></0>`.

## Traducir currículo

![Imagen - Vista de edición](https://contribute.freecodecamp.org/images/crowdin/editor.png)

Crowdin separa un documento en "cadenas" traducibles, normalmente oraciones. Cada cadena se traduce individualmente. Tomando como referencia la imagen anterior:

1. Una cadena resaltada en verde ya tiene una traducción propuesta.
2. Una cadena resaltada en rojo _no_ tiene una traducción propuesta.
3. Una cadena con texto en gris no es traducible. Este es el caso de los bloques de código y otros contenidos que no deben traducirse. No podrás seleccionar estas cadenas en el editor.
4. Si un contribuyente ha propuesto una traducción a una cadena, Crowdin mostrará esas propuestas aquí. No podrás guardar una traducción idéntica, en su lugar, si una traducción es precisa, debes hacer clic en el ícono `+` para votar a su favor. Puedes votar en contra de una traducción inexacta con el icono `-`.
5. Crowdin recomendará traducciones basadas en Memoria de Traducción (TM) o Traducción Automática (MT). La memoria de traducción se refiere a cadenas similares o idénticas que hemos traducido / aprobado en otros archivos. La Machine Translation (traducción automática) remite hacia las traducciones recomendadas por su biblioteca integrada.
6. Este es el panel del editor, donde puedes escribir tu propuesta de traducción para la cadena seleccionada.
7. La cadena seleccionada actualmente en el editor se resaltará en amarillo.
8. Aquí verás etiquetas que indican el estado de la cadena. `Done` (hecho) significa que la cadena tiene al menos una traducción propuesta. `Todo` (por hacer) significa que la cadena no tiene ninguna traducción propuesta.
9. Aquí puedes ver la ventana de comentarios. Si tienes preguntas o inquietudes sobre una cadena en particular, puedes dejar aquí un comentario sobre la cadena para que lo vean otros traductores.
10. Estos dos botones de "panel" ocultarán las vistas izquierda (documento) y derecha (comentarios).

> [!NOTE] Si observas una cadena oculta que incluye traducciones, por favor notifícanos en el [chat de colaboradores](https://chat.freecodecamp.org/channel/contributors) para que podemos eliminar esa traducción de la memoria.

Cuando hayas completado la traducción de una cadena, pulsa el botón `Save` (guardar) para almacenar tu traducción en Crowdin. Luego, otros contribuyentes podrán votar tu traducción y el equipo de revisores podrán aprobarla.

Eres bienvenido a traducir tantas cadenas como desees, no se requieren pasos adicionales cuando completas todo un archivo o propones una nueva traducción. Hacer clic en el botón `Save` es todo lo que se necesita para almacenar una traducción.

> [!NOTE] Si ves algo en el archivo fuente en inglés que sea inexacto o incorrecto, no lo corrijas a través del flujo de traducción. En su lugar, deja un comentario en la cadena para notificarnos que hay una discrepancia, o crea un issue en GitHub.

## Traducir la documentación

Traducir nuestra documentación de contribución es un proceso similar a traducir nuestros archivos de currículo.

> [!NOTE] Nuestra documentación de contribución esta basada en `docsify`, y tenemos una  forma especial de procesar los cuadros de mensaje como este. Si ves cadenas que comiencen con `[!NOTE]`, `[!WARNING]` o ` [!TIP]`, estas palabras NO deben traducirse.

## Translate the LearnToCode RPG

The LearnToCode RPG runs on Ren'Py, which uses special syntax for translated strings: (See [Ren'Py Text documentation](https://www.renpy.org/doc/html/text.html))

- The sentences to be translated are always between `""`. These are dialogues or UI strings. The keywords that come before or after the dialogue are game engine control keywords and will be explained in details in subsequent rules. Please note that this first rule governs all subsequent rules listed.
- In case of `new "..."` Do not translate the `new` keyword.
- Prefixes like `player`, `annika`, `layla`, `marco` (or variants like `player happy`, `player @ happy`) should not be translated. These are control keywords to correctly display the character sprite in the game.
- Postfixes like `nointeract` should not be translated.
- Do not translate things between `[]` and `{}`. These are variable interpolations and text tags. These must remain halfwidth parentheses `[]` and `{}` instead of their fullwidth counterparts `【】` and `「」`
- Do not translate the `nointeract` keyword at the end of the sentence.
- If we try to use fullwidth parentheses `（）`, a QA warning will show. To avoid the QA warning, use halfwidth parentheses `()`

### Examples

---

#### Before translation

```renpy
# "[player_name]? What a coincidence! Our VIP team member {a=[vip_profile_url]}[player_name]{/a} will be honored to hear that."
"[player_name]? What a coincidence! Our VIP team member {a=[vip_profile_url]}[player_name]{/a} will be honored to hear that."  <--- this is the line that needs to be translated. see translation below
```

#### After translation

```renpy
# "[player_name]? What a coincidence! Our VIP team member {a=[vip_profile_url]}[player_name]{/a} will be honored to hear that."
"[player_name]？好巧，我们的VIP队友{a=[vip_profile_url]}[player_name]{/a}会很高兴的。"
```

Note: The `[]` and `{}` tags should be left intact.

---

#### Before translation

```renpy
old "{icon=icon-fast-forward} Skip"
new "{icon=icon-fast-forward} Skip" <-- translate this line, see below
```

#### After translation

```renpy
old "{icon=icon-fast-forward} Skip"
new "{icon=icon-fast-forward} 跳过"
```

Note: Again, the `new` prefix and the `{icon=icon-fast-forward}` tag should be left intact.

---

#### Before translation

```renpy
# layla @ neutral "Hehe, [player_name], you are a fun one. I'm sure you will enjoy your work as a developer."
layla @ neutral "Hehe, [player_name], you are a fun one. I'm sure you will enjoy your work as a developer."
```

#### After translation

```renpy
# layla @ neutral "Hehe, [player_name], you are a fun one. I'm sure you will enjoy your work as a developer."
layla @ neutral "哈哈，[player_name]，你真有趣。我相信你一定会喜欢你的开发者工作的。"
```

Note: `layla @ neutral` and `[player_name]` are left unchanged.

---

#### Before translation

```renpy
# player "Maybe this is all a dream?" nointeract
player "Maybe this is all a dream?" nointeract
```

#### After translation

```renpy
# player "Maybe this is all a dream?" nointeract
player "也许这都是一场梦？" nointeract
```

---

### A Note on How Crowdin Segments a Sentence

Pay attention to how Crowdin segments a line of dialogue wrapped between opening and closing quotes `""`. When we are translating the dialogue, we need to make sure to retain the opening and closing quotes, even if the quotes appear in different segments.

This is the line to be translated:

```renpy
player @ surprised "{b}Full-stack{/b}... What is that? I better take notes so I can learn more about it."
```

Crowdin segments it into three parts like below:

<img width="836" alt="Screen Shot 2022-01-23 at 10 36 43" src="https://user-images.githubusercontent.com/35674052/150693962-d3b091e5-2432-44d0-9d24-195ea7d7aeda.png" />

```renpy
# original
player @ surprised "{b}Full-stack{/b}
# translated, keeping the opening quotes `"`
player @ surprised "{b}全栈{/b}
```

<img width="750" alt="Screen Shot 2022-01-23 at 10 36 49" src="https://user-images.githubusercontent.com/35674052/150693965-15411504-791a-4db3-8b14-bc9177be6375.png" />

```renpy
# original
What is that?
# translated, no quotes on either side
这是什么？
```

<img width="857" alt="Screen Shot 2022-01-23 at 10 36 54" src="https://user-images.githubusercontent.com/35674052/150693969-062e3268-580f-4ad2-97db-cab6240b6095.png" />

```renpy
# original
I better take notes so I can learn more about it."
# translated, keeping the closing quotes `"`
我最好做笔记，这样我可以学习更多东西。"
```

## Rate Translations

Crowdin allows you to rate the existing proposed translations. If you attempt to save a translation, you may see a message indicating that you cannot save a duplicate translation - this means another contributor has proposed that identical translation. If you agree with that translation, click the `+` button to "upvote" the translation.

If you see a translation that is inaccurate or does not provide the same clarity as the original string, click the `-` button to "downvote" the translation.

Crowdin uses these votes to give a score to each proposed translation for a string, which helps the proofreading team determine which translation is the best fit for each string.

## Quality Assurance Checks

We have enabled some quality assurance steps that will verify a translation is as accurate as possible - this helps our proofreaders review proposed translations.

When you attempt to save a translation, you may see a warning message appear with a notification regarding your proposed translation.

![Image - QA Warning Message](https://contribute.freecodecamp.org/images/crowdin/qa-message.png)

This message appears when Crowdin's QA system has identified a potential error in the proposed translation. In this example, we have modified the text of a `<code>` tag and Crowdin has caught that.

> [!WARNING] Tienes la opción de guardar una traducción a pesar de los errores. Si lo haces, al hacer clic en "Save Anyway (Guardar de todos modos)", también debes etiquetar a un miembro del equipo de revisión o encargado del proyecto y explicar por qué el mensaje de control de calidad debe ignorarse en este caso.

## Translation Best Practices

Follow these guidelines to ensure our translations are as accurate as possible:

- Do not translate the content within `<code>` tags. These tags indicate text that is found in code and should be left in English.
- Do not add additional content. If you feel a challenge requires changes in the text content or additional information, you should propose the changes through a GitHub issue or a pull request that modifies the English file.
- Do not change the order of content.

If you have any questions, feel free to reach out to us in our [contributors chat room](https://chat.freecodecamp.org/channel/contributors) and we will be happy to assist you.

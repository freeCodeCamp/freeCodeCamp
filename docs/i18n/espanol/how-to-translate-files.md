# Cómo traducir recursos de freeCodeCamp

## Prepárate para las contribuciones

> Guía de orientación de freeCodeCamp - Sin límites de velocidad

> [!TIP] Puedes comenzar leyendo [este anuncio](https://www.freecodecamp.org/news/help-translate-freecodecamp-language/). Recomendamos unirte a [nuestro foro de la comunidad](https://forum.freecodecamp.org/c/contributors/3) y al [servidor de Discord](https://discord.gg/PRyKn3Vbay).

Puedes traducir tanto como quieras, y cuando quieras. Es solo cuestión de cuánto tiempo y energía estás dispuesto a invertir como traductor voluntario.

solo queremos que entiendas lo siguiente:

1. **Las traducciones son un esfuerzo de equipo.**

   Traducir los recursos de freeCodeCamp es una de las experiencias más divertidas y gratificantes como colaborador, y funciona mejor si involucras a tus amigos y colegas que hablan el mismo idioma que tú.

   Puedes comenzar leyendo [este anuncio](https://www.freecodecamp.org/news/help-translate-freecodecamp-language/). Recomendamos te unas al [foro de la comunidad](https://forum.freecodecamp.org/c/contributors/3) y al [servidor de Discord](https://discord.gg/PRyKn3Vbay) con tus amigos, y muestres tu interés antes de comenzar a traducir. Crowdin y otras herramientas facilitan contribuir con traducciones, sin embargo, sigue siendo bastante de trabajo.

   Queremos que disfrutes contribuyendo y no te canses o pierdas interés.

   Un grupo pequeño de 4 a 5 personas es un buen tamaño para comenzar tu específico idioma. Y después puedes reclutar aún más amigos para unirse al equipo.

2. **Cuesta bastante girar servidores para cada idioma.**

   En la superficie puede no parecer lo complicado que es la pila técnica, pero cuesta bastante mantener los motores en funcionamiento. Esto incluye el aprovisionamiento de servidores adicionales y la dedicación de personal para cuidarlos.

   freeCodeCamp.org está comprometido a ofrecerlos gratis como siempre. Sin embargo, debemos priorizar los recursos para aquellos que más lo necesitan. Lo último que queremos es cerrar los servidores de un idioma si la actividad de traducción se apaga y las cosas se vuelven obsoletas.

   Al traducir el currículo, una vez que un idioma alcance al menos unas cuantas certificaciones, podremos comenzar a implementar el idioma en [`/learn`](https://www.freecodecamp.org/learn), mientras continúas traduciendo las certificaciones restantes.

   Por ejemplo, nos gustaría implementar al menos toda la suite de certificaciones de front-end cuando enviamos un nuevo idioma por primera vez.

3. **Pero, ¿qué pasa con los idiomas que no figuran en la plataforma de traducción?**

   Hemos revisado nuestra base de usuarios y hemos añadido más de 30 idiomas más hablados a la lista de idiomas habilitados en la plataforma de traducciones. Algunos idiomas como el chino y español ya están implementados en vivo en **"/learn"** en este momento.

   Desafortunadamente, la lista no incluye cientos de idiomas. Recibimos docenas de solicitudes de colaboradores como tú todos los días que quieren ayudar a traducir el sitio a un idioma que hablan.

   Definitivamente estamos deseando agregar más idiomas a la lista, pero como ya puedes adivinar, solo sería factible si obtenemos suficiente impulso alrededor de un idioma.

   Si deseas que incluyamos un nuevo idioma, te recomendamos que entusiasmes a tus amigos con esto.

   Una vez que tengas un pequeño grupo de personas (al menos 4-5) interesadas y comprometidas, podemos llamar. Te explicaremos todos los detalles y te guiaremos a través de algunas de las herramientas y procesos.

## Vista previa de Crowdin

Nuestro sueño es brindate los recursos para aprender, sin importar el idioma que hables. Para que nos ayuden con este gran esfuerzo, hemos integrado nuestro código-báse de código-abierto y nuestro currículo con [Crowdin](https://crowdin.com/) - Una herramienta que nos ayuda a localizar nuestro código-base.

> [!NOTE] Utilizamos una herramienta y un flujo de trabajo diferentes para traducir [artículos de noticias](https://www.freecodecamp.org/news). Si te interesa traducir artículos, lee [este anuncio](https://www.freecodecamp.org/news/help-translate-freecodecamp-language/) y contacta al traductor lider de tu idioma.

El flujo de trabajo de traducción se divide en dos actividades principales:

- **Traduciendo** archivos de currículo, documentación y elementos de interfaz de usuario como botones, etiquetas, etc.:

  Como traductor puedes registrarte en [nuestra plataforma de traducción](https://translate.freecodecamp.org) y contribuir con las traducciones en cualquiera de los más de 30 idiomas habilitados allí.

- **Revisando** las traducciones de todo lo anterior.

  Los revisores verifican que las traducciones aportadas por la comunidad sean uniformes en el tono y libres de problemas comunes como errores tipográficos, etc. En resumen, aseguran que la calidad de las traducciones sea alta. Ten en cuenta que no utilizamos traducciones automáticas por una razón.

> [!WARNING] Ya no estamos usando GitHub para traducir archivos directamente. Si fuiste colaborador y estás regresando, entonces dirígete a nuestra [plataforma de traducción](https://translate.freecodecamp.org/).

## Comenzando

Primero, asegúrate de decir "Hola" en nuestro [Discord](https://discord.gg/PRyKn3Vbay). Publicamos actualizaciones regulares sobre los recursos de traducción y respondemos a muchas de tus consultas allí.

A continuación, dirígete a nuestro [plataforma de traducción](https://translate.freecodecamp.org/) e inicia sesión (si no has contribuido a traducciones anteriormente, deberás crear una cuenta).

Por último, ve a través del recorrido detallado a continuación para comprender las herramientas de traducción y los flujos de trabajo a tu disposición.

Feliz traducción.

## Selecciona un Proyecto y un Archivo

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

> [!NOTE] Cuando se abra la vista de edición, deberás hacer clic en el icono de configuración (que se muestra como un engranaje) y cambiar la configuración ''HTML tags displaying (Mostrar etiquetas HTML)" por "SHOW (Mostrar)". Esto asegurará que puedas ver las etiquetas como `<code></code>` en lugar de `<0></0>`.

## Traducir el Currículo

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

> [!NOTE] Si observas una cadena oculta que incluye traducciones, por favor notifícanos en el [Discord](https://discord.gg/PRyKn3Vbay) para que podemos eliminar esa traducción de la memoria.

Cuando hayas completado la traducción de una cadena, pulsa el botón `Save` (guardar) para almacenar tu traducción en Crowdin. Luego, otros contribuyentes podrán votar tu traducción y el equipo de revisores podrán aprobarla.

Eres bienvenido a traducir tantas cadenas como desees, no se requieren pasos adicionales cuando completas todo un archivo o propones una nueva traducción. Hacer clic en el botón `Save` es todo lo que se necesita para almacenar una traducción.

> [!NOTE] Si ves algo en el archivo fuente en inglés que sea inexacto o incorrecto, por favor no lo corrijas a través del flujo de traducción. En su lugar, deja un comentario en la cadena para notificarnos que hay una discrepancia, o crea un issue en GitHub.

## Traducir la Interfaz de Aprendizaje

Nuestra interfaz `/learn` se basa en archivos JSON cargados en un plugin i18n para generar texto traducido. Este esfuerzo de traducción está dividido entre Crowdin y GitHub.

### En GitHub

Los archivos `links.json`, `meta-tags.json`, `motivación.json` y `trending.json` contienen información que necesita ser actualizada para reflejar tu idioma. Sin embargo, no podemos cargarlos en Crowdin, ya que el contenido no es algo que sea una traducción uno-a-uno.

Estos archivos probablemente serán mantenidos por el líder de tu idioma, pero serás bienvenido a [leer sobre cómo traducirlos](language-lead-handbook.md).

### En Crowdin

> [!ATTENTION] No edites los siguientes archivos a través de un PR de GitHub.

Los archivos `intro.json` y `translations.json` están traducidos en Crowdin, en el proyecto Learn User Interface. Traducir estos puede ser un poco complicado, ya que cada valor JSON individual aparece como su propia cadena y a veces falta contexto.

Sin embargo, la información de `Contexto` proporcionada en Crowdin puede ayudar a entender dónde se ajusta la cadena a la estructura más grande.

![Imagen con una flecha que apunta a la información contextual de Crowdin](https://contribute.freecodecamp.org/images/crowdin/context.png)

Si tienes alguna pregunta sobre donde encaja una cadena en el texto, contacta con nosotros en nuestro [chat de colaborador](https://discord.gg/PRyKn3Vbay).

## Traducir la Documentación

Traducir nuestra documentación de contribución es un flujo similar a la traducción de nuestros archivos de currículum.

> [!NOTE] Nuestra documentación de contribución esta basada en `docsify`, y tenemos una  forma especial de procesar los cuadros de mensaje como este. Si ves cadenas que comiencen con `[!NOTE]`, `[!WARNING]` o ` [!TIP]`, estas palabras NO deben traducirse.

### Cómo traducir la documentación con enlaces internos

Cuando trabajes en la traducción de la documentación, ten en cuenta los enlaces internos que apuntan a una sección diferente de la documentación.

Asegúrate de reemplazar el id de la sección de destino (la parte después de `#`) con el id en el documento traducido. Por ejemplo, se verá así en japonés:

Antes de traducir

```
// in HTML
<a href="target-file-name.md#target-section-heading-id">Link text</a>
<a href="#target-section-heading-id">Link text</a>

// in Markdown
[Link text](target-file-name.md#target-section-heading-id)
[Link text](#target-section-heading-id)
```

Después de traducir

```
// in HTML
<a href="target-file-name.md#翻訳後の-id">翻訳後のリンクテキスト</a>
<a href="#翻訳後の-id">翻訳後のリンクテキスト</a>

// in Markdown
[翻訳後のリンクテキスト](target-file-name.md#翻訳後の-id)
[翻訳後のリンクテキスト](#翻訳後の-id)
```

Los archivos reales de la documentación están escritos en Markdown, pero aparecerán como etiquetas HTML en Crowdin.

Puedes averiguar cómo `docsify` convierte una cadena en tu idioma en un id mirando las páginas traducidas. Si la traducción no está desplegada todavía, puedes previsualizarla [ejecutar el sitio de la documentación localmente](how-to-work-on-the-docs-theme.md#ejecutar-el-sitio-de-la-documentación-localmente).

Puedes obtener más información sobre [enlaces internos en nuestra documentación aquí](how-to-work-on-the-docs-theme.md#como-crear-un-enlace-interno).

## Traducir el LearnToCode RPG

El LearnToCode RPG se ejecuta en Ren'Py, el cual utiliza una sintaxis especial para las cadenas traducidas: (Ver [ documentación de texto Ren'Py](https://www.renpy.org/doc/html/text.html))

- Las oraciones a traducir están siempre entre `""`. Estos son diálogos o cadenas de interfaz de usuario. Las palabras clave que vienen antes o después del diálogo son palabras clave de control del motor del juego y se explicarán en detalle en las reglas posteriores. Tenga en cuenta que esta primera regla rige todas las reglas posteriores enumeradas.
- En el caso de `new "..."` No traduzcas la palabra clave `new`.
- Prefijos como `player`, `annika`, `layla`, `marco` (o variantes como `player happy`, `player @ happy`) no deben traducirse. Estas son palabras clave de control para mostrar correctamente el sprite del personaje en el juego.
- Postfixes como `nointeract` no deben ser traducidos.
- No traduzca cosas entre `[]` y `{}`. Estas son interpolaciones variables y etiquetas de texto. Estos deben permanecer entre paréntesis de media anchura `[]` y `{}` en lugar de sus homólogos de ancho completo `【】` y `「」`
- No traduzca la palabra clave `nointeract` al final de la oración.
- Si intentamos usar paréntesis de ancho completo `()`, se mostrará una advertencia de QA. Para evitar la advertencia de QA, utilice paréntesis de ancho medio `()`

### Ejemplos

---

#### Antes de traducir

```renpy
# "[player_name]? What a coincidence! Our VIP team member {a=[vip_profile_url]}[player_name]{/a} will be honored to hear that."
"[player_name]? What a coincidence! Our VIP team member {a=[vip_profile_url]}[player_name]{/a} will be honored to hear that."  <--- esta es la línea que necesita traducirse. ver traducción a continuación
```

#### Después de traducir

```renpy
# "[player_name]? What a coincidence! Our VIP team member {a=[vip_profile_url]}[player_name]{/a} will be honored to hear that."
"[player_name]？好巧，我们的VIP队友{a=[vip_profile_url]}[player_name]{/a}会很高兴的。"
```

Nota: Las etiquetas `[]` y `{}` deben dejarse intactas.

---

#### Antes de traducir

```renpy
old "{icon=icon-fast-forward} Skip"
new "{icon=icon-fast-forward} Skip" <-- traducir esta línea, ver abajo
```

#### Después de traducir

```renpy
old "{icon=icon-fast-forward} Skip"
new "{icon=icon-fast-forward} 跳过"
```

Nota: De nuevo, el prefijo `new` y la etiqueta `{icon=icon-fast-forward}` deben dejarse intactos.

---

#### Antes de traducir

```renpy
# layla @ neutral "Hehe, [player_name], you are a fun one. I'm sure you will enjoy your work as a developer."
layla @ neutral "Hehe, [player_name], you are a fun one. I'm sure you will enjoy your work as a developer."
```

#### Después de traducir

```renpy
# layla @ neutral "Hehe, [player_name], you are a fun one. I'm sure you will enjoy your work as a developer."
layla @ neutral "哈哈，[player_name]，你真有趣。我相信你一定会喜欢你的开发者工作的。"
```

Nota: `layla @ neutral` y `[player_name]` se quedan sin cambios.

---

#### Antes de traducir

```renpy
# player "Maybe this is all a dream?" nointeract
player "Maybe this is all a dream?" nointeract
```

#### Después de traducir

```renpy
# player "Maybe this is all a dream?" nointeract
player "也许这都是一场梦？" nointeract
```

---

### Una observación sobre cómo Crowdin segmenta una oración

Presta atención a cómo Crowdin segmenta una línea de diálogo envuelta entre comillas de apertura y cierre `""`. Cuando traducimos el diálogo, tenemos que asegurarnos de mantener las comillas de apertura y cierre, incluso si las comillas aparecen en diferentes segmentos.

Esta es la línea a traducir:

```renpy
player @ surprised "{b}Full-stack{/b}... What is that? I better take notes so I can learn more about it."
```

Crowdin lo segmenta en tres partes como a continuación:

<img width="836" alt="Captura de pantalla 2022-01-23 a las 10 36 43" src="https://user-images.githubusercontent.com/35674052/150693962-d3b091e5-2432-44d0-9d24-195ea7d7aeda.png" />

```renpy
# original
player @ surprised "{b}Full-stack{/b}
# traducido, manteniendo las comiilas de apertura `"`
player @ surprised "{b}全栈{/b}
```

<img width="750" alt="Captura de pantalla 2022-01-23 a las 10 36 49" src="https://user-images.githubusercontent.com/35674052/150693965-15411504-791a-4db3-8b14-bc9177be6375.png" />

```renpy
# original
What is that?
# traducido, sin comillas en ninguno de los lados.
这是什么？
```

<img width="857" alt="Captura de pantalla 2022-01-23 a las 10 36 54" src="https://user-images.githubusercontent.com/35674052/150693969-062e3268-580f-4ad2-97db-cab6240b6095.png" />

```renpy
# original
I better take notes so I can learn more about it."
# traducido, manteniendo las comillas de cierre `"`
我最好做笔记，这样我可以学习更多东西。"
```

## Calificar traducciones

Crowdin te permite calificar las traducciones propuestas existentes. Si intentas guardar una traducción, es posible que veas un mensaje que indica que no puedes guardar una traducción duplicada, esto significa que otro contribuyente ha propuesto una traducción idéntica. Si estás de acuerdo con esa traducción, haz clic en el botón `+` para votar a favor de la traducción.

Si ves una traducción que es inexacta o no proporciona la misma claridad que la cadena original, haz clic en el botón `-` para votar en contra de la traducción.

Crowdin usa estos votos para dar una puntuación a cada traducción propuesta para una cadena, lo que ayuda al equipo de revisión a determinar qué traducción es la mejor para cada cadena.

## Comprobaciones de aseguración de la calidad

Hemos habilitado algunos pasos de control de la calidad que verificarán que una traducción sea lo más precisa posible, esto ayuda a nuestro equipo de revisión a comprobar las traducciones propuestas.

Cuando intentes guardar una traducción, puede que aparezca un mensaje de advertencia con una notificación con respecto a tu traducción propuesta.

![Imagen - Mensaje de advertencia de QA](https://contribute.freecodecamp.org/images/crowdin/qa-message.png)

Este mensaje aparece cuando el sistema de QA de Crowdin ha identificado un posible error en la traducción propuesta. En este ejemplo, hemos modificado el texto de una etiqueta `<code>` y Crowdin lo ha capturado.

> [!WARNING] Tienes la opción de guardar una traducción a pesar de los errores. Si lo haces, al hacer clic en "Save Anyway (Guardar de todos modos)", también debes etiquetar a un miembro del equipo de revisión o encargado del proyecto y explicar por qué el mensaje de QA debe ignorarse en este caso.

## Mejores prácticas de traducción

Sigue estas pautas para asegurarte de que nuestras traducciones sean lo más precisas posible:

- No traduzca el contenido con etiquetas de `<code>`. Estas etiquetas indican texto que se encuentra en código y que debe dejarse en inglés.
- No agregues contenido adicional. Si sientes que un desafío requiere cambios en el contenido de texto o información adicional, debería proponer los cambios a través de un problema de GitHub o una pull request que modifique el archivo en inglés.
- No cambiar el orden del contenido.

Si tienes alguna duda, siéntete libre de pedir ayuda en nuestro [Discord](https://discord. gg/PRyKn3Vbay) y con gusto te ayudaremos.

# Cómo traducir un archivo

> [!NOTE] Todas las traducciones se manejan a través de https://translate.freecodecamp.org, ya no utilizamos GitHub para traducir archivos directamente.

Para comenzar, dirígete a nuestro sitio web de traducciones e inicia sesión (si no has contribuido en traducciones antes, deberás crear una cuenta).

## Selecciona un proyecto y un archivo

Deberías ver dos "proyectos" disponibles para traducir: el proyecto `Contributing Documentation`, que contiene los archivos para este sitio de documentación, y el proyecto `Coding Curriculum`, que contiene nuestros archivos de desafío para la sección `/learn`.

Selecciona el proyecto en el que deseas contribuir y verás una lista de idiomas disponibles para traducir.

![Imagen - Lista de idiomas disponibles](./images/crowdin/languages.png)

Selecciona el idioma en el que deseas trabajar y verás el árbol de archivos completo.

![Imagen - Lista de archivos disponibles](./images/crowdin/file-tree.png)

Cada archivo y carpeta mostrará una barra de progreso. La parte **azul** de la barra de progreso indica qué porcentaje del archivo se ha traducido, mientras que la parte **verde** de la barra de progreso indica qué porcentaje del archivo ha sido aprobado por el equipo de revisión.

Selecciona un archivo para trabajar y Crowdin abrirá la vista de edición.

> [!NOTE] When the editor view opens, you will need to click the settings icon (shown as a gear) and switch the 'HTML tags displaying' setting to 'SHOW'. This will ensure you can see tags such as `<code></code>` instead of `<0></0>`.

## Traducir un archivo

![Imagen - Vista de edición](./images/crowdin/editor.png)

Crowdin separa un documento en "cadenas" traducibles, normalmente oraciones. Cada cadena se traduce individualmente. Tomando como referencia la imagen anterior:

1. Una cadena resaltada en verde ya tiene una traducción propuesta.
2. Una cadena resaltada en rojo _no_ tiene una traducción propuesta.
3. Una cadena con texto en gris no es traducible. Este es el caso de los bloques de código y otros contenidos que no deben traducirse. No podrás seleccionar estas cadenas en el editor.
4. Si un contribuyente ha propuesto una traducción a una cadena, Crowdin mostrará esas propuestas aquí. No podrás guardar una traducción idéntica, en su lugar, si una traducción es precisa, debes hacer clic en el ícono `+` para votar a su favor. Puedes votar en contra de una traducción inexacta con el icono `-`.
5. Crowdin recomendará traducciones basadas en la Translation Memory (TM) o la Machine Translation (MT). La Translation Memory (memoria de traducción) remite hacia cadenas similares o idénticas que hemos traducido/aprobado en otros archivos. La Machine Translation (traducción automática) remite hacia las traducciones recomendadas por su biblioteca integrada.
6. Este es el panel del editor, donde puedes escribir tu propuesta de traducción para la cadena seleccionada.
7. La cadena seleccionada actualmente en el editor se resaltará en amarillo.
8. Aquí verás etiquetas que indican el estado de la cadena. `Done` (hecho) significa que la cadena tiene al menos una traducción propuesta. `Todo` (por hacer) significa que la cadena no tiene ninguna traducción propuesta.
9. Aquí puedes ver la ventana de comentarios. Si tienes preguntas o inquietudes sobre una cadena en particular, puedes dejar aquí un comentario sobre la cadena para que lo vean otros traductores.
10. Estos dos botones de "panel" ocultarán las vistas izquierda (documento) y derecha (comentarios).

> [!NOTE] If you see a hidden string that includes translations, please notify us in the [translators chat room](https://chat.freecodecamp.org/channel/translators) so we can remove the translation from memory.

Cuando hayas completado la traducción de una cadena, pulsa el botón `Save` (guardar) para almacenar tu traducción en Crowdin. Luego, otros contribuyentes podrán votar tu traducción y los proofreaders podrán aprobarla.

Eres bienvenido a traducir tantas cadenas como desees, no se requieren pasos adicionales cuando completas todo un archivo o propones una nueva traducción. Hacer clic en el botón `Save` es todo lo que se necesita para almacenar una traducción.

> [!NOTE] If you see something in the English source file that is inaccurate or incorrect, please do not fix it through the translation flow. Instead, leave a comment on the string to notify us that there is a discrepancy, or create a GitHub issue.

### Traducir la documentación

Traducir nuestra documentación de contribución es un proceso similar a traducir nuestros archivos de currículo.

> [!NOTE] Our contributing documentation is powered by `docsify`, and we have special parsing for message boxes like this one. If you see strings that start with `[!NOTE]`, `[!WARNING]`, or `[!TIP]`, these words should NOT be translated.

## Calificar traducciones

Crowdin te permite calificar las traducciones propuestas existentes. Si intentas guardar una traducción, es posible que veas un mensaje que indica que no puedes guardar una traducción duplicada, esto significa que otro contribuyente ha propuesto una traducción idéntica. Si estás de acuerdo con esa traducción, haz clic en el botón `+` para votar a favor de la traducción.

Si ves una traducción que es inexacta o no proporciona la misma claridad que la cadena original, haz clic en el botón `-` para votar en contra de la traducción.

Crowdin usa estos votos para dar una puntuación a cada traducción propuesta para una cadena, lo que ayuda al equipo de revisión a determinar qué traducción es la mejor para cada cadena.

## Comprobaciones de control de calidad

Hemos habilitado algunos pasos de control de calidad que verificarán que una traducción sea lo más precisa posible, esto ayuda a nuestros proofreaders a revisar las traducciones propuestas.

Cuando intentes guardar una traducción, es posible que veas aparecer un mensaje de advertencia con una notificación sobre tu traducción propuesta.

![Imagen - Mensaje de advertencia de control de calidad](./images/crowdin/qa-message.png)

Este mensaje aparece cuando el sistema de control de calidad de Crowdin ha identificado un posible error en la traducción propuesta. En este ejemplo, hemos modificado el texto de una etiqueta `<code>` y Crowdin lo ha detectado.

> [!WARNING] You have the option to save a translation in spite of errors. If you do, by clicking "Save Anyway", you should also tag a proofreader or project manager and explain why the QA message needs to be ignored in this case.

## Buenas prácticas de traducción

Follow these guidelines to ensure our translations are as accurate as possible:

- No traduzcas el contenido dentro de las etiquetas `<code>`. Estas etiquetas indican texto que se encuentra en el código y deben dejarse en inglés.
- No agregues contenido adicional. Si crees que un desafío requiere cambios en el contenido del texto o información adicional, debes proponer los cambios a través de un issue de GitHub o una pull request que modifique el archivo en inglés.
- No cambies el orden del contenido.

If you have any questions, feel free to reach out to us in our [translators chat room](https://chat.freecodecamp.org/channel/translators) and we will be happy to assist you.

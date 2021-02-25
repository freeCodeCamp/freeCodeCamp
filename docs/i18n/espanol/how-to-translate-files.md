# Cómo traducir un archivo

> [!NOTE] Todas las traducciones se manejan a través de https://translate.freecodecamp.org, ya no utilizamos GitHub para traducir archivos directamente.

Para comenzar, dirígete a nuestro sitio web de traducciones e inicia sesión (si no has contribuido en traducciones antes, deberás crear una cuenta).

## Selecciona un proyecto y un archivo

Deberías ver dos "proyectos" disponibles para traducir: el proyecto `Contributing Documentation`, que contiene los archivos para este sitio de documentación, y el proyecto `Coding Curriculum`, que contiene nuestros archivos de desafío para la sección `/learn`.

Selecciona el proyecto en el que deseas contribuir y verás una lista de idiomas disponibles para traducir.

![Imagen - Lista de idiomas disponibles](https://contribute.freecodecamp.org/images/crowdin/languages.png)

Selecciona el idioma en el que deseas trabajar y verás el árbol de archivos completo.

![Imagen - Lista de archivos disponibles](https://contribute.freecodecamp.org/images/crowdin/file-tree.png)

Cada archivo y carpeta mostrará una barra de progreso. La parte **azul** de la barra de progreso indica qué porcentaje del archivo se ha traducido, mientras que la parte **verde** de la barra de progreso indica qué porcentaje del archivo ha sido aprobado por el equipo de revisión.

Selecciona un archivo para trabajar y Crowdin abrirá la vista de edición.

> [!NOTE] Cuando se abra la vista de edición, deberás hacer clic en el icono de configuración (que se muestra como un engranaje) y cambiar la configuración de ''HTML tags displaying (Mostrar etiquetas HTML)" a "SHOW (Mostrar)". Esto asegurará que puedas ver las etiquetas como `<code></code>` en lugar de `<0></0>`.

## Traducir un archivo

![Imagen - Vista de edición](https://contribute.freecodecamp.org/images/crowdin/editor.png)

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

> [!NOTE] Si ves una cadena oculta que incluye traducciones, notifícanos en la [ sala de chat de traductores ](https://chat.freecodecamp.org/channel/translators) para que podamos eliminar la traducción de la memoria.

Cuando hayas completado la traducción de una cadena, pulsa el botón `Save` (guardar) para almacenar tu traducción en Crowdin. Luego, otros contribuyentes podrán votar tu traducción y los proofreaders podrán aprobarla.

Eres bienvenido a traducir tantas cadenas como desees, no se requieren pasos adicionales cuando completas todo un archivo o propones una nueva traducción. Hacer clic en el botón `Save` es todo lo que se necesita para almacenar una traducción.

> [!NOTE] Si ves algo en el archivo fuente en inglés que sea inexacto o incorrecto, no lo corrijas a través del flujo de traducción. En su lugar, deja un comentario en la cadena para notificarnos que hay una discrepancia, o crea un issue en GitHub.

### Traducir la documentación

Traducir nuestra documentación de contribución es un proceso similar a traducir nuestros archivos de currículo.

> [!NOTE] Nuestra documentación de contribución esta basada en `docsify`, y tenemos una  forma especial de procesar los cuadros de mensaje como este. Si ves cadenas que comiencen con `[!NOTE]`, `[!WARNING]` o ` [!TIP]`, estas palabras NO deben traducirse.

## Calificar traducciones

Crowdin te permite calificar las traducciones propuestas existentes. Si intentas guardar una traducción, es posible que veas un mensaje que indica que no puedes guardar una traducción duplicada, esto significa que otro contribuyente ha propuesto una traducción idéntica. Si estás de acuerdo con esa traducción, haz clic en el botón `+` para votar a favor de la traducción.

Si ves una traducción que es inexacta o no proporciona la misma claridad que la cadena original, haz clic en el botón `-` para votar en contra de la traducción.

Crowdin usa estos votos para dar una puntuación a cada traducción propuesta para una cadena, lo que ayuda al equipo de revisión a determinar qué traducción es la mejor para cada cadena.

## Comprobaciones de control de calidad

Hemos habilitado algunos pasos de control de calidad que verificarán que una traducción sea lo más precisa posible, esto ayuda a nuestros proofreaders a revisar las traducciones propuestas.

Cuando intentes guardar una traducción, es posible que veas aparecer un mensaje de advertencia con una notificación sobre tu traducción propuesta.

![Imagen - Mensaje de advertencia de control de calidad](https://contribute.freecodecamp.org/images/crowdin/qa-message.png)

Este mensaje aparece cuando el sistema de control de calidad de Crowdin ha identificado un posible error en la traducción propuesta. En este ejemplo, hemos modificado el texto de una etiqueta `<code>` y Crowdin lo ha detectado.

> [!WARNING] Tienes la opción de guardar una traducción a pesar de los errores. Si lo haces, al hacer clic en "Save Anyway (Guardar de todos modos)", también debes etiquetar a un miembro del equipo de revisión o encargado del proyecto y explicar por qué el mensaje de control de calidad debe ignorarse en este caso.

## Buenas prácticas de traducción

Sigue estas pautas para asegurarte de que nuestras traducciones sean lo más precisas posible:

- No traduzcas el contenido dentro de las etiquetas `<code>`. Estas etiquetas indican texto que se encuentra en el código y deben dejarse en inglés.
- No agregues contenido adicional. Si crees que un desafío requiere cambios en el contenido del texto o información adicional, debes proponer los cambios a través de un issue de GitHub o una pull request que modifique el archivo en inglés.
- No cambies el orden del contenido.

Si tienes alguna pregunta, no dudes en comunicarte con nosotros en nuestra [sala de chat de traductores](https://chat.freecodecamp.org/channel/translators) y estaremos encantados de ayudarte.

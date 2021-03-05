# Como revisar traducciones

Nuestro equipo de revisión es responsable de asegurarse que las traducciones sean un reflejo fiel del texto original.

Para comenzar a revisar y aprobar traducciones, visita [ nuestro sitio de traducciones](https://translate.freecodecamp.org) e inicia sesión. Luego, selecciona "Go to console" (ir a la consola) en la barra de navegación superior, para cambiar de la vista pública (public view) a la vista de trabajo (workspace view).

## Seleccionar un archivo

Deberías ver una lista de los proyectos para los que te concedieron acceso. Selecciona el proyecto que quieres revisar y luego selecciona el idioma.

![Imagen - Árbol de archivos de la vista de proofreading ](https://contribute.freecodecamp.org/images/crowdin/proof-file-tree.png)

Ahora podrás ver la lista de archivos disponibles. Selecciona un archivo haciendo clic en el botón `Proofread` que se encuentra a la derecha de ese archivo, y luego selecciona la opción `Proofreading` del menú desplegable que se abrirá.

> [!NOTE] Si estás en la vista "workspace" pero quieres trabajar en [traducir un archivo](./how-to-translate-files.md) en lugar de corregirlo, puedes seleccionar la opción `Crowdsourcing` del menú desplegable.

## Revisar traducciones

![Imagen - Vista de proofreading](https://contribute.freecodecamp.org/images/crowdin/proofread.png)

<!--Add proofread/crowdsource button to the image-->

Aquí podrás ver una lista de segmentos del archivo seleccionado, cada uno con sus traducciones propuestas. La traducción que se muestra aquí es aquella que haya recibido el puntaje más alto de la comunidad de traductores (tomando en cuenta votos positivos y negativos).

Si bien puedes ver *todas* las traducciones propuestas para un segmento, deberías tener en cuenta los puntajes de la comunidad (que se determinan según los votos positivos y negativos) para decidir cuál de las traducciones aprobarás. La comunidad puede revisar las traducciones propuestas y recomendar cuál es la más clara y apropiada.

1. Este es el segmento original (en inglés).
2. Este es el segmento traducido que le corresponde. Aquí se mostrará la traducción propuesta más popular, según sus votos positivos y negativos.
3. Al hacer clic en este botón de tilde aprobarás esa traducción.
4. Crowdin mostrará el estado de cada segmento. `Done` (listo) significa que una traducción ha sido aprobada y que será descargada en el próximo pull de Crowdin. `Todo` (por hacer o "to do") significa que el segmento aún no ha sido revisado. `Hidden` significa que el segmento está bloqueado (locked) y *no se debe traducir*. `Comment` significa que el segmento incluye un comentario.
5. Puedes usar las casillas de verificación para seleccionar varias traducciones y aprobarlas en un solo paso.
6. Aquí puedes ver las traducciones propuestas por la comunidad, sus puntajes de popularidad y las traducciones sugeridas por Crowdin.
7. Este botón muestra/oculta el panel del lado derecho, donde puedes ver traducciones, comentarios, la memoria de traducciones y el glosario de términos.
8. Crowdin muestra aquí los mensajes de error de las verificaciones de calidad (QA / quality assurance). En otras palabras, Crowdin te notificará si algo en la traducción no parece estar correcto. Estas traducciones deberían ser aprobadas cuidadosamente.

> [!WARNING] Si un segmento es aprobado durante la revisión, se mostrará como finalizado en la vista de proofreading y será descargado en el próximo pull de Crowdin a GitHub.

Cuando un archivo ha sido corregido, no se requiere ningún paso adicional. Si tienes alguna pregunta o te interesa colaborar como corrector, por favor contáctanos en nuestra [sala de chat de traductores](https://chat.freecodecamp.org/channel/translators). If you are already a proofreader and are interested in having a dedicated channel for a specific language, [fill out our form](https://forms.gle/XU5CyutrYCgDYaVZA).

> [!NOTE] Crowdin te permite aprobar tus propias traducciones. Sin embargo, en general suele ser mejor permitir que otro corrector revise tus traducciones propuestas como medida adicional para asegurarse que no hayan errores.

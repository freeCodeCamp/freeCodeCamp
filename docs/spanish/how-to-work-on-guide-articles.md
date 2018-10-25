# Cómo trabajar en artículo de la Guía

Con tu ayuda, podemos crear un herramienta de referencia accesible que ayudará a millones de personas que están aprendiendo a programar en los próximos años. 💛

Puedes:

- [Ayudarnos creando y editando articúlos de la Guía](#steps-for-creating-and-editing-guide-articles).
- [Ayudarnos a revisar Pull Requests para artículos de la Guía]()

## Pasos para crear y editar artículos de la Guía

1. 🍴 [Fork este repositorio](https://github.com/freeCodeCamp/freeCodeCamp#fork-destination-box)
2. 👀️ Sigue las normas de contribución expuestas a continuación.
3. 🔧 Propón cambios asombrosos!
4. 📖 Lee la [guía de buenas prácticas de estilo](/docs/style-guide-for-guide-articles).
5. 👉 [Haz una Pull Request](https://github.com/freeCodeCamp/freeCodeCamp/compare)
6. 🎉 Consigue que aprueben tu Pull request - Éxito!

O simplemente [crea un tema](https://github.com/freeCodeCamp/freeCodeCamp/issues) - toda pequeña ayuda cuenta! 😊

### [Sigue estas recomendaciones de nuestro guía de estilo para crear un artículo atractivo](/docs/style-guide-for-guide-articles.md)

### Crear Pull Request para proponer cambios

Hay dos formas de proponer cambios en el repositorio tras editar o añadir un articulo:

- [Utilizando la interfaz de GitHub en tu navegador](#using-the-github-web-interface-on-your-browser).
- [Trabajando en tu maquina local](#working-on-your-local-machine) (_recomendado_ para previsualizar cambios).

#### Utilizar la interfaz web de GitHub

Mira este vídeo de demostración o sigue los siguientes pasos:

**[TODO]** Update the GIF recording.

![GIF showing the GitHub interface steps](#)

1. Ve a la carpeta **"páginas"** (situado en [`guide`](/guide)) donde encontrarás el artículo raiz que quieras editar.

    > Todas las raíces estarán en un archivo index.md

2. Haz clic en <kbd>Editar este archivo</kbd> y haz tus cambios al archivo en la consola de edición de GitHub.

    > Si el icono aparece gris y te muestra la alerta "Debes estar en una rama para hacer o proponer cambios a este archivo", significa que probablemente estés en la rama de otra persona. En la parte superior izquierda de la página hay una casilla desplegable que dice: "Árbol: #######". Haz clic en el desplegable y cambia la rama a maestra. El icono de edición debería estar disponible ahora.

3. Desplázate a la parte de abajo de la pantalla y añade un mensaje explicando tus cambios.

    (Opcional): Recomendamos hacer un mensaje convencional. Esta es una buena práctica que verás en algunos de los repositorios Open Source más populares. Como desarrollador, deberías seguir las prácticas estándar.

    Algunos ejemplos de mensajes convencionales serían:

    ```md
    Solución: Actualizar articúlo de guía sobre HTML
    Solución: Actualizar scripts para Travis-CI
    feat: Añadir articulo sobre JavaScript hoisting
    Documentos: Actualizadas recomendaciones de contribución
    ```

    Se breve, no más de 50 caracteres. Puedes añadir información extra en la descripción del mensaje.

    esto no supone ningún esfuerzo adicional respeto a mensajes como 'update file' o 'add index.md'

    Puedes aprender más sobre [por qué deberías seguir esta práctica aquí](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

4. Selecciona el botón con la opción **"Crear una nueva rama para esta propuesta y enviar"** y haz clic en <kbd>Proponer cambio en el archivo</kbd>.

5. En la siguiente pantalla, puedes añadir más detalles sobre tu PR, luego haz clic en <kbd>Crear pull request</kbd>.

Felicidades 🎉! Acabas de crear una pull request.

#### Trabajando en tu sistema local (_recomendado_ para revisar cambios)

No es obligatorio que trabajes en tu sistema personal, salvo que desees previsualizar tus cambios, o trabajar con mejoras y arreglos de UI. También es recomendable si tienes problemas con git como errores de integración, rebase, etc.

##### Lee sobre estas recomendaciones en [Cómo configurar freeCodeCamp localmente](/docs/how-to-setup-freecodecamp-locally.md)

### Aceptación de la PR

Estas son algunos criterios utilizados por los revisores cuando evalúan PRs:

- Descripción y título relevantes
- El PR respeta la [guía de estilo](/docs/style-guide-for-guide-articles)
- Consejos generales de QA de las [recomendaciones para Moderadores](https://forum.freecodecamp.org/t/freecodecamp-moderator-guidelines/18295)
- Siempre y cuando el PR mejore o expanda la guía, será aceptada aunque tenga errores gramaticales o contenido parcial
- Las PR más antiguas se revisan primero

#### Etiquetas

- **contenido** es para Pull Requests que modifican el contenido de artículos en la guía (añaden un nuevo artículo o actualizan uno existente)
- **duplicada** es para Pull Request que contienen el mismo contenido que otra PR abierta
- **cambios solicitados** es para Pull Requests que necesitan algún cambio antes de ser integradas
- **pasada** es para Pull Requests que con etiqueta _"changes requested"_ que no han tenido actividad durante al menos 2 semanas y serán por tanto cerradas
  - Un pull request _pasada_ debe cerrarse.
  - Este es [un ejemplo](https://github.com/freeCodeCamp/freeCodeCamp/pull/235).

#### Contenido contradictorio/duplicado

Un PR se considera un **duplicar** si hace cambios al mismo artículo que otra PR.

En general el revisor:

1. Organizará las PR desde la más antigua
2. Buscará para PRs con contenido similar
3. Integrará desde la más antigua a las más nueva

Muy probablemente aparecerán conflictos al integrar PRs duplicadas.

Los revisores harán todos los esfuerzos posibles para resolver estos conflictos e integrar las PRs.

#### Solicitar cambios

Si un Pull Request no es perfecto, el revisor podría:

- solicitar cambios al contribuidor y añadir la etiqueta *cambios solicitados*
- solucionar errores menores y hacer un envío encima de la PR

#### Travis CI Build

Todas los PRs deben superar las pruebas de Travis CI antes de poder ser integrados.

Si un PR rompe la ejecución (una prueba de Travis CI falla y muestra una "X" roja) hay tres causas probables y tendrás que resolver los problemas antes de que podamos integrar el PR:

1. Tu PR crea un nuevo artículo pero le falta un archivo `index.md` en algún lugar.
    - Cada directorio en `src/pages` necesita un archivo `index.md` en él (y debe llamarse `index.md`).
    - Dos escenarios muy probables son
      - llamaste al archivo de forma distinta a `index.md`, o
      - creaste un nuevo directorio y un subdirectorio, y escribiste el nuevo artículo en el subdirectorio pero olvidaste incluir un archivo raiz `index.md` en el nuevo directorio
2. Tu PR crea un directorio nuevo y su nombre no tiene el formato correcto.
    - Tu directorio debería incluir solamente minúsculas y seguir el formato kebab-case (Ejemplo. mi-nuevo-directorio).
3. El artículo no tiene un campo llamado `título` en la parte superior.
    - Por favor utiliza la sección [Título](#title) según la [Guía de Estilo para escribir artículos](/docs/style-guide-for-guide-articles.md).

### Cuándo cerramos Pull Requests

Cerramos Pull Requests

- Si una PR más antigua para el mismo artículo es integrada, y tu PR no añade nuevo contenido
- Si hay poco o ningún esfuerzo por tu parte en su elaboración (Por ejemplo: copiando y pegando artículos de páginas como Wikipedia)
- Si incluye contenido copiado de fuentes con Copyright - ver [Citas](https://github.com/freeCodeCamp/freeCodeCamp/issues/2503)
- Si no respeta la [Guía de estilo para escribir articulos](/docs/style-guide-for-guide-articles.md)
- Si no respeta la [Política Académica de Honestidad](https://www.freecodecamp.org/academic-honesty)
- Si está pasada (un cambio ha sido solicitado y no ha habido respuesta en 2 semanas)

Además, si estás trabajando a partir de un artículo raiz, tus cambios deben ser los suficiente notables como para sustituir al original.

No aceptaremos PRs que solamente incluyan links a la sección de "Más información:".

El repositorio tiene un script `Normalise.js` que añade atributos a los link, pero también revisa si aparece el texto "This is a stub..." mediante RegEx.

Si lo encuentra, revertirá todos los cambios al artículo raiz original eliminando todos tus cambios.

Esta funcionalidad es deliberada, nos permite actualizar todos los artículos raiz si hubiese algún cambio en la plantilla original.

### Solicita ayuda

Existe una comunidad de apoyo compuesta por un gran número de contribuidores, a quienes puedes pedir opiniones y con quienes contrastar ideas.

Mantente activo en el [chat de Contribuidores](https://gitter.im/freecodecamp/contributors) y haz muchas preguntas.

---

## Pasos para revisar Pull Requests para artículos de Guía

> Esta sección está orientada a revisores del repositorio.

## Aplastar e integrar

Utilizamos la opción <kcd>Squash and merge</kcd> al integrar una PR para mantener el historial de propuestas limpio.

![GIF - Squash and merge](https://files.gitter.im/FreeCodeCamp/Contributors/56MQ/9cb8db153d7bb1b3576cd1ffc207e39d.gif)

### Filtrar PRs

> PR, Abierta, Más Antiguas Primero, Travis CI Build correcta, nadie asignado, sin comentarios

[`is:pr is:open sort:updated-asc status:success no:assignee comments:0`](https://github.com/freeCodeCamp/freeCodeCamp/pulls?utf8=%E2%9C%93&q=is%3Apr%20is%3Aopen%20sort%3Aupdated-asc%20status%3Asuccess%20no%3Aassignee%20comments%3A0)

> PR, Abierto, Mas Antiguas Primero, no tiene etiquetas: `plataforma`, `mejora`, `invalido` or `cambios solicitados`

[`is:pr is:open sort:updated-asc -label:platform -label:enhancement -label:invalid -label:"changes requested"`](https://github.com/freeCodeCamp/freeCodeCamp/pulls?utf8=%E2%9C%93&q=is%3Apr%20is%3Aopen%20sort%3Aupdated-asc%20-label%3Aplatform%20-label%3Aenhancement%20-label%3Ainvalid%20-label%3A%22changes%20requested%22).

### Plantillas

> Puedes crear tus propias plantillas en la herramienta de  GitHub's [**Respuestas guardadas**](https://github.com/settings/replies/) o utilizar las siguientes.

#### Gracias

```markdown
Gracias por contribuir a la página! 👍
Estamos encantados de aceptar estos cambios y esperamos tus futuras aportaciones. 🎉
```

#### Gracias y Felicidades

> Para agradecer y animar a contribuyentes por primera vez.

```markdown
Hola @username. Felicidades por tu primer pull request (PR)! 🎉

Gracias por contribuir a la página! 👍
Estamos encantados de aceptar estos cambios y esperamos tus futuras aportaciones. 📝
```

#### Error de intregración

```markdown
Hola @username

Me encantaría integrar tus cambio pero parece que hay un error con Travis CI build. ⚠️

Una vez en que resuelvas el problema, podré revisar tu PR e integrarla. 😊

---

> Puedes conseguir más información en la [Guía de estilo para escribir Artículos](https://github.com/freeCodeCamp/freeCodeCamp#article-title) sobre cómo formatear tus artículos para que superen los test de Travis CI. ✅
>
> Además, es una buena práctica en GitHub escribir una descripción breve de tus cambios al crear una PR. 📝
```

#### Sincronización de Fork

> Cuando el PR no está actualizada con la rama `master`.

``````markdown
Hola @username

Me enctaría poder integrar tus cambios pero parece que hay un error con los test de Travis CI build. ⚠️

```bash
Error: ENOTDIR: not a directory, open 'src/pages/java/data-abstraction/index.md'
```

Este error en particular no fue provocado por tu archivo sino que se trata de un error antiguo debido a la integración de código erróneo en la rama `master`. Ha sido resuelto desde entonces

Para superar la prueba, deberás sincronizar los últimos cambios en la rama `master` del repositorio `freeCodeCamp/freeCodeCamp`.

Usando la línea de comando, puedes hacer esto en tres pasos sencillos:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git fetch upstream

git pull upstream master
```

Si utilizas una GUI, puedes simplemente hacer `Add a new remote...` y utilizar el link `git://github.com/freeCodeCamp/freeCodeCamp.git` de arriba.

Una vez que sincronices tu fork y superes las pruebas podré integrar tu PR. 😊

---

> Puedes conseguir más información en el artículo [Sincronizando un Fork](https://help.github.com/articles/syncing-a-fork/) sobre cómo mantener al día tu fork con el repositorio principal. 🔄
>
> Además, es una buena práctica en GitHub escribir una descripción breve de tus cambios al crear una PR. 📝
``````

#### Conflictos de integración

> Cuando la PR tiene conflictos de integración que debemos resolver.¹

```markdown
Hola @username

Me encantaría poder integrar tus cambios pero parece que tienes conflictos de integración. ⚠️

Una vez que resuelvas estos conflictos, podré revisar tu PR e integrarlo. 😊

---

> Si no estás familiarizado con los conflictos de integración, por favor revisa la guía de GitHub ["Resolviendo conflictos de integración"](https://help.github.com/articles/resolving-a-merge-conflict-on-github/) para más información. 🔍️
>
> Además, es una buena práctica en GitHub escribir una descripción breve de tus cambios al crear una PR. 📝
```
¹ Si un contribuidor primerizo tiene conflictos de integración, los encargados de mantenimiento lo resolverán en su lugar.

#### Duplicado

> Cuando la PR está duplicada o es repetitiva

```markdown
Hola @username

Parece que ya se han aceptado cambios similares para este artículo que estás editando, lo siento. 😓

Si crees que tienes más que aportar, por favor abre una nueva PR.

Gracias de nuevo! 😊

---

> Si tienes preguntas, no dudes en contactarnos a través [Gitter](https://gitter.im/FreeCodeCamp/Contributors) o comentando más abajo. 💬
```

#### Cerrando Pull Requests no válidas

> Cuando una PR no es válida.

```markdown
Hola @username

No has añadido ningún contenido real por invalidaré esta PR y la etiquetaré como `inválida`. 😓️

En cualquier caso, no dudes en abrir otras PR! 👍
```

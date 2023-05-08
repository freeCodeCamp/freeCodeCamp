# How to Work on Documentation

## Work on the Content of the Docs

Para trabajar en las pautas de contribución, puedes editar o agregar archivos al directorio `docs`, [disponible aquí](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/docs). Cuando tus cambios se fusionen, automáticamente estarán disponibles en el sitio de documentación.

Cuando se agrega un nuevo archivo al directorio `docs`, deberías evaluar si el archivo también debe ser agregado a la barra lateral de navegación. Normalmente creamos un enlace en el archivo [`_sidebar.md`](_sidebar.md) para guías nuevas e independientes. Alternativamente, puede seguir las instrucciones de abajo en crear un link interno para guías de soporte.

### How to Create an Internal Link

Si quieres crear un link dirigido a una sección diferente a las pautas de contribución, sigue este formato:

```md
[Link text](target-file-name.md#target-section-heading-id)

// Si la sección de destino está dentro de la misma página, puedes omitir el nombre del archivo
[Link text](#target-section-heading-id)
```

Asegurate de incluir la extensión del archivo (`.md`). Don't specify the full URL or append `/` before the file name.

Esto es necesario para hacer que estos enlaces fucionen para la versión traducida del ducumento. Otherwise, they will redirect to the English version of the page regardless of the language.

#### Traduciendo archivos con enlaces internos

Cuando estas traduciendo documentos en Crowdin, asegurate de reemplazar el `#target-section-heading-id` con el id en el documento traducido. [Aprende mas sobre como traducir documentos aqui](how-to-translate-files.md#translate-documentation).

## Work on the Docs Theme

> [!NOTE] Recuerda que no necesitas establecer nada para trabajar en el contenido para el sitio de documentación.
> 
> Para trabajar en las directrices de contribución, consulte [trabajar en la sección de contenido de documentos](#work-on-the-docs-content).

### Structure of the Docs Website

El sitio esta generado usando [`docsify`](https://docsify.js.org) y se esta ejecutado usando Github pages.

Normalmente no vas a necesitar cambiar ninguna configuración o compliar el sitio localmente. En caso de que te interese, asi es como funciona:

- El código de la página de inicio para este sitio está disponible en [`docs/index.html`](index.html).
- Servimos este archivo como SPA utilizando `docsify` y GitHub Pages.
- El script `docsify` genera el contenido de los archivos `lenguaje de marcado` en el directorio `docs` en linea.
- La página de inicio se genera a partir del [`_coverpage.md`](_coverpage.md).
- The sidebar navigation is generated from [`_sidebar.md`](_sidebar.md).

### Serving the Documentation Site Locally

Install freeCodeCamp locally ([see the local setup guide](how-to-setup-freecodecamp-locally)), we bundled the CLI with the development tools so you can run the command below as needed from the root of the repo:

#### Serve and Launch the Documentation Site

```console
pnpm run docs:serve
```

> The documentation site should be available at <http://localhost:3400>

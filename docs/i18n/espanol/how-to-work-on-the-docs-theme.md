# How to Work on Documentation

## Work on the Content of the Docs

Para trabajar en las pautas de contribución, puedes editar o agregar archivos al directorio `docs`, [disponible aquí](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/docs). Cuando tus cambios se fusionen, automáticamente estarán disponibles en el sitio de documentación.

When adding a new file to the `docs` directory, you should evaluate if the file should also be added to the sidebar navigation. We typically create a link in the [`_sidebar.md`](_sidebar.md) file for new and independent guides. Alternatively, You may follow the instructions below on creating an internal link for supporting guides.

### How to Create an Internal Link

If you want to create a link targeting a different section of the contributing guidelines, follow this format:

```md
[Link text](target-file-name.md#target-section-heading-id)

// Si la sección de destino está dentro de la misma página, puedes omitir el nombre del archivo
[Link text](#target-section-heading-id)
```

Make sure you include the file extension (`.md`). Don't specify the full URL or append `/` before the file name.

This is necessary to make these links work for the translated version of the document. Otherwise, they will redirect to the English version of the page regardless of the language.

#### Traduciendo archivos con enlaces internos

When you work on translating docs on Crowdin, make sure to replace the `#target-section-heading-id` with the id on the translated document. [Learn more about translating docs here](how-to-translate-files.md#translate-documentation).

## Work on the Docs Theme

> [!NOTE] Recuerda que no necesitas establecer nada para trabajar en el contenido para el sitio de documentación.
> 
> Para trabajar en las directrices de contribución, consulte [trabajar en la sección de contenido de documentos](#work-on-the-docs-content).

### Structure of the Docs Website

The site is generated using [`docsify`](https://docsify.js.org) and served using GitHub pages.

Typically you would not need to change any configuration or build the site locally. In case you are interested, here is how it works:

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

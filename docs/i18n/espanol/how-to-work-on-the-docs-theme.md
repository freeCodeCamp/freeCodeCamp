# Cómo trabajar en la documentación

## Trabajar en el contenido de los documentos

Para trabajar en las pautas de contribución, puedes editar o agregar archivos al directorio `docs`, [disponible aquí](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/docs). Cuando tus cambios se fusionen, automáticamente estarán disponibles en el sitio de documentación.

### Cómo crear un enlace interno

Si desea crear un enlace dirigido a una sección diferente de las pautas de contribución, siga el siguiente formato:

```md
[Link text](target-file-name.md#target-section-heading-id)

// Si la sección de destino está dentro de la misma página, puedes omitir el nombre del archivo
[Link text](#target-section-heading-id)
```

Asegurate de incluir la extensión del archivo(`.md`). No especifique la URL completa o añada `/` antes del nombre del archivo.

Esto es necesario para que estos enlaces funcionen en la versión traducida del documento. De lo contrario, serán redirigidos a la versión de la pagina en inglés independientemente del idioma.

#### Traduciendo archivos con enlaces internos

Cuando traduces documentos en Crowdin, asegurate de reemplazar el `#target-section-heading-id` con el id del documento traducido. [Más información sobre la traducción de documentos aquí](how-to-translate-files.md#translate-documentation).

## Trabajar en el tema de los documentos

> [!NOTE] Recuerda que no necesitas establecer nada para trabajar en el contenido para el sitio de documentación.
> 
> Para trabajar en las directrices de contribución, consulte [trabajar en la sección de contenido de documentos](#work-on-the-docs-content).

### Estructura de los documentos de la página web

El sitio es generado con [`docsify`](https://docsify.js.org) y hosteado por medio de GitHub pages.

Normalmente no necesitarías modificar ninguna configuración ni compilar el sitio localmente. En caso de que te interese, así es como funciona:

- El código de la página de inicio para este sitio está disponible en [`docs/index.html`](index.html).
- Servimos este archivo como SPA utilizando `docsify` y GitHub Pages.
- El script `docsify` genera el contenido de los archivos `lenguaje de marcado` en el directorio `docs` en linea.
- La página de inicio se genera a partir del [`_coverpage.md`](_coverpage.md).
- La barra de navegación lateral es generada desde [`_sidebar.md`](_sidebar.md).

### Ejecutando el sitio de documentación localmente

Install freeCodeCamp locally ([see the local setup guide](how-to-setup-freecodecamp-locally)), we bundled the CLI with the development tools so you can run any of the below commands as needed from the root of the repo:

#### Ejecutar y lanzar solo el sitio de documentación

```console
npm run docs:serve
```

#### Servir el sitio de documentación junto a freeCodeCamp local:

```console
npm run develop
```

> The documentation site should be available at <http://localhost:3400>

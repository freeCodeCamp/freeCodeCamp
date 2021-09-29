# Cómo trabajar en la documentación

> [!NOTE] Recuerda que no necesitas configurar nada para trabajar en el contenido de la documentación.
> 
> Para trabajar en las pautas de contribución, puedes editar o agregar archivos al directorio `docs`, [disponible aquí](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/docs). Cuando tus cambios se fusionen, estarán disponibles automáticamente en la página web.

## Estructura del sitio

El sitio es generado utilizando [`docsify`](https://docsify.js.org), y servido por medio de GitHub Pages.

Normalmente, no necesitarías cambiar ninguna configuración o construir el sitio localmente. En caso de que te interese, así es cómo funciona:

- El código de la página de inicio para este sitio está disponible en [`docs/index.html`](index.html).
- Servimos este archivo como SPA utilizando `docsify` y GitHub Pages.
- El script `docsify` genera el contenido de los archivos`markdown` en el directorio `docs` en demanda.
- La página de inicio se genera a partir del [`_coverpage.md`](_coverpage.md).
- La barra de navegación lateral es generada desde [`_sidebar.md`](_sidebar.md).

## Sirviendo el sitio de documentación localmente

Clona freeCodeCamp:

```console
git clone https://github.com/freeCodeCamp/freeCodeCamp.git
docsify serve docs
```

Instala `docsify`:

```console
npm install -g docsify
```

y sirve el directorio `/docs`

```console
docsify serve docs
```

Alternativamente, si ha instalado freeCodeCamp localmente (vea la guía de configuración local), empaquetamos la CLI con las herramientas de desarrollo para que puedas ejecutar cualquiera de los siguientes comandos según sea necesario desde la raíz del repo:

### Servir y lanzar el sitio de documentación solamente

```console
npm run docs:serve
```

### Servir el sitio de documentación junto a freeCodeCamp localmente:

```console
npm run develop
```

> El sitio de documentación debería estar disponible en <http://localhost:3200>

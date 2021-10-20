# Cómo trabajar en las noticias para desarrolladores de freeCodeCamp.org

Las noticias del desarrollador también conocidas como el sitio [`/news`](https://www.freecodecamp.org/news) funciona con [Ghost](https://ghost.org/). Utilizamos un tema personalizado para el aspecto del sitio. El código fuente del tema está disponible aquí: <https://github.com/freeCodeCamp/news-theme>.

## El Tema

Ghost utiliza un lenguaje de plantillas sencillo llamado [Handlebars](http://handlebarsjs.com/) para sus temas. El tema usado en `/news` se basa en el tema predeterminado [casper](https://github.com/TryGhost/Casper).

El tema por defecto está fuertemente comentado, por lo que debería ser bastante fácil averiguar lo que está pasando con solo leer el código y los comentarios. Una vez que te sientas cómodo con cómo funciona todo, Ghost también tiene una completa [documentación API de temas](https://themes.ghost.org) que explica todos los posibles ayudantes de Handlebars y plantillas.

**Los archivos principales son:**

- `default.hbs` - El archivo de plantilla principal
- `index.hbs` - Utilizado para la página de inicio
- `post.hbs` - Utilizado para publicaciones individuales
- `page.hbs` - Utilizado para páginas individuales
- `tag.hbs` - Utilizado para archivos de etiquetas
- `author.hbs` - Utilizado para archivos de autor

Un truco realmente bueno es que también puede crear plantillas personalizadas sólo añadiendo un trozo pequeño de una página a un archivo de plantilla. Por ejemplo:

- `page-about.hbs` - plantilla personalizada para la página `/about/`
- `tag-news.hbs` - plantilla personalizada para `/tag/news/` archivo
- `author-ali.hbs` - plantilla personalizada para `/author/ali/` archivo

## Desarrollo

1. Obtén Ghost instalado localmente.

   ```sh
   npm install -g ghost-cli@latest
   mkdir ghost-local-site
   cd ghost-local-site
   ```

   ```sh
   ghost install local
   ghost start
   ```

   > Nota: actualmente freeCodeCamp usa la versión Ghost `2.9.0`, así que asegúrate de que estás usando una versión superior a eso.

   Asegúrate de ejecutar los comandos de `ghost` desde el directorio `ghost-local-site`. Siga las instrucciones adicionales de la [documentación oficial de Ghost](https://docs.ghost.org) si no estás familiarizado con su interfaz.

2. Bifurca y clona el repositorio en tu directorio de temas (reemplazando `YOUR_USERNAME` con tu nombre de usuario de GitHub):

   ```sh
   cd content/themes/
   git clone https://github.com/YOUR_USERNAME/news-theme.git
   ```

3. Asegúrese de tener todos los requisitos previos.

   Los estilos de los temas se compilan usando Gulp/PostCSS para polyfill las futuras especificaciones CSS. Necesitará [Node.js](https://nodejs.org/). Asegúrese de que su versión de Node.js es compatible con `ghost`.

4. Instalar dependencias y desarrollar el tema

   ```sh
   npm ci
   npm run develop
   ```

5. Ahora puedes editar los archivos `/assets/css/`, los cuales serán compilados a `/assets/built/` automáticamente.

6. Acceder al sitio de desarrollo.

   a. Introduzca `http://localhost:2368/ghost/` en su barra de direcciones. Continúe con la configuración solicitada en la página (si se ejecuta Ghost por primera vez).

   b. _(Solo una vez, durante la configuración)_ Reinicie Ghost, en una terminal por separado una vez para asegurarse de que el tema está disponible.

   ```sh
   cd ghost-local-site
   ghost restart
   ```

   c. _(Solo una vez, durante la configuración)_ Una vez que hayas hecho esto, ve a `http://localhost:2368/ghost/#/settings/design` y desplázate hacia abajo. Asegúrate de hacer clic en activar en el `freecodecamp-news-theme`.

7. Comprime el código final y crea un pull-request

   El `zip` que Gulp empaqueta son los archivos del tema en `dist/<theme-name>.zip`, los cuales podemos subir al sitio de producción.

   Cuando haga un PR, por favor asegúrese de haber ejecutado el script de abajo antes de confirmar el código y enviar un PR.

   ```sh
   npm run zip
   ```

## Otros recursos y referencias

### Funcionalidades utilizadas de PostCSS

- Autoprefixer - No te preocupes por escribir prefijos del navegador de ningún tipo, todo se hace automáticamente con soporte para las 2 versiones más recientes de cada navegador.
- Variables - Variables CSS simples
- [Función de color](https://github.com/postcss/postcss-color-function)

### Iconos SVG

El tema utiliza iconos SVG en línea, incluidos a través de parciales de Handlebars. Puedes encontrar todos los iconos dentro de `/partials/icons`. Para usar un icono simplemente incluya el nombre del archivo relevante, por ejemplo. Para incluir el icono SVG en `/partials/icons/rss.hbs` - usa `{{> "icons/rss"}}`.

Puedes añadir tus propios iconos SVG de la misma manera.

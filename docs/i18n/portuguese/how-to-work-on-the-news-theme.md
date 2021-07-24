# Como trabalhar no tema de notícias de desenvolvedor do freeCodeCamp.org

As notícias de desenvolvimento, também conhecidas como o site de [`/news`](https://www.freecodecamp.org/news), são fornecidas por [Ghost](https://ghost.org/). We use a custom theme for the look and feel of the site. The source code of the theme is available here: <https://github.com/freeCodeCamp/news-theme>.

## The Theme

Ghost uses a simple templating language called [Handlebars](http://handlebarsjs.com/) for its themes. O tema usado em `/news` é baseado no [tema casper](https://github.com/TryGhost/Casper) padrão.

The default theme is commented pretty heavily so that it should be fairly easy to work out what's going on just by reading the code and the comments. Quando você se sentir confortável com a forma como tudo lá funciona, Ghost também tem uma [documentação da API de tema](https://themes.ghost.org) completa que explica cada helper e template do Handlebars possível.

**The main files are:**

- `default.hbs` - The main template file
- `index.hbs` - Used for the home page
- `post.hbs` - Used for individual posts
- `page.hbs` - Used for individual pages
- `tag.hbs` - Used for tag archives
- `author.hbs` - Usado para arquivamentos de autor

Um truque muito legal é que você também pode criar modelos personalizados únicos, apenas adicionando o slug de uma página a um arquivo de modelo. For example:

- `page-about.hbs` - Custom template for the `/about/` page
- `tag-news.hbs` - Modelo personalizado para o arquivo `/tag/news/`
- `author-ali.hbs` - Modelo personalizado para o arquivo `/author/ali/`

## Development

1. Instale o Ghost localmente.

   ```sh
   npm install -g ghost-cli@latest
   mkdir ghost-local-site
   cd ghost-local-site
   ```

   ```sh
   ghost install local
   ghost start
   ```

   > Observação: atualmente, o freeCodeCamp usa a versão `2.9.0` do Ghost. Então, certifique-se de estar usando uma versão maior que essa.

   Certifique-se de executar comandos `ghost` do diretório `ghost-local-site`. Follow additional instructions on [Ghost's official documentation](https://docs.ghost.org) if are not familiar with its interface.

2. Faça fork e clone o repositório no seu diretório tema (substituindo `YOUR_USERNAME` com seu nome de usuário do GitHub):

   ```sh
   cd content/themes/
   git clone https://github.com/YOUR_USERNAME/news-theme.git
   ```

3. Make sure you have all the pre-requisites.

   The theme styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node.js](https://nodejs.org/). Certifique-se de que sua versão do Node.js é compatível com o `ghost`.

4. Install dependencies and develop the theme

   ```sh
   npm ci
   npm run develop
   ```

5. Agora você pode editar os arquivos `/assets/css/`, que serão compilados automaticamente para `/assets/built/`.

6. Access the development site.

   a. Digite `http://localhost:2368/ghost/` na sua barra de pesquisa. Continue com a configuração solicitada na página (se estiver executando ghost pela primeira vez).

   b. _(One-time only, during setup)_ Restart Ghost, on a separate terminal once to ensure the theme is available.

   ```sh
   cd ghost-local-site
   ghost restart
   ```

   c. _(One-time only, during setup)_ Once you've done this, go to `http://localhost:2368/ghost/#/settings/design` and scroll to the bottom. Make sure you click activate on the `freecodecamp-news-theme`.

7. Faça um zip do código final e faça um pull-request

   O `zip` do Gulp task empacota os arquivos de tema em `dist/<theme-name>.zip`, que podemos carregar no site de produção.

   When you make a PR, please make sure you have run the below script prior to commiting the code and sending a PR.

   ```sh
   npm run zip
   ```
## Other Reference and resources

### PostCSS Features Used

- Autoprefixer - Don't worry about writing browser prefixes of any kind, it's all done automatically with support for the latest 2 major versions of every browser.
- Variables - Simple pure CSS variables
- [Color Function](https://github.com/postcss/postcss-color-function)

### SVG Icons

The theme uses inline SVG icons, included via Handlebars partials. You can find all icons inside `/partials/icons`. To use an icon just include the name of the relevant file, eg. To include the SVG icon in `/partials/icons/rss.hbs` - use `{{> "icons/rss"}}`.

You can add your own SVG icons in the same manner.

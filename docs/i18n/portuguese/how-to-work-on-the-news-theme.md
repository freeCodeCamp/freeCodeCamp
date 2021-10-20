# Como trabalhar no tema de notícias de desenvolvedor do freeCodeCamp.org

As notícias de desenvolvimento, também conhecidas como o site de [`/news`](https://www.freecodecamp.org/news), são fornecidas por [Ghost](https://ghost.org/). Usamos um tema personalizado para a aparência do site. O código fonte do tema está disponível aqui: <https://github.com/freeCodeCamp/news-theme>.

## O tema

Ghost usa uma linguagem simples de template chamada [Handlebars](http://handlebarsjs.com/) para seus temas. O tema usado em `/news` é baseado no [tema casper](https://github.com/TryGhost/Casper) padrão.

O tema padrão é bastante comentado então deve ser razoavelmente fácil resolver o que for preciso apenas lendo o código e os comentários. Quando você se sentir confortável com a forma como tudo lá funciona, Ghost também tem uma [documentação da API de tema](https://themes.ghost.org) completa que explica cada helper e template do Handlebars possível.

**Os arquivos principais são:**

- `default.hbs` - O arquivo de template principal
- `index.hbs` - Usado para a página inicial
- `post.hbs` - Usado para postagens individuais
- `page.hbs` - Usado para páginas individuais
- `tag.hbs` - Usado para arquivos de tags
- `author.hbs` - Usado para arquivamentos de autor

Um truque muito legal é que você também pode criar modelos personalizados únicos, apenas adicionando o slug de uma página a um arquivo de modelo. Por exemplo:

- `page-about.hbs` - Modelo personalizado para a página `/about/`
- `tag-news.hbs` - Modelo personalizado para o arquivo `/tag/news/`
- `author-ali.hbs` - Modelo personalizado para o arquivo `/author/ali/`

## Desenvolvimento

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

   Certifique-se de executar comandos `ghost` do diretório `ghost-local-site`. Siga instruções adicionais na [documentação oficial do Ghost](https://docs.ghost.org) se não estiver familiarizado com a interface.

2. Faça fork e clone o repositório no seu diretório tema (substituindo `YOUR_USERNAME` com seu nome de usuário do GitHub):

   ```sh
   cd content/themes/
   git clone https://github.com/YOUR_USERNAME/news-theme.git
   ```

3. Certifique-se de que você tem todos os pré-requisitos.

   Os estilos do tema são compilados utilizando Gulp/PostCSS para poliencher as especificações CSS futuras. Você precisará do [Node.js](https://nodejs.org/). Certifique-se de que sua versão do Node.js é compatível com o `ghost`.

4. Instale as dependências e desenvolva o tema

   ```sh
   npm ci
   npm run develop
   ```

5. Agora você pode editar os arquivos `/assets/css/`, que serão compilados automaticamente para `/assets/built/`.

6. Acessar o site de desenvolvimento.

   a. Digite `http://localhost:2368/ghost/` na sua barra de pesquisa. Continue com a configuração solicitada na página (se estiver executando ghost pela primeira vez).

   b. _(Apenas uma vez, durante a configuração)_ Reinicie o Ghost, em um terminal separado para garantir que o tema esteja disponível.

   ```sh
   cd ghost-local-site
   ghost restart
   ```

   c. _(Apenas uma vez, durante a configuração)_ Uma vez que você tenha feito isso, vá até `http://localhost:2368/ghost/#/settings/design` e role para baixo. Certifique-se de clicar em ativar no `freecodecamp-news-theme`.

7. Faça um zip do código final e faça um pull-request

   O `zip` do Gulp task empacota os arquivos de tema em `dist/<theme-name>.zip`, que podemos carregar no site de produção.

   Quando você criar uma PR, por favor certifique-se de ter executado o script abaixo antes de confirmar o código e enviar uma PR.

   ```sh
   npm run zip
   ```

## Outras Referências e recursos

### Características do PostCSS utilizadas

- Autoprefixer - Não se preocupe em escrever os prefixos do navegador de qualquer tipo, tudo é feito automaticamente com suporte para as 2 versões principais mais recentes de cada navegador.
- Variáveis - Variáveis CSS simples
- [Função de Cor](https://github.com/postcss/postcss-color-function)

### Ícones SVG

O tema usa ícones SVG embutidos, incluídos via partial Handlebars. Você pode encontrar todos os ícones dentro de `/partials/icons`. Para usar um ícone, inclua o nome do arquivo relevante, por exemplo. Para incluir o ícone SVG em `/partials/icons/rss.hbs` - use `{{> "icons/rss"}}`.

Você pode adicionar seus próprios ícones SVG da mesma maneira.

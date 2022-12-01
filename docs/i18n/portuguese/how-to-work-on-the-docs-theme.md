# Como trabalhar na documentação

## Trabalhar no conteúdo da documentação

Para trabalhar nas diretrizes de contribuição, você pode editar ou adicionar arquivos no diretório `docs` [disponível aqui](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/docs). Ao fazermos o merge de suas alterações, elas são disponibilizadas automaticamente no site da documentação.

When adding a new file to the `docs` directory, you should evaluate if the file should also be added to the sidebar navigation. We typically create a link in the [`_sidebar.md`](_sidebar.md) file for new and independent guides. Alternatively, You may follow the instructions below on creating an internal link for supporting guides.

### Como criar um link interno

If you want to create a link targeting a different section of the contributing guidelines, follow this format:

```md
[Link text](target-file-name.md#target-section-heading-id)

// Se a seção de destino estiver dentro da mesma página, você pode omitir o nome do arquivo
[texto do link](#id-do-cabeçalho-da-seção-de-destino)
```

Make sure you include the file extension (`.md`). Don't specify the full URL or append `/` before the file name.

This is necessary to make these links work for the translated version of the document. Otherwise, they will redirect to the English version of the page regardless of the language.

#### Traduzindo a documentação com links internos

When you work on translating docs on Crowdin, make sure to replace the `#target-section-heading-id` with the id on the translated document. [Learn more about translating docs here](how-to-translate-files.md#translate-documentation).

## Trabalhe no tema da documentação

> [!NOTE] Um lembrete rápido de que você não precisa configurar nada para ajudar no conteúdo da documentação do site.
> 
> Para trabalhar nas diretrizes de contribuição, consulte a seção [trabalho no conteúdo de documentação](#work-on-the-docs-content).

### Estrutura do site da documentação

The site is generated using [`docsify`](https://docsify.js.org) and served using GitHub pages.

Typically you would not need to change any configuration or build the site locally. In case you are interested, here is how it works:

- A fonte da página inicial para este site está disponível em [`docs/index.html`](index.html).
- Veiculamos este arquivo como uma SPA usando `docsify` e GitHub Pages.
- O script do `docsify` gera o conteúdo dos arquivos em `markdown` no diretório `docs` sob demanda.
- A página inicial é gerada a partir do [`_coverpage.md`](_coverpage.md).
- The sidebar navigation is generated from [`_sidebar.md`](_sidebar.md).

### Veiculando localmente o site da documentação

Install freeCodeCamp locally ([see the local setup guide](how-to-setup-freecodecamp-locally)), we bundled the CLI with the development tools so you can run any of the below commands as needed from the root of the repo:

#### Veicule e inicie apenas o site da documentação

```console
npm run docs:serve
```

#### Veicule localmente o site da documentação juntamente com o freeCodeCamp:

```console
npm run develop
```

> O site da documentação deve estar disponível em <http://localhost:3400>

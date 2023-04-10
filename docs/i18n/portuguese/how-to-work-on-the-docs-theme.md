# How to Work on Documentation

## Work on the Content of the Docs

Para trabalhar nas diretrizes de contribuição, você pode editar ou adicionar arquivos no diretório `docs` [disponível aqui](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/docs). Ao fazermos o merge de suas alterações, elas são disponibilizadas automaticamente no site da documentação.

Ao adicionar um novo arquivo ao diretório `docs`, você deve avaliar se o arquivo também deve ser adicionado à navegação na barra lateral. Normalmente, criamos um link no arquivo [`_sidebar.md`](_sidebar.md) para guias novos e independentes. Como alternativa, você pode seguir as instruções abaixo para criar um link interno para os guias de suporte.

### How to Create an Internal Link

Se você quiser criar um link direcionando a uma outra seção das diretrizes de contribuição, siga este formato:

```md
[Link text](target-file-name.md#target-section-heading-id)

// Se a seção de destino estiver dentro da mesma página, você pode omitir o nome do arquivo
[texto do link](#id-do-cabeçalho-da-seção-de-destino)
```

Certifique-se de incluir a extensão de arquivo (`.md`). Não especifique o URL completo nem acrescente `/` antes do nome do arquivo.

Isso é necessário para que esses links funcionem para a versão traduzida do documento. Caso contrário, eles redirecionarão para a versão em inglês da página, independentemente do idioma.

#### Traduzindo a documentação com links internos

Ao trabalhar na tradução da documentação no Crowdin, certifique-se de substituir o `#target-section-heading-id` (id do cabeçalho da seção de destino) pelo id no documento traduzido. [Saiba mais sobre como traduzir a documentação aqui](how-to-translate-files.md#translate-documentation).

## Work on the Docs Theme

> [!NOTE] Um lembrete rápido de que você não precisa configurar nada para ajudar no conteúdo da documentação do site.
> 
> Para trabalhar nas diretrizes de contribuição, consulte a seção [trabalho no conteúdo de documentação](#work-on-the-docs-content).

### Structure of the Docs Website

O site é gerado usando [`docsify`](https://docsify.js.org) e veiculado usando GitHub Pages.

Normalmente, você não precisaria alterar nenhuma configuração ou compilar o site localmente. Caso esteja interessado, funciona assim:

- A fonte da página inicial para este site está disponível em [`docs/index.html`](index.html).
- Veiculamos este arquivo como uma SPA usando `docsify` e GitHub Pages.
- O script do `docsify` gera o conteúdo dos arquivos em `markdown` no diretório `docs` sob demanda.
- A página inicial é gerada a partir do [`_coverpage.md`](_coverpage.md).
- A navegação da barra lateral é gerada a partir de [`_sidebar.md`](_sidebar.md).

### Serving the Documentation Site Locally

Install freeCodeCamp locally ([see the local setup guide](how-to-setup-freecodecamp-locally)), we bundled the CLI with the development tools so you can run the command below as needed from the root of the repo:

#### Serve and Launch the Documentation Site

```console
pnpm run docs:serve
```

> O site da documentação deve estar disponível em <http://localhost:3400>

# Como trabalhar na documentação

## Trabalhar no conteúdo da documentação

Para trabalhar nas diretrizes de contribuição, você pode editar ou adicionar arquivos no diretório `docs` [disponível aqui](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/docs). Ao fazermos o merge de suas alterações, elas são disponibilizadas automaticamente no site da documentação.

Ao adicionar um novo arquivo ao diretório `docs`, você deve avaliar se o arquivo também deve ser adicionado à navegação na barra lateral. Normalmente, criamos um link no arquivo [`_sidebar.md`](_sidebar.md) para guias novos e independentes. Como alternativa, você pode seguir as instruções abaixo para criar um link interno para os guias de suporte.

### Como criar um link interno

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

## Trabalhe no tema da documentação

> [!NOTE] Um lembrete rápido de que você não precisa configurar nada para ajudar no conteúdo da documentação do site.
> 
> Para trabalhar nas diretrizes de contribuição, consulte a seção [trabalho no conteúdo de documentação](#work-on-the-docs-content).

### Estrutura do site da documentação

O site é gerado usando [`docsify`](https://docsify.js.org) e veiculado usando GitHub Pages.

Normalmente, você não precisaria alterar nenhuma configuração ou compilar o site localmente. Caso esteja interessado, funciona assim:

- A fonte da página inicial para este site está disponível em [`docs/index.html`](index.html).
- Veiculamos este arquivo como uma SPA usando `docsify` e GitHub Pages.
- O script do `docsify` gera o conteúdo dos arquivos em `markdown` no diretório `docs` sob demanda.
- A página inicial é gerada a partir do [`_coverpage.md`](_coverpage.md).
- A navegação da barra lateral é gerada a partir de [`_sidebar.md`](_sidebar.md).

### Veiculando localmente o site da documentação

Instale o freeCodeCamp localmente ([veja o guia de instalação local](how-to-setup-freecodecamp-locally)). Nós empacotamos a CLI com as ferramentas de desenvolvimento para que você possa executar qualquer um dos comandos abaixo, conforme necessário, a partir da raiz do repositório:

#### Veicule e inicie apenas o site da documentação

```console
pnpm run docs:serve
```

#### Veicule localmente o site da documentação juntamente com o freeCodeCamp:

```console
pnpm run develop
```

> O site da documentação deve estar disponível em <http://localhost:3400>

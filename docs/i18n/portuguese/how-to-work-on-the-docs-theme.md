# Como trabalhar no tema da documentação

> [!NOTE] Um lembrete rápido de que você não precisa configurar nada para ajudar no conteúdo da documentação do site.
> 
> Para trabalhar nas diretrizes de contribuição, você pode editar ou adicionar arquivos no diretório `docs` [disponível aqui](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/docs). Ao fazermos o merge de suas alterações, elas são disponibilizadas automaticamente no site da documentação.

## Estrutura do site da documentação

O site é gerado usando [`docsify`](https://docsify.js.org) e veiculado usando GitHub Pages.

Normalmente, você não precisaria alterar nenhuma configuração ou compilar o site localmente. Caso esteja interessado, funciona assim:

- A fonte da página inicial para este site está disponível em [`docs/index.html`](index.html).
- Veiculamos este arquivo como uma SPA usando `docsify` e GitHub Pages.
- O script do `docsify` gera o conteúdo dos arquivos em `markdown` no diretório `docs` sob demanda.
- A página inicial é gerada a partir do [`_coverpage.md`](_coverpage.md).
- a navegação da barra lateral é gerada a partir de [`_sidebar.md`](_sidebar.md).

## Veiculando localmente o site da documentação

Clone o freeCodeCamp:

```console
git clone https://github.com/freeCodeCamp/freeCodeCamp.git
docsify serve docs
```

Instale o `docsify`:

```console
npm install -g docsify
```

e veicule o diretório `/docs`

```console
docsify serve docs
```

Como alternativa, se você tiver instalado o freeCodeCamp localmente (veja o guia de instalação local), nós empacotamos o CLI com as ferramentas de desenvolvimento para que você possa executar qualquer um dos comandos abaixo, conforme necessário, a partir da raiz do repositório:

### Veicule e inicie apenas o site da documentação

```console
npm run docs:serve
```

### Veicule localmente o site da documentação juntamente com o freeCodeCamp:

```console
npm run develop
```

> O site da documentação deve estar disponível em <http://localhost:3200>

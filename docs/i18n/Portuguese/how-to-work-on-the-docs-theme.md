# Como funcionar no tema de docs

> [!NOTA] Um lembrete rápido de que você não precisa configurar nada para trabalhar no conteúdo do site de documentação.
> 
> Para trabalhar nas diretrizes de contribuição, você pode editar ou adicionar arquivos no diretório `` docs [disponível aqui](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/docs). Quando suas alterações são mescladas, elas serão disponibilizadas automaticamente no site de documentação.

## Estrutura do site da documentação

O site é gerado usando [`docsify`](https://docsify.js.org), e servido usando as páginas do GitHub.

Normalmente você não precisaria alterar nenhuma configuração ou construir o site localmente. Caso esteja interessado, aqui está como funciona:

- A fonte da página inicial para este site está disponível em [`docs/index.html`](index.html).
- Servimos este arquivo como um SPA usando `docsify` e GitHub Pages.
- O script `docsify` gera o conteúdo de `arquivos` markdown no diretório `docs` sob demanda.
- A página inicial é gerada a partir do [`_coverpage.md`](_coverpage.md).
- a navegação na barra lateral é gerada a partir de [`_sidebar.md`](_sidebar.md).

## Servindo localmente o site de documentação

Clonar freeCodeCamp:

```sh
git clone https://github.com/freeCodeCamp/freeCodeCamp.git
docsify serve docs
```

Instalar `docsify`:

```sh
npm install -g docsify
```

e serve o diretório `/docs`

```sh
docsify servir documentos
```

Como alternativa, se você tiver instalado o freeCodeCamp localmente (veja o guia de instalação local), nós empacotamos o CLI com as ferramentas de desenvolvimento para que você possa executar `npm run docs:serve` na raiz do repositório.

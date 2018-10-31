---
title: Bash ls
localeTitle: Bash ls
---## Bash ls

`ls` é um comando em sistemas operacionais do tipo Unix para listar o conteúdo de um diretório, por exemplo, nomes de pastas e arquivos.

### Uso

```bash
cat [options] [file_names] 
```

Opções mais usadas:

*   `-a` , todos os arquivos e pastas, incluindo os que estão ocultos e começam com a `.`
*   `-l` , lista em formato longo
*   `-G` , habilitar saída colorida.

### Exemplo:

Listar arquivos no `freeCodeCamp/guide/`

```bash
ls                                                                ⚬ master 
 CODE_OF_CONDUCT.md bin                package.json       utils 
 CONTRIBUTING.md    gatsby-browser.js  plugins            yarn.lock 
 LICENSE.md         gatsby-config.js   src 
 README.md          gatsby-node.js     static 
 assets             gatsby-ssr.js      translations 
```

#### Mais Informações:

*   [Wikipedia](https://en.wikipedia.org/wiki/Ls)
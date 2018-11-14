---
title: Git Status
localeTitle: Status do Git
---
## Status do Git

O comando `git status` exibe o estado do diretório de trabalho e da área de preparação. Ele exibe caminhos que possuem diferenças entre o arquivo de `index` e a consolidação `HEAD` atual, caminhos que possuem diferenças entre a árvore de trabalho e o arquivo de `index` e caminhos na árvore de trabalho que não são rastreados pelo Git (e não são ignorados pelo [gitignore](https://git-scm.com/docs/gitignore)

`git status` saída do comando `git status` não mostra nenhuma informação sobre o histórico do projeto comprometido. Para isso, você precisa usar o `git log` .

### Uso

```shell
git status 
```

Listar quais arquivos são preparados, não organizados e não rastreados.
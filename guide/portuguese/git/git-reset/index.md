---
title: Git Reset
localeTitle: Git Reset
---
## Git Reset

O comando `git reset` permite que você `git reset` sua cabeça atual para um estado especificado. Você pode redefinir o estado de arquivos específicos, bem como uma ramificação inteira.

### Redefinir um arquivo ou conjunto de arquivos

O comando a seguir permite escolher seletivamente partes do conteúdo e reverter ou desassociar.

```shell
git reset (--patch | -p) [tree-ish] [--] [paths] 
```

### Desencorajar um arquivo

Se você moveu um arquivo para a área de preparação com o `git add` , mas não quer mais que ele faça parte de um commit, você pode usar o `git reset` para desassociar o arquivo:

```shell
git reset HEAD FILE-TO-UNSTAGE 
```

As alterações feitas ainda estarão no arquivo, esse comando apenas remove esse arquivo da sua área de preparação.

### Redefinir uma ramificação para uma confirmação anterior

O comando a seguir redefine o HEAD da sua ramificação atual para o `COMMIT` fornecido e atualiza o índice. Basicamente, ele rebobina o estado de sua ramificação e, em seguida, todos os commits feitos por você, escrevem sobre qualquer coisa que tenha vindo depois do ponto de redefinição. Se você omitir o `MODE` , o padrão será `--mixed` :

```shell
git reset MODE COMMIT 
```

As opções para `MODE` são:

*   `--soft` : não redefine o arquivo de índice ou a árvore de trabalho, mas redefine o HEAD para `commit` . Altera todos os arquivos para "Alterações a serem confirmadas"
*   `--mixed` : redefine o índice, mas não a árvore de trabalho, e relata o que não foi atualizado
*   `--hard` : redefine o índice e a árvore de trabalho. Quaisquer alterações nos arquivos rastreados na árvore de trabalho desde a `commit` são descartadas
*   `--merge` : redefine o índice e atualiza os arquivos na árvore de trabalho que são diferentes entre `commit` e HEAD, mas mantém os que são diferentes entre o índice e a árvore de trabalho
*   `--keep` : redefine entradas de índice e atualiza arquivos na árvore de trabalho que são diferentes entre `commit` e HEAD. Se um arquivo diferente entre `commit` e HEAD tiver alterações locais, a redefinição será abortada

### Mais Informações:

*   [Git redefinir documentação](https://git-scm.com/docs/git-reset)
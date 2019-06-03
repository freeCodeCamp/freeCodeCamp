---
title: Git Show
localeTitle: Git Show
---
## Git Show

O `git show` é um comando útil que permite ver em detalhes a visão de um determinado objeto (commits, tags, blobs e trees).

A sintaxe deste comando é a seguinte:

```bash
git show [<options>] [<object>…​]
```

Para diferentes objetos `git show` fornece saídas diferentes.

*   commits mostra a mensagem de log de confirmação com um diff de alterações que foram confirmadas.
*   Para tags, mostra a mensagem da tag e os objetos referenciados.
*   Para árvores, mostra os nomes
*   Para blobs simples, mostra o conteúdo simples

O uso mais comum do `git show` estaria em associação com o objeto git commit

```bash
git show 3357d63
```

Você obteria uma saída semelhante a
```
commit 3357d63d8f44104940e568a1ba89fa88a16dc753
 Author: John Doe <johndoe@acme.com>
 Date:   Tue Oct 2 00:57:38 2018 +0530

    add a section on git commit --amend --author

 diff --git a/src/pages/git/git-commit/index.md b/src/pages/git/git-commit/index.md
 index fc9f568..8f1c8eb 100644
 --- a/src/pages/git/git-commit/index.md
 +++ b/src/pages/git/git-commit/index.md
 @@ -73,5 +73,11 @@ Premature commits happen all the time in the course of your day-to-day developme

 Amended commits are actually entirely new commits and the previous commit will no longer be on your current branch. When you're working with others, you should try to avoid amending commits if the last commit is already pushed into the repository.

 +With `--amend`, one of the useful flag you could use is `--author` which enables you to change the author of the last commit you've made. Imagine a situation you haven't properly set up your name or email in git configurations but you already made a commit. With `--author` flag you can simply change them without resetting the last commit.
 +
 +```
 +git commit --amend --author="John Doe <johndoe@email.com>"
 +```
 +
 ### More Information:
 - Git documentation: [commit](https://git-scm.com/docs/git-commit)
```

Você poderia apenas usar o `git show` e ele mostrará o conteúdo do commit mais recente do git.

### Mais Informações:

*   [Documentação do Git - show](https://git-scm.com/docs/git-show)
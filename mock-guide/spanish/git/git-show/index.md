---
title: Git Show
localeTitle: Git Show
---
## Git Show

`git show` es un comando útil que le permite ver en detalle la vista de un objeto determinado (confirmaciones, etiquetas, manchas y árboles).

La sintaxis de este comando es la siguiente:

```bash
git show [<options>] [<object>…​]
```

Para diferentes objetos `git show` da diferentes salidas.

*   confirma muestra el mensaje de registro de confirmación con una diferencia de cambios que se confirmaron.
*   Para las etiquetas, muestra el mensaje de la etiqueta y los objetos referenciados.
*   Para los árboles, muestra los nombres.
*   Para blobs lisos, muestra los contenidos lisos.

El uso más común de `git show` sería en asociación con el objeto git commit

```bash
git show 3357d63
```

Obtendrías una salida similar a
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

Puede usar `git show` y se mostrará el contenido del último git commit.

### Más información:

*   [Documentación Git - Mostrar](https://git-scm.com/docs/git-show)
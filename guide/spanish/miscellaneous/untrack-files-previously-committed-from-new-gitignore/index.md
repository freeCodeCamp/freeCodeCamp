---
title: Untrack Files Previously Committed from New Gitignore
localeTitle: Desmarcar archivos previamente confirmados de New Gitignore
---
Para desvincular un _solo_ archivo, es decir, dejar de rastrear el archivo pero no eliminarlo del uso del sistema:

`git rm --cached filename`

Para deshacer el seguimiento de _cada_ archivo en `.gitignore` :

Primero **confirme** los cambios de código pendientes, y luego ejecute:

`git rm -r --cached`

Esto elimina cualquier archivo modificado del índice (área de preparación), luego ejecuta:

`git add .`

Comprometelo

`git commit -m ".gitignore is now working"`

Para deshacer `git rm --cached filename` , use `git add filename`
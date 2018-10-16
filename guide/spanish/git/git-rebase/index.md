---
title: Git Rebase
localeTitle: Ir rebase
---
## Git Rebase

Volver a marcar una rama en Git es una forma de mover la totalidad de una rama a otro punto del árbol. El ejemplo más simple es mover una rama más arriba en el árbol. Digamos que tenemos una rama que divergió de la rama maestra en el punto A:
```
        /o-----o---o--o-----o--------- branch 
 --oo--A--o---o---o---o----o--ooo--- master 
```

Cuando cambies de base puedes moverlo así:
```
                                   /o-----o---o--o-----o------ branch 
 --oo--A--o---o---o---o----o--ooo master 
```

Para reajustar, asegúrese de tener todas las confirmaciones que desea en el rebase en su rama maestra. Echa un vistazo a la sucursal que deseas reajustar y escribe `git rebase master` (donde master es la sucursal en la que deseas reajustar).

También es posible cambiar de base en una rama diferente, de modo que, por ejemplo, una rama que se basó en otra rama (llamémosla característica) se vuelva a basar en el maestro:
```
                            /---oo branch 
           /---oooo---o--o------ feature 
 ----o--ooA----o---o--ooo--o--o- master 
```

Después de `git rebase master branch` o `git rebase master` cuando hayas verificado la sucursal, obtendrás:
```
           /---oooo---o--o------ feature 
 ----o--ooA----o---o--ooo--o--o- master 
                                  \---oo branch 
```

### Git rebase interactivo en la consola.

Para utilizar `git rebase` en la consola con una lista de confirmaciones, puede elegir, editar o soltar en la rebase:

*   Ingrese `git rebase -i HEAD~5` con el último número como cualquier número de confirmaciones del `git rebase -i HEAD~5` más reciente que desea revisar.
*   En vim, presione `esc` , luego `i` para comenzar a editar la prueba.
*   En el lado izquierdo puede sobrescribir la `pick` con uno de los siguientes comandos. Si desea aplastar una confirmación en una anterior y descartar el mensaje de confirmación, ingrese `f` en el lugar de la `pick` de la confirmación.
```
pick 452b159 <message for this commit> 
 pick 7fd4192 <message for this commit> 
 pick c1af3e5 <message for this commit> 
 pick 5f5e8d3 <message for this commit> 
 pick 5186a9f <message for this commit> 
 
 # Rebase 0617e63..5186a9f onto 0617e63 (30 commands) 
 # 
 # Commands: 
 # p, pick = use commit 
 # r, reword = use commit, but edit the commit message 
 # e, edit = use commit, but stop for amending 
 # s, squash = use commit, but meld into previous commit 
 # f, fixup = like "squash", but discard this commit's log message 
 # x, exec = run command (the rest of the line) using shell 
 # d, drop = remove commit 
 # 
 # These lines can be re-ordered; they are executed from top to bottom. 
 # 
 # If you remove a line here THAT COMMIT WILL BE LOST. 
 # 
 # However, if you remove everything, the rebase will be aborted. 
 # 
 # Note that empty commits are commented out 
```

*   Ingrese `esc` seguido de `:wq` para guardar y salir.
*   Si se rebasa con éxito, entonces debes forzar los cambios con `git push -f` para agregar la versión rebasada a tu repositorio de github.
*   Si hay un conflicto de fusión, hay varias formas de solucionarlo, incluso siguiendo las sugerencias de [esta guía](https://help.github.com/enterprise/2.11/user/articles/resolving-a-merge-conflict-using-the-command-line/) . Una forma es abrir los archivos en un editor de texto y eliminar las partes del código que no desea. Luego use `git add <file name>` seguido de `git rebase --continue` . Puede omitir la confirmación en conflicto ingresando `git rebase --skip` , salga de git rebase ingresando `git rebase --abort` en su consola.

### Más información:

*   [Documentación Git: Rebase](https://git-scm.com/docs/git-rebase)
*   [Thoughbot guía interactiva para git rebase](https://robots.thoughtbot.com/git-interactive-rebase-squash-amend-rewriting-history)
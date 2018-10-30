---
title: Git Squash
localeTitle: Git Squash
---
## Git Squash

Una de las cosas que los desarrolladores escuchan a menudo con respecto a sus solicitudes de extracción es algo como "Eso me parece bien, por favor, aplastar y fusionar". La parte divertida es que no existe un comando como `git squash` (a menos que le crees un [alias](https://guide.freecodecamp.org/git/git-rebase) ). `squash` solicitud de extracción significa comúnmente compactar todas las confirmaciones en esta solicitud en una (rara vez a otro número) para hacerla más concisa, legible y no para contaminar el historial de la rama principal. Para lograrlo, el desarrollador debe utilizar **el modo interactivo** del comando [Git Rebase](https://guide.freecodecamp.org/git/git-rebase) .

Muy a menudo, cuando desarrollas alguna característica nueva, terminas con varias confirmaciones intermitentes en tu historial, después de todo, desarrollas incrementalmente. Eso podría ser sólo algunos errores tipográficos o pasos para la solución final. La mayoría de las veces no sirve de nada tener todos estos compromisos en la versión pública final del código, por lo que es más beneficioso tener todos ellos compactados en uno, único y final.

Así que supongamos que tiene el siguiente registro de confirmación en la rama que desea fusionar como parte de la solicitud de extracción:

```shell
$ git log --pretty=oneline --abbrev-commit 
 30374054 Add Jupyter Notebook stub to Data Science Tools 
 8490f5fc Minor formatting and Punctuation changes 
 3233cb21 Prototype for Notebook page 
```

Claramente, preferiríamos tener un solo compromiso aquí, ya que no hay ningún beneficio en saber qué empezamos a escribir y qué errores tipográficos corregimos allí más adelante, solo el resultado final es importante.

Entonces, lo que hacemos es iniciar una sesión de rebase interactiva desde **HEAD** actual (commit **30374054** ) para cometer **3233cb21** , con la intención de combinar **3** confirmaciones más recientes en una:

```shell
$ git rebase -i HEAD~3 
```

Eso abrirá un editor con algo como lo siguiente:

```shell
pick 3233cb21 Prototype for Notebook page 
 pick 8490f5fc Minor formatting and Punctuation changes 
 pick 30374054 Add Jupyter Notebook to Data Science Tools 
 # Rebase 
 # 
 # Commands: 
 #  p, pick = use commit 
 #  r, reword = use commit, but edit the commit message 
 #  e, edit = use commit, but stop for amending 
 #  s, squash = use commit, but meld into previous commit 
 #  f, fixup = like "squash", but discard this commit's log message 
 #  x, exec = run command (the rest of the line) using shell 
 # 
 # These lines can be re-ordered; they are executed from top to bottom. 
 # 
 # If you remove a line here THAT COMMIT WILL BE LOST. 
 # 
 # However, if you remove everything, the rebase will be aborted. 
 # 
 # Note that empty commits are commented out 
```

Como siempre, Git nos da un mensaje de ayuda muy agradable en el que puede ver esta opción de `squash` que estamos buscando.

Actualmente, las instrucciones para el rebase interactivo dicen que debe `pick` cada confirmación específica **y** conservar el mensaje de confirmación correspondiente. Es decir, no cambies nada. Pero queremos tener un solo commit al final. Simplemente edite el texto en su editor reemplazando `pick` con `squash` (o simplemente `s` ) al lado de cada compromiso que deseemos eliminar y guardar / salir del editor. Eso podría verse así:

```shell
s 3233cb21 Prototype for Notebook page 
 s 8490f5fc Minor formatting and Punctuation changes 
 pick 30374054 Add Jupyter Notebook to Data Science Tools 
```

Cuando cierre su editor, guardando estos cambios, se volverá a abrir inmediatamente, lo que sugiere elegir y reformular los mensajes de confirmación. Algo como

```shell
# This is a combination of 3 commits. 
 # The first commit's message is: 
 Prototype for Notebook page 
 
 # This is the 2nd commit message: 
 
 Minor formatting and Punctuation changes 
 
 # This is the 3rd commit message: 
 
 Add Jupyter Notebook to Data Science Tools 
 
 # Please enter the commit message for your changes. Lines starting 
 # with '#' will be ignored, and an empty message aborts the commit. 
```

En este punto, puede eliminar todos los mensajes que no desea que se incluyan en la versión final de confirmación, reformularlos o simplemente escribir un mensaje de confirmación desde cero. Solo recuerda que la nueva versión incluirá todas las líneas que no comienzan con `#` carácter `#` . Una vez más, guarde y salga de su editor.

Ahora su terminal debería mostrar un mensaje de éxito que incluya el `Successfully rebased and updated <branch name>` y el registro de git debe mostrar un historial agradable y compacto con solo un compromiso. ¡Todos los compromisos intermedios se han ido y estamos listos para fusionarnos!

### Advertencia sobre la discrepancia del historial de confirmaciones local y remota

Esta operación es ligeramente peligrosa si ya tiene su sucursal publicada en un repositorio remoto; después de todo, está modificando el historial de confirmación. Así que es mejor hacer la operación de squash en la sucursal local antes de **empujar** . A veces, ya se enviará. ¿Cómo crearía una solicitud de extracción después de todo? En este caso, tendrá que **forzar** los cambios en la rama remota después de hacer el aplastamiento, ya que su historial local y el historial de la rama en el repositorio remoto son diferentes:

`shell $ git push origin +my-branch-name`

Haz lo mejor para asegurarte de que eres el único que usa esta rama remota en este momento, o harás su vida más difícil si no coinciden con el historial. Pero dado que el **aplastamiento** generalmente se realiza como la operación final en una rama antes de deshacerse de él, generalmente no es una preocupación tan grande.
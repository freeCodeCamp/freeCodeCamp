---
title: When to Undoredo
localeTitle: Cuando a undoredo
---
Por lo general, deseará DESHACER / REDO cuando confirme algunos cambios en git y se dé cuenta de que los cambios deben eliminarse o revertirse. Esto es muy común en los escenarios, por ejemplo, cuando hizo un cambio temporal en algunos archivos y se olvidó de revertirlos, luego procedió a agregarlos para cometerlos accidentalmente.

## El flujo de trabajo UNDO / REDO:

Suponiendo que hiciste algunos cambios y cometes como:
```
git commit -m "Commit 1 - Some changes to the code" 
 git commit -m "Commit 2 - Some MORE changes to the code" 
```

1.  (Deshacer): revertir el último `git reset --soft HEAD~` confirmación `git reset --soft HEAD~`
2.  _Haz los cambios._
3.  Agregue sus archivos al área de almacenamiento `git add <filenames or paths>` o `git add --all`
4.  (REDUCIENDO): Haz el commit. `git commit -c ORIG_HEAD` o `git commit -C ORIG_HEAD`

## ¿Como funciona esto?

Ahora que sabes el flujo, entendamos cómo funciona esto detrás de escena.

1.  `Step 1` restablece la última confirmación, es decir, `"Commit 2 - Some MORE..."` nuevo a la confirmación `"Commit 1 - Some..."` .
2.  En el `Step 2` , usted hace los cambios que considere adecuados para los archivos.
3.  En el `Step 3` , agrega los archivos modificados al área de almacenamiento de manera selectiva con `git add <filenames>` o todos los archivos con `git add --all` .
4.  En el paso final se comprometen los cambios en el área de preparación.

Nota: puedes usar `-c` o `-C` . La pequeña `-c` abrirá un editor para modificar el mensaje de confirmación, en este caso será `Commit 2 - Some MORE...` Puede editar el mensaje de confirmación como desee.

O alternativamente, puede usar mayúsculas `-C` , donde git saltará la ventana del editor, y reutilizará el _ÚLTIMO_ mensaje de confirmación, que nuevamente en este caso es `Commit 2 - Some MORE...`

Reutilizar el mensaje de confirmación "Igual" también se conoce como rehacer / volver a enviar.

## Unstage antes de un commit

Para deshacer un cambio realizado antes de una confirmación, simplemente ejecute `git reset <file>` o `git reset` para anular todas las modificaciones antes de realizar una confirmación.

Nota: En versiones anteriores de git, los comandos eran `git reset HEAD <file>` y `git reset HEAD` respectivamente. Esto fue cambiado en Git 1.8.2

## Algunos trucos más:

Puede retroceder cualquier número de confirmaciones usando `git reset --soft HEAD~n` donde desee deshacer las últimas `n` confirmaciones.

## Atribución:

Este artículo se basa en una pregunta de desbordamiento de pila [aquí](http://stackoverflow.com/questions/927358/how-do-you-undo-the-last-commit/927386#927386) y [aquí](http://stackoverflow.com/questions/348170/undo-git-add-before-commit/348234#348234) .
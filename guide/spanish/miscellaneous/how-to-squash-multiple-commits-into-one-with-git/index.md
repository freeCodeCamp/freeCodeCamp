---
title: How to Squash Multiple Commits into One with Git
localeTitle: Cómo aplastar múltiples compromisos en uno con Git
---
Esta es una característica impresionante de `rebase` que se puede usar en el modo `interactive` . Para aplastar los últimos _n_ compromisos en uno, ejecute el siguiente comando:
```
git rebase -i HEAD~n 
```

Eso abrirá un editor de texto con algo similar a lo siguiente:
```
pick commit_1 
 pick commit_2 
 pick commit_3 
 ... 
 pick commit_n 
 # Bunch of comments 
```

Deje el primer compromiso solo y cambie el resto de las `pick` a `squash` . Guardar y salir del editor.

Entonces, si desea aplastar los últimos tres confirmaciones, primero ejecutará `git rebase -i HEAD~3` y luego querrá editar sus confirmaciones para ver algo como esto:
```
pick dd661ba Commit 1 
 squash 71f5fee Commit 2 
 squash f4b4bf1 Commit 3 
```

Si ya presionó un control remoto antes de aplastar sus compromisos, tendrá que presionar el control remoto nuevamente, con la `-f` , de lo contrario git le arrojará un error.

Se recomienda encarecidamente que lea la información en el archivo abierto ya que hay muchas cosas que puede hacer.
---
title: Git Revert
localeTitle: Git Revert
---
## Git Revert

El comando `git revert` deshace una confirmación, pero a diferencia de `git reset` , que elimina la confirmación del historial de confirmación, agrega una nueva confirmación con el contenido resultante. Esto evita que Git pierda el historial, lo cual es importante para la integridad de su historial de revisiones y para una colaboración confiable. Cuando está trabajando en un repositorio con otros desarrolladores, usar `git reset` es altamente peligroso porque altera el historial de confirmaciones, lo que hace que sea muy difícil mantener un historial consistente de confirmaciones con otros desarrolladores.

### Opciones comunes

1.) Esta es una opción predeterminada y no necesita ser especificada. Esta opción abrirá el editor del sistema configurado y le pedirá que edite el mensaje de confirmación antes de confirmar la reversión.

```shell
  -e 
  --edit 
```

2.) Este es el inverso de la opción -e. El `revert` no abrirá el editor.

```shell
  --no-edit 
```

3.) Pasar esta opción evitará que `git revert` cree un nuevo commit que invierta el target target. En lugar de crear la nueva confirmación, esta opción agregará los cambios inversos al Índice de transición y al Directorio de trabajo.

```shell
  -n 
  --no-edit 
```

### Ejemplo.

Imaginemos la siguiente situación. 1.) Está trabajando en un archivo y agrega y confirma sus cambios. 2.) Luego trabajas en algunas otras cosas, y haces más confirmaciones. 3.) Ahora te das cuenta, hace tres o cuatro confirmaciones, hiciste algo que te gustaría deshacer. ¿Cómo puedes hacer esto?

Puede que estés pensando, solo usa `git reset` , pero esto eliminará todos los confirmaciones después de la que te gustaría cambiar: ¡ `git revert` al rescate! Veamos este ejemplo:

```shell
mkdir learn_revert # Create a folder called `learn_revert` 
 cd learn_revert # `cd` into the folder `learn_revert` 
 git init # Initialize a git repository 
 
 touch first.txt # Create a file called `first.txt` 
 echo Start >> first.txt # Add the text "Start" to `first.txt` 
 
 git add . # Add the `first.txt` file 
 git commit -m "adding first" # Commit with the message "Adding first.txt" 
 
 echo WRONG > wrong.txt # Add the text "WRONG" to `wrong.txt` 
 git add . # Add the `wrong.txt` file 
 git commit -m "adding WRONG to wrong.txt" # Commit with the message "Adding WRONG to wrong.txt" 
 
 echo More >> first.txt # Add the text "More" to `first.txt` 
 git add . # Add the `first.txt` file 
 git commit -m "adding More to first.txt" # Commit with the message "Adding More to first.txt" 
 
 echo Even More >> first.txt # Add the text "Even More" to `first.txt` 
 git add . # Add the `first.txt` file 
 git commit -m "adding Even More to First.txt" # Commit with the message "Adding More to first.txt" 
 
 # OH NO! We want to undo the commit with the text "WRONG" - let's revert! Since this commit was 2 from where we are not we can use git revert HEAD~2 (or we can use git log and find the SHA of that commit) 
 
 git revert HEAD~2 # this will put us in a text editor where we can modify the commit message. 
 
 ls # wrong.txt is not there any more! 
 git log --oneline # note that the commit history hasn't been altered, we've just added a new commit reflecting the removal of the `wrong.txt` 
```

#### Más información:

*   [Git revertir documentación](https://git-scm.com/docs/git-revert)
*   [Git revertir tutorial interactivo](https://www.atlassian.com/git/tutorials/undoing-changes/git-revert)
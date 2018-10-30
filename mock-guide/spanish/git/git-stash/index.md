---
title: Git Stash
localeTitle: Git Stash
---
## Git Stash

Git tiene un área llamada el alijo donde puede almacenar temporalmente una instantánea de sus cambios sin confirmarlos en el repositorio. Es independiente del directorio de trabajo, el área de preparación o el repositorio.

Esta funcionalidad es útil cuando ha realizado cambios en una rama que no está listo para realizar, pero necesita cambiar a otra rama.

### Cambios de Stash

Para guardar sus cambios en el alijo, ejecute el comando:

```shell
git stash save "optional message for yourself" 
```

Esto guarda sus cambios y revierte el directorio de trabajo a lo que parecía para la última confirmación. Los cambios ocultos están disponibles desde cualquier sucursal en ese repositorio.

Tenga en cuenta que los cambios que desea ocultar deben estar en archivos rastreados. Si creó un nuevo archivo e intenta guardar los cambios, puede obtener el error `No local changes to save` .

### Ver cambios ocultos

Para ver lo que está en su alijo, ejecute el comando:

```shell
git stash list 
```

Esto devuelve una lista de sus instantáneas guardadas en el formato `stash@{0}: BRANCH-STASHED-CHANGES-ARE-FOR: MESSAGE` . La parte de `stash@{0}` es el nombre del alijo, y el número entre las llaves ( `{ }` ) es el índice de ese alijo. Si tiene varios conjuntos de cambios ocultos, cada uno tendrá un índice diferente.

Si olvidó qué cambios se hicieron en el alijo, puede ver un resumen de ellos con el `git stash show NAME-OF-STASH` . Si desea ver el diseño típico de parches de estilo dif (con los + y - para los cambios de línea por línea), puede incluir la opción `-p` (para parche). Aquí hay un ejemplo:

```shell
git stash show -p stash@{0} 
 
 # Example result: 
 diff --git a/PathToFile/fileA b/PathToFile/fileA 
 index 2417dd9..b2c9092 100644 
 --- a/PathToFile/fileA 
 +++ b/PathToFile/fileA 
 @@ -1,4 +1,4 @@ 
 -What this line looks like on branch 
 +What this line looks like with stashed changes 
```

### Recuperar cambios ocultos

Para recuperar los cambios fuera del alijo y aplicarlos a la rama actual en la que está, tiene dos opciones:

1.  `git stash apply STASH-NAME` aplica los cambios y deja una copia en el stash
2.  `git stash pop STASH-NAME` aplica los cambios y elimina los archivos del alijo

Puede haber conflictos al aplicar cambios. Puede resolver los conflictos similares a una combinación ( [consulte la combinación de Git para obtener detalles](https://guide.freecodecamp.org/git/git-merge/) ).

### Eliminar cambios ocultos

Si desea eliminar los cambios ocultos sin aplicarlos, ejecute el comando:

```shell
git stash drop STASH-NAME 
```

Para borrar todo el alijo, ejecute el comando:

```shell
git stash clear 
```

### Más información:

*   El comando `git merge` : [fCC Guide](https://guide.freecodecamp.org/git/git-merge/)
*   Documentación Git: [Stash](https://git-scm.com/docs/git-stash)
---
title: Git Reset
localeTitle: Git Reset
---
## Git Reset

El comando `git reset` te permite RESTAURAR tu cabeza actual a un estado específico. Puede restablecer el estado de archivos específicos, así como una rama completa.

### Restablecer un archivo o conjunto de archivos

El siguiente comando le permite elegir de forma selectiva fragmentos de contenido y revertirlo o deseleccionarlo.

```shell
git reset (--patch | -p) [tree-ish] [--] [paths] 
```

### Unstage un archivo

Si movió un archivo al área de preparación con `git add` , pero ya no quiere que forme parte de una confirmación, puede usar `git reset` para eliminar el escenario de ese archivo:

```shell
git reset HEAD FILE-TO-UNSTAGE 
```

Los cambios que realizó aún estarán en el archivo, este comando simplemente elimina ese archivo de su área de preparación.

### Restablecer una rama a una confirmación previa

El siguiente comando restablece la CABEZA de su sucursal actual al `COMMIT` dado y actualiza el índice. Básicamente, rebobina el estado de su rama, luego todas las confirmaciones que haga adelante, escriben sobre todo lo que vino después del punto de reinicio. Si omite el `MODE` , el valor predeterminado es - `--mixed` :

```shell
git reset MODE COMMIT 
```

Las opciones para `MODE` son:

*   `--soft` : no restablece el archivo de índice o el árbol de trabajo, pero restablece HEAD para `commit` . Cambia todos los archivos a "Cambios para ser comprometidos"
*   `--mixed` : restablece el índice pero no el árbol de trabajo e informa lo que no se ha actualizado
*   `--hard` : restablece el índice y el árbol de trabajo. Cualquier cambio en los archivos rastreados en el árbol de trabajo desde `commit` se desecha la `commit`
*   `--merge` : restablece el índice y actualiza los archivos en el árbol de trabajo que son diferentes entre `commit` y HEAD, pero mantiene aquellos que son diferentes entre el índice y el árbol de trabajo
*   `--keep` : restablece las entradas de índice y actualiza los archivos en el árbol de trabajo que son diferentes entre `commit` y HEAD. Si un archivo que es diferente entre `commit` y HEAD tiene cambios locales, el reinicio se cancela

### Más información:

*   [Git restablecer documentación](https://git-scm.com/docs/git-reset)
---
title: Git Merge
localeTitle: Git Merge
---
## Git Merge

El comando `git merge` fusionará cualquier cambio que se haya realizado en la base del código en una rama separada de su rama actual.

La sintaxis del comando es la siguiente:

```shell
git merge BRANCH-NAME 
```

Por ejemplo, si actualmente está trabajando en una rama llamada `dev` y le gustaría fusionar los cambios nuevos que se hicieron en una rama llamada `new-features` , emitiría el siguiente comando:

```shell
git merge new-features 
```

**Tenga en cuenta:** Si hay cambios no confirmados en su sucursal actual, Git no le permitirá fusionarse hasta que se hayan confirmado todos los cambios en su sucursal actual. Para manejar esos cambios, puede:

*   Crea una nueva rama y confirma los cambios.

```shell
git checkout -b new-branch-name 
 git add . 
 git commit -m "<your commit message>" 
```

*   Esconderlos

```shell
git stash               # add them to the stash 
 git merge new-features  # do your merge 
 git stash pop           # get the changes back into your working tree 
```

*   Abandonarlo todo

```shell
git reset --hard        # removes all pending changes 
```

## Conflicto de fusión

Un conflicto de combinación es cuando realiza confirmaciones en ramas separadas que alteran la misma línea de manera conflictiva. Por lo tanto, Git no sabrá qué versión del archivo mantener

dando como resultado el mensaje de error:

CONFLICTO (contenido): Combinar conflicto en resumé.txt La fusión automática falló; Solucionar conflictos y luego cometer el resultado.

En el editor de código, Git usa marcas para indicar la versión HEAD (maestra) del archivo y la otra versión del archivo.

`<<<<<<< HEAD`

`>>>>>>> OTHER`

Desde el editor de código, elimine / actualice para resolver conflictos y elimine las marcas especiales, incluidos los nombres de archivos HEAD y OTHER, vuelva a cargar su archivo, luego vuelva a agregar y vuelva a confirmar los cambios.

Para obtener más información sobre el comando `git merge` y todas las opciones disponibles, consulte la [documentación de Git](https://git-scm.com/docs/git-merge) .
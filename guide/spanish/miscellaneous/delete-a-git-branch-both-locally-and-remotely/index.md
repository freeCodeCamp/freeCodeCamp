---
title: Delete a Git Branch Both Locally and Remotely
localeTitle: Eliminar una sucursal de Git local y remotamente
---
// localmente ((si sabes lo que estás haciendo!) git branch -d localBranchName
```
// and then if you need to... 
 // on remote 
 git push origin :remoteBranchName 
```

## ¿Cuándo eliminar ramas?

Normalmente, en un flujo de contribución, las `Branches` son una excelente manera de trabajar en diferentes características, arreglos, etc., a la vez que se aíslan de la base de código principal. Por lo tanto, un repositorio puede tener una rama `master` y ramas separadas para trabajar en diferentes características.

Normalmente, una vez que se completa el trabajo en una función y se recomienda eliminar la rama.

## El flujo de trabajo Eliminar:

Digamos que tienes un repo llamado como `AwesomeRepo` , y está alojado en Github, en una ubicación como `https://github.com/my_username/AwesomeRepo` .

También vamos a suponer que tiene las ramas como:  
`master`  
`feature/some-cool-new-stuff`  
`fix/authentication`  
`staging`

Por coherencia, asumiremos que los nombres de las sucursales son los mismos tanto en el `local` como en el `remote` .

Ahora, digamos que ha terminado con esa corrección para la autenticación y desea eliminar la `fix/authentication` la rama.

## Eliminar la rama a distancia:

Simplemente haz:

`git push --delete <remote> <branch>` .

Por ejemplo: `git branch --delete origin fix/authentication`

Si recibe el error
```
error: unable to push to unqualified destination: remoteBranchName The destination refspec neither matches an existing ref on the remote nor begins with refs/, and we are unable to guess a prefix based on the source ref. error: failed to push some refs to 'git@repository_name' 
```

Tal vez alguien más ya ha eliminado la rama. Intenta sincronizar tu lista de sucursales usando
```
git fetch -p 
```

El manual de git dice -p, --prune Después de buscar, elimine cualquier rama de seguimiento remoto que ya no exista en el control remoto.

## Eliminando la rama LOCALMENTE:

Primero pague en una sucursal que no sea la que desea eliminar:

`git checkout <branch>` .

Por ejemplo: `git checkout master`

Git no te permitirá eliminar la rama en la que estás actualmente.

Luego proceda con la eliminación de:

`git branch -D <branch>` .

Por ejemplo: `git branch -D fix/authentication`
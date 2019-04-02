---
title: Cloning All Remote Branches in Git
localeTitle: Clonando todas las sucursales remotas en Git
---
Para clonar un repositorio de git remoto, ingrese lo siguiente en el terminal:

> Nota: Asegúrese de estar en una carpeta raíz, por ejemplo, `webdev` lugar de una carpeta específica del proyecto.
```
git clone <remote_repo> 
 cd <remote_repo> 
```

Haz una lista de tus ramas usando estos comandos:
```
git branch // Lists local branches 
 git branch -a // Lists local and remote branches 
```

Para pagar una sucursal remota localmente:
```
git checkout <branch> 
```

Aquí hay un ejemplo de cómo obtener la rama `master` remota de FreeCodeCamp:
```
git clone https://github.com/FreeCodeCamp/FreeCodeCamp.git 
 cd FreeCodeCamp 
 git checkout master 

```
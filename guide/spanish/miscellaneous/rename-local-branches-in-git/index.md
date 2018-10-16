---
title: Rename Local Branches in Git
localeTitle: Renombrar sucursales locales en Git
---
Para cambiar el nombre de una sucursal local, ingrese lo siguiente en el terminal:

> `-m` significa movimiento, al igual que `mv` se usa en linux para cambiar el nombre de los archivos.
```
git branch -m <oldname> <newname> 
```

Si ya ha revisado la sucursal que desea cambiar:
```
git branch -m <newname> 
```

Aquí hay un ejemplo de cambio de nombre de la rama de `feature/react-challenges` para `fix/react-hikes` de FreeCodeCamp:
```
git checkout feature/react-challenges 
 git branch -m fix/react-hikes 

```
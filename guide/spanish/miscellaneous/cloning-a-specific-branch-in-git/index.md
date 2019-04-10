---
title: Cloning a Specific Branch in Git
localeTitle: Clonando una rama específica en Git
---
Para clonar una rama, ingrese lo siguiente en el terminal:
```
git clone -b <branch> <remote_repo> 
```

Si solo quieres recuperar la rama especificada:
```
git clone -b <branch> --single-branch <remote_repo> 
```

He aquí un ejemplo de traer la `staging` rama de FreeCodeCamp:
```
git clone -b staging https://github.com/FreeCodeCamp/FreeCodeCamp.git 

```
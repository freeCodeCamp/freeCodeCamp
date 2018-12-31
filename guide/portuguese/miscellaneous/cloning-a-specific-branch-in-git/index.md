---
title: Cloning a Specific Branch in Git
localeTitle: Clonando uma ramificação específica no Git
---
Para clonar uma ramificação, digite o seguinte no terminal:
```
git clone -b <branch> <remote_repo> 
```

Se você quiser apenas buscar o ramo especificado:
```
git clone -b <branch> --single-branch <remote_repo> 
```

Aqui está um exemplo de busca da ramificação de `staging` do FreeCodeCamp:
```
git clone -b staging https://github.com/FreeCodeCamp/FreeCodeCamp.git 

```
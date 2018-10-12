---
title: Rename Local Branches in Git
localeTitle: Переименование местных филиалов в Git
---
Чтобы переименовать локальную ветвь, введите в терминал следующее:

> `-m` означает перемещение, так же как `mv` используется в linux для переименования файлов.
```
git branch -m <oldname> <newname> 
```

Если вы уже проверили филиал, который хотите изменить:
```
git branch -m <newname> 
```

Ниже приведен пример переименования ветви `feature/react-challenges` для `fix/react-hikes` из FreeCodeCamp:
```
git checkout feature/react-challenges 
 git branch -m fix/react-hikes 

```
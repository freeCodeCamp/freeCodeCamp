---
title: Cloning a Specific Branch in Git
localeTitle: Клонирование конкретной ветви в Git
---
Чтобы клонировать ветвь, введите в терминал следующее:
```
git clone -b <branch> <remote_repo> 
```

Если вы хотите получить только указанную ветку:
```
git clone -b <branch> --single-branch <remote_repo> 
```

Ниже приведен пример получения `staging` ветви из FreeCodeCamp:
```
git clone -b staging https://github.com/FreeCodeCamp/FreeCodeCamp.git 

```
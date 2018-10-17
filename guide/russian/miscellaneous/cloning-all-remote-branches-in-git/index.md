---
title: Cloning All Remote Branches in Git
localeTitle: Клонирование всех удаленных филиалов в Git
---
Чтобы клонировать удаленный репозиторий git, введите в терминал следующее:

> Примечание. Убедитесь, что вы находитесь в корневой папке, например `webdev` а не в конкретной папке проекта.
```
git clone <remote_repo> 
 cd <remote_repo> 
```

Перечислите свои ветви, используя следующие команды:
```
git branch // Lists local branches 
 git branch -a // Lists local and remote branches 
```

Чтобы проверить локальную удаленную ветвь:
```
git checkout <branch> 
```

Ниже приведен пример получения удаленной ветви `master` из FreeCodeCamp:
```
git clone https://github.com/FreeCodeCamp/FreeCodeCamp.git 
 cd FreeCodeCamp 
 git checkout master 

```
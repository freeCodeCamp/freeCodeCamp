---
title: Change the Url of a Remote Repository
localeTitle: Изменение URL удаленного хранилища
---
Команда `git remote set-url` изменяет существующий URL удаленного репозитория.

**Эта команда принимает два аргумента:**

1.  Существующее удаленное имя. Например, происхождение или восходящий поток - это два общих варианта.
    
2.  Новый URL-адрес удаленного. Например, `https://github.com/USERNAME/OTHERREPOSITORY.git`
    

**Таким образом, чтобы изменить URL-адрес удаленного репозитория, вы должны сделать что-то вроде этого:**

1.  Просмотр существующего удаленного репозитория:

`git remote -v`

1.  Измените URL-адрес удаленного репозитория:

`git remote set-url origin https://github.com/USERNAME/OTHERREPOSITORY.git`

1.  И вы можете проверить новый удаленный репозиторий, выполнив:

`git remote -v`

_Для получения дополнительной информации ознакомьтесь с [этой статьей github.](https://help.github.com/articles/changing-a-remote-s-url/)_
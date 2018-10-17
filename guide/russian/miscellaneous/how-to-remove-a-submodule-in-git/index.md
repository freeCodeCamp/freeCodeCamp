---
title: How to Remove a Submodule in Git
localeTitle: Как удалить субмодуль в Git
---
Удаление подмодуля полезно, когда оно больше не требуется. В приведенных ниже шагах описывается удаление подмодуля.

## Удалить субмодуль

*   Удалить раздел, относящийся к подмодулю из файла `.gitmodules`
*   `git add .gitmodules` изменения через `git add .gitmodules`
*   Удалите соответствующий раздел подмодуля из `.git/config` .
*   Запустить `git rm --cached path_to_submodule` (без косой черты)
*   Запустить `rm -rf .git/modules/path_to_submodule`
*   Зафиксируйте изменения с помощью \`git commit -m 'Удаленный подмодуль"
*   Удалите теперь необработанные файлы подмодуля `rm -rf path_to_submodule`

## источники

*   [Stackoverflow - Как удалить подмодуль](http://stackoverflow.com/questions/1260748/how-do-i-remove-a-submodule)
*   [git.wiki.kernel.org - удаление подмодуля Git](https://git.wiki.kernel.org/index.php/GitSubmoduleTutorial#Removal)
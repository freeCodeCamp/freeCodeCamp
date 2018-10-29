---
title: Untrack Files Previously Committed from New Gitignore
localeTitle: Отслеживание файлов, ранее совершенных с помощью нового Gitignore
---
Чтобы разобрать _один_ файл, то есть остановить отслеживание файла, но не удалять его из системы:

`git rm --cached filename`

Чтобы не проверять _каждый_ файл в `.gitignore` :

Сначала **выполните** любые незавершенные изменения кода, а затем запустите:

`git rm -r --cached`

Это удаляет любые измененные файлы из индекса (промежуточной области), а затем запускает:

`git add .`

Зафиксируйте это:

`git commit -m ".gitignore is now working"`

Чтобы отменить `git rm --cached filename` , используйте `git add filename`
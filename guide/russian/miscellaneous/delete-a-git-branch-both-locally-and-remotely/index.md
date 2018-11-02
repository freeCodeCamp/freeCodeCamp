---
title: Delete a Git Branch Both Locally and Remotely
localeTitle: Удалите сектор Git как локально, так и удаленно
---
// локально ((если вы знаете, что делаете!) git branch -d localBranchName
```
// and then if you need to... 
 // on remote 
 git push origin :remoteBranchName 
```

## Когда удалять ветки?

Обычно в потоке вклада `Branches` - отличный способ работать с различными функциями, исправлениями и т. Д., Изолируя их от основной кодовой базы. Таким образом, репо может иметь `master` ветвь и отдельные ветви для работы с различными функциями.

Как правило, после завершения работы над функцией и рекомендуется удалить ветку.

## Рабочий процесс Delete:

`AwesomeRepo` , у вас есть репо, называемое `AwesomeRepo` , и его размещение в Github в таком месте, как `https://github.com/my_username/AwesomeRepo` .

Также предположим, что у него есть ветви вроде:  
`master`  
`feature/some-cool-new-stuff`  
`fix/authentication`  
`staging`

Для согласованности мы будем предполагать, что имена ветвлений одинаковы как на `local` так и на `remote` .

Теперь давайте скажем, что вы сделали это исправление для аутентификации и хотите удалить `fix/authentication` филиала.

## Удаление ветки REMOTELY:

Просто выполните:

`git push --delete <remote> <branch>` .

Например: `git branch --delete origin fix/authentication`

Если вы получите ошибку
```
error: unable to push to unqualified destination: remoteBranchName The destination refspec neither matches an existing ref on the remote nor begins with refs/, and we are unable to guess a prefix based on the source ref. error: failed to push some refs to 'git@repository_name' 
```

Возможно, кто-то еще удалил ветку. Попробуйте синхронизировать список филиалов, используя
```
git fetch -p 
```

В руководстве git указано -p, --prune После извлечения удалите все ветви удаленного отслеживания, которые больше не существуют на пульте дистанционного управления.

## Удаление ветки ЛОКАЛЬНО:

Первая проверка в другую ветку, которую вы хотите удалить:

`git checkout <branch>` .

Например: `git checkout master`

Git не позволит вам удалить филиал, в котором вы сейчас находитесь.

Затем приступайте к удалению:

`git branch -D <branch>` .

Например: `git branch -D fix/authentication`
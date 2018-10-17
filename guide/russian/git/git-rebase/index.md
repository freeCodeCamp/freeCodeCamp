---
title: Git Rebase
localeTitle: Go Rebase
---
## Git Rebase

Сброс ветви в Git - это способ переместить всю ветвь в другую точку дерева. Простейшим примером является перемещение ветви дальше вверх по дереву. Скажем, у нас есть ветвь, которая расходится с главной ветвью в точке А:
```
        /o-----o---o--o-----o--------- branch 
 --oo--A--o---o---o---o----o--ooo--- master 
```

Когда вы переустанавливаете, вы можете переместить его так:
```
                                   /o-----o---o--o-----o------ branch 
 --oo--A--o---o---o---o----o--ooo master 
```

Чтобы переустановить, убедитесь, что у вас есть все коммиты, которые вы хотите в rebase в основной ветке. Проверьте ветку, которую вы хотите переустановить, и введите `git rebase master` (где master - это ветка, которую вы хотите переустановить).

Также можно переупаковать другую ветку, так что, например, ветвь, основанная на другой ветке (давайте назовем ее функцией), будет переустановлена ​​на master:
```
                            /---oo branch 
           /---oooo---o--o------ feature 
 ----o--ooA----o---o--ooo--o--o- master 
```

После того, как `git rebase master branch` или `git rebase master` когда вы проверили ветку, вы получите:
```
           /---oooo---o--o------ feature 
 ----o--ooA----o---o--ooo--o--o- master 
                                  \---oo branch 
```

### Git rebase интерактивный в консоли

Чтобы использовать `git rebase` в консоли со списком коммитов, вы можете выбрать, отредактировать или удалить в rebase:

*   Введите `git rebase -i HEAD~5` при этом последним номером будет любое количество фиксаций из последних обратных ссылок, которые вы хотите просмотреть.
*   В vim нажмите `esc` , затем `i` чтобы начать редактирование теста.
*   С левой стороны вы можете переписать `pick` одной из приведенных ниже команд. Если вы хотите раздавить коммит в предыдущем и отменить сообщение о фиксации, введите `f` в место `pick` фиксации.
```
pick 452b159 <message for this commit> 
 pick 7fd4192 <message for this commit> 
 pick c1af3e5 <message for this commit> 
 pick 5f5e8d3 <message for this commit> 
 pick 5186a9f <message for this commit> 
 
 # Rebase 0617e63..5186a9f onto 0617e63 (30 commands) 
 # 
 # Commands: 
 # p, pick = use commit 
 # r, reword = use commit, but edit the commit message 
 # e, edit = use commit, but stop for amending 
 # s, squash = use commit, but meld into previous commit 
 # f, fixup = like "squash", but discard this commit's log message 
 # x, exec = run command (the rest of the line) using shell 
 # d, drop = remove commit 
 # 
 # These lines can be re-ordered; they are executed from top to bottom. 
 # 
 # If you remove a line here THAT COMMIT WILL BE LOST. 
 # 
 # However, if you remove everything, the rebase will be aborted. 
 # 
 # Note that empty commits are commented out 
```

*   Введите `esc` а затем `:wq` чтобы сохранить и выйти.
*   Если он успешно восстанавливается, вам нужно принудительно нажать свои изменения с помощью `git push -f` чтобы добавить измененную версию в репозиторий github.
*   Если существует конфликт слиянием, существует ряд способов исправить это, в том числе следующие рекомендации в [этом руководстве](https://help.github.com/enterprise/2.11/user/articles/resolving-a-merge-conflict-using-the-command-line/) . Один из способов - открыть файлы в текстовом редакторе и удалить части кода, который вам не нужен. Затем используйте `git add <file name>` за которым следует `git rebase --continue` . Вы можете пропустить конфликтное сообщение, введя `git rebase --skip` , выйти из git `git rebase --skip` , введя `git rebase --abort` в консоли.

### Дополнительная информация:

*   [Документация Git: rebase](https://git-scm.com/docs/git-rebase)
*   [Хотя интерактивный путеводитель по git rebase](https://robots.thoughtbot.com/git-interactive-rebase-squash-amend-rewriting-history)
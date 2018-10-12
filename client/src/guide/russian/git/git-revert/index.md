---
title: Git Revert
localeTitle: Git Revert
---
## Git Revert

Команда `git revert` отменяет фиксацию, но в отличие от `git reset` , которая удаляет фиксацию из истории фиксации, она добавляет новый коммит с полученным контентом. Это позволяет Git потерять историю, что важно для целостности вашей истории изменений и для надежного сотрудничества. Когда вы работаете в репозитории с другими разработчиками, использование `git reset` крайне опасно, потому что вы изменяете историю коммитов, что затрудняет сохранение последовательной истории коммитов с другими разработчиками.

### Общие параметры

1.) Это опция по умолчанию и ее не нужно указывать. Эта опция откроет сконфигурированный системный редактор и предложит вам отредактировать сообщение фиксации до того, как оно будет выполнено.

```shell
  -e 
  --edit 
```

2.) Это инверсия параметра -e. `revert` не откроет редактор.

```shell
  --no-edit 
```

3.) Передача этого параметра предотвратит `git revert` от создания нового коммита, который инвертирует целевую фиксацию. Вместо создания нового коммита эта опция добавит обратные изменения в индекс Staging и рабочий каталог.

```shell
  -n 
  --no-edit 
```

### Пример.

Представим себе следующую ситуацию. 1.) Вы работаете над файлом, и вы добавляете и фиксируете свои изменения. 2.) Затем вы работаете над несколькими другими вещами и делаете еще несколько попыток. 3.) Теперь вы понимаете, что три или четыре месяца назад вы сделали то, что хотели бы отменить - как вы можете это сделать?

Возможно, вы думаете, просто используйте `git reset` , но это удалит все коммиты после того, который вы хотели бы изменить - `git revert` к спасению! Давайте рассмотрим этот пример:

```shell
mkdir learn_revert # Create a folder called `learn_revert` 
 cd learn_revert # `cd` into the folder `learn_revert` 
 git init # Initialize a git repository 
 
 touch first.txt # Create a file called `first.txt` 
 echo Start >> first.txt # Add the text "Start" to `first.txt` 
 
 git add . # Add the `first.txt` file 
 git commit -m "adding first" # Commit with the message "Adding first.txt" 
 
 echo WRONG > wrong.txt # Add the text "WRONG" to `wrong.txt` 
 git add . # Add the `wrong.txt` file 
 git commit -m "adding WRONG to wrong.txt" # Commit with the message "Adding WRONG to wrong.txt" 
 
 echo More >> first.txt # Add the text "More" to `first.txt` 
 git add . # Add the `first.txt` file 
 git commit -m "adding More to first.txt" # Commit with the message "Adding More to first.txt" 
 
 echo Even More >> first.txt # Add the text "Even More" to `first.txt` 
 git add . # Add the `first.txt` file 
 git commit -m "adding Even More to First.txt" # Commit with the message "Adding More to first.txt" 
 
 # OH NO! We want to undo the commit with the text "WRONG" - let's revert! Since this commit was 2 from where we are not we can use git revert HEAD~2 (or we can use git log and find the SHA of that commit) 
 
 git revert HEAD~2 # this will put us in a text editor where we can modify the commit message. 
 
 ls # wrong.txt is not there any more! 
 git log --oneline # note that the commit history hasn't been altered, we've just added a new commit reflecting the removal of the `wrong.txt` 
```

#### Дополнительная информация:

*   [Git возвращает документацию](https://git-scm.com/docs/git-revert)
*   [Git вернет интерактивный учебник](https://www.atlassian.com/git/tutorials/undoing-changes/git-revert)
---
title: Git Show
localeTitle: Git Show
---
## Git Show

`git show` - это удобная команда, которая позволяет вам увидеть подробный вид данного объекта (фиксации, метки, капли и деревья).

Синтаксис этой команды следующий:

```bash
git show [<options>] [<object>…​]
```

Для разных git-объектов `git show` дает разные выходы.

*   он фиксирует сообщение с сообщением о фиксации с различными изменениями, которые были зафиксированы.
*   Для тегов он показывает сообщение тега и ссылки на объекты.
*   Для деревьев он показывает имена
*   Для простых капель это показывает простое содержимое

Наиболее распространенное использование `git show` будет связано с объектом git commit

```bash
git show 3357d63
```

Вы получите аналогичный результат,
```
commit 3357d63d8f44104940e568a1ba89fa88a16dc753
 Author: John Doe <johndoe@acme.com>
 Date:   Tue Oct 2 00:57:38 2018 +0530

    add a section on git commit --amend --author

 diff --git a/src/pages/git/git-commit/index.md b/src/pages/git/git-commit/index.md
 index fc9f568..8f1c8eb 100644
 --- a/src/pages/git/git-commit/index.md
 +++ b/src/pages/git/git-commit/index.md
 @@ -73,5 +73,11 @@ Premature commits happen all the time in the course of your day-to-day developme

 Amended commits are actually entirely new commits and the previous commit will no longer be on your current branch. When you're working with others, you should try to avoid amending commits if the last commit is already pushed into the repository.

 +With `--amend`, one of the useful flag you could use is `--author` which enables you to change the author of the last commit you've made. Imagine a situation you haven't properly set up your name or email in git configurations but you already made a commit. With `--author` flag you can simply change them without resetting the last commit.
 +
 +```
 +git commit --amend --author="John Doe <johndoe@email.com>"
 +```
 +
 ### More Information:
 - Git documentation: [commit](https://git-scm.com/docs/git-commit)
```

Вы можете просто использовать `git show` и он отобразит содержимое последней git-фиксации.

### Дополнительная информация:

*   [Документация Git - показать](https://git-scm.com/docs/git-show)
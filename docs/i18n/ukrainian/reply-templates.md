# Шаблони відповідей

Це шаблони відповідей, які можна використовувати під час розгляду PR/завдань та їх сортування.

> Ви можете створити власний список збережених відповідей за допомогою вбудованої функції [збережених відповідей](https://github.com/settings/replies/) на GitHub або використовувати подані нижче.

## Подяка

```markdown
Thank you for your contribution to the page! 👍
We are happy to accept these changes and look forward to future contributions. 🎉
```

## Подяка та вітання

> Подяка та заохочення помічників-початківців.

```markdown
Hi @username. Congrats on your first pull request (PR)! 🎉

Thank you for your contribution to the page! 👍
We are happy to accept these changes and look forward to future contributions. 📝
```

## Помилка збірки

```markdown
Hey @username

We would love to be able to merge your changes but it looks like there is an error with the CI build. ⚠️

Once you resolve these issues, we will be able to review your PR and merge it. 😊

---

Feel free to reference the [contributing guidelines](how-to-work-on-coding-challenges.md#testing-challenges) for instructions on running the CI build locally. ✅
```

## Синхронізація розгалуження

> Якщо PR не відповідає даті гілки `main`.

````markdown
Hey @username

We would love to be able to merge your changes, but it looks like the branch is not up to date. ⚠️

To resolve this error, you will have to sync the latest changes from the `main` branch of the `freeCodeCamp/freeCodeCamp` repo.

Using the command line, you can do this in three easy steps:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git fetch upstream

git pull upstream main
```

If you're using a GUI, you can simply `Add a new remote...` and use the link `git://github.com/freeCodeCamp/freeCodeCamp.git` from above.

Once you sync your fork and pass the build, we will be able to review your PR and merge it. 😊

---==crwdHRulesLBB_2_BBsuleRHdwrc==

Feel free to reference the ["Syncing a fork"](https://help.github.com/articles/syncing-a-fork/) article on GitHub for more insight on how to keep your fork up-to-date with the upstream repository. 🔄
````
## Конфлікти об’єднання
> Якщо запит має конфлікти об’єднання, які потрібно вирішити.¹

```markdown
Hey @username

We would love to be able to merge your changes, but it looks like you have some merge conflicts. ⚠️

Once you resolve these conflicts, we will be able to review your PR and merge it. 😊

---

If you're not familiar with the merge conflict process, feel free to look over GitHub's guide on ["Resolving a merge conflict"](https://help.github.com/articles/resolving-a-merge-conflict-on-github/). 🔍️

Also, it's good practice on GitHub to write a brief description of your changes when creating a PR. 📝
```

¹ Якщо у новачка виникає конфлікт злиття, то спеціалісти розв’яжуть цю проблему замість нього.

## Дублікат

> Якщо PR повторюється або є дублікатом.

```markdown
Hey @username

This PR seems to make similar changes as the existing PR <#number>. As such, we are going to close this as a duplicate.

If you feel you have additional changes to expand upon this PR, please feel free to push your commits and request this PR be reopened.

Thanks again! 😊

---

If you have any questions, feel free to ask questions on the ["Contributors" category on our forum](https://forum.freecodecamp.org/c/contributors) or [the contributors chat room](https://discord.gg/PRyKn3Vbay).
```

## Закриття недійсних запитів на злиття

> Якщо PR недійсний.

```markdown
Hey @username

Thank you for opening this pull request.

This is a standard message notifying you that we've reviewed your pull request and have decided not to merge it. We would welcome future pull requests from you.

Thank you and happy coding.
```

> Якщо PR містить посилання на зовнішні джерела.

```markdown
Thank you for your pull request.

We are closing this pull request. Please suggest links and other details to add the challenge's corresponding guide post through [a forum topic](https://forum.freecodecamp.org/new-topic?category=Contributors&title=&body=**What%20is%20your%20hint%20or%20solution%20suggestion%3F**%0A%0A%0A%0A%0A**Challenge%3A**%0A%0A%0A**Link%20to%20the%20challenge%3A**) instead.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

## Додавання коментарів про помилки новачків

```markdown
Hi there, 

Thanks for creating this pull request.

Please ensure you follow the PR checklist and not just tick things off; otherwise, we won't take you seriously. Respect the requirements to earn the respect of your fellow maintainers. You will also save everyone time :)

Since you are new here, please slow down and read our [contributing guidelines](https://contribute.freecodecamp.org), as we see that you may still need to catch up on a few things.

<details>
<summary>Here are some examples (expand)</summary>

1. Do not edit files directly on GitHub – while you can, it's not a good idea. 

   Typos and formatting errors can break the tests.

2. Use the correct way to link issues. 

   Add the issue number only in the description of the PR by updating the `XXXXXX`. Не додавайте номери завдань будь-де.

4. Keep mentions and review requests to a minimum. 

   We understand you are excited about contributing, and our maintainers will get back to you when they can.

5. Do not work directly off your `main` branch. 

   You can always create a new branch for the changes you are working on. That way, you can sync change to your PR branch as the main repository moves ahead while your PR is waiting in the merge queue.

</details>

Don't worry. You don't have to close this PR. Feel free to ask specific queries on improving your PR here; someone will guide you.

We are happy you are excited to contribute and appreciate you taking the time to help us. Looking forward to more contributions!

Happy Contributing.
```

## Закриття недійсних завдань

> Якщо завдання стосується коду користувача.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that this issue seems to be a request for help. Instead of asking for help here, please click the **"Get Help"** button on the challenge on freeCodeCamp and choose the **"Ask for help"** option, which will help you create a question in the right part of the forum. Volunteers on the forum usually respond to questions within a few hours and can help determine if there is an issue with your code or the challenge's tests.

If the forum members determine there is nothing wrong with your code, you can request this issue to be reopened.

Thank you and happy coding.
```

> Якщо завдання повторює вже наявне.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that this issue appears to be very similar to issue #XXXXX, so we are closing it as a duplicate.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

> Якщо завдання вирішено на проміжній версії.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that the problem you mentioned here is present in production, but that it has already been fixed in staging. This means that the next time we push our staging branch to production, this problem should be fixed. Because of this, we're closing this issue.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

## Завдання `first timer only`

> Якщо завдання вважається прийнятним для тих, хто робить внесок до коду вперше.

```markdown
Thanks for opening this issue.

This looks like something that can be fixed by "first-time" code contributors to this repository. Here are the files that you should be looking at to work on a fix:

List of files:

1. ...
2. ...
3. ...

Please make sure you read our [guidelines for contributing](https://contribute.freecodecamp.org/#/), we prioritize contributors following the instructions in our guides. Join us in our [chat room](https://discord.gg/PRyKn3Vbay) or our [forum](https://forum.freecodecamp.org/c/contributors/3) if you need help contributing; our moderators will guide you through this.

Sometimes we may get more than one pull request. We typically accept the most quality contribution followed by the one that is made first.

Happy contributing.
```

## Запити на призначення

```md
We typically do not assign issues. Instead, we accept the first pull request that comprehensively solves the issue.

Issues labelled with `help wanted` or `first timers only` are open for contributions.

Please make sure you read [our guidelines for contributing](https://contribute.freecodecamp.org/#/). We prioritize contributors following the instructions in our guide. Join us in [our chat room](https://discord.gg/PRyKn3Vbay) or [the forum](https://forum.freecodecamp.org/c/contributors/3) if you need help contributing - our community will be happy to assist you.
```
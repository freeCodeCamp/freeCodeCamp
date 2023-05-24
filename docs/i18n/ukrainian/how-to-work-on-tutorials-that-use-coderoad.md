На цій сторінці описано, як зробити внесок до матеріалів та проєктів freeCodeCamp, які використовують розширення CodeRoad VS Code.

## Як працюють матеріали

Кожен матеріал freeCodeCamp, який використовує CodeRoad, має власний репозиторій в рамках організації freeCodeCamp GitHub. Всі вони починаються з `learn-`. Наприклад, `https://github.com/freeCodeCamp/learn-bash-by-building-a-boilerplate/`.

Кожен репозиторій матеріалу має гілку `main` та гілку «версії», тобто `v1.0.0`.

Двома основними файлами на гілці `main` є `TUTORIAL.md` та `coderoad.yaml`. `TUTORIAL.md` містить усі інструкції, підказки, заголовки і т. д. для даного матеріалу. `coderoad.yaml` містить інструкції для CodeRoad, наприклад, які команди виконувати й коли, у яких файлах відстежувати зміни, і яку гілку версії використовувати для кроків.

Гілка «версії» містить затвердження, які будуть завантажені на кожному кроці матеріалу. Повідомлення затверджень у цій гілці повинні бути особливими. Перше затвердження має складатися з текстового повідомлення `INIT` та містити всі файли, які необхідно завантажити перед першим уроком.

Послідовні повідомлення затверджень мають відповідати номеру кроку в `TUTORIAL.md` з гілки `main`. Наприклад, затвердження з повідомленням `10.1` буде завантажено тоді, коли користувач перейде до кроку `10.1`.

Щоб внести зміни до затверджень на гілці версії, потрібно перебазувати та відредагувати ті затвердження, які хочете змінити. Це перепише історію Git, тому ми не можемо приймати PR до гілок цього типу. Гілку версії не можна змінювати, як тільки вона з’явиться на репозиторії freeCodeCamp.

> [!WARNING]
> 
> Ніколи не вносьте чи затверджуйте зміни до гілки версії, яка розташована на одному з репозиторіїв freeCodeCamp. Завжди створюйте нову

## Як зробити внесок

### Передумови

Встановіть [інструменти CodeRoad CLI](https://www.npmjs.com/package/@coderoad/cli) за допомогою `npm install -g @coderoad/cli`.

З останньою версією виникали деякі проблеми. Якщо `coderoad --version` не працює після налаштування, перейдіть на версію `0.7.0` за допомогою `npm install -g @coderoad/cli@0.7.0`.

### Робота на `main`

Ці інструкції призначені для PR, які вносять незначні зміни на `main` до **наявних уроків**. Зазвичай це друкарські й граматичні помилки, підказки, інструкції та виправлення у файлі `TUTORIAL.md`.

Для всього іншого, включно з додаванням чи видаленням уроків, див. [інструкцію з роботи над гілкою версії](#working-on-version-branch). Вам не потрібно створювати нову гілку версії — просто створіть PR, дотримуючись інструкцій нижче.

> [!NOTE]
> 
> Ці зміни використовуватимуть наявну гілку версії. Якщо це значні зміни, їх можна додати до `CHANGELOG.md`. У більшості випадків достатньо хорошого повідомлення затвердження

Ніколи не змінюйте файл `tutorial.json` напряму. Це виконується за допомогою інструментів CLI.

Якщо ви вносите незначні зміни (наприклад, виправляєте друкарську чи граматичну помилку), їх необов’язково перевіряти.

Дотримуйтесь цих інструкцій, щоб створити PR (пам’ятайте, що зазвичай інструкції використовують уроки навколо себе для контексту):

- Створіть копію останньої гілки версії за допомогою `git branch vX.X.X upstream/vX.X.X`. Цю гілку не потрібно перевіряти, вона має існувати.
- Створіть та перевірте нову гілку від `main`
- Внесіть **та затвердьте** зміни. Нагадування: нічого не змінюйте у файлі `tutorial.json`. Найімовірніше, вам потрібно внести зміни лише до `TUTORIAL.md`
- Запустіть `coderoad build`, щоб повторно створити файл `tutorial.json`
- Затвердьте зміни з `update json` як повідомленням
- Створіть PR

### Тестування змін на `main`

Якщо після інструкцій вище ви хочете перевірити зміни, внесені до `main`, дотримуйтесь цього:

- Виконайте інструкції з [репозиторію rdb-alpha](https://github.com/freeCodeCamp/rdb-alpha), щоб запустити контейнер
- Запустіть матеріал, використовуючи файл `tutorial.json` на новій гілці

### Reviewing PR's to `main`

If reviewing a PR that only changes `main` with instructional or grammar issues as described above, the changes in `TUTORIAL.md` should match the changes in `tutorial.json`.

The `tutorial.json` file should not have changes to commit hashes, or step/level ids. Startup or level commands or file watchers likely should not be changed either. There are exceptions if there's an issue with a step, but they should be treated with more caution.

Also, keep in mind that instructions usually use the lessons around them for context, so make sure they make sense.

### Working on Version Branch

> [!WARNING]
> 
> Reminder: Never make or push changes to a version branch that is on one of the freeCodeCamp repos. Always create a new one

There's no easy way to see exactly what changed between version branches since the Git history will be rewritten. Accepting new version branches to use will need to be done with careful consideration and testing.

These instructions are for changing anything on a "version" branch, such as tests, test text, reset files, adding and deleting steps, among other things.

Follow these instructions to create a new version:

- Checkout the **latest** version branch with `git checkout -b vX.X.X upstream/vX.X.X`
- Create a new branch off of that, incrementing the version, with `git checkout -b vX.X.Y`
- Make your changes to the version branch. See more info in the [CodeRoad Documentation](https://coderoad.github.io/docs/edit-tutorial) for how to work with tutorials
- Push the new branch to your fork with `git push -u origin vX.X.Y`
- Checkout the `main` branch
- Create a new branch off `main`. e.g. `feat/version-X.X.Y`
- Change the `uri` in `coderoad.yaml` to your fork of the repo. This is so you and reviewers can test it before pushing it to the freeCodeCamp repo. Change the version to the new branch in the two spots of that file. Add your changes for the new version to `CHANGELOG.md`. Make any other changes you need.
- Commit your changes with the message `feat: release version X.X.Y - <optional description>`
- Run `coderoad build` to create a new `tutorial.json` file
- Add and commit the file
- Push the changes to your fork
- Test your changes following the [testing instructions below](#testing-changes-to-a-version-branch). Make any additional changes and commit them as you just did, or, if you are satisfied, follow the rest of the instructions
- Make a PR to `main` using your new `feat/version-X.X.Y` branch. Give it a title of `version X.X.Y ready for review`. This will not be merged, it is just to let reviewers know that there is a new version ready
- Leave it here for reviewers

### Testing Changes to a Version Branch

- Follow the instructions on the [rdb-alpha repo](https://github.com/freeCodeCamp/rdb-alpha) to run a container
- Start the tutorial using the `tutorial.json` file on whatever fork the changes are on. Make sure to use the file on the `feat: version-X.X.Y` branch and not the `main` branch

### Pushing a New Version

Before pushing a new version, view the new `feat/version-vX.X.Y` (will be merged to `main`) branch on the user's fork. Make sure there are additions to the `CHANGELOG.md` file that include the new changes, and the version in the two spots of `coderoad.yaml` matches the new version branch.

If you have write access to the freeCodeCamp repo, have verified the `CHANGELOG` and `coderoad.yaml` files, have tested the changes using the instructions above, and want to push a new version of a tutorial:

> [!WARNING]
> 
> Reminder: Never make or push changes to a version branch that is on one of the freeCodeCamp repos. Always create a new one

- If you don't have a remote to where the new changes exist, create a remote to the user's fork with `git remote add <users_fork>`
- Delete any **local** branches that share a name with the new branches. Likely named either `vX.X.Y` or `feat/version-X.X.Y`
- Checkout the new version branch with `git checkout -b vX.X.Y <remote>/vX.X.Y`
- Push the new version branch to the freeCodeCamp repo with `git push -u upstream/vX.X.Y`. You need to push the new branch before you update `main` with the new `tutorial.json` file
- Checkout the users branch that will be merged into `main` with `git checkout -b feat/version-X.X.Y <remote>/feat/version-X.X.Y`
- Change the `uri` in `coderoad.yaml` back to the freeCodeCamp repo
- Add and commit the changes
- Run `coderoad build` to create the new `tutorial.json` file
- Add and commit the file
- Push the changes to your fork with `git push -u origin/feat/version-X.X.Y`
- Make a PR to `main` on the freeCodeCamp repo
- If you are satisfied, merge it or leave it and ask for a review from someone
- After the PR is merged, open the tutorial by following the instructions on the [rdb-alpha repo](https://github.com/freeCodeCamp/rdb-alpha) to make sure it's loading properly, and that you can get through a few steps
- Finally, if any PRs for this version exists, close them

### How to Revert to a Previous Version

- Create a new branch off the latest `main` with `git checkout -b revert/to-version-X.X.X`
- Revert all commits on this branch up to and including the commit of the version after the one you want to revert to. For example, you may have commits that look like this:

```
fix: typo
release: version 1.0.1
fix: typo
release: version 1.0.0
```

If you want to revert to v1.0.0, revert all the commits from `release: version 1.0.1` and after

- Create a PR. Give it a title of `revert: to version X.X.X`

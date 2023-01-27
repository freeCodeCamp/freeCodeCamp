# Як відкрити запит на пул (PR)

Запит на пул (PR) дозволяє надсилати зміни зі свого форку на GitHub до головного репозиторію freeCodeCamp.org. Як тільки ви закінчите вносити зміни до коду, дотримуйтесь цих рекомендацій, щоб відкрити запит на пул.

Ми очікуємо, що наші помічники обізнані щодо процесу проєкту. Ви отримаєте повагу тих, хто відповідає за технічне обслуговування, і заощадите час, дотримуючись цих вказівок.

Деякі приклади:

1. Не редагуйте файли напряму через GitHub, це не дуже хороша ідея.
2. Переконайтесь, що дотримуєтесь контрольного списку PR, а не просто ставите галочки. В такому випадку ми не сприйматимемо вас серйозно.
3. Використайте правильний спосіб пов’язати завдання в описі PR, оновивши `XXXXXX`. Не додавайте номери завдань будь-де.
4. Не «@згадуйте» чи запитуйте відгук кілька разів.

   Ми розуміємо, що ви раді зробити свій внесок. Модераторам подобається відповідати кожному, однак пам’ятайте: вони зайняті люди, які розглядають сотні запитів. Рано чи пізно, хтось дійде і до вашого запиту.

5. Не працюйте напряму зі своєї гілки `main`. Створіть нову гілку для змін, над якими ви працюєте.

> [!NOTE] Ваш PR повинен націлюватись лише на зміни навчальної програми англійською мовою. Див. [цей довідник](index.md#translations), щоб зробити внесок до перекладу.

## Підготуйте хороший заголовок для PR

Ми рекомендуємо використовувати [ загальноприйняті заголовки та повідомлення](https://www.conventionalcommits.org/) для комітів і запитів на пул. Конвенція вимагає наступного формату:

> `<тип>([область (необов’язково)]): <опис>`
> 
> Наприклад:
> 
> `fix(learn): тести для завдання з циклу do...while`

Щоразу, коли ви відкриваєте запит на пул (PR), використовуйте нижчеподану інформацію, щоб визначити тип, область та опис.

**Тип:**

| Тип   | Коли обирати                                                               |
|:----- |:-------------------------------------------------------------------------- |
| fix   | Змінені або оновлені/вдосконалені функції, тести, формулювання уроку тощо. |
| feat  | Лише при додаванні нової функції, тестів тощо.                             |
| chore | Зміни, які не повʼязані з кодом, тестами або формулюванням уроку.          |
| docs  | Зміни до директорії `/docs` чи настанов щодо внесків тощо.                 |

**Область:**

Область можна обрати із [цього списку міток](https://github.com/freeCodeCamp/freeCodeCamp/labels?q=scope).

**Опис:**

Опис повинен бути коротким (не більше 30 символів) та простим; більше інформації можна додати в полі опису PR та коментарях.

Декілька прикладів хороших заголовків:

- `fix(a11y): improved search bar contrast`
- `feat: add more tests to HTML and CSS challenges`
- `fix(api,client): prevent CORS errors on form submission`
- `docs(i18n): fix links to be relative instead of absolute`

## Proposing a Pull Request

1. Once the edits have been committed, you will be prompted to create a pull request on your fork's GitHub Page.

   <details>
   <summary>Переглянути знімок екрану</summary>

   ![Image - Compare & pull request prompt on GitHub](https://contribute.freecodecamp.org/images/github/compare-pull-request-prompt.png)

   </details>

2. By default, all pull requests should be against the freeCodeCamp main repo, `main` branch.

   Make sure that your Base Fork is set to freeCodeCamp/freeCodeCamp when raising a Pull Request.

   <details>
   <summary>Переглянути знімок екрану</summary>

   ![Image - Comparing forks when making a pull request](https://contribute.freecodecamp.org/images/github/comparing-forks-for-pull-request.png)

   </details>

3. Submit the pull request from your branch to freeCodeCamp's `main` branch.

4. Include a more detailed summary of the changes you made and how your changes are helpful in the body of your PR.

   - You will be presented with a pull request template. This is a checklist that you should have followed before opening the pull request.

   - Fill in the details as you see fit. This information will be reviewed and the reviewers will decide whether or not your pull request is accepted.

   - If the PR is meant to address an existing GitHub Issue then, at the end of your PR's description body, use the keyword _Closes_ with the issue number to [automatically close that issue if the PR is accepted and merged](https://help.github.com/en/articles/closing-issues-using-keywords).

     > Example: `Closes #123` will close issue 123

5. Indicate if you have tested on a local copy of the site or not.

   - This is very important when making changes that are not just edits to text content like documentation or a challenge description. Examples of changes that need local testing include JavaScript, CSS, or HTML which could change the functionality or layout of a page.

   - If your PR affects the behaviour of a page it should be accompanied by corresponding [Cypress integration tests](how-to-add-cypress-tests.md).

## Зворотний зв’язок по PR

> :tada: Вітаємо зі створенням PR та дуже дякуємо, що знайшли час зробити свій внесок.

Наші модератори все переглянуть та залишать свій відгук. Будь ласка, наберіться терпіння та поважайте їхній час. Усі запити на пул розглядаються за усталеним порядком.

І як завжди, не соромтеся ставити питання [на нашому форумі в категорії «Contributors»](https://forum.freecodecamp.org/c/contributors) або [у чат-кімнаті «contributors»](https://discord.gg/PRyKn3Vbay).

> [!TIP] If you are to be contributing more pull requests, we recommend you read the [making changes and syncing](how-to-setup-freecodecamp-locally.md#making-changes-locally) guidelines to avoid having to delete your fork.

## Conflicts on a pull request

Conflicts can arise because many contributors work on the repository, and changes can break your PR which is pending a review and merge.

More often than not you may not require a rebase, because we squash all commits, however, if a rebase is requested, here is what you should do.

### For usual bug fixes and features

When you are working on regular bugs and features on our development branch `main`, you are able to do a simple rebase:

1. Rebase your local copy:

   ```console
   git checkout <pr-branch>
   git pull --rebase upstream main
   ```

2. Resolve any conflicts and add / edit commits

   ```console
   # Або
   git add .
   git commit -m "chore: resolve conflicts"

   # Або
   git add .
   git commit --amend --no-edit
   ```

3. Push back your changes to the PR

   ```console
   git push --force origin <pr-branch>
   ```

### For upcoming curriculum and features

When you are working on features for our upcoming curriculum `next-*` branches, you have to do a cherry pick:

1. Make sure your upstream comes in sync with your local:

   ```console
   git checkout main
   git fetch --all --prune
   git checkout next-python-projects
   git reset --hard upstream/next-python-projects
   ```

2. Take backup

   a. Either delete your local branch after taking a backup (if you still have it locally):

   ```console
   git checkout <pr-branch-name>

   # приклад:
   # git checkout feat/add-numpy-video-question

   git checkout -b <backup-branch-name>

   # приклад:
   #  git checkout -b backup-feat/add-numpy-video-question

   git branch -D <pr-branch-name>
   ```

   b. Or just a backup of your pr branch (if you do not have it locally):

   ```console
   git checkout -b <backup-branch-name> origin/<pr-branch-name>

   # приклад:
   #  git checkout -b backup-feat/add-numpy-video-question origin/feat/add-numpy-video-question
   ```

3. Start off with a clean slate:

   ```console
   git checkout -b <pr-branch-name> next-python-projects
   git cherry-pick <commit-hash>
   ```

4. Resolve any conflicts, cleanup, install dependencies and run tests

   ```console
   npm run clean

   npm ci
   npm run test:curriculum --superblock=<superblock-name>

   # приклад:

   # npm run test:curriculum --superblock=python-for-everybody

   ```

5. If everything looks good push back to the PR

   ```console
   git push --force origin <pr-branch-name>
   ```

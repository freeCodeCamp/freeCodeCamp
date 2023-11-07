Дотримуйтесь цих вказівок, щоб зробити внесок до кодової бази. Особливо рекомендовано, якщо ви хочете робити внесок регулярно.

Ігнорування цих кроків може призвести до того, що ви ускладните свій внесок, обслуговування та перегляд.

## Внесок до кодової бази

Тепер ви можете робити зміни у файлах та затверджувати їх у розгалуженнях, прочитавши [як налаштувати freeCodeCamp локально](how-to-setup-freecodecamp-locally.md).

Дотримуйтеся цих вказівок:

1. Переконайтесь, що знаходитесь на гілці `main`:

   ```console
   git status
   ```

   Ви повинні отримати такий вивід:

   ```console
   On branch main
   Your branch is up-to-date with 'origin/main'.

   nothing to commit, working directory clean
   ```

   Якщо ви отримали інше повідомлення, значить ви не перебуваєте на головній гілці (main) або ваш робочий каталог не чистий. Розв’яжіть будь-які невиконані файли/затвердження та перевірте `main`:

   ```console
   git checkout main
   ```

2. Синхронізуйте останні зміни віддаленої гілки `main` зі своєю розгалуженою гілкою `main`:

   > [!WARNING] Якщо у вас є невиконані запити на злиття, зроблені з гілки `main` свого розгалуження, ви втратите їх під кінець цього кроку.
   > 
   > Перед виконанням цього кроку потрібно переконатись, що ваш запит на злиття об’єднав модератор. Щоб уникнути цього, **ніколи** не працюйте на гілці `main`.

   Цей крок **синхронізує останні зміни** з головного репозиторію freeCodeCamp.

   Оновіть свою копію віддаленого репозиторію freeCodeCamp:

   ```console
   git fetch upstream
   ```

   Скиньте свою головну гілку з головною гілкою freeCodeCamp:

   ```console
   git reset --hard upstream/main
   ```

   Перемістіть свою головну гілку до джерела, щоб мати чисту історію розгалуження на GitHub:

   ```console
   git push origin main --force
   ```

   Ви можете переконатись, що ваша поточна головна гілка відповідає upstream/main, виконавши diff:

   ```console
   git diff upstream/main
   ```

   Отриманий вивід має бути порожнім. Важливо якомога частіше перебазовувати свою гілку на останню версію `upstream/main`, щоб уникнути конфліктів пізніше.

3. Створіть нову гілку:

   Ваша робоча копія буде чистою, якщо ви працюватимете на окремій гілці для кожного завдання. Ніколи не працюйте на `main`. Це забруднить вашу копію freeCodeCamp, через що, можливо, доведеться починати з нового клону чи розгалуження.

   Переконайтесь, що знаходитесь на `main` та починайте розгалуження звідси:

   ```console
   git checkout -b fix/update-guide-for-xyz
   ```

   Назва вашої гілки повинна починатись з `fix/`, `feat/`, `docs/` тощо. Не використовуйте номери завдань у гілках. Вони мають бути короткими, змістовними та унікальними.

   Декілька прикладів хороших назв гілок:

   ```md
   fix/update-challenges-for-react
   fix/update-guide-for-html-css
   fix/platform-bug-sign-in-issues
   feat/add-guide-article-for-javascript
   translate/add-spanish-basic-html
   ```

4. Відредагуйте сторінки та працюйте над кодом у своєму улюбленому текстовому редакторі.

5. Як тільки ви задоволені змінами, за бажанням запустіть freeCodeCamp для перегляду змін.

6. Переконайтеся, що виправили помилки та перевірте форматування своїх змін.

7. Перевірте та підтвердьте файли, які оновлюєте:

   ```console
   git status
   ```

   Має з’явитись список файлів `unstaged`, які ви відредагували.

   ```console
   On branch feat/documentation
   Your branch is up to date with 'upstream/feat/documentation'.

   Changes were not staged for commit:
   (use "git add/rm <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in the working directory)

       modified:   CONTRIBUTING.md
       modified:   docs/README.md
       modified:   docs/how-to-setup-freecodecamp-locally.md
       modified:   docs/how-to-work-on-guide-articles.md
   ...
   ```

8. Проіндексуйте зміни та зробіть затвердження:

   У цьому кроці потрібно позначити лише ті файли, які редагували чи додавали самостійно. Якщо необхідно, ви можете виконати скидання та виправити файли, які не збираєтеся змінювати.

   ```console
   git add path/to/my/changed/file.ext
   ```

   Або ви можете додати всі файли `unstaged` до області тимчасового зберігання:

   ```console
   git add .
   ```

   Лише ті файли, які було переміщено до області тимчасового зберігання, будуть додані під час затвердження.

   ```console
   git status
   ```

   Вивід:

   ```console
   On branch feat/documentation
   Your branch is up to date with 'upstream/feat/documentation'.

   Changes to be committed:
   (use "git reset HEAD <file>..." to unstage)

       modified:   CONTRIBUTING.md
       modified:   docs/README.md
       modified:   docs/how-to-setup-freecodecamp-locally.md
       modified:   docs/how-to-work-on-guide-articles.md
   ```

   Тепер ви можете затвердити свої зміни, використовуючи коротке повідомлення:

   ```console
   git commit -m "fix: my short commit message"
   ```

   Декілька прикладів:

   ```md
   fix: add test for JavaScript - for loop step
   feat: add link for article for alexa skills
   ```

   Створюйте загальноприйняті повідомлення затверджень. Це хороша практика, яка спонукає дотримуватись стандартів.

   Декілька прикладів хороших повідомлень затверджень:

   ```md
   fix: improve HTML step
   fix: fix build scripts for Travis-CI
   feat: add link to JavaScript hoisting article
   docs: update contributing guidelines
   ```

   Пишіть їх короткими, не більше 50 символів. Додаткову інформацію можна додати в описі затвердження.

   Це не займе більше часу ніж нестандартне повідомлення (наприклад, «update file» чи «add index.md»)

   Ви можете дізнатись більше, чому потрібно використовувати загальноприйнятні затвердження, [тут](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

9. Якщо ви усвідомили, що вам потрібно відредагувати файл або оновити повідомлення коміту, після того, як зробили  коміт, ви можете зробити так після редагування файлів:

   ```console
   git commit --amend
   ```

   Це відкриє текстовий редактор за замовчуванням (наприклад, `nano` або `vi`), де можна редагувати заголовок повідомлення та додавати/редагувати опис.

10. Тепер надішліть свої зміни до розгалуження:

    ```console
    git push origin branch/name-here
    ```

## Запропонуйте запит на злиття (PR)

Як тільки ви затвердили свої зміни, див. [як відкрити запит на злиття](how-to-open-a-pull-request.md).

## Коротко про команди

Короткий довідник команд, які знадобляться при роботі.

| команда                                                           | опис                                                                                       |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `pnpm test`                                                       | Запускає всі тести JS у системі, включно з клієнтом, сервером, лінтером і тестами завдань. |
| `pnpm run test-client`                                            | Запускає набір тестів клієнта.                                                             |
| `pnpm run test-client -u`                                         | Запускає набір тестів клієнта, оновлюючи несинхронізовані знімки Jest.                     |
| `pnpm run test:curriculum`                                        | Запускає набір тестів навчальної програми.                                                 |
| `FCC_BLOCK='Basic HTML and HTML5' pnpm run test:curriculum`       | Тестує конкретний блок.                                                                    |
| `FCC_SUPERBLOCK='responsive-web-design' pnpm run test:curriculum` | Тестує конкретний суперблок.                                                               |
| `pnpm run test-curriculum-full-output`                            | Запускає набір тестів навчальної програми без збоїв після першої помилки                   |
| `pnpm run test-server`                                            | Запускає набір тестів сервера.                                                             |
| `pnpm run e2e`                                                    | Запускає наскрізне тестування Cypress.                                                     |
| `pnpm run clean`                                                  | Видаляє всі залежності й очищає кеш.                                                       |
| `pnpm run storybook`                                              | Запускає Storybook для розробки бібліотеки компонентів.                                    |

---
id: 587d7fb3367417b2b2512bfb
title: 'Як використовувати package.json, ядро будь-якого проєкту Node.js або пакету npm'
challengeType: 2
forumTopicId: 301528
dashedName: how-to-use-package-json-the-core-of-any-node-js-project-or-npm-package
---

# --description--

Робота над цими завданнями передбачає написання коду за допомогою одного з наступних методів:

- Клонуйте <a href="https://github.com/freeCodeCamp/boilerplate-npm/" target="_blank" rel="noopener noreferrer nofollow">цей репозиторій GitHub</a> та виконайте завдання локально.
- Використайте <a href="https://replit.com/github/freeCodeCamp/boilerplate-npm" target="_blank" rel="noopener noreferrer nofollow">наш стартовий проєкт Replit</a> для виконання цих завдань.
- Для виконання проєкту використайте конструктор сайту на власний вибір. Переконайтеся, що приєднали усі файли з нашого репозиторію GitHub.

Якщо ви використовуєте Replit, виконайте наступні кроки для налаштування проєкту:

-   Почніть з імпорту проєкту на Replit.
-   Потім ви побачите вікно `.replit`.
-   Оберіть `Use run command` та натисніть кнопку `Done`.

Після завершення переконайтеся, що демоверсія проєкту розміщена у відкритому доступі. Потім введіть URL-адресу проєкту в полі «Посилання на рішення».

Файл `package.json` є центром будь-якого проєкту Node.js або пакету npm. It stores information about your project, similar to how the `head` section of an HTML document describes the content of a webpage. Він складається з одного об'єкту JSON, де зберігається інформація у парах ключ-значення. There are only two required fields; `name` and `version`, but it’s good practice to provide additional information about your project that could be useful to future users or maintainers.

If you look at the file tree of your project, you will find the `package.json` file on the top level of the tree. Ви будете покращувати цей файл у наступних завданнях.

Одним із найважливішого у цьому файлі є поле `author`. Воно вказує на те, хто створив проєкт, і може складатися з рядка або об'єкта з контактом чи іншими деталями. Об’єкт рекомендований для масштабніших проєктів, а простий рядок (як у прикладі) зійде для цього проєкту.

```json
"author": "Jane Doe",
```

# --instructions--

Add your name as the `author` of the project in the `package.json` file.

**Примітка:** пам'ятайте, що ви пишете JSON, тому всі назви полів повинні використовувати подвійні лапки (") і бути розділені комою (,).

# --hints--

`package.json` should have a valid "author" key

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.author, '"author" is missing');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

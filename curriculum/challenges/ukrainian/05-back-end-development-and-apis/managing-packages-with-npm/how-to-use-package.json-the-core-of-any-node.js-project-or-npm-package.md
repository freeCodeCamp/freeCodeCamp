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

Файл `package.json` є центром будь-якого проєкту Node.js або пакету npm. У ньому зберігається інформація про ваш проєкт, схоже до того, як розділ `head` HTML-документу описує вміст вебсторінки. Він складається з одного об'єкту JSON, де зберігається інформація у парах ключ-значення. Існує лише два обов'язкові поля: `name` та `version`, але краще надавати додаткову інформацію про свій проєкт, яка може бути корисною для майбутніх користувачів або спеціалістів.

Якщо глянути на дерево файлів вашого проєкту, то файл `package.json` буде зверху. Ви будете покращувати цей файл у наступних завданнях.

Одним із найважливішого у цьому файлі є поле `author`. Воно вказує на те, хто створив проєкт, і може складатися з рядка або об'єкта з контактом чи іншими деталями. Об’єкт рекомендований для масштабніших проєктів, а простий рядок (як у прикладі) зійде для цього проєкту.

```json
"author": "Jane Doe",
```

# --instructions--

Додайте своє ім'я як `author` проєкту у файл `package.json`.

**Примітка:** пам'ятайте, що ви пишете JSON, тому всі назви полів повинні використовувати подвійні лапки (") і бути розділені комою (,).

# --hints--

`package.json` повинен мати дійсний ключ «author»

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

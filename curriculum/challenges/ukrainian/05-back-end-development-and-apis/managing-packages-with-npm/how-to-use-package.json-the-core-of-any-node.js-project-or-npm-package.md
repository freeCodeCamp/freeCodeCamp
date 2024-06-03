---
id: 587d7fb3367417b2b2512bfb
title: 'Як використовувати package.json: ядро будь-якого проєкту Node.js або пакету npm'
challengeType: 2
forumTopicId: 301528
dashedName: how-to-use-package-json-the-core-of-any-node-js-project-or-npm-package
---

# --description--

Робота над цими завданнями передбачає написання коду за допомогою одного з наступних методів:

- Клонуйте <a href="https://github.com/freeCodeCamp/boilerplate-npm/" target="_blank" rel="noopener noreferrer nofollow">цей репозиторій GitHub</a> та виконайте завдання локально.
- Використайте <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-npm/" target="_blank" rel="noopener noreferrer nofollow">наш стартовий проєкт Gitpod</a>, щоб виконати ці завдання.
- Для виконання проєкту використайте конструктор сайту на власний вибір. Переконайтеся, що приєднали усі файли з нашого репозиторію GitHub.

Файл `package.json` є центром будь-якого проєкту Node.js або пакету npm. Він зберігає інформацію про проєкт. Він складається з одного об’єкту JSON, де зберігається інформація у парах ключ-значення. Лише два поля є обов’язковими: `name` та `version`, але краще надавати додаткову інформацію.

Файл `package.json` можна створити в терміналі за допомогою команди `npm init`. Вона запустить кероване налаштування. Щоб створити файл без зайвих запитань, використайте `npm init` з прапорцем `-y`: `npm init -y`.

Якщо глянути на дерево файлів вашого проєкту, то файл `package.json` буде зверху. Ви будете покращувати цей файл у наступних завданнях.

Однією з найважливішої інформації у цьому файлі є поле `author`. Воно вказує на те, хто створив проєкт, і може складатися з рядка або об’єкта з контактом чи іншими деталями. Об’єкт рекомендований для масштабніших проєктів, а простий рядок (як у прикладі) зійде для цього проєкту.

```json
"author": "Jane Doe",
```

# --instructions--

Додайте своє ім’я як `author` проєкту до файлу `package.json`.

**Примітка:** пам’ятайте, що ви пишете JSON, тому всі назви полів мають використовувати подвійні лапки (") і бути розділеними комою (,).

Якщо ви використовуєте Gitpod, то переконайтеся, що програма виконується, а вікно попереднього перегляду відкрите. Скопіюйте URL-адресу вікна попереднього перегляду та вставте її в полі «Посилання на розв’язок».

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

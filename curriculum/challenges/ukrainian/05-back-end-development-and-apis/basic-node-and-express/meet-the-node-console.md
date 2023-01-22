---
id: 587d7fb0367417b2b2512bed
title: Знайомство з консоллю Node
challengeType: 2
forumTopicId: 301515
dashedName: meet-the-node-console
---

# --description--

Робота над цими завданнями передбачає написання коду за допомогою одного з наступних методів:

- Клонуйте <a href="https://github.com/freeCodeCamp/boilerplate-express/" target="_blank" rel="noopener noreferrer nofollow">цей репозиторій GitHub</a> та виконайте завдання локально.
- Використайте <a href="https://replit.com/github/freeCodeCamp/boilerplate-express" target="_blank" rel="noopener noreferrer nofollow">наш стартовий проєкт Replit</a> для виконання цих завдань.
- Для виконання проєкту використайте конструктор сайту на власний вибір. Переконайтеся, що приєднали усі файли з нашого репозиторію GitHub.

Якщо ви використовуєте Replit, виконайте наступні кроки для налаштування проєкту:

-   Почніть з імпорту проєкту на Replit.
-   Потім ви побачите вікно `.replit`.
-   Оберіть `Use run command` та натисніть кнопку `Done`.

Після завершення переконайтеся, що демоверсія проєкту розміщена у відкритому доступі. Потім введіть URL-адресу проєкту в полі «Посилання на рішення».

Під час процесу розробки важливо перевіряти, що відбувається у коді.

Node – це всього лиш середовище JavaScript. Як і клієнтська сторона JavaScript, ви можете використовувати консоль для відображення корисної інформації щодо налаштування. На своїй локальній машині ви побачите вивід консолі в терміналі. На Replit термінал відкритий на правій панелі за замовчуванням.

Ми рекомендуємо тримати термінал відкритим під час роботи над цими завданнями. Читаючи вивід в терміналі, ви можете побачити будь-які помилки, що можуть виникнути.

# --instructions--

Модифікуйте файл `myApp.js` для виводу «Hello World» на консоль.

# --hints--

`"Hello World"` повинне бути на консолі

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/hello-console').then(
    (data) => {
      assert.isTrue(data.passed, '"Hello World" is not in the server console');
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

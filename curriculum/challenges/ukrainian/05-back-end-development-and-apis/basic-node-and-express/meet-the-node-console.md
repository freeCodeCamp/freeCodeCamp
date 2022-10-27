---
id: 587d7fb0367417b2b2512bed
title: Знайомство з консоллю Node
challengeType: 2
forumTopicId: 301515
dashedName: meet-the-node-console
---

# --description--

Робота над цими завданнями передбачає написання коду одним із таких методів:

- Клонуйте <a href="https://github.com/freeCodeCamp/boilerplate-express/" target="_blank" rel="noopener noreferrer nofollow">цей репозиторій GitHub</a> та виконайте ці завдання локально.
- Використайте <a href="https://replit.com/github/freeCodeCamp/boilerplate-express" target="_blank" rel="noopener noreferrer nofollow">наш стартовий проєкт Replit</a> для виконання цих завдань.
- Для виконання проєкту скористуйтеся будь-яким конструктором сайтів на ваш розсуд. Впевніться, що ви маєте усі файли з нашого GitHub репозиторію.

Коли ви завершили, переконайтеся, що демоверсія вашого проєкту розміщена у відкритому доступі. Потім введіть URL-адресу проєкту у поле `Solution Link`.

Під час процесу розробки важливо перевіряти, що відбувається у коді.

Node - це всього лише середовище JavaScript. Як у клієнтському JavaScript, ви можете використовувати консоль для відображення корисної інформації для налагодження недоліків. На вашому локальному комп'ютері ви побачите вивід консолі в терміналі. На Replit термінал відкритий на правій панелі за замовчуванням.

Ми рекомендуємо тримати термінал відкритим під час роботи над цими завданнями. Читаючи вивід в терміналі, ви можете побачити будь-які помилки, що можуть виникнути.

# --instructions--

Модифікуйте `myApp.js` для виводу "Hello World" на консоль.

# --hints--

`"Hello World"` має бути в консолі

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

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
- Використайте <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-express/" target="_blank" rel="noopener noreferrer nofollow">наш стартовий проєкт Gitpod</a>, щоб виконати ці завдання.
- Для виконання проєкту використайте конструктор сайту на власний вибір. Переконайтеся, що приєднали усі файли з нашого репозиторію GitHub.

Під час процесу розробки важливо перевіряти, що відбувається у коді.

Node — це всього лиш середовище JavaScript. Як і клієнтська сторона JavaScript, ви можете використовувати консоль для показу корисної інформації щодо налагодження. На своїй локальній машині ви побачите вивід консолі в терміналі. На Gitpod термінал відкритий в нижній частині редактора за замовчуванням.

Ми рекомендуємо тримати термінал відкритим під час роботи над цими завданнями. Читаючи вивід в терміналі, ви можете побачити будь-які помилки, що можуть виникнути.

The server must be restarted after making changes to its files.

You can stop the server from the terminal using `Ctrl + C` and start it using Node directly (`node mainEntryFile.js`) or using a run script in the `package.json` file with `npm run`.

For example, the `"start": "node server.js"` script would be run from the terminal using `npm run start`.

To implement server auto restarting on file save Node provides the `--watch` flag you can add to your start script `"start": "node --watch server.js"` or you can install an npm package like `nodemon`. We will leave this to you as an exercise.

# --instructions--

Модифікуйте файл `myApp.js`, щоб на консолі було виведено "Hello World".

# --hints--

`"Hello World"` має бути на консолі

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

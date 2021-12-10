---
id: 5895f700f9fc0f352b528e63
title: Налаштування шаблону двигуна
challengeType: 2
forumTopicId: 301564
dashedName: set-up-a-template-engine
---

# --description--

Робота над цими завданнями передбачає написання коду одним із таких методів:

- Клонуйте [ цей GitHub репозиторій](https://github.com/freeCodeCamp/boilerplate-advancednode/) і локально виконайте ці завдання.
- Використовуйте [наш стартовий проєкт Replit](https://replit.com/github/freeCodeCamp/boilerplate-advancednode) для виконання цих завдань.
- Використовуйте конструктор сайтів на ваш розсуд для завершення проекту. Впевніться, що ви маєте усі файли з нашого GitHub репозиторію.

По завершенню, переконайтеся, що демоверсія вашого проєкту розміщена у відкритому доступі. Потім введіть URL-адресу проєкту у поле `Solution Link`.

Шаблон двигуна дозволяє використовувати статичні шаблони файлів (такі як написані в *Pug*) у вашому додатку. У той час шаблон двигуна замінює варіації у файлі шаблону фактичними значеннями, які можуть надаватися вашим сервером. Потім він перетворює шаблон в статичний HTML файл, який надсилається клієнту. Цей підхід спрощує дизайн HTML сторінки та дозволяє показувати змінні на сторінці без необхідності виклику API від клієнта.

Додайте `pug@~3.0.0` в якості залежності у файлі `package.json`.

Висловіть свої потреби для розуміння, який шаблон двигуна ви використовуєте. Ми будемо використовувати метод `set` для призначення `pug` як `view engine` значення властивості: `app.set('view engine', 'pug')`

Ваша сторінка не буде завантажуватися, поки ви не зобразите правильно індексний файл у каталозі `views/pug`.

Змініть аргумент `res.render()` оголошення в маршруті `/` як шлях до файлу каталогу `views/pug`. Шлях може бути відносним шляхом (відносно переглядів) або абсолютним шляхом і не потребує розширення файлу.

Якщо все пройшло по плану, ваша домашня сторінка додатку зупинить показ повідомлення "`Pug template is not defined.`" і тепер буде показано повідомлення, яке вказує, що ви успішно зобразили шаблон Pug!

Підтвердіть свою сторінку, коли зрозумієте, що все працює коректно. Якщо виникла помилка, ви можете перевірити виконання проєкту до цього етапу [тут](https://gist.github.com/camperbot/3515cd676ea4dfceab4e322f59a37791).

# --hints--

Pug повинен бути залежністю.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'pug',
        'Your project should list "pug" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Двигун перегляду має бути Pug.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /('|")view engine('|"),( |)('|")pug('|")/gi,
        'Your project should set Pug as a view engine'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Використайте правильний метод ExpressJS, щоб відобразити сторінку індексу з відповіді.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/').then(
    (data) => {
      assert.match(
        data,
        /FCC Advanced Node and Express/gi,
        'You successfully rendered the Pug template!'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Pug має працювати.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/').then(
    (data) => {
      assert.match(
        data,
        /pug-success-message/gi,
        'Your projects home page should now be rendered by pug with the projects .pug file unaltered'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
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

---
id: 589690e6f9fc0f352b528e6e
title: Очистити ваш проект з модулями
challengeType: 2
forumTopicId: 301549
dashedName: clean-up-your-project-with-modules
---

# --description--

Зараз все, що ви маєте є у файлі `server.js`. Це може привести до складного управління кодом, який не дуже розширюється. Створіть 2 нових файли: `routes.js` і `auth.js`

Обидва повинні починатися з такого коду:

```js
module.exports = function (app, myDataBase) {

}
```

Тепер, зверху вашого серверного файлу, подайте ці файли так: `const routes = require('./routes.js');`. Одразу після того, як ви встановите вдалий зв'язок з базою даних, пропишіть кожен з них таким чином: `routes(app, myDataBase)`

Врешті, візьміть усі ваші маршрути на сервері та вставте їх в нові файли, і видаліть їх з вашого серверного файлу. Також візьміть функцію `ensureAuthenticated`, оскільки її створили спеціально для маршрутизації. Тепер ви маєте правильно додати залежності, в яких використовуються функції, такі як `const passport = require('passport');`, з самого верху, над експортним рядком у вашому файлі `routes.js`.

Продовжуйте додавати їх, поки помилки не припинять існувати, а ваш серверний файл більше не матиме маршрутизування (**за винятком шляху в блок catch**)!

Тепер зробіть те саме в вашому файлі auth.js з усім, що пов'язане з автентифікацією, як ось серіалізація і налаштування локальної стратегії, і видаліть їх з вашого серверного файлу. Обов'язково додайте залежності і наберіть `auth(app, myDataBase)` на сервері в цьому ж місці.

Підтвердьте вашу сторінку, якщо все зрозуміло. Якщо ви натрапите на помилки, можете перевірити виконання проєкту до цього етапу [тут](https://gist.github.com/camperbot/2d06ac5c7d850d8cf073d2c2c794cc92).

# --hints--

Модулі мають бути присутні.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require\s*\(('|")\.\/routes(\.js)?\1\)/gi,
        'You should have required your new files'
      );
      assert.match(
        data,
        /client\s*\.db[^]*routes/gi,
        'Your new modules should be called after your connection to the database'
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

---
id: 589690e6f9fc0f352b528e6e
title: Чистка проєкту з модулями
challengeType: 2
forumTopicId: 301549
dashedName: clean-up-your-project-with-modules
---

# --description--

Зараз все, що ви маєте знаходиться у файлі `server.js`. Через це, можливо, важко управляти кодом, який не дуже розширюється. Створіть 2 нових файли: `routes.js` та `auth.js`

Обидва повинні починатися з такого коду:

```js
module.exports = function (app, myDataBase) {

}
```

Тепер зверху свого серверного файлу вимагайте ці файли так: `const routes = require('./routes.js');`. Одразу після того, як ви встановите вдалий зв'язок з базою даних, пропишіть кожен з них ось так: `routes(app, myDataBase)`

Вкінці візьміть усі свої маршрути на сервері та вставте їх у нові файли, і видаліть їх зі свого серверного файлу. Також візьміть функцію `ensureAuthenticated`, оскільки її створили спеціально для маршрутизації. Тепер вам потрібно правильно додати залежності, в яких використовуються функції, наприклад `const passport = require('passport');` у самий верх над рядком експорту у своєму файлі `routes.js`.

Продовжуйте додавати їх, поки не припинять існувати помилки, а ваш серверний файл більше не матиме маршрутизування (**за винятком шляху в блоці catch**)!

Зробіть те саме у своєму файлі `auth.js` з усім, що пов'язане з автентифікацією, як-от серіалізація і налаштування локальної стратегії, і видаліть їх зі свого серверного файлу. Не забудьте додати залежності та викликати `auth(app, myDataBase)` на сервері на цьому ж місці.

Відправте свою сторінку коли впевнились, що все правильно. Якщо виникають помилки, ви можете <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#clean-up-your-project-with-modules-2" target="_blank" rel="noopener noreferrer nofollow">переглянути проєкт, виконаний до цього етапу</a>.

# --hints--

Модулі повинні бути присутні.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
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
}
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

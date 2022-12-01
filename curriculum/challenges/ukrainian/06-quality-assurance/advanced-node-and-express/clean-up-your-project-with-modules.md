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

Do the same thing in your `auth.js` file with all of the things related to authentication such as the serialization and the setting up of the local strategy and erase them from your server file. Обов'язково додайте залежності і наберіть `auth(app, myDataBase)` на сервері в цьому ж місці.

Відправте свою сторінку коли впевнились, що все правильно. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#clean-up-your-project-with-modules-2" target="_blank" rel="noopener noreferrer nofollow">check out an example of the completed project</a>.

# --hints--

Модулі мають бути присутні.

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

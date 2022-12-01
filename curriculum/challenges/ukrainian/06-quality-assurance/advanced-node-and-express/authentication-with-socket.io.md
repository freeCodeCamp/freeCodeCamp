---
id: 589fc831f9fc0f352b528e77
title: Автентифікація за допомогою Socket.IO
challengeType: 2
forumTopicId: 301548
dashedName: authentication-with-socket-io
---

# --description--

Наразі ви не можете визначити, хто підключений до вашого веб-сокету. Хоча й `req.user` містить об'єкт "користувач", проте тільки тоді, коли ваш користувач взаємодіє з веб-сервером, тоді ж як до веб-сокетів у вас немає `req` (запиту), а, як наслідок, немає і даних користувача. Одним зі способів розв'язання проблеми відсутності інформації про те, хто підключений до вашого веб-сокету, є застосування синтаксичного аналізу та декодування файлів cookie, які містять сесію паспорту, далі - отриманні дані десеріалізуються задля отримання об'єкту "користувач". На щастя, NPM має спеціальний пакет для цього, який перетворює колись складну задачу на щось просте!

`passport.socketio@~3.7.0`, `connect-mongo@~3.2.0`, and `cookie-parser@~1.4.5` have already been added as dependencies. Require them as `passportSocketIo`, `MongoStore`, and `cookieParser` respectively. Also, we need to initialize a new memory store, from `express-session` which we previously required. It should look like this:

```js
const MongoStore = require('connect-mongo')(session);
const URI = process.env.MONGO_URI;
const store = new MongoStore({ url: URI });
```

Тепер треба лише вказати Socket.IO використовувати його та встановити налаштування. Переконайтеся, що його додано перед наявним кодом сокета, а не в цьому слухачі підключення. На вашому сервері це повинно мати такий вигляд:

```js
io.use(
  passportSocketIo.authorize({
    cookieParser: cookieParser,
    key: 'express.sid',
    secret: process.env.SESSION_SECRET,
    store: store,
    success: onAuthorizeSuccess,
    fail: onAuthorizeFail
  })
);
```

Зауважте, що налаштування автентифікації Passport для Socket.IO є дуже подібним до налаштування проміжного програмного забезпечення `session` для API. Це пояснюється тим, що вони призначені для одного методу автентифікації: отримати id сесії від файлів cookie та перевірити його.

Раніше, при налаштуванні проміжного програмного забезпечення `session`, ми не встановлювали безпосередньо назву файлів cookie для сесії (`key`). Це пояснюється тим, що пакет `session` використовував значення за замовчуванням. Тепер, коли додано інший пакет, який потребує доступу до того самого значення файлів cookies, треба чітко встановити значення `key` в обох об'єктах конфігурації.

Обов'язково виконайте додавання `key` з назвою файлів cookie до проміжного програмного забезпечення `session`, яке збігається з ключем Socket.IO. Також додайте посилання `store` на налаштування, поруч із якими ми пропишемо `saveUninitialized: true`. Необхідно вказати Socket.IO до якої сесії прив'язуватися.

<hr />

Тепер слід визначити функції зворотного зв'язку `success` та `fail`:

```js
function onAuthorizeSuccess(data, accept) {
  console.log('successful connection to socket.io');

  accept(null, true);
}

function onAuthorizeFail(data, message, error, accept) {
  if (error) throw new Error(message);
  console.log('failed connection to socket.io:', message);
  accept(null, false);
}
```

Об'єкт "користувач" тепер має доступ у вашому сокет-об'єкті як `socket.request.user`. Тепер, наприклад, ви можете додати таке:

```js
console.log('user ' + socket.request.user.username + ' connected');
```

Це дозволить увійти у підключену консоль серверу!

Відправте свою сторінку коли впевнились, що все правильно. If you're running into errors, you can  <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#authentication-with-socketio-9" target="_blank" rel="noopener noreferrer nofollow">check out the project up to this point</a>.

# --hints--

`passport.socketio` має бути залежністю.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'passport.socketio',
    'Your project should list "passport.socketio" as a dependency'
  );
}
```

`cookie-parser` має бути залежністю.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'cookie-parser',
    'Your project should list "cookie-parser" as a dependency'
  );
}
```

passportSocketIo має правильно виконуватися (required).

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require\((['"])passport\.socketio\1\)/gi,
    'You should correctly require and instantiate "passport.socketio"'
  );
}
```

passportSocketIo слід належним чином налаштувати.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io\.use\(\s*\w+\.authorize\(/,
    'You should register "passport.socketio" as socket.io middleware and provide it correct options'
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

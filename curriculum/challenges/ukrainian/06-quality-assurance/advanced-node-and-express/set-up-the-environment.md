---
id: 589fc830f9fc0f352b528e74
title: Налаштування середовища
challengeType: 2
forumTopicId: 301566
dashedName: set-up-the-environment
---

# --description--

Наступні завдання використовуватимуть файл `chat.pug`. Отже, у файлі `routes.js` додайте маршрут GET, вказуючи на `/chat`, що використовує `ensureAuthenticated` та відображає `chat.pug`, передаючи `{ user: req.user }` як аргумент до відповіді. Тепер змініть наявний маршрут `/auth/github/callback`, щоб встановити `req.session.user_id = req.user.id`, та перенаправте до `/chat`.

`socket.io@~2.3.0` вже додано як залежність, тому вимагайте/встановіть його на свій сервер наступним чином з `http` (вбудований з Nodejs):

```javascript
const http = require('http').createServer(app);
const io = require('socket.io')(http);
```

Тепер, коли сервер *http* встановлений у *програмі express*, вам потрібно послухати сервер *http*. Змініть рядок з `app.listen` на `http.listen`.

Спершу необхідно прослухати нове приєднання від клієнта. Ключове слово <dfn>on</dfn> робить якраз це: слухає конкретну подію. Воно вимагає 2 аргументи: рядок, що містить заголовок події, яка видається, і функція, через яку проходять дані. У випадку нашого слухача приєднання використайте `socket`, щоб визначити дані в другому аргументі. Сокет – це приєднаний індивідуальний клієнт.

Щоб прослухати приєднання до свого сервера, додайте до приєднання бази даних наступне:

```javascript
io.on('connection', socket => {
  console.log('A user has connected');
});
```

Тепер, щоб клієнт приєднався, вам потрібно просто додати до свого `client.js`, що завантажується сторінкою після автентифікації, наступне:

```js
/*global io*/
let socket = io();
```

Цей коментар замовчує помилку, яку ви б зазвичай бачили, оскільки у файлі не визначено «io». Ви вже додали надійний CDN до бібліотеки Socket.IO на сторінці у `chat.pug`.

Тепер спробуйте завантажити свою програму і автентифікуватись, і на консолі серверу ви побачите `A user has connected`.

**Примітка:** `io()` працює лише при приєднанні до сокета, який знаходиться на тому ж url/сервері. Щоб підключитись до зовнішнього сокета, який знаходиться в іншому місці, скористайтесь `io.connect('URL');`.

Відправте свою сторінку коли впевнились, що все правильно. Якщо виникають помилки, ви можете <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#set-up-the-environment-6" target="_blank" rel="noopener noreferrer nofollow">переглянути проєкт, виконаний до цього етапу</a>.

# --hints--

`socket.io` повинен бути залежністю.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'socket.io',
    'Your project should list "socket.io" as a dependency'
  );
}
```

Ви повинні правильно вимагати та встановити `http` як `http`.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /http.*=.*require.*('|")http\1/s,
    'Your project should list "http" as a dependency'
  );
}
```

Ви повинні правильно вимагати та встановити `socket.io` як `io`.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io.*=.*require.*('|")socket.io\1.*http/s,
    'You should correctly require and instantiate socket.io as io.'
  );
}
```

Socket.IO повинен слухати приєднання.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io.on.*('|")connection\1.*socket/s,
    'io should listen for "connection" and socket should be the 2nd arguments variable'
  );
}
```

Клієнт повинен приєднуватись до вашого сервера.

```js
async (getUserInput) => {
  const url = new URL("/public/client.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /socket.*=.*io/s,
    'Your client should be connection to server with the connection defined as socket'
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

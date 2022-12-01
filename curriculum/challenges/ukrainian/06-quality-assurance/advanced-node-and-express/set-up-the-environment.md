---
id: 589fc830f9fc0f352b528e74
title: Налаштування середовища
challengeType: 2
forumTopicId: 301566
dashedName: set-up-the-environment
---

# --description--

Наступні завдання використовуватимуть файл `chat.pug`. Отже, у файлі `routes.js` додайте шлях GET, вказавши на `/chat`, що використовує `ensureAuthenticated` і відображає `chat.pug`, передаючи `{ user: req.user }` як аргумент до відповіді. Тепер змініть існуючий шлях `/auth/github/callback`, щоб встановити `req.session.user_id = req.user.id`, і перенаправте до `/chat`.

`socket.io@~2.3.0` has already been added as a dependency, so require/instantiate it in your server as follows with `http` (comes built-in with Nodejs):

```javascript
const http = require('http').createServer(app);
const io = require('socket.io')(http);
```

Тепер, коли сервер *http* встановлений в *експрес застосунку*, чекайте відповіді від сервера *http*. Змініть рядок `app.listen` на `http.listen`.

Спершу необхідно прослухати нове з'єднання від клієнта. Ключове слово <dfn>on</dfn> робить лише це — прослуховує конкретну подію. It requires 2 arguments: a string containing the title of the event that's emitted, and a function with which the data is passed through. In the case of our connection listener, use `socket` to define the data in the second argument. Сокет (socket) – це підключений індивідуальний клієнт.

Щоб прослухати підключення до вашого сервера, додайте до вашого підключення бази даних наступне:

```javascript
io.on('connection', socket => {
  console.log('A user has connected');
});
```

Тепер, щоб клієнт під'єднався, вам треба просто додати до вашого `client.js`, що завантажується сторінкою після автентифікації, наступне:

```js
/*global io*/
let socket = io();
```

Цей коментар замовчує помилку, яку ви б зазвичай бачили, оскільки 'io' не визначено в файлі. You have already added a reliable CDN to the Socket.IO library on the page in `chat.pug`.

Now try loading up your app and authenticate and you should see in your server console `A user has connected`.

**Примітка:**`io()` працює лише тоді коли підключений до сокета, який знаходиться на тому ж url/сервері. Щоб підключитись до зовнішнього сокета, який знаходиться в іншому місці, скористайтесь `io.connect('URL');`.

Відправте свою сторінку коли впевнились, що все правильно. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#set-up-the-environment-6" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

`socket.io` має бути залежністю.

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

Ви маєте правильно запросити й встановити `http` як `http`.

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

Ви маєте правильно запросити й встановити `socket.io` як `io`.

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

Socket.IO має прослуховувати з'єднання.

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

Клієнт має бути підключеним до вашого сервера.

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

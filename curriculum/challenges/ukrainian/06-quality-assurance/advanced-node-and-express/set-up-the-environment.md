---
id: 589fc830f9fc0f352b528e74
title: Налаштування середовища
challengeType: 2
forumTopicId: 301566
dashedName: set-up-the-environment
---

# --description--

Наступні завдання використовуватимуть файл `chat.pug`. Отже, у файлі `routes.js` додайте шлях GET, вказавши на `/chat`, що використовує `ensureAuthenticated` і відображає `chat.pug`, передаючи `{ user: req.user }` як аргумент до відповіді. Тепер змініть існуючий шлях `/auth/github/callback`, щоб встановити `req.session.user_id = req.user.id`, і перенаправте до `/chat`.

Додайте `socket.io@~2.3.0` як залежність і запросіть/встановіть її на свій сервер, визначивши наступним чином, із `http` (постачається вбудованою з Nodejs):

```javascript
const http = require('http').createServer(app);
const io = require('socket.io')(http);
```

Тепер, коли сервер *http* встановлений в *експрес застосунку*, чекайте відповіді від сервера *http*. Змініть рядок `app.listen` на `http.listen`.

Спершу необхідно прослухати нове з'єднання від клієнта. Ключове слово <dfn>on</dfn> робить лише це — прослуховує конкретну подію. Йому треба 2 аргумента: рядок, що містить заголовок події, що передається, і функція, якою проходять дані. У випадку нашого слухача зв'язку, скористаємось *socket*, щоб визначити дані в наступному аргументі. Сокет (socket) – це підключений індивідуальний клієнт.

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

Цей коментар замовчує помилку, яку ви б зазвичай бачили, оскільки 'io' не визначено в файлі. Ми вже додали надійну CDN до бібліотеки Socket.IO на сторінці chat.pug.

Тепер спробуйте завантажити свій додаток і автентифікуватись, і ви маєте побачити в консолі серверу напис 'A user has connected'!

**Примітка:**`io()` працює лише тоді коли підключений до сокета, який знаходиться на тому ж url/сервері. Щоб підключитись до зовнішнього сокета, який знаходиться в іншому місці, скористайтесь `io.connect('URL');`.

Підтвердіть свою сторінку, коли зрозумієте, що все працює коректно. Якщо ви натрапите на помилки, можете перевірити виконання проєкту до цього етапу [тут](https://gist.github.com/camperbot/aae41cf59debc1a4755c9a00ee3859d1).

# --hints--

`socket.io` має бути залежністю.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'socket.io',
        'Your project should list "socket.io" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Ви маєте правильно запросити й встановити `http` як `http`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /http.*=.*require.*('|")http\1/gi,
        'Your project should list "http" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Ви маєте правильно запросити й встановити `socket.io` як `io`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /io.*=.*require.*('|")socket.io\1.*http/gi,
        'You should correctly require and instantiate socket.io as io.'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Socket.IO має прослуховувати з'єднання.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /io.on.*('|")connection\1.*socket/gi,
        'io should listen for "connection" and socket should be the 2nd arguments variable'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Клієнт має бути підключеним до вашого сервера.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/client.js').then(
    (data) => {
      assert.match(
        data,
        /socket.*=.*io/gi,
        'Your client should be connection to server with the connection defined as socket'
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

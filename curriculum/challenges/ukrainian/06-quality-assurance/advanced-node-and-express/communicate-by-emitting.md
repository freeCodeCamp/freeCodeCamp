---
id: 589fc831f9fc0f352b528e75
title: Спілкування за допомогою Emitting
challengeType: 2
forumTopicId: 301550
dashedName: communicate-by-emitting
---

# --description--

<dfn>Emit</dfn> — найпоширеніший спосіб спілкування, яким ви будете користуватись. Коли ви висвічуєте (emit) щось зі сервера до 'io', ви надсилаєте назву події й дані всім під'єднаним сокетам. Хорошим прикладом цієї концепції було б висвітлення (emitting) поточного рахунку під'єднаних користувачів щоразу коли під'єднується новий користувач!

Почніть із додавання змінної, щоб відстежувати користувачів, безпосередньо перед тим місцем, де ви зараз слухаєте зв'язки.

```js
let currentUsers = 0;
```

Тепер, коли хтось приєднується, ви повинні збільшити рахунок перш ніж висвітити його. Отже, ви додаєте інкремент в межах слухача підключення.

```js
++currentUsers;
```

Врешті, після збільшення рахунку, ви повинні висвітити подію (все ще в слухачі підключення). Ця подія повинна мати назву "user count", а дані — просто `currentUsers`.

```js
io.emit('user count', currentUsers);
```

Тепер ви можете застосувати цей спосіб для вашого клієнта, аби він міг прослухати цю подію! Подібно до прослуховування з'єднання на сервері, ви будете використовувати ключове слово `on`.

```js
socket.on('user count', function(data) {
  console.log(data);
});
```

Тепер спробуйте завантажити ваш додаток, автентифікуватись і ви повинні побачити на консолі клієнта '1', яка показує поточну кількість користувачів! Спробуйте завантажити більше клієнтів і автентифікуйтеся, щоб побачити, як число зростає.

Відправте сторінку, якщо все було виконано правильно. If you're running into errors, you can <a href="https://gist.github.com/camperbot/28ef7f1078f56eb48c7b1aeea35ba1f5" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

currentUsers мають бути визначеними.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /currentUsers/gi,
        'You should have variable currentUsers defined'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Сервер має висвічувати поточний рахунок користувачів в кожному новому зв'язку.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /io.emit.*('|")user count('|").*currentUsers/gi,
        'You should emit "user count" with data currentUsers'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Ваш клієнт повинен прослухати подію 'user count'.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/client.js').then(
    (data) => {
      assert.match(
        data,
        /socket.on.*('|")user count('|")/gi,
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

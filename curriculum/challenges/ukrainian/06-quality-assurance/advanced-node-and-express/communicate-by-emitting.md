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

Відправте свою сторінку коли впевнились, що все правильно. Якщо виникають помилки, ви можете <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#communicate-by-emitting-7" target="_blank" rel="noopener noreferrer nofollow">переглянути проєкт, виконаний до цього етапу</a>.

# --hints--

`currentUsers` should be defined.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /currentUsers/s,
    'You should have variable currentUsers defined'
  );
}
```

Сервер має висвічувати поточний рахунок користувачів в кожному новому зв'язку.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io.emit.*('|")user count('|").*currentUsers/s,
    'You should emit "user count" with data currentUsers'
  );
}
```

Your client should be listening for `'user count'` event.

```js
async (getUserInput) => {
  const url = new URL("/public/client.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /socket.on.*('|")user count('|")/s,
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

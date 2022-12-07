---
id: 589fc831f9fc0f352b528e75
title: Комунікація за допомогою видачі
challengeType: 2
forumTopicId: 301550
dashedName: communicate-by-emitting
---

# --description--

<dfn>Видача</dfn> – найпоширеніший спосіб спілкування, яким ви будете користуватись. Коли ви видаєте щось зі сервера до «io», ви надсилаєте назву події та дані всім приєднаним сокетам. Хорошим прикладом цієї концепції є видача поточної кількості приєднаних користувачів щоразу, коли приєднується новий користувач!

Почніть із додавання змінної, щоб відстежувати користувачів, одразу перед тим місцем, де ви зараз слухаєте приєднання.

```js
let currentUsers = 0;
```

Тепер, коли хтось приєднується, ви повинні збільшити кількість, перш ніж видати її. Тому вам потрібно буде додати інкремент в межах слухача приєднання.

```js
++currentUsers;
```

Після збільшення кількості ви повинні видати подію (досі в слухачі приєднання). Ця подія повинна мати назву «user count», а дані – просто `currentUsers`.

```js
io.emit('user count', currentUsers);
```

Тепер ви можете застосувати цей спосіб для свого клієнта, щоб він міг прослухати цю подію! Подібно до прослуховування приєднання на сервері, ви будете використовувати ключове слово `on`.

```js
socket.on('user count', function(data) {
  console.log(data);
});
```

Тепер спробуйте завантажити свою програму, автентифікуватись і ви повинні побачити на консолі клієнта «1», що показує поточну кількість користувачів! Спробуйте завантажити більше клієнтів і автентифікуйтеся, щоб побачити, як число зростає.

Відправте свою сторінку коли впевнились, що все правильно. Якщо виникають помилки, ви можете <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#communicate-by-emitting-7" target="_blank" rel="noopener noreferrer nofollow">переглянути проєкт, виконаний до цього етапу</a>.

# --hints--

`currentUsers` повинні бути визначеними.

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

Сервер повинен видавати поточну кількість користувачів при кожному приєднанні.

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

Ваш клієнт повинен прослухати подію `'user count'`.

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

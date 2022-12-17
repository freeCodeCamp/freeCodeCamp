---
id: 589fc831f9fc0f352b528e76
title: Обробка від'єднання
challengeType: 2
forumTopicId: 301552
dashedName: handle-a-disconnect
---

# --description--

Ви могли помітити, що до цього часу кількість користувачів тільки збільшувалась. Обробка від'єднання користувача така ж легка, як і обробка приєднання, окрім того, що ви повинні слухати його на кожному сокеті, а не на цілому сервері.

Щоб зробити це, додайте ще одного слухача всередині наявного слухача `'connect'`, який слухає `'disconnect'` на сокеті без передачі даних. Ви можете протестувати цю функціональність, просто ввівши на консолі про від'єднання користувача.

```js
socket.on('disconnect', () => {
  /*anything you want to do on disconnect*/
});
```

Щоб переконатися, що клієнти постійно мають оновлену кількість користувачів, ви повинні зменшити `currentUsers` на 1, коли відбувається від'єднання, а потім видати подію `'user count'` з оновленою кількістю.

**Примітка:** як і `'disconnect'`, всі інші події, які сокет може видавати на сервер, повинні бути обробленими в під'єднаному слухачі, де визначений «сокет».

Відправте свою сторінку коли впевнились, що все правильно. Якщо виникають помилки, ви можете <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#handle-a-disconnect-8" target="_blank" rel="noopener noreferrer nofollow">переглянути проєкт, виконаний до цього етапу</a>.

# --hints--

Сервер повинен обробляти подію від'єднання від сокету.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(data, /socket.on.*('|")disconnect('|")/s, '');
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

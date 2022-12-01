---
id: 589fc831f9fc0f352b528e76
title: Оброблення відключення
challengeType: 2
forumTopicId: 301552
dashedName: handle-a-disconnect
---

# --description--

Ви можете звернути увагу на те, що до цього часу Ви мали тільки збільшення кількості користувачів. Обробка відключення користувача так само легка, як і робота з початковим підключенням, окрім випадків, коли ви повинні слухати його на кожному сокеті, а не на всьому сервері.

Щоб зробити це, додайте іншого слухача всередині існуючого `'connect'` слухача, який слухає `'disconnect'` на сокеті без обробки даних. Ви можете протестувати ці функції, просто увійшовши до консолі, від якої користувач відключився.

```js
socket.on('disconnect', () => {
  /*anything you want to do on disconnect*/
});
```

To make sure clients continuously have the updated count of current users, you should decrease `currentUsers` by 1 when the disconnect happens then emit the `'user count'` event with the updated count.

**Примітка:** Як і `'disconnect'`, всі інші події, які сокет може передавати на сервер слід обробити в процесі підключення слухача де ми маємо 'сокет'.

Відправте свою сторінку коли впевнились, що все правильно. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#handle-a-disconnect-8" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

Сервер повинен обробляти подію відключення від сокету.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(data, /socket.on.*('|")disconnect('|")/s, '');
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

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

Щоб переконатися, що клієнти постійно мають оновлену кількість користувачів, ви повинні зменшити поточних користувачів (currentUsers) на 1, поки відбувається від'єднання потім викликати 'user count' з оновленою кількістю!

**Примітка:** Як і `'disconnect'`, всі інші події, які сокет може передавати на сервер слід обробити в процесі підключення слухача де ми маємо 'сокет'.

Підтвердіть вашу сторінку, якщо все зрозуміло. Якщо сталась якась помилка, ви маєте змогу перевірити зроблений проєкт до цього етапу [тут](https://gist.github.com/camperbot/ab1007b76069884fb45b215d3c4496fa).

# --hints--

Сервер повинен обробляти подію відключення від сокету.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(data, /socket.on.*('|")disconnect('|")/gi, '');
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Ваш клієнт повинен слідкувати за 'user count' кодом.

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

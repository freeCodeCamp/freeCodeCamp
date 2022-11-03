---
id: 589fc832f9fc0f352b528e79
title: Відправлення та відображення повідомлень чату
challengeType: 2
forumTopicId: 301562
dashedName: send-and-display-chat-messages
---

# --description--

Настав час почати надсилати повідомлення чату на сервер всім клієнтам! У файлі `client.js`, ви бачите, що вже існує блок обробки коду, після відправлення форми повідомлення.

```js
$('form').submit(function() {
  /*logic*/
});
```

У межах коду відправлення форми ви повинні видати (emit) подію після визначення `messageToSend`, але перед тим, як ви очистите текстову панель `#m`. Код повинен називатися `'chat message'` і дані повинні бути `messageToSend`.

```js
socket.emit('chat message', messageToSend);
```

Тепер на вашому сервері, ви мусите прослухати сокет для події `'chat message'` з назвою `message`. Після отримання події він повинен буде видати подію `'chat message'` до всіх сокетів `io.emit` з даними об'єкта, що містить `name` та `message`.

В `client.js`, тепер необхідно послухати подію `'chat message'` і після отримання, додати список елементів до `#message` з іменем, двокрапкою та повідомленням!

На даний момент чат повинен бути повністю функціональним і спроможним відправляти повідомлення всім клієнтам!

Підтвердіть вашу сторінку, якщо все зрозуміло. If you're running into errors, you can <a href="https://gist.github.com/camperbot/d7af9864375207e254f73262976d2016" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

Сервер має слухати `'chat message'` та переміщувати (emit) його належним чином.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /socket.on.*('|")chat message('|")[^]*io.emit.*('|")chat message('|").*name.*message/gis,
        'Your server should listen to the socket for "chat message" then emit to all users "chat message" with name and message in the data object'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Клієнт повинен правильно обробляти та показувати нові дані із події `'chat message'`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/client.js').then(
    (data) => {
      assert.match(
        data,
        /socket.on.*('|")chat message('|")[^]*messages.*li/gis,
        'You should append a list item to #messages on your client within the "chat message" event listener to display the new message'
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

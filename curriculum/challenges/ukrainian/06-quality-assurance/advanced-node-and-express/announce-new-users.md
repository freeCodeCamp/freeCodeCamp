---
id: 589fc832f9fc0f352b528e78
title: Повідомлення про нових користувачів
challengeType: 2
forumTopicId: 301546
dashedName: announce-new-users
---

# --description--

Багато чатів мають функцію повідомлення всіх підключених користувачів чату про приєднання чи від'єднання користувача. Оскільки приєднання чи від'єднання це вже виконання дії, то для підтримки такої функції вам потрібно відредагувати цю подію. The most logical way of doing so is sending 3 pieces of data with the event: the username of the user who connected/disconnected, the current user count, and if that username connected or disconnected.

Change the event name to `'user'`, and pass an object along containing the fields `username`, `currentUsers`, and `connected` (to be `true` in case of connection, or `false` for disconnection of the user sent). Be sure to change both `'user count'` events and set the disconnect one to send `false` for the field `connected` instead of `true` like the event emitted on connect.

```js
io.emit('user', {
  username: socket.request.user.username,
  currentUsers,
  connected: true
});
```

Тепер ваш клієнт матиме всю необхідну інформацію, щоб правильно показати кількість поточних користувачів і повідомити, коли користувач підключається або відключається! Щоб обробити цю подію зі сторони клієнта, ми повинні отримати `'user'`, а потім оновити кількість поточних користувачів за допомогою jQuery, щоб замінити текст `#num-users` на `'{NUMBER} users online'`, а також додати `<li>` до невпорядкованого маркованого списку з id `messages` з `'{NAME} has {joined/left} the chat.'`.

Ця дія може виглядати таким чином:

```js
socket.on('user', data => {
  $('#num-users').text(data.currentUsers + ' users online');
  let message =
    data.username +
    (data.connected ? ' has joined the chat.' : ' has left the chat.');
  $('#messages').append($('<li>').html('<b>' + message + '</b>'));
});
```

Відправте сторінку, якщо все було виконано правильно. If you're running into errors, you can check out <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135/3#announce-new-users-10" target="_blank" rel="noopener noreferrer nofollow">the project completed up to this point </a>.

# --hints--

Event `'user'` should be emitted with `name`, `currentUsers`, and `connected`.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io.emit.*('|")user\1.*name.*currentUsers.*connected/s,
    'You should have an event emitted named user sending name, currentUsers, and connected'
  );
}
```

Клієнт повинен правильно обробляти та показувати нові дані із події `'user'`.

```js
async (getUserInput) => {
  const url = new URL("/public/client.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /socket.on.*('|")user\1[^]*num-users/s,
    'You should change the text of "#num-users" within on your client within the "user" event listener to show the current users connected'
  );
  assert.match(
    data,
    /socket.on.*('|")user\1[^]*messages.*li/s,
    'You should append a list item to "#messages" on your client within the "user" event listener to announce a user came or went'
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

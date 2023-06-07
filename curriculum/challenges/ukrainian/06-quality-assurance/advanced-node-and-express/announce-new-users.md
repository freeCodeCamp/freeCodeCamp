---
id: 589fc832f9fc0f352b528e78
title: Повідомлення про нових користувачів
challengeType: 2
forumTopicId: 301546
dashedName: announce-new-users
---

# --description--

Багато чатів можуть повідомляти всіх приєднаних користувачів чату про приєднання чи від'єднання іншого користувача. Оскільки з приєднанням чи від'єднанням ви видаєте подію, то для підтримки такої функції вам потрібно просто відредагувати цю подію. Найлогічніший спосіб зробити це – надіслати 3 частини даних разом із подією: ім’я користувача, який приєднався/від'єднався, поточну кількість користувачів, а також те, чи це ім’я користувача приєднане чи від'єднане.

Змініть назву події на `'user'` і передайте об'єкт, що містить поля `username`, `currentUsers` та `connected` (`true` у разі приєднання або `false` у разі від'єднання надісланого користувача). Обов’язково переконайтесь, що змінили обидві події `'user count'` та встановили подію від'єднання так, щоб надсилалось `false` у поле `connected` замість `true`, яке надсилається у події приєднання.

```js
io.emit('user', {
  username: socket.request.user.username,
  currentUsers,
  connected: true
});
```

Тепер ваш клієнт матиме всю необхідну інформацію, щоб правильно показувати кількість поточних користувачів і повідомляти, коли користувач під'єднується або від'єднується! Щоб обробити цю подію зі сторони клієнта, ми повинні послухати `'user'`, потім оновити кількість поточних користувачів за допомогою jQuery, щоб змінити текст `#num-users` на `'{NUMBER} users online'`, а також додати `<li>` до невпорядкованого списку з id `messages` з `'{NAME} has {joined/left} the chat.'`.

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

Відправте свою сторінку коли впевнились, що все правильно. Якщо виникають помилки, ви можете <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135/3#announce-new-users-10" target="_blank" rel="noopener noreferrer nofollow">переглянути проєкт, виконаний до цього етапу</a>.

# --hints--

Подія `'user'` повинна видаватись з `name`, `currentUsers` та `connected`.

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

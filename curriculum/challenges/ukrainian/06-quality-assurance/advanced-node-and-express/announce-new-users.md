---
id: 589fc832f9fc0f352b528e78
title: Повідомлення про нових користувачів
challengeType: 2
forumTopicId: 301546
dashedName: announce-new-users
---

# --description--

Багато чатів мають функцію повідомлення всіх підключених користувачів чату про приєднання чи від'єднання користувача. Оскільки приєднання чи від'єднання це вже виконання дії, то для підтримки такої функції вам потрібно відредагувати цю подію. Найбільш логічний спосіб зробити це — надіслати певні дані з подією: ім’я користувача, який приєднався/від'єднався, поточну кількість користувачів, а також те, чи це ім’я приєднане чи від'єднане.

Змініть назву події на `'user'` і надішліть інформацію, що містить поля 'name', 'currentUsers' і 'connected' (`true` у разі приєднання, або - `false` для відключення користувача). Обов’язково переконайтесь, що ви змінили події 'user count' та встановили `false` при відключенні для поля 'connected' замість `true`, як і при підключенні.

```js
io.emit('user', {
  name: socket.request.user.name,
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
    data.name +
    (data.connected ? ' has joined the chat.' : ' has left the chat.');
  $('#messages').append($('<li>').html('<b>' + message + '</b>'));
});
```

Відправте сторінку, якщо все було виконано правильно. Якщо виникла помилка, ви можете перевірити виконання проєкту до цього етапу [тут](https://gist.github.com/camperbot/bf95a0f74b756cf0771cd62c087b8286).

# --hints--

Подія `'user'` повинна містити name, currentUsers та connected.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /io.emit.*('|")user\1.*name.*currentUsers.*connected/gis,
        'You should have an event emitted named user sending name, currentUsers, and connected'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Клієнт повинен правильно обробляти та показувати нові дані із події `'user'`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/client.js').then(
    (data) => {
      assert.match(
        data,
        /socket.on.*('|")user\1[^]*num-users/gi,
        'You should change the text of "#num-users" within on your client within the "user" event listener to show the current users connected'
      );
      assert.match(
        data,
        /socket.on.*('|")user\1[^]*messages.*li/gi,
        'You should append a list item to "#messages" on your client within the "user" event listener to announce a user came or went'
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

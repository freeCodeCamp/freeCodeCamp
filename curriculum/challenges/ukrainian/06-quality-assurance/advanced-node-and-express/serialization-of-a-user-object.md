---
id: 5895f70cf9fc0f352b528e66
title: Серіалізація об'єкта-користувача
challengeType: 2
forumTopicId: 301563
dashedName: serialization-of-a-user-object
---

# --description--

Серіалізація та десеріалізація є важливими поняттями щодо автентифікації. Серіалізувати об’єкт означає перетворити його вміст в маленький *ключ*, який потім можна десеріалізувати у вихідний об’єкт. Це дозволяє нам знати, хто користувався сервером без надсилання даних автентифікації, таких як ім’я користувача та пароль, при кожному запиті на нову сторінку.

Щоб налаштувати це правильно, потрібно мати функцію серіалізації та функцію десеріалізації. У Passport їх можна створити з:

```javascript
passport.serializeUser(cb);
passport.deserializeUser(cb);
```

Функція зворотного виклику, передана до `serializeUser`, викликається з двома аргументами: повним об'єктом-користувачем та зворотним викликом, що використовується паспортом.

Зворотний виклик очікує два аргументи: помилку, якщо така є, та унікальний ключ для ідентифікації користувача, який має бути повернутий у зворотному виклику. Ви використовуватимете `_id` користувача в об’єкті. Він гарантовано унікальний, оскільки його створив MongoDB.

`deserializeUser` також викликається з двома аргументами: унікальним ключем та функцією зворотного виклику.

Цей зворотний виклик очікує два аргументи: помилку, якщо така є, та повного об’єкта-користувача. Щоб отримати повного об’єкта-користувача, виконайте пошуковий запит для `_id` Mongo, як показано нижче:


```javascript
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  myDataBase.findOne({ _id: new ObjectID(id) }, (err, doc) => {
    done(null, null);
  });
});
```

Додайте дві функції вище на свій сервер. Клас `ObjectID` походить із пакета `mongodb`. `mongodb@~3.6.0` вже додано як залежність. Оголосіть цей клас з:

```javascript
const { ObjectID } = require('mongodb');
```

`deserializeUser` видаватиме помилку, доки ви не налаштуєте підключення до бази даних. Тому закоментуйте виклик `myDatabase.findOne` та просто викличте `done(null, null)` у функції зворотного виклику `deserializeUser`.

Відправте свою сторінку коли впевнились, що все правильно. Якщо виникають помилки, ви можете <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#serialization-of-a-user-object-4" target="_blank" rel="noopener noreferrer nofollow">переглянути проєкт, виконаний до цього етапу</a>.

# --hints--

Ви повинні правильно серіалізувати об’єкт користувача.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /passport.serializeUser/gi,
    'You should have created your passport.serializeUser function'
  );
  assert.match(
    data,
    /null,\s*user._id/gi,
    'There should be a callback in your serializeUser with (null, user._id)'
  );
}
```

Ви повинні правильно десеріалізувати об’єкт користувача.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /passport.deserializeUser/gi,
    'You should have created your passport.deserializeUser function'
  );
  assert.match(
    data,
    /null,\s*null/gi,
    'There should be a callback in your deserializeUser with (null, null) for now'
  );
}
```

MongoDB повинен бути залежністю.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'mongodb',
    'Your project should list "mongodb" as a dependency'
  );
}
```

Mongodb повинен бути правильно заданий, включно з ObjectId.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require.*("|')mongodb\1/gi,
    'You should have required mongodb'
  );
  assert.match(
    data,
    /new ObjectID.*id/gi,
    'Even though the block is commented out, you should use new ObjectID(id) for when we add the database'
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

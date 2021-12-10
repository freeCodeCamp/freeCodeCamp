---
id: 5895f70cf9fc0f352b528e66
title: Серіалізація об'єкта користувача
challengeType: 2
forumTopicId: 301563
dashedName: serialization-of-a-user-object
---

# --description--

Серіалізація та десеріалізація є важливими поняттями щодо автентифікації. Серіалізація об’єкта означає перетворення його вмісту в маленький *ключ*, який потім можна десеріалізувати у вихідний об’єкт. Це дозволяє нам знати, хто користувався сервером без надсилання даних автентифікації, таких як ім’я користувача та пароль, при кожному запиті на нову сторінку.

Щоб налаштувати його належним чином, потрібно мати функцію серіалізації та функцію десеріалізації. У Passport, ми створюємо їх за допомогою `passport.serializeUser( OURFUNCTION )` та `passport.deserializeUser( OURFUNCTION )`

`serializeUser` викликається 2 аргументами, повним об'єктом користувача та зворотним викликом, що використовується паспортом. Унікальний ключ для ідентифікації того, що користувача слід повернути у зворотному виклику, найпростіший у використанні `_id` користувача в об'єкті. Він повинен бути унікальним, оскільки він створений MongoDB. Аналогічно, `deserializeUser` викликається за допомогою цього ключа і також функції зворотного виклику паспорта, але цього разу ми повинні взяти цей ключ і повернути повний об'єкт користувача до зворотного виклику. Щоб здійснити пошук за запитом для Mongo `_id`, вам потрібно створити `const ObjectID = require('mongodb').ObjectID;`, а потім, щоб використати його, викличте `new ObjectID(THE_ID)`. Обов’язково додайте `mongodb@~3.6.0` як залежність. Ви можете побачити це в наведених нижче прикладах:

```js
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  myDataBase.findOne({ _id: new ObjectID(id) }, (err, doc) => {
    done(null, null);
  });
});
```

ПРИМІТКА: `deserializeUser` видасть помилку, поки ми не налаштуємо базу даних (DB) на наступному кроці, тому поки що прокоментуйте весь блок і просто викличте `done(null, null)` у функції `deserializeUser`.

Підтвердіть сторінку, якщо все виконано вірно. Якщо виникла помилка, ви можете перевірити виконання проєкту до цього етапу [here](https://gist.github.com/camperbot/7068a0d09e61ec7424572b366751f048).

# --hints--

Вам слід правильно серіалізувати функцію користувача.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
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
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Вам слід належним чином десеріалізувати функцію користувача.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
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
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

MongoDB має бути залежністю.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'mongodb',
        'Your project should list "mongodb" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Mongodb повинен бути включеним (required) належним чином, включаючи ObjectId.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
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

---
id: 5895f70cf9fc0f352b528e67
title: Впровадження Серіалізації Користувача у Паспорт
challengeType: 2
forumTopicId: 301556
dashedName: implement-the-serialization-of-a-passport-user
---

# --description--

Зараз ми не завантажуємо поточний об’єкт користувача, оскільки ми ще не налаштували нашу базу даних. Це можна зробити багатьма різними способами, але для нашого проєкту ми під'єднаємось до бази даних один раз при запуску сервера і збережемо постійне з'єднання протягом усього життєвого циклу додатку. Для цього додайте рядок з'єднання вашої бази даних (наприклад: `mongodb+srv://:@cluster0-jvwxi.mongodb.net/?retryWrites=true&w=majority`) до змінної середовища `MONGO_URI`. Це використовується у файлі `connection.js`.

*Ви можете створити безкоштовну базу даних на [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).*

Тепер ми хочемо підключитися до нашої бази даних, а після того почати створювати запити. Це робимо з метою, щоб заборонити запити до того, як наша база даних буде підключена або якщо у неї виникне помилка. Для досягнення цього вам потрібно включити свою серіалізацію та маршрути додатків у такий код:

```js
myDB(async client => {
  const myDataBase = await client.db('database').collection('users');

  // Be sure to change the title
  app.route('/').get((req, res) => {
    //Change the response to render the Pug template
    res.render('pug', {
      title: 'Connected to Database',
      message: 'Please login'
    });
  });

  // Serialization and deserialization here...

  // Be sure to add this...
}).catch(e => {
  app.route('/').get((req, res) => {
    res.render('pug', { title: e, message: 'Unable to login' });
  });
});
// app.listen out here...
```

Не забудьте розкоментувати код `myDataBase` в `deserializeUser` та відредагувати свій `done(null, null)` для того, щоб включити `doc`.

Відправте сторінку, якщо все було виконано правильно. Якщо ви зіткнулись з помилкою, ви можете перевірити зроблений проєкт до цього етапу [тут](https://gist.github.com/camperbot/175f2f585a2d8034044c7e8857d5add7).

# --hints--

Повинно бути присутнім з'єднання з базою даних.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/').then(
    (data) => {
      assert.match(
        data,
        /Connected to Database/gi,
        'You successfully connected to the database!'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Тепер десеріалізація повинна виконуватися правильно у БД, а `done(null, null)` повинна викликатися із `doc`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /null,\s*doc/gi,
        'The callback in deserializeUser of (null, null) should be altered to (null, doc)'
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

---
id: 5895f70cf9fc0f352b528e67
title: Реалізація серіалізації користувача Passport
challengeType: 2
forumTopicId: 301556
dashedName: implement-the-serialization-of-a-passport-user
---

# --description--

Ви не завантажуєте самого об’єкта-користувача, оскільки базу даних не налаштовано. Приєднайтеся до бази даних під час запуску сервера та зберігайте постійне з’єднання протягом життєвого циклу програми. Щоб зробити це, додайте рядок приєднання своєї бази даних (наприклад: `mongodb+srv://<username>:<password>@cluster0-jvwxi.mongodb.net/?retryWrites=true&w=majority`) до змінної середовища `MONGO_URI`. Це використовується у файлі `connection.js`.

*Якщо у вас виникли проблеми з налаштуванням безоплатної бази даних на MongoDB Atlas, див. <a href="https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/" target="_blank" rel="noopener noreferrer nofollow">цю публікацію</a>.*

Тепер вам потрібно приєднатися до своєї бази даних, а потім почати слухати запити. Основна мета цього – це заборонити запити до того, як ваша база даних буде підключена або якщо у неї виникне помилка. Для цього потрібно оточити свою серіалізацію та маршрути програми наступним кодом:

```javascript
myDB(async client => {
  const myDataBase = await client.db('database').collection('users');

  // Be sure to change the title
  app.route('/').get((req, res) => {
    // Change the response to render the Pug template
    res.render('index', {
      title: 'Connected to Database',
      message: 'Please login'
    });
  });

  // Serialization and deserialization here...

  // Be sure to add this...
}).catch(e => {
  app.route('/').get((req, res) => {
    res.render('index', { title: e, message: 'Unable to connect to database' });
  });
});
// app.listen out here...
```

Не забудьте розкоментувати код `myDataBase` в `deserializeUser` та відредагувати свій `done(null, null)` для того, щоб включити `doc`.

Відправте свою сторінку коли впевнились, що все правильно. Якщо виникають помилки, ви можете <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#implement-the-serialization-of-a-passport-user-5" target="_blank" rel="noopener noreferrer nofollow">переглянути проєкт, виконаний до цього етапу</a>.

# --hints--

Приєднання до бази даних повинне бути присутнім.

```js
async (getUserInput) => {
  const url = new URL("/", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /Connected to Database/gi,
    'You successfully connected to the database!'
  );
}
```

Десеріалізація повинна правильно використовувати базу даних та `done(null, null)` повинен викликатись з `doc`.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /null,\s*doc/gi,
    'The callback in deserializeUser of (null, null) should be altered to (null, doc)'
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

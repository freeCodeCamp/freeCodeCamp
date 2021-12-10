---
id: 587d7fb6367417b2b2512c06
title: Встановлення і налаштування Mongoose
challengeType: 2
forumTopicId: 301540
dashedName: install-and-set-up-mongoose
---

# --description--

Робота над цими завданнями включатиме написання вашого коду з використанням одного з наступних методів:

- Створіть [цей GitHub репозитарій](https://github.com/freeCodeCamp/boilerplate-mongomongoose/) і локально завершіть ці завдання.
- Використовуйте [наш стартовий проєкт Replit](https://replit.com/github/freeCodeCamp/boilerplate-mongomongoose) для виконання цих завдань.
- Використовуйте конструктор сайту на власний розсуд, щоб завершити проєкт. Перевірте, що ви зберегли усі файли з нашого репозиторію GitHub.

По завершенню, переконайтеся, що працююча демоверсія вашого проєкту розміщена у відкритому доступі. Потім введіть URL - адресу проєкту в поле `Solution Link` field.

У цьому завданні, створіть базу даних MongoDB Atlas та імпортуйте необхідні пакети для підключення до неї.

Дотримуйтесь <a href='https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/' rel='noopener noreferrer' target='_blank'>цих вказівок</a>, щоб налаштувати розміщену базу даних на MongoDB Atlas.

# --instructions--

Додайте `mongodb@~3.6.0` і `mongoose@~5.4.0` до `package.json` проєкту. Потім, необхідно встановити mongoose як `mongoose` у `myApp.js`. Створіть файл `.env` і додайте до нього змінну `MONGO_URI`. Його значенням має бути ваш URI бази даних MongoDB Atlas. Обов'язково помістіть URI в одинарні чи подвійні лапки, і пам'ятайте, що ви не можете використовувати пробіли навколо `=` у змінних середовища. Наприклад, `MONGO_URI='VALUE'`. Після завершення, під'єднайтесь до бази даних, використовуючи наступний синтаксис:

```js
mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true });
```

# --hints--

Залежність "mongodb" слід вказати в package.json

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/file/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(packJson.dependencies, 'mongodb');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Залежність "mongoose" слід вказати в package.json

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/file/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(packJson.dependencies, 'mongoose');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

"mongoose" слід підключити до бази даних

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/is-mongoose-ok').then(
    (data) => {
      assert.isTrue(data.isMongooseOk, 'mongoose is not connected');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
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

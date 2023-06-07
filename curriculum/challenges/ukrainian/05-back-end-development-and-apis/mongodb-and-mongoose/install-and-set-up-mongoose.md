---
id: 587d7fb6367417b2b2512c06
title: Встановіть та налаштуйте Mongoose
challengeType: 2
forumTopicId: 301540
dashedName: install-and-set-up-mongoose
---

# --description--

Робота над цими завданнями передбачає написання коду за допомогою одного з наступних методів:

- Клонуйте <a href="https://github.com/freeCodeCamp/boilerplate-mongomongoose/" target="_blank" rel="noopener noreferrer nofollow">цей репозиторій GitHub</a> та виконайте завдання локально.
- Використайте <a href="https://replit.com/github/freeCodeCamp/boilerplate-mongomongoose" target="_blank" rel="noopener noreferrer nofollow">наш стартовий проєкт Replit</a> для виконання цих завдань.
- Для виконання проєкту використайте конструктор сайту на власний вибір. Переконайтеся, що приєднали усі файли з нашого репозиторію GitHub.

Якщо ви використовуєте Replit, виконайте наступні кроки для налаштування проєкту:

-   Почніть з імпорту проєкту на Replit.
-   Потім ви побачите вікно `.replit`.
-   Оберіть `Use run command` та натисніть кнопку `Done`.

Після завершення переконайтеся, що демоверсія проєкту розміщена у відкритому доступі. Потім введіть URL-адресу проєкту в полі «Посилання на рішення».

У цьому завданні створіть базу даних MongoDB Atlas та імпортуйте необхідні пакети для підключення до неї.

Дотримуйтесь <a href='https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/' target="_blank" rel="noopener noreferrer nofollow">цих вказівок</a>, щоб налаштувати розміщену базу даних на MongoDB Atlas.

# --instructions--

`mongoose@^5.11.15` додано до файлу `package.json` вашого проєкту. Спочатку необхідно встановити mongoose як `mongoose` у `myApp.js`. Потім створіть файл `.env` і додайте до нього змінну `MONGO_URI`. Значенням повинне бути URI вашої бази даних MongoDB Atlas. Обов'язково помістіть URI в одинарні чи подвійні лапки, і пам'ятайте, що ви не можете використовувати пробіли навколо `=` у змінних середовища. Наприклад, `MONGO_URI='VALUE'`.

**Примітка:** якщо ви використовуєте Replit, ви не можете створити файл `.env`. Замість цього використайте вбудовану вкладку <dfn>SECRETS</dfn> для додавання змінної. <em>Не</em> беріть значення в лапки під час використання вкладки <em>SECRETS</em>.

Коли закінчите, приєднайтесь до бази даних, викликавши метод `connect` в межах файлу `myApp.js`, використавши наступний синтаксис:

```js
mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true });
```

# --hints--

Залежність «mongoose version ^5.11.15» повинна бути в package.json

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/file/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(packJson.dependencies, 'mongoose');
      assert.match(
        packJson.dependencies.mongoose,
        /^\^5\.11\.15/,
        'Wrong version of "mongoose". It should be ^5.11.15'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

«mongoose» потрібно під'єднати до бази даних

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

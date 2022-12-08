---
id: 5895f70cf9fc0f352b528e65
title: Налаштування Passport
challengeType: 2
forumTopicId: 301565
dashedName: set-up-passport
---

# --description--

Час встановити *Passport*, щоб дозволити користувачеві реєструватися або входити в обліковий запис. Окрім Passport ви будете використовувати Express-session для обробки сесій. Express-session має величезний набір розширених функцій, які ви можете використати, але зараз ви будете використовувати лише основні. Використання цього проміжного програмного забезпечення зберігає id сесії як куки в клієнті та дозволяє нам отримати доступ до даних сесії, використовуючи цей id на сервері. Таким чином ви зберігаєте особисту інформацію облікового запису поза куками, які клієнт використовує, аби повідомити ваш сервер про автентифікованих клієнтів, і зберігаєте *ключ* для доступу до даних, які зберігаються на сервері.

`passport@~0.4.1` та `express-session@~1.17.1` вже встановлені та вказані як залежності у вашому файлі `package.json`.

Вам потрібно буде встановити налаштування сесії та ініціалізувати Passport. Спочатку створіть змінні `session` та `passport`, щоб вимагати `express-session` та `passport` відповідно.

Потім налаштуйте програму Express на використання сесії, визначивши наступні параметри:

```javascript
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));
```

Не забудьте додати `SESSION_SECRET` до свого файлу `.env` та надати йому випадкове значення. Це використовується для обчислення хешу, щоб зашифрувати ваші куки!

Після того, як ви все зробите, скажіть своїй програмі Express **використовувати** `passport.initialize()` та `passport.session()`.

Відправте свою сторінку коли впевнились, що все правильно. Якщо виникають помилки, ви можете <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#set-up-passport-3" target="_blank" rel="noopener noreferrer nofollow">переглянути проєкт, виконаний до цього етапу</a>.

# --hints--

Passport та Express-session повинні бути залежностями.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'passport',
    'Your project should list "passport" as a dependency'
  );
  assert.property(
    packJson.dependencies,
    'express-session',
    'Your project should list "express-session" as a dependency'
  );
}
```

Залежності повинні бути правильно заданими.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require.*("|')passport("|')/,
    'You should have required passport'
  );
  assert.match(
    data,
    /require.*("|')express-session("|')/,
    'You should have required express-session'
  );
}
```

Програма Express повинна використовувати нові залежності.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(data, /passport\.initialize/, 'Your express app should use "passport.initialize()"');
  assert.match(data, /passport\.session/, 'Your express app should use "passport.session()"');
}
```

Сесія і секрет сесії повинні бути правильно налаштовані.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /secret *:\s*process\.env(\.SESSION_SECRET|\[(?<q>"|')SESSION_SECRET\k<q>\])/,
    'Your express app should have express-session set up with your secret as process.env.SESSION_SECRET'
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

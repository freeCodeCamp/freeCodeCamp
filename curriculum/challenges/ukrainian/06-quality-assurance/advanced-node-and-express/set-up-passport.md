---
id: 5895f70cf9fc0f352b528e65
title: Налаштування Passport
challengeType: 2
forumTopicId: 301565
dashedName: set-up-passport
---

# --description--

Час встановити *Passport*, щоб нарешті дозволити користувачеві реєструватися або входити в обліковий запис! Разом з Passport, ми будемо використовувати експрес-сесію (Express-session) для обробки сесій. Використання цього проміжного програмного забезпечення зберігає id сесії як файл cookie в клієнті та дозволяє нам отримувати доступ до даних сесії за допомогою цього id на сервері. Таким чином ми зберігаємо особисту інформацію облікового запису поза файлом cookie, який клієнт використовує для перевірки на нашому сервері їх автентичності, і просто зберігаємо *ключ* для доступу до даних, що зберігаються на сервері.

Щоб налаштувати Passport для використання в своєму проекті, вам потрібно буде спочатку додати його як залежність у вашому package.json. `passport@~0.4.1`

Крім того, додайте також експрес-сесію як залежність. Експрес-сесія має дуже великий набір розширених функцій, які ви можете використати, але зараз ми збираємося використовувати лише базові функції! `express-session@~1.17.1`

Зараз вам потрібно буде встановити налаштування сесії та ініціалізувати Passport. Переконайтеся, що створили змінні 'session' та 'passport', це потрібно для 'express-session' та 'passport'.

Щоб налаштувати експрес-застосунок для використання у сесії, ми визначимо лише декілька основних параметрів. Не забудьте додати 'SESSION_SECRET' до вашого .env файлу і надати йому випадкове значення. Це використовується для обчислення хешу, яке використовується для шифрування вашого cookie!

```js
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));
```

Крім того, ви можете продовжити та повідомити своєму експрес-застосунку **використовувати** 'Passpor.initialize()' та 'Pasort.session()'. (Наприклад, `app.use(passport.initialize());`)

Відправте сторінку, якщо все було виконано правильно. Якщо виникають помилки, ви можете перевірити виконання проєкту до цього етапу [тут](https://gist.github.com/camperbot/4068a7662a2f9f5d5011074397d6788c).

# --hints--

Passport і експрес-сесії повинні бути залежностями.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
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
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Пов'язані залежності повинні бути правильно заповнені.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')passport("|')/gi,
        'You should have required passport'
      );
      assert.match(
        data,
        /require.*("|')express-session("|')/gi,
        'You should have required express-session'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Експрес застосунок має використовувати нові залежності.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /passport.initialize/gi,
        'Your express app should use "passport.initialize()"'
      );
      assert.match(
        data,
        /passport.session/gi,
        'Your express app should use "passport.session()"'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Сесія і секрет сесії мають бути правильно налаштовані.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /secret *: *process\.env(\.SESSION_SECRET|\[(?<q>"|')SESSION_SECRET\k<q>\])/g,
        'Your express app should have express-session set up with your secret as process.env.SESSION_SECRET'
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

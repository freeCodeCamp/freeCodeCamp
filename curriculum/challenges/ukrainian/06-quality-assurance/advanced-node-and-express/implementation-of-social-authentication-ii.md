---
id: 589a69f5f9fc0f352b528e71
title: Реалізація соціальної автентифікації ІІ
challengeType: 2
forumTopicId: 301557
dashedName: implementation-of-social-authentication-ii
---

# --description--

Остання частина налаштування автентифікації GitHub – це створення самої стратегії. Для цього вам потрібно буде додати залежність від `passport-github@~1.1.0` до вашого проєкту та викликати її у своєму `auth.js` як `GithubStrategy`, це: `const GitHubStrategy = require('passport-github').Strategy;`. Не забудьте викликати та налаштовувати `dotenv` для використання змінних середовища.

Щоб налаштувати стратегію GitHub, ви повинні сказати Passport використовувати примірник `GitHubStrategy`, який приймає 2 аргументи: об'єкт (який містить `clientID`, `clientSecret` та `callbackURL`) та функцію, яку слід викликати після успішної автентифікації користувача, яка визначатиме, чи є користувач новим і які поля спочатку зберегти в об’єкті бази даних користувача. Це типово для багатьох стратегій, але деяким може знадобитися більше інформації, як зазначено в цій конкретній стратегії GitHub README. Наприклад, так Google вимагає *scope*, що визначає, яку інформацію просить повернути ваш запит, і просить користувача надати дозвіл на такий доступ. Використання поточної стратегії, яку ми впроваджуємо описане [тут](https://github.com/jaredhanson/passport-github/), але ми все це розглянемо тут, на freeCodeCamp!

Ось як ваша нова стратегія має виглядати на цьому етапі:

```js
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: /*INSERT CALLBACK URL ENTERED INTO GITHUB HERE*/
},
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    //Database logic here with callback containing our user object
  }
));
```

Ваша автентифікація ще не є успішною, і насправді видасть помилку без логіки бази даних та зворотного виклику, але вона повинна зареєструвати ваш профіль GitHub на вашій консолі, якщо ви це спробуєте!

Підтвердьте сторінку, якщо все зрозуміло. Якщо виникла помилка, ви можете перевірити виконання проєкту до цього етапу [тут](https://gist.github.com/camperbot/ff3a1166684c1b184709ac0bee30dee6).

# --hints--

Необхідно додати залежність passport-github.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'passport-github',
        'Your project should list "passport-github" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Слід вказати passport-github.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/auth.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')passport-github("|')/gi,
        'You should have required passport-github'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Стратегію GitHub слід правильно налаштувати.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/auth.js').then(
    (data) => {
      assert.match(
        data,
        /passport\.use.*new GitHubStrategy/gis,
        'Passport should use a new GitHubStrategy'
      );
      assert.match(
        data,
        /callbackURL:\s*("|').*("|')/gi,
        'You should have a callbackURL'
      );
      assert.match(
        data,
        /process\.env(\.GITHUB_CLIENT_SECRET|\[(?<q>"|')GITHUB_CLIENT_SECRET\k<q>\])/g,
        'You should use process.env.GITHUB_CLIENT_SECRET'
      );
      assert.match(
        data,
        /process\.env(\.GITHUB_CLIENT_ID|\[(?<q>"|')GITHUB_CLIENT_ID\k<q>\])/g,
        'You should use process.env.GITHUB_CLIENT_ID'
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

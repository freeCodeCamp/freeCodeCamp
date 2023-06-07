---
id: 589a69f5f9fc0f352b528e71
title: Реалізація соціальної автентифікації ІІ
challengeType: 2
forumTopicId: 301557
dashedName: implementation-of-social-authentication-ii
---

# --description--

Остання частина налаштування автентифікації GitHub – це створення самої стратегії. `passport-github@~1.1.0` вже додано як залежність, тому вимагайте його у своєму файлі `auth.js` як `GithubStrategy`, ось так: `const GitHubStrategy = require('passport-github').Strategy;`. Не забудьте вимагати та налаштувати `dotenv` для використання змінних середовища.

Щоб налаштувати стратегію GitHub, ви повинні сказати Passport використовувати екземпляр `GitHubStrategy`, який приймає 2 аргументи: об'єкт (який містить `clientID`, `clientSecret` та `callbackURL`) і функцію, яку потрібно викликати після успішної автентифікації користувача, яка визначатиме, чи є користувач новим і які поля спочатку зберегти у базі даних користувача. Це типово для багатьох стратегій, але деяким може знадобитися більше інформації, як зазначено в README цієї конкретної стратегії GitHub. Наприклад, Google вимагає *контекст*, що допомагає визначити, яку інформацію просить повернути ваш запит, і просить користувача надати дозвіл на такий доступ.

Поточна стратегія, яку ви реалізовуєте, автентифікує користувачів за допомогою облікового запису на GitHub та токенів OAuth 2.0. ID та секрет клієнта, отримані під час створення програми, надаються як параметри під час створення стратегії. Стратегія також вимагає зворотного виклику `verify`, який отримує токен доступу та додатковий токен оновлення, а також `profile`, який містить профіль автентифікованого користувача на GitHub. Зворотний виклик `verify` повинен викликати `cb`, надаючи користувача для завершення автентифікації.

Ось так повинна виглядати ваша нова стратегія на цьому етапі:

```js
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: /*INSERT CALLBACK URL ENTERED INTO GITHUB HERE*/
},
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    //Database logic here with callback containing your user object
  }
));
```

Наразі ваша автентифікація не буде успішною, і насправді буде помилка без логіки бази даних та зворотного виклику, але на консолі повинен з'явитись ваш профіль на GitHub, якщо спробуєте!

Відправте свою сторінку коли впевнились, що все правильно. Якщо виникають помилки, ви можете <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#implementation-of-social-authentication-ii-4" target="_blank" rel="noopener noreferrer nofollow">переглянути проєкт, виконаний до цього етапу</a>.

# --hints--

Потрібно додати залежність passport-github.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'passport-github',
    'Your project should list "passport-github" as a dependency'
  );
}
```

passport-github повинен бути правильно заданий.

```js
async (getUserInput) => {
  const url = new URL("/_api/auth.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require.*("|')passport-github("|')/gi,
    'You should have required passport-github'
  );
}
```

Стратегію GitHub потрібно правильно налаштувати.

```js
async (getUserInput) => {
  const url = new URL("/_api/auth.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
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

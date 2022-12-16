---
id: 589a69f5f9fc0f352b528e71
title: Реалізація соціальної автентифікації ІІ
challengeType: 2
forumTopicId: 301557
dashedName: implementation-of-social-authentication-ii
---

# --description--

Остання частина налаштування автентифікації GitHub – це створення самої стратегії. `passport-github@~1.1.0` has already been added as a dependency, so require it in your `auth.js` file as `GithubStrategy` like this: `const GitHubStrategy = require('passport-github').Strategy;`. Не забудьте викликати та налаштовувати `dotenv` для використання змінних середовища.

Щоб налаштувати стратегію GitHub, ви повинні сказати Passport використовувати примірник `GitHubStrategy`, який приймає 2 аргументи: об'єкт (який містить `clientID`, `clientSecret` та `callbackURL`) та функцію, яку слід викликати після успішної автентифікації користувача, яка визначатиме, чи є користувач новим і які поля спочатку зберегти в об’єкті бази даних користувача. Це типово для багатьох стратегій, але деяким може знадобитися більше інформації, як зазначено в цій конкретній стратегії GitHub README. Наприклад, так Google вимагає *scope*, що визначає, яку інформацію просить повернути ваш запит, і просить користувача надати дозвіл на такий доступ.

The current strategy you are implementing authenticates users using a GitHub account and OAuth 2.0 tokens. The client ID and secret obtained when creating an application are supplied as options when creating the strategy. The strategy also requires a `verify` callback, which receives the access token and optional refresh token, as well as `profile` which contains the authenticated user's GitHub profile. The `verify` callback must call `cb` providing a user to complete authentication.

Here's how your new strategy should look at this point:

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

Your authentication won't be successful yet, and it will actually throw an error without the database logic and callback, but it should log your GitHub profile to your console if you try it!

Відправте свою сторінку коли впевнились, що все правильно. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#implementation-of-social-authentication-ii-4" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

passport-github dependency should be added.

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

passport-github should be required.

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

GitHub strategy should be setup correctly thus far.

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

---
id: 58a25c98f9fc0f352b528e7f
title: Хешування ваших паролів
challengeType: 2
forumTopicId: 301553
dashedName: hashing-your-passwords
---

# --description--

Якщо ви повернетесь до розділу з інформаційної безпеки, пригадаєте, що зберігання звичайних паролів *не* є гарною ідеєю. Тепер час реалізувати BCrypt для вирішення даної проблеми.

`bcrypt@~5.0.0` has already been added as a dependency, so require it in your server. Вам буде потрібно виконати гешування у двох ключових місцях: де ви виконуєте реєстрацію/збереження нового облікового запису і коли ви переконуєтесь, що пароль правильний при вході в систему.

Currently on your registration route, you insert a user's plaintext password into the database like so: `password: req.body.password`. Hash the passwords instead by adding the following before your database logic: `const hash = bcrypt.hashSync(req.body.password, 12);`, and replacing the `req.body.password` in the database saving with just `password: hash`.

On your authentication strategy, you check for the following in your code before completing the process: `if (password !== user.password) return done(null, false);`. Після внесення попередніх змін тепер `user.password` є хешем. Перш ніж вносити зміни до наявного коду, зверніть увагу на те, як команда перевіряє, чи пароль **не** збігається та потім повертає відповідь — не автентифіковано. With this in mind, change that code to look as follows to properly check the password entered against the hash:

```js
if (!bcrypt.compareSync(password, user.password)) { 
  return done(null, false);
}
```

That is all it takes to implement one of the most important security features when you have to store passwords.

Відправте свою сторінку коли впевнились, що все правильно. Якщо виникають помилки, ви можете <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#hashing-your-passwords-1" target="_blank" rel="noopener noreferrer nofollow">переглянути проєкт, виконаний до цього етапу</a>.

# --hints--

BCrypt повинен бути залежністю.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json()
  assert.property(
    packJson.dependencies,
    'bcrypt',
    'Your project should list "bcrypt" as a dependency'
  );
}
```

BCrypt повинен бути правильно заданий та реалізований.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require.*("|')bcrypt\1/gi,
    'You should have required bcrypt'
  );
  assert.match(
    data,
    /bcrypt.hashSync/gi,
    'You should use hash the password in the registration'
  );
  assert.match(
    data,
    /bcrypt.compareSync/gi,
    'You should compare the password to the hash in your strategy'
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

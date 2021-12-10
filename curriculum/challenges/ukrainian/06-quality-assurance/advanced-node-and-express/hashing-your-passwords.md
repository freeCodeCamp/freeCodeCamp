---
id: 58a25c98f9fc0f352b528e7f
title: Хешування ваших паролів
challengeType: 2
forumTopicId: 301553
dashedName: hashing-your-passwords
---

# --description--

Якщо ви повернетесь до розділу з інформаційної безпеки, пригадаєте, що зберігання звичайних паролів *не* є гарною ідеєю. Тепер час реалізувати BCrypt для вирішення даної проблеми.

Додайте `bcrypt@~5.0.0` як залежність та викличте її у своєму сервері. Вам буде потрібно виконати гешування у двох ключових місцях: де ви виконуєте реєстрацію/збереження нового облікового запису і коли ви переконуєтесь, що пароль правильний при вході в систему.

Наразі під час реєстрації ви вводите пароль користувача у базу даних таким чином: `password: req.body.password`. Легкий спосіб зберегти хеш – це додати перед логікою бази даних: `const hash = bcrypt.hashSync(req.body.password, 12);` та замінити в базі даних `req.body.password`, зберігши лише `password: hash`.

Зрештою, для нашого способу автентифікації перевіримо наступне в нашому коді перед завершенням процесу: `if (password !== user.password) { return done(null, false); }`. Після внесення попередніх змін тепер `user.password` є хешем. Перш ніж вносити зміни до наявного коду, зверніть увагу на те, як команда перевіряє, чи пароль **не** збігається та потім повертає відповідь — не автентифіковано. Майте це на увазі, ваш код може виглядати наступним чином для правильної перевірки пароля, введеного з хешу:

```js
if (!bcrypt.compareSync(password, user.password)) { 
  return done(null, false);
}
```

Це все, що потрібно, щоб реалізувати одну з найважливіших функцій безпеки, коли вам потрібно зберігати паролі!

Підтвердьте вашу сторінку, якщо все зрозуміло. Якщо виникла помилка, ви можете перевірити виконання проєкту до цього етапу [тут](https://gist.github.com/camperbot/dc16cca09daea4d4151a9c36a1fab564).

# --hints--

BCrypt повинен бути залежністю.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'bcrypt',
        'Your project should list "bcrypt" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

BCrypt повинен бути правильно заданий та реалізований.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
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

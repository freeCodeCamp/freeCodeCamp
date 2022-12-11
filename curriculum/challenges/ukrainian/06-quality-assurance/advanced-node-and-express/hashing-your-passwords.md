---
id: 58a25c98f9fc0f352b528e7f
title: Хешування паролів
challengeType: 2
forumTopicId: 301553
dashedName: hashing-your-passwords
---

# --description--

Якщо ви повернетесь до розділу з інформаційної безпеки, пригадаєте, що зберігання паролів у вигляді звичайного тексту є *поганою* ідеєю. Тепер час реалізувати BCrypt для вирішення даної проблеми.

`bcrypt@~5.0.0` вже додано як залежність, тому вимагайте його у своєму сервері. Вам буде потрібно виконати хешування у двох ключових місцях: де ви виконуєте реєстрацію/збереження нового облікового запису і коли ви переконуєтесь, що пароль правильний при вході в систему.

Наразі на своєму маршруті реєстрації ви вводите пароль користувача у базу даних звичайним текстом: `password: req.body.password`. Натомість хешуйте паролі, додавши перед логікою бази даних наступне: `const hash = bcrypt.hashSync(req.body.password, 12);` та замінивши в базі даних `req.body.password`, зберігши лише `password: hash`.

У своїй стратегії автентифікації перевірте наступне у коді перед завершенням процесу: `if (password !== user.password) return done(null, false);`. Після внесення попередніх змін `user.password` є хешем. Перш ніж вносити зміни до наявного коду, зверніть увагу на те, як інструкція перевіряє, чи пароль **не** збігається, а потім повертає неавтентифікований. Тому змініть код таким чином (як показано нижче), щоб він правильно перевіряв пароль, введений із хешем:

```js
if (!bcrypt.compareSync(password, user.password)) { 
  return done(null, false);
}
```

Це все, що потрібно, аби впровадити одну з найважливіших функцій безпеки для збереження паролів.

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

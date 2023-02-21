---
id: 5895f70df9fc0f352b528e68
title: Стратегії автентифікації
challengeType: 2
forumTopicId: 301547
dashedName: authentication-strategies
---

# --description--

Стратегія – це спосіб автентифікації користувача. Ви можете вибрати стратегію, яка дозволяє користувачам авторизуватись на основі локально збережених даних (якщо ви їх реєстрували) або від різних провайдерів, як-от Google або GitHub. У цьому проєкті ми будемо використовувати проміжне ПЗ Passport. Passport надає повний набір стратегій, які підтримують автентифікацію за допомогою імені користувача та пароля, GitHub, Google тощо.

`passport-local@~1.0.0` вже додано як залежність. Додайте його на свій сервер наступним чином:

```javascript
const LocalStrategy = require('passport-local');
```

Скажіть паспорту **використовувати** екземпляр об'єкту `LocalStrategy` з кількома визначеними налаштуваннями. Переконайтесь у тому, що це (як і все інше з цього моменту) інкапсульовано в з'єднанні з базою даних, оскільки все залежить від цього!:

```javascript
passport.use(new LocalStrategy((username, password, done) => {
  myDataBase.findOne({ username: username }, (err, user) => {
    console.log(`User ${username} attempted to log in.`);
    if (err) return done(err);
    if (!user) return done(null, false);
    if (password !== user.password) return done(null, false);
    return done(null, user);
  });
}));
```

Так виглядає процес, коли ви хочете автентифікувати когось локально. Спочатку виконується спроба знайти користувача у вашій базі даних із введеним іменем користувача. Потім перевіряється відповідність пароля. Якщо не з'явилося жодних помилок, які ви перевіряли (наприклад, неправильний пароль), то повертається об’єкт `user` і користувачі автентифікуються.

Багато стратегій налаштовуються з використанням різних налаштувань. Загалом стратегію легко налаштувати на основі README у її репозиторії. Хорошим прикладом є стратегія GitHub, де можна не переживати за ім'я користувача або пароль, оскільки користувач автоматично переадресовується на сторінку GitHub для автентифікації. Допоки користувач авторизований і згідний з умовами, GitHub надаватиме його профіль для користування.

Далі ви дізнаєтеся, як за допомогою стратегії автентифікації перевірити користувача на основі заповнених даних.

Відправте свою сторінку коли впевнились, що все правильно. Якщо виникають помилки, ви можете <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#authentication-strategies-6" target="_blank" rel="noopener noreferrer nofollow">переглянути проєкт, виконаний до цього етапу</a>.

# --hints--

Passport-local повинен бути залежністю.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'passport-local',
    'Your project should list "passport-local " as a dependency'
  );
}
```

Passport-local повинен бути правильно заданий та налаштований.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require.*("|')passport-local("|')/,
    'You should have required passport-local'
  );
  assert.match(
    data,
    /new LocalStrategy/,
    'You should have told passport to use a new strategy'
  );
  assert.match(
    data,
    /findOne/,
    'Your new local strategy should use the findOne query to find a username based on the inputs'
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

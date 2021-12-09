---
id: 5895f70df9fc0f352b528e68
title: Стратегії автентифікації
challengeType: 2
forumTopicId: 301547
dashedName: authentication-strategies
---

# --description--

Стратегія - це процес авторизації користувача. Ви можете вибрати стратегію, яка дозволяє користувачам авторизуватись на основі збережених даних (якщо ви їх вказували) або від різних провайдерів таких, як Google або GitHub. До цього проєкту ми встановимо локальну стратегію. Для того, щоб переглянути перелік сотень стратегій, перейдіть на сайт Passport [сюди](http://passportjs.org/).

Вкажіть `passport-local@~1.0.0` як залежний елемент і додайте його на ваш сервер, як показано далі: `const LocalStrategy = require('passport-local');`

Далі ви повинні вказати паспорту (passport) **використати (use)** макет об'єкту LocalStrategy із певними вказаними параметрами. Переконайтесь у тому, що це (як і все з цього моменту) інкапсульовано в з'єднанні з базою даних (database), оскільки воно залежить від цього!

```js
passport.use(new LocalStrategy(
  function(username, password, done) {
    myDataBase.findOne({ username: username }, function (err, user) {
      console.log('User '+ username +' attempted to log in.');
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (password !== user.password) { return done(null, false); }
      return done(null, user);
    });
  }
));
```

Так виглядає процес, коли ми хочемо авторизувати когось локально. Спершу система шукає користувача у нашій базі даних за допомогою введеного ім'я користувача, потім перевіряє його за паролем, і тоді, якщо не виникло жодних помилок під час перевірки, як, наприклад, невірний пароль, об'єкт `user` повертається та вважається авторизованим.

Багато стратегій створюються на основі різних налаштувань, але, як правило, це легко зробити звернувшись до файлу README у репозиторії цієї стратегії. Як хороший приклад можна зазначити стратегію GitHub, де ми можемо не переживати через ім'я користувача або пароль, оскільки користувач автоматично переадресовується на сторінку аутентифікації GitHub для авторизації. Допоки користувач буде залишатись авторизованим і буде згідний з умовами, GitHub надаватиме його профіль для користування.

Далі ми дізнаємося, як за допомогою стратегії авторизації перевірити користувача на основі заповнених даних!

Відправте вашу сторінку, якщо все зрозуміло. Якщо сталась якась помилка, ви маєте змогу перевірити статус проєкту до цього етапу [ тут ](https://gist.github.com/camperbot/53b495c02b92adeee0aa1bd3f3be8a4b).

# --hints--

Passport-local повинен бути залежністю.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'passport-local',
        'Your project should list "passport-local " as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Запит Passport-local повинен бути вірно надісланий та налаштований.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')passport-local("|')/gi,
        'You should have required passport-local'
      );
      assert.match(
        data,
        /new LocalStrategy/gi,
        'You should have told passport to use a new strategy'
      );
      assert.match(
        data,
        /findOne/gi,
        'Your new local strategy should use the findOne query to find a username based on the inputs'
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

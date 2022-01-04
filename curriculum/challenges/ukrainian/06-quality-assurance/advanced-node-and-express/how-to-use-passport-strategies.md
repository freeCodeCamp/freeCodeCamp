---
id: 5895f70df9fc0f352b528e69
title: Як використовувати Passport стратегії
challengeType: 2
forumTopicId: 301555
dashedName: how-to-use-passport-strategies
---

# --description--

У заданому файлі `index.pug` є форма авторизації. Її раніше було приховано через вбудований JavaScript з формою `if showLogin` та відступом після неї. Перед `showLogin` у вигляді змінної яка ніколи не була визначена, тому вона ніколи не передавала блок коду, що містить форму. Перейдіть вперед і на `res.render` для цієї сторінки додайте нову змінну до об'єкта `showLogin: true`. Коли ви оновите сторінку, ви повинні побачити форму! Ця форма налаштована для надсилання **POST** запиту до `/login`, тому тут ми повинні прийняти POST і авторизувати користувача.

Для цього завдання необхідно додати маршрут `/login`, щоб прийняти запит POST. Для автентифікації на цьому маршруті, вам потрібно додати підпрограмне забезпечення, щоб зробити це перед тим як надсилати відповідь. Це можна зробити простим передаванням іншого аргументу з підпрограмного забезпечення перед `function(req,res)` з вашою відповіддю! Треба використати таке підпрограмне забезпечення: `passport.authenticate('local')`.

`passport.authenticate` може також приймати деякі опції як аргумент: `{ failureRedirect: '/' }`, який є неймовірно корисними, тому будьте впевнені в тому, що також додали і його. Відповідь після використання підпрограмного забезпечення (яка буде викликана якщо автентифікація підпрограмного забезпечення виконана успішно) повинна переадресувати користувача до `/profile` і цей маршрут повинен зобразити вид `profile.pug`.

Якщо автентифікація була успішною, то об'єкт користувач буде збережено в `req.user`.

Зараз, якщо ви введете ім'я користувача і пароль у форму, вас має переадресувати на домашню сторінку `/`, а консоль вашого серверу повинна показувати `'User {USERNAME} attempted to log in.'`, оскільки ми на цей час не можемо увійти в обліковий запис користувача, який не зареєстрований.

Підтвердіть сторінку, якщо все зрозуміло. Якщо сталась якась помилка, ви маєте змогу перевірити статус проєкту до цього етапу [here](https://gist.github.com/camperbot/7ad011ac54612ad53188b500c5e99cb9).

# --hints--

Усі кроки повинні бути правильно реалізовані в server.js.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /showLogin:( |)true/gi,
        'You should be passing the variable "showLogin" as true to your render function for the homepage'
      );
      assert.match(
        data,
        /failureRedirect:( |)('|")\/('|")/gi,
        'Your code should include a failureRedirect to the "/" route'
      );
      assert.match(
        data,
        /login[^]*post[^]*local/gi,
        'You should have a route for login which accepts a POST and passport.authenticates local'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Запит POST для /login повинен правильно переадресовувати до /.

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/login').then(
    (data) => {
      assert.match(
        data,
        /Looks like this page is being rendered from Pug into HTML!/gi,
        'A login attempt at this point should redirect to the homepage since we do not have any registered users'
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

---
id: 5895f70df9fc0f352b528e69
title: Як використовувати стратегії Passport
challengeType: 2
forumTopicId: 301555
dashedName: how-to-use-passport-strategies
---

# --description--

У заданому файлі `index.pug` є форма авторизації. Її приховано через вбудований JavaScript `if showLogin` з відступленою формою після.

У `res.render` для цієї сторінки додайте нову змінну до об'єкта `showLogin: true`. Коли ви оновите сторінку, ви повинні побачити форму! Ця форма налаштована, щоб надіслати запит **POST** до `/login`. Тут ви повинні налаштувати прийом запиту POST та автентифікацію користувача.

Для цього завдання потрібно додати маршрут `/login`, щоб прийняти запит POST. Для автентифікації на цьому маршруті потрібно додати проміжне програмне забезпечення перед надсиланням відповіді. Для цього потрібно передати інший аргумент разом із проміжним ПЗ перед відповіддю. Потрібно використати наступне проміжне ПЗ: `passport.authenticate('local')`.

`passport.authenticate` також може приймати деякі опції, як-от аргумент `{ failureRedirect: '/' }`, який є неймовірно корисними, тому не забудьте додати його. Додайте відповідь після використання проміжного ПЗ (її буде викликано лише при дійсному проміжному ПЗ), що переадресовує користувача до `/profile`. Додайте також цей маршрут і зробіть так, щоб він зображав перегляд `profile.pug`.

Якщо автентифікація була успішною, то об'єкта-користувача буде збережено в `req.user`.

Якщо ви введете ім'я користувача і пароль у форму, ви будете переадресовані на головну сторінку `/`, а на консолі вашого серверу з'явиться `'User {USERNAME} attempted to log in.'`, оскільки наразі ми не можемо увійти в обліковий запис користувача, який не зареєстрований.

Відправте свою сторінку коли впевнились, що все правильно. Якщо виникають помилки, ви можете <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#how-to-use-passport-strategies-7" target="_blank" rel="noopener noreferrer nofollow">переглянути проєкт, виконаний до цього етапу</a>.

# --hints--

Усі кроки повинні бути правильно реалізовані в `server.js`.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /showLogin:( |)true/,
    'You should be passing the variable "showLogin" as true to your render function for the homepage'
  );
  assert.match(
    data,
    /failureRedirect:( |)('|")\/('|")/,
    'Your code should include a failureRedirect to the "/" route'
  );
  assert.match(
    data,
    /login[^]*post[^]*local/,
    'You should have a route for login which accepts a POST and passport.authenticates local'
  );
}
```

Запит POST до `/login` повинен правильно перенаправляти до `/`.

```js
async (getUserInput) => {
  const url = new URL("/login", getUserInput("url"));
  const res = await fetch(url, { method: 'POST' });
  const data = await res.text();
  assert.match(
    data,
    /Looks like this page is being rendered from Pug into HTML!/,
    'A login attempt at this point should redirect to the homepage since we do not have any registered users'
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

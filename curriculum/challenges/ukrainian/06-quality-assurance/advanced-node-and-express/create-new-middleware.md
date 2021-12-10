---
id: 5895f70df9fc0f352b528e6a
title: Створення нового підпрограмного забезпечення
challengeType: 2
forumTopicId: 301551
dashedName: create-new-middleware
---

# --description--

На практиці будь-який користувач може просто перейти до `/profile`, незалежно від того, пройшов він автентифікацію чи ні, ввівши Url-адресу. Ми хочемо запобігти цьому, перевіривши, чи користувач автентифікувався, перш ніж відображати сторінку профілю. Це прекрасний приклад того, коли можна створити підпрограмне забезпечення.

Це завдання завдає функцію підпрограмного забезпечення `ensureAuthenticated(req, res, next)`, яка буде перевіряти чи користувач автентифікувався методом `isAuthenticated` по `request`, який у свою чергу визначає `req.user`. Якщо це так, то слід викликати `next()`, інакше ми можемо просто відповісти на запит перенаправленням на нашу головну сторінку для входу. Впровадження цього підпрограмного забезпечення означає:

```js
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};
```

Тепер додайте *ensureAuthenticated* як підпрограмне забезпечення до запиту сторінки профілю перед аргументом, щоб отримати запит, який містить функцію для відображення сторінки.

```js
app
 .route('/profile')
 .get(ensureAuthenticated, (req,res) => {
    res.render(process.cwd() + '/views/pug/profile');
 });
```

Підтвердьте сторінку, якщо все виконано вірно. Якщо стались помилки, ви можете перевірити виконання проєкту до цього етапу [тут](https://gist.github.com/camperbot/ae49b8778cab87e93284a91343da0959).

# --hints--

Підпрограмне забезпечення sureAuthenticated має бути реалізованим і на нашому /profile маршруті.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /ensureAuthenticated[^]*req.isAuthenticated/gi,
        'Your ensureAuthenticated middleware should be defined and utilize the req.isAuthenticated function'
      );
      assert.match(
        data,
        /profile[^]*get[^]*ensureAuthenticated/gi,
        'Your ensureAuthenticated middleware should be attached to the /profile route'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Запит на отримання /profile має правильно переспрямовувати до / оскільки ми не автентифіковані.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/profile').then(
    (data) => {
      assert.match(
        data,
        /Home page/gi,
        'An attempt to go to the profile at this point should redirect to the homepage since we are not logged in'
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

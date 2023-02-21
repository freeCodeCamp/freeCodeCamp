---
id: 5895f70df9fc0f352b528e6a
title: Створення нового проміжного ПЗ
challengeType: 2
forumTopicId: 301551
dashedName: create-new-middleware
---

# --description--

Будь-який користувач може просто перейти до `/profile`, незалежно від того, пройшов він автентифікацію чи ні, ввівши URL-адресу. Цього потрібно запобігти, перевіривши, чи користувач автентифікувався перш ніж переглядати сторінку профілю. Це хороший приклад того, коли варто створити проміжне ПЗ.

Це завдання створює функцію проміжного ПЗ `ensureAuthenticated(req, res, next)`, яка перевірятиме, чи користувач автентифікувався, викликавши метод Passport `isAuthenticated` до `request`, який перевіряє, чи `req.user` визначений. Якщо так, то треба викликати `next()`. В іншому випадку ви можете просто відповісти на запит, перенаправивши на свою домашню сторінку для входу.

Впровадження цього проміжного ПЗ:

```javascript
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};
```

Створіть наведену вище функцію проміжного ПЗ, а потім передайте `ensureAuthenticated` як проміжне ПЗ до запитів сторінки профілю перед аргументом запиту GET:

```javascript
app
 .route('/profile')
 .get(ensureAuthenticated, (req,res) => {
    res.render('profile');
 });
```

Відправте свою сторінку коли впевнились, що все правильно. Якщо виникають помилки, ви можете <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#create-new-middleware-8" target="_blank" rel="noopener noreferrer nofollow">переглянути проєкт, виконаний до цього етапу</a>.

# --hints--

Проміжне програмне забезпечення `ensureAuthenticated` повинне бути реалізоване та приєднане до маршруту `/profile`.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /ensureAuthenticated[^]*req.isAuthenticated/,
    'Your ensureAuthenticated middleware should be defined and utilize the req.isAuthenticated function'
  );
  assert.match(
    data,
    /profile[^]*get[^]*ensureAuthenticated/,
    'Your ensureAuthenticated middleware should be attached to the /profile route'
  );
}
```

Неавтентифікований запит GET до `/profile` повинен правильно перенаправляти до `/`.

```js
async (getUserInput) => {
  const url = new URL("/profile", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /Home page/,
    'An attempt to go to the profile at this point should redirect to the homepage since we are not logged in'
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

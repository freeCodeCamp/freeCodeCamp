---
id: 58965611f9fc0f352b528e6c
title: Вихід з облікового запису
challengeType: 2
forumTopicId: 301560
dashedName: logging-a-user-out
---

# --description--

Логіка logout легко створюється. Маршрут має лише скасувати автентифікацію користувача та переадресувати на головну сторінку замість візуалізації будь-якого перегляду.

Скасувати автентифікацію користувача через Passport так само легко, як викликати `req.logout();` до початку переспрямування.

```js
app.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/');
});
```

Певно, ви помітили, що ми не обробляємо відсутні вебсторінки (404). Поширений спосіб обробки цієї помилки у Node є наступне проміжне програмне забезпечення. Додайте це після всіх інших маршрутів:

```js
app.use((req, res, next) => {
  res.status(404)
    .type('text')
    .send('Not Found');
});
```

Підтвердьте сторінку, якщо все виконано вірно. Якщо виникла помилка, Ви можете перевірити виконаний до цього етапу проєкт [тут](https://gist.github.com/camperbot/c3eeb8a3ebf855e021fd0c044095a23b).

# --hints--

`req.Logout` має викликатися у маршруті `/logout`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /req.logout/gi,
        'You should be calling req.logout() in your /logout route'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Logout має переадресовувати на головну сторінку.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/logout').then(
    (data) => {
      assert.match(
        data,
        /Home page/gi,
        'When a user logs out they should be redirected to the homepage'
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

---
id: 5895f70ef9fc0f352b528e6b
title: Як створити профіль
challengeType: 2
forumTopicId: 301554
dashedName: how-to-put-a-profile-together
---

# --description--

Після того, як ми запевнили, що користувач, який має доступ до `/profile`, автентифікований, ми зможемо використовувати інформацію з `req.user` на нашій сторінці!

Передайте об'єкт, що має властивість `username` і значення `req.user.username` як другий аргумент для методу відображення профілю. Тепер перейдіть до перегляду свого `profile.pug` і додайте наступний рядок під уже наявним `h1` елементом, дотримуючись тих самих відступів:

```pug
h2.center#welcome Welcome, #{username}!
```

Це створить елемент `h2` з класом '`center`' і id '`welcome`', що міститиме текст '`Welcome,`' та ім'я користувача.

Також в `profile.pug` додайте посилання на маршрут `/logout`, який міститиме метод для скасування автентифікації користувача.

```pug
a(href='/logout') Logout
```

Відправте сторінку, якщо все було виконано правильно. Якщо ви натрапили на помилки, ви можете перевірити виконання проєкту до цього етапу [here](https://gist.github.com/camperbot/136b3ad611cc80b41cab6f74bb460f6a).

# --hints--

Ви повинні правильно додати змінну Pug до /profile.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /username:( |)req.user.username/gi,
        'You should be passing the variable username with req.user.username into the render function of the profile page'
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

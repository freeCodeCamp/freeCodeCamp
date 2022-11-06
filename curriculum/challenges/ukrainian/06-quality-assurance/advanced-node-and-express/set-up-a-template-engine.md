---
id: 5895f700f9fc0f352b528e63
title: Налаштування шаблону двигуна
challengeType: 2
forumTopicId: 301564
dashedName: set-up-a-template-engine
---

# --description--

Робота над цими завданнями передбачає написання коду одним із таких методів:

- Клонуйте <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/" target="_blank" rel="noopener noreferrer nofollow">цей репозиторій GitHub</a> та виконайте ці завдання локально.
- Використайте <a href="https://replit.com/github/freeCodeCamp/boilerplate-advancednode" target="_blank" rel="noopener noreferrer nofollow">наш стартовий проєкт Replit</a> для виконання цих завдань.
- Використовуйте конструктор сайтів на ваш розсуд для завершення проекту. Впевніться, що ви маєте усі файли з нашого GitHub репозиторію.

По завершенню, переконайтеся, що демоверсія вашого проєкту розміщена у відкритому доступі. Потім введіть URL-адресу проєкту у поле `Solution Link`.

Шаблон двигуна дозволяє використовувати статичні шаблони файлів (такі як написані в *Pug*) у вашому додатку. У той час шаблон двигуна замінює варіації у файлі шаблону фактичними значеннями, які можуть надаватися вашим сервером. Потім він перетворює шаблон в статичний HTML файл, який надсилається клієнту. Цей підхід спрощує дизайн HTML сторінки та дозволяє показувати змінні на сторінці без необхідності виклику API від клієнта.

`pug@~3.0.0` has already been installed, and is listed as a dependency in your `package.json` file.

Висловіть свої потреби для розуміння, який шаблон двигуна ви використовуєте. Use the `set` method to assign `pug` as the `view engine` property's value:

```javascript
app.set('view engine', 'pug');
```

After that, add another `set` method that sets the `views` property of your `app` to point to the `./views/pug` directory. This tells Express to render all views relative to that directory.

Finally, use `res.render()` in the route for your home page, passing `index` as the first argument. This will render the `pug` template.

If all went as planned, your app home page will no longer be blank. Instead, it will display a message indicating you've successfully rendered the Pug template!

Підтвердіть свою сторінку, коли зрозумієте, що все працює коректно. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#set-up-a-template-engine-1" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

Pug повинен бути залежністю.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'pug',
    'Your project should list "pug" as a dependency'
  );
}
```

Двигун перегляду має бути Pug.

```js
async (getUserInput) => {
  const url = new URL("/_api/app", getUserInput("url"));
  const res = await fetch(url);
  const app = await res.json();
  assert.equal(app?.settings?.['view engine'], "pug");
}
```

You should set the `views` property of the application to `./views/pug`.

```js
async (getUserInput) => {
  const url = new URL("/_api/app", getUserInput("url"));
  const res = await fetch(url);
  const app = await res.json();
  assert.equal(app?.settings?.views, "./views/pug");
}
```

Use the correct ExpressJS method to render the index page from the response.

```js
async (getUserInput) => {
  const url = new URL("/", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
      assert.match(
        data,
        /FCC Advanced Node and Express/gi,
        'You successfully rendered the Pug template!'
      );
    }
```

Pug should be working.

```js
async (getUserInput) => {
  const url = new URL("/", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
      assert.match(
        data,
        /pug-success-message/gi,
        'Your projects home page should now be rendered by pug with the projects .pug file unaltered'
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

---
id: 587d7fb2367417b2b2512bf7
title: Обробка POST запитів за допомогою body-parser
challengeType: 2
forumTopicId: 301520
dashedName: use-body-parser-to-parse-post-requests
---

# --description--

Крім GET, є ще одне спільне дієслово HTTP, це POST. POST - це типовий метод для надсилання даних клієнта з HTML формами. У методі REST, POST використовується для відправки даних, щоб створити нові елементи в базі даних (новий користувач або новий допис). Ви не зобов'язані мати базу даних у цьому проєкті, але ви все-таки дізнаєтесь, як опрацьовувати запити POST.

У таких запитах дані не з'являються в URL, він прихований у тілі запиту. Тіло є частиною HTTP-запиту, а також називається корисним навантаженням. Незважаючи на те, що дані не видимі в URL, це не означає, що вони приватні. Щоб зрозуміти чому, подивіться на необроблений вміст HTTP-запиту POST:

```http
POST /path/subpath HTTP/1.0
From: john@example.com
User-Agent: someBrowser/1.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 20

name=John+Doe&age=25
```

Як ви можете побачити, тіло закодоване як рядок запиту. Це типовий формат, який використовується у HTML-формах. За допомогою Ajax, ви також можете використати JSON для обробки даних, що мають більш складну структуру. Існує також інший тип кодування: multipart/form-data. Цей файл використовується для завантаження бінарних файлів. In this exercise, you will use a URL encoded body. To parse the data coming from POST requests, you must use the `body-parser` package. Цей пакет дозволяє використовувати низку підпрограмного забезпечення, який може декодувати дані в різних форматах.

# --instructions--

`body-parser` has already been installed and is in your project's `package.json` file. `require` it at the top of the `myApp.js` file and store it in a variable named `bodyParser`. The middleware to handle URL encoded data is returned by `bodyParser.urlencoded({extended: false})`. Pass the function returned by the previous method call to `app.use()`. As usual, the middleware must be mounted before all the routes that depend on it.

**Note:** `extended` це опція конфігурації, яка вказує `body-parser`, який парсинг необхідно використати. Коли `extended=false` він використовує класичне кодування `querystring` бібліотеки. Коли `extended=true` він використовує `qs` бібліотеку для парсингу.

При використанні `extended=false`, значення можуть бути тільки рядками або масивами. Об'єкт повертається, коли використання `querystring` не успадковується прототипно від `Object` JavaScript за замовчування, і означає, що функції `hasOwnProperty` та `toString` не будуть доступні. Розширена версія дозволяє підвищити гнучкість даних, але вона перевершує JSON.

# --hints--

Проміжне програмне забезпечення 'body-parser' має бути встановлено

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/add-body-parser').then(
    (data) => {
      assert.isAbove(
        data.mountedAt,
        0,
        '"body-parser" is not mounted correctly'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
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

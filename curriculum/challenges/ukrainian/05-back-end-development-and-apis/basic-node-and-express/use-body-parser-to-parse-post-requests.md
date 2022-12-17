---
id: 587d7fb2367417b2b2512bf7
title: Аналіз запитів POST за допомогою body-parser
challengeType: 2
forumTopicId: 301520
dashedName: use-body-parser-to-parse-post-requests
---

# --description--

Окрім GET є ще одне поширене дієслово HTTP: POST. POST – це метод для надсилання даних клієнта формами HTML за замовчуванням. У конвенції REST, POST використовується для відправки даних, щоб створити нові елементи у базі даних (новий користувач або допис). У вас немає бази даних у цьому проєкті, але ви однаково дізнаєтесь як опрацьовувати запити POST.

У таких запитах дані не з'являються в URL, вони приховані у тілі запиту. Тіло є частиною запиту HTTP, також називається корисним навантаженням. Попри те, що дані невидимі в URL, це не означає, що вони приватні. Щоб зрозуміти чому так, гляньте на необроблений вміст запиту HTTP POST:

```http
POST /path/subpath HTTP/1.0
From: john@example.com
User-Agent: someBrowser/1.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 20

name=John+Doe&age=25
```

Як ви можете побачити, тіло закодоване як рядок запиту. Це формат за замовчуванням, який використовується у формах HTML. За допомогою Ajax можна використати JSON для обробки даних, які мають складнішу структуру. Існує також інший тип кодування: multipart/form-data. Цей файл використовується для завантаження бінарних файлів. У цій вправі ви будете використовувати тіло, кодоване URL-адресою. Щоб аналізувати дані, отримані із запитів POST, потрібно використати пакет `body-parser`. Цей пакет дозволяє використовувати низку проміжного ПЗ, що може декодувати дані в різних форматах.

# --instructions--

`body-parser` вже встановлений та знаходиться у файлі `package.json` вашого проєкту. Вимагайте (`require`) його у верхній частині файлу `myApp.js` та зберігайте в змінній під назвою `bodyParser`. Проміжне ПЗ, що має обробити закодовані дані URL, повертається за допомогою `bodyParser.urlencoded({extended: false})`. Передайте функцію, повернуту попереднім викликом до `app.use()`. Зазвичай проміжне ПЗ потрібно встановити перед маршрутами, які залежать від нього.

**Примітка:** `extended` є опцією конфігурації, яка вказує `body-parser`, який парсинг необхідно використати. Якщо `extended=false`, то вона використовує класичну бібліотеку `querystring`. Якщо `extended=true`, вона використовує бібліотеку `qs` для парсингу.

При використанні `extended=false` значеннями можуть бути тільки рядками або масивами. Об'єкт повертається, коли використання `querystring` не успадковується прототипно від `Object` JavaScript за замовчування, і означає, що функції `hasOwnProperty` та `toString` не будуть доступні. Розширена версія дозволяє підвищити гнучкість даних, але її перевершує JSON.

# --hints--

Проміжне програмне забезпечення «body-parser» має бути встановлено

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

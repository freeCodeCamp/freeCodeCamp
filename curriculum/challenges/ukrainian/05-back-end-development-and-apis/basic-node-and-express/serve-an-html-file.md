---
id: 587d7fb0367417b2b2512bef
title: Обслуговування файлу HTML
challengeType: 2
forumTopicId: 301516
dashedName: serve-an-html-file
---

# --description--

На запити можна відповідати за допомогою методу `res.sendFile(path)`. Ви можете додати його до обробника маршрутів `app.get('/', ...)`. Насправді цей метод встановлює відповідні заголовки, які вказуватимуть вашому браузеру як обробляти файл, який потрібно надіслати, відповідно до його типу. Потім він прочитає та надішле файл. Цьому методу потрібен абсолютний шлях файлу. Ми рекомендуємо використовувати глобальну змінну Node `__dirname` для обчислення шляху, як вказано нижче:

```js
absolutePath = __dirname + '/relativePath/file.ext'
```

# --instructions--

Надішліть файл `/views/index.html` як відповідь на запит GET шляхом `/`. Якщо ви переглядаєте свій додаток, ви можете побачити великий заголовок HTML (і форму, яку ми будемо використовувати пізніше…) без стилю.

**Примітка:** ви можете редагувати рішення попереднього завдання або створити нове. Якщо ви створюєте нове рішення, майте на увазі, що Express оцінює маршрути зверху вниз і запускає обробник для першого збігу. Ви повинні прокоментувати попереднє рішення, інакше сервер буде продовжувати відповідати за допомогою рядку.

# --hints--

Ваш додаток повинен обслуговувати файл views/index.html

```js
(getUserInput) =>
  $.get(getUserInput('url')).then(
    (data) => {
      assert.match(
        data,
        /<h1>.*<\/h1>/,
        'Your app does not serve the expected HTML'
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

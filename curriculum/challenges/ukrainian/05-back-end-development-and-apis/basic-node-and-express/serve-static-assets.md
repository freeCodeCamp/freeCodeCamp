---
id: 587d7fb0367417b2b2512bf0
title: Обслуговування статичних активів
challengeType: 2
forumTopicId: 301518
dashedName: serve-static-assets
---

# --description--

Як правило, сервер HTML має одну чи більше директорій, доступних для користувача. Туди можна помістити статистичні активи, необхідні для вашого додатку (таблиці стилів, скрипти, зображення).

В Express цю функціональність можна підключити за допомогою проміжного ПЗ `express.static(path)`, де параметр `path` – це абсолютний шлях папки з цими активами.

Якщо ви ніколи не чули про проміжне ПЗ, не хвилюйтеся. Ми розглянемо його пізніше. Загалом, проміжне ПЗ – це функції, які перехоплюють обробники маршруту, додаючи деяку інформацію. Проміжне ПЗ підключається за допомогою методу `app.use(path, middlewareFunction)`. Перший аргумент `path` є необов'язковим. Якщо його не передати, то проміжне ПЗ буде виконуватися для всіх запитів.

# --instructions--

Під'єднайте проміжне ПЗ `express.static()` до шляху `/public` за допомогою `app.use()`. Абсолютним шляхом до папки assets є `__dirname + /public`.

Тепер ваш додаток зможе обслуговувати таблиці стилів CSS. Зверніть увагу, що посилання на файл `/public/style.css` знаходиться у `/views/index.html` у шаблонному коді проєкту. Тепер ваша головна сторінка виглядатиме краще!

# --hints--

Ваш застосунок повинен обслуговувати файли з директорії `/public` до шляху `/public`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/style.css').then(
    (data) => {
      assert.match(
        data,
        /body\s*\{[^\}]*\}/,
        'Your app does not serve static assets'
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

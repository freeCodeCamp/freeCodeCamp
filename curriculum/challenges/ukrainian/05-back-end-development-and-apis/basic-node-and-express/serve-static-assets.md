---
id: 587d7fb0367417b2b2512bf0
title: Обслуговування статичного контенту
challengeType: 2
forumTopicId: 301518
dashedName: serve-static-assets
---

# --description--

Як правило, HTML-сервер має один чи кілька каталогів, доступних для користувача. Туди можна помістити статичний контент, необхідних для Вашого застосунку (таблиці стилів, скрипти, зображення).

В Express цю функцію можна підключити за допомогою проміжного програмного забезпечення `express.static(path)`, де параметр `path` - це абсолютний шлях до файлу з цим контентом.

Якщо Ви ніколи не чули про підпрограмне забезпечення, не хвилюйтеся. Пізніше ми детально його розглянемо. Загалом, підпрограмне забезпечення — це функції, що перехоплюють маршрутизатори, прикріплюючи певну інформацію. Підпрограмне забезпечення підключається за допомогою методу `app.use(path, middlewareFunction)`. Перший аргумент `path` є необов'язковим. Якщо цей аргумент не передається, підпрограмне забезпечення буде виконуватися для всіх запитів.

# --instructions--

Підключіть підпрограмне забезпечення `express.static()` до `/public` шляху з `app.use()`. Абсолютним шляхом до папки assets є `__dirname + /public`.

Тепер Ваш застосунок зможе обслуговувати CSS таблиці стилів. Зверніть увагу, що посилання на файл `/public/style.css` знаходиться у папці `/views/index.html` шаблону проєктування. Тепер Ваша головна сторінка виглядатиме краще!

# --hints--

Ваш застосунок обслуговуватиме файли з каталогу `/public` до шляху `/public`

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

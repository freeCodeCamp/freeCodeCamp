---
id: 587d7fb3367417b2b2512bfb
title: 'Як використовувати package.json, ядро будь-якого Node.js проєкту або npm пакету'
challengeType: 2
forumTopicId: 301528
dashedName: how-to-use-package-json-the-core-of-any-node-js-project-or-npm-package
---

# --description--

Робота над цими завданнями включатиме написання вашого коду  з використанням одного з наступних методів:

- Клонуйте <a href="https://github.com/freeCodeCamp/boilerplate-npm/" target="_blank" rel="noopener noreferrer nofollow">цей репозиторій GitHub</a> та виконайте ці завдання локально.
- Використайте <a href="https://replit.com/github/freeCodeCamp/boilerplate-npm" target="_blank" rel="noopener noreferrer nofollow">наш стартовий проєкт Replit</a> для виконання цих завдань.
- Для завершення проєкту користуйтеся вибраним вами конструктором сайту. Переконайтеся, що ви зберегли всі файли з нашого репозиторію GitHub.

Коли ви завершили, переконайтеся, що ця демоверсія вашого проєкту розміщена у відкритому доступі. Потім введіть URL-адресу в поле `Solution Link`.

Файл `package.json` є центром будь-якого проєкту Node.js або npm пакету. Він зберігає інформацію про ваш проєкт, схожий на те, як &lt;заголовок> секція HTML-документа описує вміст веб-сторінки. Він складається з одного об'єкту JSON, де інформація зберігається у парах ключ-значення. Є лише два обов'язкові поля; "ім'я" та "версія", але дуже добре практикуватися надавати додаткову інформацію про ваш проєкт, який може бути корисний майбутнім користувачам або керівникам.

Якщо подивитесь на дерево файлів вашого проєкту, то знайдете файл package.json на верхньому рівні дерева. Це файл, який ви будете покращуватись у наступних парах завдань.

Одне з найпоширеніших відомостей у цьому файлі є полем `author`. Він вказує на те, хто створив проект, і може складатися з рядка або об'єкта з контактом або іншими деталями. Об’єкт рекомендований для більших проєктів, але простий рядок, як наступний приклад, працюватиме для цього проєкту.

```json
"author": "Jane Doe",
```

# --instructions--

Додайте ваше ім'я як `author` проєкту у файл package.json.

**Примітка:** Пам'ятайте, що ви пишете JSON, бо всі назви полів повинні використовувати подвійні лапки (") і бути розділені комою (,).

# --hints--

package.json повинен мати допустимий ключ "автор"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.author, '"author" is missing');
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

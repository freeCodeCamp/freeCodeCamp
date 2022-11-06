---
id: 587d8247367417b2b2512c36
title: Встановлення та вимоги до Helmet
challengeType: 2
forumTopicId: 301581
dashedName: install-and-require-helmet
---

# --description--

Робота над цими завданнями включає написання коду користуючись одним з методів наведених нижче:

- Клонуйте <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">цей репозиторій GitHub</a> та виконайте ці завдання локально.
- Використайте <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">наш стартовий проєкт Replit</a> для виконання цих завдань.
- Для завершення завдань використовуйте обраний вами розробник сайтів. Переконайтеся, що ви зберегли всі файли з нашого репозиторію GitHub.

Після завершення, переконайтеся, що робоча демоверсія вашого проєкту розміщена у відкритому доступі. Потім введіть URL-адресу проєкту в поле `Solution Link`.

Helmet допоможе вам захистити ваші Express-програми, встановивши різноманітні HTTP заголовки.

# --instructions--

Весь ваш код для цих уроків розміщується в файл `myApp.js` між рядками коду, з якого ми почали вам писати. Не змінюйте та не видаляйте код, який ми додали для вас.

Версія Helmet `3.21.3` вже встановлена, тому вимагайте його як `helmet` у `myApp.js`.

# --hints--

Версія `helmet``3.21.3` повинна бути в `package.json`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      const packJson = JSON.parse(data);
      const helmet = packJson.dependencies.helmet;
      assert(helmet === '3.21.3' || helmet === '^3.21.3');
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

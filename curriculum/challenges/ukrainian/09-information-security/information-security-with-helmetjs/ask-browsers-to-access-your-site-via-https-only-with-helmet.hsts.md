---
id: 587d8248367417b2b2512c3c
title: Попросіть браузерів надавати доступ до сайту через HTTPS за допомогою helmet.hsts()
challengeType: 2
forumTopicId: 301573
dashedName: ask-browsers-to-access-your-site-via-https-only-with-helmet-hsts
---

# --description--

Нагадуємо, що цей проєкт створюється на основі наступного стартового проєкту на <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> або клонований з <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

HTTP Strict Transport Security (HSTS) – це політика веббезпеки, яка допомагає захистити вебсайти від атак зниження рівня на протокол та крадіжки куків. Якщо до вашого вебсайту можна отримати доступ через HTTPS, можна попросити у браузера користувача, щоб він уникав незахищене HTTP. Встановлюючи заголовок Strict-Transport-Security, ви вказуєте браузерам використовувати HTTPS для майбутніх запитів протягом певного періоду часу. Це спрацює для запитів, які слідують після початкового запиту.

# --instructions--

Налаштуйте `helmet.hsts()` для використання HTTPS протягом наступних 90 днів. Передайте об'єкт конфігурації `{maxAge: timeInSeconds, force: true}`. Ви можете створити змінну `ninetyDaysInSeconds = 90*24*60*60;` для використання в `timeInSeconds`. Replit вже включає в себе hsts. Щоб перевизначити параметри, потрібно встановити поле «force» в об'єкті конфігурації на true. Ми перехопимо і відновимо заголовок Replit після перевірки.

Примітка: налаштування HTTPS на вебсайті передбачає придбання домену та сертифікат SSL/TLS.

# --hints--

Проміжне ПЗ helmet.hsts() повинне бути встановлене правильно

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'hsts');
      assert.property(data.headers, 'strict-transport-security');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

maxAge повинен дорівнювати 7776000 сек (90 днів)

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.match(
        data.headers['strict-transport-security'],
        /^max-age=7776000;?/
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

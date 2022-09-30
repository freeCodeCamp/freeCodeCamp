---
id: 587d8248367417b2b2512c3c
title: Надавайте браузеру доступ до Вашого сайту тільки через HTTPS за допомогою helmet.hsts()
challengeType: 2
forumTopicId: 301573
dashedName: ask-browsers-to-access-your-site-via-https-only-with-helmet-hsts
---

# --description--

Нагадуємо, що цей проєкт створюється на основі наступного стартового проєкту на <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> або клонований з <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

HTTP Strict Transport Security (HSTS) - це політика веб-безпеки, яка допомагає захистити вебсайти від атак зниження рівня на протокол та крадіжку куки. Якщо доступ до вашого веб-сайту можна отримати через HTTPS-протокол, запобігайте використанню браузером незахищеного HTTPS-протоколу. Встановлюючи заголовок Strict-Transport-Security, ви вказуєте браузерам використовувати протокол HTTPS для майбутніх запитів протягом певного періоду часу. Це спрацює для запитів, які слідують після початкового запиту.

# --instructions--

Налаштуйте`helmet.hsts()`для використання HTTPS-протоколу протягом наступних 90 днів. Передайте об'єкт конфігурації`{maxAge: timeInSeconds, force: true}`. Ви можете створити змінну`ninetyDaysInSeconds = 90*24*60*60;` для застосування в `timeInSeconds`. Replit вже включає в себе hsts. Для зміни його налаштувань необхідно встановити поле "force" в об'єкті конфігурації. Ми перехопимо і відновимо заголовок Replit після перевірки.

Примітка: Налаштування HTTPS на вебсайті користувача передбачає придбання домену та SSL/TLS сертифікату.

# --hints--

проміжне програмне забезпечення helmet.hsts() необхідно правильно встановити

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

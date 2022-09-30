---
id: 587d8247367417b2b2512c38
title: Зменшення ризику клікджекінгу за допомогою helmet.frameguard()
challengeType: 2
forumTopicId: 301582
dashedName: mitigate-the-risk-of-clickjacking-with-helmet-frameguard
---

# --description--

Нагадуємо, що цей проєкт створюється на основі наступного стартового проєкту на <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> або клонований з <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Ваша сторінка може бути задана `<frame>` або `<iframe>` без вашої згоди. З-поміж інших атак, це може призвести до атак клікджекінгу. Клікджекінг - це механізм обману інтернет-користувача, при якому користувач заманюється на зовні знайому йому сторінку, яка вже змінена хакером. Такий механізм можливий, якщо вашу сторінку використовують в зловмисних цілях за допомогою перенаправлення iframing. У такій ситуації хакер розміщує поверх видимої сторінки невидимий шар. Невидимі елементи управління (кнопки, посилання) запускають ворожий скрипт. Це проміжне програмне забезпечення встановлює заголовок X-Frame-Options. Воно обмежує дії хакерів, які можуть перенаправити вашу сторінку. Доступні три режими: DENY, SAMEORIGIN і ALLOW-FROM.

Немає потреби перенаправляти наш додаток.

# --instructions--

Використовуйте `helmet.frameguard()`, що сходиться з об’єктом конфігурації `{action: 'deny'}`.

# --hints--

проміжне програмне забезпечення helmet.frameguard() необхідно правильно встановити

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(
        data.appStack,
        'frameguard',
        'helmet.frameguard() middleware is not mounted correctly'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

helmet.frameguard() 'action' слід встановити в режимі 'DENY'

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.property(data.headers, 'x-frame-options');
      assert.equal(data.headers['x-frame-options'], 'DENY');
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

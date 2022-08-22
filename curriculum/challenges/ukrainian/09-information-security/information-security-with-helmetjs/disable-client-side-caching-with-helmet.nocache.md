---
id: 587d8249367417b2b2512c3e
title: Вимикання кешування Client-Side за допомогою helmet.noCache()
challengeType: 2
forumTopicId: 301576
dashedName: disable-client-side-caching-with-helmet-nocache
---

# --description--

Нагадуємо, що цей проєкт створюється на основі наступного стартового проєкту на <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> або клонований з <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Якщо ви випускаєте оновлення для вашого веб-сайту і хочете, щоб користувачі завжди завантажували новішу версію, ви можете спробувати вимкнути кешування в їхньому браузері. Це може бути корисним також у розробці. Проте використовуйте таку опцію лише за необхідністю, адже з ним кешування не покращує продуктивність як зазвичай.

# --instructions--

Використовуйте метод `helmet.noCache()` на вашому сервері.

# --hints--

проміжне програмне забезпечення helmet.noCache() необхідно правильно встановити

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'nocache');
      assert.equal(
        data.headers['cache-control'],
        'no-store, no-cache, must-revalidate, proxy-revalidate'
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

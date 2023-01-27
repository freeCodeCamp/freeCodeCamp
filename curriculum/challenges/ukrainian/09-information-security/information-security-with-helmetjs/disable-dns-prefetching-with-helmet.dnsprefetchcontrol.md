---
id: 587d8248367417b2b2512c3d
title: Вимкніть передвибірку DNS за допомогою helmet.dnsPrefetchControl()
challengeType: 2
forumTopicId: 301577
dashedName: disable-dns-prefetching-with-helmet-dnsprefetchcontrol
---

# --description--

Нагадуємо, що цей проєкт створюється на основі наступного стартового проєкту на <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> або клонований з <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Щоб покращити продуктивність, більшість браузерів випереджають записи DNS для посилань на сторінці. Таким способом IP призначення уже відоме, коли користувач натискає на посилання. Це може призвести до надмірного використання сервісу DNS (якщо у вас великий вебсайт, який відвідують мільйони людей…), проблем із конфідеційністю (злочинець зможе встановити, що ви перебуваєте на певній сторінці) або змін статистики сторінки (деякі посилання можуть відображатись як вже відвідані, навіть якщо це не так). Якщо вам необхідний високий рівень безпеки, можна вимкнути передвибірку DNS, але втративши продуктивність.

# --instructions--

Використайте метод `helmet.dnsPrefetchControl()` на своєму сервері.

# --hints--

Проміжне ПЗ helmet.dnsPrefetchControl() повинне бути встановлене правильно

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'dnsPrefetchControl');
      assert.equal(data.headers['x-dns-prefetch-control'], 'off');
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

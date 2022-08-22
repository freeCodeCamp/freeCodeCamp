---
id: 587d8248367417b2b2512c3d
title: Вимкнення DNS-Prefetching за допомогою helmet.dnsPrefetchControl()
challengeType: 2
forumTopicId: 301577
dashedName: disable-dns-prefetching-with-helmet-dnsprefetchcontrol
---

# --description--

Нагадуємо, що цей проєкт створюється на основі наступного стартового проєкту на <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> або клонований з <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Щоб покращити продуктивність, більшість браузерів оновлюють записи DNS на сторінці посилання. Таким способом Ip-адреса отримувача уже відома, коли користувач натискає на посилання. Це може призвести до надмірного використання DNS-служби (якщо у вас великий веб-сайт, який відвідують мільйони людей…), проблем конфіденційності (злочинець зможе встановити, що ви перебуваєте на певній сторінці) або зміни статистики сторінки (деякі посилання можуть відображатись як вже відвідані навіть якщо вони не є такими). Якщо рівень безпеки для вас важливий, ви можете вимкнути попереднє перетворення доменних імен (DNS), втративши продуктивність.

# --instructions--

Застосовуйте метод `helmet.dnsPrefetchControl()` на вашому сервері.

# --hints--

проміжне програмне забезпечення helmet.dnsPrefetchControl() необхідно правильно встановити

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

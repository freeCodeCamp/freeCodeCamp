---
id: 587d8248367417b2b2512c3b
title: Запобігти відкриванню ненадійних HTML кодів браузером Internet Explorer за допомогою helmet.ieNoOpen()
challengeType: 2
forumTopicId: 301584
dashedName: prevent-ie-from-opening-untrusted-html-with-helmet-ienoopen
---

# --description--

Нагадуємо, що цей проєкт створюється на основі наступного стартового проєкту на <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> або клонований з <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Деякі веб-додатки будуть пропонувати завантажувати ненадійний HTML код. За змовчуванням деякі версії браузера Internet Explorer відкривають такі HTML файли в залежності від вашого сайту. Це означає, що ненадійна HTML сторінка може отримати несанкціонований доступ до ваших вкладок. Це проміжне програмне забезпечення встановлює заголовок X-Frame-Options, щоб не відкривати такі файли. Це дозволить користувачам Internet Explorer виконувати завантаження на надійних сайтах.

# --instructions--

Застосовуйте метод `helmet.ieNoOpen()` на вашому сервері.

# --hints--

проміжне програмне забезпечення helmet.ieNoOpen() необхідно правильно встановити

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'ienoopen');
      assert.equal(data.headers['x-download-options'], 'noopen');
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

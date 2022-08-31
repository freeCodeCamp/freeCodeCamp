---
id: 587d8248367417b2b2512c3a
title: Уникайте передачі відповіді типу MIME через helmet.noSniff()
challengeType: 2
forumTopicId: 301574
dashedName: avoid-inferring-the-response-mime-type-with-helmet-nosniff
---

# --description--

Нагадуємо, що цей проєкт створюється на основі наступного стартового проєкту на <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> або клонований з <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>. Браузери можуть використовувати вміст або MIME аналіз, щоб замінити запити заголовків `Content-Type` для передбачення та обробки даних, використовуючи неявний тип вмісту. Окрім того, що такий процес може бути зручним для певних сценаріїв, він також призводить до деяких небезпечних атак. Таке проміжне програмне забезпечення закріплює заголовок X-Content-Type-Options на `nosniff`, вказуючи браузеру не обходити наданий `Content-Type`.

# --instructions--

Застосовуйте метод `helmet.noSniff()` на вашому сервері.

# --hints--

проміжне програмне забезпечення helmet.noSniff() необхідно правильно встановити

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'nosniff');
      assert.equal(data.headers['x-content-type-options'], 'nosniff');
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

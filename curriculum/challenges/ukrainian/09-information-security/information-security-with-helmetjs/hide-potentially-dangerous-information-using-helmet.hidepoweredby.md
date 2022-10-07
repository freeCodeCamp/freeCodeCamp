---
id: 587d8247367417b2b2512c37
title: Приховування потенційно небезпечної інформації за допомогою helmet.hidePoweredBy()
challengeType: 2
forumTopicId: 301580
dashedName: hide-potentially-dangerous-information-using-helmet-hidepoweredby
---

# --description--

Нагадуємо, що цей проєкт створюється на основі наступного стартового проєкту на <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> або клонований з <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Хакери можуть використовувати наявні недоліки в системі захисту в Express/Node, якщо вони бачать, що сайт працює на базі Express. Тег `X-Powered-By: Express` надсилається в кожен запит, що надійшов з Express за замовчуванням. Використовуйте проміжне програмне забезпечення `helmet.hidePoweredBy()`, щоб усунути заголовок X-Powered-By.

# --hints--

проміжне програмне забезпечення helmet.hidePoweredBy() необхідно правильно встановити

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'hidePoweredBy');
      assert.notEqual(data.headers['x-powered-by'], 'Express');
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

---
id: 587d8247367417b2b2512c39
title: >-
  Зниження ризику атак міжсайтового скриптингу (XSS) за допомогою helmet.xssFilter()
challengeType: 2
forumTopicId: 301583
dashedName: mitigate-the-risk-of-cross-site-scripting-xss-attacks-with-helmet-xssfilter
---

# --description--

Нагадуємо, що цей проєкт створюється на основі наступного стартового проєкту на <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> або клонований з <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Міжсайтовий скриптинг (XSS) - це частий тип атаки, під час якої зловмисні скрипти потрапляють на вразливі сторінки, з метою крадіжки конфіденційних даних, таких як сеансові файли кукі або паролі.

Основне правило для зниження ризику атаки XSS просте: ''Ніколи не довіряйте користувачам''. Як розробнику, вам слід завжди обробляти всі вхідні дані ззовні. Це включає дані, що надходять з форм, URL запитів GET і навіть з HTTP POST. Обробка означає, що вам слід знайти і закодувати символи, які можуть виявитись небезпечними.e.g. &lt;, >.

Сучасні браузери можуть допомогти зменшити ризик за допомогою залучення кращих стратегій програмного забезпечення. Часто це можна налаштувати за допомогою http-заголовків.

Заголовок X-XSS-Protection HTTP - це основний захист. Браузер виявляє потенційний ін'єктивний скрипт за допомогою евристичного фільтру. Якщо застосовано заголовок, браузер змінює код скрипту, нейтралізуючи його. Він все ще має обмежену підтримку.

# --instructions--

Використовуйте `helmet.xssFilter()` для збереження даних на ваш сервер.

# --hints--

проміжне програмне забезпечення helmet.xssFilter() необхідно правильно встановити

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'xXssProtection');
      assert.property(data.headers, 'x-xss-protection');
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

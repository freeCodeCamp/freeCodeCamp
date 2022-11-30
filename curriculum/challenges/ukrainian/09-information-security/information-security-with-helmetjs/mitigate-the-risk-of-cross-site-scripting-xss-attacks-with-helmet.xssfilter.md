---
id: 587d8247367417b2b2512c39
title: >-
  Знизьте ризик атак міжсайтового скриптингу (XSS) за допомогою helmet.xssFilter()
challengeType: 2
forumTopicId: 301583
dashedName: mitigate-the-risk-of-cross-site-scripting-xss-attacks-with-helmet-xssfilter
---

# --description--

Нагадуємо, що цей проєкт створюється на основі наступного стартового проєкту на <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> або клонований з <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Міжсайтовий скриптинг (XSS) – це частий тип атак, коли зловмисні скрипти потрапляють на вразливі сторінки, з метою крадіжки конфіденційних даних, як-от сеансові файли куки або паролі.

Основне правило для зниження ризику атаки XSS просте: «Ніколи не довіряйте введеним даним». Як розробник, ви завжди повинні обробляти вхідні дані, що надходять ззовні. Сюди входять дані, які надходять з форм, запитів GET від url і навіть тіл POST. «Обробка» означає, що вам потрібно знайти і закодувати символи, які можуть бути небезпечними, наприклад &lt;, >.

Сучасні браузери можуть допомогти зменшити ризик за допомогою залучення кращих стратегій програмного забезпечення. Часто це можна налаштувати за допомогою заголовків http.

Заголовок HTTP X-XSS-Protection – це основний захист. Браузер виявляє потенційний інжектований скрипт за допомогою евристичного фільтру. Якщо застосовано заголовок, браузер змінює код скрипту, нейтралізуючи його. Він досі має обмежену підтримку.

# --instructions--

Використайте `helmet.xssFilter()`, щоб обробити введені дані, надіслані на ваш сервер.

# --hints--

Проміжне ПЗ helmet.xssFilter() повинне бути встановлене правильно

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

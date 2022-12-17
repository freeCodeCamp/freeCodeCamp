---
id: 587d8249367417b2b2512c3f
title: Встановіть політику безпеки вмісту за допомогою helmet.contentSecurityPolicy()
challengeType: 2
forumTopicId: 301585
dashedName: set-a-content-security-policy-with-helmet-contentsecuritypolicy
---

# --description--

Нагадуємо, що цей проєкт створюється на основі наступного стартового проєкту на <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> або клонований з <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Це завдання фокусується на новому перспективному захисті, за допомогою якого можна значно скоротити ризик та вплив багатьох атак в сучасних браузерах. Встановлюючи та налаштовуючи політику безпеки вмісту, ви можете запобігти проникненню всього небажаного на вашу сторінку. Це захистить ваш додаток від вразливостей XSS, небажаного відстеження, шкідливих фреймів та багато іншого. CSP працює шляхом визначення дозволеного списку джерел контенту, яким довіряють. Ви можете налаштувати їх для кожного типу ресурсів, які можуть знадобитися на вебсторінці (алгоритми, таблиці стилів, шрифти, фрейми, медіа тощо...). Існує декілька доступних директив, тому власники вебсайтів можуть мати повний контроль. Для більш детальної інформації, див. HTML 5 Rocks, KeyCDN. На жаль, CSP не підтримується старішими браузерами.

Директиви знаходяться у загальному доступі за замовчуванням, тому важливо встановити директиву defaultSrc як резервну. Helmet підтримує такі стилі іменування, як defaultSrc та default-src. Резервний варіант застосовується для більшості невизначених директив.

# --instructions--

У цій вправі використайте `helmet.contentSecurityPolicy()`. Налаштуйте його, додавши об’єкт `directives`. В об'єкті встановіть значення `defaultSrc` на `["'self'"]` (список дозволених джерел повинен бути в масиві), щоб довіряти лише адресі свого вебсайту за замовчуванням. Також встановіть директиву `scriptSrc`, щоб тільки ви могли завантажувати скрипти зі свого вебсайту (`'self'`) та домену `'trusted-cdn.com'`.

Підказка: в ключовому слові `'self'` одинарні лапки є частиною ключового слова, тому його потрібно взяти в подвійні лапки, щоб воно працювало.

# --hints--

Проміжне ПЗ helmet.contentSecurityPolicy() повинне бути встановлене правильно

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'csp');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Ваша конфігурація csp неправильна. defaultSrc повинне бути ["'self'"] та scriptSrc повинне бути ["'self'", 'trusted-cdn.com']

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      var cspHeader = Object.keys(data.headers).filter(function (k) {
        return (
          k === 'content-security-policy' ||
          k === 'x-webkit-csp' ||
          k === 'x-content-security-policy'
        );
      })[0];
      assert.equal(
        data.headers[cspHeader],
        "default-src 'self'; script-src 'self' trusted-cdn.com"
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

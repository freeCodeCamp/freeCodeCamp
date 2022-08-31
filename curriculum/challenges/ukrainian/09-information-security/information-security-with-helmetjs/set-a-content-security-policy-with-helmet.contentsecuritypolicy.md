---
id: 587d8249367417b2b2512c3f
title: Встановіть Політику Безпеки Контенту за допомогою helmet.contentSecurityPolicy()
challengeType: 2
forumTopicId: 301585
dashedName: set-a-content-security-policy-with-helmet-contentsecuritypolicy
---

# --description--

Нагадуємо, що цей проєкт створюється на основі наступного стартового проєкту на <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> або клонований з <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Це завдання наголошує на одному новому перспективному захисті, за допомогою якого можна значно скоротити ризик та вплив багатьох видів атак в сучасних браузерах. Встановлюючи та налаштовуючи Політику Безпеки Контенту, ви можете запобігти проникнення всього небажаного на вашу сторінку. Це захистить ваш додаток від вразливостей XSS, небажаного відстеження, шкідливих фреймів, та багато іншого. CSP працює шляхом визначення дозволеного списку джерел контенту, яким довіряють. Ви можете налаштувати їх для кожного типу ресурсів, який може знадобитися на вебсторінці (алгоритми, таблиці стилів, шрифти, рамки, медіа, тощо...). Існує декілька доступних директив, тому власники вебсайтів можуть мати детальний контроль. Для більш детальної інформації перегляньте HTML 5 Rocks, KeyCDN. На жаль, CSP не підтримується старішим браузером.

За замовчуванням, директиви знаходяться у загальному доступі, тому важливо встановити директиву defaultSrc, як резервну. Helmet підтримує такі стилі іменування, як defaultSrc та default-src. Резервний варіант застосовується для більшості невизначених директив.

# --instructions--

У цій вправі використовуйте `helmet.contentSecurityPolicy()`. Налаштуйте його, додавши об’єкт `directives`. В об'єкті, встановіть значення `defaultSrc` на `["'self'"]` (список дозволених джерел має бути в масиві), для того, щоб довіряти лише адресі вашого вебсайту, за замовчуванням. Також встановіть директиву `scriptSrc`, щоб ви могли завантажувати скрипти лише з вашого вебсайту (`'self'`), та з домену `'trusted-cdn.com'`.

Підказка: в ключовому слові `'self'` одинарні лапки є частиною ключового слова, тому його потрібно взяти в подвійні лапки, щоб воно працювало.

# --hints--

проміжне програмне забезпечення helmet.contentSecurityPolicy() повинно бути правильно встановлене

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

Ваша конфігурація csp неправильна. Значення за замовчуванням Src має бути ["'self'"] та scriptSrc повинно бути ["'self'", 'trusted-cdn.com']

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

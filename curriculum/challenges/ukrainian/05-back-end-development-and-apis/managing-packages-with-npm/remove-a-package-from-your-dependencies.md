---
id: 587d7fb5367417b2b2512c04
title: Видалення пакету із залежностей
challengeType: 2
forumTopicId: 301530
dashedName: remove-a-package-from-your-dependencies
---

# --description--

Ви вже протестували кілька способів, як можна керувати залежностями Вашого проєкту за допомогою розділу dependencies файлу package.json. Ви також додали зовнішні пакети до Вашого файлу і навіть задали npm бажані версії за допомогою спеціальних символів: тильда та карет.

Але що робити, якщо Ви бажаєте видалити більше не потрібний зовнішній пакет? Певно, Ви вже здогадалися, треба просто видалити відповідну пару "ключ-значення" цього пакету із залежностей.

This same method applies to removing other fields in your package.json as well.

# --instructions--

Remove the `@freecodecamp/example` package from your dependencies.

**Примітка:** Переконайтесь, що після видалення пакету у Вас вказано правильну кількість ком.

# --hints--

`"dependencies"` should not include `"@freecodecamp/example"`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.notProperty(
        packJson.dependencies,
        '@freecodecamp/example',
        '"dependencies" still includes "@freecodecamp/example"'
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

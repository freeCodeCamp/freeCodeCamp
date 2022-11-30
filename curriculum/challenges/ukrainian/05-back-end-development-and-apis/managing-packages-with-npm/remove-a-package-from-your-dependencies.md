---
id: 587d7fb5367417b2b2512c04
title: Видаліть пакет зі своїх залежностей
challengeType: 2
forumTopicId: 301530
dashedName: remove-a-package-from-your-dependencies
---

# --description--

Ви вже протестували декілька способів, як можна керувати залежностями свого проєкту за допомогою розділу залежностей файлу package.json. Ви також додали зовнішні пакети до свого файлу і навіть задали npm бажані версії за допомогою спеціальних символів, як-от тильда та карет.

Але що робити, якщо ви хочете видалити більше не потрібний зовнішній пакет? Мабуть, ви вже здогадалися, що потрібно просто видалити відповідну пару ключ-значення цього пакету із залежностей.

Цей самий метод стосується видалення інших полів у package.json.

# --instructions--

Видаліть пакет `@freecodecamp/example` зі своїх залежностей.

**Примітка:** переконайтесь, що після видалення пакету у вас правильна кількість ком.

# --hints--

`"dependencies"` не повинні містити `"@freecodecamp/example"`.

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

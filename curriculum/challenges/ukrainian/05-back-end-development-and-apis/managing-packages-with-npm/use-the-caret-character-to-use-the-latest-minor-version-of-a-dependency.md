---
id: 587d7fb5367417b2b2512c03
title: Використайте символ «Карет» для останньої мінорної версії залежностей
challengeType: 2
forumTopicId: 301531
dashedName: use-the-caret-character-to-use-the-latest-minor-version-of-a-dependency
---

# --description--

Подібно до символу тильда, про який ми дізналися в останньому завданні та який дозволяє npm встановити найновіший PATCH для залежності, символ карет (`^`) також дозволяє npm встановлювати майбутні оновлення. Відмінність полягає в тому, що символ карет дозволяє оновлення і MINOR, і PATCH.

Your current version of `@freecodecamp/example` should be `~1.2.13` which allows npm to install to the latest `1.2.x` version. If you were to use the caret (^) as a version prefix instead, npm would be allowed to update to any `1.x.x` version.

```json
"package": "^1.3.8"
```

This would allow updates to any `1.x.x` version of the package.

# --instructions--

Використайте символ карет (`^`), щоб встановити префікс версії `@freecodecamp/example` у своїх залежностях і дозволити npm оновлення до будь-якої версії MINOR.

**Примітка:** не потрібно змінювати номери версій.

# --hints--

`"dependencies"` повинні містити `"@freecodecamp/example"`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        '@freecodecamp/example',
        '"dependencies" does not include "@freecodecamp/example"'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Версія `"@freecodecamp/example"` повинна відповідати `"^1.x.x"`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies["@freecodecamp/example"],
        /^\^1\./,
        'Wrong version of "@freecodecamp/example". It should be ^1.2.13'
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

---
id: 587d7fb5367417b2b2512c03
title: Використовуйте Caret-Character для використання останньої мінорної версії залежностей
challengeType: 2
forumTopicId: 301531
dashedName: use-the-caret-character-to-use-the-latest-minor-version-of-a-dependency
---

# --description--

Подібно символу тильда, про який ми дізналися в останньому завданні, npm дозволяє встановити найновіший ПАТЧ для залежності, символ карет (`^`) дозволяє npm також встановлювати майбутні оновлення. Відмінність полягає в тому, що символ карет дозволяє і ДРУГОРЯДНІ оновлення, і ПАТЧІ.

Your current version of `@freecodecamp/example` should be "~1.2.13" which allows npm to install to the latest 1.2.x version. If you were to use the caret (^) as a version prefix instead, npm would be allowed to update to any 1.x.x version.

```json
"package": "^1.3.8"
```

Це б дозволило оновлювати будь-яку версію 1.xx пакета.

# --instructions--

Use the caret (`^`) to prefix the version of `@freecodecamp/example` in your dependencies and allow npm to update it to any new MINOR release.

**Примітка:** Номери версій не слід змінювати.

# --hints--

`"dependencies"` should include `"@freecodecamp/example"`.

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

`"@freecodecamp/example"` version should match `"^1.x.x"`.

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

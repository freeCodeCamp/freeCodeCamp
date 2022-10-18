---
id: 587d7fb5367417b2b2512c02
title: Використовуйте символ тильди (~), щоб завжди мати доступ до останньої версії залежностей Patch
challengeType: 2
forumTopicId: 301532
dashedName: use-the-tilde-character-to-always-use-the-latest-patch-version-of-a-dependency
---

# --description--

В останньому завданні ви сказали npm включати тільки конкретну версію пакету. Це корисний спосіб призупинити блокування ваших залежностей, якщо вам потрібно переконатися, що різні частини вашого проєкту залишаються сумісними одна з одною. Але в більшості випадків ви не захочете пропустити виправлення помилок, оскільки вони часто містять важливі патчі безпеки і (як можна сподіватися) не порушують при цьому речі.

Щоб npm залежність оновилася до останньої версії PATCH, можна встановити префікс версії залежностей з символом тильди (`~`). Ось приклад оновлення для будь-якої версії 1.3.x.

```json
"package": "~1.3.8"
```

# --instructions--

In the package.json file, your current rule for how npm may upgrade `@freecodecamp/example` is to use a specific version (1.2.13). But now, you want to allow the latest 1.2.x version.

Use the tilde (`~`) character to prefix the version of `@freecodecamp/example` in your dependencies, and allow npm to update it to any new _patch_ release.

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

`"@freecodecamp/example"` version should match `"~1.2.13"`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies["@freecodecamp/example"],
        /^\~1\.2\.13/,
        'Wrong version of "@freecodecamp/example". It should be ~1.2.13'
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

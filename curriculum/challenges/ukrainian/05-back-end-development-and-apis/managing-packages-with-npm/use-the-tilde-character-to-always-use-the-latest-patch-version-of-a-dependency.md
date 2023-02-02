---
id: 587d7fb5367417b2b2512c02
title: Використайте символ «Тильда» для останньої патч версії залежностей
challengeType: 2
forumTopicId: 301532
dashedName: use-the-tilde-character-to-always-use-the-latest-patch-version-of-a-dependency
---

# --description--

В останньому завданні ви сказали npm включати тільки конкретну версію пакету. Це корисний спосіб призупинити блокування своїх залежностей, якщо вам потрібно переконатися, що різні частини проєкту залишаються сумісними між собою. Але в більшості випадків не варто пропускати виправлення помилок, оскільки вони часто містять важливі патчі безпеки і (як можна сподіватися) нічого при цьому не порушують.

Щоб npm-залежність оновилася до останньої версії PATCH, можна встановити префікс версії залежностей з символом тильди (`~`). Here's an example of how to allow updates to any `1.3.x` version.

```json
"package": "~1.3.8"
```

# --instructions--

In the package.json file, your current rule for how npm may upgrade `@freecodecamp/example` is to use a specific version (`1.2.13`). But now, you want to allow the latest `1.2.x` version.

Використайте символ тильда (`~`), щоб встановити префікс версії `@freecodecamp/example` у своїх залежностях і дозволити npm оновлення до будь-якої версії _патч_.

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

Версія `"@freecodecamp/example"` повинна відповідати `"~1.2.13"`.

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

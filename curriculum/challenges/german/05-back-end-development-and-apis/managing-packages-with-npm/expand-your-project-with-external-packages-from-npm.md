---
id: 587d7fb4367417b2b2512c00
title: Erweitere dein Projekt mit externen Paketen von npm
challengeType: 2
forumTopicId: 301527
dashedName: expand-your-project-with-external-packages-from-npm
---

# --description--

Einer der wichtigsten Gründe für die Verwendung eines Paketmanagers, ist dessen leistungstarkes Abhängigkeitsmanagement. Anstatt manuell sicherzustellen, dass du alle Abhängigkeiten erhältst, wenn du ein Projekt auf einem neuen Computer einrichtest, installiert npm alles automatisch für dich. Aber wie kann npm genau wissen, was dein Projekt benötigt? Meet the `dependencies` section of your package.json file.

In diesem Abschnitt werden die Pakete, die dein Projekt benötigt, in folgendem Format gespeichert:

```json
"dependencies": {
  "package-name": "version",
  "express": "4.14.0"
}

```

# --instructions--

Add version "1.1.0" of the `@freecodecamp/example` package to the `dependencies` field of your `package.json` file.

**Note:** `@freecodecamp/example` is a faux package used as a learning tool.

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

`"@freecodecamp/example"` version should be `"1.1.0"`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies["@freecodecamp/example"],
        /^[\^\~]?1\.1\.0/,
        'Wrong version of "@freecodecamp/example" installed. It should be 1.1.0'
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

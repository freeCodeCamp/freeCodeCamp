---
id: 587d7fb4367417b2b2512bff
title: Füge deiner package.json eine Version hinzu
challengeType: 2
forumTopicId: 301525
dashedName: add-a-version-to-your-package-json
---

# --description--

`version` ist eines der erforderlichen Felder in deiner package.json-Datei. Dieses Feld beschreibt die aktuelle Version deines Projekts. Hier ist ein Beispiel:

```json
"version": "1.2.0",
```

# --instructions--

Füge der package.json-Datei deines Projekts eine `version` hinzu.

# --hints--

package.json sollte einen gültigen "version"-Schlüssel haben

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.version, '"version" is missing');
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

---
id: 587d7fb4367417b2b2512bfd
title: Füge deiner package.json Schlüsselwörter hinzu
challengeType: 2
forumTopicId: 301526
dashedName: add-keywords-to-your-package-json
---

# --description--

Im Feld `keywords` kannst du dein Projekt mit passenden Schlüsselwörtern beschreiben. Hier ist ein Beispiel:

```json
"keywords": [ "descriptive", "related", "words" ],
```

Wie du sehen kannst, besteht dieses Feld aus einem Array mit, in Anführungszeichen gesetzten, Strings.

# --instructions--

Füge dem Feld `keywords` in der package.json-Datei deines Projekts einen Array mit geeigneten Strings hinzu.

Eines der Schlüsselwörter sollte "freecodecamp" sein.

# --hints--

package.json sollte einen gültigen "keywords"-Schlüssel haben

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.keywords, '"keywords" is missing');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

"keywords"-Feld sollte ein Array sein

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.isArray(packJson.keywords, '"keywords" is not an array');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

"keywords" sollte "freecodecamp" enthalten

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.include(
        packJson.keywords,
        'freecodecamp',
        '"keywords" does not include "freecodecamp"'
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

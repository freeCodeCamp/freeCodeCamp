---
id: 587d7fb4367417b2b2512bfd
title: Aggiungere parole chiave al tuo package.json
challengeType: 2
forumTopicId: 301526
dashedName: add-keywords-to-your-package-json
---

# --description--

Il campo `keywords` è dove puoi descrivere il tuo progetto usando le parole chiave correlate. Qui un esempio:

```json
"keywords": [ "descriptive", "related", "words" ],
```

Come puoi vedere, questo campo è strutturato come una serie di stringhe tra virgolette doppie.

# --instructions--

Aggiungi un array di stringhe adatte al campo `keywords` nel file package.json del tuo progetto.

Una delle parole chiave dovrebbe essere "freecodecamp".

# --hints--

package.json dovrebbe avere una chiave "keywords" valida

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

il campo "keywords" dovrebbe essere un Array

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

"keywords" dovrebbe includere "freecodecamp"

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

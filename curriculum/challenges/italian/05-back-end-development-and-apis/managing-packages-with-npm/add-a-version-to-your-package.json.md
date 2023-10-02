---
id: 587d7fb4367417b2b2512bff
title: Aggiungere una versione al tuo package.json
challengeType: 2
forumTopicId: 301525
dashedName: add-a-version-to-your-package-json
---

# --description--

`version` è uno dei campi obbligatori del file package.json. Questo campo descrive la versione corrente del tuo progetto. Qui un esempio:

```json
"version": "1.2.0",
```

# --instructions--

Aggiungi una `version` al file package.json del tuo progetto.

# --hints--

package.json deve avere una chiave "version" valida

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

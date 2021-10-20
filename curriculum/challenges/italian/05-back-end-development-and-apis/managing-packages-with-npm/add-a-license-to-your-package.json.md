---
id: 587d7fb4367417b2b2512bfe
title: Aggiungere una licenza al tuo package.json
challengeType: 2
forumTopicId: 301523
dashedName: add-a-license-to-your-package-json
---

# --description--

Il campo `license` è dove informi gli utenti di quello che possono fare con il tuo progetto.

Alcune licenze comuni per progetti open source sono MIT e BSD. Le informazioni sulla licenza non sono richieste e le leggi sul copyright nella maggior parte dei paesi ti daranno la proprietà di ciò che crei senza che tu debba fare altro. Tuttavia, è sempre una buona pratica dichiarare esplicitamente quello che gli utenti possono e non possono fare. Ecco un esempio del campo di licenza:

```json
"license": "MIT",
```

# --instructions--

Compila il campo `license` nel file package.json del tuo progetto come ritieni opportuno.

# --hints--

package.json dovrebbe avere una chiave "license" valida

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.license, '"license" is missing');
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

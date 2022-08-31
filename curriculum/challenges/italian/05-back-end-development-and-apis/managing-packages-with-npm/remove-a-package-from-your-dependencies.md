---
id: 587d7fb5367417b2b2512c04
title: Rimuovere un pacchetto dalle tue dipendenze
challengeType: 2
forumTopicId: 301530
dashedName: remove-a-package-from-your-dependencies
---

# --description--

Ora hai testato alcuni modi per gestire le dipendenze del tuo progetto utilizzando la sezione delle dipendenze di package.json. Hai anche incluso dei pacchetti esterni aggiungendoli al file e hai detto a npm quali tipi di versioni desideri, utilizzando caratteri speciali come la tilde o il cursore.

Ma cosa dovresti fare per rimuovere un pacchetto esterno di cui non hai più bisogno? Potresti già averlo indovinato, basta rimuovere dalle dipendenze la coppia chiave-valore corrispondente a quel pacchetto.

Questo stesso metodo si applica anche alla rimozione di altri campi nel tuo package.json.

# --instructions--

Rimuovi il pacchetto `@freecodecamp/example` dalle tue dipendenze.

**Nota:** Assicurati di avere la giusta quantità di virgole dopo averlo rimosso.

# --hints--

`"dependencies"` non dovrebbe includere `"@freecodecamp/example"`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.notProperty(
        packJson.dependencies,
        '@freecodecamp/example',
        '"dependencies" still includes "@freecodecamp/example"'
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

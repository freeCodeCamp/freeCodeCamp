---
id: 587d7fb5367417b2b2512c03
title: Usa il simbolo dell'accento circonflesso per usare l'ultima versione minore di una dipendenza
challengeType: 2
forumTopicId: 301531
dashedName: use-the-caret-character-to-use-the-latest-minor-version-of-a-dependency
---

# --description--

Simile a come la tilde vista nell'ultima sfida permette a npm di installare l'ultima PATCH per una dipendenza, l'accento circonflesso (caret, `^`) permette a npm di installare anche aggiornamenti futuri. La differenza è che l'accento circonflesso permette sia aggiornamenti di versione minore che di Patch.

La versione attuale di `@freecodecamp/example` dovrebbe essere `~1.2.13` che permette a npm di installare l'ultima versione `1.2.x`. Se invece dovessi usare il caret (^) come prefisso di versione, npm avrebbe il permesso di aggiornare a qualsiasi versione `1.x.x`.

```json
"package": "^1.3.8"
```

Questo permetterebbe di aggiornare qualsiasi versione `1.x.x` del pacchetto.

# --instructions--

Usa l'accento circonflesso (`^`) come prefisso di versione per `@freecodecamp/example` nelle tue dipendenze, e permetti a npm di aggiornare a qualsiasi nuova versione minore.

**Nota:** I numeri di versione non devono essere modificati.

# --hints--

`"dependencies"` dovrebbe includere `"@freecodecamp/example"`.

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

La versione di `"@freecodecamp/example"` deve corrispondere a `"^1.x.x"`.

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

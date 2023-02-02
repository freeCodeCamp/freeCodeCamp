---
id: 587d7fb5367417b2b2512c03
title: Usa il simbolo dell'accento circonflesso per usare l'ultima versione minore di una dipendenza
challengeType: 2
forumTopicId: 301531
dashedName: use-the-caret-character-to-use-the-latest-minor-version-of-a-dependency
---

# --description--

Simile a come la tilde vista nell'ultima sfida permette a npm di installare l'ultima PATCH per una dipendenza, l'accento circonflesso (caret, `^`) permette a npm di installare anche aggiornamenti futuri. La differenza è che l'accento circonflesso permette sia aggiornamenti di versione minore che di Patch.

Your current version of `@freecodecamp/example` should be `~1.2.13` which allows npm to install to the latest `1.2.x` version. If you were to use the caret (^) as a version prefix instead, npm would be allowed to update to any `1.x.x` version.

```json
"package": "^1.3.8"
```

This would allow updates to any `1.x.x` version of the package.

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

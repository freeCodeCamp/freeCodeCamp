---
id: 587d7fb5367417b2b2512c03
title: Usare il simbolo del cursore per specificare l'ultima versione minore di una dipendenza
challengeType: 2
forumTopicId: 301531
dashedName: use-the-caret-character-to-use-the-latest-minor-version-of-a-dependency
---

# --description--

Simile a come la tilde che abbiamo imparato nell'ultima sfida permette a npm di installare l'ultima PATCH per una dipendenza, il cursore (caret, `^`) permette a npm di installare anche aggiornamenti futuri. La differenza è che il cursore permetterà sia gli aggiornamenti MINOR che le PATCHes.

La tua versione attuale di moment dovrebbe essere "~2.10.2" che permette a npm di installare l'ultima versione 2.10.x. Se invece dovessi usare il cursore (^) come prefisso di versione, npm avrebbe il permesso di aggiornare a qualsiasi versione 2.x.x.

```json
"package": "^1.3.8"
```

Questo permetterebbe di aggiornare qualsiasi versione 1.x.x del pacchetto.

# --instructions--

Usa il cursore (`^`) per prefissare la versione di moment nelle tue dipendenze e consentire a npm di aggiornarlo a qualsiasi nuova versione MINOR.

**Nota:** I numeri di versione non devono essere modificati.

# --hints--

"dependencies" dovrebbe includere "moment"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'moment',
        '"dependencies" does not include "moment"'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

La versione di "moment" dovrebbe corrispondere a "^2.x.x"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies.moment,
        /^\^2\./,
        'Wrong version of "moment". It should be ^2.10.2'
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

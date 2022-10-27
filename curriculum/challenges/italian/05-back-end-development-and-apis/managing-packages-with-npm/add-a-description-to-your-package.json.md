---
id: 587d7fb3367417b2b2512bfc
title: Aggiungere una descrizione al tuo package.json
challengeType: 2
forumTopicId: 301522
dashedName: add-a-description-to-your-package-json
---

# --description--

La parte successiva di un buon file package.json è il campo `description`, che conterrà una breve ma informativa descrizione del progetto.

If some day you plan to publish a package to npm, this is the string that should sell your idea to the user when they decide whether to install your package or not. Tuttavia, questo non è l'unico caso di utilizzo per la descrizione: essa è un ottimo modo per riassumere ciò che un progetto fa. È altrettanto importante in qualsiasi progetto Node.js per aiutare altri sviluppatori, futuri manutentori o anche il futuro te stesso a comprendere il progetto velocemente.

Indipendentemente da ciò che prevedi per il vostro progetto, una descrizione è sicuramente consigliata. Ecco un esempio:

```json
"description": "A project that does something awesome",
```

# --instructions--

Aggiungi una `description` al file package.json del tuo progetto.

**Nota:** Ricordati di usare le virgolette doppie (") per i nomi di campo e le virgole (,) per separare i campi.

# --hints--

package.json dovrebbe avere una chiave "description" valida

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.description, '"description" is missing');
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

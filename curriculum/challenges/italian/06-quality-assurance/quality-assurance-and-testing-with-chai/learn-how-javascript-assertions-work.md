---
id: 587d824a367417b2b2512c46
title: Imparare come funzionano le asserzioni Javascript
challengeType: 2
forumTopicId: 301589
dashedName: learn-how-javascript-assertions-work
---

# --description--

Lavorare su queste sfide ti porterà a scrivere il tuo codice utilizzando uno dei seguenti metodi:

- Clonare [questo repository GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/) e completare queste sfide localmente.
- Usare [la nostra bozza di progetto su Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) per completare queste sfide.
- Usare un costruttore di siti a tua scelta per completare il progetto. Assicurati di incorporare tutti i file del nostro repository GitHub.

Quando hai finito, assicurati che una demo funzionante del tuo progetto sia ospitata in qualche percorso pubblico. Quindi invia l'URL nel campo `Solution Link`.

# --instructions--

All'interno di `tests/1_unit-tests.js`, sotto il test etichettato con `#1`, nella suite `Basic Assertions`, cambia ogni asserzione `assert` in `assert.isNull` o `assert.isNotNull` per far superare il test (dovrebbe risultare `true`). Non alterare gli argomenti passati alle asserzioni.

# --hints--

Tutti i test dovrebbero essere superati.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=0').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Dovresti scegliere il metodo corretto per la prima asserzione - `isNull` oppure `isNotNull`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=0').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'isNull', 'Null is null');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Dovresti scegliere il metodo corretto per la seconda asserzione - `isNull` oppure `isNotNull`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=0').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'isNotNull', '1 is not null');
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

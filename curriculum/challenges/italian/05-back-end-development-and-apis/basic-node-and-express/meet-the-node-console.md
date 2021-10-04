---
id: 587d7fb0367417b2b2512bed
title: Introduzione alla console di Node
challengeType: 2
forumTopicId: 301515
dashedName: meet-the-node-console
---

# --description--

Lavorare su queste sfide ti porterà a scrivere il tuo codice utilizzando uno dei seguenti metodi:

- Clonare [questo repository GitHub](https://github.com/freeCodeCamp/boilerplate-express/) e completare queste sfide localmente.
- Usare [la nostra bozza di progetto su Replit](https://replit.com/github/freeCodeCamp/boilerplate-express) per completare queste sfide.
- Usare un costruttore di siti di tua scelta per completare il progetto. Assicurati di incorporare tutti i file del nostro repository GitHub.

Quando hai finito, assicurati che una demo funzionante del tuo progetto sia ospitata in qualche percorso pubblico. Quindi invia l'URL nel campo `Solution Link`.

Durante il processo di sviluppo, è importante essere in grado di controllare cosa sta succedendo nel tuo codice.

Node è solo un ambiente JavaScript. Come per il JavaScript lato client, puoi usare la console per visualizzare utili informazioni di debug. Sulla tua macchina locale, vedrai l'output della console in un terminale. Su Replit, un terminale è aperto nel riquadro destro per impostazione predefinita.

Ti consigliamo di mantenere il terminale aperto mentre lavori a a queste sfide. Leggendo l'output nel terminale, potrai vedere eventuali errori.

# --instructions--

Modifica il file `myApp.js` per scrivere "Hello World" nella console.

# --hints--

`"Hello World"` dovrebbe essere visualizzato nella console

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/hello-console').then(
    (data) => {
      assert.isTrue(data.passed, '"Hello World" is not in the server console');
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

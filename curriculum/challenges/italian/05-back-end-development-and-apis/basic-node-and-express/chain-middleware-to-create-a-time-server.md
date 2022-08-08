---
id: 587d7fb1367417b2b2512bf4
title: Concatenare il middleware per creare un Time Server
challengeType: 2
forumTopicId: 301510
dashedName: chain-middleware-to-create-a-time-server
---

# --description--

Il middleware può essere montato su un percorso specifico utilizzando `app.METHOD(path, middlewareFunction)`. Il middleware può anche essere concatenato all'interno della definizione del percorso.

Considera l'esempio seguente:

```js
app.get('/user', function(req, res, next) {
  req.user = getTheUserSync();  // Hypothetical synchronous operation
  next();
}, function(req, res) {
  res.send(req.user);
});
```

Questo approccio è utile per dividere le operazioni server in unità più piccole. Questo porta a una migliore struttura delle app, e alla possibilità di riutilizzare il codice in luoghi diversi. Questo approccio può essere utilizzato anche per eseguire una qualche convalida sui dati. In ogni punto dello stack middleware è possibile bloccare l'esecuzione della catena corrente e passare il controllo a funzioni specificamente progettate per gestire gli errori. Oppure è possibile passare il controllo alla prossima rotta corrispondente, per gestire casi speciali. Vedremo come nella sezione Express avanzata.

# --instructions--

Nel percorso `app.get('/now', ...)` concatena una funzione middleware e il gestore finale. Nella funzione middleware dovresti aggiungere l'ora corrente all'oggetto della richiesta nella chiave `req.time`. Puoi utilizzare `new Date().toString()`. Nel gestore, rispondi con un oggetto JSON, utilizzando la struttura `{time: req.time}`.

**Nota:** Il test non sarà superato se non concatenerai il middleware. Se monti la funzione altrove, il test fallirà, anche se il risultato dell'uscita sarà corretto.

# --hints--

L'endpoint /now dovrebbe avere il middleware montato

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/chain-middleware-time').then(
    (data) => {
      assert.equal(
        data.stackLength,
        2,
        '"/now" route has no mounted middleware'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

L'endpoint `/now` dovrebbe restituire l'ora corrente.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/chain-middleware-time').then(
    (data) => {
      var now = new Date();
      assert.isAtMost(
        Math.abs(new Date(data.time) - now),
        20000,
        'the returned time is not between +- 20 secs from now'
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

---
id: 587d7fb1367417b2b2512bf1
title: Servire un JSON su una rotta specifica
challengeType: 2
forumTopicId: 301517
dashedName: serve-json-on-a-specific-route
---

# --description--

Mentre un server HTML serve HTML, un'API serve dati. Un'API <dfn>REST</dfn> (REpresentational State Transfer) consente lo scambio di dati in modo semplice, senza la necessità per i client di conoscere alcun dettaglio sul server. Il client deve solo sapere dove è la risorsa (l'URL), e l'azione che vuole eseguire su di essa (il verbo). Il verbo GET viene utilizzato quando stai recuperando alcune informazioni, senza modificare nulla. Al giorno d'oggi, il formato dati preferito per trasferire informazioni sul Web è JSON. In poche parole, JSON è un modo conveniente per rappresentare un oggetto JavaScript come una stringa, in modo che possa essere facilmente trasmesso.

Creiamo una semplice API creando una rotta (route) che risponda con JSON al percorso `/json`. Puoi farlo come al solito, con il metodo `app.get()`. All'interno del gestore della rotta, usa il metodo `res.json()`, passandogli un oggetto come argomento. Questo metodo chiude il ciclo richiesta-risposta, restituendo i dati. Dietro le quinte, converte un oggetto JavaScript valido in una stringa, poi imposta le intestazioni appropriate per dire al tuo browser che stai servendo JSON, e restituisce i dati. Un oggetto valido ha la solita struttura `{key: data}`. `data` può essere un numero, una stringa, un oggetto annidato o un array. `data` può anche essere una variabile o il risultato di una chiamata di funzione, nel qual caso sarà valutato prima di essere convertito in una stringa.

# --instructions--

Servi l'oggetto `{"message": "Hello json"}` come risposta, in formato JSON, alle richieste GET per il percorso `/json`. Quindi punta il tuo browser a `your-app-url/json`, dovresti vedere il messaggio sullo schermo.

# --hints--

L'endpoint `/json` dovrebbe servire l'oggetto JSON `{"message": "Hello json"}`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/json').then(
    (data) => {
      assert.equal(
        data.message,
        'Hello json',
        "The '/json' endpoint does not serve the right data"
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

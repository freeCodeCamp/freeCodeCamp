---
id: 587d7fb0367417b2b2512bee
title: Avviare un server Express funzionante
challengeType: 2
forumTopicId: 301519
dashedName: start-a-working-express-server
---

# --description--

Nelle prime due righe del file `myApp.js` puoi vedere quanto sia facile creare un oggetto app Express. Questo oggetto ha diversi metodi, che conoscerai in queste sfide. Un metodo fondamentale è `app.listen(port)`. Dice al tuo server di mettersi in ascolto su una data porta, mettendola in uno stato attivo. Per motivi di test, abbiamo bisogno che l'app sia in esecuzione in background per cui abbiamo aggiunto questo metodo nel file `server.js` per te.

Serviamo la nostra prima stringa! In Express, le rotte hanno la seguente struttura: `app.METHOD(PATH, HANDLER)`. METHOD è un metodo http in minuscolo. PATH è un percorso relativo sul server (può essere una stringa, o anche un'espressione regolare). HANDLER è una funzione che Express chiama quando la rotta corrisponde. I gestori assumono la forma `function(req, res) {...}`, dove req è l'oggetto request (richiesta), e res è l'oggetto response (risposta). Ad esempio, il gestore

```js
function(req, res) {
  res.send('Response String');
}
```

servirà la stringa 'Response String'.

# --instructions--

Utilizza il metodo `app.get()` per servire la stringa "Hello Express" alle richieste GET corrispondenti al percorso `/` (root). Assicurati che il codice funzioni guardando i log, quindi guarda i risultati nell'anteprima se utilizzi Replit.

**Nota:** Tutto il codice per queste lezioni dovrebbe essere aggiunto tra le poche righe di codice di partenza.

# --hints--

La tua app dovrebbe servire la stringa 'Hello Express'

```js
(getUserInput) =>
  $.get(getUserInput('url')).then(
    (data) => {
      assert.equal(
        data,
        'Hello Express',
        'Your app does not serve the text "Hello Express"'
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

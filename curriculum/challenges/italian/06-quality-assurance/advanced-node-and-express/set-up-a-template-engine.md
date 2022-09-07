---
id: 5895f700f9fc0f352b528e63
title: Imposta un template engine
challengeType: 2
forumTopicId: 301564
dashedName: set-up-a-template-engine
---

# --description--

Lavorare su queste sfide ti porterà a scrivere il tuo codice utilizzando uno dei seguenti metodi:

- Clonare <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/" target="_blank" rel="noopener noreferrer nofollow">questo repository GitHub</a> e completare queste sfide localmente.
- Usare <a href="https://replit.com/github/freeCodeCamp/boilerplate-advancednode" target="_blank" rel="noopener noreferrer nofollow">la nostra bozza di progetto su Replit</a> per completare queste sfide.
- Usare un costruttore di siti di tua scelta per completare il progetto. Assicurati di incorporare tutti i file della nostra repository GitHub.

Quando hai finito, assicurati che una demo funzionante del tuo progetto sia ospitata da qualche parte di pubblico. Quindi invia l'URL nel campo `Solution Link`.

Un modello di motore ti permette di utilizzare file di template statici (come quelli scritti in *Pug*) nella tua app. Al runtime, il template engine sostituisce le variabili in un file modello con valori effettivi che possono essere forniti dal tuo server. Quindi trasforma il template in un file HTML statico che viene inviato al client. Questo approccio facilita la progettazione di una pagina HTML e permette di visualizzare le variabili sulla pagina senza dover effettuare una chiamata API dal client.

`pug@~3.0.0` è già stato installato ed elencato come dipendenza nel file `package.json`.

Express deve sapere quale templare engine si sta utilizzando. Utilizzeremo il metodo `set` per assegnare `pug` come valore di `view engine` della proprietà: `app.set('view engine', 'pug')`

La tua pagina sarà vuota finché non esegui correttamente il rendering del file index nella directory `views/pug`.

Per renderizzare il modello `pug`, hai bisogno di usare `res.render()` nella rotta `/`. Passa il percorso del file alla directory `views/pug` come argomento del metodo. Il percorso può essere un percorso relativo (relativo a views), o un percorso assoluto, e non richiede un'estensione del file.

Se tutto è andato come previsto, la tua home page dell'app non sarà più vuota e mostrerà un messaggio che indica che il rendering del modello Pug è avvenuto con successo!

Invia la tua pagina quando pensi che sia corretto. Se stai avendo errori, puoi vedere <a href="https://gist.github.com/camperbot/3515cd676ea4dfceab4e322f59a37791" target="_blank" rel="noopener noreferrer nofollow">il progetto completato fino a questo punto</a>.

# --hints--

Pug dovrebbe essere una dipendenza.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'pug',
        'Your project should list "pug" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Il motore di visualizzazione dovrebbe essere Pug.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /('|")view engine('|"),( |)('|")pug('|")/gi,
        'Your project should set Pug as a view engine'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Utilizza il metodo ExpressJS corretto per visualizzare la pagina index dalla risposta.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/').then(
    (data) => {
      assert.match(
        data,
        /FCC Advanced Node and Express/gi,
        'You successfully rendered the Pug template!'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Pug dovrebbe funzionare.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/').then(
    (data) => {
      assert.match(
        data,
        /pug-success-message/gi,
        'Your projects home page should now be rendered by pug with the projects .pug file unaltered'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
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

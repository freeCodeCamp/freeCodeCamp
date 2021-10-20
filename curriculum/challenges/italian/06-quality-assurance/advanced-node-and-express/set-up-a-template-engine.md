---
id: 5895f700f9fc0f352b528e63
title: Imposta un template engine
challengeType: 2
forumTopicId: 301564
dashedName: set-up-a-template-engine
---

# --description--

Lavorare su queste sfide ti porterà a scrivere il tuo codice utilizzando uno dei seguenti metodi:

- Clonare [questo repository GitHub](https://github.com/freeCodeCamp/boilerplate-advancednode/) e completare queste sfide localmente.
- Usare [la nostra bozza di progetto su Replit](https://replit.com/github/freeCodeCamp/boilerplate-advancednode) per completare queste sfide.
- Usare un costruttore di siti di tua scelta per completare il progetto. Assicurati di incorporare tutti i file della nostra repository GitHub.

Quando hai finito, assicurati che una demo funzionante del tuo progetto sia ospitata da qualche parte di pubblico. Quindi invia l'URL nel campo `Solution Link`.

Un modello di motore ti permette di utilizzare file di template statici (come quelli scritti in *Pug*) nella tua app. Al runtime, il template engine sostituisce le variabili in un file modello con valori effettivi che possono essere forniti dal tuo server. Quindi trasforma il template in un file HTML statico che viene inviato al client. Questo approccio facilita la progettazione di una pagina HTML e permette di visualizzare le variabili sulla pagina senza dover effettuare una chiamata API dal client.

Aggiungi `pug@~3.0.0` come dipendenza nel tuo file `package.json`.

Express deve sapere quale templare engine si sta utilizzando. Utilizzeremo il metodo `set` per assegnare `pug` come valore di `view engine` della proprietà: `app.set('view engine', 'pug')`

La tua pagina non verrà caricata finché non esegui correttamente il rendering del file index nella directory `views/pug`.

Modifica l’argomento della dichiarazione `res.render()` nella rotta `/` in modo che sia il percorso di file per la directory `views/pug`. Il percorso può essere un percorso relativo (relativo alle viste), o un percorso assoluto, e non richiede un'estensione del file.

Se tutto è andato come previsto, la tua home page dell'app smetterà di mostrare il messaggio "`Pug template is not defined.`" e ora mostrerà un messaggio che indica che hai reso con successo il modello Pug!

Invia la tua pagina quando pensi che sia corretto. Se incontri degli errori, puoi controllare il progetto completato fino a questo punto [qui](https://gist.github.com/camperbot/3515cd676ea4dfceab4e322f59a37791).

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

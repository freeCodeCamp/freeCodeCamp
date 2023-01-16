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

Se utilizzi Replit, segui questi passaggi per impostare il progetto:

-   Inizia importando il progetto su Replit.
-   Poi vedrai una finestra `.replit`.
-   Seleziona `Use run command` e clicca sul pulsante `Done`.

Quando hai finito, assicurati che una demo funzionante del tuo progetto sia ospitata in qualche percorso pubblico. Quindi invia l'URL nel campo Link alla soluzione.

Un modello di motore ti permette di utilizzare file di template statici (come quelli scritti in *Pug*) nella tua app. Al runtime, il template engine sostituisce le variabili in un file modello con valori effettivi che possono essere forniti dal tuo server. Quindi trasforma il template in un file HTML statico che viene inviato al client. Questo approccio facilita la progettazione di una pagina HTML e permette di visualizzare le variabili sulla pagina senza dover effettuare una chiamata API dal client.

`pug@~3.0.0` è già stato installato ed elencato come dipendenza nel file `package.json`.

Express deve sapere quale template engine si sta utilizzando. Usa il metodo `set` per assegnare `pug` come valore della proprietà `view engine`:

```javascript
app.set('view engine', 'pug');
```

Dopodiché, aggiungi un altro metodo `set` che imposta la proprietà `views` della tua `app` in modo da puntare alla cartella `./views/pug`. Ciò dice a Express di presentare tutte le visualizzazioni relative a questa directory.

Infine, usa `res.render()` nella rotta per la tua home page, passando `index` come primo argomento. Questo presenterà il modello `pug`.

Se tutto è andato come previsto, l'home page dell'app non sarà più vuota. Invece, verrà visualizzato un messaggio che indica che hai presentato con successo il modello di Pug!

Invia la tua pagina quando pensi che sia tutto corretto. Se incontri degli errori, puoi vedere <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#set-up-a-template-engine-1" target="_blank" rel="noopener noreferrer nofollow">il progetto completato fino a questo punto</a>.

# --hints--

Pug dovrebbe essere una dipendenza.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'pug',
    'Your project should list "pug" as a dependency'
  );
}
```

Il motore di visualizzazione dovrebbe essere Pug.

```js
async (getUserInput) => {
  const url = new URL("/_api/app", getUserInput("url"));
  const res = await fetch(url);
  const app = await res.json();
  assert.equal(app?.settings?.['view engine'], "pug");
}
```

Dovresti impostare la proprietà `views` dell'applicazione su `./views/pug`.

```js
async (getUserInput) => {
  const url = new URL("/_api/app", getUserInput("url"));
  const res = await fetch(url);
  const app = await res.json();
  assert.equal(app?.settings?.views, "./views/pug");
}
```

Utilizza il metodo ExpressJS corretto per visualizzare la pagina index dalla risposta.

```js
async (getUserInput) => {
  const url = new URL("/", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
      assert.match(
        data,
        /FCC Advanced Node and Express/gi,
        'You successfully rendered the Pug template!'
      );
    }
```

Pug dovrebbe funzionare.

```js
async (getUserInput) => {
  const url = new URL("/", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
      assert.match(
        data,
        /pug-success-message/gi,
        'Your projects home page should now be rendered by pug with the projects .pug file unaltered'
      );
    }
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

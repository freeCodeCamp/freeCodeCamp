---
id: 587d7fb3367417b2b2512bfb
title: 'Come utilizzare package.json, il nucleo di qualsiasi progetto Node.js o pacchetto npm'
challengeType: 2
forumTopicId: 301528
dashedName: how-to-use-package-json-the-core-of-any-node-js-project-or-npm-package
---

# --description--

Lavorare su queste sfide ti porterà a scrivere il tuo codice utilizzando uno dei seguenti metodi:

- Clonare <a href="https://github.com/freeCodeCamp/boilerplate-npm/" target="_blank" rel="noopener noreferrer nofollow">questo repository GitHub</a> e completare queste sfide localmente.
- Usare <a href="https://replit.com/github/freeCodeCamp/boilerplate-npm" target="_blank" rel="noopener noreferrer nofollow">la nostra bozza di progetto su Replit</a> per completare queste sfide.
- Usare un costruttore di siti di tua scelta per completare il progetto. Assicurati di incorporare tutti i file del nostro repository GitHub.

Se utilizzi Replit, segui questi passaggi per impostare il progetto:

-   Inizia importando il progetto su Replit.
-   Poi vedrai una finestra `.replit`.
-   Seleziona `Use run command` e clicca sul pulsante `Done`.

Quando hai finito, assicurati che una demo funzionante del tuo progetto sia ospitata in qualche percorso pubblico. Quindi invia l'URL nel campo Link alla soluzione.

Il file `package.json` è il centro di qualsiasi progetto Node.js o pacchetto npm. Memorizza informazioni sul tuo progetto, in modo simile a come la sezione `head` di un documento HTML descrive il contenuto di una pagina web. Consiste di un singolo oggetto JSON dove le informazioni sono memorizzate in coppie chiave-valore. Ci sono solo due campi obbligatori: `name` e `version`, ma è buona pratica fornire ulteriori informazioni sul tuo progetto che potrebbero essere utili per futuri utenti o manutentori.

Se guardi l'albero dei file del tuo progetto, troverai il file `package.json` al livello superiore dell'albero. Questo è il file che andremo a migliorare nelle prossime due sfide.

Una delle informazioni più comuni in questo file è il campo `author`. Specifica chi ha creato il progetto e può consistere in una stringa o un oggetto con informazioni di contatto o altri dettagli. Un oggetto è consigliato per progetti più grandi, ma una semplice stringa come l'esempio seguente farà al caso nostro per questo progetto.

```json
"author": "Jane Doe",
```

# --instructions--

Aggiungi il tuo nome come `author` del progetto nel file `package.json`.

**Nota:** Ricorda che stai scrivendo JSON, quindi tutti i nomi dei campi devono usare virgolette doppie (") ed essere separati con una virgola (,).

# --hints--

`package.json` dovrebbe avere una chiave "author" valida

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.author, '"author" is missing');
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

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
- Use <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-npm/" target="_blank" rel="noopener noreferrer nofollow">our Gitpod starter project</a> to complete these challenges.
- Usare un costruttore di siti di tua scelta per completare il progetto. Assicurati di incorporare tutti i file del nostro repository GitHub.

Il file `package.json` è il centro di qualsiasi progetto Node.js o pacchetto npm. It stores information about your project. Consiste di un singolo oggetto JSON dove le informazioni sono memorizzate in coppie chiave-valore. There are only two required fields; `name` and `version`, but it’s good practice to provide additional information.

You can create the `package.json` file from the terminal using the `npm init` command. This will run a guided setup. Using `npm init` with the `-y` flag will generate the file without having it ask any questions, `npm init -y`.

Se guardi l'albero dei file del tuo progetto, troverai il file `package.json` al livello superiore dell'albero. Questo è il file che andremo a migliorare nelle prossime due sfide.

Una delle informazioni più comuni in questo file è il campo `author`. Specifica chi ha creato il progetto e può consistere in una stringa o un oggetto con informazioni di contatto o altri dettagli. Un oggetto è consigliato per progetti più grandi, ma una semplice stringa come l'esempio seguente farà al caso nostro per questo progetto.

```json
"author": "Jane Doe",
```

# --instructions--

Aggiungi il tuo nome come `author` del progetto nel file `package.json`.

**Nota:** Ricorda che stai scrivendo JSON, quindi tutti i nomi dei campi devono usare virgolette doppie (") ed essere separati con una virgola (,).

If you are using Gitpod, make sure the app is running and the preview window is open. Copy the preview window's URL and paste it into the Solution Link input below.

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

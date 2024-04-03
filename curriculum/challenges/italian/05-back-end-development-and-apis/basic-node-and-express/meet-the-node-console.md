---
id: 587d7fb0367417b2b2512bed
title: Introduzione alla console di Node
challengeType: 2
forumTopicId: 301515
dashedName: meet-the-node-console
---

# --description--

Lavorare su queste sfide ti porterà a scrivere il tuo codice utilizzando uno dei seguenti metodi:

- Clonare <a href="https://github.com/freeCodeCamp/boilerplate-express/" target="_blank" rel="noopener noreferrer nofollow">questo repository GitHub</a> e completare queste sfide localmente.
- Use <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-express/" target="_blank" rel="noopener noreferrer nofollow">our Gitpod starter project</a> to complete these challenges.
- Usare un costruttore di siti di tua scelta per completare il progetto. Assicurati di incorporare tutti i file del nostro repository GitHub.

Durante il processo di sviluppo, è importante essere in grado di controllare cosa sta succedendo nel tuo codice.

Node è solo un ambiente JavaScript. Come per il JavaScript lato client, puoi usare la console per visualizzare utili informazioni di debug. Sulla tua macchina locale, vedrai l'output della console in un terminale. On Gitpod, a terminal is open at the bottom of the editor by default.

Ti consigliamo di mantenere il terminale aperto mentre lavori a queste sfide. Leggendo l'output nel terminale, potrai vedere eventuali errori.

The server must be restarted after making changes to its files.

You can stop the server from the terminal using `Ctrl + C` and start it using Node directly (`node mainEntryFile.js`) or using a run script in the `package.json` file with `npm run`.

For example, the `"start": "node server.js"` script would be run from the terminal using `npm run start`.

To implement server auto restarting on file save Node provides the `--watch` flag you can add to your start script `"start": "node --watch server.js"` or you can install an npm package like `nodemon`. We will leave this to you as an exercise.

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

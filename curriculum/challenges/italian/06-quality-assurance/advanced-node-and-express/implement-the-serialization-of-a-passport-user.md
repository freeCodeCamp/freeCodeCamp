---
id: 5895f70cf9fc0f352b528e67
title: Implementare la serializzazione di un utente Passport
challengeType: 2
forumTopicId: 301556
dashedName: implement-the-serialization-of-a-passport-user
---

# --description--

Per ora non stiamo caricando un oggetto utente reale visto che non abbiamo creato il database. Questo può essere fatto in molti modi diversi, ma per il nostro progetto ci connetteremo al database una volta che avremo avviato il server e ottenuto una connessione persistente per tutto il ciclo di vita dell'app. Per fare questo, aggiungi la stringa di connessione del database (per esempio: `mongodb+srv://:@cluster0-jvwxi.mongodb.net/?retryWrites=true&w=majority`) alla variabile ambientale `MONGO_URI`. Questo è usato nel file `connection.js`.

*Se stai avendo problemi a impostare un database gratuito con MongoDB Atlas, vedi questo <a href="https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/" target="_blank" rel="noopener noreferrer nofollow">tutorial</a>.*

Ora vogliamo connetterci al nostro database e metterci in ascolto delle richieste. Lo scopo è di non permettere richieste prima che il database sia connesso o nel caso ci sia un errore del database. Per farlo, dovrai includere la tua serializzazione e le rotte della tua app nel seguente codice:

```js
myDB(async client => {
  const myDataBase = await client.db('database').collection('users');

  // Be sure to change the title
  app.route('/').get((req, res) => {
    //Change the response to render the Pug template
    res.render('pug', {
      title: 'Connected to Database',
      message: 'Please login'
    });
  });

  // Serialization and deserialization here...

  // Be sure to add this...
}).catch(e => {
  app.route('/').get((req, res) => {
    res.render('pug', { title: e, message: 'Unable to login' });
  });
});
// app.listen out here...
```

Assicurati di decommentare il codice di `myDataBase` in `deserializeUser`, e modifica il tuo `done(null, null)` per includere il `doc`.

Invia la tua pagina quando pensi di averlo fatto correttamente. Se stai avendo errori, puoi vedere <a href="https://gist.github.com/camperbot/175f2f585a2d8034044c7e8857d5add7" target="_blank" rel="noopener noreferrer nofollow">il progetto completato fino a questo punto</a>.

# --hints--

La connessione al database dovrebbe essere presente.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/').then(
    (data) => {
      assert.match(
        data,
        /Connected to Database/gi,
        'You successfully connected to the database!'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

La deserializzazione dovrebbe ora usare correttamente il DB e `done(null, null)` dovrebbe essere invocato con il `doc`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /null,\s*doc/gi,
        'The callback in deserializeUser of (null, null) should be altered to (null, doc)'
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

---
id: 5895f70cf9fc0f352b528e67
title: Implementare la serializzazione di un utente Passport
challengeType: 2
forumTopicId: 301556
dashedName: implement-the-serialization-of-a-passport-user
---

# --description--

Non stai caricando un vero e proprio oggetto utente poiché il database non è configurato. Connettiti al database una volta, quando avvii il server, e mantieni una connessione continua per l'intero ciclo di vita dell'app. Per fare questo, aggiungi la stringa di connessione del database (per esempio: `mongodb+srv://<username>:<password>@cluster0-jvwxi.mongodb.net/?retryWrites=true&w=majority`) alla variabile di ambiente `MONGO_URI`. Questo è usato nel file `connection.js`.

*Se stai avendo problemi a impostare un database gratuito con MongoDB Atlas, vedi questo <a href="https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/" target="_blank" rel="noopener noreferrer nofollow">tutorial</a>.*

Ora vuoi connetterti al tuo database e metterti in ascolto delle richieste. Lo scopo è di non permettere richieste prima che il database sia connesso o nel caso ci sia un errore del database. Per farlo, includi la tua serializzazione e le rotte della app nel seguente codice:

```javascript
myDB(async client => {
  const myDataBase = await client.db('database').collection('users');

  // Be sure to change the title
  app.route('/').get((req, res) => {
    // Change the response to render the Pug template
    res.render('index', {
      title: 'Connected to Database',
      message: 'Please login'
    });
  });

  // Serialization and deserialization here...

  // Be sure to add this...
}).catch(e => {
  app.route('/').get((req, res) => {
    res.render('index', { title: e, message: 'Unable to connect to database' });
  });
});
// app.listen out here...
```

Assicurati di decommentare il codice di `myDataBase` in `deserializeUser`, e modifica il tuo `done(null, null)` per includere il `doc`.

Invia la tua pagina quando pensi di averlo fatto correttamente. Se incontri degli errori, puoi vedere <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#implement-the-serialization-of-a-passport-user-5" target="_blank" rel="noopener noreferrer nofollow">il progetto completato fino a questo punto</a>.

# --hints--

La connessione al database dovrebbe essere presente.

```js
async (getUserInput) => {
  const url = new URL("/", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /Connected to Database/gi,
    'You successfully connected to the database!'
  );
}
```

La deserializzazione dovrebbe ora usare correttamente il DB e `done(null, null)` dovrebbe essere invocato con il `doc`.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /null,\s*doc/gi,
    'The callback in deserializeUser of (null, null) should be altered to (null, doc)'
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

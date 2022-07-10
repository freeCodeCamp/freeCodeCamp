---
id: 5895f70cf9fc0f352b528e66
title: Serializzazione di un oggetto utente
challengeType: 2
forumTopicId: 301563
dashedName: serialization-of-a-user-object
---

# --description--

La serializzazione e la deserializzazione sono concetti importanti per quanto riguarda l'autenticazione. Serializzare un oggetto significa convertire il suo contenuto in una piccola *chiave* (key) che può essere deserializzata nell'oggetto originale. Questo ci permette di sapere chi ha comunicato con il server senza dover inviare i dati di autenticazione, come il nome utente e la password, ad ogni richiesta di una nuova pagina.

Per configurarlo correttamente, dobbiamo avere una funzione di serializzazione e una funzione di deserializzazione. In Passport, li creiamo con `passport.serializeUser( OURFUNCTION )` e `passport.deserializeUser( OURFUNCTION )`

`serializeUser` è chiamato con 2 argomenti, l'oggetto utente completo e una callback utilizzata da passport. Una chiave univoca per identificare quell'utente deve essere restituita nella callback, quello più semplice da usare è l'`_id` dell'utente nell'oggetto. Esso dovrebbe essere unico dato che è stato generato da MongoDB. Allo stesso modo, anche `deserializeUser` viene chiamato con quella chiave e una funzione callback per passport, ma questa volta dobbiamo prendere quella chiave e restituire l'intero oggetto utente alla callback. Per creare una query di ricerca per un `_id` Mongo, dovrai creare `const ObjectID = require('mongodb').ObjectID;`, e poi per usarlo invocare `new ObjectID(THE_ID)`. Assicurati di aggiungere `mongodb@~3.6.0` come dipendenza. Puoi vederlo negli esempi qui sotto:

```js
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  myDataBase.findOne({ _id: new ObjectID(id) }, (err, doc) => {
    done(null, null);
  });
});
```

NOTA: Questo `deserializeUser` genererà un errore fino a quando non imposteremo il DB nel passo successivo, quindi per ora commenta l'intero blocco e chiama `done(null, null)` nella funzione `deserializeUser`.

Invia la tua pagina quando pensi di averlo fatto correttamente. Se stai avendo errori, puoi vedere <a href="https://gist.github.com/camperbot/7068a0d09e61ec7424572b366751f048" target="_blank" rel="noopener noreferrer nofollow">il progetto completato fino a questo punto</a>.

# --hints--

Dovresti serializzare correttamente la funzione user.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /passport.serializeUser/gi,
        'You should have created your passport.serializeUser function'
      );
      assert.match(
        data,
        /null,\s*user._id/gi,
        'There should be a callback in your serializeUser with (null, user._id)'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Dovresti deserializzare correttamente la funzione user.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /passport.deserializeUser/gi,
        'You should have created your passport.deserializeUser function'
      );
      assert.match(
        data,
        /null,\s*null/gi,
        'There should be a callback in your deserializeUser with (null, null) for now'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

MongoDB dovrebbe essere una dipendenza.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'mongodb',
        'Your project should list "mongodb" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Mongodb dovrebbe essere richiesto correttamente, includendo l'ObjectId.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')mongodb\1/gi,
        'You should have required mongodb'
      );
      assert.match(
        data,
        /new ObjectID.*id/gi,
        'Even though the block is commented out, you should use new ObjectID(id) for when we add the database'
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

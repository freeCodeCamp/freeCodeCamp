---
id: 587d7fb6367417b2b2512c06
title: Installare e configurare Mongoose
challengeType: 2
forumTopicId: 301540
dashedName: install-and-set-up-mongoose
---

# --description--

Lavorare su queste sfide ti porterà a scrivere il tuo codice utilizzando uno dei seguenti metodi:

- Clonare [questo repository GitHub](https://github.com/freeCodeCamp/boilerplate-mongomongoose/) e completare queste sfide localmente.
- Usare [il nostro progetto di avvio Replit](https://replit.com/github/freeCodeCamp/boilerplate-mongomongoose) per completare queste sfide.
- Usa un costruttore di siti a tua scelta per completare il progetto. Assicurati di incorporare tutti i file dal nostro repository GitHub.

Quando hai finito, assicurati che una demo funzionante del tuo progetto sia ospitata pubblicamente da qualche parte. Quindi invia l'URL nel campo `Solution Link`.

In questa sfida, imposterai un database MongoDB Atlas e importerai i pacchetti necessari per connetterti ad esso.

Segui <a href='https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/' rel='noopener noreferrer' target='_blank'>questo tutorial</a> per impostare un database ospitato su MongoDB Atlas.

# --instructions--

Aggiungi `mongodb` e `mongoose` al `package.json` del progetto. Poi, richiedi mongoose come `mongoose` in `myApp.js`. Crea un file `.env` e aggiungi una variabile `MONGO_URI` ad esso. Il suo valore dovrebbe essere l'URI del database MongoDB Atlas. Assicurati di racchiudere l'URI tra virgolette singole o doppie, e ricorda che non puoi usare spazi attorno al segno `=` nelle variabili d'ambiente. Ad esempio, `MONGO_URI='VALUE'`. Quando hai finito, connettiti al database usando la seguente sintassi:

```js
mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true });
```

# --hints--

la dipendenza "mongodb" dovrebbe essere specificata in package.json

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/file/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(packJson.dependencies, 'mongodb');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

la dipendenza "mongoose" dovrebbe essere specificata in package.json

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/file/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(packJson.dependencies, 'mongoose');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

"mongoose" dovrebbe essere connesso a un database

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/is-mongoose-ok').then(
    (data) => {
      assert.isTrue(data.isMongooseOk, 'mongoose is not connected');
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

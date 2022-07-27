---
id: 587d7fb6367417b2b2512c06
title: Installare e configurare Mongoose
challengeType: 2
forumTopicId: 301540
dashedName: install-and-set-up-mongoose
---

# --description--

Lavorare su queste sfide ti porterà a scrivere il tuo codice utilizzando uno dei seguenti metodi:

- Clonare <a href="https://github.com/freeCodeCamp/boilerplate-mongomongoose/" target="_blank" rel="noopener noreferrer nofollow">questo repository GitHub</a> e completare queste sfide localmente.
- Usare <a href="https://replit.com/github/freeCodeCamp/boilerplate-mongomongoose" target="_blank" rel="noopener noreferrer nofollow">la nostra bozza di progetto su Replit</a> per completare queste sfide.
- Usare un costruttore di siti di tua scelta per completare il progetto. Assicurati di incorporare tutti i file del nostro repository GitHub.

Quando hai finito, assicurati che una demo funzionante del tuo progetto sia ospitata in qualche percorso pubblico. Quindi invia l'URL nel campo `Solution Link`.

In questa sfida, imposterai un database MongoDB Atlas e importerai i pacchetti necessari per connetterti ad esso.

Segui <a href='https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/' target="_blank" rel="noopener noreferrer nofollow">questo tutorial</a> per impostare un database ospitato su MongoDB Atlas.

# --instructions--

`mongodb@~3.6.0` e `mongoose@~5.4.0` sono stati aggiunti al file `package.json` del tuo progetto. Come prima cosa, richiedi mongoose come `mongoose` in `myApp.js`. Poi, crea un file `.env` e aggiungi una variabile `MONGO_URI` ad esso. Il suo valore dovrebbe essere l'URI del database MongoDB Atlas. Assicurati di racchiudere l'URI tra virgolette singole o doppie, e ricorda che non puoi usare spazi attorno al segno `=` nelle variabili d'ambiente. Ad esempio, `MONGO_URI='VALUE'`.

**Nota:** Se stai usando Replit, non puoi creare un file `.env`. Utilizza invece la scheda <dfn>SECRETS</dfn> integrata per aggiungere la variabile. <em>Non</em> racchiudere i valori in virgolette quando usi la scheda <em>SECRETS</em>.

Quando hai finito, connettiti al database usando la seguente sintassi:

```js
mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true });
```

# --hints--

La dipendenza "mongodb version ~3.6.0" dovrebbe essere in package.json

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/file/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(packJson.dependencies, 'mongodb')
      assert.match(
        packJson.dependencies.mongodb,
        /^\~3\.6\.0/,
        'Wrong version of "mongodb". It should be ~3.6.0'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

La dipendenza "mongoose version ~5.4.0" dovrebbe essere in package.json

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/file/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(packJson.dependencies, 'mongoose');
      assert.match(
        packJson.dependencies.mongoose,
        /^\~5\.4\.0/,
        'Wrong version of "mongoose". It should be ~5.4.0'
      );
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

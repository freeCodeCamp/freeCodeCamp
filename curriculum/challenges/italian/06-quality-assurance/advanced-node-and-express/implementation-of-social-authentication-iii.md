---
id: 589a8eb3f9fc0f352b528e72
title: Implementazione dell'autenticazione con i social III
challengeType: 2
forumTopicId: 301558
dashedName: implementation-of-social-authentication-iii
---

# --description--

La parte finale della strategia è gestire il profilo restituito da GitHub. Dobbiamo caricare l'oggetto del database relativo all'uutente se esiste, o crearne uno se non esiste, e popolare i campi dal profilo, quindi restituire l'oggetto dell'utente. GitHub ci fornisce un *id* unico per ogni profilo che possiamo usare per cercare e serializzare l'utente (già implementato). Di seguito è riportato un esempio di implementazione che puoi usare nel tuo progetto: va all'interno della funzione che è il secondo argomento per la nuova strategia, proprio sotto all'attuale posizione di `console.log(profile);`:

```js
myDataBase.findOneAndUpdate(
  { id: profile.id },
  {
    $setOnInsert: {
      id: profile.id,
      name: profile.displayName || 'John Doe',
      photo: profile.photos[0].value || '',
      email: Array.isArray(profile.emails)
        ? profile.emails[0].value
        : 'No public email',
      created_on: new Date(),
      provider: profile.provider || ''
    },
    $set: {
      last_login: new Date()
    },
    $inc: {
      login_count: 1
    }
  },
  { upsert: true, new: true },
  (err, doc) => {
    return cb(null, doc.value);
  }
);
```

`findOneAndUpdate` ti permette di cercare un oggetto e aggiornarlo. Se l'oggetto non esiste, verrà inserito e reso disponibile alla funzione di callback. In questo esempio, abbiamo sempre impostato `last_login`, incrementato il `login_count` di `1`, e popolato la maggior parte dei campi solo quando viene inserito un nuovo oggetto (nuovo utente). Nota l'uso dei valori predefiniti. A volte un profilo restituito non avrà tutte le informazioni compilate o l'utente lo manterrà privato. Dovrai gestire questo caso per evitare un errore.

Ora dovresti essere in grado di accedere alla tua app, provala!

Invia la tua pagina quando pensi di averlo fatto correttamente. Se incontri degli errori, puoi controllare il progetto completato fino a questo punto [qui](https://gist.github.com/camperbot/183e968f0e01d81dde015d45ba9d2745).

# --hints--

La configurazione della strategia GitHub dovrebbe essere completa.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/auth.js').then(
    (data) => {
      assert.match(
        data,
        /GitHubStrategy[^]*myDataBase/gi,
        'Strategy should use now use the database to search for the user'
      );
      assert.match(
        data,
        /GitHubStrategy[^]*return cb/gi,
        'Strategy should return the callback function "cb"'
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

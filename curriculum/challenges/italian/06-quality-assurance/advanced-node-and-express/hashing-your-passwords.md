---
id: 58a25c98f9fc0f352b528e7f
title: Hashing delle password
challengeType: 2
forumTopicId: 301553
dashedName: hashing-your-passwords
---

# --description--

Tornando alla sezione sulla sicurezza delle informazioni, potresti ricordare che memorizzare le password non è *mai* una buona cosa. Ora è tempo di implementare BCrypt per risolvere questo problema.

Aggiungi `bcrypt@~5.0.0` come dipendenza, e richiedilo nel tuo server. Dovrai gestire l'hashing in 2 aree chiave: dove gestisci la registrazione/salvataggio di un nuovo account, e quando controlli per vedere se una password è corretta al momento dell'accesso.

Attualmente sul nostro percorso di registrazione, inserisci la password di un utente nel database in questo modo: `password: req.body.password`. Un modo semplice per implementare il salvataggio di un hash invece è quello di aggiungere quanto segue prima della logica del database `const hash = bcrypt.hashSync(req.body.password, 12);`, e sostituire `req.body.password` nel database salvando solo `password: hash`.

Infine, nella nostra strategia di autenticazione, controlliamo quanto segue nel nostro codice prima di completare il processo: `if (password !== user.password) { return done(null, false); }`. Dopo aver apportato le modifiche precedenti, `user.password` è diventato un hash. Prima di apportare una modifica al codice esistente, nota come la dichiarazione verifica se la password è **non** uguale, quindi restituisce not-authenticated. Con questo in mente, il codice potrebbe apparire come segue in modo da confrontare correttamente la password inserita con l'hash:

```js
if (!bcrypt.compareSync(password, user.password)) { 
  return done(null, false);
}
```

Questo è tutto quello che serve per implementare una delle caratteristiche di sicurezza più importanti quando si devono memorizzare le password!

Invia la tua pagina quando pensi di averlo fatto correttamente. Se incontri degli errori, puoi vedere <a href="https://gist.github.com/camperbot/dc16cca09daea4d4151a9c36a1fab564" target="_blank" rel="noopener noreferrer nofollow">il progetto completato fino a questo punto</a>.

# --hints--

BCrypt dovrebbe essere una dipendenza.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'bcrypt',
        'Your project should list "bcrypt" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

BCrypt dovrebbe essere correttamente richiesto e implementato.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')bcrypt\1/gi,
        'You should have required bcrypt'
      );
      assert.match(
        data,
        /bcrypt.hashSync/gi,
        'You should use hash the password in the registration'
      );
      assert.match(
        data,
        /bcrypt.compareSync/gi,
        'You should compare the password to the hash in your strategy'
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

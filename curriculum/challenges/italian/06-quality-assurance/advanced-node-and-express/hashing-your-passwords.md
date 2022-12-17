---
id: 58a25c98f9fc0f352b528e7f
title: Hashing delle password
challengeType: 2
forumTopicId: 301553
dashedName: hashing-your-passwords
---

# --description--

Tornando alla sezione sulla sicurezza delle informazioni, potresti ricordare che memorizzare le password non è *mai* una buona cosa. Ora è tempo di implementare BCrypt per risolvere questo problema.

`bcrypt@~5.0.0` è già stato aggiunto come dipendenza, quindi richiedilo nel tuo server. Dovrai gestire l'hashing in 2 aree chiave: dove gestisci la registrazione/salvataggio di un nuovo account, e quando controlli per vedere se una password è corretta al momento dell'accesso.

Attualmente sul tuo percorso di registrazione, inserisci la password di un utente come testo non crittografato nel database in questo modo: `password: req.body.password`. Esegui l'hashing della password aggiungendo quanto segue prima della logica del database `const hash = bcrypt.hashSync(req.body.password, 12);`, e sostituisci `req.body.password` nel database salvando solo `password: hash`.

Nella tua strategia di autenticazione, controlla quanto segue nel codice prima di completare il processo: `if (password !== user.password) return done(null, false);`. Dopo aver apportato le modifiche precedenti, `user.password` è diventato un hash. Prima di apportare una modifica al codice esistente, nota come la dichiarazione verifica se la password è **non** uguale, quindi restituisce not-authenticated. Con questo in mente, cambia il codice in modo che appaia come segue per confrontare correttamente la password inserita con l'hash:

```js
if (!bcrypt.compareSync(password, user.password)) { 
  return done(null, false);
}
```

Questo è tutto quello che serve per implementare una delle caratteristiche di sicurezza più importanti quando si devono memorizzare le password.

Invia la tua pagina quando pensi di averlo fatto correttamente. Se incontri degli errori, puoi vedere <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#hashing-your-passwords-1" target="_blank" rel="noopener noreferrer nofollow">il progetto completato fino a questo punto</a>.

# --hints--

BCrypt dovrebbe essere una dipendenza.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json()
  assert.property(
    packJson.dependencies,
    'bcrypt',
    'Your project should list "bcrypt" as a dependency'
  );
}
```

BCrypt dovrebbe essere correttamente richiesto e implementato.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
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

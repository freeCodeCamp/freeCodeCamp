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

Currently on your registration route, you insert a user's plaintext password into the database like so: `password: req.body.password`. Hash the passwords instead by adding the following before your database logic: `const hash = bcrypt.hashSync(req.body.password, 12);`, and replacing the `req.body.password` in the database saving with just `password: hash`.

On your authentication strategy, you check for the following in your code before completing the process: `if (password !== user.password) return done(null, false);`. Dopo aver apportato le modifiche precedenti, `user.password` è diventato un hash. Prima di apportare una modifica al codice esistente, nota come la dichiarazione verifica se la password è **non** uguale, quindi restituisce not-authenticated. With this in mind, change that code to look as follows to properly check the password entered against the hash:

```js
if (!bcrypt.compareSync(password, user.password)) { 
  return done(null, false);
}
```

That is all it takes to implement one of the most important security features when you have to store passwords.

Invia la tua pagina quando pensi di averlo fatto correttamente. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#hashing-your-passwords-1" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

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

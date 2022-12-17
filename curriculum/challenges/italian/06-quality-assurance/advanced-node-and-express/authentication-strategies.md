---
id: 5895f70df9fc0f352b528e68
title: Strategie di autenticazione
challengeType: 2
forumTopicId: 301547
dashedName: authentication-strategies
---

# --description--

Una strategia è un modo di autenticare un utente. Puoi utilizzare una strategia per permettere agli utenti di autenticarsi basandosi su informazioni salvate localmente (se li si fa prima registrare/iscrivere), o da una varietà di fornitori come Google o GitHub. Per questo progetto, usiamo il middleware Passport. Passport fornisce un set di strategie completo che supporta l'autenticazione usando username e password, GitHub, Google, e altri.

`passport-local@~1.0.0` è già stato aggiunto come dipendenza. Aggiungilo al tuo server come segue:

```javascript
const LocalStrategy = require('passport-local');
```

Comunica a passport di **usare** un oggetto `LocalStrategy` istanziato con alcune impostazioni definite. Assicurati che questo (come tutto da questo punto in poi) sia compreso all'interno della connessione al database dato che si basa su di essa!:

```javascript
passport.use(new LocalStrategy((username, password, done) => {
  myDataBase.findOne({ username: username }, (err, user) => {
    console.log(`User ${username} attempted to log in.`);
    if (err) return done(err);
    if (!user) return done(null, false);
    if (password !== user.password) return done(null, false);
    return done(null, user);
  });
}));
```

Questo definisce il processo da utilizzare quando provi ad autenticare qualcuno localmente. In primo luogo, cerca di trovare un utente nel tuo database con il nome utente inserito. Poi, controlla che la password corrisponda. Infine, se non sono comparsi errori che hai controllato (ad es. una password errata), l'oggetto `user` viene restituito e l'utente viene autenticato.

Molte strategie sono definite utilizzando impostazioni diverse. In generale, è facile configurarlo in base al README nel repository della strategia. Un buon esempio di questo è la strategia GitHub, dove non devi preoccuparti di nome utente e password dal momento che l'utente sarà indirizzato alla pagina di autenticazione di GitHub per autenticarsi. Una volta che è loggato e accetta, GitHub gli restituisce il suo profilo da utilizzare.

Nel passo successivo, imposterai il modo in cui chiamare effettivamente la strategia di autenticazione per convalidare un utente sulla base dei dati del modulo.

Invia la tua pagina quando pensi di averlo fatto correttamente. Se incontri degli errori, puoi vedere <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#authentication-strategies-6" target="_blank" rel="noopener noreferrer nofollow">il progetto completato fino a questo punto</a>.

# --hints--

Passport-local dovrebbe essere una dipendenza.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'passport-local',
    'Your project should list "passport-local " as a dependency'
  );
}
```

Passport-local dovrebbe essere correttamente richiesto e configurato.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require.*("|')passport-local("|')/,
    'You should have required passport-local'
  );
  assert.match(
    data,
    /new LocalStrategy/,
    'You should have told passport to use a new strategy'
  );
  assert.match(
    data,
    /findOne/,
    'Your new local strategy should use the findOne query to find a username based on the inputs'
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

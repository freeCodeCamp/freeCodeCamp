---
id: 5895f70df9fc0f352b528e68
title: Strategie di autenticazione
challengeType: 2
forumTopicId: 301547
dashedName: authentication-strategies
---

# --description--

Una strategia è un modo di autenticare un utente. Puoi utilizzare una strategia per permettere agli utenti di autenticarsi basandosi su informazioni salvate localmente (se li si fa prima registrare/iscrivere), o da una varietà di fornitori come Google o GitHub. Per questo progetto, usiamo il middleware Passport. Passport fornisce un set di strategie completo che supporta l'autenticazione usando username e password, GitHub, Google, e altri.

`passport-local@~1.0.0` è già stato aggiunto come dipendenza, quindi aggiungilo al tuo server come segue: `const LocalStrategy = require('passport-local');`

Ora, dovrai dire a passport di **usare** un oggetto LocalStrategy istanziato con alcune impostazioni definite. Assicurati che questo (come tutto da questo punto in poi) sia compreso all'interno della connessione al database dato che si basa su di essa!

```js
passport.use(new LocalStrategy(
  function(username, password, done) {
    myDataBase.findOne({ username: username }, function (err, user) {
      console.log('User '+ username +' attempted to log in.');
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (password !== user.password) { return done(null, false); }
      return done(null, user);
    });
  }
));
```

Questo definisce il processo da utilizzare quando proviamo ad autenticare qualcuno localmente. Innanzitutto, cerca di trovare un utente nel nostro database con il nome utente inserito, poi controlla che la password corrisponda ed infine, se non spunta nessun errore da ciò che abbiamo controllato, come una password sbagliata, l'oggetto `user` viene restituito ed è autenticato.

Molte strategie vengono organizzate con impostazioni differenti, ma in genere sono facile da impostare basandosi sul README nel repository della strategia. Un buon esempio di questo è la strategia GitHub, dove non dobbiamo preoccuparci di nome utente e password dal momento che l'utente sarà indirizzato alla pagina di autenticazione di GitHub per autenticarsi. Una volta che sono loggati e accettano, GitHub ci restituisce il loro profilo da utilizzare.

Nel passo successivo, imposteremo il modo in cui chiamare effettivamente la strategia di autenticazione per convalidare un utente sulla base dei dati del modulo!

Invia la tua pagina quando pensi di averlo fatto correttamente. Se stai avendo errori, puoi vedere <a href="https://gist.github.com/camperbot/53b495c02b92adeee0aa1bd3f3be8a4b" target="_blank" rel="noopener noreferrer nofollow">il progetto completato fino a questo punto</a>.

# --hints--

Passport-local dovrebbe essere una dipendenza.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'passport-local',
        'Your project should list "passport-local " as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Passport-local dovrebbe essere correttamente richiesta e configurata.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')passport-local("|')/gi,
        'You should have required passport-local'
      );
      assert.match(
        data,
        /new LocalStrategy/gi,
        'You should have told passport to use a new strategy'
      );
      assert.match(
        data,
        /findOne/gi,
        'Your new local strategy should use the findOne query to find a username based on the inputs'
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

---
id: 589a69f5f9fc0f352b528e71
title: Implementazione dell'autenticazione con i social II
challengeType: 2
forumTopicId: 301557
dashedName: implementation-of-social-authentication-ii
---

# --description--

L'ultima parte della configurazione dell'autenticazione con GitHub è creare la strategia stessa. `passport-github@~1.1.0` è già stato aggiunto come dipendenza, quindi richiedilo nel file `auth.js` come `GithubStrategy` in questo modo: `const GitHubStrategy = require('passport-github').Strategy;`. Non dimenticare di richiedere e configurare `dotenv` per utilizzare le variabili d'ambiente.

Per impostare la strategia GitHub, devi dire al Passport di utilizzare un `GitHubStrategy` istantanziato, che accetta 2 argomenti: un oggetto (contenente `clientID`, `clientSecret`, e `callbackURL`) e una funzione da chiamare quando un utente viene autenticato con successo, che determinerà se l'utente è nuovo e quali campi salvare inizialmente nell'oggetto database dell'utente. Questo è comune in molte strategie, ma alcune possono richiedere ulteriori informazioni, come indicato nel README di quella specifica strategia GitHub. Ad esempio, Google richiede anche un *ambito* che determina il tipo di informazioni che la tua richiesta sta chiedendo di ricevere e chiede all'utente di approvare tale accesso.

La strategia che stiamo usando autentica gli utenti usando un account GitHub e dei token OAuth 2.0. L'ID del client e il segreto ottenuto durante la creazione di un'applicazione vengono forniti come opzioni quando crei la strategia. La strategia inoltre richiede un callback `verify`, che riceve un token di accesso e un token opzionale di refresh, come anche un `profile` che contiene il profilo dell'utente di GitHub autenticato. Il callback `verify` deve chiamare `cb` fornendo un utente per completare l'autenticazione.

Ecco come la tua nuova strategia dovrebbe essere a questo punto:

```js
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: /*INSERT CALLBACK URL ENTERED INTO GITHUB HERE*/
},
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    //Database logic here with callback containing our user object
  }
));
```

La tua autenticazione non avrà ancora successo, anzi lancerà un errore senza la logica del database e la chiamata, ma se provi dovrebbe registrare il tuo profilo GitHub sulla tua console!

Invia la tua pagina quando pensi di averlo fatto correttamente. Se stai avendo errori, puoi vedere <a href="https://gist.github.com/camperbot/ff3a1166684c1b184709ac0bee30dee6" target="_blank" rel="noopener noreferrer nofollow">il progetto completato fino a questo punto</a>.

# --hints--

passport-github deve essere aggiunto come dipendenza.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'passport-github',
        'Your project should list "passport-github" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

passaport-github deve essere richiesto.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/auth.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')passport-github("|')/gi,
        'You should have required passport-github'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

La strategia di GitHub dovrebbe essere impostata correttamente finora.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/auth.js').then(
    (data) => {
      assert.match(
        data,
        /passport\.use.*new GitHubStrategy/gis,
        'Passport should use a new GitHubStrategy'
      );
      assert.match(
        data,
        /callbackURL:\s*("|').*("|')/gi,
        'You should have a callbackURL'
      );
      assert.match(
        data,
        /process\.env(\.GITHUB_CLIENT_SECRET|\[(?<q>"|')GITHUB_CLIENT_SECRET\k<q>\])/g,
        'You should use process.env.GITHUB_CLIENT_SECRET'
      );
      assert.match(
        data,
        /process\.env(\.GITHUB_CLIENT_ID|\[(?<q>"|')GITHUB_CLIENT_ID\k<q>\])/g,
        'You should use process.env.GITHUB_CLIENT_ID'
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

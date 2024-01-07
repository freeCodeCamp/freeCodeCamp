---
id: 5895f70cf9fc0f352b528e65
title: Configurare Passport
challengeType: 2
forumTopicId: 301565
dashedName: set-up-passport
---

# --description--

È ora di configurare *Passport* così da permettere finalmente a un utente di registrarsi o accedere a un account. In aggiunta a Passport, userai Express-session per gestire le sessioni. Express-session ha un sacco di funzionalità avanzate che puoi usare ma per ora userai solo le basi. Usare questo middleware salva l'id di sessione come cookie nel client e permette di accedere ai dati di sessione usando quell'id sul server. In questo modo, mantieni le informazioni personali dell'account al di fuori del cookie usato dal client per comunicare al tuo server di essere autenticato e tieni solo la *key* per accedere ai dati immagazzinati nel server.

`passport@~0.4.1` e `express-session@~1.17.1` sono già installati e sono entrambi elencati come dipendenze nel tuo file `package.json`.

Dovrai configurare le impostazioni della sessione e inizializzare Passport. Per prima cosa, crea le variabili `session` e `passport` per richiedere rispettivamente `express-session` e `passport`.

Poi, imposta la tua app Express in modo che utilizzi la sessione definendo le seguenti opzioni:

```javascript
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));
```

Assicurati di aggiungere `SESSION_SECRET` al tuo file `.env` e dagli un valore casuale. Viene usato per calcolare l'hash utilizzato per crittografare il tuo cookie!

Dopo aver fatto tutto ciò, di' alla tua app express di **usare** `passport.initialize()` e `passport.session()`.

Invia la tua pagina quando pensi che sia tutto corretto. Se incontri degli errori, puoi vedere <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#set-up-passport-3" target="_blank" rel="noopener noreferrer nofollow">il progetto completato fino a questo punto</a>.

# --hints--

Passaport e Express-session dovrebbero essere dipendenze.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'passport',
    'Your project should list "passport" as a dependency'
  );
  assert.property(
    packJson.dependencies,
    'express-session',
    'Your project should list "express-session" as a dependency'
  );
}
```

Le dipendenze dovrebbero essere correttamente richieste.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require.*("|')passport("|')/,
    'You should have required passport'
  );
  assert.match(
    data,
    /require.*("|')express-session("|')/,
    'You should have required express-session'
  );
}
```

Express app dovrebbe utilizzare nuove dipendenze.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(data, /passport\.initialize/, 'Your express app should use "passport.initialize()"');
  assert.match(data, /passport\.session/, 'Your express app should use "passport.session()"');
}
```

La sessione e il segreto di sessione dovrebbero essere impostate correttamente.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /secret *:\s*process\.env(\.SESSION_SECRET|\[(?<q>"|')SESSION_SECRET\k<q>\])/,
    'Your express app should have express-session set up with your secret as process.env.SESSION_SECRET'
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

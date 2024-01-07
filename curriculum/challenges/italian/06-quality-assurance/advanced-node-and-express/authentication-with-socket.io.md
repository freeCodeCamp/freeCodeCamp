---
id: 589fc831f9fc0f352b528e77
title: Autenticazione con Socket.IO
challengeType: 2
forumTopicId: 301548
dashedName: authentication-with-socket-io
---

# --description--

Al momento, non puoi determinare chi sia connesso alla tua socket web. `req.user` contiene l'oggetto utente, ma solo quando l'utente interagisce con il server web. Con le web sockets non hai `req` (richiesta) e di conseguenza, nessun dato utente. Un modo per risolvere il problema di sapere chi sia connesso alla tua web socket è di analizzare e decodificare il cookie che contiene la sessione passport, per poi deserializzarlo e ottenere l'oggetto utente. Fortunatamente, c'è un pacchetto su NPM fatto per questo, che trasforma un compito una volta complesso, in qualcosa di semplice!

`passport.socketio@~3.7.0`, `connect-mongo@~3.2.0` e `cookie-parser@~1.4.5` sono già stati aggiunti come dipendenze. Richiedili rispettivamente come `passportSocketIo`, `MongoStore` e `cookieParser`. Inoltre, dobbiamo inizializzare un nuovo archivio di memoria da `express-session` che abbiamo richiesto in precedenza. Dovrebbe assomigliare a questo:

```js
const MongoStore = require('connect-mongo')(session);
const URI = process.env.MONGO_URI;
const store = new MongoStore({ url: URI });
```

Ora dobbiamo solo dire a Socket.IO di utilizzarlo e impostare le opzioni. Assicurati che venga aggiunto prima del codice socket esistente, e non nel listener di connessione esistente. Per il tuo server, dovrebbe assomigliare a questo:

```js
io.use(
  passportSocketIo.authorize({
    cookieParser: cookieParser,
    key: 'express.sid',
    secret: process.env.SESSION_SECRET,
    store: store,
    success: onAuthorizeSuccess,
    fail: onAuthorizeFail
  })
);
```

Nota che la configurazione dell'autenticazione Passport per Socket.IO è molto simile a quella che abbiamo preparato per il middleware `session` per l'API. Questo perché utilizzano lo stesso metodo di autenticazione - ottenere l'id di sessione da un cookie e convalidarlo.

In precedenza, quando abbiamo configurato il middleware `session`, non abbiamo esplicitamente impostato il nome del cookie per la sessione (`key`). Questo perché il pacchetto `session` usava il valore predefinito. Ora che abbiamo aggiunto un altro pacchetto che necessita di accedere allo stesso valore dai cookie, abbiamo bisogno di impostare esplicitamente il valore `key` in entrambi gli oggetti di configurazione.

Assicurati di aggiungere la `key` con il nome del cookie al middleware `session` che corrisponde alla chiave Socket.IO. Inoltre, aggiungi il riferimento `store` alle opzioni, vicino a dove abbiamo impostato `saveUninitialized: true`. Questo è necessario per dire a Socket.IO a quale sessione deve fare riferimento.

<hr />

Ora definisci le funzioni di callback per `success` e `fail`:

```js
function onAuthorizeSuccess(data, accept) {
  console.log('successful connection to socket.io');

  accept(null, true);
}

function onAuthorizeFail(data, message, error, accept) {
  if (error) throw new Error(message);
  console.log('failed connection to socket.io:', message);
  accept(null, false);
}
```

L'oggetto utente è ora disponibile sul tuo oggetto socket come `socket.request.user`. Per esempio, ora puoi aggiungere quanto segue:

```js
console.log('user ' + socket.request.user.username + ' connected');
```

Scriverà sulla console del server chi si è connesso!

Invia la tua pagina quando pensi di averlo fatto correttamente. Se incontri degli errori, puoi vedere <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#authentication-with-socketio-9" target="_blank" rel="noopener noreferrer nofollow">il progetto fino a questo punto</a>.

# --hints--

`passport.socketio` dovrebbe essere una dipendenza.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'passport.socketio',
    'Your project should list "passport.socketio" as a dependency'
  );
}
```

`cookie-parser` dovrebbe essere una dipendenza.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'cookie-parser',
    'Your project should list "cookie-parser" as a dependency'
  );
}
```

passportSocketIo dovrebbe essere richiesto correttamente.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require\((['"])passport\.socketio\1\)/gi,
    'You should correctly require and instantiate "passport.socketio"'
  );
}
```

passportSocketIo dovrebbe essere configurato correttamente.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io\.use\(\s*\w+\.authorize\(/,
    'You should register "passport.socketio" as socket.io middleware and provide it correct options'
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

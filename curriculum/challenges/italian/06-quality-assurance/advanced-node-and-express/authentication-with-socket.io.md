---
id: 589fc831f9fc0f352b528e77
title: Autenticazione con Socket.IO
challengeType: 2
forumTopicId: 301548
dashedName: authentication-with-socket-io
---

# --description--

Al momento, non puoi determinare chi sia connesso alla tua socket web. `req.user` contiene l'oggetto utente, ma solo quando l'utente interagisce con il server web. Con le web sockets non hai `req` (richiesta) e di conseguenza, nessun dato utente. Un modo per risolvere il problema di sapere chi sia connesso alla tua web socket è di analizzare e decodificare il cookie che contiene la sessione passport, per poi deserializzarlo e ottenere l'oggetto utente. Fortunatamente, c'è un pacchetto su NPM fatto per questo, che trasforma un compito una volta complesso, in qualcosa di semplice!

Aggiungi `passport.socketio@~3.7.0`, `connect-mongo@~3.2.0`, e `cookie-parser@~1.4.5` come dipendenze e richiedile rispettivamente come `passportSocketIo`, `MongoStore`, e `cookieParser`. Inoltre, dobbiamo inizializzare un nuovo archivio di memoria da `express-session` che abbiamo richiesto in precedenza. Dovrebbe assomigliare a questo:

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

Assicurati di aggiungere la `key` e lo `store` al middleware `session` montato sull'app. Questo è necessario per dire a *SocketIO* a quale sessione riferirsi.

<hr />

Ora, definisci le funzioni di callback per `success` e `fail`:

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
console.log('user ' + socket.request.user.name + ' connected');
```

Scriverà sulla console del server chi si è connesso!

Invia la tua pagina quando pensi che sia corretto. Se dovessi incontrare degli errori, puoi controllare il progetto fino a questo punto [qui](https://gist.github.com/camperbot/1414cc9433044e306dd7fd0caa1c6254).

# --hints--

`passport.socketio` dovrebbe essere una dipendenza.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'passport.socketio',
        'Your project should list "passport.socketio" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

`cookie-parser` dovrebbe essere una dipendenza.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'cookie-parser',
        'Your project should list "cookie-parser" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

passportSocketIo dovrebbe essere richiesta correttamente.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require\((['"])passport\.socketio\1\)/gi,
        'You should correctly require and instantiate "passport.socketio"'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

passportSocketIo dovrebbe essere configurata correttamente.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /io\.use\(\s*\w+\.authorize\(/,
        'You should register "passport.socketio" as socket.io middleware and provide it correct options'
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

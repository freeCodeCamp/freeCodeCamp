---
id: 589fc830f9fc0f352b528e74
title: Configurare l'ambiente
challengeType: 2
forumTopicId: 301566
dashedName: set-up-the-environment
---

# --description--

Le seguenti sfide utilizzeranno il file `chat.pug`. Così, nel tuo file `routes.js`, aggiugi una rotta GET che punta a `/chat` che fa uso di `ensureAuthenticated`, e fa il rendering di `chat.pug`, con `{ user: req.user }` passato come argomento alla risposta. Adesso, modifica la rotta esistente `/auth/github/callback` per impostare il `req.session.user_id = req.user.id` e reindirizzare a `/chat`.

Aggiungi `socket.io@~2.3.0` come dipendenza e richiedila/instanziala nel server definito come segue, con `http` (che è già integrato in Nodejs):

```javascript
const http = require('http').createServer(app);
const io = require('socket.io')(http);
```

Ora che il server *http* è montato sull'app *express*, devi rimanere in ascolto dal server *http*. Cambia la riga con `app.listen` a `http.listen`.

La prima cosa che deve essere gestita è l'ascolto di una nuova connessione dal client. La parola chiave <dfn>on</dfn> fa proprio questo: ascolta un evento specifico. Richiede 2 argomenti: una stringa contenente il titolo dell'evento emesso, e una funzione con cui i dati vengono trasmessi. Nel caso del nostro listener di connessione, usiamo *socket* per definire i dati nel secondo argomento. Un socket è un singolo client che è connesso.

Per rimanere in ascolto di connessioni al server, aggiungi quanto segue nella connessione al database:

```javascript
io.on('connection', socket => {
  console.log('A user has connected');
});
```

Ora affinché il client si connetta, devi solo aggiungere quanto segue al tuo `client.js` che viene caricato dalla pagina dopo l'autenticazione:

```js
/*global io*/
let socket = io();
```

Il commento sopprime l'errore che normalmente vedresti poiché 'io' non è definito nel file. Abbiamo già aggiunto una CDN affidabile alla libreria Socket.IO sulla pagina in chat.pug.

Ora prova a caricare la tua app e ad autenticarti: dovresti vedere nella console del tuo server 'A user has connected'!

**Nota:**`io()` funziona solo quando ci si connette a un socket ospitato sullo stesso url/server. Per connettersi ad un socket esterno ospitato altrove, si utilizzerebbe `io.connect('URL');`.

Invia la tua pagina quando pensi di averlo fatto correttamente. Se dovessi incontrare degli errori, puoi controllare il progetto completato fino a questo punto [qui](https://gist.github.com/camperbot/aae41cf59debc1a4755c9a00ee3859d1).

# --hints--

`socket.io` dovrebbe essere una dipendenza.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'socket.io',
        'Your project should list "socket.io" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Dovresti richiedere e instanziare correttamente `http` come `http`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /http.*=.*require.*('|")http\1/gi,
        'Your project should list "http" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Dovresti richiedere e instanziare correttamente `socket.io` come `io`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /io.*=.*require.*('|")socket.io\1.*http/gi,
        'You should correctly require and instantiate socket.io as io.'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Socket.IO dovrebbe stare in ascolto di connessioni.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /io.on.*('|")connection\1.*socket/gi,
        'io should listen for "connection" and socket should be the 2nd arguments variable'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Il tuo client dovrebbe connettersi al tuo server.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/client.js').then(
    (data) => {
      assert.match(
        data,
        /socket.*=.*io/gi,
        'Your client should be connection to server with the connection defined as socket'
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

---
id: 589fc830f9fc0f352b528e74
title: Configurare l'ambiente
challengeType: 2
forumTopicId: 301566
dashedName: set-up-the-environment
---

# --description--

Le seguenti sfide utilizzeranno il file `chat.pug`. Così, nel tuo file `routes.js`, aggiugi una rotta GET che punta a `/chat` che fa uso di `ensureAuthenticated`, e fa il rendering di `chat.pug`, con `{ user: req.user }` passato come argomento alla risposta. Adesso, modifica la rotta esistente `/auth/github/callback` per impostare il `req.session.user_id = req.user.id` e reindirizzare a `/chat`.

`socket.io@~2.3.0` è già stato aggiunto come dipendenza, quindi richiedilo nel tuo server come segue con `http` (integrato in Nodejs):

```javascript
const http = require('http').createServer(app);
const io = require('socket.io')(http);
```

Ora che il server *http* è montato sull'app *express*, devi rimanere in ascolto dal server *http*. Cambia la riga con `app.listen` a `http.listen`.

La prima cosa che deve essere gestita è l'ascolto di una nuova connessione dal client. La parola chiave <dfn>on</dfn> fa proprio questo: ascolta un evento specifico. Richiede 2 argomenti: una stringa contenente il titolo dell'evento emesso, e una funzione con cui i dati vengono trasmessi. Nel caso del nostro listener di connessione, usa `socket` per definire i dati nel secondo argomento. Un socket è un singolo client che è connesso.

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

Il commento sopprime l'errore che normalmente vedresti poiché 'io' non è definito nel file. Hai già aggiunto un CDN affidabile alla libreria Socket.IO sulla pagina in `chat.pug`.

Ora prova a caricare la tua app e ad autenticarti: dovresti vedere nella console del tuo server `A user has connected`.

**Nota:**`io()` funziona solo quando ci si connette a un socket ospitato sullo stesso url/server. Per connettersi ad un socket esterno ospitato altrove, si utilizzerebbe `io.connect('URL');`.

Invia la tua pagina quando pensi di averlo fatto correttamente. Se incontri degli errori, puoi vedere <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#set-up-the-environment-6" target="_blank" rel="noopener noreferrer nofollow">il progetto completato fino a questo punto</a>.

# --hints--

`socket.io` dovrebbe essere una dipendenza.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'socket.io',
    'Your project should list "socket.io" as a dependency'
  );
}
```

Dovresti richiedere e instanziare correttamente `http` come `http`.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /http.*=.*require.*('|")http\1/s,
    'Your project should list "http" as a dependency'
  );
}
```

Dovresti richiedere e instanziare correttamente `socket.io` come `io`.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io.*=.*require.*('|")socket.io\1.*http/s,
    'You should correctly require and instantiate socket.io as io.'
  );
}
```

Socket.IO dovrebbe stare in ascolto di connessioni.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io.on.*('|")connection\1.*socket/s,
    'io should listen for "connection" and socket should be the 2nd arguments variable'
  );
}
```

Il tuo client dovrebbe connettersi al tuo server.

```js
async (getUserInput) => {
  const url = new URL("/public/client.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /socket.*=.*io/s,
    'Your client should be connection to server with the connection defined as socket'
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

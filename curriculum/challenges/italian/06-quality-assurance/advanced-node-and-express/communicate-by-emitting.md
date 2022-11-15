---
id: 589fc831f9fc0f352b528e75
title: Comunicare emettendo
challengeType: 2
forumTopicId: 301550
dashedName: communicate-by-emitting
---

# --description--

<dfn>Emit</dfn> è il modo più comune di comunicare che utilizzerai. Quando emetti qualcosa dal server a 'io', invii il nome e i dati di un evento a tutti i socket collegati. Un buon esempio di questo concetto sarebbe emettere il numero attuale di utenti connessi ogni volta che un nuovo utente si connette!

Inizia aggiungendo una variabile per tenere traccia degli utenti, poco prima di dove stai ascolta in attesa di connessioni.

```js
let currentUsers = 0;
```

Ora, quando qualcuno si connette, dovresti aumentare il conteggio prima di emetterlo. Quindi, vorrai aggiungere l'incrementatore all'interno del listener di connessione.

```js
++currentUsers;
```

Infine, dopo aver incrementato il conteggio, dovresti emettere l'evento (sempre all'interno del listener di connessione). L'evento dovrebbe essere chiamato 'user count', e i dati dovrebbero essere solo `currentUsers` (utenti attuali).

```js
io.emit('user count', currentUsers);
```

Ora, puoi fare in modo che il tuo client si metta in ascolto in attesa di questo evento! In modo simile ad attendere una connessione sul server, userai la parola chiave `on`.

```js
socket.on('user count', function(data) {
  console.log(data);
});
```

Ora, prova a caricare la tua app e a fare l'autenticazione: dovresti vedere nella tua console del client un '1' che rappresenta il numero attuale di utenti! Prova a caricare altri client, e autenticati in ognuno di essi per vedere il numero che aumenta.

Invia la tua pagina quando pensi di averlo fatto correttamente. Se incontri degli errori, puoi vedere <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#communicate-by-emitting-7" target="_blank" rel="noopener noreferrer nofollow">il progetto completato fino a questo punto</a>.

# --hints--

`currentUsers` dovrebbe essere definito.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /currentUsers/s,
    'You should have variable currentUsers defined'
  );
}
```

Il server dovrebbe emettere il numero attuale di utenti per ogni nuova connessione.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io.emit.*('|")user count('|").*currentUsers/s,
    'You should emit "user count" with data currentUsers'
  );
}
```

Il tuo client dovrebbe essere in ascolto per eventi di tipo `'user count'`.

```js
async (getUserInput) => {
  const url = new URL("/public/client.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /socket.on.*('|")user count('|")/s,
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

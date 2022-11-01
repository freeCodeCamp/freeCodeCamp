---
id: 589fc832f9fc0f352b528e79
title: Invia e visualizza messaggi di chat
challengeType: 2
forumTopicId: 301562
dashedName: send-and-display-chat-messages
---

# --description--

È ora di iniziare a consentire ai client di inviare un messaggio di chat al server da inviare a tutti i client! Nel tuo file `client.js`, dovresti vedere che c'è già un blocco di codice che gestisce quando il modulo invia il messaggio.

```js
$('form').submit(function() {
  /*logic*/
});
```

All'interno del codice di invio del modulo, dovresti emettere un evento dopo aver definito `messageToSend` ma prima di cancellare la casella di testo `#m`. L'evento dovrebbe essere chiamato `'chat message'` e i dati dovrebbero essere solo `messageToSend`.

```js
socket.emit('chat message', messageToSend);
```

Ora, sul tuo server, si dovrebbe ascoltare il socket in attesa dell'evento `'chat message'` con i dati chiamati `message`. Once the event is received, it should emit the event `'chat message'` to all sockets using `io.emit`, sending a data object containing the `username` and `message`.

In `client.js`, you should now listen for event `'chat message'` and, when received, append a list item to `#messages` with the username, a colon, and the message!

A questo punto, la chat dovrebbe essere completamente funzionante e in grado di inviare messaggi attraverso tutti i client!

Invia la tua pagina quando pensi di averlo fatto correttamente. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#send-and-display-chat-messages-11" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

Il server dovrebbe rimanere in ascolto di `'chat message'` ed emetterlo correttamente.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /socket.on.*('|")chat message('|")[^]*io.emit.*('|")chat message('|").*username.*message/s,
    'Your server should listen to the socket for "chat message" then emit to all users "chat message" with name and message in the data object'
  );
}
```

Il client dovrebbe gestire e visualizzare correttamente i nuovi dati dall'evento `'chat message'`.

```js
async (getUserInput) => {
  const url = new URL("/public/client.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /socket.on.*('|")chat message('|")[^]*messages.*li/s,
    'You should append a list item to #messages on your client within the "chat message" event listener to display the new message'
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

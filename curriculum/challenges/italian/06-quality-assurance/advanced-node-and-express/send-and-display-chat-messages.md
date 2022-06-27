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

Ora, sul tuo server, si dovrebbe ascoltare il socket in attesa dell'evento `'chat message'` con i dati chiamati `message`. Una volta ricevuto l'evento, dovrebbe emettere l'evento `'chat message'` a tutti i socket `io.emit` con i dati sotto forma di oggetto contenente `name` e `message`.

In `client.js`, dovresti ora rimanere in ascolto per l'evento `'chat message'` e, quando ricevuto, aggiungi un elemento di lista a `#messages` con il nome, due punti e il messaggio!

A questo punto, la chat dovrebbe essere completamente funzionante e in grado di inviare messaggi attraverso tutti i client!

Invia la tua pagina quando pensi di averlo fatto correttamente. Se stai avendo errori, puoi vedere <a href="https://gist.github.com/camperbot/d7af9864375207e254f73262976d2016" target="_blank" rel="noopener noreferrer nofollow">il progetto completato fino a questo punto</a>.

# --hints--

Il server dovrebbe rimanere in ascolto di `'chat message'` ed emetterlo correttamente.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /socket.on.*('|")chat message('|")[^]*io.emit.*('|")chat message('|").*name.*message/gis,
        'Your server should listen to the socket for "chat message" then emit to all users "chat message" with name and message in the data object'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Il client dovrebbe gestire e visualizzare correttamente i nuovi dati dall'evento `'chat message'`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/client.js').then(
    (data) => {
      assert.match(
        data,
        /socket.on.*('|")chat message('|")[^]*messages.*li/gis,
        'You should append a list item to #messages on your client within the "chat message" event listener to display the new message'
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

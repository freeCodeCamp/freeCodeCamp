---
id: 589fc831f9fc0f352b528e76
title: Gestire una disconnessione
challengeType: 2
forumTopicId: 301552
dashedName: handle-a-disconnect
---

# --description--

Potresti notare che fino a questo momento hai solo incremementato il numero degli utenti. Gestire la disconnessione di un utente è semplice come gestire la connessione iniziale, solo che si deve mettersi in ascolto per essa su ogni socket invece che su tutto il server.

Per fare questo, aggiungi un altro listener all'interno del listener `'connect'` esistente, in modo che attenda un evento `'disconnect'` sul socket (senza alcun passaggio di dati). È possibile testare questa funzionalità semplicemente scrivendo nella console che un utente si è disconnesso.

```js
socket.on('disconnect', () => {
  /*anything you want to do on disconnect*/
});
```

Per assicurarti che i client continuino ad avere il numero aggiornato degli utenti connessi, quando avviene una disconnessione dovresti diminuire `currentUsers` di 1 ed emettere l'evento `'user count'` con il conteggio aggiornato.

**Nota:** Proprio come `'disconnect'`, tutti gli altri eventi che un socket può emettere sul server devono essere gestiti all'interno del listener di connessione dove abbiamo definito 'socket'.

Invia la tua pagina quando pensi di averlo fatto correttamente. Se incontri degli errori, puoi vedere <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#handle-a-disconnect-8" target="_blank" rel="noopener noreferrer nofollow">il progetto completato fino a questo punto</a>.

# --hints--

Il server deve gestire l'evento di disconnessione da un socket.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(data, /socket.on.*('|")disconnect('|")/s, '');
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

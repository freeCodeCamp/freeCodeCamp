---
id: 589fc831f9fc0f352b528e76
title: Verbindungsabbruch verarbeiten
challengeType: 2
forumTopicId: 301552
dashedName: handle-a-disconnect
---

# --description--

Du wirst vielleicht feststellen, dass du bisher nur die Anzahl der Nutzer erhöht hast. Das Verarbeiten eines Verbindungsabbruchs des Nutzers ist genauso einfach, wie das Verarbeiten des ersten Verbindungsaufbaus – nur musst du hierfür, statt auf dem gesamten Server, auf jeden Socket hören.

To do this, add another listener inside the existing `'connect'` listener that listens for `'disconnect'` on the socket with no data passed through. You can test this functionality by just logging that a user has disconnected to the console.

```js
socket.on('disconnect', () => {
  /*anything you want to do on disconnect*/
});
```

Um sicherzustellen, dass Clients immer über aktuelle Nutzerzahlen verfügen, solltest du `currentUsers` um 1 verringern, wenn die Verbindung unterbrochen wird und dann das Ereignis `'user count'` mit der aktualisierten Anzahl ausgeben.

**Hinweis:** Wie bei `'disconnect'` sollten auch alle anderen Ereignisse, die ein Socket an den Server übertragen kann, innerhalb des Verbindungsaufbau-Listeners verarbeitet werden, in welchem wir 'socket' definiert haben.

Reiche deine Seite ein, wenn du davon ausgehst, alles richtig gemacht zu haben. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#handle-a-disconnect-8" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

Der Server sollte das disconnect-Ereignis des Sockets verarbeiten.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(data, /socket.on.*('|")disconnect('|")/s, '');
}
```

Dein Client sollte auf das Ereignis `'user count'` warten.

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

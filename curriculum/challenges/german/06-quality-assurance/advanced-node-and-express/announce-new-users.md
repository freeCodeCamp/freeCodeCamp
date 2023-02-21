---
id: 589fc832f9fc0f352b528e78
title: Ankündigung Neuer Nutzer
challengeType: 2
forumTopicId: 301546
dashedName: announce-new-users
---

# --description--

Viele Chaträume sind in der Lage, zu erkennen, wann ein Benutzer eine Verbindung herstellt oder unterbricht – dies wird dann allen verbundenen Nutzern im Chat angezeigt. Da du bereits ein Ereignis beim Verbinden und Trennen emittierst, musst du nur dieses Ereignis ändern, um eine solche Funktion zu implementieren. The most logical way of doing so is sending 3 pieces of data with the event: the username of the user who connected/disconnected, the current user count, and if that username connected or disconnected.

Change the event name to `'user'`, and pass an object along containing the fields `username`, `currentUsers`, and `connected` (to be `true` in case of connection, or `false` for disconnection of the user sent). Be sure to change both `'user count'` events and set the disconnect one to send `false` for the field `connected` instead of `true` like the event emitted on connect.

```js
io.emit('user', {
  username: socket.request.user.username,
  currentUsers,
  connected: true
});
```

Jetzt verfügt der Client über alle notwendigen Informationen, um die aktuelle Benutzerzahl korrekt anzuzeigen und zu melden, wenn ein Benutzer sich verbindet oder die Verbindung trennt! Um dieses Ereignis auf der Client-Seite zu verarbeiten, sollten wir auf `'user'` warten, dann die aktuelle Benutzerzahl aktualisieren – indem wir jQuery verwenden, um den Text von `#num-users` auf `'{NUMBER} users online'` zu setzen –, sowie `<li>` an die ungeordnete Liste der id `messages` mit `'{NAME} has {joined/left} the chat.'` anzuhängen.

Eine Umsetzung könnte wie folgt aussehen:

```js
socket.on('user', data => {
  $('#num-users').text(data.currentUsers + ' users online');
  let message =
    data.username +
    (data.connected ? ' has joined the chat.' : ' has left the chat.');
  $('#messages').append($('<li>').html('<b>' + message + '</b>'));
});
```

Reiche deine Seite ein, wenn du davon ausgehst, alles richtig gemacht zu haben. Wenn du auf Fehler stößt, kannst du dir <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135/3#announce-new-users-10" target="_blank" rel="noopener noreferrer nofollow">das bis zu diesem Punkt abgeschlossene Projekt</a> ansehen.

# --hints--

Das Ereignis `'user'` sollte gemeinsam mit `name`, `currentUsers` und `connected` emittiert werden.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io.emit.*('|")user\1.*name.*currentUsers.*connected/s,
    'You should have an event emitted named user sending name, currentUsers, and connected'
  );
}
```

Der Client sollte die neuen Daten des Ereignisses `'user'` richtig verarbeiten und anzeigen.

```js
async (getUserInput) => {
  const url = new URL("/public/client.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /socket.on.*('|")user\1[^]*num-users/s,
    'You should change the text of "#num-users" within on your client within the "user" event listener to show the current users connected'
  );
  assert.match(
    data,
    /socket.on.*('|")user\1[^]*messages.*li/s,
    'You should append a list item to "#messages" on your client within the "user" event listener to announce a user came or went'
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

---
id: 589fc831f9fc0f352b528e75
title: Communicate by Emitting
challengeType: 2
forumTopicId: 301550
dashedName: communicate-by-emitting
---

# --description--

<dfn>Emit</dfn> ist die häufigste Art der Kommunikation, die du verwenden wirst. Wenn du etwas vom Server an 'io' sendest, sendest du den Namen und die Daten eines Ereignisses an alle verbundenen Sockets. Ein gutes Beispiel für dieses Konzept wäre, jedes Mal, wenn sich ein neuer Benutzer anmeldet, die aktuelle Anzahl der verbundenen Benutzer auszugeben!

Start by adding a variable to keep track of the users, just before where you are currently listening for connections.

```js
let currentUsers = 0;
```

Now, when someone connects, you should increment the count before emitting the count. So, you will want to add the incrementer within the connection listener.

```js
++currentUsers;
```

Finally, after incrementing the count, you should emit the event (still within the connection listener). Das Ereignis sollte 'user count' heißen und die Daten sollten einfach `currentUsers` sein.

```js
io.emit('user count', currentUsers);
```

Jetzt kannst du deinem Client die Möglichkeit geben, auf dieses Ereignis zu warten! Ähnlich wie beim Warten auf eine Verbindung zum Server, verwendest du das keyword `on`.

```js
socket.on('user count', function(data) {
  console.log(data);
});
```

Versuche nun, deine App zu laden, authentifiziere dich, und du solltest in deiner Client-Konsole eine '1' sehen, die die aktuelle Anzahl der Benutzer darstellt! Versuche mehr Clients zu laden und zu authentifizieren, um zu sehen, ob die Nummer ansteigt.

Reiche deine Seite ein, wenn du davon ausgehst, alles richtig gemacht zu haben. Wenn du auf Fehler stößt, kannst du <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#communicate-by-emitting-7" target="_blank" rel="noopener noreferrer nofollow">das bis zu diesem Punkt abgeschlossene Projekt überprüfen</a>.

# --hints--

`currentUsers` sollte definiert werden.

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

Der Server soll die aktuelle Benutzeranzahl bei jeder neuen Verbindung ausgeben.

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

Your client should be listening for `'user count'` event.

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

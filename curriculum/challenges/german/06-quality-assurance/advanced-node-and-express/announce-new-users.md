---
id: 589fc832f9fc0f352b528e78
title: Ankündigung Neuer Nutzer
challengeType: 2
forumTopicId: 301546
dashedName: announce-new-users
---

# --description--

Viele Chaträume sind in der Lage, zu erkennen, wann ein Benutzer eine Verbindung herstellt oder unterbricht – dies wird dann allen verbundenen Nutzern im Chat angezeigt. Da du bereits ein Ereignis beim Verbinden und Trennen emittierst, musst du nur dieses Ereignis ändern, um eine solche Funktion zu implementieren. Der logischste Weg, dies zu tun, besteht darin, dreierlei Daten mit dem Ereignis zu übertragen: den Namen des Benutzers, der die Verbindung hergestellt/getrennt hat, die aktuelle Anzahl der Benutzer und ob dieser Name verbunden oder getrennt wurde.

Ändere den Ereignisnamen zu `'user'` und übergebe diesem ein Objekt mit den Feldern 'name', 'currentUser' und 'connected' (`true` bei Verbindung oder `false` bei Verbindungsabbruch des Nutzers). Verändere die Werte beider 'user count'-Ereignisse – das 'disconnect'-Ereignis sollte statt `true`, wie bei dem Event, das bei Verbindungsherstellung übermittelt wird, `false` aussenden.

```js
io.emit('user', {
  name: socket.request.user.name,
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
    data.name +
    (data.connected ? ' has joined the chat.' : ' has left the chat.');
  $('#messages').append($('<li>').html('<b>' + message + '</b>'));
});
```

Schicke deine Seite ab, wenn du davon ausgehst, alles richtig gemacht zu haben. Wenn du Fehler erhälst, kannst du dir <a href="https://gist.github.com/camperbot/bf95a0f74b756cf0771cd62c087b8286" target="_blank" rel="noopener noreferrer nofollow"> das Projekt bis zu diesem Zeitpunkt</a> ansehen.

# --hints--

Ereignis `'user'` sollte mit "name", "currentUsers" und "connected" emittiert werden.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /io.emit.*('|")user\1.*name.*currentUsers.*connected/gis,
        'You should have an event emitted named user sending name, currentUsers, and connected'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Der Client sollte die neuen Daten des Ereignisses `'user'` richtig verarbeiten und anzeigen.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/client.js').then(
    (data) => {
      assert.match(
        data,
        /socket.on.*('|")user\1[^]*num-users/gi,
        'You should change the text of "#num-users" within on your client within the "user" event listener to show the current users connected'
      );
      assert.match(
        data,
        /socket.on.*('|")user\1[^]*messages.*li/gi,
        'You should append a list item to "#messages" on your client within the "user" event listener to announce a user came or went'
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

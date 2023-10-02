---
id: 589fc832f9fc0f352b528e79
title: Chatnachrichten senden und anzeigen
challengeType: 2
forumTopicId: 301562
dashedName: send-and-display-chat-messages
---

# --description--

Es ist an der Zeit, dass du den Clients erlaubst, eine Chatnachricht an den Server zu senden, die er wiederum an alle Clients emittiert! In der Datei `client.js` solltest du sehen, dass es bereits einen Codeblock gibt, der das Absenden des Nachrichtenformulars verarbeitet.

```js
$('form').submit(function() {
  /*logic*/
});
```

Within the form submit code, you should emit an event after you define `messageToSend` but before you clear the text box `#m`. Das Ereignis sollte `'chat message'` heißen und die Daten sollten einfach `messageToSend` sein.

```js
socket.emit('chat message', messageToSend);
```

Now, on your server, you should be listening to the socket for the event `'chat message'` with the data being named `message`. Once the event is received, it should emit the event `'chat message'` to all sockets using `io.emit`, sending a data object containing the `username` and `message`.

In `client.js`, you should now listen for event `'chat message'` and, when received, append a list item to `#messages` with the username, a colon, and the message!

Nun sollte der Chat voll funktionsfähig sein und Nachrichten an alle Clients verschicken!

Reiche deine Seite ein, wenn du davon ausgehst, alles richtig gemacht zu haben. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#send-and-display-chat-messages-11" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

Server should listen for `'chat message'` and then emit it properly.

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

Der Client sollte die neuen Daten aus dem Ereignis `'chat message'` richtig verarbeiten und anzeigen.

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

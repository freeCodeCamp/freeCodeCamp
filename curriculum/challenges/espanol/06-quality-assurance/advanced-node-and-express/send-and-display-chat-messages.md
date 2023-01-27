---
id: 589fc832f9fc0f352b528e79
title: Envía y muestra mensajes de chat
challengeType: 2
forumTopicId: 301562
dashedName: send-and-display-chat-messages
---

# --description--

¡Es hora de que empieces a permitir que los clientes envíen un mensaje de chat al servidor para emitir a todos los clientes! En tu archivo `client.js`, debes ver que ya hay un bloque de gestión de código cuando se envía el formulario de mensaje.

```js
$('form').submit(function() {
  /*logic*/
});
```

Dentro del código de envío del formulario, debes emitir un evento después de definir `messageToSend` pero antes de borrar el cuadro de texto `#m`. El evento debe llamarse `'chat message'` y los datos deben ser `messageToSend`.

```js
socket.emit('chat message', messageToSend);
```

Ahora, en tu servidor, debes estar escuchando el socket para el evento `'chat message'` con los datos que se llaman `message`. Once the event is received, it should emit the event `'chat message'` to all sockets using `io.emit`, sending a data object containing the `username` and `message`.

In `client.js`, you should now listen for event `'chat message'` and, when received, append a list item to `#messages` with the username, a colon, and the message!

En este punto, ¡el chat debe ser totalmente funcional y enviar mensajes a todos los clientes!

Envía tu página cuando creas que lo has hecho bien. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#send-and-display-chat-messages-11" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

El servidor debe escuchar `'chat message'` y luego emitirlo correctamente.

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

El cliente debe gestionar y mostrar correctamente los nuevos datos del evento `'chat message'`.

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

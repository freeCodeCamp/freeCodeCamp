---
id: 589fc832f9fc0f352b528e78
title: Anuncia nuevos usuarios
challengeType: 2
forumTopicId: 301546
dashedName: announce-new-users
---

# --description--

Muchas salas de chat son capaces de anunciar cuando un usuario se conecta o se desconecta y luego lo muestra a todos los usuarios conectados en el chat. Viendo como si ya estuvieras emitiendo un evento al conectar y desconectar, sólo tendrás que modificar este evento para soportar una característica de este tipo. The most logical way of doing so is sending 3 pieces of data with the event: the username of the user who connected/disconnected, the current user count, and if that username connected or disconnected.

Change the event name to `'user'`, and pass an object along containing the fields `username`, `currentUsers`, and `connected` (to be `true` in case of connection, or `false` for disconnection of the user sent). Be sure to change both `'user count'` events and set the disconnect one to send `false` for the field `connected` instead of `true` like the event emitted on connect.

```js
io.emit('user', {
  username: socket.request.user.username,
  currentUsers,
  connected: true
});
```

¡Ahora tu cliente tendrá toda la información necesaria para mostrar correctamente el recuento de usuarios actual y anunciar cuando un usuario se conecta o se desconecta! Para manejar este evento en el lado del cliente debemos escuchar `'user'`, luego actualiza el recuento de usuarios usando jQuery para cambiar el texto de `#num-users` a `'{NUMBER} users online'`, así como añadir un `<li>` a la lista desordenada con id `messages` con `'{NAME} has {joined/left} the chat.'`.

Una implementación de esto podría parecerse a lo siguiente:

```js
socket.on('user', data => {
  $('#num-users').text(data.currentUsers + ' users online');
  let message =
    data.username +
    (data.connected ? ' has joined the chat.' : ' has left the chat.');
  $('#messages').append($('<li>').html('<b>' + message + '</b>'));
});
```

Envía tu página cuando creas que lo has hecho bien. If you're running into errors, you can check out <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135/3#announce-new-users-10" target="_blank" rel="noopener noreferrer nofollow">the project completed up to this point </a>.

# --hints--

Event `'user'` should be emitted with `name`, `currentUsers`, and `connected`.

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

El cliente debe manejar y mostrar correctamente los nuevos datos del evento `'user'`.

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

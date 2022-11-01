---
id: 589fc832f9fc0f352b528e78
title: Anunciar novos usuários
challengeType: 2
forumTopicId: 301546
dashedName: announce-new-users
---

# --description--

Muitas salas de bate-papo são capazes de anunciar quando um usuário conecta ou desconecta e, em seguida, exibem isso para todos os usuários conectados no bate-papo. Considerando que você já está emitindo um evento ao se conectar e desconectar, você só terá que modificar esse evento para dar suporte a esse recurso. The most logical way of doing so is sending 3 pieces of data with the event: the username of the user who connected/disconnected, the current user count, and if that username connected or disconnected.

Change the event name to `'user'`, and pass an object along containing the fields `username`, `currentUsers`, and `connected` (to be `true` in case of connection, or `false` for disconnection of the user sent). Be sure to change both `'user count'` events and set the disconnect one to send `false` for the field `connected` instead of `true` like the event emitted on connect.

```js
io.emit('user', {
  username: socket.request.user.username,
  currentUsers,
  connected: true
});
```

Agora, o client terá todas as informações necessárias para exibir corretamente a contagem de usuário atual e anunciar quando um usuário se conectar ou desconectar! Para tratar este evento do lado do client, devemos escutar `'user'`. Em seguida, atualizamos a contagem de usuário atual, usando jQuery para alterar o texto de `#num-users` para `'{NUMBER} users online'`. Também acrescentamos um `<li>` à lista não ordenada com o id `messages` dizendo `'{NAME} has {joined/left} the chat.'`.

Uma implementação disso seria semelhante a:

```js
socket.on('user', data => {
  $('#num-users').text(data.currentUsers + ' users online');
  let message =
    data.username +
    (data.connected ? ' has joined the chat.' : ' has left the chat.');
  $('#messages').append($('<li>').html('<b>' + message + '</b>'));
});
```

Envie sua página quando você achar que ela está certa. If you're running into errors, you can check out <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135/3#announce-new-users-10" target="_blank" rel="noopener noreferrer nofollow">the project completed up to this point </a>.

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

O client deve manipular e exibir adequadamente os novos dados do evento `'user'`.

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

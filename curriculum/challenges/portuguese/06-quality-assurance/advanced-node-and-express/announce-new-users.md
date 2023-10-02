---
id: 589fc832f9fc0f352b528e78
title: Anunciar novos usuários
challengeType: 2
forumTopicId: 301546
dashedName: announce-new-users
---

# --description--

Muitas salas de bate-papo são capazes de anunciar quando um usuário conecta ou desconecta e, em seguida, exibem isso para todos os usuários conectados no bate-papo. Considerando que você já está emitindo um evento ao se conectar e desconectar, você só terá que modificar esse evento para dar suporte a esse recurso. A maneira mais lógica de fazer isso é enviando 3 dados com o evento: o nome do usuário que se conectou/desconectou, a contagem de usuário atual e se esse nome de usuário conectou ou desconectou.

Altere o nome do evento para `'user'` e passe um objeto junto com o evento contendo os campos `username`, `currentUsers` e `connected` (para ser `true` no caso de conexão, ou `false` em caso de desconexão do usuário). Certifique-se de alterar os dois eventos `'user count'` e defina o evento de desconexão para que envie `false` para o campo `connected` em vez de `true` como ocorre quando o evento é emitido ao conectar.

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

Envie sua página quando você achar que ela está certa. Se estiver encontrando erros, pode conferir <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135/3#announce-new-users-10" target="_blank" rel="noopener noreferrer nofollow">o projeto concluído até este ponto</a>.

# --hints--

O evento `'user'` deve ser emitido com `name`, `currentUsers` e `connected`.

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

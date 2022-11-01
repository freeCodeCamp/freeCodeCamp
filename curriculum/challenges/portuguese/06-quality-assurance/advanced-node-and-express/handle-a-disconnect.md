---
id: 589fc831f9fc0f352b528e76
title: Tratar de uma desconexão
challengeType: 2
forumTopicId: 301552
dashedName: handle-a-disconnect
---

# --description--

Você pode notar que até agora você só tem aumentado a contagem de usuários. Tratar da desconexão de um usuário é tão fácil quanto manipular a conexão inicial, exceto pelo fato de que você tem que escutar isso em cada socket em vez de em todo o servidor.

Para fazer isso, adicione outro listener dentro do `'connect'` que já existe e que escute por `'disconnect'` no socket sem passar dados. Você pode testar essa funcionalidade apenas registrando no console que um usuário se desconectou.

```js
socket.on('disconnect', () => {
  /*anything you want to do on disconnect*/
});
```

To make sure clients continuously have the updated count of current users, you should decrease `currentUsers` by 1 when the disconnect happens then emit the `'user count'` event with the updated count.

**Observação:** assim como ocorre com `'disconnect'`, todos os outros eventos que um socket pode emitir para o servidor devem ser tratados dentro do listener que estiver conectando, onde 'socket' está definido.

Envie sua página quando você achar que ela está certa. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#handle-a-disconnect-8" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

O servidor deve tratar do evento de desconexão a partir de um socket.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(data, /socket.on.*('|")disconnect('|")/s, '');
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

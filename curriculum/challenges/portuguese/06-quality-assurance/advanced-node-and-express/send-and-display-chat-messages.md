---
id: 589fc832f9fc0f352b528e79
title: Enviar e exibir mensagens de bate-papo
challengeType: 2
forumTopicId: 301562
dashedName: send-and-display-chat-messages
---

# --description--

É hora de começar a permitir que os clients enviem uma mensagem de bate-papo ao servidor para que seja enviada a todos os outros clients! No arquivo `client.js`, você deve ver que já há um bloco de tratamento de código quando o formulário de mensagens é enviado.

```js
$('form').submit(function() {
  /*logic*/
});
```

Dentro do código de envio do formulário, você deve enviar um evento depois de definir `messageToSend`, mas antes de limpar a caixa de texto `#m`. O evento deve ser nomeado `'chat message'` e o dado devem ser simplesmente `messageToSend`.

```js
socket.emit('chat message', messageToSend);
```

Agora, no servidor, você deve estar escutando o socket para o evento `'chat message'` com os dados nomeados como `message`. Once the event is received, it should emit the event `'chat message'` to all sockets using `io.emit`, sending a data object containing the `username` and `message`.

In `client.js`, you should now listen for event `'chat message'` and, when received, append a list item to `#messages` with the username, a colon, and the message!

Neste ponto, o chat deve estar totalmente funcional e enviando mensagens para todos os clients!

Envie sua página quando você achar que ela está certa. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#send-and-display-chat-messages-11" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

O servidor deve escutar por `'chat message'` e, em seguida, emiti-la corretamente.

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

O client deve manipular e exibir adequadamente os novos dados do evento `'chat message'`.

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

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

Agora, no servidor, você deve estar escutando o socket para o evento `'chat message'` com os dados nomeados como `message`. Quando o evento for recebido, ele deve emitir o evento `'chat message'` para todos os sockets `io.emit` com os dados sendo um objeto contendo `name` e `message`.

No `client.js`, agora, você deve escutar o evento `'chat message'` e, quando ele for recebido, associe um item de lista a `#messages` com o nome, um sinal de dois-pontos e a mensagem!

Neste ponto, o chat deve estar totalmente funcional e enviando mensagens para todos os clients!

Envie sua página quando você achar que ela está certa. Se você estiver encontrando erros, pode <a href="https://gist.github.com/camperbot/d7af9864375207e254f73262976d2016" target="_blank" rel="noopener noreferrer nofollow">conferir o projeto concluído até este ponto</a>.

# --hints--

O servidor deve escutar por `'chat message'` e, em seguida, emiti-la corretamente.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /socket.on.*('|")chat message('|")[^]*io.emit.*('|")chat message('|").*name.*message/gis,
        'Your server should listen to the socket for "chat message" then emit to all users "chat message" with name and message in the data object'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

O client deve manipular e exibir adequadamente os novos dados do evento `'chat message'`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/client.js').then(
    (data) => {
      assert.match(
        data,
        /socket.on.*('|")chat message('|")[^]*messages.*li/gis,
        'You should append a list item to #messages on your client within the "chat message" event listener to display the new message'
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

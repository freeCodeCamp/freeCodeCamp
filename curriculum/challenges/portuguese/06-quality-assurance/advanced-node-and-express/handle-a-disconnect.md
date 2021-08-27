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

Para garantir que os clients tenham a contagem atualizada dos usuários atuais continuamente, você deve diminuir os currentUsers em 1 quando a desconexão acontece, emitindo o evento 'user count' com a contagem atualizada!

**Observação:** assim como ocorre com `'disconnect'`, todos os outros eventos que um socket pode emitir para o servidor devem ser tratados dentro do listener que estiver conectando, onde 'socket' está definido.

Envie sua página quando você achar que ela está certa. Se você encontrar erros, pode conferir o projeto concluído até este momento [aqui](https://gist.github.com/camperbot/ab1007b76069884fb45b215d3c4496fa).

# --hints--

O servidor deve tratar do evento de desconexão a partir de um socket.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(data, /socket.on.*('|")disconnect('|")/gi, '');
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Seu client deve estar escutando o evento 'user count'.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/client.js').then(
    (data) => {
      assert.match(
        data,
        /socket.on.*('|")user count('|")/gi,
        'Your client should be connection to server with the connection defined as socket'
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

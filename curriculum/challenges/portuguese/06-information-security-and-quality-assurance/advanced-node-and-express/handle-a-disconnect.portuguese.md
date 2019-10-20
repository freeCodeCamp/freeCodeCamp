---
id: 589fc831f9fc0f352b528e76
title: Handle a Disconnect
challengeType: 2
videoUrl: ''
localeTitle: Lidar com uma desconexão
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-socketio/">GitHub</a> . Você pode perceber que até agora você só aumentou a contagem de usuários. O manuseio de um usuário desconectado é tão fácil quanto manipular a conexão inicial, exceto que a diferença é que você deve ouvi-la em cada soquete em comparação com o servidor inteiro. <hr> Para fazer isso, inclua no ouvinte de conexão existente um ouvinte que ouça &#39;desconectar&#39; no soquete sem passar dados. Você pode testar essa funcionalidade apenas registrando no console que um usuário desconectou. <code>socket.on(&#39;disconnect&#39;, () =&gt; { /*anything you want to do on disconnect*/ });</code> Para garantir que os clientes tenham continuamente a contagem atualizada de usuários atuais, você deve diminuir os usuários atuais em 1 quando a desconexão acontecer e, em seguida, emitir o evento &quot;contagem de usuários&quot; com a contagem atualizada! <strong>Nota</strong> <br> Assim como &#39;desconectar&#39;, todos os outros eventos que um soquete pode emitir para o servidor devem ser manipulados dentro do ouvinte de conexão onde temos &#39;soquete&#39; definido. Envie sua página quando achar que está certo. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O servidor manipula a desconexão do evento de um soquete
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /socket.on.*("|")disconnect("|")/gi, ""); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Seu cliente está ouvindo o evento "contagem de usuários"
    testString: 'getUserInput => $.get(getUserInput("url")+ "/public/client.js") .then(data => { assert.match(data, /socket.on.*("|")user count("|")/gi, "Your client should be connection to server with the connection defined as socket"); }, xhr => { throw new Error(xhr.statusText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

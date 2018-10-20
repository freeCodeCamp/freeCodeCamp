---
id: 589fc832f9fc0f352b528e78
title: Announce New Users
challengeType: 2
videoUrl: ''
localeTitle: Anunciar novos usuários
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-socketio/">GitHub</a> . Muitas salas de bate-papo podem anunciar quando um usuário se conecta ou desconecta e, em seguida, exibir isso para todos os usuários conectados no bate-papo. Como se você já estivesse emitindo um evento para conectar e desconectar, você só precisará modificar esse evento para oferecer suporte a esse recurso. A maneira mais lógica de fazer isso é enviar três partes de dados com o evento: nome do usuário conectado / desconectado, a contagem de usuários atual e, se esse nome se encontra conectado ou desconectado. <hr> Altere o nome do evento para &#39;user&#39; e como os dados passam um objeto ao longo contendo os campos &#39;name&#39;, &#39;currentUsers&#39; e boolean &#39;connected&#39; (para ser verdadeiro se for connection, ou false para desconexão do usuário enviado). Certifique-se de fazer a alteração em ambos os pontos em que tivemos o evento &#39;user count&#39; e definimos a desconexão como enviada como false para o campo &#39;connected&#39; em vez de true, como o evento emitido na conexão. <code>io.emit(&#39;user&#39;, {name: socket.request.user.name, currentUsers, connected: true});</code> Agora seu cliente terá todas as informações necessárias para exibir corretamente a contagem atual de usuários e anunciar quando um usuário se conectar ou desconectar! Para lidar com esse evento no lado do cliente, devemos ouvir &quot;usuário&quot; e atualizar a contagem de usuários atual usando jQuery para alterar o texto de <code>#num-users</code> para &quot;{NUMBER} usuários on-line&quot;, bem como acrescentar um <code>&lt;li&gt;</code> para a lista não ordenada com o id &#39;messages&#39; com &#39;{NAME} tem {joined / left} o chat.&#39;. Uma implementação disso poderia se parecer com o seguinte: <pre> socket.on (&#39;user&#39;, function (data) {
  $ (&#39;# num-users&#39;). texto (data.currentUsers + &#39;users online&#39;);
  var message = data.name;
  if (data.connected) {
    mensagem + = &#39;entrou no chat.&#39;;
  } outro {
    mensagem + = &#39;saiu do chat.&#39;;
  }
  $ (&#39;# mensagens&#39;). append ($ (&#39;&lt;li&gt;&#39;). html (&#39;&lt;b&gt;&#39; + mensagem + &#39;&lt;\ / b&gt;&#39;));
}); </pre> Envie sua página quando achar que está certo. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Evento "user" é emitido com nome, currentUsers e conectado'
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /io.emit.*("|")user("|").*name.*currentUsers.*connected/gi, "You should have an event emitted named user sending name, currentUsers, and connected"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Cliente manipulando e exibindo adequadamente os novos dados do evento 'usuário'
    testString: 'getUserInput => $.get(getUserInput("url")+ "/public/client.js") .then(data => { assert.match(data, /socket.on.*("|")user("|")[^]*num-users/gi, "You should change the text of #num-users within on your client within the "user" even listener to show the current users connected"); assert.match(data, /socket.on.*("|")user("|")[^]*messages.*li/gi, "You should append a list item to #messages on your client within the "user" event listener to annouce a user came or went"); }, xhr => { throw new Error(xhr.statusText); })'

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

---
id: 589fc831f9fc0f352b528e75
title: Communicate by Emitting
challengeType: 2
videoUrl: ''
localeTitle: Comunique-se emitindo
---

## Descrição
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-socketio/">GitHub</a> . <dfn>Emit</dfn> é o modo mais comum de comunicação que você usará. Quando você emite algo do servidor para &#39;io&#39;, você envia o nome e os dados de um evento para todos os soquetes conectados. Um bom exemplo desse conceito seria emitir a contagem atual de usuários conectados cada vez que um novo usuário se conecta! <hr> Comece adicionando uma variável para acompanhar os usuários antes de onde você está ouvindo as conexões. <code>var currentUsers = 0;</code> Agora, quando alguém se conecta, você deve incrementar a contagem antes de emiti-la, assim você desejará adicionar o incrementador dentro do ouvinte de conexão. <code>++currentUsers;</code> Finalmente, após incrementar a contagem, você deve emitir o evento (ainda dentro do ouvinte de conexão). O evento deve ser chamado de &#39;user count&#39; e os dados devem ser apenas &#39;currentUsers&#39;. <code>io.emit(&#39;user count&#39;, currentUsers);</code> <hr> Agora você pode implementar uma maneira para o seu cliente escutar este evento! Da mesma forma que ouvir uma conexão no servidor, você usará a palavra <em>-</em> chave <em>on</em> . <pre> socket.on (&#39;user count&#39;, function (data) {
  console.log (dados);
}); </pre> Agora tente recarregar seu aplicativo e autenticar e você verá no seu console &#39;1&#39; representando a contagem atual de usuários! Tente carregar mais clientes e autenticar para ver o número subir. Envie sua página quando achar que está certo. </section>

## Instruções
<section id="instructions">
</section>

## Testes
<section id='tests'>

```yml
tests:
  - text: currentUsers é definido
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js").then(data => {assert.match(data, /currentUsers/gi, "You should have variable currentUsers defined");}, xhr => { throw new Error(xhr.statusText); })'
  - text: Servidor emite a contagem atual de usuários em cada nova conexão
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /io.emit.*("|")user count("|").*currentUsers/gi, "You should emit "user count" with data currentUsers"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Seu cliente está ouvindo o evento "contagem de usuários"
    testString: 'getUserInput => $.get(getUserInput("url")+ "/public/client.js") .then(data => { assert.match(data, /socket.on.*("|")user count("|")/gi, "Your client should be connection to server with the connection defined as socket"); }, xhr => { throw new Error(xhr.statusText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solução
<section id='solution'>

```js
// solution required
```
</section>

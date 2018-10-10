---
id: 589fc830f9fc0f352b528e74
title: Set up the Environment
challengeType: 2
videoUrl: ''
localeTitle: Configurar o ambiente
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-socketio/">GitHub</a> . Adicione Socket.IO como uma dependência e exija / instancie-o em seu servidor definido como &#39;io&#39; com o servidor http como um argumento. <code>const io = require(&#39;socket.io&#39;)(http);</code> A primeira coisa que precisa ser tratada é ouvir uma nova conexão do cliente. A palavra <dfn>-</dfn> chave <dfn>on</dfn> faz exatamente isso - escute um evento específico. Requer 2 argumentos: uma string contendo o título do evento que é emitido e uma função com a qual os dados são passados. No caso do nosso ouvinte de conexão, usamos o <em>soquete</em> para definir os dados no segundo argumento. Um soquete é um cliente individual que está conectado. Para ouvir conexões em nosso servidor, inclua o seguinte entre os comentários em seu projeto: <pre> io.on (&#39;conexão&#39;, soquete =&gt; {
  console.log (&#39;Um usuário se conectou&#39;);
}); </pre> Agora, para o cliente se conectar, basta adicionar o seguinte ao seu client.js, que é carregado pela página após a autenticação: <pre> / * global io * /
var socket = io (); </pre> O comentário suprime o erro que você normalmente veria, pois &#39;io&#39; não está definido no arquivo. Já adicionamos um CDN confiável à biblioteca Socket.IO na página em chat.pug. Agora tente carregar seu aplicativo e autenticar e você deverá ver no console do seu servidor &#39;Um usuário se conectou&#39;! <strong>Nota</strong> <br> <code>io()</code> funciona apenas quando se conecta a um socket hospedado no mesmo url / servidor. Para conectar-se a um soquete externo hospedado em outro lugar, você usaria <code>io.connect(&#39;URL&#39;);</code> . Envie sua página quando achar que está certo. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Socket.IO é uma dependência
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/package.json") .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "socket.io", "Your project should list "socket.io" as a dependency"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Socket.IO foi devidamente requerido e instanciado
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js").then(data => {assert.match(data, /io.*=.*require.*("|")socket.io("|").*http/gi, "You should correctly require and instantiate socket.io as io.");}, xhr => { throw new Error(xhr.statusText); })'
  - text: O Socket.IO deve estar atento a conexões
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /io.on.*("|")connection("|").*socket/gi, "io should listen for "connection" and socket should be the 2nd arguments variable"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Seu cliente deve se conectar ao seu servidor
    testString: 'getUserInput => $.get(getUserInput("url")+ "/public/client.js") .then(data => { assert.match(data, /socket.*=.*io/gi, "Your client should be connection to server with the connection defined as socket"); }, xhr => { throw new Error(xhr.statusText); })'

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

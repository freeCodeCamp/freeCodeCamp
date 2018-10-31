---
id: 589fc832f9fc0f352b528e79
title: Send and Display Chat Messages
challengeType: 2
videoUrl: ''
localeTitle: Enviar e exibir mensagens de bate-papo
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-socketio/">GitHub</a> . É hora de você começar a permitir que os clientes enviem uma mensagem de chat para o servidor para emitir para todos os clientes! Já no seu arquivo client.js você deve ver que já existe um bloco de manuseio de código quando o formulário de mensagem é enviado! ( <code>$(&#39;form&#39;).submit(function(){ /*logic*/ });</code> ) <hr> Dentro do código que você está processando o formulário, envie um evento depois de definir &#39;messageToSend&#39;, mas antes de limpar a caixa de texto <code>#m</code> . O evento deve ser chamado &#39;mensagem de chat&#39; e os dados devem ser apenas &#39;messageToSend&#39;. <code>socket.emit(&#39;chat message&#39;, messageToSend);</code> Agora no seu servidor você deve estar ouvindo o socket para o evento &#39;mensagem de chat&#39; com os dados sendo nomeados &#39;message&#39;. Uma vez que o evento é recebido, ele deve emitir o evento &#39;mensagem de bate-papo&#39; para todos os soquetes <code>io.emit</code> com os dados sendo um objeto contendo &#39;nome&#39; e &#39;mensagem&#39;. Agora, no seu cliente novamente, você deve ouvir o evento &#39;mensagem de bate-papo&#39; e, quando recebido, acrescentar um item da lista a # <code>#messages</code> com o nome de dois-pontos e a mensagem! Neste ponto, o chat deve estar totalmente funcional e enviar mensagens para todos os clientes! Envie sua página quando achar que está certo. Se você estiver com erros, você pode verificar o projeto até este ponto <a href="https://gist.github.com/JosephLivengood/3e4b7750f6cd42feaa2768458d682136">aqui para o servidor</a> e <a href="https://gist.github.com/JosephLivengood/41ba76348df3013b7870dc64861de744">aqui para o cliente</a> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O servidor escuta "mensagem de bate-papo" e emite-a corretamente
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /socket.on.*("|")chat message("|")[^]*io.emit.*("|")chat message("|").*name.*message/gi, "Your server should listen to the socket for "chat message" then emit to all users "chat message" with name and message in the data object"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Cliente manipulando e exibindo adequadamente os novos dados do evento 'mensagem de bate-papo'
    testString: 'getUserInput => $.get(getUserInput("url")+ "/public/client.js") .then(data => { assert.match(data, /socket.on.*("|")chat message("|")[^]*messages.*li/gi, "You should append a list item to #messages on your client within the "chat message" event listener to display the new message"); }, xhr => { throw new Error(xhr.statusText); })'

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

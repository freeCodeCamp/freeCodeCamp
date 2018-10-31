---
id: 589fc831f9fc0f352b528e77
title: Authentication with Socket.IO
challengeType: 2
videoUrl: ''
localeTitle: Autenticação com Socket.IO
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-socketio/">GitHub</a> . Atualmente, você não pode determinar quem está conectado ao seu soquete da web. Enquanto o &#39;req.user&#39; contêiner o objeto do usuário, somente quando o usuário interage com o servidor da web e com os sockets da web, você não tem req (request) e, portanto, nenhum dado do usuário. Uma maneira de resolver o problema de saber quem está conectado ao seu soquete da web é analisando e decodificando o cookie que contém a sessão do passaporte e, em seguida, desserializando-o para obter o objeto do usuário. Felizmente, há um pacote no NPM apenas para isso que transforma uma tarefa complexa em algo simples! <hr> Adicione &#39;passport.socketio&#39; como uma dependência e exija-o como &#39;passportSocketIo&#39;. Agora só precisamos informar ao Socket.IO para usá-lo e definir as opções. Certifique-se de que isso seja adicionado antes do código de soquete existente e não no listener de conexão existente. Para o seu servidor, ele deve ter a seguinte aparência: <pre> io.use (passportSocketIo.authorize ({
  cookieParser: cookieParser,
  chave: &#39;express.sid&#39;,
  secreto: process.env.SESSION_SECRET,
  store: sessionStore
})); </pre> Você também pode, opcionalmente, passar &#39;sucesso&#39; e &#39;falhar&#39; com uma função que será chamada depois que o processo de autenticação for concluído quando um cliente tentar se conectar. O objeto do usuário agora está acessível em seu objeto de soquete como <code>socket.request.user</code> . Por exemplo, agora você pode adicionar o seguinte: <code>console.log(&#39;user &#39; + socket.request.user.name + &#39; connected&#39;);</code> e ele irá logar no console do servidor que se conectou! Envie sua página quando achar que está certo. Se você estiver com erros, confira o projeto até este ponto <a href="https://gist.github.com/JosephLivengood/a9e69ff91337500d5171e29324e1ff35">aqui</a> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: passportSocketIo é uma dependência
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/package.json") .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "passport.socketio", "Your project should list "passport.socketio" as a dependency"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: passportSocketIo é apropriadamente exigido
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js").then(data => { assert.match(data, /require\(([""])passport\.socketio\1\)/gi, "You should correctly require and instantiate "passport.socketio"");}, xhr => { throw new Error(xhr.statusText); })'
  - text: O passportSocketIo está configurado corretamente
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /io\.use\(.+\.authorize\(/gi, "You should register "passport.socketio" as socket.io middleware and provide it correct options"); }, xhr => { throw new Error(xhr.statusText); })'

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

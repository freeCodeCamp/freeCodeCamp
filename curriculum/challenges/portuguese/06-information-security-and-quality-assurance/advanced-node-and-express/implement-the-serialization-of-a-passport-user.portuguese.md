---
id: 5895f70cf9fc0f352b528e67
title: Implement the Serialization of a Passport User
challengeType: 2
videoUrl: ''
localeTitle: Implementar a serialização de um usuário do Passport
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . No momento, não estamos carregando um objeto de usuário, já que não configuramos nosso banco de dados. Isso pode ser feito de muitas maneiras diferentes, mas para o nosso projeto nós nos conectaremos ao banco de dados uma vez quando iniciarmos o servidor e mantermos uma conexão persistente durante todo o ciclo de vida do aplicativo. Para fazer isso, adicione o MongoDB como uma dependência e exija no seu servidor. ( <code>const mongo = require(&#39;mongodb&#39;).MongoClient;</code> ) Agora queremos conectar a nossa base de dados e começar a escutar pedidos. O objetivo disso é não permitir solicitações antes que nosso banco de dados seja conectado ou se houver um erro no banco de dados. Para realizar isso, você desejará incluir sua serialização e seu ouvinte de aplicativo nos seguintes itens: <pre> mongo.connect (process.env.DATABASE, (err, db) =&gt; {
    if (err) {
        console.log (&#39;Erro de banco de dados:&#39; + err);
    } outro {
        console.log (&#39;Conexão de banco de dados bem sucedida&#39;);
<pre> <code> //serialization and app.listen</code> </pre>
<p> }}); </p></pre> Você pode agora descomentar o bloco em deserializeUser e remover o seu <code>done(null, null)</code> . Certifique-se de definir <em>DATABASE</em> no seu arquivo .env para a string de conexão do seu banco de dados (por exemplo: <code>DATABASE=mongodb://admin:pass@mlab.com:12345/my-project</code> ). Você pode configurar um banco de dados gratuito no <a href="https://mlab.com/welcome/">mLab</a> . Parabéns, você terminou de configurar a serialização! Envie sua página quando achar que está certo. Se você estiver com erros, confira o projeto concluído até este ponto <a href="https://gist.github.com/JosephLivengood/e192e809a1d27cb80dc2c6d3467b7477">aqui</a> . <p></p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Conexão de banco de dados está presente
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /mongo.connect/gi, "You should have created a connection to your database"); assert.match(data, /mongo.connect[^]*app.listen[^]*}[^]*}/gi, "You should have your app.listen nested at within your database connection at the bottom"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: 'A desserialização agora está usando corretamente o banco de dados e <code>done(null, null)</code> é apagada'
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.notMatch(data, /null,( |)null/gi, "The callback in deserializeUser of (null, null) should be completely removed for the db block uncommented out"); }, xhr => { throw new Error(xhr.statusText); })'

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

---
id: 5895f70cf9fc0f352b528e66
title: Serialization of a User Object
challengeType: 2
videoUrl: ''
localeTitle: Serialização de um objeto de usuário
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . Serialização e desserialização são conceitos importantes em relação à autenticação. Serializar um objeto significa converter seu conteúdo em uma pequena <em>chave</em> essencialmente que pode ser desserializada no objeto original. Isso é o que nos permite saber quem se comunicou com o servidor sem ter que enviar os dados de autenticação como nome de usuário e senha em cada solicitação para uma nova página. Para configurá-lo corretamente, precisamos ter uma função de serialização e uma função de desserialização. No passaporte, criamos estes com <code>passport.serializeUser( OURFUNCTION )</code> e <code>passport.deserializeUser( OURFUNCTION )</code> O serializeUser é chamado com 2 argumentos, o objeto de usuário completo e um retorno de chamada usado pelo passaporte. Retornado no retorno de chamada deve ser uma chave única para identificar esse usuário, o mais fácil de usar sendo os usuários _id no objeto como deveria ser único, uma vez que gerou pelo MongoDb. Da mesma forma, o deserializeUser é chamado com essa chave e também uma função de retorno de chamada para o passaporte, mas, desta vez, precisamos pegar essa chave e retornar o objeto completo do usuário ao retorno de chamada. Para fazer uma busca de consulta por um Mongo _id você terá que criar <code>const ObjectID = require(&#39;mongodb&#39;).ObjectID;</code> e, em seguida, para usá-lo, você chama <code>new ObjectID(THE_ID)</code> . Certifique-se de adicionar o MongoDB como uma dependência. Você pode ver isso nos exemplos abaixo: <pre> passport.serializeUser ((user, done) =&gt; {
   done (null, user._id);
 }); </pre><br><pre> passport.deserializeUser ((id, done) =&gt; {
        db.collection (&#39;users&#39;). findOne (
            {_id: new ObjectID (id)},
            (err, doc) =&gt; {
                done (null, doc);
            }
        );
    }); </pre> NOTA: Este deserializeUser irá lançar um erro até que nós configuremos o BD na próxima etapa então comente todo o bloco e apenas chame <code>done(null, null)</code> na função deserializeUser. Envie sua página quando achar que está certo. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Serialize a função do usuário correta
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /passport.serializeUser/gi, "You should have created your passport.serializeUser function"); assert.match(data, /null, user._id/gi, "There should be a callback in your serializeUser with (null, user._id)"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Desserializar a função do usuário correta
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /passport.deserializeUser/gi, "You should have created your passport.deserializeUser function"); assert.match(data, /null,( |)null/gi, "There should be a callback in your deserializeUser with (null, null) for now"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: MongoDB é uma dependência
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/package.json") .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "mongodb", "Your project should list "mongodb" as a dependency"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: 'Mongodb corretamente necessário, incluindo o ObjectId'
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /require.*("|")mongodb("|")/gi, "You should have required mongodb"); assert.match(data, /new ObjectID.*id/gi, "Even though the block is commented out, you should use new ObjectID(id) for when we add the database"); }, xhr => { throw new Error(xhr.statusText); })'

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

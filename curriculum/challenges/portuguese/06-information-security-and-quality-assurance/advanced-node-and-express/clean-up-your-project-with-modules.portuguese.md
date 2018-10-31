---
id: 589690e6f9fc0f352b528e6e
title: Clean Up Your Project with Modules
challengeType: 2
videoUrl: ''
localeTitle: Limpe seu projeto com módulos
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . Agora tudo que você tem está no seu arquivo server.js. Isso pode dificultar o gerenciamento de código que não é muito expansível. Crie dois novos arquivos: Routes.js e Auth.js Ambos devem começar com o seguinte código: <pre> module.exports = function (app, db) {
<p> } </p></pre> Agora, na parte superior do arquivo do servidor, exija esses arquivos como: <code>const routes = require(&#39;./routes.js&#39;);</code> Logo após estabelecer uma conexão bem-sucedida com o banco de dados instancie cada um deles como: <code>routes(app, db)</code> Por fim, pegue todas as rotas do seu servidor e cole-as nos novos arquivos e remova-os do arquivo do servidor. Também tome o ensureAuthenticated desde que criamos essa função de middleware para roteamento especificamente. Agora você terá que adicionar corretamente as dependências usadas, como <code>const passport = require(&#39;passport&#39;);</code> , bem no topo acima da linha de exportação no seu arquivo routes.js. Continue adicionando-os até que não haja mais erros, e seu arquivo de servidor não tenha mais nenhum roteamento! Agora, faça a mesma coisa no seu arquivo auth.js com todas as coisas relacionadas à autenticação, como a serialização e a configuração da estratégia local e apague-as do arquivo do servidor. Certifique-se de adicionar as dependências e chamar <code>auth(app,db)</code> no servidor no mesmo local. Certifique-se de ter <code>auth(app, db)</code> antes das <code>routes(app, db)</code> já que a nossa rota de registro depende do passaporte ser iniciado! Parabéns, você está no final desta seção do Advanced Node and Express e tem um belo código para mostrar! Envie sua página quando achar que está certo. Se você estiver com erros, confira um exemplo do projeto concluído <a href="https://glitch.com/#!/project/delicious-herring">aqui</a> . <p></p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Módulos presentes
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /require.*("|").\/routes.js("|")/gi, "You should have required your new files"); assert.match(data, /mongo.connect[^]*routes/gi, "Your new modules should be called after your connection to the database"); }, xhr => { throw new Error(xhr.statusText); })'

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

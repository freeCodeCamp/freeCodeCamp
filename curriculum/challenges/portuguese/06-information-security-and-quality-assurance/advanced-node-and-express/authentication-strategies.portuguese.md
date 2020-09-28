---
id: 5895f70df9fc0f352b528e68
title: Authentication Strategies
challengeType: 2
videoUrl: ''
localeTitle: Estratégias de Autenticação
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . Uma estratégia é uma maneira de autenticar um usuário. Você pode usar uma estratégia para permitir que os usuários se autentiquem com base em informações salvas localmente (se você fizer com que elas se registrem primeiro) ou em vários provedores, como o Google ou o GitHub. Para este projeto, vamos criar uma estratégia local. Para ver uma lista das centenas de estratégias, visite o site Passports <a href="http://passportjs.org/">aqui</a> . Adicione o <em>passport-local</em> como uma dependência e adicione-o ao seu servidor da seguinte forma: <code>const LocalStrategy = require(&#39;passport-local&#39;);</code> Agora você terá que dizer ao passport para <b>usar</b> um objeto LocalStartegy instanciado com algumas configurações definidas. Certifique-se de que isso e tudo a partir deste ponto é encapsulado na conexão com o banco de dados, pois depende dele! <pre> passport.use (novo LocalStrategy (
  função (nome de usuário, senha, feito) {
    db.collection (&#39;users&#39;). findOne ({username: username}, função (err, user) {
      console.log (&#39;Usuário&#39; + nome de usuário + &#39;tentou efetuar login.&#39;);
      if (err) {retorno feito (err); }
      if (! user) {retorno concluído (null, false); }
      if (password! == user.password) {retorno feito (null, false); }
      retorno feito (null, usuário);
    });
  }
)); </pre> Isso está definindo o processo a ser tomado quando tentamos autenticar alguém localmente. Primeiro, ele tenta encontrar um usuário em nosso banco de dados com o nome de usuário inserido, depois verifica se a senha corresponde e, finalmente, se não houver erros que verifiquemos, como uma senha incorreta, o objeto users será retornado e eles serão exibidos. autenticado. Muitas estratégias são configuradas usando diferentes configurações, em geral é fácil configurá-lo com base no README desse repositório de estratégias. Um bom exemplo disso é a estratégia do GitHub, onde não precisamos nos preocupar com um nome de usuário ou senha, porque o usuário será enviado para a página de autenticação do GitHub para autenticar e, desde que esteja logado e concordar, o GitHub retorna seu perfil para nos usar. Na próxima etapa, vamos configurar como chamar a estratégia de autenticação para validar um usuário com base nos dados do formulário! Envie sua página quando achar que está correta até o momento. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Passport-local é uma dependência
    testString: ' getUserInput => $.get(getUserInput("url")+ "/_api/package.json") .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "passport-local", "Your project should list "passport-local " as a dependency"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Passport-local corretamente requerido e configuração
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /require.*("|")passport-local("|")/gi, "You should have required passport-local"); assert.match(data, /new LocalStrategy/gi, "You should have told passport to use a new strategy"); assert.match(data, /findOne/gi, "Your new local strategy should use the findOne query to find a username based on the inputs"); }, xhr => { throw new Error(xhr.statusText); })'

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

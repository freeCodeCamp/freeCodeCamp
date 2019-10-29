---
id: 589a69f5f9fc0f352b528e71
title: Implementation of Social Authentication II
challengeType: 2
videoUrl: ''
localeTitle: Implementação da Autenticação Social II
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socialauth/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-socialauth/">GitHub</a> . A última parte da configuração da autenticação do GitHub é criar a estratégia em si. Para isso, você precisará adicionar a dependência de &#39;passport-github&#39; ao seu projeto e requerê-lo como GithubStrategy como <code>const GitHubStrategy = require(&#39;passport-github&#39;).Strategy;</code> . Para configurar a estratégia do GitHub, você precisa dizer ao <b>passport</b> para <b>usar</b> um <b>GithubStrategy</b> instanciado, que aceita 2 argumentos: Um objeto (contendo <em>clientID</em> , <em>clientSecret</em> e <em>callbackURL</em> ) e uma função a ser chamada quando um usuário é autenticado com sucesso, o que determinaremos se o usuário for novo e quais campos salvar inicialmente no objeto de banco de dados do usuário. Isso é comum em muitas estratégias, mas algumas podem exigir mais informações, conforme descrito no README do github dessa estratégia específica. Por exemplo, o Google também exige um <em>escopo</em> que determine o tipo de informação que sua solicitação está pedindo e peça ao usuário que aprove esse acesso. A atual estratégia que estamos implementando tem seu uso descrito <a>aqui</a> , mas estamos passando por tudo isso aqui no freeCodeCamp! Veja como sua nova estratégia deve olhar neste ponto: <pre> passport.use (new GitHubStrategy ({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: / * INSERIR URL DE CHAMADA INSERIDO NO GITHUB AQUI * /
  }
  function (accessToken, refreshToken, profile, cb) {
      console.log (perfil);
      // Lógica do banco de dados aqui com retorno de chamada contendo nosso objeto de usuário
  }
)); </pre> Sua autenticação ainda não será bem-sucedida e, na verdade, lançará um erro, sem a lógica do banco de dados e o retorno de chamada, mas você deverá registrar no seu console seu perfil do GitHub, se tentar! Envie sua página quando achar que está certo. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Dependência adicionada
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/package.json") .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "passport-github", "Your project should list "passport-github" as a dependency"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Dependência requerida
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /require.*("|")passport-github("|")/gi, "You should have required passport-github"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Configuração da estratégia do GitHub corretamente até agora
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /passport.use.*new GitHubStrategy/gi, "Passport should use a new GitHubStrategy"); assert.match(data, /callbackURL:( |)("|").*("|")/gi, "You should have a callbackURL"); assert.match(data, /process.env.GITHUB_CLIENT_SECRET/g, "You should use process.env.GITHUB_CLIENT_SECRET"); assert.match(data, /process.env.GITHUB_CLIENT_ID/g, "You should use process.env.GITHUB_CLIENT_ID"); }, xhr => { throw new Error(xhr.statusText); })'

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

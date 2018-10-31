---
id: 5895f70df9fc0f352b528e6a
title: Create New Middleware
challengeType: 2
videoUrl: ''
localeTitle: Crie um novo middleware
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . Como em qualquer usuário pode apenas ir para / perfil se eles autenticados ou não, digitando o URL. Queremos evitar isso verificando se o usuário é autenticado antes de renderizar a página de perfil. Este é o exemplo perfeito de quando criar um middleware. O desafio aqui é criar a função de middleware <code>ensureAuthenticated(req, res, next)</code> , que verificará se um usuário é autenticado chamando os passaportes isAuthenticated na <em>solicitação,</em> que por sua vez verifica se <em>req.user</em> deve ser definido. Se é então <em>next ()</em> deve ser chamado, caso contrário, podemos apenas responder à solicitação com um redirecionamento para a nossa página inicial para login. Uma implementação deste middleware é: <pre> function ensureAuthenticated (req, res, next) {
  if (req.isAuthenticated ()) {
      return next ();
  }
  res.redirect (&#39;/&#39;);
}; </pre> Agora, adicione <em>ensureAuthenticated</em> como um middleware para a solicitação da página de perfil antes do argumento para a solicitação get contendo a função que renderiza a página. <pre> app.route (&#39;/ profile&#39;)
  .get (ensureAuthenticated, (req, res) =&gt; {
       res.render (process.cwd () + &#39;/ views / pug / profile&#39;);
  }); </pre> Envie sua página quando achar que está certo. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O middleware ensureAuthenticated deve ser implementado e em nossa rota / profile
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /ensureAuthenticated[^]*req.isAuthenticated/gi, "Your ensureAuthenticated middleware should be defined and utilize the req.isAuthenticated function"); assert.match(data, /profile[^]*get[^]*ensureAuthenticated/gi, "Your ensureAuthenticated middleware should be attached to the /profile route"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Uma solicitação Get para / profile redireciona corretamente para / uma vez que não somos autenticados
    testString: 'getUserInput => $.get(getUserInput("url")+ "/profile") .then(data => { assert.match(data, /Home page/gi, "An attempt to go to the profile at this point should redirect to the homepage since we are not logged in"); }, xhr => { throw new Error(xhr.statusText); })'

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

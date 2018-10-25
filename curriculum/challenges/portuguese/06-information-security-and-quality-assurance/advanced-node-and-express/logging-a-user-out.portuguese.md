---
id: 58965611f9fc0f352b528e6c
title: Logging a User Out
challengeType: 2
videoUrl: ''
localeTitle: Como desconectar um usuário
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . Criar a lógica de logout é fácil. A rota deve apenas não autenticar o usuário e redirecionar para a home page, em vez de renderizar qualquer visualização. No passaporte, não autenticar um usuário é tão fácil quanto apenas chamar <code>req.logout();</code> antes de redirecionar. <pre> app.route (&#39;/ logout&#39;)
  .get ((req, res) =&gt; {
      req.logout ();
      res.redirect (&#39;/&#39;);
  }); </pre> Você deve ter notado que também não estamos lidando com páginas ausentes (404), a maneira mais comum de lidar com isso no Node é com o seguinte middleware. Vá em frente e adicione isso depois de todas as outras rotas: <pre> app.use ((req, res, next) =&gt; {
  res.status (404)
    .type (&#39;text&#39;)
    .send (&#39;Não encontrado&#39;);
}); </pre> Envie sua página quando achar que está certo. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Rota de logout
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /req.logout/gi, "You should be call req.logout() in youre /logout route"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: O logout deve redirecionar para a página inicial /
    testString: 'getUserInput => $.get(getUserInput("url")+ "/logout") .then(data => { assert.match(data, /Home page/gi, "When a user logs out they should be redirected to the homepage"); }, xhr => { throw new Error(xhr.statusText); })'

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

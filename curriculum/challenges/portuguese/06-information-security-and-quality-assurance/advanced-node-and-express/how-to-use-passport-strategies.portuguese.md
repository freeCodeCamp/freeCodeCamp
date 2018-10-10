---
id: 5895f70df9fc0f352b528e69
title: How to Use Passport Strategies
challengeType: 2
videoUrl: ''
localeTitle: Como usar estratégias de passaporte
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . No arquivo index.pug fornecido, existe realmente um formulário de login. Ele foi anteriormente oculto por causa do javascript in-line <code>if showLogin</code> com o formulário recuado após ele. Antes de showLogin como uma variável nunca foi definida, ela nunca renderiza o bloco de código que contém o formulário. Vá em frente e no res.render para essa página, adicione uma nova variável ao objeto <code>showLogin: true</code> . Quando você atualiza sua página, você deve ver o formulário! Este formulário é configurado para <b>POST</b> on <em>/ login,</em> então é nesse local que devemos configurar para aceitar o POST e autenticar o usuário. Para este desafio, você deve adicionar a rota / login para aceitar uma solicitação POST. Para autenticar nesta rota, você precisa adicionar um middleware para fazer isso antes de enviar uma resposta. Isto é feito simplesmente passando outro argumento com o middleware antes de sua <code>function(req,res)</code> com sua resposta! O middleware a ser usado é <code>passport.authenticate(&#39;local&#39;)</code> . <em>O passport.authenticate</em> também pode ter algumas opções como um argumento como: <code>{ failureRedirect: &#39;/&#39; }</code> que é incrivelmente útil, então não deixe de adicioná-lo também. Como resposta após usar o middleware (que será chamado apenas se o middleware de autenticação passar) deve ser redirecionar o usuário para <em>/ profile</em> e essa rota deve renderizar a view &#39;profile.pug&#39;. Se a autenticação foi bem sucedida, o objeto do usuário será salvo no <em>req.user</em> . Agora, neste ponto, se você digitar um nome de usuário e senha no formulário, ele deve redirecionar para a home page <em>/</em> e no console do seu servidor deve ser &#39;Usuário {USERNAME} tentou fazer o login.&#39; já que atualmente não podemos fazer login de um usuário que não está registrado. Envie sua página quando achar que está certo. Se você estiver com erros, confira o projeto concluído até este ponto <a href="https://gist.github.com/JosephLivengood/8a335d1a68ed9170da02bb9d8f5b71d5">aqui</a> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todas as etapas implementadas corretamente no server.js
    testString: ' getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /showLogin:( |)true/gi, "You should be passing the variable "showLogin" as true to your render function for the homepage"); assert.match(data, /failureRedirect:( |)("|")\/("|")/gi, "Your code should include a failureRedirect to the "/" route"); assert.match(data, /login[^]*post[^]*local/gi, "You should have a route for login which accepts a POST and passport.authenticates local"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Uma solicitação POST para / login redireciona corretamente para /
    testString: 'getUserInput => $.post(getUserInput("url")+ "/login") .then(data => { assert.match(data, /Looks like this page is being rendered from Pug into HTML!/gi, "A login attempt at this point should redirect to the homepage since we do not have any registered users"); }, xhr => { throw new Error(xhr.statusText); })'

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

---
id: 5895f70ef9fc0f352b528e6b
title: How to Put a Profile Together
challengeType: 2
videoUrl: ''
localeTitle: Como colocar um perfil juntos
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . Agora que podemos garantir que o usuário que acessa o <em>/ profile</em> seja autenticado, podemos usar as informações contidas em &#39;req.user&#39; em nossa página! Vá em frente e passe o objeto contendo o <em>nome de usuário</em> variável igual a &#39;req.user.username&#39; para o método de renderização da visualização de perfil. Em seguida, vá para a visualização &#39;profile.pug&#39; e adicione a linha <code>h2.center#welcome Welcome, #{username}!</code> criando o elemento h2 com a classe &#39;center&#39; e id &#39;welcome&#39; contendo o texto &#39;Welcome&#39; e o nome de usuário! Também no perfil, adicione um link para <em>/ logout</em> . Essa rota hospedará a lógica para não autenticar um usuário. <code>a(href=&#39;/logout&#39;) Logout</code> Envie sua página quando achar que está certo. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Corretamente adicionado uma variável de renderização Pug para / profile
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /\/views\/pug\/profile[^]*username:( |)req.user.username/gi, "You should be passing the variable username with req.user.username into the render function of the profile page"); }, xhr => { throw new Error(xhr.statusText); })'

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

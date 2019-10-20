---
id: 5895f70cf9fc0f352b528e65
title: Set up Passport
challengeType: 2
videoUrl: ''
localeTitle: Configurar Passaporte
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . É hora de configurar o <em>Passport</em> para que possamos finalmente começar a permitir que um usuário se registre ou faça login em uma conta! Além do Passport, usaremos a sessão Express para lidar com as sessões. O uso desse middleware salva o id da sessão como um cookie no cliente e nos permite acessar os dados da sessão usando esse id no servidor. Dessa forma, mantemos as informações da conta pessoal fora do cookie usado pelo cliente para verificar ao nosso servidor que elas estão autenticadas e apenas manter a <em>chave</em> para acessar os dados armazenados no servidor. Para configurar o Passport para uso em seu projeto, você precisará adicioná-lo como uma dependência primeiro em seu package.json. <code>&quot;passport&quot;: &quot;^0.3.2&quot;</code> Além disso, inclua também a sessão Express como uma dependência. Express-session tem uma tonelada de recursos avançados que você pode usar, mas por enquanto vamos usar apenas o básico! <code>&quot;express-session&quot;: &quot;^1.15.0&quot;</code> Você precisará configurar as configurações da sessão agora e inicializar o Passport. Certifique-se primeiro de criar as variáveis ​​&#39;session&#39; e &#39;passport&#39; para exigir &#39;express-session&#39; e &#39;passport&#39; respectivamente. Para configurar seu aplicativo expresso para usar, use a sessão para definir apenas algumas opções básicas. Não se esqueça de adicionar &#39;SESSION_SECRET&#39; ao seu arquivo .env e atribuir um valor aleatório. Isso é usado para calcular o hash usado para criptografar seu cookie! <pre> app.use (session ({
  secreto: process.env.SESSION_SECRET,
  resave: true
  saveUninitialized: true,
})); </pre> Você também pode ir em frente e dizer ao seu aplicativo expresso para <b>usar</b> &#39;passport.initialize ()&#39; e &#39;passport.session ()&#39;. (Por exemplo, <code>app.use(passport.initialize());</code> ) Envie sua página quando achar que está certo. Se você estiver com erros, confira o projeto concluído até este ponto <a href="https://gist.github.com/JosephLivengood/338a9c5a326923c3826a666d430e65c3">aqui</a> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Passort e Express-session são dependências
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/package.json") .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "passport", "Your project should list "passport" as a dependency"); assert.property(packJson.dependencies, "express-session", "Your project should list "express-session" as a dependency"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Dependências corretamente requeridas
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /require.*("|")passport("|")/gi, "You should have required passport"); assert.match(data, /require.*("|")express-session("|")/gi, "You should have required express-session"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: O aplicativo expresso usa novas dependências
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /passport.initialize/gi, "Your express app should use "passport.initialize()""); assert.match(data, /passport.session/gi, "Your express app should use "passport.session()""); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Sessão e sessão secretos corretamente configurados
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /secret:( |)process.env.SESSION_SECRET/gi, "Your express app should have express-session set up with your secret as process.env.SESSION_SECRET"); }, xhr => { throw new Error(xhr.statusText); })'

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

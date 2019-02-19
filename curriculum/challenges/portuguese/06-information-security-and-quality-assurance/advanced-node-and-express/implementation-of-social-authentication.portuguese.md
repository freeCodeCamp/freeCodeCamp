---
id: 589a69f5f9fc0f352b528e70
title: Implementation of Social Authentication
challengeType: 2
videoUrl: ''
localeTitle: Implementação de Autenticação Social
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socialauth/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-socialauth/">GitHub</a> . O caminho básico que esse tipo de autenticação seguirá no seu aplicativo é: <ol><li> Usuário clica em um botão ou link enviando-os para o nosso percurso para autenticar usando uma estratégia específica (EG. GitHub) </li><li> Sua rota chama <code>passport.authenticate(&#39;github&#39;)</code> que os redireciona para o GitHub. </li><li> A página em que o usuário acessa, no GitHub, permite que eles efetuem login, caso ainda não estejam. Em seguida, ele pede que eles aprove o acesso ao perfil deles em nosso aplicativo. </li><li> Em seguida, o usuário é retornado ao nosso aplicativo em um URL de retorno de chamada específico com o perfil dele, se ele for aprovado. </li><li> Eles agora estão autenticados e seu aplicativo deve verificar se é um perfil de retorno ou salvá-lo em seu banco de dados, se não estiver. </li></ol> Estratégias com o OAuth exigem que você tenha pelo menos um <em>ID do cliente</em> e um <em>Segredo do cliente,</em> que é uma forma de verificar de quem é a solicitação de autenticação e se ela é válida. Estes são obtidos a partir do site com o qual você está tentando implementar a autenticação, como o GitHub, e são exclusivos do seu aplicativo - <b>NÃO PODEM SER COMPARTILHADOS</b> e nunca devem ser carregados em um repositório público ou gravados diretamente em seu código. Uma prática comum é colocá-los em seu arquivo <em>.env</em> e referenciá-los como: <code>process.env.GITHUB_CLIENT_ID</code> . Para este desafio, vamos usar a estratégia do GitHub. A obtenção da <em>ID do cliente e do Segredo <em>no GitHub é feita nas configurações do perfil da conta em &quot;configurações do desenvolvedor&quot; e &quot; <a href="https://github.com/settings/developers">Aplicativos OAuth</a> &quot;. Clique em &quot;Registrar um novo aplicativo&quot;, nomeie seu aplicativo, cole o URL na página inicial ( <b>não o URL do código do projeto</b> ) e, por último, no URL de retorno, cole no mesmo URL da página inicial, mas com &quot;/ auth / github / callback &#39;adicionado em. É para onde os usuários serão redirecionados para que possamos lidar após a autenticação no GitHub. Salve as informações retornadas como &#39;GITHUB_CLIENT_ID&#39; e &#39;GITHUB_CLIENT_SECRET&#39; em seu arquivo .env. Em seu projeto remixado, crie duas rotas aceitando solicitações GET: / auth / github e / auth / github / callback. O primeiro deve apenas chamar o passaporte para autenticar o &#39;github&#39; e o segundo deve chamar o passaporte para autenticar o &#39;github&#39; com um redirecionamento de falha para &#39;/&#39; e, se for bem-sucedido, redirecionar para &#39;/ profile&#39; (semelhante ao nosso último projeto). Um exemplo de como &#39;/ auth / github / callback&#39; deve ser semelhante é como lidamos com um login normal em nosso último projeto:</em></em> <pre> <em><em>app.route (&#39;/ login&#39;)
  .post (passport.authenticate (&#39;local&#39;, {failureRedirect: &#39;/&#39;}), (req, res) =&gt; {
    res.redirect (&#39;/ profile&#39;);
  });</em></em> </pre> <em><em>Envie sua página quando achar que está certo. Se você estiver com erros, confira o projeto até este ponto <a href="https://gist.github.com/JosephLivengood/28ea2cae7e1dc6a53d7f0c42d987313b">aqui</a> .</em></em> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Route / auth / github correto
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /("|")\/auth\/github("|")[^]*get.*passport.authenticate.*github/gi, "Route auth/github should only call passport.authenticate with github"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Route / auth / github / callback correto
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /("|")\/auth\/github\/callback("|")[^]*get.*passport.authenticate.*github.*failureRedirect:( |)("|")\/("|")/gi, "Route auth/github/callback should accept a get request and call passport.authenticate for github with a failure redirect to home"); }, xhr => { throw new Error(xhr.statusText); })'

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

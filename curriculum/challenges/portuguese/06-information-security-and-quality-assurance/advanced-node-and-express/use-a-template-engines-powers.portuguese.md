---
id: 5895f70bf9fc0f352b528e64
title: Use a Template Engine's Powers
challengeType: 2
videoUrl: ''
localeTitle: Use os poderes de um motor de modelo
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . Um dos maiores recursos de usar um mecanismo de modelo é poder passar variáveis ​​do servidor para o arquivo de modelo antes de renderizá-lo para HTML. No seu arquivo Pug, você está prestes a usar uma variável referenciando o nome da variável como <code>#{variable_name}</code> inline com outro texto em um elemento ou usando um lado igual no elemento sem um espaço como <code>p= variable_name</code> que define esse p texto dos elementos para igualar a variável. Nós recomendamos fortemente que você olhe a sintaxe e a estrutura do Pug <a href="https://github.com/pugjs/pug">aqui</a> em seu README do Githubs. Pug tem tudo a ver com o uso de espaços em branco e guias para mostrar elementos aninhados e reduzir a quantidade de código necessária para criar um site bonito. Olhando para o nosso arquivo pug &#39;index.pug&#39; incluído no seu projeto, usamos as variáveis <em>title</em> e <em>message</em> Para passar essas informações sozinho do nosso servidor, você precisará adicionar um objeto como um segundo argumento ao seu <em>res.render</em> com as variáveis ​​e seu valor. Por exemplo, passe esse objeto ao longo da configuração das variáveis ​​para sua visualização de índice: <code>{title: &#39;Hello&#39;, message: &#39;Please login&#39;</code> Deve ser semelhante a: <code>res.render(process.cwd() + &#39;/views/pug/index&#39;, {title: &#39;Hello&#39;, message: &#39;Please login&#39;});</code> Agora atualize sua página e você deverá ver esses valores renderizados em sua visão no local correto, conforme estabelecido em seu arquivo index.pug! Envie sua página quando achar que está certo. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Variáveis ​​de renderização do Pug corretas
    testString: 'getUserInput => $.get(getUserInput("url")+ "/") .then(data => { assert.match(data, /pug-variable("|")>Please login/gi, "Your projects home page should now be rendered by pug with the projects .pug file unaltered"); }, xhr => { throw new Error(xhr.statusText); })'

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

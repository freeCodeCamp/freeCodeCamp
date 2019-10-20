---
id: 5895f700f9fc0f352b528e63
title: Set up a Template Engine
challengeType: 2
videoUrl: ''
localeTitle: Configurar um mecanismo de modelo
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . Um mecanismo de modelo permite que você use arquivos de modelo estáticos (como aqueles escritos em <em>Pug</em> ) no seu aplicativo. No tempo de execução, o mecanismo de modelo substitui as variáveis ​​em um arquivo de modelo por valores reais que podem ser fornecidos pelo servidor e transforma o modelo em um arquivo HTML estático que é então enviado ao cliente. Essa abordagem facilita o design de uma página HTML e permite a exibição de variáveis ​​na página sem precisar fazer uma chamada de API do cliente. Para configurar o <em>Pug</em> para uso em seu projeto, você precisará adicioná-lo como uma dependência primeiro no seu package.json. <code>&quot;pug&quot;: &quot;^0.1.0&quot;</code> Agora, para dizer ao Node / Express para usar o mecanismo de modelagem, você terá que dizer ao seu <b>aplicativo</b> expresso para <b>definir</b> &#39;pug&#39; como o &#39;mecanismo de visualização&#39;. <code>app.set(&#39;view engine&#39;, &#39;pug&#39;)</code> Por fim, você deve alterar sua resposta à solicitação da rota de índice para <code>res.render</code> com o caminho para as <em>visualizações / pug / index.pug</em> . Se tudo correu como planejado, você deve atualizar sua home page de aplicativos e ver uma pequena mensagem dizendo que você está rending com sucesso o Pug do nosso arquivo Pug! Envie sua página quando achar que está certo. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Pug é uma dependência
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/package.json") .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "pug", "Your project should list "pug" as a dependency"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: O motor da vista é Pug
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /("|")view engine("|"),( |)("|")pug("|")/gi, "Your project should set Pug as a view engine"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Pug está trabalhando
    testString: 'getUserInput => $.get(getUserInput("url")+ "/") .then(data => { assert.match(data, /pug-success-message/gi, "Your projects home page should now be rendered by pug with the projects .pug file unaltered"); }, xhr => { throw new Error(xhr.statusText); })'

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

---
id: 5a858944d96184f06fd60d61
title: Create Your First CSS Grid
challengeType: 0
videoUrl: ''
localeTitle: Crie sua primeira grade CSS
---

## Description
<section id="description"> Transforme qualquer elemento HTML em um container de grade definindo sua propriedade de <code>display</code> como <code>grid</code> . Isso permite que você use todas as outras propriedades associadas ao CSS Grid. <strong>Nota</strong> <br> No CSS Grid, o elemento pai é referido como o <dfn>container</dfn> e seus filhos são chamados de <dfn>itens</dfn> . </section>

## Instructions
<section id="instructions"> Altere a exibição do div com a classe de <code>container</code> para <code>grid</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> classe <code>container</code> deve ter uma propriedade de <code>display</code> com um valor de <code>grid</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>display</code> property with a value of <code>grid</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    width: 100%;
    background: LightGray;
    /* add your code below this line */


    /* add your code above this line */
  }
</style>

<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

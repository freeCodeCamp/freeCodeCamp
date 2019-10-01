---
id: 5a90376038fddaf9a66b5d3c
title: Align All Items Horizontally using justify-items
challengeType: 0
videoUrl: ''
localeTitle: Alinhar todos os itens horizontalmente usando justificar itens
---

## Description
<section id="description"> Às vezes, você quer que todos os itens do seu CSS Grid compartilhem o mesmo alinhamento. Você pode usar as propriedades aprendidas anteriormente e alinhá-las individualmente ou pode alinhar todas de uma vez na horizontal usando <code>justify-items</code> no container de grade. Essa propriedade pode aceitar todos os mesmos valores que você aprendeu nos dois desafios anteriores, a diferença é que ela moverá <b>todos</b> os itens da grade para o alinhamento desejado. </section>

## Instructions
<section id="instructions"> Use essa propriedade para centralizar todos os nossos itens horizontalmente. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> classe <code>container</code> deve ter uma propriedade <code>justify-items</code> que tenha o valor de <code>center</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*justify-items\s*?:\s*?center\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>justify-items</code> property that has the value of <code>center</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    /* add your code below this line */


    /* add your code above this line */
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
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

---
id: 5a90374338fddaf9a66b5d3a
title: Align an Item Horizontally using justify-self
challengeType: 0
videoUrl: ''
localeTitle: Alinhar um item horizontalmente usando justify-self
---

## Description
<section id="description"> Em CSS Grid, o conteúdo de cada item está localizado em uma caixa que é referida como uma <dfn>célula</dfn> . Você pode alinhar a posição do conteúdo dentro de sua célula horizontalmente usando a propriedade <code>justify-self</code> em um item da grade. Por padrão, essa propriedade tem um valor de <code>stretch</code> , o que fará com que o conteúdo preencha toda a largura da célula. Essa propriedade CSS Grid aceita outros valores também: <code>start</code> : alinha o conteúdo à esquerda da célula, <code>center</code> : alinha o conteúdo no centro da célula, <code>end</code> : alinha o conteúdo à direita da célula. </section>

## Instructions
<section id="instructions"> Use a propriedade <code>justify-self</code> para centralizar o item com a classe <code>item2</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item2</code> classe <code>item2</code> deve ter uma propriedade <code>justify-self</code> que tenha o valor de <code>center</code> .
    testString: 'assert(code.match(/.item2\s*?{[\s\S]*justify-self\s*?:\s*?center\s*?;[\s\S]*}/gi), "<code>item2</code> class should have a <code>justify-self</code> property that has the value of <code>center</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .item1{background: LightSkyBlue;}

  .item2 {
    background: LightSalmon;
    /* add your code below this line */


    /* add your code above this line */
  }

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

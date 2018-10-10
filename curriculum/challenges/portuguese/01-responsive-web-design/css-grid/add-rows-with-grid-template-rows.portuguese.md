---
id: 5a9036e138fddaf9a66b5d33
title: Add Rows with grid-template-rows
challengeType: 0
videoUrl: ''
localeTitle: Adicionar linhas com linhas de modelo de grade
---

## Description
<section id="description"> A grade que você criou no último desafio definirá o número de linhas automaticamente. Para ajustar as linhas manualmente, use a propriedade <code>grid-template-rows</code> da mesma maneira que você usou <code>grid-template-columns</code> no desafio anterior. </section>

## Instructions
<section id="instructions"> Adicione duas linhas à grade com 50 <code>50px</code> altura cada. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> classe <code>container</code> deve ter uma propriedade <code>grid-template-rows</code> com duas unidades de <code>50px</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-rows\s*?:\s*?50px\s*?50px\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-template-rows</code> property with two units of <code>50px</code>.");'

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
    display: grid;
    grid-template-columns: 100px 100px 100px;
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

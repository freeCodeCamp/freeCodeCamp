---
id: 5a9036d038fddaf9a66b5d32
title: Add Columns with grid-template-columns
challengeType: 0
videoUrl: ''
localeTitle: Adicionar colunas com colunas de modelo de grade
---

## Description
<section id="description"> Simplesmente criar um elemento de grade não te leva muito longe. Você precisa definir a estrutura da grade também. Para adicionar algumas colunas à grade, use a propriedade <code>grid-template-columns</code> em um container de grade, conforme demonstrado abaixo: <blockquote> .container { <br> display: grid; <br> grid-template-columns: 50px 50px; <br> } </blockquote> Isso dará à sua grade duas colunas com 50 pixels de largura cada. O número de parâmetros fornecidos para a propriedade <code>grid-template-columns</code> indica o número de colunas na grade e o valor de cada parâmetro indica a largura de cada coluna. </section>

## Instructions
<section id="instructions"> Dê ao container de grade três colunas com <code>100px</code> largura cada. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> classe <code>container</code> deve ter uma propriedade <code>grid-template-columns</code> com três unidades de <code>100px</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?100px\s*?100px\s*?100px\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-template-columns</code> property with three units of <code>100px</code>.");'

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

---
id: 5a9036ee38fddaf9a66b5d37
title: Add Gaps Faster with gap
challengeType: 0
videoUrl: ''
localeTitle: Adicionar intervalos mais rápidos com lacuna de grade
---

## Description

<section id="description"> <code>gap</code> é uma propriedade abreviada para <code>row-gap</code> e <code>column-gap</code> dos dois desafios anteriores que é mais conveniente de usar. Se <code>gap</code> tiver um valor, ele criará uma lacuna entre todas as linhas e colunas. No entanto, se houver dois valores, ele usará o primeiro para definir o intervalo entre as linhas e o segundo valor para as colunas. </section>

## Instructions

<section id="instructions"> Use o <code>gap</code> para introduzir um intervalo de <code>10px</code> entre as linhas e um intervalo de <code>20px</code> entre as colunas. </section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>container</code> classe <code>container</code> deve ter uma propriedade <code>gap</code> que introduz <code>10px</code> entre as linhas e <code>20px</code> entre as colunas.
    testString: 'assert(code.match(/.container\s*?{[\s\S]*gap\s*?:\s*?10px\s+?20px\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>gap</code> property that introduces <code>10px</code> gap between the rows and <code>20px</code> gap between the columns.");'
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .d1 {
    background: LightSkyBlue;
  }
  .d2 {
    background: LightSalmon;
  }
  .d3 {
    background: PaleTurquoise;
  }
  .d4 {
    background: LightPink;
  }
  .d5 {
    background: PaleGreen;
  }

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
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

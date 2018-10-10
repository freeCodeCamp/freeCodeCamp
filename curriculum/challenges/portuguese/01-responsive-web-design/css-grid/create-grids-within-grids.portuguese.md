---
id: 5a94fe8569fb03452672e464
title: Create Grids within Grids
challengeType: 0
videoUrl: ''
localeTitle: Criar grades dentro de grades
---

## Description
<section id="description"> Transformar um elemento em uma grade afeta apenas o comportamento de seus descendentes diretos. Então, transformando um descendente direto em uma grade, você tem uma grade dentro de uma grade. Por exemplo, definindo as propriedades <code>display</code> e <code>grid-template-columns</code> do elemento com a classe <code>item3</code> , você cria uma grade em sua grade. </section>

## Instructions
<section id="instructions"> Transforme o elemento com a classe <code>item3</code> em uma grade com duas colunas com uma largura de <code>auto</code> e <code>1fr</code> usando <code>1fr</code> <code>display</code> e <code>grid-template-columns</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item3</code> classe <code>item3</code> deve ter uma propriedade <code>grid-template-columns</code> com <code>auto</code> e <code>1fr</code> como valores.
    testString: 'assert(code.match(/.item3\s*?{[\s\S]*grid-template-columns\s*?:\s*?auto\s*?1fr\s*?;[\s\S]*}/gi), "<code>item3</code> class should have a <code>grid-template-columns</code> property with <code>auto</code> and <code>1fr</code> as values.");'
  - text: <code>item3</code> classe <code>item3</code> deve ter uma propriedade de <code>display</code> com o valor da <code>grid</code> .
    testString: 'assert(code.match(/.item3\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi), "<code>item3</code> class should have a <code>display</code> property with the value of <code>grid</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "advert header"
      "advert content"
      "advert footer";
  }
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
    /* enter your code below this line */


    /* enter your code above this line */
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .itemOne {
    background: PaleGreen;
  }

  .itemTwo {
    background: BlanchedAlmond;
  }

</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">
    <div class="itemOne">paragraph1</div>
    <div class="itemTwo">paragraph2</div>
  </div>
  <div class="item4">footer</div>
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

---
id: 5a94fe1369fb03452672e45d
title: Place Items in Grid Areas Using the grid-area Property
challengeType: 0
videoUrl: ''
localeTitle: Colocar itens em áreas de grade usando a propriedade de área de grade
---

## Description
<section id="description"> Depois de criar um modelo de áreas para seu container de grade, conforme mostrado no desafio anterior, você pode colocar um item em sua área personalizada fazendo referência ao nome que você deu a ele. Para fazer isso, você usa a propriedade de <code>grid-area</code> em um item como este: <blockquote> .item1 {grid-area: header; } </blockquote> Isso permite que a grade saiba que você deseja que a classe <code>item1</code> vá para a área denominada <code>header</code> . Nesse caso, o item usará a linha superior inteira porque essa linha inteira é nomeada como a área do cabeçalho. </section>

## Instructions
<section id="instructions"> Coloque um elemento com a classe <code>item5</code> na área de <code>footer</code> usando a propriedade <code>grid-area</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item5</code> classe <code>item5</code> deve ter uma propriedade de <code>grid-area</code> que tenha o valor de <code>footer</code> .
    testString: 'assert(code.match(/.item5\s*?{[\s\S]*grid-area\s*?:\s*?footer\s*?;[\s\S]*}/gi), "<code>item5</code> class should have a <code>grid-area</code> property that has the value of <code>footer</code>.");'

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

  .item5 {
    background: PaleGreen;
    /* add your code below this line */


    /* add your code above this line */
  }

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    grid-template-areas:
      "header header header"
      "advert content content"
      "footer footer footer";
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

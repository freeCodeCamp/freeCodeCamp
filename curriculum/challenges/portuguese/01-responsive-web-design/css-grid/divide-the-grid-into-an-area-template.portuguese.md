---
id: 5a94fe0569fb03452672e45c
title: Divide the Grid Into an Area Template
challengeType: 0
videoUrl: ''
localeTitle: Divide a grade em um modelo de área
---

## Description
<section id="description"> Você pode agrupar células de sua grade em uma <dfn>área</dfn> e dar à área um nome personalizado. Faça isso usando <code>grid-template-areas</code> no container da seguinte forma: <blockquote> áreas de modelo de grade: <br> &quot;header header header&quot; <br> &quot;conteúdo do conteúdo do anúncio&quot; <br> &quot;footer footer footer&quot;; </blockquote> O código acima mescla as três células principais em uma área denominada <code>header</code> , as três células inferiores em uma área de <code>footer</code> e cria duas áreas na linha do meio; <code>advert</code> e <code>content</code> . <strong>Nota</strong> <br> Cada palavra no código representa uma célula e cada par de aspas representa uma linha. Além de rótulos personalizados, você pode usar um ponto ( <code>.</code> ) Para designar uma célula vazia na grade. </section>

## Instructions
<section id="instructions"> Coloque o modelo de área para que o <code>advert</code> rotulado da célula se torne uma célula vazia. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>container</code> classe <code>container</code> deve ter uma propriedade <code>grid-template-areas</code> semelhante à visualização, mas possui <code>.</code> em vez da área do <code>advert</code> .'
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-areas\s*?:\s*?"\s*?header\s*?header\s*?header\s*?"\s*?"\s*?.\s*?content\s*?content\s*?"\s*?"\s*?footer\s*?footer\s*?footer\s*?"\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-template-areas</code> propertiy similar to the preview but has <code>.</code> instead of the <code>advert</code> area.");'

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
    /* change code below this line */

    grid-template-areas:
      "header header header"
      "advert content content"
      "footer footer footer";
    /* change code above this line */
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

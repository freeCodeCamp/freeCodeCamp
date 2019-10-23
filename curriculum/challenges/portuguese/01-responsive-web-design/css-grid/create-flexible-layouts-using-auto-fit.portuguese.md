---
id: 5a94fe6269fb03452672e462
title: Create Flexible Layouts Using auto-fit
challengeType: 0
videoUrl: ''
localeTitle: Criar layouts flexíveis usando o ajuste automático
---

## Description
<section id="description"> <code>auto-fit</code> funciona quase de forma idêntica ao <code>auto-fill</code>. A única diferença é que, quando o tamanho do container excede o tamanho de todos os itens combinados, o <code>auto-fill</code> continua inserindo linhas ou colunas vazias e empurra seus itens para o lado, enquanto o <code>auto-fit</code> recolhe essas linhas ou colunas vazias e estende seus itens para ajuste o tamanho do recipiente. <strong>Nota</strong> <br> Se o seu container não conseguir encaixar todos os itens em uma linha, ele será transferido para um novo. </section>

## Instructions
<section id="instructions"> Na segunda grade, use o <code>auto-fit</code> com <code>repeat</code> para preencher a grade com colunas que tenham uma largura mínima de <code>60px</code> <code>1fr</code> e máxima de 1 <code>1fr</code> . Em seguida, redimensione a pré-visualização para ver a diferença. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container2</code> classe <code>container2</code> deve ter uma propriedade <code>grid-template-columns</code> com <code>repeat</code> e <code>auto-fit</code> que preencherá a grade com colunas com largura mínima de <code>60px</code> e máxima de <code>1fr</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?auto-fit\s*?,\s*?minmax\s*?\(\s*?60px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi), "<code>container2</code> class should have a <code>grid-template-columns</code> property with <code>repeat</code> and <code>auto-fit</code> that will fill the grid with columns that have a minimum width of <code>60px</code> and maximum of <code>1fr</code>.");'

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
    min-height: 100px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: repeat( auto-fill, minmax(60px, 1fr));
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    /* change the code below this line */

    grid-template-columns: repeat(3, minmax(60px, 1fr));

    /* change the code above this line */
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
<div class="container2">
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

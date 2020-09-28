---
id: 5a94fe4469fb03452672e460
title: Limit Item Size Using the minmax Function
challengeType: 0
videoUrl: ''
localeTitle: Limitar o tamanho do item usando a função minmax
---

## Description
<section id="description"> Há outra função interna para usar com <code>grid-template-columns</code> e <code>grid-template-rows</code> chamada <code>minmax</code> . É usado para limitar o tamanho dos itens quando o container de grade muda de tamanho. Para fazer isso, você precisa especificar o intervalo de tamanho aceitável para o seu item. Aqui está um exemplo: <blockquote> colunas de modelo de grade: 100 px x minmax (50 px, 200 px); </blockquote> No código acima, as <code>grid-template-columns</code> são configuradas para criar duas colunas; o primeiro tem 100px de largura e o segundo tem a largura mínima de 50px e a largura máxima de 200px. </section>

## Instructions
<section id="instructions"> Usando a função <code>minmax</code> , substitua o <code>1fr</code> na função de <code>repeat</code> por um tamanho de coluna que tenha a largura mínima de <code>90px</code> e a largura máxima de <code>1fr</code> e redimensione o painel de visualização para ver o efeito. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> classe deve ter uma <code>grid-template-columns</code> propriedade que está configurado para repetir 3 colunas com a largura mínima de <code>90px</code> e largura máxima de <code>1fr</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?minmax\s*?\(\s*?90px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-template-columns</code> property that is set to repeat 3 columns with the minimum width of <code>90px</code> and maximum width of <code>1fr</code>.");'

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
    /* change the code below this line */

    grid-template-columns: repeat(3, 1fr);

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

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

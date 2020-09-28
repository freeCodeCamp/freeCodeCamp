---
id: 5a94fe3669fb03452672e45f
title: Reduce Repetition Using the repeat Function
challengeType: 0
videoUrl: ''
localeTitle: Reduzir a repetição usando a função de repetição
---

## Description
<section id="description"> Quando você usou <code>grid-template-columns</code> e <code>grid-template-rows</code> para definir a estrutura de uma grade, você inseriu um valor para cada linha ou coluna criada. Vamos dizer que você quer uma grade com 100 linhas da mesma altura. Não é muito prático inserir 100 valores individualmente. Felizmente, há uma maneira melhor - usando a função de <code>repeat</code> para especificar o número de vezes que você deseja que sua coluna ou linha seja repetida, seguida por uma vírgula e o valor que você deseja repetir. Aqui está um exemplo que criaria a grade de 100 linhas, cada linha com 50 px de altura. <blockquote> grid-template-rows: repeat (100, 50px); </blockquote> Você também pode repetir vários valores com a função de repetição e inserir a função entre outros valores ao definir uma estrutura de grade. Aqui está o que eu quero dizer: <blockquote> grid-template-columns: repeat (2, 1fr 50px) 20px; </blockquote> Isso se traduz em: <blockquote> grid-template-columns: 1fr 50px 1fr 50px 20px; </blockquote> <strong>Nota</strong> <br> <code>1fr 50px</code> é repetido duas vezes seguido por 20px. </section>

## Instructions
<section id="instructions"> Use <code>repeat</code> para remover a repetição da propriedade <code>grid-template-columns</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> classe <code>container</code> deve ter uma propriedade <code>grid-template-columns</code> definida para repetir 3 colunas com a largura de <code>1fr</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?1fr\s*?\)\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-template-columns</code> property that is set to repeat 3 columns with the width of <code>1fr</code>.");'

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

    grid-template-columns: 1fr 1fr 1fr;

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

---
id: 5a9036ee38fddaf9a66b5d34
title: Use CSS Grid units to Change the Size of Columns and Rows
challengeType: 0
videoUrl: ''
localeTitle: Use unidades de grade CSS para alterar o tamanho das colunas e linhas
---

## Description
<section id="description"> Você pode usar unidades absolutas e relativas como <code>px</code> e <code>em</code> em CSS Grid para definir o tamanho de linhas e colunas. Você também pode usá-los: <code>fr</code> : define a coluna ou linha como uma fração do espaço disponível, <code>auto</code> : define a coluna ou linha automaticamente para a largura ou a altura de seu conteúdo, <code>%</code> : ajusta a coluna ou linha para a largura percentual do seu recipiente. Aqui está o código que gera a saída na pré-visualização: <blockquote> grid-template-columns: auto 50px 10% 2fr 1fr; </blockquote> Este trecho cria cinco colunas. A primeira coluna é tão ampla quanto seu conteúdo, a segunda coluna é 50px, a terceira coluna é 10% de seu container e nas duas últimas colunas; o espaço restante é dividido em três seções, duas são alocadas para a quarta coluna e uma para a quinta. </section>

## Instructions
<section id="instructions"> Faça uma grade com três colunas cujas larguras são as seguintes: 1fr, 100px e 2fr. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>container</code> classe <code>container</code> deve ter uma propriedade <code>grid-template-columns</code> com três colunas com as seguintes larguras: <code>1fr, 100px, and 2fr</code> .'
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?1fr\s*?100px\s*?2fr\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-template-columns</code> property that has three columns with the following widths: <code>1fr, 100px, and 2fr</code>.");'

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
    /* modify the code below this line */

    grid-template-columns: auto 50px 10% 2fr 1fr;

    /* modify the code above this line */
    grid-template-rows: 50px 50px;
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

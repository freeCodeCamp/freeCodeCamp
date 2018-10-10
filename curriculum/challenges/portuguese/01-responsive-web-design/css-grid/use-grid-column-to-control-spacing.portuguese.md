---
id: 5a90372638fddaf9a66b5d38
title: Use grid-column to Control Spacing
challengeType: 0
videoUrl: ''
localeTitle: Use a coluna da grade para controlar o espaçamento
---

## Description
<section id="description"> Até este ponto, todas as propriedades que foram discutidas são para recipientes de grade. A propriedade da <code>grid-column</code> é a primeira a ser usada nos próprios itens da grade. As linhas horizontais e verticais hipotéticas que criam a grade são referidas como <dfn>linhas</dfn> . Essas linhas são numeradas começando com 1 no canto superior esquerdo da grade e se movendo para a direita para colunas e abaixo para linhas, contando para cima. É assim que as linhas parecem para uma grade 3x3: <div style="position:relative;margin:auto;background:Gainsboro;display:block;margin-top:100px;margin-bottom:50px;width:200px;height:200px;"><p style="left:25%;top:-30%;font-size:130%;position:absolute;color:RoyalBlue;"> linhas de coluna </p><p style="left:0%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;"> 1 </p><p style="left:30%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;"> 2 </p><p style="left:63%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;"> 3 </p><p style="left:95%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;"> 4 </p><p style="left:-40%;top:45%;font-size:130%;transform:rotateZ(-90deg);position:absolute;"> linhas de linha </p><p style="left:-10%;top:-10%;font-size:130%;position:absolute;"> 1 </p><p style="left:-10%;top:21%;font-size:130%;position:absolute;"> 2 </p><p style="left:-10%;top:53%;font-size:130%;position:absolute;"> 3 </p><p style="left:-10%;top:85%;font-size:130%;position:absolute;"> 4 </p><div style="left:0%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;"></div><div style="left:31%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;"></div><div style="left:63%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;"></div><div style="left:95%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;"></div><div style="left:0%;top:0%;width:100%;height:5%;background:black;position:absolute;"></div><div style="left:0%;top:31%;width:100%;height:5%;background:black;position:absolute;"></div><div style="left:0%;top:63%;width:100%;height:5%;background:black;position:absolute;"></div><div style="left:0%;top:95%;width:100%;height:5%;background:black;position:absolute;"></div></div> Para controlar a quantidade de colunas que um item consumirá, você pode usar a propriedade de <code>grid-column</code> em conjunto com os números de linha nos quais deseja que o item seja iniciado e interrompido. Aqui está um exemplo: <blockquote> coluna de grade: 1/3; </blockquote> Isso fará com que o item comece na primeira linha vertical da grade à esquerda e se estenda até a terceira linha da grade, consumindo duas colunas. </section>

## Instructions
<section id="instructions"> Faça com que o item com a classe <code>item5</code> consuma as duas últimas colunas da grade. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item5</code> classe deve ter um <code>grid-column</code> propriedade que tem o valor de <code>2 / 4</code> .
    testString: 'assert(code.match(/.item5\s*?{[\s\S]*grid-column\s*?:\s*?2\s*?\/\s*?4\s*?;[\s\S]*}/gi), "<code>item5</code> class should have a <code>grid-column</code> property that has the value of <code>2 / 4</code>.");'

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

---
id: 587d78ad367417b2b2512afa
title: Use the flex-wrap Property to Wrap a Row or Column
challengeType: 0
videoUrl: ''
localeTitle: Use a propriedade flex-wrap para agrupar uma linha ou coluna
---

## Description
<section id="description"> Flexbox CSS tem um recurso para dividir itens flexíveis em várias linhas (ou colunas). Por padrão, um contêiner flexível acomodará todos os itens flexíveis juntos. Por exemplo, uma <code>row</code> (linha) estará toda em uma linha.
No entanto, usando a propriedade <code>flex-wrap</code> , faz com que o CSS agrupe os itens. Isso significa que itens extras são movidos para uma nova linha ou coluna. O ponto onde haverá a quebra depende do tamanho dos itens e do tamanho do contêiner.
CSS também tem opções para a direção do agrupamento: <ul><li> <code>nowrap</code> : esta é a configuração padrão e não agrupa os itens. </li><li> <code>wrap</code> : agrupa os itens da esquerda para a direita, se estiverem em uma linha ou de cima para baixo, se estiverem em uma coluna. </li><li> <code>wrap-reverse</code> : agrupa os itens de baixo para cima, se estiverem em uma linha, ou da direita para a esquerda, se estiverem em uma coluna. </li></ul></section>

## Instructions
<section id="instructions"> O layout atual tem muitas caixas para uma só linha. Adicione a propriedade CSS <code>flex-wrap</code> ao elemento <code>#box-container</code> e atribua a ela um valor de <code>wrap</code>. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'O elemento <code>#box-container</code> deve ter a propriedade <code>flex-wrap</code> definida como um valor de wrap.'
    testString: 'assert($("#box-container").css("flex-wrap") == "wrap", "The <code>#box-container</code> element should have the <code>flex-wrap</code> property set to a value of wrap.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
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

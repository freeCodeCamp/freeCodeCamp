---
id: 587d78ac367417b2b2512af6
title: Align Elements Using the justify-content Property
challengeType: 0
videoUrl: ''
localeTitle: Alinhar elementos usando a propriedade justify-content
---

## Description
<section id="description"> Às vezes, os itens flexíveis dentro de um contêiner flexível não preenchem todo o espaço no contêiner. É comum querer dizer ao CSS como alinhar e espaçar os itens flexíveis de uma determinada maneira. Felizmente, a propriedade <code>justify-content</code> possui várias opções para fazer isso. Mas primeiro, há alguma terminologia importante para entender antes de rever essas opções.
<a href="https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg" target="_blank">Aqui está uma imagem útil mostrando uma linha para ilustrar os conceitos abaixo.</a>
Lembre-se de que definir um contêiner flexível como uma linha coloca os itens flexíveis lado a lado da esquerda para a direita. Um contêiner flexível definido como uma coluna coloca os itens flexíveis em uma pilha vertical de cima para baixo. Para cada um, a direção em que os itens flexíveis são organizados é chamada de <strong>eixo principal</strong> . Para uma linha, esta é uma linha horizontal que corta cada item. E para uma coluna, o eixo principal é uma linha vertical que passa através dos itens.
Existem várias opções de como espaçar os itens flexíveis ao longo da linha que é o eixo principal. Um dos mais usados é a <code>justify-content: center;</code> , que alinha todos os itens flexíveis ao centro dentro do contêiner flexível. Outras opções incluem: <ul><li> <code>flex-start</code> : alinha os itens ao início do contêiner flexível. Para uma linha, isso empurra os itens para a esquerda do contêiner. Para uma coluna, isso empurra os itens para o topo do contêiner. </li><li> <code>flex-end</code> : alinha os itens ao final do contêiner flexível. Para uma linha, isso empurra os itens para a direita do contêiner. Para uma coluna, isso empurra os itens para o fundo do contêiner. </li><li> <code>space-between</code> : alinha itens ao centro do eixo principal, com espaço extra colocado entre os itens. O primeiro e o último item são empurrados para a borda do contêiner flexível. Por exemplo, em uma linha, o primeiro item está contra o lado esquerdo do contêiner, o último item está contra o lado direito do contêiner e, em seguida, os outros itens entre eles são espaçados uniformemente. </li><li> <code>space-around</code> : semelhante ao <code>space-between</code> mas o primeiro e último itens não estão encostados às bordas do contêiner, o espaço é distribuído em torno de todos os itens </li></ul></section>

## Instructions
<section id="instructions"> Um exemplo ajuda a mostrar essa propriedade em ação. Adicione a propriedade CSS <code>justify-content</code> ao elemento <code>#box-container</code> e atribua a ela um valor de *center*. <strong>Bônus</strong> <br> Experimente as outras opções na propriedade <code>justify-content</code> no editor de código para ver suas diferenças. Mas note que um valor de *center* é o único que passará este desafio. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'O elemento <code>#box-container</code> deve ter uma propriedade <code>justify-content</code> definida como um valor de center.'
    testString: 'assert($("#box-container").css("justify-content") == "center", "The <code>#box-container</code> element should have a <code>justify-content</code> property set to a value of center.");'

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
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 100%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
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

---
id: 587d78ad367417b2b2512af8
title: Align Elements Using the align-items Property
challengeType: 0
videoUrl: ''
localeTitle: Alinhar elementos usando a propriedade align-items
---

## Description
<section id="description"> A propriedade <code>align-items</code> é semelhante a <code>justify-content</code> . Lembre-se de que a propriedade <code>justify-content</code> alinha os itens flexíveis ao longo do eixo principal. Para linhas, o eixo principal é uma linha horizontal e, para colunas, é uma linha vertical. Os contêineres flexíveis também possuem um <strong>eixo cruzado</strong> que é o oposto do eixo principal. Para linhas, o eixo cruzado é vertical e para colunas, o eixo cruzado é horizontal. O CSS oferece a propriedade <code>align-items</code> para alinhar itens flexíveis ao longo do eixo cruzado. Para uma linha, ele informa ao CSS como empurrar os itens da linha inteira para cima ou para baixo no contêiner. E para uma coluna, como empurrar todos os itens para a esquerda ou para a direita dentro do contêiner. Os diferentes valores disponíveis para <code>align-items</code> incluem: <ul><li> <code>flex-start</code> : alinha os itens ao início do contêiner flexível. Para linhas, isso alinha os itens ao topo do contêiner. Para colunas, isso alinha os itens à esquerda do contêiner. </li><li> <code>flex-end</code> : alinha os itens ao final do contêiner flexível. Para linhas, isso alinha os itens à parte inferior do contêiner. Para colunas, isso alinha os itens à direita do contêiner. </li><li> <code>center</code> : alinha os itens ao centro. Para linhas, alinha verticalmente os itens (espaço igual acima e abaixo dos itens). Para colunas, isso as alinha horizontalmente (espaço igual à esquerda e à direita dos itens). </li><li> <code>stretch</code> : estica os itens para encher o contêiner flexível. Por exemplo, itens de linha são esticados para preencher o contêiner flexível de cima para baixo. </li><li> <code>baseline</code> : alinha os itens às suas linhas de base. A linha de base é um conceito de texto, pense nisso como a linha em que as letras ficam em cima. </li></ul></section>

## Instructions
<section id="instructions"> Um exemplo ajuda a mostrar essa propriedade em ação. Adicione a propriedade CSS <code>align-items</code> ao elemento <code>#box-container</code> e atribua a ele um valor de *center*.
<br> <strong>Bônus</strong> <br> Tente as outras opções para a propriedade <code>align-items</code> no editor de código para ver suas diferenças. Mas note que um valor de *center* é o único que passará este desafio. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'O elemento <code>#box-container</code> deve ter uma propriedade <code>align-items</code> definida como um valor de center.'
    testString: 'assert($("#box-container").css("align-items") == "center", "The <code>#box-container</code> element should have an <code>align-items</code> property set to a value of center.");'

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
    width: 200px;
    font-size: 24px;
  }

  #box-2 {
    background-color: orangered;
    width: 200px;
    font-size: 18px;
  }
</style>

<div id="box-container">
  <div id="box-1"><p>Hello</p></div>
  <div id="box-2"><p>Goodbye</p></div>
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

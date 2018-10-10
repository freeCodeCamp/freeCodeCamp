---
id: 587d78a3367417b2b2512acf
title: Change the Position of Overlapping Elements with the z-index Property
challengeType: 0
videoUrl: ''
localeTitle: Alterar a posição dos elementos sobrepostos com a propriedade z-index
---

## Description
<section id="description"> Quando os elementos são posicionados para se sobreporem, o elemento vindo posteriormente na marcação HTML aparecerá, por padrão, no topo dos outros elementos. No entanto, a propriedade <code>z-index</code> pode especificar a ordem de como os elementos são empilhados uns sobre os outros. Ele deve ser um número inteiro (ou seja, um número inteiro e não um decimal), e valores mais altos para a propriedade <code>z-index</code> de um elemento o movem mais alto na pilha do que aqueles com valores mais baixos. </section>

## Instructions
<section id="instructions"> Adicione uma propriedade <code>z-index</code> ao elemento com o nome da <code>first</code> classe (o retângulo vermelho) e defina-o como um valor de 2, de forma que cubra o outro elemento (retângulo azul). </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O elemento com classe <code>first</code> deve ter um valor de <code>z-index</code> de 2.
    testString: 'assert($(".first").css("z-index") == "2", "The element with class <code>first</code> should have a <code>z-index</code> value of 2.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    width: 60%;
    height: 200px;
    margin-top: 20px;
  }

  .first {
    background-color: red;
    position: absolute;

  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
</style>

<div class="first"></div>
<div class="second"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
id: 587d78a6367417b2b2512add
title: Create a Graphic Using CSS
challengeType: 0
videoUrl: ''
localeTitle: Crie um gráfico usando CSS
---

## Description
<section id="description"> Ao manipular diferentes seletores e propriedades, você pode criar formas interessantes. Um dos mais fáceis de tentar é uma forma de lua crescente. Para este desafio, você precisa trabalhar com a propriedade <code>box-shadow</code> que define a sombra de um elemento, juntamente com a propriedade <code>border-radius</code> que controla a redondeza dos cantos do elemento. Você criará um objeto redondo e transparente com uma sombra nítida ligeiramente deslocada para o lado - a sombra será a forma da lua que você vê. Para criar um objeto redondo, a propriedade <code>border-radius</code> deve ser definida para um valor de 50%. Você pode lembrar de um desafio anterior que a propriedade <code>box-shadow</code> usa valores para <code>offset-x</code> , <code>offset-y</code> , <code>blur-radius</code> <code>spread-radius</code> , <code>blur-radius</code> <code>spread-radius</code> e um valor de cor nessa ordem. Os valores de <code>spread-radius</code> e <code>blur-radius</code> <code>spread-radius</code> são opcionais. </section>

## Instructions
<section id="instructions"> Manipule o elemento quadrado no editor para criar a forma da lua. Primeiro, altere a <code>background-color</code> para transparente e defina a propriedade <code>border-radius</code> para 50% para criar a forma circular. Finalmente, altere a propriedade <code>box-shadow</code> para definir o <code>offset-x</code> como 25px, o <code>offset-y</code> como 10px, <code>blur-radius</code> como 0, <code>spread-radius</code> como 0 e cor como azul. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O valor da propriedade <code>background-color</code> deve ser definido como <code>transparent</code> .
    testString: 'assert(code.match(/background-color:\s*?transparent;/gi), "The value of the <code>background-color</code> property should be set to <code>transparent</code>.");'
  - text: O valor da propriedade <code>border-radius</code> deve ser definido como <code>50%</code> .
    testString: 'assert(code.match(/border-radius:\s*?50%;/gi), "The value of the <code>border-radius</code> property should be set to <code>50%</code>.");'
  - text: 'O valor da propriedade <code>box-shadow</code> deve ser definido como 25px para <code>offset-x</code> , 10px para <code>offset-y</code> , 0 para <code>blur-radius</code> , 0 para <code>spread-radius</code> e finalmente blue para a cor.'
    testString: 'assert(code.match(/box-shadow:\s*?25px\s+?10px\s+?0(px)?\s+?0(px)?\s+?blue\s*?;/gi), "The value of the <code>box-shadow</code> property should be set to 25px for <code>offset-x</code>, 10px for <code>offset-y</code>, 0 for <code>blur-radius</code>, 0 for <code>spread-radius</code>, and finally blue for the color.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
.center
{
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100px;
  height: 100px;
  background-color: blue;
  border-radius: 0px;
  box-shadow: 25px 10px 10px 10px green;
}

</style>
<div class="center"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

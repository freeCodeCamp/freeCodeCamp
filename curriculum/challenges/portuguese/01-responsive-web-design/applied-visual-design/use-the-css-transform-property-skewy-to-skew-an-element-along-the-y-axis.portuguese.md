---
id: 587d78a6367417b2b2512adc
title: Use the CSS Transform Property skewY to Skew an Element Along the Y-Axis
challengeType: 0
videoUrl: ''
localeTitle: Use a propriedade CSS Transform Property skewY para inclinar um elemento ao longo do eixo Y
---

## Description
<section id="description"> Dado que a função <code>skewX()</code> inclina o elemento selecionado ao longo do eixo X em um determinado grau, não é surpresa que a propriedade <code>skewY()</code> incline um elemento ao longo do eixo Y (vertical). </section>

## Instructions
<section id="instructions"> Incline o elemento com o ID de <code>top</code> -10 graus ao longo do eixo Y usando a propriedade <code>transform</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O elemento com o <code>top</code> id deve ser inclinado em -10 graus ao longo do seu eixo Y.
    testString: 'assert(code.match(/#top\s*?{\s*?.*?\s*?transform:\s*?skewY\(-10deg\);/g), "The element with id <code>top</code> should be skewed by -10 degrees along its Y-axis.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin: 50px auto;
  }
  #top {
    background-color: red;

  }
  #bottom {
    background-color: blue;
    transform: skewX(24deg);
  }
</style>

<div id="top"></div>
<div id="bottom"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

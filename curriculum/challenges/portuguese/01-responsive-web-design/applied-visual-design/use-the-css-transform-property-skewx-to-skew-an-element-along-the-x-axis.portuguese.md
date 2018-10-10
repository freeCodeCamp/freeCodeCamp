---
id: 587d78a6367417b2b2512adb
title: Use the CSS Transform Property skewX to Skew an Element Along the X-Axis
challengeType: 0
videoUrl: ''
localeTitle: Use a propriedade skewX da transformação de CSS para inclinar um elemento ao longo do eixo X
---

## Description
<section id="description"> A próxima função da propriedade <code>transform</code> é <code>skewX()</code> , que inclina o elemento selecionado ao longo de seu eixo X (horizontal) em um determinado grau. O código a seguir inclina o elemento de parágrafo em -32 graus ao longo do eixo X. <blockquote> p { <br> transformar: skewX (-32deg); <br> } </blockquote></section>

## Instructions
<section id="instructions"> Incline o elemento com o ID do <code>bottom</code> em 24 graus ao longo do eixo X usando a propriedade <code>transform</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O elemento com o <code>bottom</code> id deve ser inclinado em 24 graus ao longo do eixo X.
    testString: 'assert(code.match(/#bottom\s*?{\s*?.*?\s*?transform:\s*?skewX\(24deg\);/g), "The element with id <code>bottom</code> should be skewed by 24 degrees along its X-axis.");'

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
    margin:  50px auto;
  }
  #top {
    background-color: red;
  }
  #bottom {
    background-color: blue;

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

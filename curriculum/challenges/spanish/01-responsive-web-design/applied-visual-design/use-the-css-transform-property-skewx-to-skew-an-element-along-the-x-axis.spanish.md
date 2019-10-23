---
id: 587d78a6367417b2b2512adb
title: Use the CSS Transform Property skewX to Skew an Element Along the X-Axis
challengeType: 0
videoUrl: ''
localeTitle: Utilice la propiedad CSS Transformar skewX para sesgar un elemento a lo largo del eje X
---

## Description
<section id="description"> La siguiente función de la propiedad de <code>transform</code> es <code>skewX()</code> , que sesga el elemento seleccionado a lo largo de su eje X (horizontal) en un grado determinado. El siguiente código sesga el elemento de párrafo en -32 grados a lo largo del eje X. <blockquote> pag { <br> transformar: skewX (-32deg); <br> } </blockquote></section>

## Instructions
<section id="instructions"> Inclina el elemento con la ID de <code>bottom</code> en 24 grados a lo largo del eje X usando la propiedad de <code>transform</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El elemento con ID <code>bottom</code> debe estar sesgado 24 grados a lo largo de su eje X.
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

---
id: 587d78a6367417b2b2512adc
title: Use the CSS Transform Property skewY to Skew an Element Along the Y-Axis
localeTitle: Utilice la propiedad de transformación de CSS sesgada para sesgar un elemento a lo largo del eje Y
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
Dado que la función <code>skewX()</code> el elemento seleccionado a lo largo del eje X en un grado determinado, no es sorprendente que la propiedad <code>skewY()</code> un elemento a lo largo del eje Y (vertical). 
</section>

## Instructions
<section id='instructions'> 
Inclina el elemento con el id de <code>top</code> 10 grados <code>top</code> largo del eje Y utilizando la propiedad de <code>transform</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El elemento con ID <code>top</code> debe estar sesgado en un ángulo de -10 grados a lo largo de su eje Y.
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
var code = "#top {background-color: red; transform: skewY(-10deg);}"
```

</section>

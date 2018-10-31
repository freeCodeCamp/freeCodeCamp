---
id: 587d78a3367417b2b2512ad0
title: Center an Element Horizontally Using the margin Property
challengeType: 0
videoUrl: ''
localeTitle: Centrar un elemento horizontalmente usando la propiedad de margen
---

## Description
<section id="description"> Otra técnica de posicionamiento es centrar un elemento de bloque horizontalmente. Una forma de hacerlo es establecer su <code>margin</code> en un valor de auto. Este método también funciona para imágenes. Las imágenes son elementos en línea de forma predeterminada, pero se pueden cambiar a elementos de bloque cuando configura la propiedad de <code>display</code> para bloquear. </section>

## Instructions
<section id="instructions"> Centre el <code>div</code> en la página agregando una propiedad de <code>margin</code> con un valor de auto. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El <code>div</code> debe tener un <code>margin</code> establecido en auto.
    testString: 'assert(code.match(/margin:\s*?auto;/g), "The <code>div</code> should have a <code>margin</code> set to auto.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;

  }
</style>
<div></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

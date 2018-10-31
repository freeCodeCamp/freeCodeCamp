---
id: 587d78a3367417b2b2512acf
title: Change the Position of Overlapping Elements with the z-index Property
challengeType: 0
videoUrl: ''
localeTitle: Cambie la posición de los elementos superpuestos con la propiedad z-index
---

## Description
<section id="description"> Cuando los elementos están posicionados para superponerse, el elemento que aparece más adelante en el marcado HTML aparecerá, de forma predeterminada, en la parte superior de los otros elementos. Sin embargo, la propiedad del <code>z-index</code> puede especificar el orden en que se apilan los elementos uno encima del otro. Debe ser un número entero (es decir, un número entero y no un decimal), y los valores más altos para la propiedad de <code>z-index</code> de un elemento lo mueven más arriba en la pila que aquellos con valores más bajos. </section>

## Instructions
<section id="instructions"> Agregue una propiedad de <code>z-index</code> al elemento con el nombre de la clase de <code>first</code> (el rectángulo rojo) y establézcalo en un valor de 2 para que cubra el otro elemento (rectángulo azul). </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El elemento con clase <code>first</code> debe tener un valor de <code>z-index</code> de 2.
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

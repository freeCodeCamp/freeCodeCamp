---
id: 587d78ad367417b2b2512afa
title: Use the flex-wrap Property to Wrap a Row or Column
challengeType: 0
videoUrl: ''
localeTitle: Utilice la propiedad flex-wrap para envolver una fila o columna
---

## Description
<section id="description"> CSS flexbox tiene una función para dividir un elemento flexible en varias filas (o columnas). Por defecto, un contenedor flexible encajará todos los elementos flexibles juntos. Por ejemplo, una fila estará en una sola línea. Sin embargo, al usar la propiedad <code>flex-wrap</code> , le dice a CSS que envuelva los elementos. Esto significa que los elementos adicionales se mueven a una nueva fila o columna. El punto de ruptura de donde ocurre la envoltura depende del tamaño de los artículos y del tamaño del contenedor. CSS también tiene opciones para la dirección de la envoltura: <ul><li> <code>nowrap</code> : esta es la configuración predeterminada y no envuelve los elementos. </li><li> <code>wrap</code> : envuelve los elementos de izquierda a derecha si están en una fila, o de arriba a abajo si están en una columna. </li><li> <code>wrap-reverse</code> : envuelve los elementos de abajo a arriba si están en una fila, o de derecha a izquierda si están en una columna. </li></ul></section>

## Instructions
<section id="instructions"> El diseño actual tiene demasiados cuadros para una fila. Agregue la propiedad CSS <code>flex-wrap</code> al elemento <code>#box-container</code> y asígnele un valor de wrap. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'El elemento <code>#box-container</code> debería tener la propiedad <code>flex-wrap</code> establecida en un valor de wrap.'
    testString: 'assert($("#box-container").css("flex-wrap") == "wrap", "The <code>#box-container</code> element should have the <code>flex-wrap</code> property set to a value of wrap.");'

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
    height: 100%;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
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

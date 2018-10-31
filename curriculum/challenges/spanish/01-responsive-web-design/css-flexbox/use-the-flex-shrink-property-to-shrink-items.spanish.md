---
id: 587d78ad367417b2b2512afb
title: Use the flex-shrink Property to Shrink Items
challengeType: 0
videoUrl: ''
localeTitle: Utilice la propiedad flex-shrink para reducir artículos
---

## Description
<section id="description"> Hasta ahora, todas las propiedades de los desafíos se aplican al contenedor de flexión (el elemento principal de los elementos de flexión). Sin embargo, hay varias propiedades útiles para los elementos flexibles. La primera es la propiedad de <code>flex-shrink</code> . Cuando se usa, permite que un elemento se encoja si el contenedor flexible es demasiado pequeño. Los elementos se reducen cuando el ancho del contenedor principal es menor que el ancho combinado de todos los elementos flexibles dentro de él. La propiedad <code>flex-shrink</code> toma números como valores. Cuanto mayor sea el número, más se reducirá en comparación con los otros elementos del contenedor. Por ejemplo, si un elemento tiene un valor de <code>flex-shrink</code> de 1 y el otro tiene un valor de <code>flex-shrink</code> de 3, el que tiene el valor de 3 se contraerá tres veces más que el otro. </section>

## Instructions
<section id="instructions"> Agregue la propiedad CSS <code>flex-shrink</code> a <code>#box-1</code> y <code>#box-2</code> . Dé a <code>#box-1</code> un valor de 1 y <code>#box-2</code> un valor de 2. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'El elemento <code>#box-1</code> debe tener la propiedad <code>flex-shrink</code> establecida en un valor de 1.'
    testString: 'assert($("#box-1").css("flex-shrink") == "1", "The <code>#box-1</code> element should have the <code>flex-shrink</code> property set to a value of 1.");'
  - text: 'El elemento <code>#box-2</code> debe tener la propiedad <code>flex-shrink</code> establecida en un valor de 2.'
    testString: 'assert($("#box-2").css("flex-shrink") == "2", "The <code>#box-2</code> element should have the <code>flex-shrink</code> property set to a value of 2.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 100%;
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
    width: 100%;
    height: 200px;

  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
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

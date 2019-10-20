---
id: 587d78ae367417b2b2512afc
title: Use the flex-grow Property to Expand Items
challengeType: 0
videoUrl: ''
localeTitle: Utilice la propiedad flex-grow para expandir elementos
---

## Description
<section id="description"> Lo opuesto a <code>flex-shrink</code> es la propiedad de <code>flex-grow</code> . Recuerde que <code>flex-shrink</code> controla el tamaño de los elementos cuando el contenedor se reduce. La propiedad <code>flex-grow</code> controla el tamaño de los elementos cuando el contenedor principal se expande. Usando un ejemplo similar del último desafío, si un elemento tiene un valor de <code>flex-grow</code> de 1 y el otro tiene un valor de <code>flex-grow</code> de 3, el valor de 3 crecerá tres veces más que el otro. </section>

## Instructions
<section id="instructions"> Agregue la propiedad CSS <code>flex-grow</code> a <code>#box-1</code> y <code>#box-2</code> . Dé a <code>#box-1</code> un valor de 1 y <code>#box-2</code> un valor de 2. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'El elemento <code>#box-1</code> debe tener la propiedad <code>flex-grow</code> establecida en un valor de 1.'
    testString: 'assert($("#box-1").css("flex-grow") == "1", "The <code>#box-1</code> element should have the <code>flex-grow</code> property set to a value of 1.");'
  - text: 'El elemento <code>#box-2</code> debe tener la propiedad <code>flex-grow</code> establecida en un valor de 2.'
    testString: 'assert($("#box-2").css("flex-grow") == "2", "The <code>#box-2</code> element should have the <code>flex-grow</code> property set to a value of 2.");'

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
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
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

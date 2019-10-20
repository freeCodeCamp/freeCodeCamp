---
id: 587d78ac367417b2b2512af4
title: Use the flex-direction Property to Make a Column
challengeType: 0
videoUrl: ''
localeTitle: Usa la propiedad de dirección flexible para hacer una columna
---

## Description
<section id="description"> Los dos últimos desafíos utilizaron la propiedad de <code>flex-direction</code> establecida en fila. Esta propiedad también puede crear una columna apilando verticalmente los hijos de un contenedor flexible. </section>

## Instructions
<section id="instructions"> Agregue la propiedad <code>flex-direction</code> CSS al elemento <code>#box-container</code> y asígnele un valor de columna. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'El elemento <code>#box-container</code> debería tener una propiedad de <code>flex-direction</code> configurada en columna.'
    testString: 'assert($("#box-container").css("flex-direction") == "column", "The <code>#box-container</code> element should have a <code>flex-direction</code> property set to column.");'

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
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
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

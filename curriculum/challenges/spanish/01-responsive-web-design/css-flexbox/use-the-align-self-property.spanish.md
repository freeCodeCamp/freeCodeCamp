---
id: 587d78af367417b2b2512b00
title: Use the align-self Property
challengeType: 0
videoUrl: ''
localeTitle: Usa la propiedad align-self.
---

## Description
<section id="description"> La propiedad final para los elementos flexibles es <code>align-self</code> . Esta propiedad le permite ajustar la alineación de cada elemento individualmente, en lugar de configurarlos todos a la vez. Esto es útil ya que otras técnicas de ajuste comunes que utilizan las propiedades CSS <code>float</code> , <code>clear</code> y <code>vertical-align</code> no funcionan en elementos flexibles. <code>align-self</code> acepta los mismos valores que <code>align-items</code> y anulará cualquier valor establecido por la propiedad <code>align-items</code> . </section>

## Instructions
<section id="instructions"> Agregue la propiedad CSS <code>align-self</code> a <code>#box-1</code> y <code>#box-2</code> . Dé a <code>#box-1</code> un valor de centro y a <code>#box-2</code> un valor de flex-end. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'El elemento <code>#box-1</code> debe tener la propiedad <code>align-self</code> establecida en un valor de center.'
    testString: 'assert($("#box-1").css("align-self") == "center", "The <code>#box-1</code> element should have the <code>align-self</code> property set to a value of center.");'
  - text: 'El elemento <code>#box-2</code> debe tener la propiedad <code>align-self</code> establecida en un valor de flex-end.'
    testString: 'assert($("#box-2").css("align-self") == "flex-end", "The <code>#box-2</code> element should have the <code>align-self</code> property set to a value of flex-end.");'

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
    width: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
    width: 200px;
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

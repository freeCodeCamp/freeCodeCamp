---
id: 587d78ae367417b2b2512aff
title: Use the order Property to Rearrange Items
localeTitle: Utilice la propiedad de orden para reorganizar artículos
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'>
La propiedad <code>order</code> se usa para decirle a CSS el orden en que aparecen los elementos flexibles en el contenedor flex. De forma predeterminada, los elementos aparecerán en el mismo orden en que vienen en el código fuente HTML. La propiedad toma números como valores y se pueden usar números negativos.
</section>

## Instructions
<section id='instructions'>
Agregue el <code>order</code> propiedades CSS a <code>#box-1</code> y <code>#box-2</code> . Dé a <code>#box-1</code> un valor de 2 y a <code>#box-2</code> un valor de 1.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'El elemento <code>#box-1</code> debe tener la propiedad de <code>order</code> establecida en un valor de 2.'
    testString: 'assert($("#box-1").css("order") == "2", "The <code>#box-1</code> element should have the <code>order</code> property set to a value of 2.");'
  - text: 'El elemento <code>#box-2</code> debe tener la propiedad de <code>order</code> establecida en un valor de 1.'
    testString: 'assert($("#box-2").css("order") == "1", "The <code>#box-2</code> element should have the <code>order</code> property set to a value of 1.");'

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

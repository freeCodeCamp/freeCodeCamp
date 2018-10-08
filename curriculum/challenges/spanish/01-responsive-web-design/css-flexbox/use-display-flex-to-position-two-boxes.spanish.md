---
id: 587d78ab367417b2b2512af0
title: 'Use display
localeTitle: 'Usar pantalla: flex to Position Two Boxes'
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
Esta sección utiliza estilos de desafío alternativos para mostrar cómo usar CSS para posicionar elementos de una manera flexible. Primero, un desafío explicará la teoría, luego un desafío práctico utilizando un componente de tweet simple aplicará el concepto flexbox. 
Colocación de la <code>display: flex;</code> propiedades CSS <code>display: flex;</code> en un elemento le permite usar otras propiedades de flexión para construir una página receptiva. 
</section>

## Instructions
<section id='instructions'> 
Agregue la <code>display</code> propiedades CSS a <code>#box-container</code> y establezca su valor en flex. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39; <code>#box-container</code> debería tener la propiedad de <code>display</code> establecida en un valor de flex&#39;.
    testString: 'assert($("#box-container").css("display") == "flex", "<code>#box-container</code> should have the <code>display</code> property set to a value of flex.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
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

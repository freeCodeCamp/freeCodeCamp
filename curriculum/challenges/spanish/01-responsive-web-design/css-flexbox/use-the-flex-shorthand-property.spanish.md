---
id: 587d78ae367417b2b2512afe
title: Use the flex Shorthand Property
localeTitle: Utilice la propiedad de la taquigrafía de flex
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
Hay un acceso directo disponible para configurar varias propiedades de flexión a la vez. Las propiedades <code>flex-grow</code> , <code>flex-shrink</code> y <code>flex-basis</code> pueden establecerse mediante el uso de la propiedad <code>flex</code> . 
Por ejemplo, <code>flex: 1 0 10px;</code> establecerá el elemento para <code>flex-grow: 1;</code> , <code>flex-shrink: 0;</code> , y <code>flex-basis: 10px;</code> . 
La configuración predeterminada de las propiedades es <code>flex: 0 1 auto;</code> . 
</section>

## Instructions
<section id='instructions'> 
Agregue la propiedad CSS <code>flex</code> tanto a <code>#box-1</code> como <code>#box-2</code> . Dé a <code>#box-1</code> los valores para que su <code>flex-grow</code> sea ​​2, <code>flex-shrink</code> sea ​​2, y su <code>flex-basis</code> sea ​​150px. Dé a <code>#box-2</code> los valores para que su <code>flex-grow</code> sea ​​1, <code>flex-shrink</code> sea ​​1, y su <code>flex-basis</code> sea ​​150px. 
Estos valores harán que <code>#box-1</code> crezca para llenar el espacio adicional al doble de la tasa de <code>#box-2</code> cuando el contenedor es mayor que 300px y se contraerá al doble de la tasa de <code>#box-2</code> cuando el contenedor sea menor de 300px . 300px es el tamaño combinado de los valores de <code>flex-basis</code> de las dos cajas. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39;El elemento <code>#box-1</code> debe tener la propiedad <code>flex</code> establecida en un valor de 2 2 150px.&#39;
    testString: 'assert($("#box-1").css("flex-grow") == "2" && $("#box-1").css("flex-shrink") == "2" && $("#box-1").css("flex-basis") == "150px", "The <code>#box-1</code> element should have the <code>flex</code> property set to a value of 2 2 150px.");'
  - text: &#39;El elemento <code>#box-2</code> debe tener la propiedad <code>flex</code> establecida en un valor de 1 1 150px.&#39;
    testString: 'assert($("#box-2").css("flex-grow") == "1" && $("#box-2").css("flex-shrink") == "1" && $("#box-2").css("flex-basis") == "150px", "The <code>#box-2</code> element should have the <code>flex</code> property set to a value of 1 1 150px.");'
  - text: &#39;Su código debe usar la propiedad <code>flex</code> para <code>#box-1</code> y <code>#box-2</code> .&#39;
    testString: 'assert(code.match(/flex:\s*?\d\s+?\d\s+?150px;/g).length == 2, "Your code should use the <code>flex</code> property for <code>#box-1</code> and <code>#box-2</code>.");'

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

---
id: 587d78ab367417b2b2512af2
title: Use the flex-direction Property to Make a Row
localeTitle: Utilice la propiedad de dirección flexible para hacer una fila
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'>
Agregar <code>display: flex</code> a un elemento lo convierte en un contenedor flexible. Esto hace posible alinear cualquier elemento secundario de ese elemento en filas o columnas. Para ello, agregue la propiedad de <code>flex-direction</code> al elemento principal y configúrelo en fila o columna. La creación de una fila alineará a los hijos horizontalmente, y la creación de una columna alineará a los hijos verticalmente.
Otras opciones para <code>flex-direction</code> son la fila-reversa y la columna-reversa.
<strong>Nota</strong> <br> El valor predeterminado para la propiedad de <code>flex-direction</code> es fila.
</section>

## Instructions
<section id='instructions'>
Agregue la propiedad CSS <code>flex-direction</code> al elemento <code>#box-container</code> y asígnele un valor de fila-reversa.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'El elemento <code>#box-container</code> debería tener una propiedad de <code>flex-direction</code> configurada para invertir la fila.'
    testString: 'assert($("#box-container").css("flex-direction") == "row-reverse", "The <code>#box-container</code> element should have a <code>flex-direction</code> property set to row-reverse.");'

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

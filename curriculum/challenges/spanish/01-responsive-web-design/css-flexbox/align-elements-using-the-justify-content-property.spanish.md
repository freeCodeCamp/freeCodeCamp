---
id: 587d78ac367417b2b2512af6
title: Align Elements Using the justify-content Property
localeTitle: Alinear elementos usando la propiedad justify-content
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'>
A veces, los elementos flexibles dentro de un contenedor flexible no llenan todo el espacio en el contenedor. Es común querer decirle a CSS cómo alinear y espaciar los elementos flexibles de una determinada manera. Afortunadamente, la propiedad <code>justify-content</code> tiene varias opciones para hacer esto. Pero primero, hay una terminología importante que entender antes de revisar esas opciones.
<a href="https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg" target="_blank">Aquí hay una imagen útil que muestra una fila para ilustrar los conceptos a continuación.</a>
Recuerde que la configuración de un contenedor flexible como una fila coloca los elementos flexibles uno al lado del otro de izquierda a derecha. Un contenedor flexible configurado como una columna coloca los elementos flexibles en una pila vertical de arriba a abajo. Para cada uno, la dirección en la que se disponen los elementos flexibles se denomina <strong>eje principal</strong> . Para una fila, esta es una línea horizontal que corta cada elemento. Y para una columna, el eje principal es una línea vertical a través de los elementos.
Hay varias opciones sobre cómo espaciar los elementos flexibles a lo largo de la línea que es el eje principal. Uno de los más utilizados es <code>justify-content: center;</code> , que alinea todos los elementos flexibles con el centro dentro del contenedor flexible. Otras opciones incluyen:
<ul><li> <code>flex-start</code> : alinea los elementos con el inicio del contenedor flexible. Para una fila, esto empuja los artículos a la izquierda del contenedor. Para una columna, esto empuja los elementos a la parte superior del contenedor. </li><li> <code>flex-end</code> : alinea los elementos con el extremo del contenedor flexible. Para una fila, esto empuja los artículos a la derecha del contenedor. Para una columna, esto empuja los artículos a la parte inferior del contenedor. </li><li> <code>space-between</code> : alinea elementos al centro del eje principal, con espacio adicional colocado entre los elementos. Los primeros y últimos elementos se empujan hasta el borde del contenedor flexible. Por ejemplo, en una fila, el primer elemento está contra el lado izquierdo del contenedor, el último elemento está contra el lado derecho del contenedor, luego los otros elementos entre ellos están espaciados uniformemente. </li><li> <code>space-around</code> : similar al <code>space-between</code> pero los elementos primero y último no están bloqueados en los bordes del contenedor, el espacio se distribuye alrededor de todos los elementos </li></ul>
</section>

## Instructions
<section id='instructions'>
Un ejemplo ayuda a mostrar esta propiedad en acción. Agregue la propiedad CSS <code>justify-content</code> al elemento <code>#box-container</code> y asígnele un valor de center.
<strong>Bonus</strong> <br> Pruebe las otras opciones para la propiedad <code>justify-content</code> en el editor de código para ver sus diferencias. Pero tenga en cuenta que un valor de centro es el único que pasará este desafío.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'El elemento <code>#box-container</code> debería tener una propiedad <code>justify-content</code> establecida en un valor de center'
    testString: 'assert($("#box-container").css("justify-content") == "center", "The <code>#box-container</code> element should have a <code>justify-content</code> property set to a value of center.");'

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
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 100%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
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

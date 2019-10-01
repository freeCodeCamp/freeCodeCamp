---
id: 587d78ad367417b2b2512af8
title: Align Elements Using the align-items Property
challengeType: 0
videoUrl: ''
localeTitle: Alinear elementos usando la propiedad align-items
---

## Description
<section id="description"> La propiedad <code>align-items</code> es similar a <code>justify-content</code> . Recuerde que la propiedad <code>justify-content</code> alinea elementos flexibles a lo largo del eje principal. Para las filas, el eje principal es una línea horizontal y para las columnas es una línea vertical. Los contenedores flexibles también tienen un <strong>eje transversal</strong> que es el opuesto al eje principal. Para las filas, el eje transversal es vertical y para las columnas, el eje transversal es horizontal. CSS ofrece la propiedad <code>align-items</code> para alinear elementos flexibles a lo largo del eje transversal. Para una fila, le dice a CSS cómo empujar los elementos en toda la fila hacia arriba o hacia abajo dentro del contenedor. Y para una columna, cómo empujar todos los elementos a la izquierda o derecha dentro del contenedor. Los diferentes valores disponibles para <code>align-items</code> de <code>align-items</code> incluyen: <ul><li> <code>flex-start</code> : alinea los elementos con el inicio del contenedor flexible. Para las filas, esto alinea los elementos con la parte superior del contenedor. Para las columnas, esto alinea los elementos a la izquierda del contenedor. </li><li> <code>flex-end</code> : alinea los elementos con el extremo del contenedor flexible. Para las filas, esto alinea los elementos con la parte inferior del contenedor. Para las columnas, esto alinea los elementos a la derecha del contenedor. </li><li> <code>center</code> : alinea los elementos al centro. Para las filas, esto alinea los elementos verticalmente (espacio igual por encima y por debajo de los elementos). Para las columnas, esto los alinea horizontalmente (espacio igual a la izquierda y derecha de los elementos). </li><li> <code>stretch</code> : estira los elementos hasta llenar el contenedor flexible. Por ejemplo, los elementos de las filas se estiran hasta llenar el contenedor flexible de arriba a abajo. </li><li> <code>baseline</code> : alinea los elementos a sus líneas de base. La línea de base es un concepto de texto, piénselo como la línea en la que se encuentran las letras. </li></ul></section>

## Instructions
<section id="instructions"> El siguiente ejemplo ayuda a mostrar esta propiedad en acción. Agregue la propiedad CSS <code>align-items</code> al <code>align-items</code> <code>#box-container</code> y asígnele un valor de center. <strong>Prima</strong> <br> Pruebe las otras opciones para la propiedad <code>align-items</code> en el editor de código para ver sus diferencias. Pero tenga en cuenta que un valor de center es el único que pasará este desafío. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'El elemento <code>#box-container</code> debe tener una propiedad <code>align-items</code> establecida en un valor de center.'
    testString: 'assert($("#box-container").css("align-items") == "center", "The <code>#box-container</code> element should have an <code>align-items</code> property set to a value of center.");'

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
    width: 200px;
    font-size: 24px;
  }

  #box-2 {
    background-color: orangered;
    width: 200px;
    font-size: 18px;
  }
</style>

<div id="box-container">
  <div id="box-1"><p>Hello</p></div>
  <div id="box-2"><p>Goodbye</p></div>
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

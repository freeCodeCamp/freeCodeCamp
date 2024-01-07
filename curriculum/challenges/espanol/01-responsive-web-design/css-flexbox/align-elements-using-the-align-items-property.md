---
id: 587d78ad367417b2b2512af8
title: Alinea elementos mediante la propiedad align-items
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c8aggtk'
forumTopicId: 301101
dashedName: align-elements-using-the-align-items-property
---

# --description--

La propiedad `align-items` es similar a `justify-content`. Recuerda que la propiedad `justify-content` alineó los elementos flexibles a lo largo del eje principal. Para las filas, el eje principal es una línea horizontal y para las columnas es una vertical.

Los contenedores flexibles también tienen un **eje transversal** que es el opuesto al eje principal. Para las filas, el eje transversal es vertical y para las columnas, el eje transversal es horizontal.

CSS ofrece la propiedad `align-items` para alinear elementos flexibles a lo largo del eje transversal. Para una fila, le indica al CSS como empujar los elementos en toda la fila hacia arriba o hacia abajo dentro del contenedor. Y para una columna, como empujar todos los elementos hacia la izquierda o hacia la derecha dentro del contenedor.

Los diferentes valores disponibles para `align-items` incluyen:

<ul><li><code>flex-start</code>: alinea los elementos con el inicio del contenedor flexible. Para las filas, esto alinea los elementos a la parte superior del contenedor. Para las columnas, esto alinea los elementos a la parte izquierda del contenedor.</li><li><code>flex-end</code>: alinea los elementos con el final del contenedor flexible. Para las filas, esto alinea los elementos a la parte inferior del contenedor. Para las columnas, esto alinea los elementos a la parte derecha del contenedor.</li><li><code>center</code>: alinea los elementos hacia el centro. Para las filas, esto alinea los elementos verticalmente (igual espacio por encima y por debajo de los elementos). Para columnas, esto las alinea horizontalmente (igual espacio a la izquierda y a la derecha de los elementos).</li><li><code>stretch</code>: estira los elementos para llenar el contenedor flexible. Por ejemplo, los elementos de filas son estirados para llenar el contenedor flexible de arriba hacia abajo. Este es el valor predeterminado si no se especifica ningún tipo de <code>align-items</code>.</li><li><code>baseline</code>: alinea los elementos con sus líneas base. Una línea base es un concepto de texto, piensa en ella como la línea en la que se sitúan las letras.</li></ul>

# --instructions--

Un ejemplo ayuda a mostrar esta propiedad en acción. Agrega la propiedad CSS `align-items` al elemento `#box-container` y asígnale un valor de `center`.

**Extra**  
Prueba las otras opciones de la propiedad `align-items` en el editor de código para ver sus diferencias. Pero ten en cuenta que un valor de `center` es el único que superará este desafío.

# --hints--

El elemento `#box-container` debe tener una propiedad `align-items` establecida en un valor de `center`.

```js
assert($('#box-container').css('align-items') == 'center');
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;
    align-items: center;
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

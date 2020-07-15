---
id: bad88fee1348ce8acef08815
title: Use the Bootstrap Grid to Put Elements Side By Side
challengeType: 0
videoUrl: ''
localeTitle: Usa la rejilla de Bootstrap para poner los elementos lado a lado
---

## Description
<section id="description"> Bootstrap utiliza un sistema de cuadrícula receptivo de 12 columnas, lo que facilita colocar los elementos en filas y especificar el ancho relativo de cada elemento. La mayoría de las clases de Bootstrap se pueden aplicar a un elemento <code>div</code> . Bootstrap tiene diferentes atributos de ancho de columna que utiliza según la anchura de la pantalla del usuario. Por ejemplo, los teléfonos tienen pantallas estrechas y las computadoras portátiles tienen pantallas más anchas. Tomemos, por ejemplo, la clase <code>col-md-*</code> . Aquí, <code>md</code> significa medio, y <code>*</code> es un número que especifica cuántas columnas de ancho debe tener el elemento. En este caso, se está especificando el ancho de columna de un elemento en una pantalla de tamaño mediano, como una computadora portátil. En la aplicación de fotos Cat que estamos construyendo, usaremos <code>col-xs-*</code> , donde <code>xs</code> significa extra pequeño (como una pantalla de teléfono móvil extra pequeño), y <code>*</code> es el número de columnas que especifican cuántas columnas de ancho hay El elemento debe ser. Ponga los botones <code>Like</code> , <code>Info</code> y <code>Delete</code> lado a lado al anidar los tres dentro de un elemento <code>&lt;div class=&quot;row&quot;&gt;</code> , luego cada uno dentro de un elemento <code>&lt;div class=&quot;col-xs-4&quot;&gt;</code> . La clase de <code>row</code> se aplica a un <code>div</code> , y los propios botones se pueden anidar dentro de ella. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todos sus botones deben estar anidados dentro del mismo elemento <code>div</code> con la <code>row</code> clase.
    testString: 'assert($("div.row:has(button)").length > 0, "Your buttons should all be nested within the same <code>div</code> element with the class <code>row</code>.");'
  - text: Cada uno de sus botones Bootstrap debe estar anidado dentro de su propio elemento <code>div</code> con la clase <code>col-xs-4</code> .
    testString: 'assert($("div.col-xs-4:has(button)").length > 2, "Each of your Bootstrap buttons should be nested within its own <code>div</code> element with the class <code>col-xs-4</code>.");'
  - text: Asegúrese de que cada uno de los elementos de su <code>button</code> tenga una etiqueta de cierre.
    testString: 'assert(code.match(/<\/button>/g) && code.match(/<button/g) && code.match(/<\/button>/g).length === code.match(/<button/g).length, "Make sure each of your <code>button</code> elements has a closing tag.");'
  - text: Asegúrese de que cada uno de sus elementos <code>div</code> tenga una etiqueta de cierre.
    testString: 'assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, "Make sure each of your <code>div</code> elements has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<div class="container-fluid">
  <h2 class="red-text text-center">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
  <button class="btn btn-block btn-primary">Like</button>
  <button class="btn btn-block btn-info">Info</button>
  <button class="btn btn-block btn-danger">Delete</button>
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Crazy</label>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
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

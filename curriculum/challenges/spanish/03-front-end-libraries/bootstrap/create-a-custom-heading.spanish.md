---
id: bad87fee1348bd9aede08845
title: Create a Custom Heading
challengeType: 0
videoUrl: ''
localeTitle: Crear un título personalizado
---

## Description
<section id="description"> Haremos un encabezado simple para nuestra aplicación de fotos Cat al poner el título y la imagen relajante del gato en la misma fila. Recuerde, Bootstrap utiliza un sistema de cuadrícula sensible, lo que facilita colocar los elementos en filas y especificar el ancho relativo de cada elemento. La mayoría de las clases de Bootstrap se pueden aplicar a un elemento <code>div</code> . Anide su primera imagen y su elemento <code>h2</code> dentro de un único elemento <code>&lt;div class=&quot;row&quot;&gt;</code> . Anide su elemento <code>h2</code> dentro de un <code>&lt;div class=&quot;col-xs-8&quot;&gt;</code> y su imagen en un <code>&lt;div class=&quot;col-xs-4&quot;&gt;</code> para que estén en la misma línea. ¿Observa cómo la imagen tiene el tamaño justo para ajustarse a lo largo del texto? </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su elemento <code>h2</code> y el elemento <code>img</code> superior deben estar anidados juntos dentro de un elemento <code>div</code> con la <code>row</code> clase.
    testString: 'assert($("div.row:has(h2)").length > 0 && $("div.row:has(img)").length > 0, "Your <code>h2</code> element and topmost <code>img</code> element should both be nested together within a <code>div</code> element with the class <code>row</code>.");'
  - text: Anida tu elemento <code>img</code> superior dentro de un <code>div</code> con la clase <code>col-xs-4</code> .
    testString: 'assert($("div.col-xs-4:has(img)").length > 0 && $("div.col-xs-4:has(div)").length === 0, "Nest your topmost <code>img</code> element within a <code>div</code> with the class <code>col-xs-4</code>.");'
  - text: Anida tu elemento <code>h2</code> dentro de un <code>div</code> con la clase <code>col-xs-8</code> .
    testString: 'assert($("div.col-xs-8:has(h2)").length > 0 && $("div.col-xs-8:has(div)").length === 0, "Nest your <code>h2</code> element within a <code>div</code> with the class <code>col-xs-8</code>.");'
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
  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
</style>

<div class="container-fluid">
  <h2 class="text-primary text-center">CatPhotoApp</h2>

  <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
  </div>
  <p>Things cats <span class="text-danger">love:</span></p>
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

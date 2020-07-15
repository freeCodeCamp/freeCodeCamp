---
id: bad87fee1348cd8acef08812
title: Create a Block Element Bootstrap Button
challengeType: 0
videoUrl: ''
localeTitle: Crear un botón de arranque Bootstrap Button
---

## Description
<section id="description"> Normalmente, los elementos de los <code>button</code> con las clases <code>btn</code> y <code>btn-default</code> son solo tan anchos como el texto que contienen. Por ejemplo: <code>&lt;button class=&quot;btn btn-default&quot;&gt;Submit&lt;/button&gt;</code> Este botón solo será tan ancho como la palabra &quot;Enviar&quot;. <button class="btn btn-default">Enviar</button> Haciéndolos elementos de bloque con la clase adicional de <code>btn-block</code> , su botón se estirará para llenar todo el espacio horizontal de su página y cualquier elemento que lo siga fluirá hacia una &quot;nueva línea&quot; debajo del bloque. <code>&lt;button class=&quot;btn btn-default btn-block&quot;&gt;Submit&lt;/button&gt;</code> Este botón ocuparía el 100% del ancho disponible. <button class="btn btn-default btn-block">Enviar</button> Tenga en cuenta que estos botones todavía necesitan la clase <code>btn</code> . Agregue la clase <code>btn-block</code> de Bootstrap a su botón Bootstrap. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su botón aún debe tener las clases <code>btn</code> y <code>btn-default</code> .
    testString: 'assert($("button").hasClass("btn") && $("button").hasClass("btn-default"), "Your button should still have the <code>btn</code> and <code>btn-default</code> classes.");'
  - text: Tu botón debe tener la clase <code>btn-block</code> .
    testString: 'assert($("button").hasClass("btn-block"), "Your button should have the class <code>btn-block</code>.");'
  - text: Asegúrese de que todos los elementos de sus <code>button</code> tengan una etiqueta de cierre.
    testString: 'assert(code.match(/<\/button>/g) && code.match(/<button/g) && code.match(/<\/button>/g).length === code.match(/<button/g).length, "Make sure all your <code>button</code> elements have a closing tag.");'

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
  <button class="btn btn-default">Like</button>
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

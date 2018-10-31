---
id: bad87fee1348bd9acdf08812
title: Size Your Images
challengeType: 0
videoUrl: ''
localeTitle: Tamaño de sus imágenes
---

## Description
<section id="description"> CSS tiene una propiedad llamada <code>width</code> que controla el ancho de un elemento. Al igual que con las fuentes, usaremos <code>px</code> (píxeles) para especificar el ancho de la imagen. Por ejemplo, si quisiéramos crear una clase CSS llamada <code>larger-image</code> que diera a los elementos HTML un ancho de 500 píxeles, usaríamos: <blockquote> &lt;estilo&gt; <br> .larger-image { <br> ancho: 500px; <br> } <br> &lt;/style&gt; </blockquote></section>

## Instructions
<section id="instructions"> Cree una clase llamada <code>smaller-image</code> y utilícela para cambiar el tamaño de la imagen de modo que tenga solo 100 píxeles de ancho. <strong>Nota</strong> <br> Debido a las diferencias de implementación del navegador, es posible que tenga que estar al 100% del zoom para pasar las pruebas en este desafío. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Tu elemento <code>img</code> debería tener la clase <code>smaller-image</code> .
    testString: 'assert($("img[src="https://bit.ly/fcc-relaxing-cat"]").attr("class") === "smaller-image", "Your <code>img</code> element should have the class <code>smaller-image</code>.");'
  - text: Su imagen debe tener 100 píxeles de ancho. El zoom del navegador debe estar al 100%.
    testString: 'assert($("img").width() === 100, "Your image should be 100 pixels wide. Browser zoom should be at 100%.");'

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
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
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
  </div>

  <form action="/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

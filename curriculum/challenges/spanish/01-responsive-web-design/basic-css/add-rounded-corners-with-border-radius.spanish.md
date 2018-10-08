---
id: bad87fee1348bd9aedf08814
title: Add Rounded Corners with border-radius
localeTitle: Añadir esquinas redondeadas con radio de borde
challengeType: 0
guideUrl: 'https://spanish.freecodecamp.org/guide/certificates/add-rounded-corners-a-border-radius'
videoUrl: ''
---

## Description
<section id='description'> 
Tu foto de gato tiene actualmente esquinas afiladas. Podemos redondear esas esquinas con una propiedad CSS llamada <code>border-radius</code> . 
</section>

## Instructions
<section id='instructions'> 
Puede especificar un <code>border-radius</code> con píxeles. Dale a tu foto de gato un <code>border-radius</code> de <code>10px</code> de <code>10px</code> . 
Nota: este desafío permite múltiples soluciones posibles. Por ejemplo, puede agregar <code>border-radius</code> <code>.thick-green-border</code> clase <code>.thick-green-border</code> o a la clase <code>.smaller-image</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El elemento de su imagen debe tener la clase "borde verde grueso".
    testString: 'assert($("img").hasClass("thick-green-border"), "Your image element should have the class "thick-green-border".");'
  - text: Su imagen debe tener un radio de borde de <code clase = "notranslate"> 10px </code>
    testString: 'assert(parseInt($("img").css("border-top-left-radius")) > 8, "Your image should have a border radius of <code>10px</code>");'

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

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

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

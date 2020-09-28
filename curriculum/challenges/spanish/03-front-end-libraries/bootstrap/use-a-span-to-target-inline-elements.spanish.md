---
id: bad87fee1348bd9aedf08845
title: Use a span to Target Inline Elements
challengeType: 0
videoUrl: ''
localeTitle: Use un lapso para apuntar elementos en línea
---

## Description
<section id="description"> Puede utilizar spans para crear elementos en línea. ¿Recuerdas cuando usamos la clase <code>btn-block</code> para hacer que el botón llene toda la fila? 
  
```html
<button class="btn" style="background-color: rgb(0, 100, 0);  color: rgb(255, 255, 255);">botón normal</button> 
<button class="btn btn-block" style="background-color: rgb(0, 100, 0);  color: rgb(255, 255, 255);">botón btn-block</button> 
```

Esto ilustra la diferencia entre un elemento &quot;inline&quot; y un elemento &quot;block&quot;. Al utilizar el elemento de <code>span</code> inline, puede colocar varios elementos en la misma línea, e incluso diseñar diferentes partes de la misma línea de manera diferente. Anida la palabra &quot;love&quot; en el elemento &quot;Things cats love&quot; dentro de un elemento <code>span</code>. Luego, asigna al <code>span</code> la clase <code>text-danger</code> para hacer que el texto sea rojo. A continuación le indicamos cómo haría esto con el elemento &quot;Top 3 things cats hate&quot;: <code>&lt;p&gt;Top 3 things cats &lt;span class=&quot;text-danger&quot;&gt;hate:&lt;/span&gt;&lt;/p&gt;</code> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su elemento <code>span</code> debe estar dentro de su elemento <code>p</code> .
    testString: 'assert($("p span") && $("p span").length > 0, "Your <code>span</code> element should be inside your <code>p</code> element.");'
  - text: Tu elemento <code>span</code> debe tener solo el texto <code>love</code> .
    testString: 'assert($("p span") && $("p span").text().match(/love/i) && !$("p span").text().match(/Things cats/i), "Your <code>span</code> element should have just the text <code>love</code>.");'
  - text: Su elemento <code>span</code> debe tener clase de <code>text-danger</code> .
    testString: 'assert($("span").hasClass("text-danger"), "Your <code>span</code> element should have class <code>text-danger</code>.");'
  - text: Asegúrese de que su elemento <code>span</code> tenga una etiqueta de cierre.
    testString: 'assert(code.match(/<\/span>/g) && code.match(/<span/g) && code.match(/<\/span>/g).length === code.match(/<span/g).length, "Make sure your <code>span</code> element has a closing tag.");'

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

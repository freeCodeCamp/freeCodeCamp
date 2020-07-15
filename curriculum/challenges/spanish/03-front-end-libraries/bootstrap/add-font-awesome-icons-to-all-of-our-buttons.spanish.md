---
id: bad87fee1348bd9aedc08845
title: Add Font Awesome Icons to all of our Buttons
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.css'
    raw: true
challengeType: 0
videoUrl: ''
localeTitle: Añadir iconos impresionantes de fuente a todos nuestros botones
---

## Description
<section id="description"> Font Awesome es una conveniente biblioteca de iconos. Estos iconos son gráficos vectoriales, almacenados en el formato de archivo <code>.svg</code> . Estos iconos son tratados como fuentes. Puede especificar su tamaño usando píxeles, y asumirán el tamaño de fuente de sus elementos HTML principales. Use Font Awesome para agregar un ícono de <code>info-circle</code> de información a su botón de información y un ícono de <code>trash</code> a su botón de eliminar. Nota: El elemento <code>span</code> es una alternativa aceptable al elemento <code>i</code> para las instrucciones a continuación. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Debes agregar un <code>&lt;i class=&quot;fa fa-info-circle&quot;&gt;&lt;/i&gt;</code> dentro del elemento de tu botón de información.
    testString: 'assert($(".btn-info > i").is(".fa.fa-info-circle") || $(".btn-info > span").is(".fa.fa-info-circle"), "You should add a <code>&#60;i class="fa fa-info-circle"&#62;&#60;/i&#62;</code> within your info button element.");'
  - text: Debes agregar una <code>&lt;i class=&quot;fa fa-trash&quot;&gt;&lt;/i&gt;</code> dentro de tu elemento de botón de eliminar.
    testString: 'assert($(".btn-danger > i").is(".fa.fa-trash") || $(".btn-danger > span").is(".fa.fa-trash"), "You should add a <code>&#60;i class="fa fa-trash"&#62;&#60;/i&#62;</code> within your delete button element.");'
  - text: Asegúrate de que cada uno de tus elementos <code>i</code> tenga una etiqueta de cierre y que <code>&lt;i class=&quot;fa fa-thumbs-up&quot;&gt;&lt;/i&gt;</code> esté en tu elemento de botón me gusta.
    testString: 'assert(code.match(/<\/i>|<\/span/g) && code.match(/<\/i|<\/span>/g).length > 2 && ($(".btn-primary > i").is(".fa.fa-thumbs-up") || $(".btn-primary > span").is(".fa.fa-thumbs-up")), "Make sure each of your <code>i</code> elements has a closing tag and <code>&#60;i class="fa fa-thumbs-up"&#62;&#60;/i&#62;</code> is in your like button element.");'

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
  <div class="row">
    <div class="col-xs-8">
      <h2 class="text-primary text-center">CatPhotoApp</h2>
    </div>
    <div class="col-xs-4">
      <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
    </div>
  </div>
  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary"><i class="fa fa-thumbs-up"></i> Like</button>
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

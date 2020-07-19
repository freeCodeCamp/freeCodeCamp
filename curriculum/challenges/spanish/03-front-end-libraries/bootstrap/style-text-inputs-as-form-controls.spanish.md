---
id: bad87fee1348bd9aed908845
title: Style Text Inputs as Form Controls
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.css'
    raw: true
challengeType: 0
videoUrl: ''
localeTitle: Entradas de texto de estilo como controles de formulario
---

## Description
<section id="description"> Puede agregar el ícono Font Awesome de <code>fa-paper-plane</code> agregando <code>&lt;i class=&quot;fa fa-paper-plane&quot;&gt;&lt;/i&gt;</code> dentro del elemento del <code>button</code> envío. Déle al campo de entrada de texto de su formulario una clase de <code>form-control</code> de <code>form-control</code> . Déle a su formulario el botón de enviar las clases <code>btn btn-primary</code> . También dé a este botón el icono de Font Awesome de <code>fa-paper-plane</code> . Todos los elementos textuales <code>&lt;input&gt;</code> , <code>&lt;textarea&gt;</code> y <code>&lt;select&gt;</code> con la clase <code>.form-control</code> tienen un ancho del 100%. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Dale al botón de enviar en tu formulario las clases <code>btn btn-primary</code> .
    testString: 'assert($("button[type=\"submit\"]").hasClass("btn btn-primary"), "Give the submit button in your form the classes <code>btn btn-primary</code>.");'
  - text: Agrega un <code>&lt;i class=&quot;fa fa-paper-plane&quot;&gt;&lt;/i&gt;</code> dentro de tu elemento de <code>button</code> envío.
    testString: 'assert($("button[type=\"submit\"]:has(i.fa.fa-paper-plane)").length > 0, "Add a <code>&#60;i class="fa fa-paper-plane"&#62;&#60;/i&#62;</code> within your submit <code>button</code> element.");'
  - text: Dale al texto <code>input</code> en tu formulario la clase <code>form-control</code> .
    testString: 'assert($("input[type=\"text\"]").hasClass("form-control"), "Give the text <code>input</code> in your form the class <code>form-control</code>.");'
  - text: Asegúrese de que cada uno de sus elementos <code>i</code> tenga una etiqueta de cierre.
    testString: 'assert(code.match(/<\/i>/g) && code.match(/<\/i/g).length > 3, "Make sure each of your <code>i</code> elements has a closing tag.");'

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
      <button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i> Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger"><i class="fa fa-trash"></i> Delete</button>
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
    <div class="row">
      <div class="col-xs-6">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
      </div>
      <div class="col-xs-6">
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-4">
        <label><input type="checkbox" name="personality"> Loving</label>
      </div>
      <div class="col-xs-4">
        <label><input type="checkbox" name="personality"> Lazy</label>
      </div>
      <div class="col-xs-4">
        <label><input type="checkbox" name="personality"> Crazy</label>
      </div>
    </div>
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

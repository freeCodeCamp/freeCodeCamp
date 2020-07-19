---
id: bad87fee1348bd9aec908845
title: Line up Form Elements Responsively with Bootstrap
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.css'
    raw: true
challengeType: 0
videoUrl: ''
localeTitle: Alinee los elementos del formulario responsivamente con Bootstrap
---

## Description
<section id="description"> Ahora vamos a obtener su <code>input</code> formulario y su <code>button</code> envío en la misma línea. Haremos esto de la misma manera que lo hemos hecho anteriormente: usando un elemento <code>div</code> con la <code>row</code> clase y otros elementos <code>div</code> dentro de ella usando la clase <code>col-xs-*</code> . Anide tanto el <code>input</code> texto del formulario como el <code>button</code> envío dentro de un <code>div</code> con la <code>row</code> clase. Anide la <code>input</code> texto de tu formulario dentro de un div con la clase de <code>col-xs-7</code> . Anide el <code>button</code> envío de su formulario en un <code>div</code> con la clase <code>col-xs-5</code> . Este es el último desafío que haremos por nuestra aplicación Cat Photo por ahora. ¡Esperamos que hayas disfrutado aprendiendo Font Awesome, Bootstrap y un diseño sensible! </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Anide el botón de envío de formulario y la entrada de texto en un div con <code>row</code> clase.
    testString: 'assert($("div.row:has(input[type=\"text\"])").length > 0 &&  $("div.row:has(button[type=\"submit\"])").length > 0, "Nest your form submission button and text input in a div with class <code>row</code>.");'
  - text: Anide la entrada de texto del formulario en un div con la clase <code>col-xs-7</code> .
    testString: 'assert($("div.col-xs-7:has(input[type=\"text\"])").length > 0, "Nest your form text input in a div with the class <code>col-xs-7</code>.");'
  - text: Anide el botón de envío de formulario en un div con la clase <code>col-xs-5</code> .
    testString: 'assert($("div.col-xs-5:has(button[type=\"submit\"])").length > 0, "Nest your form submission button in a div with the class <code>col-xs-5</code>.");'
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
    <input type="text" class="form-control" placeholder="cat photo URL" required>
    <button type="submit" class="btn btn-primary"><i class="fa fa-paper-plane"></i> Submit</button>
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

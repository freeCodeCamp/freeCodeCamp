---
id: bad87fee1347bd9aedf08845
title: Ditch Custom CSS for Bootstrap
challengeType: 0
videoUrl: ''
localeTitle: Ditch CSS personalizado para Bootstrap
---

## Description
<section id="description"> Podemos limpar nosso código e tornar nosso Cat Photo App mais convencional usando os estilos internos do Bootstrap em vez dos estilos personalizados que criamos anteriormente. Não se preocupe - haverá tempo suficiente para personalizar o nosso CSS mais tarde. Exclua as declarações CSS <code>.red-text</code> , <code>p</code> e <code>.smaller-image</code> de seu elemento <code>style</code> para que as únicas declarações deixadas em seu elemento <code>style</code> sejam <code>h2</code> e <code>thick-green-border</code> . Em seguida, exclua o elemento <code>p</code> que contém um link inativo. Em seguida, remova a classe de <code>red-text</code> do seu elemento <code>h2</code> e substitua-a <code>text-primary</code> classe Bootstrap <code>text-primary</code> . Por fim, remova a classe &quot;small-image&quot; do seu primeiro elemento <code>img</code> e substitua-a <code>img-responsive</code> classe <code>img-responsive</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu elemento h2 não deve mais ter a classe <code>red-text</code> .
    testString: 'assert(!$("h2").hasClass("red-text"), "Your h2 element should no longer have the class <code>red-text</code>.");'
  - text: Seu elemento h2 agora deve ter a classe <code>text-primary</code> .
    testString: 'assert($("h2").hasClass("text-primary"), "Your h2 element should now have the class <code>text-primary</code>.");'
  - text: Seus elementos de parágrafo não devem mais usar a fonte <code>Monospace</code> .
    testString: 'assert(!$("p").css("font-family").match(/monospace/i), "Your paragraph elements should no longer use the font <code>Monospace</code>.");'
  - text: Remova a classe de <code>smaller-image</code> da sua imagem superior.
    testString: 'assert(!$("img").hasClass("smaller-image"), "Remove the <code>smaller-image</code> class from your top image.");'
  - text: Adicione a classe <code>img-responsive</code> à sua imagem principal.
    testString: 'assert($(".img-responsive").length > 1, "Add the <code>img-responsive</code> class to your top image.");'

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

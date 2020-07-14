---
id: bad87fee1348cd8acdf08812
title: Create a Bootstrap Button
challengeType: 0
videoUrl: ''
localeTitle: Crie um botão de bootstrap
---

## Description
<section id="description"> O Bootstrap tem seus próprios estilos para elementos de <code>button</code> , que parecem muito melhores que os simples HTML. Crie um novo elemento de <code>button</code> abaixo da sua foto grande de gatinho. Dê-lhe as classes <code>btn</code> e <code>btn-default</code> , assim como o texto de &quot;Like&quot;. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Crie um novo elemento de <code>button</code> com o texto &quot;Like&quot;.
    testString: 'assert(new RegExp("like","gi").test($("button").text()) && ($("img.img-responsive + button.btn").length > 0), "Create a new <code>button</code> element with the text "Like".");'
  - text: 'Seu novo botão deve ter duas classes: <code>btn</code> e <code>btn-default</code> .'
    testString: 'assert($("button").hasClass("btn") && $("button").hasClass("btn-default"), "Your new button should have two classes: <code>btn</code> and <code>btn-default</code>.");'
  - text: Certifique-se de que todos os seus elementos de <code>button</code> tenham uma tag de fechamento.
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

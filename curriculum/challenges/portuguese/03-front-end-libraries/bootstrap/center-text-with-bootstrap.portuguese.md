---
id: bad87fee1348bd8acde08812
title: Center Text with Bootstrap
challengeType: 0
videoUrl: ''
localeTitle: Texto Central com Bootstrap
---

## Description
<section id="description"> Agora que estamos usando o Bootstrap, podemos centralizar nosso elemento de título para torná-lo melhor. Tudo o que precisamos fazer é adicionar o <code>text-center</code> da classe ao nosso elemento <code>h2</code> . Lembre-se que você pode adicionar várias classes ao mesmo elemento, separando cada uma delas com um espaço, como este: <code>&lt;h2 class=&quot;red-text text-center&quot;&gt;your text&lt;/h2&gt;</code> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu elemento <code>h2</code> deve ser centrado aplicando a classe <code>text-center</code>
    testString: 'assert($("h2").hasClass("text-center"), "Your <code>h2</code> element should be centered by applying the class <code>text-center</code>");'
  - text: Seu elemento <code>h2</code> ainda deve ter a classe <code>red-text</code>
    testString: 'assert($("h2").hasClass("red-text"), "Your <code>h2</code> element should still have the class <code>red-text</code>");'

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
  <h2 class="red-text">CatPhotoApp</h2>

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

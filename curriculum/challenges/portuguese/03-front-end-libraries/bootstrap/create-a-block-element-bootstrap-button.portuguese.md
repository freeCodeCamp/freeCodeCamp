---
id: bad87fee1348cd8acef08812
title: Create a Block Element Bootstrap Button
challengeType: 0
videoUrl: ''
localeTitle: Criar um botão de bootstrap de elemento de bloco
---

## Description
<section id="description"> Normalmente, seus elementos de <code>button</code> com as classes <code>btn</code> e <code>btn-default</code> são tão largos quanto o texto que eles contêm. Por exemplo: <code>&lt;button class=&quot;btn btn-default&quot;&gt;Submit&lt;/button&gt;</code> Esse botão seria tão largo quanto a palavra &quot;Submit&quot;. <button class="btn btn-default">Submit</button> Ao torná-los elementos de bloco com a classe adicional de <code>btn-block</code> , seu botão se estenderá para preencher todo o espaço horizontal de sua página e todos os elementos seguintes irão fluir para uma &quot;nova linha&quot; abaixo do bloco. <code>&lt;button class=&quot;btn btn-default btn-block&quot;&gt;Submit&lt;/button&gt;</code> Esse botão ocuparia 100% da largura disponível. <button class="btn btn-default btn-block">Submit</button> Observe que esses botões ainda precisam da classe <code>btn</code> . Adicione a classe <code>btn-block</code> Bootstrap ao seu botão Bootstrap. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu botão ainda deve ter as classes <code>btn</code> e <code>btn-default</code> .
    testString: 'assert($("button").hasClass("btn") && $("button").hasClass("btn-default"), "Your button should still have the <code>btn</code> and <code>btn-default</code> classes.");'
  - text: Seu botão deve ter a classe <code>btn-block</code> .
    testString: 'assert($("button").hasClass("btn-block"), "Your button should have the class <code>btn-block</code>.");'
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

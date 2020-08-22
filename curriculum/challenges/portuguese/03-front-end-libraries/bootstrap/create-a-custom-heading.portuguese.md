---
id: bad87fee1348bd9aede08845
title: Create a Custom Heading
challengeType: 0
videoUrl: ''
localeTitle: Criar um título personalizado
---

## Description
<section id="description"> Vamos fazer um simples rumo para o nosso aplicativo Cat Photo, colocando o título e a imagem relaxante do gato na mesma linha. Lembre-se, o Bootstrap usa um sistema de grade responsivo, o que facilita colocar elementos em linhas e especificar a largura relativa de cada elemento. A maioria das classes do Bootstrap pode ser aplicada a um elemento <code>div</code> . Aninhe sua primeira imagem e seu elemento <code>h2</code> em um único elemento <code>&lt;div class=&quot;row&quot;&gt;</code> . Aninhe seu elemento <code>h2</code> dentro de uma <code>&lt;div class=&quot;col-xs-8&quot;&gt;</code> e sua imagem em uma <code>&lt;div class=&quot;col-xs-4&quot;&gt;</code> para que eles estejam na mesma linha. Observe como a imagem é agora apenas o tamanho certo para caber ao longo do texto? </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu elemento <code>h2</code> e o elemento <code>img</code> superior devem ser aninhados juntos em um elemento <code>div</code> com a <code>row</code> da classe.
    testString: 'assert($("div.row:has(h2)").length > 0 && $("div.row:has(img)").length > 0, "Your <code>h2</code> element and topmost <code>img</code> element should both be nested together within a <code>div</code> element with the class <code>row</code>.");'
  - text: Aninhe seu elemento <code>img</code> mais alto dentro de um <code>div</code> com a classe <code>col-xs-4</code> .
    testString: 'assert($("div.col-xs-4:has(img)").length > 0 && $("div.col-xs-4:has(div)").length === 0, "Nest your topmost <code>img</code> element within a <code>div</code> with the class <code>col-xs-4</code>.");'
  - text: Aninhe seu elemento <code>h2</code> em um <code>div</code> com a classe <code>col-xs-8</code> .
    testString: 'assert($("div.col-xs-8:has(h2)").length > 0 && $("div.col-xs-8:has(div)").length === 0, "Nest your <code>h2</code> element within a <code>div</code> with the class <code>col-xs-8</code>.");'
  - text: Certifique-se de que cada um dos seus elementos <code>div</code> tenha uma tag de fechamento.
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

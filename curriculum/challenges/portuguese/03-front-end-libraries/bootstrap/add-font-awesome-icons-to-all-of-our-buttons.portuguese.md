---
id: bad87fee1348bd9aedc08845
title: Add Font Awesome Icons to all of our Buttons
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.css'
    raw: true
challengeType: 0
videoUrl: ''
localeTitle: Adicionar ícones de fonte impressionante para todos os nossos botões
---

## Description
<section id="description"> Font Awesome é uma conveniente biblioteca de ícones. Esses ícones são gráficos vetoriais, armazenados no formato de arquivo <code>.svg</code> . Esses ícones são tratados como fontes. Você pode especificar seu tamanho usando pixels e eles assumirão o tamanho da fonte de seus elementos HTML pai. Use Font Awesome para adicionar um ícone de <code>info-circle</code> de informações ao seu botão de informações e um ícone de <code>trash</code> ao seu botão de exclusão. Nota: O elemento <code>span</code> é uma alternativa aceitável ao elemento <code>i</code> para as instruções abaixo. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Você deve adicionar um <code>&lt;i class=&quot;fa fa-info-circle&quot;&gt;&lt;/i&gt;</code> dentro do seu elemento de botão de informação.
    testString: 'assert($(".btn-info > i").is(".fa.fa-info-circle") || $(".btn-info > span").is(".fa.fa-info-circle"), "You should add a <code>&#60;i class="fa fa-info-circle"&#62;&#60;/i&#62;</code> within your info button element.");'
  - text: Você deve adicionar um <code>&lt;i class=&quot;fa fa-trash&quot;&gt;&lt;/i&gt;</code> dentro do elemento do botão delete.
    testString: 'assert($(".btn-danger > i").is(".fa.fa-trash") || $(".btn-danger > span").is(".fa.fa-trash"), "You should add a <code>&#60;i class="fa fa-trash"&#62;&#60;/i&#62;</code> within your delete button element.");'
  - text: Certifique-se de que cada um dos seus elementos <code>i</code> tenha uma tag de fechamento e que o <code>&lt;i class=&quot;fa fa-thumbs-up&quot;&gt;&lt;/i&gt;</code> esteja em seu elemento de botão like.
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

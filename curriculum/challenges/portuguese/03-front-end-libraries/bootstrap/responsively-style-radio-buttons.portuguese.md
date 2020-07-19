---
id: bad87fee1348bd9aedb08845
title: Responsively Style Radio Buttons
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.css'
    raw: true
challengeType: 0
videoUrl: ''
localeTitle: Botões de rádio de estilo responsivo
---

## Description
<section id="description"> Você também pode usar classes <code>col-xs-*</code> do Bootstrap em elementos de <code>form</code> ! Dessa forma, nossos botões de rádio serão espalhados uniformemente pela página, independentemente da largura da resolução da tela. Aninhe os dois botões de opção em um elemento <code>&lt;div class=&quot;row&quot;&gt;</code> . Então aninhe cada um deles dentro de um elemento <code>&lt;div class=&quot;col-xs-6&quot;&gt;</code> . <strong>Nota:</strong> Como lembrete, os botões de opção são elementos de <code>input</code> do tipo <code>radio</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Aninhe todos os seus botões de rádio dentro de uma <code>div</code> com a <code>row</code> da turma.
    testString: 'assert($("div.row:has(input[type=\"radio\"])").length > 0, "Nest all of your radio buttons inside one <code>div</code> with the class <code>row</code>.");'
  - text: Aninhe cada um dos seus botões de rádio dentro de sua própria <code>div</code> com a classe <code>col-xs-6</code> .
    testString: 'assert($("div.col-xs-6:has(input[type=\"radio\"])").length > 1, "Nest each of your radio buttons inside its own <code>div</code> with the class <code>col-xs-6</code>.");'
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

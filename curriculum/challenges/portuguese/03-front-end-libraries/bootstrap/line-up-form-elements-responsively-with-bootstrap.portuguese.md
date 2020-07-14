---
id: bad87fee1348bd9aec908845
title: Line up Form Elements Responsively with Bootstrap
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.css'
    raw: true
challengeType: 0
videoUrl: ''
localeTitle: Alinhe os elementos do formulário de forma responsável com o Bootstrap
---

## Description
<section id="description"> Agora vamos pegar sua <code>input</code> formulário e seu <code>button</code> submissão na mesma linha. Faremos isso da mesma forma que temos anteriormente: usando um elemento <code>div</code> com a <code>row</code> da classe e outros elementos <code>div</code> dentro dele usando a classe <code>col-xs-*</code> . Aninhe a <code>input</code> texto do seu formulário e o <code>button</code> enviar dentro de uma <code>div</code> com a <code>row</code> da turma. Aninhe a <code>input</code> texto do seu formulário dentro de uma div com a classe de <code>col-xs-7</code> . Aninhe o <code>button</code> envio do seu formulário em um <code>div</code> com a classe <code>col-xs-5</code> . Este é o último desafio que vamos fazer para o nosso aplicativo Cat Photo por enquanto. Esperamos que você tenha gostado de aprender o Font Awesome, o Bootstrap e o design responsivo! </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Aninhe seu botão de envio de formulário e entrada de texto em uma div com <code>row</code> classe.
    testString: 'assert($("div.row:has(input[type=\"text\"])").length > 0 &&  $("div.row:has(button[type=\"submit\"])").length > 0, "Nest your form submission button and text input in a div with class <code>row</code>.");'
  - text: Aninhe sua entrada de texto de formulário em um div com a classe <code>col-xs-7</code> .
    testString: 'assert($("div.col-xs-7:has(input[type=\"text\"])").length > 0, "Nest your form text input in a div with the class <code>col-xs-7</code>.");'
  - text: Aninhe seu botão de envio de formulário em um div com a classe <code>col-xs-5</code> .
    testString: 'assert($("div.col-xs-5:has(button[type=\"submit\"])").length > 0, "Nest your form submission button in a div with the class <code>col-xs-5</code>.");'
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

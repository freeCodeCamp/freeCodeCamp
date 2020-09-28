---
id: bad87fee1348bd9acde08812
title: Make Images Mobile Responsive
challengeType: 0
videoUrl: ''
localeTitle: Tornar as imagens móveis responsivas
---

## Description
<section id="description"> Primeiro, adicione uma nova imagem abaixo da existente. Configure seu atributo <code>src</code> para <code>https://bit.ly/fcc-running-cats</code> . Seria ótimo se essa imagem pudesse ser exatamente a largura da tela do nosso telefone. Felizmente, com o Bootstrap, tudo o que precisamos fazer é adicionar a classe <code>img-responsive</code> à sua imagem. Faça isso e a imagem deve caber perfeitamente na largura da sua página. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Você deve ter um total de duas imagens.
    testString: 'assert($("img").length === 2, "You should have a total of two images.");'
  - text: Sua nova imagem deve estar abaixo da sua antiga e ter a classe <code>img-responsive</code> .
    testString: 'assert($("img:eq(1)").hasClass("img-responsive"), "Your new image should be below your old one and have the class <code>img-responsive</code>.");'
  - text: Sua nova imagem não deve ter a classe <code>smaller-image</code> .
    testString: 'assert(!$("img:eq(1)").hasClass("smaller-image"), "Your new image should not have the class <code>smaller-image</code>.");'
  - text: 'Sua nova imagem deve ter um <code>src</code> de <code>https://bit.ly/fcc-running-cats</code> .'
    testString: 'assert($("img:eq(1)").attr("src") === "https://bit.ly/fcc-running-cats", "Your new image should have a <code>src</code> of <code>https&#58;//bit.ly/fcc-running-cats</code>.");'
  - text: Certifique-se de que seu novo elemento <code>img</code> tenha um colchete angular de fechamento.
    testString: 'assert(code.match(/<img/g) && code.match(/<img[^<]*>/g).length === 2 && code.match(/<img/g).length === 2, "Make sure your new <code>img</code> element has a closing angle bracket.");'

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

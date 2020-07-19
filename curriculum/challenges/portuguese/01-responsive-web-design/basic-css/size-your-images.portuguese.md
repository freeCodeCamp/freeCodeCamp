---
id: bad87fee1348bd9acdf08812
title: Size Your Images
challengeType: 0
videoUrl: ''
localeTitle: Tamanho suas imagens
---

## Description
<section id="description"> CSS tem uma propriedade chamada <code>width</code> que controla a largura de um elemento. Assim como com fontes, usaremos <code>px</code> (pixels) para especificar a largura da imagem. Por exemplo, se quiséssemos criar uma classe CSS chamada <code>larger-image</code> que fornecesse elementos HTML com uma largura de 500 pixels, usaríamos: <blockquote> &lt;style&gt; <br> .larger-image { <br> largura: 500px; <br> } <br> &lt;/ style&gt; </blockquote></section>

## Instructions
<section id="instructions"> Crie uma classe chamada <code>smaller-image</code> e use-a para redimensionar a imagem para que ela tenha apenas 100 pixels de largura. <strong>Nota</strong> <br> Devido às diferenças na implementação do navegador, talvez você precise estar com zoom de 100% para passar nos testes deste desafio. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu elemento <code>img</code> deveria ter a classe <code>smaller-image</code>.
    testString: assert($("img[src='https://bit.ly/fcc-relaxing-cat']").attr('class') === "smaller-image");
  - text: Sua imagem deve ter 100 pixels de largura. O zoom do navegador deve estar em 100%.
    testString: assert($("img").width() === 100);

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
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
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
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>

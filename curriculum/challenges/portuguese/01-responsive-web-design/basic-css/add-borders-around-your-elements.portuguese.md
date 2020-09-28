---
id: bad87fee1348bd9bedf08813
title: Add Borders Around Your Elements
challengeType: 0
videoUrl: ''
localeTitle: Adicionar bordas ao redor de seus elementos
---

## Descrição
<section id="description"> As bordas CSS têm propriedades como <code>style</code> , <code>color</code> e <code>width</code> Por exemplo, se quisermos criar uma borda vermelha de 5 pixels em torno de um elemento HTML, poderíamos usar essa classe: <blockquote> &lt;style&gt; <br> .thin-red-border { <br> border-color: vermelho; <br> largura da borda: 5 px; <br> estilo de borda: sólido; <br> } <br> &lt;/ style&gt; </blockquote></section>

## Instruções
<section id="instructions"> Crie uma classe chamada <code>thick-green-border</code> . Essa classe deve adicionar uma borda verde sólida de 10 pixels em torno de um elemento HTML. Aplique a turma à sua foto de gato. Lembre-se de que você pode aplicar várias classes a um elemento usando seu atributo de <code>class</code> , separando cada nome de classe com um espaço. Por exemplo: <code>&lt;img class=&quot;class1 class2&quot;&gt;</code> </section>

## Testes
<section id='tests'>

```yml
tests:
  - text: Seu elemento <code>img</code> deve ter a classe <code>smaller-image</code> .
    testString: 'assert($("img").hasClass("smaller-image"), "Your <code>img</code> element should have the class <code>smaller-image</code>.");'
  - text: Seu elemento <code>img</code> deve ter a classe <code>thick-green-border</code> .
    testString: 'assert($("img").hasClass("thick-green-border"), "Your <code>img</code> element should have the class <code>thick-green-border</code>.");'
  - text: Dê à sua imagem uma largura de borda de <code>10px</code> .
    testString: 'assert($("img").hasClass("thick-green-border") && parseInt($("img").css("border-top-width"), 10) >= 8 && parseInt($("img").css("border-top-width"), 10) <= 12, "Give your image a border width of <code>10px</code>.");'
  - text: Dê à sua imagem um estilo de borda <code>solid</code> .
    testString: 'assert($("img").css("border-right-style") === "solid", "Give your image a border style of <code>solid</code>.");'
  - text: A borda em volta do seu elemento <code>img</code> deve ser verde.
    testString: 'assert($("img").css("border-left-color") === "rgb(0, 128, 0)", "The border around your <code>img</code> element should be green.");'

```

</section>

## Desafio
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

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

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

## Solução
<section id='solution'>

```js
// solution required
```
</section>

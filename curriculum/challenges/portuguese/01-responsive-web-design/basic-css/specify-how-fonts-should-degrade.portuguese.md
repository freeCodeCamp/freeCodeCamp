---
id: bad87fee1348bd9aedf08808
title: Specify How Fonts Should Degrade
challengeType: 0
videoUrl: ''
localeTitle: Especifique como as fontes devem ser degradadas
---

## Description
<section id="description"> Existem várias fontes padrão disponíveis em todos os navegadores. Essas famílias de fontes genéricas incluem <code>monospace</code> , <code>serif</code> e <code>sans-serif</code> Quando uma fonte não está disponível, você pode dizer ao navegador para &quot;degradar&quot; a outra fonte. Por exemplo, se você quiser que um elemento use a fonte <code>Helvetica</code> , mas se degrada na fonte <code>sans-serif</code> quando a <code>Helvetica</code> não estiver disponível, especifique-o da seguinte maneira: <blockquote> p { <br> família de fontes: Helvetica, sans-serif; <br> } </blockquote> Os nomes das famílias de fontes genéricas não diferenciam maiúsculas de minúsculas. Além disso, eles não precisam de aspas porque são palavras-chave CSS. </section>

## Instructions
<section id="instructions"> Para começar, aplique a fonte <code>monospace</code> ao elemento <code>h2</code> , para que agora ela tenha duas fontes - <code>Lobster</code> e <code>monospace</code> . No último desafio, você importou a fonte <code>Lobster</code> usando a tag de <code>link</code> . Agora comente a importação da fonte <code>Lobster</code> (usando os comentários HTML que você aprendeu antes) do Google Fonts para que ela não esteja mais disponível. Observe como seu elemento <code>h2</code> degrada para a fonte <code>monospace</code> . <strong>Nota</strong> <br> Se você tem a fonte Lobster instalada no seu computador, você não verá a degradação porque o seu navegador é capaz de encontrar a fonte. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu elemento h2 deve usar a fonte <code>Lobster</code> .
    testString: 'assert($("h2").css("font-family").match(/^"?lobster/i), "Your h2 element should use the font <code>Lobster</code>.");'
  - text: Seu elemento h2 deve se degradar na fonte <code>monospace</code> quando <code>Lobster</code> não estiver disponível.
    testString: 'assert(/\s*h2\s*\{\s*font-family\:\s*(\"|")?Lobster(\"|")?,\s*monospace\s*;\s*\}/gi.test(code), "Your h2 element should degrade to the font <code>monospace</code> when <code>Lobster</code> is not available.");'
  - text: Comente sua chamada para o Google para a fonte <code>Lobster</code> colocando <code>&lt;!--</code> na frente dela.
    testString: 'assert(new RegExp("<!--[^fc]", "gi").test(code), "Comment out your call to Google for the <code>Lobster</code> font by putting <code>&#60!--</code> in front of it.");'
  - text: Certifique-se de fechar seu comentário adicionando <code>--&gt;</code> .
    testString: 'assert(new RegExp("[^fc]-->", "gi").test(code), "Be sure to close your comment by adding <code>--&#62;</code>.");'

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
    font-family: Lobster;
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

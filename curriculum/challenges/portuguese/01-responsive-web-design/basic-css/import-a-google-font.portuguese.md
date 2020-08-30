---
id: bad87fee1348bd9aedf08807
title: Import a Google Font
challengeType: 0
videoUrl: ''
localeTitle: Importar uma fonte do Google
---

## Description
<section id="description"> Além de especificar fontes comuns que são encontradas na maioria dos sistemas operacionais, também podemos especificar fontes da Web não padrão e personalizadas para uso em nosso site. Existem várias fontes para fontes da web na internet, mas, para este exemplo, vamos nos concentrar na biblioteca de fontes do Google. <a href="https://fonts.google.com/" target="_blank">O Google Fonts</a> é uma biblioteca gratuita de fontes da Web que você pode usar no seu CSS fazendo referência ao URL da fonte. Então, vamos em frente e importar e aplicar uma fonte do Google (note que, se o Google está bloqueado em seu país, você precisará pular este desafio). Para importar uma fonte do Google, copie o (s) tipo (s) de fonte da biblioteca do Google Fonts e cole-o no HTML. Para este desafio, vamos importar a fonte <code>Lobster</code> . Para fazer isso, copie o snippet de código a seguir e cole-o na parte superior do editor de código (antes do elemento de <code>style</code> abertura): <code>&lt;link href=&quot;https://fonts.googleapis.com/css?family=Lobster&quot; rel=&quot;stylesheet&quot; type=&quot;text/css&quot;&gt;</code> Agora você pode usar a fonte <code>Lobster</code> no seu CSS usando <code>Lobster</code> como FAMILY_NAME, como no exemplo a seguir: <br> <code>font-family: FAMILY_NAME, GENERIC_NAME;</code> . O GENERIC_NAME é opcional e é uma fonte substituta caso a outra fonte especificada não esteja disponível. Isso é coberto no próximo desafio. Nomes de família fazem distinção entre maiúsculas e minúsculas e precisam ser agrupados entre aspas se houver um espaço no nome. Por exemplo, você precisa de citações para usar a fonte <code>&quot;Open Sans&quot;</code> , mas não para usar a fonte <code>Lobster</code> . </section>

## Instructions
<section id="instructions"> Crie uma regra CSS <code>font-family</code> que use a fonte <code>Lobster</code> e garanta que ela será aplicada ao seu elemento <code>h2</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Importe a fonte <code>Lobster</code> .
    testString: 'assert(new RegExp("googleapis", "gi").test(code), "Import the <code>Lobster</code> font.");'
  - text: Seu elemento <code>h2</code> deve usar a fonte <code>Lobster</code> .
    testString: 'assert($("h2").css("font-family").match(/lobster/i), "Your <code>h2</code> element should use the font <code>Lobster</code>.");'
  - text: Use um seletor CSS <code>h2</code> para alterar a fonte.
    testString: 'assert(/\s*h2\s*\{\s*font-family\:\s*(\"|")?Lobster(\"|")?\s*;\s*\}/gi.test(code), "Use an <code>h2</code> CSS selector to change the font.");'
  - text: Seu elemento <code>p</code> ainda deve usar a fonte <code>monospace</code> .
    testString: 'assert($("p").css("font-family").match(/monospace/i), "Your <code>p</code> element should still use the font <code>monospace</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .red-text {
    color: red;
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

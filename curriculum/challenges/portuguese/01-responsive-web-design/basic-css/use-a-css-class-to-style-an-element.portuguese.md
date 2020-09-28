---
id: bad87fee1348bd9aecf08806
title: Use a CSS Class to Style an Element
challengeType: 0
videoUrl: ''
localeTitle: Use uma classe CSS para estilizar um elemento
---

## Description
<section id="description"> Classes são estilos reutilizáveis ​​que podem ser adicionados a elementos HTML. Aqui está um exemplo de declaração de classe CSS: <blockquote> &lt;style&gt; <br> .blue-text { <br> cor azul; <br> } <br> &lt;/ style&gt; </blockquote> Você pode ver que criamos uma classe CSS chamada <code>blue-text</code> na tag <code>&lt;style&gt;</code> . Você pode aplicar uma classe a um elemento HTML como este: <code>&lt;h2 class=&quot;blue-text&quot;&gt;CatPhotoApp&lt;/h2&gt;</code> Observe que no seu elemento de <code>style</code> CSS, os nomes de classe começam com um ponto. No atributo de classe dos elementos HTML, o nome da classe não inclui o período. </section>

## Instructions
<section id="instructions"> Dentro do seu elemento de <code>style</code> , altere o seletor <code>h2</code> para <code>.red-text</code> e atualize o valor da <code>blue</code> de <code>blue</code> para <code>red</code> . Dê ao seu elemento <code>h2</code> o atributo <code>class</code> com um valor <code>&#39;red-text&#39;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu elemento <code>h2</code> deve ser vermelho.
    testString: assert($("h2").css("color") === "rgb(255, 0, 0)");
  - text: Seu elemento <code>h2</code> deveria ter a classe <code>red-text</code>.
    testString: assert($("h2").hasClass("red-text"));
  - text: Sua folha de estilo deve declarar uma classe <code>red-text</code> e tenha a cor definida em vermelho.
    testString: assert(code.match(/\.red-text\s*\{\s*color\s*:\s*red;\s*\}/g));
  - text: Não use declarações de estilo embutido como <code>style="color&#58; red"</code> em seu elemento <code>h2</code>.
    testString: assert($("h2").attr("style") === undefined);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h2 {
    color: blue;
  }
</style>

<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

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

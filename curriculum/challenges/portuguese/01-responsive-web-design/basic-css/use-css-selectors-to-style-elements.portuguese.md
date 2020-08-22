---
id: bad87fee1348bd9aedf08805
title: Use CSS Selectors to Style Elements
challengeType: 0
videoUrl: ''
localeTitle: Use seletores CSS para elementos de estilo
---

## Description
<section id="description"> Com o CSS, existem centenas de <code>properties</code> CSS que você pode usar para alterar a aparência de um elemento na sua página. Quando você digitou <code>&lt;h2 style=&quot;color: red;&quot;&gt;CatPhotoApp&lt;/h2&gt;</code> , você estava estilizando esse elemento <code>h2</code> individual com <code>inline CSS</code> , que significa <code>Cascading Style Sheets</code> . Essa é uma maneira de especificar o estilo de um elemento, mas há uma maneira melhor de aplicar <code>CSS</code> . Na parte superior do seu código, crie um bloco de <code>style</code> como este: <blockquote> &lt;style&gt; <br> &lt;/ style&gt; </blockquote> Dentro desse bloco de estilo, você pode criar um <code>CSS selector</code> para todos os elementos <code>h2</code> . Por exemplo, se você quisesse que todos os elementos <code>h2</code> fossem vermelhos, você adicionaria uma regra de estilo semelhante a esta: <blockquote> &lt;style&gt; <br> h2 {cor: vermelho;} <br> &lt;/ style&gt; </blockquote> Observe que é importante ter chaves de abertura e de fechamento ( <code>{</code> e <code>}</code> ) ao redor das regras de estilo de cada elemento. Você também precisa garantir que a definição de estilo do seu elemento esteja entre as tags de estilo de abertura e fechamento. Por fim, adicione um ponto-e-vírgula ao final de cada uma das regras de estilo de seu elemento. </section>

## Instructions
<section id="instructions"> Exclua o atributo style do seu elemento <code>h2</code> e, em vez disso, crie um bloco de <code>style</code> CSS. Adicione o CSS necessário para tornar todos os elementos <code>h2</code> azuis. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Remova o atributo style do seu elemento <code>h2</code>.
    testString: assert(!$("h2").attr("style"));
  - text: Crie um elemento <code>style</code>.
    testString: assert($("style") && $("style").length >= 1);
  - text: Seu elemento <code>h2</code> deveria ser azul.
    testString: assert($("h2").css("color") === "rgb(0, 0, 255)");
  - text: Certifique-se de que sua declaração <code> h2 </code> da folha de estilo seja válida com um ponto-e-vírgula e uma chave de fechamento.
    testString: assert(code.match(/h2\s*\{\s*color\s*:.*;\s*\}/g));
  - text: Verifique se todos os seus elementos <code> style </code> são válidos e têm uma tag de fechamento.
    testString: assert(code.match(/<\/style>/g) && code.match(/<\/style>/g).length === (code.match(/<style((\s)*((type|media|scoped|title|disabled)="[^"]*")?(\s)*)*>/g) || []).length);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2 style="color: red;">CatPhotoApp</h2>
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

</section>

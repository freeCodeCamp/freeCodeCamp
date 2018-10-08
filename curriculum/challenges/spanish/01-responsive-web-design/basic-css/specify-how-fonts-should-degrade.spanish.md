---
id: bad87fee1348bd9aedf08808
title: Specify How Fonts Should Degrade
localeTitle: Especifique cómo deben degradarse las fuentes
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
Hay varias fuentes predeterminadas que están disponibles en todos los navegadores. Estas familias de fuentes genéricas incluyen <code>monospace</code> , <code>serif</code> y <code>sans-serif</code> 
Cuando una fuente no está disponible, puede indicar al navegador que se &quot;degrade&quot; a otra fuente. 
Por ejemplo, si deseaba que un elemento usara la fuente <code>Helvetica</code> , pero se degradara a la <code>sans-serif</code> cuando <code>Helvetica</code> no estaba disponible, la especificará de la siguiente manera: 
<blockquote>p {<br>&nbsp;&nbsp;font-family: Helvetica, sans-serif;<br>}</blockquote> 
Los nombres genéricos de familia de fuentes no distinguen entre mayúsculas y minúsculas. Además, no necesitan comillas porque son palabras clave CSS. 
</section>

## Instructions
<section id='instructions'> 
Para empezar, aplique la fuente <code>monospace</code> al elemento <code>h2</code> , de modo que ahora tenga dos fuentes: <code>Lobster</code> y <code>monospace</code> . 
En el último desafío, importó la fuente <code>Lobster</code> usando la etiqueta de <code>link</code> . Ahora comente la importación de la fuente <code>Lobster</code> (utilizando los comentarios HTML que aprendió anteriormente) de Google Fonts para que ya no esté disponible. Observe cómo su elemento <code>h2</code> se degrada a la fuente <code>monospace</code> . 
<strong>Nota</strong> <br> Si tiene la fuente Lobster instalada en su computadora, no verá la degradación porque su navegador puede encontrar la fuente. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Tu elemento h2 debe usar la fuente <code>Lobster</code> .
    testString: 'assert($("h2").css("font-family").match(/^"?lobster/i), "Your h2 element should use the font <code>Lobster</code>.");'
  - text: Su elemento h2 debería degradarse a la fuente <code>monospace</code> cuando <code>Lobster</code> no está disponible.
    testString: 'assert(/\s*h2\s*\{\s*font-family\:\s*(\"|")?Lobster(\"|")?,\s*monospace\s*;\s*\}/gi.test(code), "Your h2 element should degrade to the font <code>monospace</code> when <code>Lobster</code> is not available.");'
  - text: Comente su llamada a Google para la fuente <code>Lobster</code> colocando <code>&lt;!--</code> delante de ella. &#39;
    testString: 'assert(new RegExp("<!--[^fc]", "gi").test(code), "Comment out your call to Google for the <code>Lobster</code> font by putting <code>&#60!--</code> in front of it.");'
  - text: &#39;Asegúrate de cerrar tu comentario agregando <code>--&gt;</code> .&#39;
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

  <form action="/submit-cat-photo">
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

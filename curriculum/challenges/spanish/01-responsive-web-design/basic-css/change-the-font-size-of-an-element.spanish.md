---
id: bad87fee1348bd9aedf08806
title: Change the Font Size of an Element
localeTitle: Cambiar el tamaño de fuente de un elemento
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
El tamaño de fuente se controla mediante la propiedad CSS de <code>font-size</code> , como esta: 
<blockquote>h1 {<br>&nbsp;&nbsp;font-size: 30px;<br>}</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Dentro de la misma etiqueta <code>&lt;style&gt;</code> que contiene su clase de <code>red-text</code> , cree una entrada para los elementos <code>p</code> y establezca el <code>font-size</code> en 16 píxeles ( <code>16px</code> ). 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39;Entre las etiquetas de <code>style</code> , <code>16px</code> elementos <code>p</code> <code>font-size</code> de <code>font-size</code> de <code>16px</code> . El navegador y el zoom de texto deben estar al 100% &quot;.
    testString: 'assert(code.match(/p\s*{\s*font-size\s*:\s*16\s*px\s*;\s*}/i), "Between the <code>style</code> tags, give the <code>p</code> elements <code>font-size</code> of <code>16px</code>. Browser and Text zoom should be at 100%.");'

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

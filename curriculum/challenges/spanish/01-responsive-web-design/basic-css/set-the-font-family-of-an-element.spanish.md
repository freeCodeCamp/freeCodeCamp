---
id: bad87fee1348bd9aede08807
title: Set the Font Family of an Element
challengeType: 0
videoUrl: ''
localeTitle: Establecer la familia de fuentes de un elemento
---

## Description
<section id="description"> Puede establecer qué fuente debe usar un elemento, usando la propiedad de <code>font-family</code> . Por ejemplo, si quisiera establecer la fuente de su elemento <code>h2</code> en <code>sans-serif</code> , usaría el siguiente CSS: <blockquote> h2 { <br> Familia tipográfica: sans-serif; <br> } </blockquote></section>

## Instructions
<section id="instructions"> Haz que todos tus elementos <code>p</code> utilicen la fuente <code>monospace</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Tus elementos <code>p</code> deberían usar la fuente <code>monospace</code> .
    testString: 'assert($("p").not(".red-text").css("font-family").match(/monospace/i), "Your <code>p</code> elements should use the font <code>monospace</code>.");'

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

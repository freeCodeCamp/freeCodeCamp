---
id: bad87fee1348bd9aedf08806
title: Change the Font Size of an Element
challengeType: 0
videoUrl: ''
localeTitle: Изменение размера шрифта элемента
---

## Description
<section id="description"> Размер шрифта контролируется свойством CSS <code>font-size</code> , например: <blockquote> h1 { <br> размер шрифта: 30 пикселей; <br> } </blockquote></section>

## Instructions
<section id="instructions"> Внутри же <code>&lt;style&gt;</code> тег , который содержит ваш <code>red-text</code> класса, создать запись для <code>p</code> элементов и установить <code>font-size</code> 16 пикселей ( <code>16px</code> ). </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Между тегами <code>style</code> дайте <code>p</code> элементам <code>font-size</code> <code>16px</code> . Увеличение браузера и текста должно составлять 100%.
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

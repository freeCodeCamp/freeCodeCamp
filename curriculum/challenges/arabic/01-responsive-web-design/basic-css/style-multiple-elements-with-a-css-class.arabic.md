---
id: bad87fee1348bd9aefe08806
title: Style Multiple Elements with a CSS Class
challengeType: 0
videoUrl: ''
localeTitle: نمط عناصر متعددة مع فئة CSS
---

## Description
<section id="description"> تتيح لك الفئات استخدام أنماط CSS نفسها في عناصر HTML المتعددة. يمكنك رؤية ذلك من خلال تطبيق فئة <code>red-text</code> عنصر <code>p</code> الأول. </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون عنصر <code>h2</code> باللون الأحمر.
    testString: 'assert($("h2").css("color") === "rgb(255, 0, 0)", "Your <code>h2</code> element should be red.");'
  - text: يجب أن يحتوي عنصر <code>h2</code> <code>red-text</code> للفئة.
    testString: 'assert($("h2").hasClass("red-text"), "Your <code>h2</code> element should have the class <code>red-text</code>.");'
  - text: يجب أن يكون عنصر <code>p</code> الأول باللون الأحمر.
    testString: 'assert($("p:eq(0)").css("color") === "rgb(255, 0, 0)", "Your first <code>p</code> element should be red.");'
  - text: ''
    testString: 'assert(!($("p:eq(1)").css("color") === "rgb(255, 0, 0)") && !($("p:eq(2)").css("color") === "rgb(255, 0, 0)"), "Your second and third <code>p</code> elements should not be red.");'
  - text: يجب أن يكون عنصر <code>p</code> الأول الخاص بك يحتوي على <code>red-text</code> .
    testString: 'assert($("p:eq(0)").hasClass("red-text"), "Your first <code>p</code> element should have the class <code>red-text</code>.");'

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

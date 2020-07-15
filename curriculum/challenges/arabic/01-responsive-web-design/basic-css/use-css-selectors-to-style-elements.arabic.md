---
id: bad87fee1348bd9aedf08805
title: Use CSS Selectors to Style Elements
challengeType: 0
videoUrl: ''
localeTitle: استخدم CSS Selectors إلى عناصر النمط
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(!$("h2").attr("style"), "Remove the style attribute from your <code>h2</code> element.");'
  - text: ''
    testString: 'assert($("style") && $("style").length > 1, "Create a <code>style</code> element.");'
  - text: يجب أن يكون عنصر <code>h2</code> باللون الأزرق.
    testString: 'assert($("h2").css("color") === "rgb(0, 0, 255)", "Your <code>h2</code> element should be blue.");'
  - text: تأكد من أن تصريح <code>h2</code> الخاص بأنماط <code>h2</code> الخاص بك صالح مع قوس منقوطة وإغلاق.
    testString: 'assert(code.match(/h2\s*\{\s*color\s*:.*;\s*\}/g), "Ensure that your stylesheet <code>h2</code> declaration is valid with a semicolon and closing brace.");'
  - text: ''
    testString: 'assert(code.match(/<\/style>/g) && code.match(/<\/style>/g).length === (code.match(/<style((\s)*((type|media|scoped|title|disabled)="[^"]*")?(\s)*)*>/g) || []).length, "Make sure all your <code>style</code> elements are valid and have a closing tag.");'

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

```js
// solution required
```
</section>

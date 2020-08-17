---
id: bad87fee1348bd9aedf08803
title: Change the Color of Text
challengeType: 0
videoUrl: ''
localeTitle: تغيير لون النص
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون عنصر <code>h2</code> باللون الأحمر.
    testString: 'assert($("h2").css("color") === "rgb(255, 0, 0)", "Your <code>h2</code> element should be red.");'
  - text: ''
    testString: 'assert(code.match(/<h2\s+style\s*=\s*(\"|")\s*color\s*:\s*(?:rgb\(\s*255\s*,\s*0\s*,\s*0\s*\)|rgb\(\s*100%\s*,\s*0%\s*,\s*0%\s*\)|red|#ff0000|#f00|hsl\(\s*0\s*,\s*100%\s*,\s*50%\s*\))\s*\;(\"|")>\s*CatPhotoApp\s*<\/h2>/)," Your <code>style</code> declaration should end with a <code>;</code> .");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
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

---
id: bad87fee1348bd9aedd08835
title: Check Radio Buttons and Checkboxes by Default
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cWk3Qh6'
---

## Description
<section id='description'>
You can set a checkbox or radio button to be checked by default using the <code>checked</code> attribute.
To do this, just add the word "checked" to the inside of an input element. For example:
<code>&#60;input type="radio" name="test-name" checked&#62;</code>
</section>

## Instructions
<section id='instructions'>
Set the first of your <code>radio button</code>s and the first of your <code>checkbox</code>es to both be checked by default.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your first radio button on your form should be checked by default.
    testString: assert($('input[type="radio"]').prop("checked"), 'Your first radio button on your form should be checked by default.');
  - text: Your first checkbox on your form should be checked by default.
    testString: assert($('input[type="checkbox"]').prop("checked"), 'Your first checkbox on your form should be checked by default.');

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
  <form action="/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality"> Loving</label>
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

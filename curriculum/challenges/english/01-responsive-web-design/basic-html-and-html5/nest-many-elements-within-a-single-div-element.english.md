---
id: bad87fee1348bd9aede08835
title: Nest Many Elements within a Single div Element
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cNW4kC3'
---

## Description
<section id='description'>
The <code>div</code> element, also known as a division element, is a general purpose container for other elements.
The <code>div</code> element is probably the most commonly used HTML element of all.
Just like any other non-self-closing element, you can open a <code>div</code> element with <code>&#60;div&#62;</code> and close it on another line with <code>&#60;/div&#62;</code>.
</section>

## Instructions
<section id='instructions'>
Nest your "Things cats love" and "Things cats hate" lists all within a single <code>div</code> element.
Hint: Try putting your opening <code>div</code> tag above your "Things cats love" <code>p</code> element and your closing <code>div</code> tag after your closing <code>ol</code> tag so that both of your lists are within one <code>div</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Nest your <code>p</code> elements inside your <code>div</code> element.
    testString: assert($("div").children("p").length > 1, 'Nest your <code>p</code> elements inside your <code>div</code> element.');
  - text: Nest your <code>ul</code> element inside your <code>div</code> element.
    testString: assert($("div").children("ul").length > 0, 'Nest your <code>ul</code> element inside your <code>div</code> element.');
  - text: Nest your <code>ol</code> element inside your <code>div</code> element.
    testString: assert($("div").children("ol").length > 0, 'Nest your <code>ol</code> element inside your <code>div</code> element.');
  - text: Make sure your <code>div</code> element has a closing tag.
    testString: assert(code.match(/<\/div>/g) && code.match(/<\/div>/g).length === code.match(/<div>/g).length, 'Make sure your <code>div</code> element has a closing tag.');

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
</section>

---
id: bad87fee1348bd9aede08835
title: Nest Many Elements within a Single div Element
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/p/pVMPUv/cNW4kC3'
forumTopicId: 18246
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
  - text: Your <code>p</code> elements should be nested inside your <code>div</code> element.
    testString: assert($("div").children("p").length > 1);
  - text: Your <code>ul</code> element should be nested inside your <code>div</code> element.
    testString: assert($("div").children("ul").length > 0);
  - text: Your <code>ol</code> element should be nested inside your <code>div</code> element.
    testString: assert($("div").children("ol").length > 0);
  - text: Your <code>div</code> element should have a closing tag.
    testString: assert(code.match(/<\/div>/g) && code.match(/<\/div>/g).length === code.match(/<div>/g).length);

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

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor" checked> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving" checked> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
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
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor" checked> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving" checked> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

</section>

---
id: bad87fee1348bd9aecf08806
title: Use a CSS Class to Style an Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MvDtV'
forumTopicId: 18337
---

## Description
<section id='description'>
Classes are reusable styles that can be added to HTML elements.
Here's an example CSS class declaration:

```html
<style>
  .blue-text {
    color: blue;
  }
</style>
```

You can see that we've created a CSS class called <code>blue-text</code> within the <code>&#60;style&#62;</code> tag.
You can apply a class to an HTML element like this:
<code>&#60;h2 class="blue-text"&#62;CatPhotoApp&#60;/h2&#62;</code>
Note that in your CSS <code>style</code> element, class names start with a period. In your HTML elements' class attribute, the class name does not include the period.
</section>

## Instructions
<section id='instructions'>
Inside your <code>style</code> element, change the <code>h2</code> selector to <code>.red-text</code> and update the color's value from <code>blue</code> to <code>red</code>.
Give your <code>h2</code> element the <code>class</code> attribute with a value of <code>'red-text'</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>h2</code> element should be red.
    testString: assert($("h2").css("color") === "rgb(255, 0, 0)");
  - text: Your <code>h2</code> element should have the class <code>red-text</code>.
    testString: assert($("h2").hasClass("red-text"));
  - text: Your stylesheet should declare a <code>red-text</code> class and have its color set to red.
    testString: assert(code.match(/\.red-text\s*\{\s*color\s*:\s*red;\s*\}/g));
  - text: You should not use inline style declarations like <code>style="color&#58; red"</code> in your <code>h2</code> element.
    testString: assert($("h2").attr("style") === undefined);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h2 {
    color: blue;
  }
</style>

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

</section>

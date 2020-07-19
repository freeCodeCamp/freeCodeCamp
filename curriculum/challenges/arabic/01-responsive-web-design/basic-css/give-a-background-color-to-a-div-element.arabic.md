---
id: bad87fed1348bd9aede07836
title: Give a Background Color to a div Element
challengeType: 0
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
<section id="instructions"> إنشاء فئة تسمى <code>silver-background</code> مع <code>background-color</code> الفضة. قم بتعيين هذا الفصل إلى عنصر <code>div</code> الخاص بك. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert($("div").hasClass("silver-background"), "Give your <code>div</code> element the class <code>silver-background</code>.");'
  - text: ''
    testString: 'assert($("div").css("background-color") === "rgb(192, 192, 192)", "Your <code>div</code> element should have a silver background.");'
  - text: ''
    testString: 'assert(code.match(/\.silver-background\s*{\s*background-color:\s*silver;\s*}/), "Define a class named <code>silver-background</code> within the <code>style</code> element and assign the value of <code>silver</code> to the <code>background-color</code> property.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

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

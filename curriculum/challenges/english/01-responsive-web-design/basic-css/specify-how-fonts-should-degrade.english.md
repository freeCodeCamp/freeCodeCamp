---
id: bad87fee1348bd9aedf08808
title: Specify How Fonts Should Degrade
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/c/cpVKBfQ'
forumTopicId: 18304
---

## Description
<section id='description'>
There are several default fonts that are available in all browsers. These generic font families include <code>monospace</code>, <code>serif</code> and <code>sans-serif</code>
When one font isn't available, you can tell the browser to "degrade" to another font.
For example, if you wanted an element to use the <code>Helvetica</code> font, but degrade to the <code>sans-serif</code> font when <code>Helvetica</code> isn't available, you will specify it as follows:

```css
p {
  font-family: Helvetica, sans-serif;
}
```

Generic font family names are not case-sensitive. Also, they do not need quotes because they are CSS keywords.
</section>

## Instructions
<section id='instructions'>
To begin, apply the <code>monospace</code> font to the <code>h2</code> element, so that it now has two fonts - <code>Lobster</code> and <code>monospace</code>.
In the last challenge, you imported the <code>Lobster</code> font using the <code>link</code> tag. Now comment out that import of the <code>Lobster</code> font (using the HTML comments you learned before) from Google Fonts so that it isn't available anymore. Notice how your <code>h2</code> element degrades to the <code>monospace</code> font.
<strong>Note:</strong> If you have the Lobster font installed on your computer, you won't see the degradation because your browser is able to find the font.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your h2 element should use the font <code>Lobster</code>.
    testString: assert($("h2").css("font-family").match(/^"?lobster/i));
  - text: Your h2 element should degrade to the font <code>monospace</code> when <code>Lobster</code> is not available.
    testString: assert(/\s*h2\s*\{\s*font-family\:\s*(\'|")?Lobster(\'|")?,\s*monospace\s*;\s*\}/gi.test(code));
  - text: You should comment out your call to Google for the <code>Lobster</code> font by putting <code>&#60;!--</code> in front of it.
    testString: assert(new RegExp("<!--[^fc]", "gi").test(code));
  - text: You should close your comment by adding <code>--&#62;</code>.
    testString: assert(new RegExp("[^fc]-->", "gi").test(code));

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
    font-family: Lobster;
  }

  p {
    font-size: 16px;
    font-family: monospace;
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
<!--<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">-->
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

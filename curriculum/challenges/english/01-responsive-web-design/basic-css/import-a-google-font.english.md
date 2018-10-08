---
id: bad87fee1348bd9aedf08807
title: Import a Google Font
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM9MRsJ'
---

## Description
<section id='description'>
In addition to specifying common fonts that are found on most operating systems, we can also specify non-standard, custom web fonts for use on our website. There are various sources for web fonts on the internet but, for this example we will focus on the Google Fonts library.
<a href='https://fonts.google.com/' target='_blank'>Google Fonts</a> is a free library of web fonts that you can use in your CSS by referencing the font's URL.
So, let's go ahead and import and apply a Google font (note that if Google is blocked in your country, you will need to skip this challenge).
To import a Google Font, you can copy the font(s) URL from the Google Fonts library and then paste it in your HTML. For this challenge, we'll import the <code>Lobster</code> font. To do this, copy the following code snippet and paste it into the top of your code editor(before the opening <code>style</code> element):
<code>&#60;link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css"&#62;</code>
Now you can use the <code>Lobster</code> font in your CSS by using <code>Lobster</code> as the FAMILY_NAME as in the following example:<br><code>font-family: FAMILY_NAME, GENERIC_NAME;</code>.
The GENERIC_NAME is optional, and is a fallback font in case the other specified font is not available. This is covered in the next challenge.
Family names are case-sensitive and need to be wrapped in quotes if there is a space in the name. For example, you need quotes to use the <code>"Open Sans"</code> font, but not to use the <code>Lobster</code> font.
</section>

## Instructions
<section id='instructions'>
Create a <code>font-family</code> CSS rule that uses the <code>Lobster</code> font, and ensure that it will be applied to your <code>h2</code> element.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Import the <code>Lobster</code> font.
    testString: 'assert(new RegExp("googleapis", "gi").test(code), "Import the <code>Lobster</code> font.");'
  - text: Your <code>h2</code> element should use the font <code>Lobster</code>.
    testString: 'assert($("h2").css("font-family").match(/lobster/i), "Your <code>h2</code> element should use the font <code>Lobster</code>.");'
  - text: Use an <code>h2</code> CSS selector to change the font.
    testString: 'assert(/\s*h2\s*\{\s*font-family\:\s*(\"|")?Lobster(\"|")?\s*;\s*\}/gi.test(code), "Use an <code>h2</code> CSS selector to change the font.");'
  - text: Your <code>p</code> element should still use the font <code>monospace</code>.
    testString: 'assert($("p").css("font-family").match(/monospace/i), "Your <code>p</code> element should still use the font <code>monospace</code>.");'

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

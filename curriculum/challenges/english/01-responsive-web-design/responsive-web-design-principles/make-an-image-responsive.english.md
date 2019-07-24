---
id: 587d78b1367417b2b2512b09
title: Make an Image Responsive
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/cz763UD'
---

## Description
<section id='description'>
Making images responsive with CSS is actually very simple. Instead of applying an absolute width to an element:
<code>img { width: 720px; }</code>
You can use:

```css
img {
  max-width: 100%;
  display: block;
  height: auto;
}
```

The <code>max-width</code> property of 100% scales the image to fit the width of its container, but the image won't stretch wider than its original width. Setting the <code>display</code> property to block changes the image from an inline element (its default), to a block element on its own line. The <code>height</code> property of auto keeps the original aspect ratio of the image.
</section>

## Instructions
<section id='instructions'>
Add style rules for the <code>img</code> tag to make it responsive to the size of its container. It should display as a block-level element, it should fit the full width of its container without stretching, and it should keep its original aspect ratio.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>img</code> tag should have a <code>max-width</code> set to 100%.
    testString: assert(code.match(/max-width:\s*?100%;/g));
  - text: Your <code>img</code> tag should have a <code>display</code> set to block.
    testString: assert($('img').css('display') == 'block');
  - text: Your <code>img</code> tag should have a <code>height</code> set to auto.
    testString: assert(code.match(/height:\s*?auto;/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

</style>

<img src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
 img {
   max-width: 100%;
   display: block;
   height: auto;
 }
</style>

<img src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
```

</section>

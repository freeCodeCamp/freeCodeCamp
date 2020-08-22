---
id: 587d78b1367417b2b2512b09
title: Make an Image Responsive
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/p/pzrPu4/cz763UD'
forumTopicId: 301140
---

## Description
<section id='description'>
Making images responsive with CSS is actually very simple. You just need to add these properties to an image:

```css
img {
  max-width: 100%;
  height: auto;
}
```

The `max-width` of `100%` will make sure the image is never wider than the container it is in, and the `height` of `auto` will make the image keep its original aspect ratio.
</section>

## Instructions
<section id='instructions'>

Add the style rules to the `responsive-img` class to make it responsive. It should never be wider than its container (in this case, it's the preview window) and it should keep its original aspect ratio. After you have added your code, resize the preview to see how your images behave.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>responsive-img</code> class should have a <code>max-width</code> set to <code>100%</code>.
    testString: assert(getComputedStyle($('.responsive-img')[0]).maxWidth === '100%');
  - text: Your <code>responsive-img</code> class should have a <code>height</code> set to <code>auto</code>.
    testString: assert(code.match(/height:\s*?auto;/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
.responsive-img {


}

img {
  width: 600px;
}
</style>

<img class="responsive-img" src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
<img src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
.responsive-img {
  max-width: 100%;
  height: auto;
}

img {
  width: 600px;
}
</style>

<img class="responsive-img" src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
<img src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
```

</section>

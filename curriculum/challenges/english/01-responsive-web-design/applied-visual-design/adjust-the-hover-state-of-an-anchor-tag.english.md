---
id: 587d781d367417b2b2512ac8
title: Adjust the Hover State of an Anchor Tag
challengeType: 0
videoUrl: 'https://scrimba.com/c/cakRGcm'
forumTopicId: 301035
---

## Description
<section id='description'>
This challenge will touch on the usage of pseudo-classes. A pseudo-class is a keyword that can be added to selectors, in order to select a specific state of the element.
For example, the styling of an anchor tag can be changed for its hover state using the <code>:hover</code> pseudo-class selector. Here's the CSS to change the <code>color</code> of the anchor tag to red during its hover state:

```css
a:hover {
  color: red;
}
```

</section>

## Instructions
<section id='instructions'>
The code editor has a CSS rule to style all <code>a</code> tags black. Add a rule so that when the user hovers over the <code>a</code> tag, the <code>color</code> is blue.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The anchor tag <code>color</code> should remain black, only add CSS rules for the <code>:hover</code> state.
    testString: assert($('a').css('color') == 'rgb(0, 0, 0)');
  - text: The anchor tag should have a <code>color</code> of blue on hover.
    testString: assert(code.match(/a:hover\s*?{\s*?color:\s*?(blue|rgba\(\s*?0\s*?,\s*?0\s*?,\s*?255\s*?,\s*?1\s*?\)|#00F|rgb\(\s*?0\s*?,\s*?0\s*?,\s*?255\s*?\))\s*?;\s*?}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  a {
    color: #000;
  }



</style>
<a href="https://freecatphotoapp.com/" target="_blank">CatPhotoApp</a>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  a {
    color: #000;
  }
  a:hover {
    color: rgba(0,0,255,1);
  }
</style>
<a href="https://freecatphotoapp.com/" target="_blank">CatPhotoApp</a>
```

</section>

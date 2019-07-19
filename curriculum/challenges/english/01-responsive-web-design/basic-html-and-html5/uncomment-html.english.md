---
id: bad87fee1348bd9aedf08802
title: Uncomment HTML
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cBmG9T7'
---

## Description
<section id='description'>
Commenting is a way that you can leave comments for other developers within your code without affecting the resulting output that is displayed to the end user.
Commenting is also a convenient way to make code inactive without having to delete it entirely.
Comments in HTML starts with <code>&#60;!--</code>, and ends with a <code>--&#62;</code>
</section>

## Instructions
<section id='instructions'>
Uncomment your <code>h1</code>, <code>h2</code> and <code>p</code> elements.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Make your <code>h1</code> element visible on your page by uncommenting it.
    testString: assert($("h1").length > 0, 'Make your <code>h1</code> element visible on your page by uncommenting it.');
  - text: Make your <code>h2</code> element visible on your page by uncommenting it.
    testString: assert($("h2").length > 0, 'Make your <code>h2</code> element visible on your page by uncommenting it.');
  - text: Make your <code>p</code> element visible on your page by uncommenting it.
    testString: assert($("p").length > 0, 'Make your <code>p</code> element visible on your page by uncommenting it.');
  - text: Be sure to delete all trailing comment tags&#44; i.e. <code>--&#62;</code>.
    testString: assert(!/[^fc]-->/gi.test(code.replace(/ *<!--[^fc]*\n/g,'')), 'Be sure to delete all trailing comment tags&#44; i.e. <code>--&#62;</code>.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<!--
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->
```

</div>



</section>

## Solution
<section id='solution'>

```js
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

</section>

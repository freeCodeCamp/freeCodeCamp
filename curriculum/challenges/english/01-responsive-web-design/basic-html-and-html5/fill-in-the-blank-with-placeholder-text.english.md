---
id: bad87fee1348bd9aedf08833
title: Fill in the Blank with Placeholder Text
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/p/pVMPUv/cgR7Dc7'
forumTopicId: 18178
---

## Description
<section id='description'>
Web developers traditionally use <dfn>lorem ipsum text</dfn> as placeholder text. The lorem ipsum text is randomly scraped from a famous passage by Cicero of Ancient Rome.
Lorem ipsum text has been used as placeholder text by typesetters since the 16th century, and this tradition continues on the web.
Well, 5 centuries is long enough. Since we're building a CatPhotoApp, let's use something called "kitty ipsum text".
</section>

## Instructions
<section id='instructions'>
Replace the text inside your <code>p</code> element with the first few words of this kitty ipsum text: <code>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>p</code> element should contain the first few words of the provided <code>kitty ipsum text</code>.
    testString: assert.isTrue((/Kitty(\s)+ipsum/gi).test($("p").text()));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Hello Paragraph</p>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff</p>
```

</section>

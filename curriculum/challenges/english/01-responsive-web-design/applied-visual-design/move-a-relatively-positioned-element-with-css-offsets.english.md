---
id: 587d781e367417b2b2512aca
title: Move a Relatively Positioned Element with CSS Offsets
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bQEA4'
forumTopicId: 301065
---

## Description
<section id='description'>
The CSS offsets of <code>top</code> or <code>bottom</code>, and <code>left</code> or <code>right</code> tell the browser how far to offset an item relative to where it would sit in the normal flow of the document. You're offsetting an element away from a given spot, which moves the element away from the referenced side (effectively, the opposite direction). As you saw in the last challenge, using the top offset moved the <code>h2</code> downwards. Likewise, using a left offset moves an item to the right.
<img src='https://cdn-media-1.freecodecamp.org/imgr/eWWi3gZ.gif' alt='' />
</section>

## Instructions
<section id='instructions'>
Use CSS offsets to move the <code>h2</code> 15 pixels to the right and 10 pixels up.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use a CSS offset to relatively position the <code>h2</code> 10px upwards. In other words, move it 10px away from the <code>bottom</code> of where it normally sits.
    testString: assert($('h2').css('bottom') == '10px');
  - text: Your code should use a CSS offset to relatively position the <code>h2</code> 15px towards the right. In other words, move it 15px away from the <code>left</code> of where it normally sits.
    testString: assert($('h2').css('left') == '15px');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
<style>
  h2 {
    position: relative;


  }
</style>
</head>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<head>
<style>
  h2 {
    position: relative;
    left: 15px;
    bottom: 10px;
  }
</style>
</head>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```

</section>

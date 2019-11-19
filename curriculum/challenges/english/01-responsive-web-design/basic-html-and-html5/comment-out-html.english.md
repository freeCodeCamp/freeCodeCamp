---
id: bad87fee1348bd9aedf08804
title: Comment out HTML
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cGyGbca'
forumTopicId: 16782
---

## Description
<section id='description'>
Remember that in order to start a comment, you need to use <code>&#60;!--</code> and to end a comment, you need to use <code>--&#62;</code>
Here you'll need to end the comment before your <code>h2</code> element begins.
</section>

## Instructions
<section id='instructions'>
Comment out your <code>h1</code> element and your <code>p</code> element, but not your <code>h2</code> element.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>h1</code> element should be commented out so that it is not visible on the page.
    testString: assert(($("h1").length === 0));
  - text: Your <code>h2</code> element should not be commented out so that it is visible on the page.
    testString: assert(($("h2").length > 0));
  - text: Your <code>p</code> element should be commented out so that it is not visible on the page.
    testString: assert(($("p").length === 0));
  - text: Each of your comments should be closed with <code>--&#62;</code>.
    testString: assert(code.match(/[^fc]-->/g).length > 1);
  - text: You should not change the order of the <code>h1</code> <code>h2</code> or <code>p</code> in the code.
    testString: assert((code.match(/<([a-z0-9]){1,2}>/g)[0]==="<h1>" && code.match(/<([a-z0-9]){1,2}>/g)[1]==="<h2>" && code.match(/<([a-z0-9]){1,2}>/g)[2]==="<p>") );

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

```html
<!--<h1>Hello World</h1>-->
<h2>CatPhotoApp</h2> 
<!--<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p> -->
```

</section>

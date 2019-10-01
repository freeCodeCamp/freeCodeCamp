---
id: bad87fee1348bd9aedf08804
title: Comment out HTML
challengeType: 0
videoUrl: https://scrimba.com/p/pVMPUv/cGyGbca
forumTopicId: 16782
localeTitle: Комментарий HTML
---

## Description
<section id='description'>
Помните, что для того, чтобы начать комментарий, вам нужно использовать <code>&lt;!--</code> и для завершения комментария, вам нужно использовать <code>--&gt;</code> Здесь вам нужно будет закончить комментарий до того, как начнется ваш элемент <code>h2</code> .
</section>

## Instructions
<section id='instructions'>
Вы можете комментровать элементы <code>h1</code> и <code>p</code> , но не элемент <code>h2</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Comment out your <code>h1</code> element so that it is not visible on your page.
    testString: assert(($("h1").length === 0));
  - text: Leave your <code>h2</code> element uncommented so that it is visible on your page.
    testString: assert(($("h2").length > 0));
  - text: Comment out your <code>p</code> element so that it is not visible on your page.
    testString: assert(($("p").length === 0));
  - text: Be sure to close each of your comments with <code>--&#62;</code>.
    testString: assert(code.match(/[^fc]-->/g).length > 1);
  - text: Do not change the order of the <code>h1</code> <code>h2</code> or <code>p</code> in the code.
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

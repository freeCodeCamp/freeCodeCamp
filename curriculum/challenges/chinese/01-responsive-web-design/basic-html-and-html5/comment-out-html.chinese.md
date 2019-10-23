---
id: bad87fee1348bd9aedf08804
title: Comment out HTML
challengeType: 0
videoUrl: ''
localeTitle: 评论HTML
---

## Description
<section id="description">请记住，为了开始评论，您需要使用<code>&lt;!--</code>并结束评论，您需要使用<code>--&gt;</code>这里您需要在<code>h2</code>元素开始之前结束评论。 </section>

## Instructions
<section id="instructions">注释掉你的<code>h1</code>元素和你的<code>p</code>元素，但不是你的<code>h2</code>元素。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 注释掉你的<code>h1</code>元素，使其在你的页面上不可见。
    testString: 'assert(($("h1").length === 0), "Comment out your <code>h1</code> element so that it is not visible on your page.");'
  - text: 保持<code>h2</code>元素取消注释，以便在页面上显示。
    testString: 'assert(($("h2").length > 0), "Leave your <code>h2</code> element uncommented so that it is visible on your page.");'
  - text: 注释掉你的<code>p</code>元素，使其在你的页面上不可见。
    testString: 'assert(($("p").length === 0), "Comment out your <code>p</code> element so that it is not visible on your page.");'
  - text: 请务必使用<code>--&gt;</code>关闭每条评论。
    testString: 'assert(code.match(/[^fc]-->/g).length > 1, "Be sure to close each of your comments with <code>--&#62;</code>.");'
  - text: 请勿更改代码中<code>h1</code> <code>h2</code>或<code>p</code>的顺序。
    testString: 'assert((code.match(/<([a-z0-9]){1,2}>/g)[0]==="<h1>" && code.match(/<([a-z0-9]){1,2}>/g)[1]==="<h2>" && code.match(/<([a-z0-9]){1,2}>/g)[2]==="<p>") , "Do not change the order of the <code>h1</code> <code>h2</code> or <code>p</code> in the code.");'

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
// solution required
```
</section>

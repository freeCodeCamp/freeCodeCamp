---
id: bad87fee1348bd9aedf08802
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cBmG9T7'
forumTopicId: 18329
title: 去除 HTML 的注释
---

## Description
<section id='description'>
注释的作用是给代码添加一些说明，方便团队合作或日后自己查看，但又不影响代码本身。
注释的另一个用途就是在不删除代码的前提下，让代码不起作用。
在 HTML 中，注释的开始标记是<code>&#60;!--</code>，结束标记是<code>--&#62;</code>。
</section>

## Instructions
<section id='instructions'>
现在我们反其道而行之，去掉<code>h1</code>元素、<code>h2</code>元素、<code>p</code>元素的注释。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '确保网页中能看到<code>h1</code>元素。'
    testString: assert($("h1").length > 0);
  - text: '确保网页中能看到<code>h2</code>元素。'
    testString: assert($("h2").length > 0);
  - text: '确保网页中能看到<code>p</code>元素。'
    testString: assert($("p").length > 0);
  - text: '确保删除了注释的结束标记<code>--&#62;</code>。'
    testString: assert(!$('*:contains("-->")')[1]);

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
</section>
              
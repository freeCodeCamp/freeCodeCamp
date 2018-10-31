---
id: bad87fed1348bd9aedf08833
title: Delete HTML Elements
challengeType: 0
videoUrl: ''
localeTitle: 删除HTML元素
---

## Description
<section id="description">我们的手机没有太多的垂直空间。让我们删除不必要的元素，以便我们开始构建CatPhotoApp。 </section>

## Instructions
<section id="instructions">删除你的<code>h1</code>元素，以便我们简化视图。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 删除你的<code>h1</code>元素。
    testString: 'assert(!code.match(/<h1>/gi) && !code.match(/<\/h1>/gi), "Delete your <code>h1</code> element.");'
  - text: 将<code>h2</code>元素留在页面上。
    testString: 'assert(code.match(/<h2>[\w\W]*<\/h2>/gi), "Leave your <code>h2</code> element on the page.");'
  - text: 将<code>p</code>元素留在页面上。
    testString: 'assert(code.match(/<p>[\w\W]*<\/p>/gi), "Leave your <code>p</code> element on the page.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

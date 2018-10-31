---
id: 587d78a3367417b2b2512ace
title: Push Elements Left or Right with the float Property
challengeType: 0
videoUrl: ''
localeTitle: 使用float属性向左或向右推送元素
---

## Description
<section id="description">下一个定位工具实际上不使用<code>position</code> ，而是设置元素的<code>float</code>属性。浮动元素从文档的正常流中移除，并推送到其包含的父元素的<code>left</code>或<code>right</code> 。它通常与<code>width</code>属性一起使用，以指定浮动元素需要多少水平空间。 </section>

## Instructions
<section id="instructions">给定的标记可以很好地用作两列布局，其中<code>section</code>和<code>aside</code>元素彼此相邻。给<code>#left</code>项<code>float</code>的<code>left</code>和<code>#right</code>项<code>float</code>的<code>right</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: id为<code>left</code>的元素的<code>float</code>值应为<code>left</code> 。
    testString: 'assert($("#left").css("float") == "left", "The element with id <code>left</code> should have a <code>float</code> value of <code>left</code>.");'
  - text: id为<code>right</code>的元素的<code>float</code>值应为<code>right</code> 。
    testString: 'assert($("#right").css("float") == "right", "The element with id <code>right</code> should have a <code>float</code> value of <code>right</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
  <style>
  #left {

    width: 50%;
  }
  #right {

    width: 40%;
  }
  aside, section {
    padding: 2px;
    background-color: #ccc;
  }
  </style>
</head>
<body>
  <header>
    <h1>Welcome!</h1>
  </header>
  <section id="left">
    <h2>Content</h2>
    <p>Good stuff</p>
  </section>
  <aside id="right">
    <h2>Sidebar</h2>
    <p>Links</p>
  </aside>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

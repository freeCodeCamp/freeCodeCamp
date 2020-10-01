---
id: 587d78a3367417b2b2512ace
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MDqu2'
forumTopicId: 301066
title: 使用 float 属性将元素左浮动或右浮动
---

## Description
<section id='description'>
接下来要介绍的定位机制并不是 <code>position</code> 属性的选项，它通过元素的 <code>float</code> 属性来设置。浮动元素不在文档流中，它向左或向右浮动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。通常需要用 <code>width</code> 属性来指定浮动元素占据的水平空间。
</section>

## Instructions
<section id='instructions'>
设置 <code>#left</code> 元素的 <code>float</code> 为 <code>left</code>，设置 <code>#right</code> 元素的 <code>float</code> 为 <code>right</code>。使这两个元素按两列布局，<code>section</code> 和 <code>aside</code> 左右排列。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'id 为 <code>left</code> 的元素应该有一个值为 <code>left</code> 的 <code>float</code> CSS 属性。'
    testString: assert($('#left').css('float') == 'left');
  - text: 'id 为 <code>right</code> 的元素应该有一个值为 <code>right</code> 的 <code>float</code> CSS 属性。'
    testString: assert($('#right').css('float') == 'right');

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
    <h1>欢迎！</h1>
  </header>
  <section id="left">
    <h2>内容</h2>
    <p>好样的</p>
  </section>
  <aside id="right">
    <h2>侧边栏</h2>
    <p>一些链接</p>
  </aside>
</body>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              
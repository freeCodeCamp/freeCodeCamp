---
id: 587d781e367417b2b2512aca
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bQEA4'
forumTopicId: 301065
title: 使用 CSS 偏移移动相对定位的元素
---

## Description
<section id='description'>
CSS 里面的 <code>top</code>、<code>bottom</code>、<code>left</code> 和 <code>right</code> 定义了元素在相应方位的偏移距离。元素将从当前位置，向属性相反的方向偏移。就像你在上一个挑战看到的，<code>top</code> 属性使 <code>h2</code> 向下移动。<code>left</code> 属性使元素向右移动。
<img src='https://i.imgur.com/eWWi3gZ.gif' alt='' />
</section>

## Instructions
<section id='instructions'>
通过 CSS 属性把 <code>h2</code> 向上移动 10 像素，向右移动 15 像素。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你应该使用 CSS 属性使 <code>h2</code> 相对当前位置向上移动 <code>10px</code>。也就是说，从 <code>h2</code> 当前位置远离 <code>bottom</code> <code>10px</code>。'
    testString: assert($('h2').css('bottom') == '10px');
  - text: '你应该使用 CSS 属性使 <code>h2</code> 相对当前位置向右移动 <code>15px</code>。也就是说，从 <code>h2</code> 当前位置远离 <code>left</code> <code>15px</code>。'
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
  <h1>论如何优雅定位</h1>
  <h2>我要离 h1 近一点！</h2>
  <p>我觉得 h2 没变，还是在它原来的位置，相离莫相忘，且行且珍惜。</p>
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
              
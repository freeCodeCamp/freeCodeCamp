---
id: 587d781e367417b2b2512ac9
title: Change an Element's Relative Position
challengeType: 0
videoUrl: 'https://scrimba.com/c/czVmMtZ'
forumTopicId: 301044
localeTitle: 更改元素的相对位置
---

## Description
<section id='description'>
在 CSS 里一切 HTML 元素皆为盒子，也就是通常所说的 <code>盒模型</code>。块级元素自动从新的一行开始（比如标题、段落以及 div），行内元素排列在上一个元素后（比如图片以及 span）。元素默认按照这种方式布局称为文档的 <code>普通流</code>，同时 CSS 提供了 position 属性来覆盖它。
当元素的 position 设置为 <code>relative</code> 时，它允许你通过 CSS 指定该元素在当前普通流页面下的相对偏移量。 CSS 里控制各个方向偏移量的对应的属性是 <code>left</code>、<code>right</code>、<code>top</code> 和 <code>bottom</code>。它们代表着从原来的位置向对应的方向偏移指定的像素、百分比或者 ems。下面的例子展示了段落向上偏移 10 像素：

```css
p {
  position: relative;
  bottom: 10px;
}
```

把元素的 position 设置成 relative 并不会改变该元素在普通流布局所占的位置，也不会对其它元素的位置产生影响。
<strong>注意</strong><br>定位可以让你在页面布局上更灵活、高效。注意不管元素的定位是怎样，内部的 HTML 代码阅读起来应该是整洁、有意义的。这样也可以让视障人员（他们重度依赖辅助设备比如屏幕阅读软件）能够浏览你的网页。
</section>

## Instructions
<section id='instructions'>
把 <code>h2</code> 的 <code>position</code> 设置成 <code>relative</code>，使用相应的 CSS 属性调整 <code>h2</code> 的位置，使其向下偏移 15 像素，同时还在普通流中占据原来的位置。注意不要对 h1 和 p 元素的位置产生影响。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>h2</code> 元素应该添加 <code>position</code> 属性并赋值 <code>relative</code>。'
    testString: assert($('h2').css('position') == 'relative');
  - text: '你应该使用 CSS 属性调整 <code>h2</code> 的位置使其从原来的位置向下偏移 <code>15px</code>。'
    testString: assert($('h2').css('top') == '15px');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h2 {
    
    
  }
</style>
<body>
  <h1>论如何优雅定位</h1>
  <h2>我要离 h1 远一点！</h2>
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
              
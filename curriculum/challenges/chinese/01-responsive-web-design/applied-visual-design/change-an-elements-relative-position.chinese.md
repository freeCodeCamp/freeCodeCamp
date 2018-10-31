---
id: 587d781e367417b2b2512ac9
title: Change an Element's Relative Position
challengeType: 0
videoUrl: ''
localeTitle: 更改元素的相对位置
---

## Description
<section id="description"> CSS将每个HTML元素视为自己的框，通常称为<code>CSS Box Model</code> 。块级项目自动从新行开始（想想标题，段落和div），而内联项目位于周围内容（如图像或跨度）中。以这种方式的元素的默认布局称为文档的<code>normal flow</code> ，但CSS提供position属性来覆盖它。当元素的位置设置为<code>relative</code> ，它允许您指定CSS应如何<i>相</i>对于页面正常流中的当前位置移动它。它与<code>left</code>或<code>right</code>以及<code>top</code>或<code>bottom</code>的CSS偏移属性配对。这些表示将物品从通常定位的位置<i>移开的</i>像素，百分比或ems的数量。以下示例将段落从底部移开10个像素： <blockquote> p { <br>位置：相对; <br>底部：10px; <br> } </blockquote>将元素的位置更改为相对位置不会将其从正常流中移除 - 其周围的其他元素仍然表现为该项位于其默认位置。 <strong>注意</strong> <br>定位为页面的可视化布局提供了很大的灵活性和强大功能。值得记住的是，无论元素的位置如何，底层的HTML标记都应该有条理，从上到下阅读时才有意义。这就是具有视觉障碍的用户（依赖屏幕阅读器等辅助设备）访问您的内容的方式。 </section>

## Instructions
<section id="instructions">将<code>h2</code>的<code>position</code>更改为<code>relative</code> <code>position</code> ，并使用CSS偏移将其移动到距离正常流动位置<code>top</code> 15个像素的位置。请注意，周围的h1和p元素的位置没有影响。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>h2</code>元素的<code>position</code>属性应设置为<code>relative</code> 。
    testString: 'assert($("h2").css("position") == "relative", "The <code>h2</code> element should have a <code>position</code> property set to <code>relative</code>.");'
  - text: 您的代码应该使用CSS偏移来相对地将<code>h2</code> 15px定位在远离其正常位置的<code>top</code> 。
    testString: 'assert($("h2").css("top") == "15px", "Your code should use a CSS offset to relatively position the <code>h2</code> 15px away from the <code>top</code> of where it normally sits.");'

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
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
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

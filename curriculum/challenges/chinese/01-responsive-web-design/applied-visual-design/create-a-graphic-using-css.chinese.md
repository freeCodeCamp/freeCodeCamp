---
id: 587d78a6367417b2b2512add
title: Create a Graphic Using CSS
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDWPs6'
forumTopicId: 301048
localeTitle: 使用 CSS 创建一个图形
---

## Description
<section id='description'>
术语表：blur-radius => 模糊半径，spread-radius => 辐射半径，transparent => 透明的，border-radius => 圆角边框。
通过使用选择器选择不同的元素并改变其属性，你可以创造一些有趣的形状。比如新月。你可以使用 <code>box-shadow</code> 属性来设置元素的阴影，<code>border-radius</code> 属性控制元素的圆角边框。
首先你将会创建一个圆的、透明的对象，它具有模糊阴影并略微向两边递减。如你所见，这个阴影其实就是新月形狀。
为了创建一个圆形的对象，<code>border-radius</code> 应该被设置成 50%。
你应该还记得之前关卡的 <code>box-shadow</code> 属性以及它的依次取值 <code>offset-x</code>、<code>offset-y</code>、<code>blur-radius</code>、<code>spread-radius</code> 和颜色值。其中<code>blur-radius</code> 和 <code>spread-radius</code> 是可选的。
</section>

## Instructions
<section id='instructions'>
把编辑器里的正方形元素变成新月形状。首先，把 <code>background-color</code> 改为 transparent，接着把 <code>border-radius</code> 属性设置成 50%，以创建一个圆形。最后，更改 <code>box-shadow</code> 属性，使其 <code>offset-x</code> 为 25px，<code>offset-y</code> 为 10px，<code>blur-radius</code> 为 0，<code>spread-radius</code> 为 0，<code>color</code> 为 blue。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>background-color</code> 属性应该取值 <code>transparent</code>。'
    testString: assert(code.match(/background-color:\s*?transparent;/gi));
  - text: '<code>border-radius</code> 属性应该取值 <code>50%</code>。'
    testString: assert(code.match(/border-radius:\s*?50%;/gi));
  - text: '<code>box-shadow</code> 属性的 <code>offset-x</code>、<code>offset-y</code>、<code>blur-radius</code>、<code>spread-radius</code> 和 <code>color</code> 应该依次取值<code>25px</code>、<code>10px</code>、<code>0</code>、<code>0</code> 和 <code>blue</code>。'
    testString: assert(code.match(/box-shadow:\s*?25px\s+?10px\s+?0(px)?\s+?0(px)?\s+?blue\s*?;/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
.center{
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100px;
  height: 100px;
  background-color: blue;
  border-radius: 0px;
  box-shadow: 25px 10px 10px 10px green; 
}

</style>
<div class="center"></div>
```

</div>



</section>

## Solution
<section id='solution'>


```html
// solution required
```

</section>
              
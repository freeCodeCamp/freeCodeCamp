---
id: 587d78a6367417b2b2512adc
title: Use the CSS Transform Property skewY to Skew an Element Along the Y-Axis
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MZ2uB'
forumTopicId: 301075
localeTitle: 使用 CSS Transform skex 属性沿Y轴倾斜元素
---

## Description
<section id='description'>
<code>skewX</code> 函数使指定元素沿 X 轴翻转指定的角度，想必你已经猜到了，<code>skewY</code> 属性使指定元素沿 Y 轴（垂直方向）翻转指定角度。
</section>

## Instructions
<section id='instructions'>
使用 <code>transform</code> 属性沿 Y 轴翻转 id 为 <code>top</code> 的元素 -10 度。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'id 为 <code>top</code> 的元素应该沿着 Y 轴翻转 -10 度。'
    testString: assert(code.match(/#top\s*?{\s*?.*?\s*?transform:\s*?skewY\(-10deg\);/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div { 
    width: 70%;
    height: 100px;
    margin: 50px auto;
  }
  #top {
    background-color: red;
    
  }
  #bottom {
    background-color: blue;
    transform: skewX(24deg);
  }
</style>

<div id="top"></div>
<div id="bottom"></div>
```

</div>



</section>

## Solution
<section id='solution'>


```html
// solution required
```

</section>
              
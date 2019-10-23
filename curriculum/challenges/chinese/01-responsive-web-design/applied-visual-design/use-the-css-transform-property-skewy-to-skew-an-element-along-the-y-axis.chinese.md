---
id: 587d78a6367417b2b2512adc
title: Use the CSS Transform Property skewY to Skew an Element Along the Y-Axis
challengeType: 0
videoUrl: ''
localeTitle: 使用CSS变换属性skewY沿Y轴倾斜元素
---

## Description
<section id="description">假设<code>skewX()</code>函数沿X轴将选定元素倾斜给定的度数，则<code>skewY()</code>属性沿Y（垂直）轴倾斜元素<code>skewY()</code>不足为奇了。 </section>

## Instructions
<section id="instructions">使用<code>transform</code>属性，沿Y轴倾斜<code>top</code> -10度的元素。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: id <code>top</code>的元素应沿其Y轴倾斜-10度。
    testString: 'assert(code.match(/#top\s*?{\s*?.*?\s*?transform:\s*?skewY\(-10deg\);/g), "The element with id <code>top</code> should be skewed by -10 degrees along its Y-axis.");'

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

```js
// solution required
```
</section>

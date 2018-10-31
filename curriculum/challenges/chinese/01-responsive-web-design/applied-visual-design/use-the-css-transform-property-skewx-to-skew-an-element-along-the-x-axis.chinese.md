---
id: 587d78a6367417b2b2512adb
title: Use the CSS Transform Property skewX to Skew an Element Along the X-Axis
challengeType: 0
videoUrl: ''
localeTitle: 使用CSS变换属性skewX沿X轴倾斜元素
---

## Description
<section id="description"> <code>transform</code>属性的下一个函数是<code>skewX()</code> ，它将选定元素沿其X（水平）轴倾斜给定的度数。以下代码沿X轴将段落元素倾斜-32度。 <blockquote> p { <br> transform：skewX（-32deg）; <br> } </blockquote></section>

## Instructions
<section id="instructions">使用<code>transform</code>属性将具有<code>bottom</code> id的元素沿X轴倾斜24度。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 具有id <code>bottom</code>的元素应沿其X轴倾斜24度。
    testString: 'assert(code.match(/#bottom\s*?{\s*?.*?\s*?transform:\s*?skewX\(24deg\);/g), "The element with id <code>bottom</code> should be skewed by 24 degrees along its X-axis.");'

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
    margin:  50px auto;
  }
  #top {
    background-color: red;
  }
  #bottom {
    background-color: blue;

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

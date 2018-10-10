---
id: 587d78a3367417b2b2512ad0
title: Center an Element Horizontally Using the margin Property
challengeType: 0
videoUrl: ''
localeTitle: 使用margin属性水平居中元素
---

## Description
<section id="description">另一种定位技术是将块元素水平居中。一种方法是将其<code>margin</code>设置为auto值。此方法也适用于图像。默认情况下，图像是内联元素，但在将<code>display</code>属性设置为block时可以更改为块元素。 </section>

## Instructions
<section id="instructions">居中的<code>div</code>通过添加在页面上<code>margin</code>属性与汽车的价值。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>div</code>应该有一个设置为auto的<code>margin</code> 。
    testString: 'assert(code.match(/margin:\s*?auto;/g), "The <code>div</code> should have a <code>margin</code> set to auto.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;

  }
</style>
<div></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

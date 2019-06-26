---
id: 587d78af367417b2b2512b00
title: Use the align-self Property
challengeType: 0
videoUrl: ''
localeTitle: 使用align-self属性
---

## Description
<section id="description"> flex项的最终属性是<code>align-self</code> 。此属性允许您单独调整每个项目的对齐方式，而不是一次性设置它们。这很有用，因为使用CSS属性<code>float</code> ， <code>clear</code>和<code>vertical-align</code>其他常用调整技术对flex项不起作用。 <code>align-self</code>接受与<code>align-items</code>相同的值，并将覆盖<code>align-items</code>属性设置的任何值。 </section>

## Instructions
<section id="instructions">将CSS属性<code>align-self</code>添加到<code>#box-1</code>和<code>#box-2</code> 。给<code>#box-1</code>一个中心值，给<code>#box-2</code>一个flex-end值。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 測試文本
    testString: assert(true);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;

    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

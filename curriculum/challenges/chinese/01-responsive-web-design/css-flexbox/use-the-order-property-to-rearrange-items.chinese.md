---
id: 587d78ae367417b2b2512aff
title: Use the order Property to Rearrange Items
challengeType: 0
videoUrl: ''
localeTitle: 使用order属性重新排列项目
---

## Description
<section id="description"> <code>order</code>属性用于告诉CSS Flex项目在Flex容器中的显示顺序。默认情况下，项目将以与源HTML相同的顺序显示。该属性将数字作为值，可以使用负数。 </section>

## Instructions
<section id="instructions">将CSS属性<code>order</code>添加到<code>#box-1</code>和<code>#box-2</code> 。给<code>#box-1</code>一个值2，给<code>#box-2</code>一个值1。 </section>

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

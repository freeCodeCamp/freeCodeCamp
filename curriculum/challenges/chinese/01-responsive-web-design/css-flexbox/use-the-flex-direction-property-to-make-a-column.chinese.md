---
id: 587d78ac367417b2b2512af4
title: Use the flex-direction Property to Make a Column
challengeType: 0
videoUrl: ''
localeTitle: 使用flex-direction属性创建列
---

## Description
<section id="description">最后两个挑战使用了<code>flex-direction</code>属性设置为row。此属性还可以通过垂直堆叠Flex容器的子项来创建列。 </section>

## Instructions
<section id="instructions">将CSS属性<code>flex-direction</code>添加到<code>#box-container</code>元素，并为其赋值column。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>#box-container</code>元素应该将<code>flex-direction</code>属性设置为column。'
    testString: 'assert($("#box-container").css("flex-direction") == "column", "The <code>#box-container</code> element should have a <code>flex-direction</code> property set to column.");'

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
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
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

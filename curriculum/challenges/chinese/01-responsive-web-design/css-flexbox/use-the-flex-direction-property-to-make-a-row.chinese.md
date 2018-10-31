---
id: 587d78ab367417b2b2512af2
title: Use the flex-direction Property to Make a Row
challengeType: 0
videoUrl: ''
localeTitle: 使用flex-direction属性创建一行
---

## Description
<section id="description">添加<code>display: flex</code> to a element将其转换为flex容器。这使得可以将该元素的任何子节点对齐成行或列。您可以通过将<code>flex-direction</code>属性添加到父项并将其设置为行或列来完成此操作。创建行将水平对齐子项，创建列将垂直对齐子项。 <code>flex-direction</code>其他选项是row-reverse和column-reverse。 <strong>注意</strong> <br> <code>flex-direction</code>属性的默认值为row。 </section>

## Instructions
<section id="instructions">将CSS属性<code>flex-direction</code>添加到<code>#box-container</code>元素，并为其赋值row-reverse。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>#box-container</code>元素的<code>flex-direction</code>属性应设置为row-reverse。'
    testString: 'assert($("#box-container").css("flex-direction") == "row-reverse", "The <code>#box-container</code> element should have a <code>flex-direction</code> property set to row-reverse.");'

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

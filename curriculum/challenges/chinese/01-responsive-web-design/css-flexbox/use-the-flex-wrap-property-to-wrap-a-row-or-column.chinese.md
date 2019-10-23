---
id: 587d78ad367417b2b2512afa
title: Use the flex-wrap Property to Wrap a Row or Column
challengeType: 0
videoUrl: ''
localeTitle: 使用flex-wrap属性包装行或列
---

## Description
<section id="description"> CSS flexbox具有将flex项分割为多行（或列）的功能。默认情况下，Flex容器将所有Flex项目放在一起。例如，一行将全部在一行上。但是，使用<code>flex-wrap</code>属性，它会告诉CSS包装项目。这意味着额外的项目将移动到新的行或列中。包装发生的断点取决于物品的大小和容器的大小。 CSS还有包装方向的选项： <ul><li> <code>nowrap</code> ：这是默认设置，不包装项目。 </li><li> <code>wrap</code> ：如果项目在一行中，则从左到右包装，如果它们在列中，则从上到下包装。 </li><li> <code>wrap-reverse</code> ：如果项目在一行中，则从下到上包装项目;如果它们在列中，则从右到左包装。 </li></ul></section>

## Instructions
<section id="instructions">当前布局对于一行有太多的框。将CSS属性<code>flex-wrap</code>添加到<code>#box-container</code>元素，并为其赋值wrap。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>#box-container</code>元素应该将<code>flex-wrap</code>属性设置为wrap值。'
    testString: 'assert($("#box-container").css("flex-wrap") == "wrap", "The <code>#box-container</code> element should have the <code>flex-wrap</code> property set to a value of wrap.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
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

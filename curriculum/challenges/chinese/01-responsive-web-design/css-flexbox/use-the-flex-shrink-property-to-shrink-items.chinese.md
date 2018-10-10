---
id: 587d78ad367417b2b2512afb
title: Use the flex-shrink Property to Shrink Items
challengeType: 0
videoUrl: ''
localeTitle: 使用flex-shrink属性收缩项目
---

## Description
<section id="description">到目前为止，挑战中的所有属性都适用于Flex容器（flex项的父级）。但是，flex项有几个有用的属性。第一个是<code>flex-shrink</code>属性。当它被使用时，如果柔性容器太小，它允许物品收缩。当父容器的宽度小于其中所有flex项的组合宽度时，项会收缩。 <code>flex-shrink</code>属性将数字作为值。数字越大，与容器中的其他项目相比，它将收缩得越多。例如，如果一个项目的<code>flex-shrink</code>值为1而另一个项目的<code>flex-shrink</code>值为3，则值为3的项目将缩小为另一个项目的三倍。 </section>

## Instructions
<section id="instructions">将CSS属性<code>flex-shrink</code>添加到<code>#box-1</code>和<code>#box-2</code> 。将<code>#box-1</code>的值设为1，将<code>#box-2</code>的值设为2。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>#box-1</code>元素应将<code>flex-shrink</code>属性设置为值1。'
    testString: 'assert($("#box-1").css("flex-shrink") == "1", "The <code>#box-1</code> element should have the <code>flex-shrink</code> property set to a value of 1.");'
  - text: '<code>#box-2</code>元素的<code>flex-shrink</code>属性应设置为值2。'
    testString: 'assert($("#box-2").css("flex-shrink") == "2", "The <code>#box-2</code> element should have the <code>flex-shrink</code> property set to a value of 2.");'

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
    width: 100%;
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
    width: 100%;
    height: 200px;

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

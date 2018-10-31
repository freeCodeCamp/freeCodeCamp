---
id: 587d78ae367417b2b2512afc
title: Use the flex-grow Property to Expand Items
challengeType: 0
videoUrl: ''
localeTitle: 使用flex-grow属性扩展项目
---

## Description
<section id="description">与<code>flex-shrink</code>相反的是<code>flex-grow</code>属性。回想一下，当容器缩小时， <code>flex-shrink</code>控制项目的大小。当父容器展开时， <code>flex-grow</code>属性控制项的大小。使用上一个挑战中的类似示例，如果一个项目的<code>flex-grow</code>值为1而另一个项目的<code>flex-grow</code>值为3，则值为3的项目将增长为另一个项目的三倍。 </section>

## Instructions
<section id="instructions">将CSS属性<code>flex-grow</code>添加到<code>#box-1</code>和<code>#box-2</code> 。将<code>#box-1</code>的值设为1，将<code>#box-2</code>的值设为2。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>#box-1</code>元素应将<code>flex-grow</code>属性设置为值1。'
    testString: 'assert($("#box-1").css("flex-grow") == "1", "The <code>#box-1</code> element should have the <code>flex-grow</code> property set to a value of 1.");'
  - text: '<code>#box-2</code>元素应将<code>flex-grow</code>属性设置为值2。'
    testString: 'assert($("#box-2").css("flex-grow") == "2", "The <code>#box-2</code> element should have the <code>flex-grow</code> property set to a value of 2.");'

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

  }

  #box-2 {
    background-color: orangered;
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

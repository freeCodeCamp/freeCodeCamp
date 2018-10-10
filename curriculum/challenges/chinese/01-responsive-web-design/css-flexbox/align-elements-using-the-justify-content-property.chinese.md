---
id: 587d78ac367417b2b2512af6
title: Align Elements Using the justify-content Property
challengeType: 0
videoUrl: ''
localeTitle: 使用justify-content属性对齐元素
---

## Description
<section id="description">有时，flex容器中的flex项不会填充容器中的所有空间。通常希望告诉CSS如何以特定方式对齐和展开弹性项目。幸运的是， <code>justify-content</code>属性有几个选项可以做到这一点。但首先，在审查这些选项之前，需要了解一些重要的术语。 <a href="https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg" target="_blank">这是一个有用的图像，显​​示了一行来说明下面的概念。</a>回想一下，将flex容器设置为一行可以从左到右并排放置Flex项目。设置为列的弹性容器将弹性项目从上到下放置在垂直堆栈中。对于每个，柔性项目的排列方向称为<strong>主轴</strong> 。对于一行，这是一条切割每个项目的水平线。对于列，主轴是穿过项目的垂直线。如何沿着作为主轴的直线对弹性项目进行间隔有几种选择。其中最常用的是<code>justify-content: center;</code> ，将所有弹性项目对齐到Flex容器内的中心。其他选择包括： <ul><li> <code>flex-start</code> ：将项目对齐到Flex容器的开头。对于一行，这会将项目推送到容器的左侧。对于列，这会将项目推送到容器的顶部。 </li><li> <code>flex-end</code> ：将项目对齐到Flex容器的末尾。对于一行，这会将项目推送到容器的右侧。对于列，这会将项目推送到容器的底部。 </li><li> <code>space-between</code> ：将项目与主轴的中心对齐，在项目之间放置额外的空间。第一个和最后一个项目被推送到Flex容器的最边缘。例如，在第一项中，第一项是在容器的左侧，最后一项是在容器的右侧，然后它们之间的其他项是均匀间隔的。 </li><li> <code>space-around</code> ：类似于<code>space-between</code>但是第一个和最后一个项目没有锁定到容器的边缘，空间分布在所有项目周围</li></ul></section>

## Instructions
<section id="instructions">一个示例有助于显示此属性的运行情况。将CSS属性<code>justify-content</code>添加到<code>#box-container</code>元素，并为其赋值为center。 <strong>奖金</strong> <br>在代码编辑器中尝试使用<code>justify-content</code>属性的其他选项来查看它们之间的差异。但请注意，中心值是唯一能够通过此挑战的值。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>#box-container</code>元素应该将<code>justify-content</code>属性设置为center的值。'
    testString: 'assert($("#box-container").css("justify-content") == "center", "The <code>#box-container</code> element should have a <code>justify-content</code> property set to a value of center.");'

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
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 100%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
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

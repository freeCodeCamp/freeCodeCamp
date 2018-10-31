---
id: 587d78ad367417b2b2512af8
title: Align Elements Using the align-items Property
challengeType: 0
videoUrl: ''
localeTitle: 使用align-items属性对齐元素
---

## Description
<section id="description"> <code>align-items</code>属性类似于<code>justify-content</code> 。回想一下， <code>justify-content</code>属性沿主轴对齐flex项目。对于行，主轴是水平线，对于列，它是垂直线。 Flex容器还具有与<strong>主轴</strong>相反的横轴。对于行，横轴是垂直的，对于列，横轴是水平的。 CSS提供<code>align-items</code>属性以沿着交叉轴对齐flex项。对于一行，它告诉CSS如何在容器内向上或向下推动整行中的项目。对于列，如何在容器内向左或向右推送所有项目。 <code>align-items</code>可用的不同值包括： <ul><li> <code>flex-start</code> ：将项目对齐到Flex容器的开头。对于行，这会将项目对齐到容器的顶部。对于列，这会将项目对齐到容器的左侧。 </li><li> <code>flex-end</code> ：将项目对齐到Flex容器的末尾。对于行，这会将项目对齐到容器的底部。对于列，这会将项目对齐到容器的右侧。 </li><li> <code>center</code> ：将项目对齐到中心。对于行，这会垂直对齐项目（项目上方和下方的空格相等）。对于列，它会水平对齐它们（项目左侧和右侧的空格相等）。 </li><li> <code>stretch</code> ：拉伸项目以填充弹性容器。例如，行项目被拉伸以从上到下填充Flex容器。 </li><li> <code>baseline</code> ：将项目与其基线对齐。基线是一个文本概念，将其视为字母所在的行。 </li></ul></section>

## Instructions
<section id="instructions">一个示例有助于显示此属性的运行情况。将CSS属性<code>align-items</code>添加到<code>#box-container</code>元素，并为其指定center值。 <strong>奖金</strong> <br>在代码编辑器中尝试使用<code>align-items</code>属性的其他选项来查看它们之间的差异。但请注意，中心值是唯一能够通过此挑战的值。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>#box-container</code>元素的<code>align-items</code>属性应设置为center的值。'
    testString: 'assert($("#box-container").css("align-items") == "center", "The <code>#box-container</code> element should have an <code>align-items</code> property set to a value of center.");'

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
    width: 200px;
    font-size: 24px;
  }

  #box-2 {
    background-color: orangered;
    width: 200px;
    font-size: 18px;
  }
</style>

<div id="box-container">
  <div id="box-1"><p>Hello</p></div>
  <div id="box-2"><p>Goodbye</p></div>
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

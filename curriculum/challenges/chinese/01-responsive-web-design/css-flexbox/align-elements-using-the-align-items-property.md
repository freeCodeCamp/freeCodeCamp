---
id: 587d78ad367417b2b2512af8
title: Align Elements Using the align-items Property
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c8aggtk'
forumTopicId: 301101
localeTitle: 使用 align-items 属性对齐元素
---

## Description
<section id='description'>
<code>align-items</code>属性与<code>justify-content</code>类似。回忆一下，<code>justify-content</code>属性使 flex 子元素沿主轴排列。行的主轴是水平线，列的主轴是垂直线。
Flex 容器中，与主轴垂直的叫做 <strong>cross axis（交叉轴）</strong>。行的交叉轴是垂直的，列的交叉轴是水平的。
使用 CSS 中的<code>align-items</code>属性定义 flex 子元素沿交叉轴的对齐方式，对行来说，将行中的项目在容器中往上或往下移动；对列来说，将列中的项目在容器中往左或往右移动。
<code>align-items</code>的可选值包括：
<ul><li><code>flex-start</code>：从 flex 容器的起始位置开始对齐项目。对行来说，把项目移至容器顶部；对列来说，是把项目移至容器左边。</li><li><code>flex-end</code>：从 flex 容器的终止位置开始对齐项目。对行来说，把项目移至容器底部；对列来说，把项目移至容器右边。</li><li><code>center</code>：把项目居中放置。对行来说，垂直居中（项目距离顶部和底部的距离相等）；对列来说，水平居中（项目距离左边和右边的距离相等）。</li><li><code>stretch</code>：拉伸项目，填满 flex 容器。例如，排成行的项目从容器顶部拉伸到底部。如未设置<code>align-items</code>的值，那么默认值是<code>stretch</code>。</li><li><code>baseline</code>：沿基线对齐。基线是文本相关的概念，可以认为它是字母排列的下端基准线。</li></ul>
</section>

## Instructions
<section id='instructions'>
这个例子可以帮助你理解这个属性，在<code>#box-container</code>添加 CSS 属性<code>align-items</code>并将值设为 center。
<strong>提示：</strong><br>在编辑器里试试<code>align-items</code>的其他可用值，看看它们之间的区别。但要通过挑战，你必须把值设为 <code>center</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>#box-container</code>元素应有<code>align-items</code>属性，其值应为 <code>center</code>。
    testString: assert($('#box-container').css('align-items') == 'center');

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

```html
// solution required
```

</section>
              
---
id: 587d78ad367417b2b2512af8
title: Align Elements Using the align-items Property
challengeType: 0

videoUrl: ''
localeTitle: Align Elements Using the align-items Property
---

## Description
<section id='description'>
<code>align-items</code>属性与<code>justify-content</code>类似。回忆一下，<code>justify-content</code>属性使 flex 子元素沿主轴排列。行的主轴是水平线，列的主轴是垂直线。
Flex 容器中，与主轴垂直的叫做 <strong>cross axis（交叉轴）</strong>。行的交叉轴是垂直的，列的交叉轴是水平的。
CSS 提供了<code>align-items</code>属性，可以用于在交叉轴调整 flex 子元素。对于行，它规定了项目在容器中应该靠上还是靠下，而对于列，就是靠左或靠右。
<code>align-items</code>的可选值包括：
<ul><li><code>flex-start</code>：从 flex 容器的前端开始排列项目。对行来说是把项目都靠顶部放，对于列是把项目都靠左放。</li><li><code>flex-end</code>：从 flex 容器的后端开始排列项目。对行来说是把项目都靠底部放，对于列是把项目都靠右放。</li><li><code>center</code>：把项目的位置调整到中间。对于行，垂直居中（项目上下方空间相等）。对于列，水平居中（项目左右方空间相等）。</li><li><code>stretch</code>：拉伸项目，填满 flex 容器。例如，排成行的项目从容器顶部拉伸到底部。</li><li><code>baseline</code>：基线对齐地排列。基线是字体相关的概念，可以认为字体坐落在基线上。</li></ul>
</section>

## Instructions
<section id='instructions'>
这个例子可以帮助你理解这个属性，在<code>#box-container</code>添加 CSS 属性<code>align-items</code>并将值设为 center。
<strong>提示：</strong><br>在编辑器里试试<code>align-items</code>的其他可用值，看看它们之间的区别。但要通过挑战，你必须把值设为 center。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>#box-container</code>元素应有<code>align-items</code>属性，其值应为 center。
    testString: assert($('#box-container').css('align-items') == 'center', '<code>#box-container</code>元素应有<code>align-items</code>属性，其值应为 center。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<style>,  #box-container {,    background: gray;,    display: flex;,    height: 500px;,    ,  },  #box-1 {,    background-color: dodgerblue;,    width: 200px;,    font-size: 24px;,  },,  #box-2 {,    background-color: orangered;,    width: 200px;,    font-size: 18px;,  },</style>,,<div id="box-container">,  <div id="box-1"><p>Hello</p></div>,  <div id="box-2"><p>Goodbye</p></div>,</div>
```





</div>





</section>

              
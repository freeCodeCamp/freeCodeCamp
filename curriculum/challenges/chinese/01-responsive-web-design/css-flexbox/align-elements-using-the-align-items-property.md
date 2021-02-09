---
id: 587d78ad367417b2b2512af8
title: 使用 align-items 属性对齐元素
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c8aggtk'
forumTopicId: 301101
dashedName: align-elements-using-the-align-items-property
---

# --description--

`align-items` 属性与 `justify-content` 类似。 回忆一下，`justify-content` 属性使 flex 子元素沿主轴排列。 行的主轴是水平线，列的主轴是垂直线。

Flex 容器中，与主轴垂直的叫做 **cross axis（交叉轴）**。 行的交叉轴是垂直的，列的交叉轴是水平的。

CSS 中的 `align-items` 属性用来定义 flex 子元素沿交叉轴的对齐方式。 对行来说，定义的是元素的上下对齐方式； 对列来说，是定义元素的左右对齐方式。

`align-items` 的可选值包括：

<ul><li><code>flex-start</code>：从 flex 容器的起始位置开始对齐项目。 对行来说，把项目移至容器顶部； 对列来说，是把项目移至容器左边。</li><li><code>flex-end</code>：从 flex 容器的终止位置开始对齐项目。 对行来说，把项目移至容器底部； 对列来说，把项目移至容器右边。</li><li><code>center</code>：把项目居中放置。 对行来说，垂直居中（项目距离顶部和底部的距离相等）； 对列来说，水平居中（项目距离左边和右边的距离相等）。</li><li><code>stretch</code>：拉伸项目，填满 flex 容器。 例如，排成行的项目从容器顶部拉伸到底部。 如未设置<code>align-items</code>的值，那么这就是默认值。</li><li><code>baseline</code>：沿基线对齐。 基线是文本相关的概念，可以认为它是字母排列的下端基准线。</li></ul>

# --instructions--

这个例子可以帮助你理解这个属性。 请在 `#box-container` 里添加 CSS 属性 `align-items` 并将值设为 `center`。

**提示：** 请在编辑器里试试 `align-items` 的其他值，看看它们之间的区别。 但要通过挑战，你必须把属性值设为 `center`。

# --hints--

`#box-container` 所选择的元素应有 `align-items` 属性，且其属性值应为 `center`。

```js
assert($('#box-container').css('align-items') == 'center');
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;
    align-items: center;
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

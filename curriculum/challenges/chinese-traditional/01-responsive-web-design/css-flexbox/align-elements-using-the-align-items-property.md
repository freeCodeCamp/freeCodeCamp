---
id: 587d78ad367417b2b2512af8
title: 使用 align-items 屬性對齊元素
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c8aggtk'
forumTopicId: 301101
dashedName: align-elements-using-the-align-items-property
---

# --description--

`align-items` 屬性與 `justify-content` 類似。 回憶一下，`justify-content` 屬性使 flex 子元素沿主軸排列。 行的主軸是水平線，列的主軸是垂直線。

Flex 容器中，與主軸垂直的叫做 **cross axis（交叉軸）**。 行的交叉軸是垂直的，列的交叉軸是水平的。

CSS 中的 `align-items` 屬性用來定義 flex 子元素沿交叉軸的對齊方式。 對行來說，定義的是元素的上下對齊方式； 對列來說，是定義元素的左右對齊方式。

`align-items` 的可選值包括：

<ul><li><code>flex-start</code>：從 flex 容器的起始位置開始對齊項目。 對行來說，把項目移至容器頂部； 對列來說，是把項目移至容器左邊。</li><li><code>flex-end</code>：從 flex 容器的終止位置開始對齊項目。 對行來說，把項目移至容器底部； 對列來說，把項目移至容器右邊。</li><li><code>center</code>：把項目居中放置。 對行來說，垂直居中（項目距離頂部和底部的距離相等）； 對列來說，水平居中（項目距離左邊和右邊的距離相等）。</li><li><code>stretch</code>：拉伸項目，填滿 flex 容器。 例如，排成行的項目從容器頂部拉伸到底部。 如未設置<code>align-items</code>的值，那麼這就是默認值。</li><li><code>baseline</code>：沿基線對齊。 基線是文本相關的概念，可以認爲它是字母排列的下端基準線。</li></ul>

# --instructions--

這個例子可以幫助你理解這個屬性。 請在 `#box-container` 裏添加 CSS 屬性 `align-items` 並將值設爲 `center`。

**提示：** 請在編輯器裏試試 `align-items` 的其他值，看看它們之間的區別。 但要通過挑戰，你必須把屬性值設爲 `center`。

# --hints--

`#box-container` 所選擇的元素應有 `align-items` 屬性，且其屬性值應爲 `center`。

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

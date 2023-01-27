---
id: 587d78ad367417b2b2512afa
title: 使用 flex-wrap 屬性包裹一行或一列
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cQv9ZtG'
forumTopicId: 301114
dashedName: use-the-flex-wrap-property-to-wrap-a-row-or-column
---

# --description--

CSS flexbox 具有將 flex 容器拆分爲多行（或列）的功能。 默認情況下，flex 容器會調整項目大小，把它們都塞到一起。 對於行來說，所有項目都會在一條直線上。

不過，使用 `flex-wrap` 屬性可以使項目換行展示。 這意味着多出來的子元素會被移到新的行或列。 換行發生的斷點由子元素和容器的大小決定。

換行方向的可選值有這些：

<ul><li><code>nowrap</code>：默認值，不換行。</li><li><code>wrap</code>：如果排列以行爲基準，就將行從上往下排列；如果排列以列爲基準，就將列從左往右排列。</li><li><code>wrap-reverse</code>：如果排列以行爲基準，就將行從下往上排列；如果排列以列爲基準，就將列從右往左排列。</li></ul>

# --instructions--

現在的佈局中，一行裏面的元素太多了。 請爲 `#box-container` 元素添加 CSS 屬性 `flex-wrap`，把將其屬性值設爲 `wrap`。

# --hints--

`#box-container` 元素應具有 `flex-wrap` 屬性，其屬性值應爲 `wrap`。

```js
assert($('#box-container').css('flex-wrap') == 'wrap');
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;
    flex-wrap: wrap;
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

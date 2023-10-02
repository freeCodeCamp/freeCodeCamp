---
id: 587d78ae367417b2b2512afc
title: 使用 flex-grow 屬性定義 flex 子元素的增長係數
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c2p78cg'
forumTopicId: 301111
dashedName: use-the-flex-grow-property-to-expand-items
---

# --description--

與 `flex-shrink` 相對的是 `flex-grow`。 你應該還記得，`flex-shrink` 會在容器太小時對子元素作出調整。 相應地，`flex-grow` 會在容器太大時對子元素作出調整。

例子與上一個挑戰相似，如果一個項目的 `flex-grow` 屬性值爲 `1`，另一個項目的 `flex-grow` 屬性值爲 `3`，那麼值爲 `3` 的一個會較另一個擴大 3 倍。

# --instructions--

請爲 `#box-1` 和 `#box-2` 添加 CSS 屬性 `flex-grow`。 將 `#box-1` 的屬性值設爲 `1`，`#box-2` 的屬性值設爲 `2`。

# --hints--

`#box-1` 元素應具有 `flex-grow` 屬性，其屬性值應爲 `1`。

```js
assert($('#box-1').css('flex-grow') == '1');
```

`#box-2` 元素應具有 `flex-grow` 屬性，其屬性值應爲 `2`。

```js
assert($('#box-2').css('flex-grow') == '2');
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }

  #box-1 {
    background-color: dodgerblue;
    height: 200px;
    flex-grow: 1;
  }

  #box-2 {
    background-color: orangered;
    height: 200px;
    flex-grow: 2;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

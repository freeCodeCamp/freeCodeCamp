---
id: 587d78af367417b2b2512b00
title: 使用 align-self 屬性
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cMbvzfv'
forumTopicId: 301107
dashedName: use-the-align-self-property
---

# --description--

flex 子項目的最後一個屬性是 `align-self`。 這個屬性允許你調整單個子元素自己的對齊方式，而不會影響到全部子元素。 因爲 `float`、`clear` 和 `vertical-align` 等調整對齊方式的屬性都不能應用於 flex 子元素，所以這個屬性顯得十分有用。

`align-self` 可設置的值與 `align-items` 的一樣，並且它會覆蓋 `align-items` 所設置的值。

# --instructions--

請爲 `#box-1` 和 `#box-2` 添加 CSS 屬性 `align-self`。 將 `#box-1` 的 `align-self` 屬性值設爲 center，將 `#box-2` 的設爲 `flex-end`。

# --hints--

`#box-1` 元素應具有 `align-self` 屬性，其屬性值應爲 `center`。

```js
assert($('#box-1').css('align-self') == 'center');
```

`#box-2` 元素應具有 `align-self` 屬性，其屬性值應爲 `flex-end`。

```js
assert($('#box-2').css('align-self') == 'flex-end');
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
    width: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
    width: 200px;
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
    align-self: center;
    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;
    align-self: flex-end;
    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

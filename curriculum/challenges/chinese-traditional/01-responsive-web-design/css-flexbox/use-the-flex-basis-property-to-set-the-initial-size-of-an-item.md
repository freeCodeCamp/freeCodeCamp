---
id: 587d78ae367417b2b2512afd
title: 使用 flex-basis 屬性設置元素的初始大小
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c3d9nCa'
forumTopicId: 301108
dashedName: use-the-flex-basis-property-to-set-the-initial-size-of-an-item
---

# --description--

`flex-basis` 屬性定義了在使用 CSS 的 `flex-shrink` 或 `flex-grow` 屬性對元素進行調整前，元素的初始大小。

`flex-basis` 屬性的單位與其他表示尺寸的屬性的單位一致（`px`、`em`、`%` 等）。 如果值爲 `auto`，則項目的尺寸隨內容調整。

# --instructions--

使用 `flex-basis` 爲盒子設置初始值。 請給 `#box-1` 和 `#box-2` 添加 CSS 屬性 `flex-basis`。 設置 `#box-1` 的尺寸初始值爲 `10em`，`#box-2` 的尺寸初始值爲 `20em`。

# --hints--

`#box-1` 元素應具有 `flex-basis` 屬性。

```js
assert($('#box-1').css('flex-basis') != 'auto');
```

`#box-1` 的 `flex-basis` 屬性值應爲 `10em`。

```js
assert(code.match(/#box-1\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?10em;/g));
```

`#box-2` 元素應具有 `flex-basis` 屬性。

```js
assert($('#box-2').css('flex-basis') != 'auto');
```

`#box-2` 的 `flex-basis` 屬性值應爲 `20em`。

```js
assert(code.match(/#box-2\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?20em;/g));
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
    flex-basis: 10em;
  }

  #box-2 {
    background-color: orangered;
    height: 200px;
    flex-basis: 20em;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

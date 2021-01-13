---
id: bad87fee1348bd9aec908848
title: 创建 Bootstrap Wells
challengeType: 0
forumTopicId: 16825
dashedName: create-bootstrap-wells
---

# --description--

Bootstrap 有一个叫做 `well` 的 class，作用是赋予列一种视觉上的深度感（视觉上的效果）。

在每一个 class 属性为 `col-xs-6` 的 `div` 元素中都嵌入一个带有 `well` 的 `div` 元素。

# --hints--

在每一个 class 属性为 `'col-xs-6'` 的 `div` 元素中都嵌入一个带有 `well` 的 `div` 元素。

```js
assert($('div.col-xs-6').not(':has(>div.well)').length < 1);
```

将你的两个 class 属性为 `'col-xs-6'` 的 `div` 元素都内嵌入一个带有 `'row'` 的 `div` 元素中。

```js
assert($('div.row > div.col-xs-6').length > 1);
```

确保你的 `div` 元素都有一个闭合标签。

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
```

# --seed--

## --seed-contents--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">

    </div>
    <div class="col-xs-6">

    </div>
  </div>
</div>
```

# --solutions--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well"></div>
    </div>
    <div class="col-xs-6">
      <div class="well"></div>
    </div>
  </div>
</div>
```

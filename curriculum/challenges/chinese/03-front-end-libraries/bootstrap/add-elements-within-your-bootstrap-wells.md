---
id: bad87fee1348bd9aec908849
title: 在 Bootstrap Wells 中添加元素
challengeType: 0
forumTopicId: 16636
dashedName: add-elements-within-your-bootstrap-wells
---

# --description--

现在我们的每一行的每一列都已经有了 `div` 元素。这已经足够了，现在让我们添加 `button` 元素吧。

在每一个 `well` `div` 元素下放置三个 `button` 元素。

# --hints--

在每一个 class 属性为 `well` 的 `div` 元素内分别放置三个 `button` 元素。

```js
assert(
  $('div.well:eq(0)').children('button').length === 3 &&
    $('div.well:eq(1)').children('button').length === 3
);
```

总共有 6 个 `button` 元素。

```js
assert($('button') && $('button').length > 5);
```

确保 `button` 元素都有一个闭合标签。

```js
assert(
  code.match(/<\/button>/g) &&
    code.match(/<button/g) &&
    code.match(/<\/button>/g).length === code.match(/<button/g).length
);
```

# --seed--

## --seed-contents--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">



      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">



      </div>
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
      <div class="well">
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  </div>
</div>
```

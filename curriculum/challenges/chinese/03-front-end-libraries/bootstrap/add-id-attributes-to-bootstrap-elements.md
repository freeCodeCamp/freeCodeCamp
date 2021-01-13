---
id: bad87fee1348bd9aec908853
title: 给 Bootstrap 元素添加id属性
challengeType: 0
forumTopicId: 16639
dashedName: add-id-attributes-to-bootstrap-elements
---

# --description--

回忆一下，除了可以给元素添加 class 属性，我们还可以给元素设置 `id` 属性。

每个指定元素的 id 都是唯一的，并且在每个页面中都只能使用一次。

让我们为每个 class 为 `well` 的 `div` 元素添加一个唯一的 id。

记住，你可以这样给一个元素设置 ID。

`<div class="well" id="center-well">`

把左边 well 的 ID 设置为 `left-well`。右边的 well 的 ID 设置为 `right-well`。

# --hints--

把左边的 `well` 的 ID 设置为 `left-well`。

```js
assert(
  $('.col-xs-6').children('#left-well') &&
    $('.col-xs-6').children('#left-well').length > 0
);
```

把右边的 `well` 的 ID 设置为 `right-well`。

```js
assert(
  $('.col-xs-6').children('#right-well') &&
    $('.col-xs-6').children('#right-well').length > 0
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
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
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
      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well" id="right-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>
```

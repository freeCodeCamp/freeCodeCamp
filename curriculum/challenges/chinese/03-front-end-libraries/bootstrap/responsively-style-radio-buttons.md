---
id: bad87fee1348bd9aedb08845
title: 响应式风格的单选按钮
challengeType: 0
forumTopicId: 18270
required:
  - link: >-
      https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.css
    raw: true
---

# --description--

你还可以将 Bootstrap 的 `col-xs-*` class 用在 `form` 元素上！这样我们就可以在不关心屏幕大小的情况下，将我们的单选按钮均匀的平铺在页面上。

将你的所有单选按钮放入 `<div class="row">` 元素。再用 `<div class="col-xs-6">` 元素包裹每一个单选按钮。

**记住：** 提醒一句，单选按钮是 type 为 `radio` 的 `input` 元素。

# --hints--

把所有的单选按钮放置于具有 `row` class 的 `div` 元素中。

```js
assert($('div.row:has(input[type="radio"])').length > 0);
```

每一个单选按钮应该嵌套于 `div` 元素之中，该 `div` 元素的 class 属性为 `col-xs-6`。

```js
assert($('div.col-xs-6:has(input[type="radio"])').length > 1);
```

确保所有 `div` 元素都有一个闭合标签。

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
```

# --solutions--


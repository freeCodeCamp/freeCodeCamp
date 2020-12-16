---
id: bad87fee1348bd9aeda08845
title: 响应式风格的复选框
challengeType: 0
forumTopicId: 18269
required:
  - link: >-
      https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.css
    raw: true
---

# --description--

你还可以将 Bootstrap 的 `col-xs-*` 用在 `form` 元素上!这样我们就可以在不关心屏幕大小的情况下，将我们的复选框均匀的放在页面上了。

# --instructions--

将所有复选框都放置于一个 `<div class="row">` 元素中。然后分别把每个复选框都放置于一个 `<div class="col-xs-4">` 元素中。

# --hints--

将所有的复选框嵌入一个含有 `row` class 的 `div` 元素中。

```js
assert($('div.row:has(input[type="checkbox"])').length > 0);
```

每一个复选框应该嵌套于自己的 `div` 元素中，每个 `div` 元素都具有 `col-xs-4` class。

```js
assert($('div.col-xs-4:has(input[type="checkbox"])').length > 2);
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


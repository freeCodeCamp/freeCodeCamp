---
id: bad87fee1348bd9aede08845
title: 创建自定义标题
challengeType: 0
forumTopicId: 16816
---

# --description--

让我们来为 Cat Photo App 做一个导航吧，把标题和惬意的猫咪图片放在同一行。

记住，由于 Bootstrap 使用了响应式栅格系统，使得我们可以很方便的放置元素并为元素指定相对的宽度。大部分的 Bootstrap 的 class 都能用在 `div` 元素上。

把我们的第一张图片和 `h2` 元素用一个简单的 `<div class="row">` 元素包裹起来。再用 `<div class="col-xs-8">` 包裹我们的 `h2` 元素，用 `<div class="col-xs-4">` 包裹我们的图片，这样它们就能位于同一行了。

注意现在图片是否与文字大小一致呢？

# --hints--

`h2` 元素和最上方的 `img` 元素应该一起内嵌于具有 `row` class 的 `div` 元素内。

```js
assert($('div.row:has(h2)').length > 0 && $('div.row:has(img)').length > 0);
```

最上方的 `img` 元素应该内嵌于含有 `col-xs-4` class 的 `div` 元素中。

```js
assert(
  $('div.col-xs-4:has(img)').length > 0 &&
    $('div.col-xs-4:has(div)').length === 0
);
```

`h2` 元素应该内嵌于含有 `col-xs-8` class的 `div` 元素中。

```js
assert(
  $('div.col-xs-8:has(h2)').length > 0 &&
    $('div.col-xs-8:has(div)').length === 0
);
```

确保每一个 `div` 元素都有一个闭合标签。

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
```

# --solutions--


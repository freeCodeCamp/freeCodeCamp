---
id: 58c383d33e2e3259241f3076
title: 使用属性选择器来设置元素的样式
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpymfJ'
forumTopicId: 301092
---

# --description--

你已经通过设置元素的`id`和`class`，来显示你想要的样式，而它们也被分别叫做 ID 选择器和 Class 选择器。另外，也还有其他的 CSS 选择器，可以让我们给特定的元素设置样式。

让我们再次通过猫咪图片项目来练习 CSS 选择器。

在这个挑战里，你会使用`[attr=value]`属性选择器修改复选框的样式。这个选择器使用特定的属性值来匹配和设置元素样式。例如，下面的代码会改变所有`type`为`radio`的元素的外边距。

```css
[type='radio'] {
  margin: 20px 0px 20px 0px;
}
```

# --instructions--

使用`type`属性选择器，尝试改变复选框的上外边距为 10px，下外边距为 15px。

# --hints--

使用`type`属性选择器来匹配复选框。

```js
assert(
  code.match(
    /<style>[\s\S]*?\[type=("|')checkbox\1\]\s*?{[\s\S]*?}[\s\S]*?<\/style>/gi
  )
);
```

复选框的上外边距应为 10px。

```js
assert(
  (function () {
    var count = 0;
    $("[type='checkbox']").each(function () {
      if ($(this).css('marginTop') === '10px') {
        count++;
      }
    });
    return count === 3;
  })()
);
```

复选框的下外边距应为 15px。

```js
assert(
  (function () {
    var count = 0;
    $("[type='checkbox']").each(function () {
      if ($(this).css('marginBottom') === '15px') {
        count++;
      }
    });
    return count === 3;
  })()
);
```

# --solutions--


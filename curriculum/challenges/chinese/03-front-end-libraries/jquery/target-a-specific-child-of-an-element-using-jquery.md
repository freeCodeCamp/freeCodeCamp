---
id: bad87fee1348bd9aed108826
title: 使用 jQuery 选择元素的特定子元素
challengeType: 6
forumTopicId: 18315
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
---

# --description--

你已经看到了为什么 id 属性对于 jQuery 选择器选取标签非常方便，但这并不适用于所有情景。

幸运的是，jQuery 有一些其他的方法可以选取正确的标签。

jQuery 可以用`CSS 选择器（CSS Selectors）`选取标签。`target:nth-child(n)`CSS 选择器可以选取所有的第 n 个标签并设置目标属性和目标样式。

下面的代码展示了给每个区域（well）的第 3 个标签设置`bounce`类：

`$(".target:nth-child(3)").addClass("animated bounce");`

请给每个区域（well）的第 2 个标签设置`bounce`类，必须用`target`类选取标签。

# --hints--

`target`标签中的第二个标签应该有弹性的动画效果。

```js
assert(
  $('.target:nth-child(2)').hasClass('animated') &&
    $('.target:nth-child(2)').hasClass('bounce')
);
```

应该仅两个标签有弹性的动画效果。

```js
assert($('.animated.bounce').length === 2);
```

应该用`:nth-child()`选择器修改这些标签。

```js
assert(code.match(/\:nth-child\(/g));
```

仅用 jQuery 给标签添加类。

```js
assert(
  code.match(/\$\(".target:nth-child\(2\)"\)/g) ||
    code.match(/\$\('.target:nth-child\(2\)'\)/g) ||
    code.match(/\$\(".target"\).filter\(":nth-child\(2\)"\)/g) ||
    code.match(/\$\('.target'\).filter\(':nth-child\(2\)'\)/g)
);
```

# --solutions--


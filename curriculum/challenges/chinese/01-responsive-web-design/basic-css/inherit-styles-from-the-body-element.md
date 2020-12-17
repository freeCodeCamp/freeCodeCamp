---
id: bad87fee1348bd9aedf08746
title: 从 Body 元素继承样式
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bmdtR'
forumTopicId: 18204
---

# --description--

我们已经证明每一个 HTML 页面都含有`body`元素，`body`元素也可以使用 CSS 样式。

设置`body`元素的样式的方式跟设置其他 HTML 元素的样式一样，并且其他元素也会继承到`body`设置的样式。

# --instructions--

首先，创建一个文本内容为`Hello World`的`h1`标签元素。

接着，在`body`CSS 规则里面添加一句`color: green;`，改变页面其他元素的字体颜色为`green（绿色）`。

最后，同样在`body`CSS 规则里面添加`font-family: monospace;`，设置其他元素字体为`font-family: monospace;`。

# --hints--

创建一个`h1`元素。

```js
assert($('h1').length > 0);
```

`h1`元素的文本内容应该为`Hello World`。

```js
assert(
  $('h1').length > 0 &&
    $('h1')
      .text()
      .match(/hello world/i)
);
```

确保`h1`元素具有结束标记。

```js
assert(
  code.match(/<\/h1>/g) &&
    code.match(/<h1/g) &&
    code.match(/<\/h1>/g).length === code.match(/<h1/g).length
);
```

`body`元素的`color`属性值应为`green`。

```js
assert($('body').css('color') === 'rgb(0, 128, 0)');
```

`body`元素的`font-family`属性值应为`monospace`。

```js
assert(
  $('body')
    .css('font-family')
    .match(/monospace/i)
);
```

`h1`元素应该继承`body`的`monospace`字体属性。

```js
assert(
  $('h1').length > 0 &&
    $('h1')
      .css('font-family')
      .match(/monospace/i)
);
```

`h1`元素的字体颜色也应该继承`body`元素的绿色。

```js
assert($('h1').length > 0 && $('h1').css('color') === 'rgb(0, 128, 0)');
```

# --solutions--


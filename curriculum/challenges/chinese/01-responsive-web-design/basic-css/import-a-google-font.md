---
id: bad87fee1348bd9aedf08807
title: 引入谷歌字体
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM9MRsJ'
forumTopicId: 18200
---

# --description--

除了大多数系统提供的默认字体以外，我们也可以使用自定义字体。网络上有各种各样的字体，不过在这个例子中，我们将会尝试使用`Google`字体库。

[Google 字体](https://fonts.google.com/)是一个免费的字体库，可以通过在 CSS 里面设置字体的 URL 来引用。

因此，下一步，我们将引入和使用`Google`字体。

引入`Google`字体，你需要复制`Google`字体的 URL，并粘贴到 HTML 里面。在这个挑战中，我们需要引入`Lobster`字体。因此，请复制以下代码段，并粘贴到代码编辑器顶部，即放到`style`标签之前。

`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">`

现在你可以设置`font-family`属性为`Lobster`，来使用`Lobster`字体。例子如下：  
`font-family: FAMILY_NAME, GENERIC_NAME;`.

`GENERIC_NAME`是可选的，其他字体不可用时便作为后备字体，在下一个挑战中可以得到体现。

字体名区分大小写，并且如果字体名含有空格，需要用引号括起来。例如，使用`"Open Sans"`字体需要添加引号，而`Lobster`字体则不需要。

# --instructions--

创建一个 CSS 规则，`font-family`属性里设置为`Lobster`字体，并把这个字体应用到所有的`h2`元素。

# --hints--

引入`Lobster`字体。

```js
assert(new RegExp('googleapis', 'gi').test(code));
```

`h2`元素必须使用`Lobster`字体。

```js
assert(
  $('h2')
    .css('font-family')
    .match(/lobster/i)
);
```

使用`h2`选择器去改变字体样式。

```js
assert(
  /\s*h2\s*\{\s*font-family\:\s*(\"|")?Lobster(\"|")?(.{0,})\s*;\s*\}/gi.test(
    code
  )
);
```

`p`元素应该保持使用`monospace`字体。

```js
assert(
  $('p')
    .css('font-family')
    .match(/monospace/i)
);
```

# --solutions--


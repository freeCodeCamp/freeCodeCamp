---
id: bad87fee1348bd9aedf08807
title: 引入谷歌字体
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM9MRsJ'
forumTopicId: 18200
---

# --description--

在我们的网站上，除了使用系统提供的默认字体以外，我们也可以使用自定义字体。网络上有很多字体库，不过在这个挑战中，我们将会使用 `Google Fonts` 字体库。

[Google 字体库](https://fonts.google.com/)是一个免费的 Web 字体库，我们只需要在 CSS 里设置字体的 URL 即可使用。

接下来，我们就要引入和使用 Google Fonts（注意：如果 Google 在你的地区被限制访问，你可以选择跳过这个挑战）。

欲引入 Google Font，你需要从 Google Fonts 上复制字体的 URL，并粘贴到你的 HTML 里面。在这个挑战中，我们需要引入 `Lobster` 字体。因此，请复制以下代码段，并粘贴到代码编辑器顶部，即放到 `style` 标签之前。

`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">`

现在你可以通过将 `font-family` 属性值中的 `FAMILY_NAME` 替换为 `Lobster` 来使用 `Lobster` 字体：
`font-family: FAMILY_NAME, GENERIC_NAME;`.

`GENERIC_NAME` 是可选的，它用来指明在其他字体不可用时的后备字体。我们会在下一个挑战中详细说明。

字体名区分大小写，并且如果字体名含有空格，则在声明时需要用引号包起来。例如，使用 `"Open Sans"` 字体需要添加引号，而 `Lobster` 则不需要。

# --instructions--

引入 Lobster 字体，然后使用元素选择器将 `h2` 元素的 `font-family` 设置为 `Lobster`。

# --hints--

应引入 `Lobster` 字体。

```js
assert(new RegExp('googleapis', 'gi').test(code));
```

`h2` 元素应使用 `Lobster` 字体。

```js
assert(
  $('h2')
    .css('font-family')
    .match(/lobster/i)
);
```

应使用元素选择器（`h2`）来改变字体样式。

```js
assert(
  /\s*h2\s*\{\s*font-family\:\s*(\"|")?Lobster(\"|")?(.{0,})\s*;\s*\}/gi.test(
    code
  )
);
```

`p` 元素应保持使用 `monospace` 字体。

```js
assert(
  $('p')
    .css('font-family')
    .match(/monospace/i)
);
```

# --solutions--


---
id: bad87fee1348bd9aede08817
title: 将 a 嵌套在段落中
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cb6k8Cb'
forumTopicId: 18244
---

# --description--

你可以在其他文本元素内嵌套链接。

```html
<p>
  Here's a <a target="_blank" href="http://freecodecamp.org"> link to freecodecamp.org</a> for you to follow.
</p>
```

让我们来拆解一下这个例子： 通常，文本是被包裹在 `p` 元素内：  
`<p> Here's a ... for you to follow. </p>` 接下来是 `<a>` 元素（它需要结束标签 `</a>`）：
`<a> ... </a>` `target` 是 `a` 元素的属性，它用来指定链接的打开方式。属性值 `"_blank"` 表示链接会在新标签页打开。`href` 是 `a` 的另一个属性，它用来指定链接的 URL：
`<a href="https://freecodecamp.org"> ... </a>` `a` 元素内的内容文本 **"link to freecodecamp.org"**，会显示为一个可以点击的链接：
`<a href=" ... ">link to freecodecamp.org</a>` 此示例的最终输出结果是这样：

Here's a [link to freecodecamp.org](http://freecodecamp.one) for you to follow.

# --instructions--

创建一个新的段落（`p`）标签来包裹 `main` 元素里的 `a` 节点。新段落标签的内容为："View more cat photos"，其中 "cat photos" 是一个链接，其余是纯文本。

# --hints--

应包含一个链接到 "`https://freecatphotoapp.com`" 的 `a` 元素。

```js
assert(
  $('a[href="https://freecatphotoapp.com"]').length > 0 ||
    $('a[href="http://www.freecatphotoapp.com"]').length > 0
);
```

`a` 元素的内容文本应为 "cat photos"。

```js
assert(
  $('a')
    .text()
    .match(/cat\sphotos/gi)
);
```

你应该在 `a` 标签的外部创建一个新的 `p` 标签。页面中应至少包含 3 个 `p` 标签。

```js
assert($('p') && $('p').length > 2);
```

`a` 应嵌套在新创建的 `p` 元素内。

```js
assert(
  $('a[href="https://freecatphotoapp.com"]').parent().is('p') ||
    $('a[href="http://www.freecatphotoapp.com"]').parent().is('p')
);
```

`p` 元素应该包含文本 "View more "（请注意，more 之后有一个空格）。

```js
assert(
  $('a[href="https://freecatphotoapp.com"]')
    .parent()
    .text()
    .match(/View\smore\s/gi) ||
    $('a[href="http://www.freecatphotoapp.com"]')
      .parent()
      .text()
      .match(/View\smore\s/gi)
);
```

`a` 元素中不应包含文本 "View more"。

```js
assert(
  !$('a')
    .text()
    .match(/View\smore/gi)
);
```

确保每个 `p` 元素有结束标签。

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<p/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
```

确保每个 `a` 元素有结束标签。

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<a/g) &&
    code.match(/<\/a>/g).length === code.match(/<a/g).length
);
```

# --solutions--


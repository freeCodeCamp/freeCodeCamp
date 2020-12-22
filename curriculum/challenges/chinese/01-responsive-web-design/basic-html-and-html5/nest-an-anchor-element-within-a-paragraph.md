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

让我们来分解这个例子： 通常，文本是被包裹在`p`段落内：  
`<p> Here's a ... for you to follow. </p>` 接下来是`anchor` `a` `<a>`（需要结束标记 `</a>`）:  
`<a> ... </a>` `target`是 `a` 的一个属性，用来指定链接的打开方式。属性值 `"_blank"` 的意思是链接会在新标签页打开。 `href`是 `a` 的另一个属性：用来指定链接的 URL：  
`<a href="https://freecodecamp.org"> ... </a>` `a` 元素内的文本：**"link to freecodecamp.org"**，会显示为一个可以点击的链接：  
`<a href=" ... ">link to freecodecamp.org</a>` 例子的最后输出将会是这样：  

Here's a [link to freecodecamp.org](http://freecodecamp.one) for you to follow.

# --instructions--

用一个段落（`p`）标签来包裹`main`元素里的`a`节点。新段落的文本为：“View more cat photos”，其中 "cat photos" 是一个链接，其余是纯文本。

# --hints--

你需要一个指向 "`https://freecatphotoapp.com`" 的 `a` 。

```js
assert(
  $('a[href="https://freecatphotoapp.com"]').length > 0 ||
    $('a[href="http://www.freecatphotoapp.com"]').length > 0
);
```

`a` 的文本应为：cat photos。

```js
assert(
  $('a')
    .text()
    .match(/cat\sphotos/gi)
);
```

在 `a` 的外部创建一个新段落，这样页面就有 3 个段落了。

```js
assert($('p') && $('p').length > 2);
```

`a` 应嵌套在新段落内。

```js
assert(
  $('a[href="https://freecatphotoapp.com"]').parent().is('p') ||
    $('a[href="http://www.freecatphotoapp.com"]').parent().is('p')
);
```

段落应该包含文本 View more（记得 more 后面有一个空格）。

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

`a` 不应该包含文本 View more。

```js
assert(
  !$('a')
    .text()
    .match(/View\smore/gi)
);
```

确保每个段落有结束标记。

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<p/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
```

确保每个段落有结束标记。

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<a/g) &&
    code.match(/<\/a>/g).length === code.match(/<a/g).length
);
```

# --solutions--


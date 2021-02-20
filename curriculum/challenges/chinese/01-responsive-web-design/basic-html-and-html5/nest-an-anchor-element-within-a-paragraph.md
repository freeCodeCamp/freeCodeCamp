---
id: bad87fee1348bd9aede08817
title: 将 a 嵌套在段落中
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cb6k8Cb'
forumTopicId: 18244
dashedName: nest-an-anchor-element-within-a-paragraph
---

# --description--

你可以在其他文本元素内嵌套链接。

```html
<p>
  Here's a <a target="_blank" href="http://freecodecamp.org"> link to freecodecamp.org</a> for you to follow.
</p>
```

让我们来拆解一下这个例子。 通常，文本是被包裹在 `p` 元素内：

`<p> Here's a ... for you to follow. </p>`

接下来是*锚点*元素 `<a>`（它需要结束标签 `</a>`）：

`<a> ... </a>`

`target` 锚点元素的一个属性，它用来指定链接的打开方式。 属性值 `_blank` 表示链接会在新标签页打开。 `href` 是锚点元素的另一个属性，它用来指定链接的 URL：

`<a href="http://freecodecamp.org"> ... </a>`

`a` 元素内的内容文本 `link to freecodecamp.org` 叫作 `anchor text`（锚文本），会显示为一个可以点击的链接：

`<a href=" ... ">link to freecodecamp.org</a>`

此示例的最终输出结果是这样：

你可以访问 [link to freecodecamp.org](http://freecodecamp.org)。

# --instructions--

创建一个新的段落 `p` 元素来包裹 `a` 元素。 新段落标签的内容为 `View more cat photos`，其中 `cat photos` 是一个链接，其余的是纯文本。

# --hints--

应包含一个链接到 `https://freecatphotoapp.com` 的 `a` 元素。

```js
assert(
  $('a[href="https://freecatphotoapp.com"]').length > 0 ||
    $('a[href="http://www.freecatphotoapp.com"]').length > 0
);
```

`a` 元素的内容文本应为 `cat photos`。

```js
assert(
  $('a')
    .text()
    .match(/cat\sphotos/gi)
);
```

你应该在 `a` 标签的外部创建一个新的 `p` 标签。 页面中应至少包含 3 个 `p` 标签。

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

`p` 元素应该包含文本 `View more`（请注意，more 之后有一个空格）。

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

`a` 元素中 <em>不</em> 应包含文本 `View more`。

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

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>

  <a href="https://freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>View more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a></p>

  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

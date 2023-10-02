---
id: bad87fee1348bd9aede08817
title: 将 a 嵌套在段落中
challengeType: 0
forumTopicId: 18244
dashedName: nest-an-anchor-element-within-a-paragraph
---

# --description--

你可以在其他文本元素内嵌套链接。

```html
<p>
  Here's a <a target="_blank" href="https://www.freecodecamp.org"> link to www.freecodecamp.org</a> for you to follow.
</p>
```

让我们来拆解一下这个例子。 通常，文本是被包裹在 `p` 元素内：

```html
<p> Here's a ... for you to follow. </p>
```

接下来是*锚点*元素 `<a>`（它需要结束标签 `</a>`）：

```html
<a> ... </a>
```

`target` 是锚点元素的一个属性，它用来指定链接的打开方式。 属性值 `_blank` 表示链接会在新标签页打开。 `href` 是锚点元素的另一个属性，它用来指定链接的 URL：

```html
<a href="https://www.freecodecamp.org" target="_blank"> ... </a>
```

`a` 元素内的文本 `link to www.freecodecamp.org` 叫作<dfn>锚文本</dfn>，会显示为一个可以点击的链接：

```html
<a href=" ... " target="...">link to freecodecamp.org</a>
```

此示例的最终输出结果是这样：

Here's a <a href="https://www.freecodecamp.org" target="_blank">link to www.freecodecamp.org</a> for you to follow.

# --instructions--

创建一个新的段落 `p` 元素来包裹 `a` 元素。 不要创建一个新的锚点标签。 新段落应有文本 `View more cat photos`，其中 `cat photos` 是一个链接，其余是纯文本。

# --hints--

应该只有一个 `a` 元素。

```js
assert(
  $('a').length  === 1 
);
```

`a` 元素应该链接到 “`https://www.freecatphotoapp.com`”。

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]').length  === 1 
);
```

`a` 元素应有锚文本 `cat photos`。

```js
assert(
  $('a')
    .text()
    .match(/cat\sphotos/gi)
);
```

应该创建一个新的 `p` 元素。 页面中应至少包含 3 个 `p` 标签。

```js
assert($('p') && $('p').length > 2);
```

`a` 应嵌套在新创建的 `p` 元素内。

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]').parent().is('p')
);
```

`p` 元素应该包含文本 `View more`（在它后面有一个空格）。

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]')
    .parent()
    .text()
    .match(/View\smore\s/gi)
);
```

`a` 元素 <em>不</em> 应有文本 `View more`。

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

  <a href="https://www.freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>View more <a target="_blank" href="https://www.freecatphotoapp.com">cat photos</a></p>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

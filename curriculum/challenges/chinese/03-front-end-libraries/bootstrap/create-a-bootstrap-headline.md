---
id: bad87fee1348bd9aec908846
title: 创建一个 Bootstrap 标题
challengeType: 0
forumTopicId: 16812
dashedName: create-a-bootstrap-headline
---

# --description--

现在，让我们运用 HTML，CSS 和 Bootstrap 从零开始做点东西。

我们将会搭建一个 jQuery playground，以便在后续的 jQuery 课程中使用它。

首先，创建一个包含 `jQuery Playground` 文本内容的 `h3` 元素。

通过给你的 `h3` 元素设置 Bootstrap 的 class 属性 `text-primary` 来为其上色，然后添加 Bootstrap 的 class 属性 `text-center` 使其文本居中显示。

# --hints--

为你的页面添加一个 `h3` 元素。

```js
assert($('h3') && $('h3').length > 0);
```

确保你的 `h3` 元素有一个闭合标签。

```js
assert(
  code.match(/<\/h3>/g) &&
    code.match(/<h3/g) &&
    code.match(/<\/h3>/g).length === code.match(/<h3/g).length
);
```

为了确保成功上色，`h3` 元素应该具有 `text-primary` class。

```js
assert($('h3').hasClass('text-primary'));
```

为了确保文本居中显示，你的 `h3` 元素应该具有 `text-center` class。

```js
assert($('h3').hasClass('text-center'));
```

`h3` 元素文本为 `jQuery Playground`。

```js
assert.isTrue(/jquery(\s)+playground/gi.test($('h3').text()));
```

# --seed--

## --seed-contents--

```html
```

# --solutions--

```html
<h3 class="text-primary text-center">jQuery Playground</h3>
```

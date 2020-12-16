---
id: bad87fee1348bd9acde08712
title: 使用 Fluid 容器实现响应式设计
challengeType: 0
forumTopicId: 18362
---

# --description--

之前，在 freeCodeCamp 的 HTML5 和 CSS 章节中我们构建了一个 Cat Photo App。这次我们将会使用最受欢迎的响应式 CSS 框架 Bootstrap 来美化它。

Bootstrap 会根据你的屏幕大小来调节 HTML 元素的大小————因此称为 `Responsive Design`（响应式设计）。

通过响应式设计，我们将无需额外设计一个手机版的网页，因为它在任何尺寸的屏幕上看起来都还不错。

无论开发什么应用，你都可以通过将以下代码添加到你的 HTML 顶部来引入 Bootstrap 。

`<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>`

在该案例中，我们已经帮你把相应代码添加到页面中。记住使用 `>` 和 `/>` 闭合 `link` 标签来保证引入成功。

首先，我们应该把所有 HTML 标签放在 class 为 `container-fluid` 的 `div` 元素下（除了 `link` 标签和 `style` 标签）。

# --hints--

`div` 元素的 class 属性应该为 `container-fluid`。

```js
assert($('div').hasClass('container-fluid'));
```

确保你的 `div` 元素有闭合标签.

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
```

确保你已经将所有 HTML 元素内嵌在闭合的  `style` 标签后的 `.container-fluid` 元素中。

```js
assert($('.container-fluid').children().length >= 8);
```

# --solutions--


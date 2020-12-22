---
id: bad87fee1348bd9aedf08845
title: 使用 span 创建行内元素
challengeType: 0
forumTopicId: 18370
---

# --description--

你可以使用 span 标签来创建行内元素。还记得我们怎么使用 `btn-block` class 来创建填满整行的按钮吗？

<button class='btn' style='background-color: rgb(0, 100, 0);  color: rgb(255, 255, 255);'>normal button</button>

<button class='btn btn-block' style='background-color: rgb(0, 100, 0);  color: rgb(255, 255, 255);'>btn-block button</button>

上面的例子就是 "inline" （行内）元素和 "block" （块级）元素的区别。

通过使用行内元素 `span`，你可以把不同的元素放在同一行，甚至能为一个元素的不同部分指定样式。

把 "Things cats love" 中的 "love" 放入 `span` 标签。然后为其添加 `text-danger` class 来使其文字变成红色。

"Top 3 things cats hate" 元素的写法如下：

`<p>Top 3 things cats <span class="text-danger">hate:</span></p>`

# --hints--

`span` 元素应该在 `p` 元素内。

```js
assert($('p span') && $('p span').length > 0);
```

`span` 元素应该只含有文本 `love`。

```js
assert(
  $('p span') &&
    $('p span').text().match(/love/i) &&
    !$('p span')
      .text()
      .match(/Things cats/i)
);
```

`span` 元素应该含有 class `text-danger`。

```js
assert($('span').hasClass('text-danger'));
```

确保你的 `span` 元素有一个闭合标签。

```js
assert(
  code.match(/<\/span>/g) &&
    code.match(/<span/g) &&
    code.match(/<\/span>/g).length === code.match(/<span/g).length
);
```

# --solutions--


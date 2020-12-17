---
id: bad87fee1348bd9aedf08726
title: 使用十六进制编码获得指定颜色
challengeType: 0
videoUrl: 'https://scrimba.com/c/c8W9mHM'
forumTopicId: 18350
---

# --description--

你知道在 CSS 里面还有其他方式来代表颜色吗？其中一个方法叫做十六进制编码，简称`hex`。

我们日常使用最多的计数方法，基于十进制，使用 0 到 9 数字来表示。而`十六进制编码`（`hex`）基于 16 位数字，它含有 16 种不同字符。十六进制与十进制一样，0-9 表示着 0 到 9 的值，不同的是，A，B，C，D，E，F 表示着十六进制 10 到 15 的值。总的来说，0 到 F 在`十六进制`里代表着数字，提供了 16 种可能性。你可以在[这里](https://zh.wikipedia.org/wiki/%E5%8D%81%E5%85%AD%E8%BF%9B%E5%88%B6)找到更多的相关信息。

在 CSS 里面，我们可以用使用 6 个十六进制的数字来代表颜色，每两个数字控制一种颜色，分别是红（R），绿（G），蓝（B）。例如，`#000000`代表着黑色，同时也是最小的值。你可以在[这里](https://zh.wikipedia.org/wiki/%E4%B8%89%E5%8E%9F%E8%89%B2%E5%85%89%E6%A8%A1%E5%BC%8F)找到更多的相关信息。

```css
body {
  color: #000000;
}
```

# --instructions--

使用`#000000`的十六进制编码来替换`body`元素的黑色背景。

# --hints--

`body`元素的背景颜色应该是黑色。

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

使用`十六进制编码`来替换`black`的写法。

```js
assert(
  code.match(
    /body\s*{(([\s\S]*;\s*?)|\s*?)background.*\s*:\s*?#000(000)?((\s*})|(;[\s\S]*?}))/gi
  )
);
```

# --solutions--


---
id: bad87fee1348bd9aede08835
title: 元素嵌套
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cNW4kC3'
forumTopicId: 18246
---

# --description--

`div` 元素也叫 Content Division Element（内容划分元素）元素，是一个包裹其他元素的通用容器。

它也是 HTML 中出现频率最高的元素。

和其他普通元素一样，你可以用 `<div>` 来标记一个 `div` 元素的开始，用 `</div>` 来标记一个 `div` 元素的结束。

# --instructions--

请把无序列表、有序列表和段落都嵌套进同一个 `div` 元素。

提示：你可以在第一个 `<p>` 之前插入 `div` 开始标记，在 `</ol>` 之后插入 `div` 结束标签。这样，所有的列表都会位于 `div` 之内。

# --hints--

所有的 `p` 元素都应嵌套在 `div` 元素中。

```js
assert($('div').children('p').length > 1);
```

所有的 `ul` 元素都应嵌套在 `div` 元素中。

```js
assert($('div').children('ul').length > 0);
```

所有的 `ol` 元素都应嵌套在 `div` 元素中。

```js
assert($('div').children('ol').length > 0);
```

`div` 元素应有结束标签。

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<\/div>/g).length === code.match(/<div>/g).length
);
```

# --solutions--


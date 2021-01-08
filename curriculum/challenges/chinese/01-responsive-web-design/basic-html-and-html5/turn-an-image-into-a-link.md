---
id: bad87fee1348bd9aedf08820
title: 给图片添加链接
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cRdBnUr'
forumTopicId: 18327
---

# --description--

你可以通过把元素嵌套进 `a` 里使其变成一个链接。

如果我们要把图片嵌套进 `a` 元素，可以这样写：

`<a href="#"><img src="https://bit.ly/fcc-running-cats" alt="三只萌萌的小猫"></a>`

如果把 `a` 的 `href` 属性值设置为 `#`，就可以创建固定链接。

# --instructions--

请把现存的图片嵌套进 `a` 中。

如果鼠标悬停在图片上时，鼠标的光标如果从箭头指针变成手形指针，那么此时图片就是一个链接了。

# --hints--

应将图片嵌套进 `a` 元素中。

```js
assert($('a').children('img').length > 0);
```

`a` 的 `href` 属性值应为 `#`。

```js
assert(new RegExp('#').test($('a').children('img').parent().attr('href')));
```

每个 `a` 元素都应有结束标签。

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<a/g) &&
    code.match(/<\/a>/g).length === code.match(/<a/g).length
);
```

# --solutions--


---
id: bad87fee1348bd9aedf08820
title: 给图片添加链接
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cRdBnUr'
forumTopicId: 18327
---

# --description--

你可以通过把元素嵌套进 `a` 里使其变成一个链接。

把你的图片嵌套进 `a`。举例如下：

`<a href="#"><img src="https://bit.ly/fcc-running-cats" alt="三只萌萌的小猫"></a>`

把 `a` 的`href`属性设置为`#`，就可以创建固定链接。

# --instructions--

把现存的图片嵌套进 `a` 中。

当鼠标悬停在图片上时，鼠标的光标如果从箭头指针变成手形指针，那么此时图片就是一个链接了。

# --hints--

把现存的图片嵌套进 `a` 中。

```js
assert($('a').children('img').length > 0);
```

`a` 的`href`属性应为`#`。

```js
assert(new RegExp('#').test($('a').children('img').parent().attr('href')));
```

确保每个 `a` 都有结束标记。

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<a/g) &&
    code.match(/<\/a>/g).length === code.match(/<a/g).length
);
```

# --solutions--


---
id: bad87fee1348bd9aedf08802
title: 去除 HTML 的注释
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cBmG9T7'
forumTopicId: 18329
---

# --description--

注释的作用是给代码添加一些说明，方便团队合作或日后自己查看，但又不影响代码本身。

注释的另一个用途就是在不删除代码的前提下，让代码不起作用。

在 HTML 中，注释的开始标记是`<!--`，结束标记是`-->`。

# --instructions--

现在我们反其道而行之，去掉`h1`元素、`h2`元素、`p`元素的注释。

# --hints--

确保网页中能看到`h1`元素。

```js
assert($('h1').length > 0);
```

确保网页中能看到`h2`元素。

```js
assert($('h2').length > 0);
```

确保网页中能看到`p`元素。

```js
assert($('p').length > 0);
```

确保删除了注释的结束标记`-->`。

```js
assert(!$('*:contains("-->")')[1]);
```

# --solutions--


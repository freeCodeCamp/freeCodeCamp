---
id: bad87fee1348bd9aed708826
title: 使用 jQuery 删除元素
challengeType: 6
forumTopicId: 18262
---

# --description--

现在学习用 jQuery 从页面移除 HTML 标签。

jQuery 有一个`.remove()`方法，能完全移除 HTML 标签。

请用`.remove()`方法从页面移除`target4`标签。

# --hints--

用 jQuery 从页面中移除`target4`标签。

```js
assert(
  $('#target4').length === 0 && code.match(/\$\(["']#target4["']\).remove\(\)/g)
);
```

仅用 jQuery 移除该标签。

```js
assert(
  code.match(/id="target4/g) &&
    !code.match(/<!--.*id="target4".*-->/g) &&
    $('#right-well').length > 0
);
```

# --solutions--


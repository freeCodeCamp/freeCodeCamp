---
id: bad87fed1348bd9aedf08833
title: 删除 HTML 元素
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/ckK73C9'
forumTopicId: 17559
---

# --description--

手机的屏幕空间是有限的。

让我们删除不必要的元素，开始设计我们的CatPhotoApp。

# --instructions--

任务：删除`h1`元素以简化视图。

# --hints--

删除`h1`元素。

```js
assert(!code.match(/<h1>/gi) && !code.match(/<\/h1>/gi));
```

保留`h2`元素。

```js
assert(code.match(/<h2>[\w\W]*<\/h2>/gi));
```

保留`p`元素。

```js
assert(code.match(/<p>[\w\W]*<\/p>/gi));
```

# --solutions--


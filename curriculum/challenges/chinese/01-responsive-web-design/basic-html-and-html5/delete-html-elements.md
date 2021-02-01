---
id: bad87fed1348bd9aedf08833
title: 删除 HTML 元素
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/ckK73C9'
forumTopicId: 17559
dashedName: delete-html-elements
---

# --description--

手机屏幕的空间是有限的。

让我们删除不必要的元素，开始设计我们的 CatPhotoApp。

# --instructions--

任务：删除 `h1` 元素以简化视图。

# --hints--

应删除 `h1` 元素。

```js
assert(!code.match(/<h1>/gi) && !code.match(/<\/h1>/gi));
```

应保留 `h2` 元素。

```js
assert(code.match(/<h2>[\w\W]*<\/h2>/gi));
```

应保留 `p` 元素。

```js
assert(code.match(/<p>[\w\W]*<\/p>/gi));
```

# --seed--

## --seed-contents--

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

# --solutions--

```html
<h2>CatPhotoApp</h2><p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

---
id: bad87fed1348bd9aedf08833
title: 刪除 HTML 元素
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/ckK73C9'
forumTopicId: 17559
dashedName: delete-html-elements
---

# --description--

手機屏幕的空間是有限的。

讓我們刪除不必要的元素，開始設計我們的 CatPhotoApp。

# --instructions--

任務：刪除 `h1` 元素以簡化視圖。

# --hints--

應刪除 `h1` 元素。

```js
assert(!code.match(/<h1>/gi) && !code.match(/<\/h1>/gi));
```

應保留 `h2` 元素。

```js
assert(code.match(/<h2>[\w\W]*<\/h2>/gi));
```

應保留 `p` 元素。

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

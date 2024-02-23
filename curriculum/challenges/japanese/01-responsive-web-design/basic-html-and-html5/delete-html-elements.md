---
id: bad87fed1348bd9aedf08833
title: HTML 要素を削除する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/ckK73C9'
forumTopicId: 17559
dashedName: delete-html-elements
---

# --description--

私たちのスマートフォンには、縦のスペースは多くありません。

不要な要素を削除して、猫の写真アプリを作り始めましょう。

# --instructions--

`h1` 要素を削除して、表示をシンプルにしましょう。

# --hints--

`h1` 要素を削除する必要があります。

```js
assert(!code.match(/<h1>/gi) && !code.match(/<\/h1>/gi));
```

`h2` 要素が表示されている必要があります。

```js
assert(code.match(/<h2>[\w\W]*<\/h2>/gi));
```

`p` 要素が表示されている必要があります。

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

---
id: bad87fee1348bd9aedf08833
title: 用占位符文本填充空白
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cgR7Dc7'
forumTopicId: 18178
dashedName: fill-in-the-blank-with-placeholder-text
---

# --description--

Web 开发者通常用 [lorem ipsum text](https://baike.baidu.com/item/Lorem%20ipsum/3684081) 来做占位符，占位符就是一些用于占位的文字，没有实际意义。

之所以叫 `lorem ipsum text`，是因为 `lorem ipsum` 是古罗马西塞罗谚语的前两个单词。

# --instructions--

请把 `p` 元素的内容文本替换为：`Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.`

# --hints--

`p` 元素的内容文本应包含 `Kitty ipsum`。

```js
assert.isTrue(/Kitty(\s)+ipsum/gi.test($('p').text()));
```

# --seed--

## --seed-contents--

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Hello Paragraph</p>
```

# --solutions--

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff</p>
```

---
id: bad87fee1348bd9aedf08802
title: 去除 HTML 的注释
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cBmG9T7'
forumTopicId: 18329
dashedName: uncomment-html
---

# --description--

注释的作用是给代码添加一些说明，方便团队合作或日后自己查看，但又不影响代码本身。

注释的另一个用途就是在不删除代码的前提下，让代码不起作用。

在 HTML 中，注释的开始标签是 `<!--`，结束标签是 `-->`。

# --instructions--

现在我们反其道而行之，去掉 `h1` 元素、`h2` 元素、`p` 元素的注释。

# --hints--

页面上应存在 `h1` 元素。

```js
assert($('h1').length > 0);
```

页面上应存在 `h2` 元素。

```js
assert($('h2').length > 0);
```

页面上应存在 `p` 元素。

```js
assert($('p').length > 0);
```

应删除注释的结束标签 `-->`。

```js
assert(!$('*:contains("-->")')[1]);
```

# --seed--

## --seed-contents--

```html
<!--
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->
```

# --solutions--

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

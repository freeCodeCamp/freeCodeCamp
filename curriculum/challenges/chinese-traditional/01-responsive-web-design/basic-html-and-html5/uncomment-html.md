---
id: bad87fee1348bd9aedf08802
title: 去除 HTML 的註釋
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cBmG9T7'
forumTopicId: 18329
dashedName: uncomment-html
---

# --description--

註釋的作用是給代碼添加一些說明，方便團隊合作或日後自己查看，但又不影響代碼本身。

註釋的另一個用途就是在不刪除代碼的前提下，讓代碼不起作用。

在 HTML 中，註釋的開始標籤是 `<!--`，結束標籤是 `-->`。

# --instructions--

現在我們反其道而行之，去掉 `h1` 元素、`h2` 元素、`p` 元素的註釋。

# --hints--

頁面上應存在 `h1` 元素。

```js
assert($('h1').length > 0);
```

頁面上應存在 `h2` 元素。

```js
assert($('h2').length > 0);
```

頁面上應存在 `p` 元素。

```js
assert($('p').length > 0);
```

應刪除註釋的結束標籤 `-->`。

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

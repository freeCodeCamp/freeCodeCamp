---
id: bad87fee1348bd9aedf0887a
title: 用 h2 元素代表副標題
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cE8Gqf3'
forumTopicId: 18196
dashedName: headline-with-the-h2-element
---

# --description--

在接下來的幾節課裏，我們將會一步一步地製作一個展示貓咪圖片的 HTML5 app。

這節課中，我們將會爲頁面引入作爲第二級標題的 `h2` 元素。

這些元素用來告訴瀏覽器網站的結構是什麼樣子。 `h1` 元素通常被用作主標題，`h2` 元素通常被用作副標題， 還有 `h3`、`h4`、`h5`、`h6` 元素，它們分別用作不同級別的標題。

# --instructions--

在內容爲 "Hello World" 的 `h1` 元素下面創建一個 `h2` 元素，其內容爲 “CatPhotoApp”。

# --hints--

應創建一個 `h2` 元素。

```js
assert($('h2').length > 0);
```

`h2` 元素應該有結束標籤。

```js
assert(
  code.match(/<\/h2>/g) &&
    code.match(/<\/h2>/g).length === code.match(/<h2>/g).length
);
```

`h2` 元素的內容應爲：`CatPhotoApp`。

```js
assert.isTrue(/cat(\s)?photo(\s)?app/gi.test($('h2').text()));
```

`h1` 元素的內容應爲：`Hello World`。

```js
assert.isTrue(/hello(\s)+world/gi.test($('h1').text()));
```

`h1` 元素應出現在 `h2` 元素之前。

```js
assert(code.match(/<h1>\s*?.*?\s*?<\/h1>\s*<h2>\s*?.*?\s*?<\/h2>/gi));
```

# --seed--

## --seed-contents--

```html
<h1>Hello World</h1>
```

# --solutions--

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
```

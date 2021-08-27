---
id: 587d778f367417b2b2512aae
title: 爲鏈接添加描述性的文本
challengeType: 0
videoUrl: 'https://scrimba.com/c/c437DcV'
forumTopicId: 301013
dashedName: give-links-meaning-by-using-descriptive-link-text
---

# --description--

屏幕閱讀器用戶可以選擇其設備讀取的內容的類型， 包括表示“跳轉到”（或“跳過”）的元素，跳轉到主要內容，或者從標題中獲取頁面摘要。 用戶還可以選擇只聽取頁面中的超鏈接內容。

屏幕閱讀器通過閱讀鏈接文本（即 `a` 標籤的內容文本）來完成這個操作。 如果我們只在鏈接中寫上 "click here"（點擊這裏）或者 "read more"（閱讀更多），顯然幫助有限。 相反地，應該在 `a` 標籤中使用簡潔的描述性語言來爲用戶提供更多的信息。

# --instructions--

Camper Cat 在鏈接中使用的文本在脫離上下文的情況下，描述性不是很好。 請修改錨點標籤（`a`），將其包含的文本從 `Click here` 改爲 `information about batteries`。

# --hints--

應修改 `a` 標籤，將其包含的文本從 `Click here` 改爲 `information about batteries`。

```js
assert(
  $('a')
    .text()
    .match(/^(information about batteries)$/g)
);
```

`a` 元素應該有一個 `href` 屬性，且其屬性值爲空字符串 `""`。

```js
assert($('a').attr('href') === '');
```

`a` 元素應該有一個結束標籤。

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<\/a>/g).length === code.match(/<a href=(''|"")>/g).length
);
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near. <a href="">Click here</a> for information about batteries</p>
  </article>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near. Click here for <a href="">information about batteries</a></p>
  </article>
</body>
```

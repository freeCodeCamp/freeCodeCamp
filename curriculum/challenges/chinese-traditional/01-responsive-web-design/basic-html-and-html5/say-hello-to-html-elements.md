---
id: bd7123c8c441eddfaeb5bdef
title: 向 HTML 元素問好
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cE8Gpt2'
forumTopicId: 18276
dashedName: say-hello-to-html-elements
---

# --description--

歡迎訪問 freeCodeCamp 的 HTML 編程挑戰。 這些挑戰將會幫助你逐步掌握 Web 開發。

首先，我們來用 HTML 製作一個簡單的網頁。 你可以直接在網頁內置的代碼編輯器中編輯代碼。

你看到編輯器中的 `<h1>Hello</h1>` 了嗎？ 那是一個 HTML 元素。

大部分 HTML 元素都有一個開始標籤和一個結束標籤。

開始標籤像這樣：

```html
<h1>
```

結束標籤像這樣：

```html
</h1>
```

開始標籤和結束標籤的唯一區別就是結束標籤多了一個斜槓。

每個挑戰都有測試，任何時候你點擊“運行測試”按鈕，就可以運行測試。 如果代碼通過測試，將會彈出一個窗口，你就可以進入下一個挑戰。

# --instructions--

要通過這個挑戰的測試，需要修改 `h1` 元素的文本爲 `Hello World`。

# --hints--

`h1` 元素的內容文本應爲 `Hello World`。

```js
assert.isTrue(/hello(\s)+world/gi.test($('h1').text()));
```

# --seed--

## --seed-contents--

```html
<h1>Hello</h1>
```

# --solutions--

```html
<h1>Hello World</h1>
```

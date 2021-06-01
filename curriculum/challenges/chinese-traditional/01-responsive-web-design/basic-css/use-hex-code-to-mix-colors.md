---
id: bad87fee1348bd9aedf08721
title: 使用十六進制編碼混合顏色
challengeType: 0
videoUrl: 'https://scrimba.com/c/cK89PhP'
forumTopicId: 18359
dashedName: use-hex-code-to-mix-colors
---

# --description--

回顧一下，十六進制編碼使用 6 個十六進制字符來表示顏色，兩個字符爲一組，分別代表紅（R）、綠（G）、藍（B）。

通過三原色（紅、綠、藍），我們可以創建 1600 萬種不同顏色。

例如，橘色是純紅色混合一些綠色而成，其中沒有藍色。 在十六進制編碼裏面，它可以寫成 `#FFA500`。

`0` 是十六進制裏面最小的數字，表示沒有顏色。

`F` 是十六進制裏面最大的數字，有最高的亮度。

# --instructions--

把 `style` 標籤裏面的顏色值用正確的十六進制編碼替換。

<table class='table table-striped'><tbody><tr><th>顏色</th><th>十六進制編碼</th></tr><tr><td>道奇藍</td><td><code>#1E90FF</code></td></tr><tr><td>綠色</td><td><code>#00FF00</code></td></tr><tr><td>橙色</td><td><code>#FFA500</code></td></tr><tr><td>紅色</td><td><code>#FF0000</code></td></tr></tbody></table>

# --hints--

文本內容爲 `I am red!` 的 `h1` 元素的 `color` 值應該爲紅色。

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

應使用 `hex code` 替換 `red`。

```js
assert(code.match(/\.red-text\s*?{\s*?color\s*:\s*?(#FF0000|#F00)\s*?;?\s*?}/gi));
```

文本內容爲 `I am green!` 的 `h1` 元素的 `color` 值應該爲綠色。

```js
assert($('.green-text').css('color') === 'rgb(0, 255, 0)');
```

應使用 `hex code` 替換 `green` 關鍵詞。

```js
assert(code.match(/\.green-text\s*?{\s*?color\s*:\s*?(#00FF00|#0F0)\s*?;?\s*?}/gi));
```

文本內容爲 `I am dodger blue!` 的 `h1` 元素的 `color` 值應該爲道奇藍色。

```js
assert($('.dodger-blue-text').css('color') === 'rgb(30, 144, 255)');
```

應使用 `hex code` 替換 `dodgerblue`。

```js
assert(code.match(/\.dodger-blue-text\s*?{\s*?color\s*:\s*?#1E90FF\s*?;?\s*?}/gi));
```

文本內容爲 `I am orange!` 的 `h1` 元素的 `color` 值應該爲橘色。

```js
assert($('.orange-text').css('color') === 'rgb(255, 165, 0)');
```

應使用 `hex code` 替換 `orange`。

```js
assert(code.match(/\.orange-text\s*?{\s*?color\s*:\s*?#FFA500\s*?;?\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: black;
  }
  .green-text {
    color: black;
  }
  .dodger-blue-text {
    color: black;
  }
  .orange-text {
    color: black;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>
```

# --solutions--

```html
<style>
  .red-text {
    color: #FF0000;
  }
  .green-text {
    color: #00FF00;
  }
  .dodger-blue-text {
    color: #1E90FF;
  }
  .orange-text {
    color: #FFA500;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>
```

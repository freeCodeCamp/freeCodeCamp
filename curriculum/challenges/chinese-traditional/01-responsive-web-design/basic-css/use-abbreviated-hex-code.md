---
id: bad87fee1348bd9aedf08719
title: 使用縮寫的十六進制編碼
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkpKAm'
forumTopicId: 18338
dashedName: use-abbreviated-hex-code
---

# --description--

許多人對超過 1600 萬種顏色感到不知所措， 並且很難記住十六進制編碼。 幸運的是，你可以使用縮寫形式。

例如，紅色的 `#FF0000` 十六進制編碼可以縮寫成 `#F00`。 在這種縮寫形式裏，三個數字分別代表着紅（R）、綠（G）、藍（B）三原色。

這樣，顏色的數量減少到了大約 4000 種。 且在瀏覽器裏 `#FF0000` 和 `#F00` 是完全相同的顏色。

# --instructions--

接下來，使用縮寫的十六進制編碼給元素設置正確的顏色。

<table class='table table-striped'><tbody><tr><th>顏色</th><th>十六進制編碼縮寫形式</th></tr><tr><td>藍綠色</td><td><code>#0FF</code></td></tr><tr><td>綠色</td><td><code>#0F0</code></td></tr><tr><td>紅色</td><td><code>#F00</code></td></tr><tr><td>紫紅色</td><td><code>#F0F</code></td></tr></tbody></table>

# --hints--

文本內容爲 `I am red!` 的 `h1` 元素的字體顏色 `color` 應該爲紅色。

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

應使用紅色的縮寫十六進制代碼，而不是十六進制代碼 `#FF0000`。

```js
assert(code.match(/\.red-text\s*?{\s*?color\s*:\s*?#F00\s*?;?\s*?}/gi));
```

文本內容爲 `I am green!` 的 `h1` 元素的字體顏色 `color` 應該爲綠色。

```js
assert($('.green-text').css('color') === 'rgb(0, 255, 0)');
```

應使用綠色的縮寫十六進制代碼，而不是十六進制代碼 `#00FF00`。

```js
assert(code.match(/\.green-text\s*?{\s*?color\s*:\s*?#0F0\s*?;?\s*?}/gi));
```

文本內容爲 `I am cyan!` 的 `h1` 元素的字體顏色 `color` 應該爲藍綠色。

```js
assert($('.cyan-text').css('color') === 'rgb(0, 255, 255)');
```

應使用青色的簡寫十六進制代碼，而不是十六進制代碼 `#00FFFF`。

```js
assert(code.match(/\.cyan-text\s*?{\s*?color\s*:\s*?#0FF\s*?;?\s*?}/gi));
```

文本內容爲 `I am fuchsia!` 的 `h1` 元素的字體顏色 `color` 應該爲紫紅色。

```js
assert($('.fuchsia-text').css('color') === 'rgb(255, 0, 255)');
```

應使用紫紅色的簡寫十六進制代碼，而不是十六進制代碼 `#FF00FF`。

```js
assert(code.match(/\.fuchsia-text\s*?{\s*?color\s*:\s*?#F0F\s*?;?\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: #000000;
  }
  .fuchsia-text {
    color: #000000;
  }
  .cyan-text {
    color: #000000;
  }
  .green-text {
    color: #000000;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>
```

# --solutions--

```html
<style>
  .red-text {
    color: #F00;
  }
  .fuchsia-text {
    color: #F0F;
  }
  .cyan-text {
    color: #0FF;
  }
  .green-text {
    color: #0F0;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>
```

---
id: 612eaf56b7ba3257fdbfb0db
title: 步驟 21
challengeType: 0
dashedName: step-21
---

# --description--

鋼琴需要 freeCodeCamp 標誌才能使其正式化。

在 `.keys` 元素之前添加一個 `img` 元素。 給 `img` 一個 `logo` 的 `class`，並將 `src` 設置爲 `https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg`。 給它一個 `freeCodeCamp Logo` 的 `alt` 文本。

# --hints--

應該添加一個新的 `img` 元素。

```js
assert(document.querySelectorAll('img')?.length === 1);
```

`img` 元素應該在第一個 `.key` 元素之前。

```js
const img = document.querySelector('img');
assert(img?.nextElementSibling?.className === 'keys');
assert(img?.previousElementSibling === null);
```

`img` 元素應將 `class` 設置爲 `logo`。

```js
const img = document.querySelector('img');
assert(img?.className === 'logo');
```

`img` 元素應將 `src` 設置爲 `https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg`。

```js
const img = document.querySelector('img');
assert(img?.getAttribute('src') === 'https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg');
```

`img` 元素應該有一個 `alt` 屬性設置爲 `freeCodeCamp Logo`。

```js
assert(document.querySelector('img')?.getAttribute('alt')?.toLowerCase() === 'freecodecamp logo');
```

記住大小寫和拼寫很重要。

```js
assert(document.querySelector('img')?.getAttribute('alt') === 'freeCodeCamp Logo');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Piano</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles.css">
  </head>
  <body>
    --fcc-editable-region--
    <div id="piano">
      <div class="keys">
    --fcc-editable-region--
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>

        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>

        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
      </div>
    </div>
  </body>
</html>
```

```css
html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

#piano {
  background-color: #00471b;
  width: 992px;
  height: 290px;
  margin: 80px auto;
  padding: 90px 20px 0 20px;
}

.keys {
  background-color: #040404;
  width: 949px;
  height: 180px;
  padding-left: 2px;
}

.key {
  background-color: #ffffff;
  position: relative;
  width: 41px;
  height: 175px;
  margin: 2px;
  float: left;
}

.key.black--key::after {
  background-color: #1d1e22;
  content: "";
  position: absolute;
  left: -18px;
  width: 32px;
  height: 100px;
}
```

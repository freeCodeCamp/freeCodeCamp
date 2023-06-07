---
id: 612eaf56b7ba3257fdbfb0db
title: 步骤 21
challengeType: 0
dashedName: step-21
---

# --description--

钢琴需要 freeCodeCamp 标志才能使其正式化。

在 `.keys` 元素之前添加一个 `img` 元素。 给 `img` 一个 `logo` 的 `class`，并将 `src` 设置为 `https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg`。 给它一个 `freeCodeCamp Logo` 的 `alt` 文本。

# --hints--

应该添加一个新的 `img` 元素。

```js
assert(document.querySelectorAll('img')?.length === 1);
```

`img` 元素应该在第一个 `.key` 元素之前。

```js
const img = document.querySelector('img');
assert(img?.nextElementSibling?.className === 'keys');
assert(img?.previousElementSibling === null);
```

`img` 元素应将 `class` 设置为 `logo`。

```js
const img = document.querySelector('img');
assert(img?.className === 'logo');
```

`img` 元素应将 `src` 设置为 `https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg`。

```js
const img = document.querySelector('img');
assert(img?.getAttribute('src') === 'https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg');
```

`img` 元素应该有一个 `alt` 属性设置为 `freeCodeCamp Logo`。

```js
assert(document.querySelector('img')?.getAttribute('alt')?.toLowerCase() === 'freecodecamp logo');
```

记住大小写和拼写很重要。

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

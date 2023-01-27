---
id: 612e8eebe3a6dc3fcc33a66f
title: 步驟 11
challengeType: 0
dashedName: step-11
---

# --description--

現在使用 `id` 選擇器定位 `#piano` 元素。 設置 `background-color` 屬性爲 `#00471b`，`width` 屬性爲 `992px` 以及 `height` 屬性爲 `290px`。

# --hints--

應該有一個 `#piano` 選擇器。

```js
assert(new __helpers.CSSHelp(document).getStyle('#piano'));
```

`#piano` 選擇器應該將 `background-color` 屬性設置爲 `#00471b`。

```js
assert(new __helpers.CSSHelp(document).getStyle('#piano')?.backgroundColor === 'rgb(0, 71, 27)');
```

`#piano` 選擇器應該有一個 `width` 屬性設置爲 `992px`。

```js
assert(new __helpers.CSSHelp(document).getStyle('#piano')?.width === '992px');
```

`#piano` 選擇器應該將 `height` 設置爲 `290px`。

```js
assert(new __helpers.CSSHelp(document).getStyle('#piano')?.height === '290px');
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
    <div id="piano">
      <div class="keys">
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

--fcc-editable-region--

--fcc-editable-region--
```

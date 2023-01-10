---
id: 612e8eebe3a6dc3fcc33a66f
title: 步骤 11
challengeType: 0
dashedName: step-11
---

# --description--

现在使用 `id` 选择器定位 `#piano` 元素。 设置 `background-color` 属性为 `#00471b`，`width` 属性为 `992px` 以及 `height` 属性为 `290px`。

# --hints--

应该有一个 `#piano` 选择器。

```js
assert(new __helpers.CSSHelp(document).getStyle('#piano'));
```

`#piano` 选择器应该将 `background-color` 属性设置为 `#00471b`。

```js
assert(new __helpers.CSSHelp(document).getStyle('#piano')?.backgroundColor === 'rgb(0, 71, 27)');
```

`#piano` 选择器应该有一个 `width` 属性设置为 `992px`。

```js
assert(new __helpers.CSSHelp(document).getStyle('#piano')?.width === '992px');
```

`#piano` 选择器应该将 `height` 设置为 `290px`。

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

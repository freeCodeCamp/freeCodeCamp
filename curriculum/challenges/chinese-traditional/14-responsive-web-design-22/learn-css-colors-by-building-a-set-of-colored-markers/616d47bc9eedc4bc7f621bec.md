---
id: 616d47bc9eedc4bc7f621bec
title: 步驟 10
challengeType: 0
dashedName: step-10
---

# --description--

接下來，在 `div` 中，添加另一個 `div` 元素，併爲其添加一個 `marker` 類。

# --hints--

你的新 `div` 元素應該有一個開始標籤。

```js
assert([...code.matchAll(/<div.*?>/gi)][1]);
```

你的新 `div` 元素應該有一個結束標籤。

```js
assert([...code.matchAll(/<\/div\s*>/gi)][1]);
```

你應該使用類 `container` 將新的 `div` 元素嵌套在 `div` 中。

```js
assert(document.querySelector('.container')?.children[0]?.localName === 'div');
```

你應該給你的新 `div` 元素一個 `marker` 類。

```js
const containerChildren = [...document.querySelector('.container')?.children];
assert(containerChildren.every(child => child.classList?.contains('marker')));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colored Markers</title>
    <link rel="stylesheet" href="styles.css">
  </head>
--fcc-editable-region--
  <body>
    <h1>CSS Color Markers</h1>
    <div class="container">
    </div>
  </body>
--fcc-editable-region--
</html>
```

```css
h1 {
  text-align: center;
}
```

---
id: 617b8b38f32bf2080a140675
title: 步驟 22
challengeType: 0
dashedName: step-22
---

# --description--

函數是一個可以輸入並執行特定動作的代碼。 CSS 的 `rgb` 函數接收紅色、綠色和藍色的數值或 <dfn>arguments（參數）</dfn>，並生成一個顏色。

```css
rgb(red, green, blue);
```

每個紅色、綠色和藍色值都是一個從 `0` 到 `255` 的數字。 `0` 表示該顏色的 0%，並且是黑色。 `255` 意味着該顏色的 100%。

在 `.one` 的CSS規則中，修改 `rgb` 函數中的 `red`的值。 對於 `rgb` 函數，將紅色的值設置爲 `255`，將綠色的值設置爲 `0`，將藍色的值設置爲 `0`。

# --hints--

你的 `.one` CSS 規則不應該使用 `red` 關鍵字來設置 `background-color`。

```js
assert(new __helpers.CSSHelp(document).getStyle('.one')?.backgroundColor !== 'red');
```

你的 `.one` CSS 規則應該有一個 `background-color` 屬性，設置爲 `rgb(255, 0, 0)`。

```js
assert(new __helpers.CSSHelp(document).getStyle('.one')?.backgroundColor === 'rgb(255, 0, 0)');
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
  <body>
    <h1>CSS Color Markers</h1>
    <div class="container">
      <div class="marker one">
      </div>
      <div class="marker two">
      </div>
      <div class="marker three">
      </div>
    </div>
  </body>
</html>
```

```css
h1 {
  text-align: center;
}

.container {
  background-color: rgb(0, 0, 0);
}

.marker {
  width: 200px;
  height: 25px;
  margin: 10px auto;
}

--fcc-editable-region--
.one {
  background-color: red;
}
--fcc-editable-region--

.two {
  background-color: green;
}

.three {
  background-color: blue;
}

```

---
id: 5f356ed6cf6eab5f15f5cfe6
title: 步驟 20
challengeType: 0
dashedName: step-20
---

# --description--

`div` 元素主要用於設計佈局，這與你迄今爲止使用的其他內容元素不同。 在 `body` 元素內添加一個 `div` 元素，然後將所有其他元素移到新的 `div` 內。

# --hints--

你應該有一個 `<div>` 開始標籤。

```js
assert(code.match(/<div>/i));
```

你應該有一個 `</div>` 結束標籤。

```js
assert(code.match(/<\/div>/i));
```

你不應該改變你現有的 `body` 元素。 確認你沒有刪除結束標籤。

```js
assert($('body').length === 1);
```

你的 `div` 元素應該嵌套在你的 `body` 元素中。

```js
const div = $('div')[0];
assert(div.parentElement.tagName === 'BODY');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cafe Menu</title>
    <link href="styles.css" rel="stylesheet"/>
  </head>
--fcc-editable-region--
  <body>
    <main>
      <h1>CAMPER CAFE</h1>
      <p>Est. 2020</p>
      <section>
        <h2>Coffee</h2>
      </section>
    </main>
  </body>
--fcc-editable-region--
</html>
```

```css
body {
  background-color: burlywood;
}

h1, h2, p {
  text-align: center;
}
```


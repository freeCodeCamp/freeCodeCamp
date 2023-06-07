---
id: 616d47bc9eedc4bc7f621bec
title: 步骤 10
challengeType: 0
dashedName: step-10
---

# --description--

接下来，在 `div` 中，添加另一个 `div` 元素，并为其添加一个 `marker` 类。

# --hints--

你的新 `div` 元素应该有一个开始标签。

```js
assert([...code.matchAll(/<div.*?>/gi)][1]);
```

你的新 `div` 元素应该有一个结束标签。

```js
assert([...code.matchAll(/<\/div\s*>/gi)][1]);
```

你应该使用类 `container` 将新的 `div` 元素嵌套在 `div` 中。

```js
assert(document.querySelector('.container')?.children[0]?.localName === 'div');
```

你应该给你的新 `div` 元素一个 `marker` 类。

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

---
id: 66f3f6eb66ea9dc41cdc30df
title: Design Colored Boxes
challengeType: 14
dashedName: "lab-css-colors"
demoType: onClick
---

# --description--

In this lab, you'll practice using CSS colors by designing boxes.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should set the background color for `body` to `#f4f4f4`.
2. You should have a `div` with a class of `color-grid` to hold all your color elements.
3. You should have five `div` elements within `color-grid` `div`.
4. The five `div` elements should each have a class of `color-box` and `color#`, where # is the number of the order of that `div`. For example: `color1` for the first `div`, `color2` for the second, and so on.
5. The `.color-box` class should have a set `width` and `height` so your `div` elements are visible on the page.
6. The `.color1` element should have a `background-color` that uses hexadecimal color value.
7. The `.color2` element should have a `background-color` that uses an RGB color value.
8. The `.color3` element should have a `background-color` that uses a predefined (word) color value.
9. The `.color4` element should have a `background-color` that uses a HSL color value.
10. The `.color5` element should have a `background-color` set.

# --hints--

`body` should have a background color of `#f4f4f4`.

```js
const body = document.body;
const bodyBgColor = getComputedStyle(body).backgroundColor;
assert.strictEqual(bodyBgColor, 'rgb(244, 244, 244)', 'The background color for the body is set to #f4f4f4');
```

You should have a `.color-grid` `div`.

```js
const colorGrid = document.querySelector('div.color-grid');
assert.exists(colorGrid, 'The <div> with class "color-grid" exists');
```

You should have five `div` elements the `.color-grid` `div`.

```js
const colorGridChildren = document.querySelectorAll('div.color-grid > div');
assert.strictEqual(colorGridChildren.length, 5, 'There are five <div> elements within the color-grid');
```

Each of the five `div` elements should each have a class of `color-box` and `color#`—substitute the order of the `div` for the # symbol.

```js
const colorGridChildren = document.querySelectorAll('div.color-grid > div');
assert.strictEqual(colorGridChildren.length, 5, 'There are five <div> elements within the color-grid');

colorGridChildren.forEach((child, index) => {
  const colorClass = `color${index + 1}`;
  assert.isTrue(child.classList.contains('color-box'), `The <div> element has the class "color-box"`);
  assert.isTrue(child.classList.contains(colorClass), `The <div> element has the class "${colorClass}"`);
});
```

`.color-box` should have a set `width` and `height`.

```js
const colorGridChildren = document.querySelectorAll('div.color-grid > div');
assert.strictEqual(colorGridChildren.length, 5, 'There are five <div> elements within the color-grid');

colorGridChildren.forEach((child) => {
  const width = getComputedStyle(child).width;
  const height = getComputedStyle(child).height;
  assert.isNotEmpty(width, 'The .color-box element has a width set');
  assert.isNotEmpty(height, 'The .color-box element has a height set');
});
```

`.color1` should have a hexadecimal background color.

```js
function rgbToHex(rgb) {
    const result = rgb.match(/\d+/g);
    return result
        ? '#' + result.map(x => ('0' + parseInt(x).toString(16)).slice(-2)).join('')
        : rgb;
}

const color1 = document.querySelector('.color1');
const color1BgColor = getComputedStyle(color1).backgroundColor;
const color1Hex = rgbToHex(color1BgColor);
const isHex = /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(color1Hex);
assert(isHex, 'The background color of .color1 should be a valid hexadecimal value');
```

`.color2` should have an RGB background color.

```js
const color2 = document.querySelector('.color2');
const color2BgColor = getComputedStyle(color2).backgroundColor;
assert.match(color2BgColor, /^rgb\(\d+, \d+, \d+\)$/, 'The background color of .color2 is an RGB value');
```

`.color3` should have a predefined (word) background color.

```js
//
```

`.color4` should have a HSL background color.

```js
const color4Element = document.querySelector('.color4');
const originalBackgroundColor = color4Element.style.backgroundColor;
const isHslFormat = originalBackgroundColor.startsWith('hsl');
assert(isHslFormat, 'The background color of .color4 should be an HSL color value');
```

`.color5` should have a background color set.

```js
const color5 = document.querySelector('.color5');
const color5BgColor = getComputedStyle(color5).backgroundColor;
assert.isNotEmpty(color5BgColor, 'The background color of .color5 is set');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Post Card</title>
</head>
<body>

</body>
</html>
```

```css

```

# --solutions--

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colored Boxes</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Colored Boxes</h1>
    <div class="color-grid">git 
        <div class="color-box color1"></div>
        <div class="color-box color2"></div>
        <div class="color-box color3"></div>
        <div class="color-box color4"></div>
        <div class="color-box color5"></div>
    </div>
</body>
</html>
```

```css
body {
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 20px;
    background-color: #f4f4f4;
}

h1 {
    margin-bottom: 20px;
}

.color-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
    width: 100%;
    max-width: 800px;
}

.color-box {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    border-radius: 8px;
    text-align: center;
    width: 100px;
    height: 100px;
}

.color1 {
    background-color: #33FF57;
}

.color2 {
    background-color: rgb(128,0,128);
}

.color3 {
    background-color: orange;
}

.color4 {
    background-color: hsl(59, 61%, 26%);
}

.color5 {
    background-color: red;
}
```

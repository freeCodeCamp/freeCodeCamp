---
id: 66f3f6eb66ea9dc41cdc30df
title: Design a Set of Colored Boxes
challengeType: 25
dashedName: set-of-colored-boxes
demoType: onClick
---

# --description--

In this lab, you'll practice using CSS colors by designing boxes.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should set the background color for `body` to `#f4f4f4`.
2. You should have a `div` with a class of `color-grid` to hold all your color elements.
3. You should have five `div` elements within the `.color-grid` element.
4. The five `div` elements should each have a class of `color-box` and `color#`, where `#` is the number of the order of that `div`. For example: `color1` for the first `div`, `color2` for the second, and so on.
5. The `.color-box` class should have a set `width` and `height` so your `div` elements are visible on the page.
6. The `.color1` element should have a `background-color` that uses hexadecimal color value.
7. The `.color2` element should have a `background-color` that uses an RGB color value.
8. The `.color3` element should have a `background-color` that uses a predefined (word) color value.
9. The `.color4` element should have a `background-color` that uses a HSL color value.
10. The `.color5` element should have a `background-color` set.

**Note:** Be sure to link your stylesheet in your HTML and apply your CSS.

# --hints--

`body` should have a background color of `#f4f4f4`.

```js
const body = document.body;
const bodyBgColor = getComputedStyle(body).backgroundColor;
assert.strictEqual(bodyBgColor, 'rgb(244, 244, 244)');
```

You should have a `div` element with a class of `color-grid`.

```js
const colorGrid = document.querySelector('div.color-grid');
assert.exists(colorGrid);
```

You should have five `div` elements within the `.color-grid` element.

```js
const colorGridChildren = document.querySelectorAll('div.color-grid > div');
assert.strictEqual(colorGridChildren.length, 5);
```

Each of the five `div` elements should each have a class of `color-box` and `color#`—substitute the order of the `div` for the `#` symbol.

```js
const colorGridChildren = document.querySelectorAll('div.color-grid > div');
assert.strictEqual(colorGridChildren.length, 5);

colorGridChildren.forEach((child, index) => {
  const colorClass = `color${index + 1}`;
  assert.isTrue(child.classList.contains('color-box'));
  assert.isTrue(child.classList.contains(colorClass));
});
```

The `.color-box` element should have a set `width` and `height`.

```js
const colorBox = document.querySelector('.color-box');
assert.exists(colorBox);

const colorBoxStyles = getComputedStyle(colorBox);
const width = colorBoxStyles.width;
const height = colorBoxStyles.height;

assert.notStrictEqual(width, '0px');
assert.notStrictEqual(height, '0px');
```

The `.color1` element should have a hexadecimal background color.

```js
const hexChars = "[0-9a-fA-F]"
const hexRegex = new RegExp(`\\.color1\\s*{[^}]*\\bbackground-color\\s*:\\s*#((${hexChars}{3,4})||(${hexChars}{6})||(${hexChars}{8}))\\s*;[^}]*}`);
assert.match(__helpers.removeCssComments(code), hexRegex);
```

The `.color2` element should have an RGB background color.

```js
assert.match(__helpers.removeCssComments(code), /\.color2\s*{[^}]*\bbackground-color\s*:\s*rgb\s*\(\s*\d+(?:\.\d+)?\s*(,|\s+)\s*\d+(?:\.\d+)?\s*\1\s*\d+(?:\.\d+)?\s*(\/\s*\d{1,2}(?:\.\d+)?%\s*)?\)\s*;[^}]*}/);
```

The `.color3` element should have a predefined (word) background color.

```js
const colorSet = new Set(["black", "silver", "gray", "white", "maroon", "red", "purple", "fuchsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua", "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "aqua", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "gray", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "fuchsia", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "transparent", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"]);
const matchedColor = __helpers.removeCssComments(code).match(/\.color3\s*{[^}]*\bbackground-color\s*:\s*(?<color>[a-zA-Z]+)\s*;[^}]*}/);
assert.isTrue(colorSet.has(matchedColor.groups.color.toLowerCase()));
```

The `.color4` element should have a HSL background color.

```js
const absHSLVals = '\\s*(none|\\d+(?:\\.\\d+)?(?:deg)?)\\s*\\d+(?:\\.\\d+)?%?\\s*\\d+(?:\\.\\d+)?%?\\s*(\\/\\s*\\d{1,2}(?:\\.\\d+)?%\\s*)?';
const legacyHSLVals = '\\s*\\d+(?:\\.\\d+)?(?:deg)?\\s*,\\s*\\d+(?:\\.\\d+)?%\\s*,\\s*\\d+(?:\\.\\d+)?%\\s*(?:,\\s*\\d+(?:\\.\\d+)?\\s*)?';
const hslRegex = new RegExp(`\\.color4\\s*{[^}]*\\bbackground-color\\s*:\\s*hsl\\s*\\((${absHSLVals}|${legacyHSLVals})\\)\\s*;[^}]*}`);
assert.match(__helpers.removeCssComments(code), hslRegex);
```

The `.color5` element should have a background color set.

```js
assert.isNotEmpty(new __helpers.CSSHelp(document).getStyle('.color5')?.getPropVal('background-color', true));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colored Boxes</title>
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
    <div class="color-grid"> 
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

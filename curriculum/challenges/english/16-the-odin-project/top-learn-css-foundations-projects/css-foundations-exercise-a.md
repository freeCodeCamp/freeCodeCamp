---
id: 63ee3f71381756f9716727ef
title: CSS Foundations Exercise A
challengeType: 14
dashedName: css-foundations-exercise-a
---

# --description--

**Objective:** 
In this exercise, you're going to practice adding CSS to an HTML file using all three methods: external CSS, internal CSS, and inline CSS. You should only be using type selectors for this exercise when adding styles via the external and internal methods. You should also use keywords for colors (e.g. "blue") instead of using `RGB` or `HEX` values.

## User Stories

- You should see a `div` element with some text.
  - It should have a `red` background, `white` text, a font size of `32px`, text center aligned and `bold`.
  - The CSS for the `div` element should be added externally, and using a type selector.
- You should see a `p` element with some text.
  - It should have a `green` background, `white` text, and a font size of `18px`.
  - The CSS for the `p` element should be added internally, and using a type selector.
- You should see a `button` element with some text.
  - The `button` element should have an `orange` background and a font size of `18px`.
  - The CSS for the `button` element should be added using inline styles.

# --hints--

You should have one `div` element containing some text.

```js
const divElement = document.querySelector('div');

assert.isNotNull(divElement);
assert.isAtLeast(divElement?.innerText.length, 1);
```

You should have an external stylesheet containing the `div` element styles.

```js
const styleSheet = new __helpers.CSSHelp(document).getStyleSheet();
const isExternal = styleSheet?.ownerNode.classList.contains('fcc-injected-styles');
const divStyle = new __helpers.CSSHelp(document).getStyle('div');

assert.isTrue(isExternal);
assert.isNotNull(divStyle);
```

Your `div` element should not have its CSS added using internal or inline styles.

```js
const styleElement = document.querySelector('style:not([class])');

assert.isNotTrue(styleElement?.innerText.includes('div'));
assert.isNotTrue(document.querySelector('div')?.hasAttribute('style'));
```

Your `div` element should have a `background-color` of `red` and a `color` of `white`.

```js
const divStyle = new __helpers.CSSHelp(document).getStyle('div');
const divBGColor = divStyle?.getPropertyValue('background-color');
const divColor = divStyle?.getPropertyValue('color');

assert.equal(divBGColor, 'red');
assert.equal(divColor, 'white');
```

Your `div` element should have `font-weight` set to `bold`, `font-size` set to `32px`, and `text-align` set to `center`.

```js
const divStyle = new __helpers.CSSHelp(document).getStyle('div');
const textAlign = divStyle?.getPropertyValue('text-align');
const fontSize = divStyle?.getPropertyValue('font-size');
const fontWeight = divStyle?.getPropertyValue('font-weight');

assert.equal(textAlign, 'center');
assert.equal(fontSize, '32px');
assert.equal(fontWeight,'bold');
```

You should have one `p` element and it should contain some text.

```js
const pElement = document.querySelector('p');

assert.isNotNull(pElement);
assert.isAtLeast(pElement?.innerText.length, 1)
```

Your `p` element should have its styles added internally using a `style` element.

```js
const styleElement = document.querySelector('style:not([class])');
const rules = styleElement?.sheet?.cssRules?.[0] || styleElement?.sheet?.rules?.[0];
let isStyled = false;

if (rules && rules.selectorText === 'p') {
  isStyled = true;
}

assert.isTrue(isStyled);
```

Your `p` element should have a `font-size` of `18px` and have `color` set to `white`.

```js
const styleElement = document.querySelector('style:not([class])');
const rules = styleElement?.sheet?.cssRules?.[0] || styleElement?.sheet?.rules?.[0];
let fontSize, color;

if (rules && rules.selectorText === 'p') {
  fontSize = rules.style.fontSize;
  color = rules.style.color;
}

assert.equal(fontSize, "18px");
assert.equal(color, 'white');
```

You should have one `button` element containing some text.

```js
const btnElement = document.querySelector('button');

assert.isNotNull(btnElement);
assert.isAtLeast(btnElement?.innerText.length, 1);
```

Your `button` element should have an inline style.

```js
assert.isTrue(document.querySelector('button')?.hasAttribute('style'));
```
 
Your `button` element should have its `background-color` set to `orange`.

```js
assert.equal(document.querySelector('button')?.style.backgroundColor, 'orange')
```

Your `button` element should have its `font-size` set to `18px`.

```js
assert.equal(document.querySelector('button')?.style.fontSize, '18px')
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Exercise A</title>
  </head>
  <body>

  </body>
</html>
```

```css
/* styles.css */
```

# --solutions--

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Styling Example</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
  <style>
    p {
      background-color: green;
      color: white;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <div>Hello World!</div>
  <p>This is a paragraph.</p>
  <button style="background-color: orange; font-size: 18px;">Click Me</button>
</body>
</html>
```

```css
div {
  background-color: red;
  color: white;
  font-size: 32px;
  text-align: center;
  font-weight: bold;
}
```

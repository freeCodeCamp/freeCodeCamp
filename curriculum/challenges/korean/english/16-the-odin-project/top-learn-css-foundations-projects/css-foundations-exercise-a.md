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

1. You should see a `div` element with a `red` background, `white` text, a font size of `32px`, center aligned, and `bold`.

1. The CSS of the `div` element should be added externally by using a type selector.

1. You should see a `p` element with a `green` background, `white` text, and a font size of `18px`.

1. The CSS of the `p` element should be added internally by using a type selector.

1. You should see a `button` element with an `orange` background and a font size of `18px`.

1. The CSS of the `button` element should have an inline style.

# --hints--

There should be one `div` element. It should contain some text and be aligned in the center.

```js
const aligned = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('text-align');

assert(aligned === 'center');
assert(document.getElementsByTagName('DIV')?.length == 1);
assert(document.getElementsByTagName('DIV')?.[0]?.innerText.length > 0)
```

The `div` element should have a `background-color` of `red` and a text color of `white`.

```js

const bgc = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('background-color');

const color = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('color');

assert(bgc === 'red');
assert(color === 'white');
```

The `div` element should have a `font-weight` of `bold` and a `font-size` of `32px`.

```js
const fontSize = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('font-size');
const fontWeight = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('font-weight');

assert(fontSize === '32px');
assert(fontWeight === 'bold');
```

The `div` element should have its CSS added externally.

```js
assert(!document.getElementsByTagName('style')?.[0]?.innerText.includes('div'));
assert(!document.getElementsByTagName('div')?.[0]?.hasAttribute('style'));
```

There should be one `p` element and it should contain some text.

```js
assert(document.getElementsByTagName('P')?.length == 1);
assert(document.getElementsByTagName('P')?.[0]?.innerText.length > 0)
```

The `p` element should have its `color` set to `white`.

```js
const color = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('color');

assert(color == 'white');
```

The `p` element should have a `font-size` of `18px`.

```js
const styleTag = document.getElementsByTagName('style')?.[0];
let pHasFontSize18 = false;

const rules = styleTag?.sheet?.cssRules || styleTag?.sheet?.rules;
if (rules) {
  for (let j = 0; j < rules.length; j++) {
    const rule = rules[j];
    if (rule.selectorText === 'p' && rule.style.fontSize === '18px') {
      pHasFontSize18 = true;
      break;
    }
  }
}

assert(pHasFontSize18);
```

The `p` element should have its style added internally.

```js

const styleTag = document.getElementsByTagName('style')?.[0];
let pIsStyled = false;


const rules = styleTag?.sheet?.cssRules || styleTag?.sheet?.rules;
if (rules) {
  for (let j = 0; j < rules.length; j++) {
    const rule = rules[j];
    if (rule.selectorText === 'p') {
      pIsStyled = true;
      break;
    }
  }
}

assert(pIsStyled);
```
 
The `button` element should have its `background-color` set to `orange`.

```js
assert(document.getElementsByTagName('button')?.[0]?.style.backgroundColor === 'orange')
```

The `button` element should have its `font-size` set to `18px`.

```js
assert(document.getElementsByTagName('button')?.[0]?.style.fontSize === '18px')
```

The `button` element should have an inline style.

```js
assert(document.getElementsByTagName('button')?.[0]?.hasAttribute('style'));
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

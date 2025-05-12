---
id: 681cb1a2dab50c87ddb2e514
title: "JavaScript Challenge 3: Hex Generator"
challengeType: 28
dashedName: javascript-challenge-3
---

# --description--

Given a named CSS color string, generate a random hexadecimal (hex) color code that is dominant in the given color.

- The function should handle `red`, `green`, or `blue` as an input argument.
- If the input is not one of those, the function should return `Invalid color`.
- The function should return a random six character hex color code where the input color value is greater than any of the others.
- Example of valid outputs for a given input:
  - `red`: `FF0000`
  - `green`: `00FF00`
  - `blue`: `0000FF`

# --hints--

`generateHex("yellow")` should return `Invalid color`.

```js
assert.equal(generateHex("yellow"), "Invalid color");
```

`generateHex("red")` should return a six character string.

```js
assert.lengthOf(generateHex("red"), 6);
```

`generateHex("red")` should return a valid six character hex color code.

```js
const hex = generateHex("red").toUpperCase();
const isValidHex = /^[0-9A-F]{6}$/.test(hex);
assert.isTrue(isValidHex);
```

`generateHex("red")` should return a valid hex color with a higher red value than other colors.

```js
const hex = generateHex("red").toUpperCase();
const isValidHex = /^[0-9A-F]{6}$/.test(hex);
assert.isTrue(isValidHex);

const r = parseInt(hex.slice(0, 2), 16);
const g = parseInt(hex.slice(2, 4), 16);
const b = parseInt(hex.slice(4, 6), 16);

assert.isAbove(r, g);
assert.isAbove(r, b);
```

Calling `generateHex("red")` twice should return two different hex color values where red is dominant.

```js
const hex1 = generateHex("red").toUpperCase();
const isValidHex1 = /^[0-9A-F]{6}$/.test(hex1)
assert.isTrue(isValidHex1);

const r1 = parseInt(hex1.slice(0, 2), 16);
const g1 = parseInt(hex1.slice(2, 4), 16);
const b1 = parseInt(hex1.slice(4, 6), 16);

assert.isAbove(r1, g1);
assert.isAbove(r1, b1);

const hex2 = generateHex("red").toUpperCase();
const isValidHex2 = /^[0-9A-F]{6}$/.test(hex2);
assert.isTrue(isValidHex2);

const r2 = parseInt(hex2.slice(0, 2), 16);
const g2 = parseInt(hex2.slice(2, 4), 16);
const b2 = parseInt(hex2.slice(4, 6), 16);

assert.isAbove(r2, g2);
assert.isAbove(r2, b2);
assert.notEqual(hex1, hex2);
```

Calling `generateHex("green")` twice should return two different hex color values where green is dominant.

```js
const hex1 = generateHex("green").toUpperCase();
const isValidHex1 = /^[0-9A-F]{6}$/.test(hex1)
assert.isTrue(isValidHex1);

const r1 = parseInt(hex1.slice(0, 2), 16);
const g1 = parseInt(hex1.slice(2, 4), 16);
const b1 = parseInt(hex1.slice(4, 6), 16);

assert.isAbove(g1, r1);
assert.isAbove(g1, b1);

const hex2 = generateHex("green").toUpperCase();
const isValidHex2 = /^[0-9A-F]{6}$/.test(hex2);
assert.isTrue(isValidHex2);

const r2 = parseInt(hex2.slice(0, 2), 16);
const g2 = parseInt(hex2.slice(2, 4), 16);
const b2 = parseInt(hex2.slice(4, 6), 16);

assert.isAbove(g2, r2);
assert.isAbove(g2, b2);
assert.notEqual(hex1, hex2);
```

Calling `generateHex("blue")` twice should return two different hex color values where blue is dominant.

```js
const hex1 = generateHex("blue").toUpperCase();
const isValidHex1 = /^[0-9A-F]{6}$/.test(hex1)
assert.isTrue(isValidHex1);

const r1 = parseInt(hex1.slice(0, 2), 16);
const g1 = parseInt(hex1.slice(2, 4), 16);
const b1 = parseInt(hex1.slice(4, 6), 16);

assert.isAbove(b1, r1);
assert.isAbove(b1, g1);

const hex2 = generateHex("blue").toUpperCase();
const isValidHex2 = /^[0-9A-F]{6}$/.test(hex2);
assert.isTrue(isValidHex2);

const r2 = parseInt(hex2.slice(0, 2), 16);
const g2 = parseInt(hex2.slice(2, 4), 16);
const b2 = parseInt(hex2.slice(4, 6), 16);

assert.isAbove(b2, r2);
assert.isAbove(b2, g2);
assert.notEqual(hex1, hex2);
```

# --seed--

## --seed-contents--

```js
function generateHex(color) {

  return color;
}
```

# --solutions--

```js
function generateHex(color) {
  const toHex = n => n.toString(16).padStart(2, "0").toUpperCase();

  const dominant = Math.floor(Math.random() * 86) + 170;
  const weak1 = Math.floor(Math.random() * 170);
  const weak2 = Math.floor(Math.random() * 170);

  let r, g, b;

  switch (color) {
    case "red":
      r = dominant;
      g = weak1;
      b = weak2;
      break;
    case "green":
      r = weak1;
      g = dominant;
      b = weak2;
      break;
    case "blue":
      r = weak1;
      g = weak2;
      b = dominant;
      break;
    default:
      return "Invalid color";
  }

  return `${toHex(r)}${toHex(g)}${toHex(b)}`;
}
```

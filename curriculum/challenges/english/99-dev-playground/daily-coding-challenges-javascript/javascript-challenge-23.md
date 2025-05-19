---
id: 6821ebfd237de8297eaee799
title: "JavaScript Challenge 23: RGB to Hex"
challengeType: 28
dashedName: javascript-challenge-23
---

# --description--

Given a CSS `rgb(r, g, b)` color string, return its hexadecimal equivalent.

Here are some example outputs for a given input:

| Input   | Output   |
|---------|----------|
| `rgb(255, 255, 255)`| `#ffffff` |
| `rgb(1, 2, 3)` | `#010203` |

- Make any letters lowercase.
- Return a `#` followed by six characters. Don't use any shorthand values.

# --hints--

`rgbToHex("rgb(255, 255, 255)")` should return `#ffffff`.

```js
assert.equal(rgbToHex("rgb(255, 255, 255)"), "#ffffff");
```

`rgbToHex("rgb(1, 11, 111)")` should return `#010b6f`.

```js
assert.equal(rgbToHex("rgb(1, 11, 111)"), "#010b6f");
```

`rgbToHex("rgb(173, 216, 230)")` should return `#add8e6`.

```js
assert.equal(rgbToHex("rgb(173, 216, 230)"), "#add8e6");
```

`rgbToHex("rgb(79, 123, 201)")` should return `#4f7bc9`.

```js
assert.equal(rgbToHex("rgb(79, 123, 201)"), "#4f7bc9");
```

# --seed--

## --seed-contents--

```js
function rgbToHex(rgb) {

  return rgb;
}
```

# --solutions--

```js
function rgbToHex(rgb) {
  const match = rgb.match(/\d+/g);
  const [r, g, b] = match.map(num =>
    Math.max(0, Math.min(255, parseInt(num)))
      .toString(16)
      .padStart(2, '0')
  );

  return `#${r}${g}${b}`;
}
```

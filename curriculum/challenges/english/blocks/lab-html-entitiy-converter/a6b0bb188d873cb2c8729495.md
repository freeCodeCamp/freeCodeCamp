---
id: a6b0bb188d873cb2c8729495
title: Implement an HTML Entity Converter
challengeType: 26
dashedName: implement-an-html-entity-converter
---

# --description--

This lab is about converting special characters in a string with their corresponding HTML entities.

**Objective**: Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have a `convertHTML` function that accepts a string as an argument.
1. The `convertHTML` function should return a new string by converting special characters in the argument string to their corresponding HTML entities.

   - `&` should be converted to `&amp;`.
   - `<` should be converted to `&lt;`.
   - `>` should be converted to `&gt;`.
   - `"` should be converted to `&quot;`.
   - `'` should be converted to `&apos;`.

# --hints--

You should have a `convertHTML` function.

```js
assert.isFunction(convertHTML);
```

`convertHTML("Dolce & Gabbana")` should return the string `Dolce &amp; Gabbana`.

```js
assert.match(convertHTML('Dolce & Gabbana'), /Dolce &amp; Gabbana/);
```

`convertHTML("Hamburgers < Pizza < Tacos")` should return the string `Hamburgers &lt; Pizza &lt; Tacos`.

```js
assert.match(
  convertHTML('Hamburgers < Pizza < Tacos'),
  /Hamburgers &lt; Pizza &lt; Tacos/
);
```

`convertHTML("Sixty > twelve")` should return the string `Sixty &gt; twelve`.

```js
assert.match(convertHTML('Sixty > twelve'), /Sixty &gt; twelve/);
```

`convertHTML('Stuff in "quotation marks"')` should return the string `Stuff in &quot;quotation marks&quot;`.

```js
assert.match(
  convertHTML('Stuff in "quotation marks"'),
  /Stuff in &quot;quotation marks&quot;/
);
```

`convertHTML("Schindler's List")` should return the string `Schindler&apos;s List`.

```js
assert.match(convertHTML("Schindler's List"), /Schindler&apos;s List/);
```

`convertHTML("<>")` should return the string `&lt;&gt;`.

```js
assert.match(convertHTML('<>'), /&lt;&gt;/);
```

`convertHTML("abc")` should return the string `abc`.

```js
assert.strictEqual(convertHTML('abc'), 'abc');
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
const map = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;'
};

function convertHTML(str) {
  return str.replace(/[&<>"']/g, function(char) {
    return map[char];
  });
}
```

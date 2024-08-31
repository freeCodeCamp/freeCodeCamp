---
id: 66337f396eae04ee875fcb09
title: Divide One Number by Another with JavaScript
challengeType: 1
dashedName: divide-one-num-by-another
---

# --description--

We can also divide one number by another.

JavaScript uses the `/` symbol for division.

**Example**

```js
const myVar = 16 / 2;
```

`myVar` now has the value `8`.


<h2>Hinglish</h2>

Hum ek number ko doosre se bh bhi sakte hain.

JavaScript division ke liye `/` symbol ka istemal karta hai.

**Example**

```js
const myVar = 16 / 2;
```

`myVar` ki value ab `8` hai.

# --instructions--

Change the `0` so that the `quotient` is equal to `2`.

`0` ko badlo taaki `quotient` `2` ke barabar ho jae.

# --hints--

The variable `quotient` should be equal to 2.

```js
assert(quotient === 2);
```

You should use the `/` operator.

```js
assert(/\d+\s*\/\s*\d+/.test(__helpers.removeJSComments(code)));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'quotient = '+z;})(quotient);
```

## --seed-contents--

```js
const quotient = 66 / 0;
```

# --solutions--

```js
const quotient = 66 / 33;
```


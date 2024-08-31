---
id: 6606cc4d8e0dc513ee166527
title: Divide one decimal by another with javascript
challengeType: 1
dashedName: div-two-decs
---

# --description--

Now let's divide one decimal by another.



# --instructions--

Change the `0.0` so that `quotient` will equal to `2.2`.


<h2>Hinglish</h2>

Ab ek decimal ko dusre decimal se divide krte hain.

`0.0` ko badle taki `quotient` `2.2` ke barabar ho jaye.

# --hints--

The variable `quotient` should equal `2.2`.

```js
assert(quotient === 2.2);
```

You should use the `/` operator to divide 4.4 by 2

```js
assert(/4\.40*\s*\/\s*2\.*0*/.test(__helpers.removeJSComments(code)));
```

The quotient variable should only be assigned once

```js
assert(__helpers.removeJSComments(code).match(/quotient\s*=/g).length === 1);
```

# --seed--

## --seed-contents--

```js
const quotient = 0.0 / 2.0; // Change this line
```

# --solutions--

```js
const quotient = 4.4 / 2.0;
```

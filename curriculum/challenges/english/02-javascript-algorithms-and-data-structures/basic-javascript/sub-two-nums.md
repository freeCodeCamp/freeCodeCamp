---
id: 6606cbba038815132f490073
title: Subtract one number from another with javascript
challengeType: 1
dashedName: sub-two-nums
---

# --description--

We can also subtract one number from another.

JavaScript uses the `-` symbol for subtraction.

**Example**

```js
const myVar = 12 - 6;
```

`myVar` would have the value `6`.

<h2>Hinglish</h2>

Hum ek number se doosre number ko bhi subtract kar sakte hain.

JavaScript mein subtraction ke liye `-` symbol ka istemal hota hai.

**Example**

```js
const myVar = 12 - 6;
```

`myVar` ki value `6` hogi.

# --instructions--

Change the `0` so the difference is `12`.

# --hints--

The variable `difference` should be equal to `12`.

```js
assert(difference === 12);
```

You should only subtract one number from `45`.

```js
assert(/difference=45-33;?/.test(__helpers.removeWhiteSpace(__helpers.removeJSComments(code))));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'difference = '+z;})(difference);
```

## --seed-contents--

```js
const difference = 45 - 0;
```

# --solutions--

```js
const difference = 45 - 33;
```

---
id: 6606cbe0e0a3c313551e82b3
title: Multiply Two numbers with javascript
challengeType: 1
dashedName: mul-two-nums
---

# --description--

We can also multiply one number by another.

JavaScript uses the `*` symbol for multiplication of two numbers.

**Example**

```js
const myVar = 13 * 13;
```

`myVar` would have the value `169`.

<h2>Hinglish</h2>

Hum ek number ko doosre se bhi guna kar sakte hain.

JavaScript mein do numbers ko guna karne ke liye `*` symbol ka istemal hota hai.

**Example**

```js
const myVar = 13 * 13;
```

`myVar` ki value `169` hogi.

# --instructions--

Change the `0` so that product will equal `80`.

`0` ko aise badal do ki product `80` ke barabar ho jaye.

# --hints--

The variable `product` should be equal to 80.

```js
assert(product === 80);
```

You should use the `*` operator.

```js
assert(/\*/.test(__helpers.removeJSComments(code)));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'product = '+z;})(product);
```

## --seed-contents--

```js
const product = 8 * 0;
```

# --solutions--

```js
const product = 8 * 10;
```

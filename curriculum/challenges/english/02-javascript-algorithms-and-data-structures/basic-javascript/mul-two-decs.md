---
id: 6606cbfa63c3c013858ccb20
title: Multiply two decimals with javascript
challengeType: 1
dashedName: mul-two-decs
---

# --description--

In JavaScript, you can also perform calculations with decimal numbers, just like whole numbers.

Let's multiply two decimals together to get their product.

<h2>Hinglish</h2>

JavaScript mein aap poore numbers ki tarah decimal numbers ke saath bhi ganana kar sakte hain.

Chaliye do decimal numbers ko ek doosre se guna karte hain unke product ko paane ke liye.

# --instructions--

Change the `0.0` so that product will equal `5.0`.

`0.0` ko aise badal do ki product `5.0` ke barabar ho jaye.

# --hints--

The variable `product` should equal `5.0`.

```js
assert(product === 5.0);
```

You should use the `*` operator

```js
assert(/\*/.test(__helpers.removeJSComments(code)));
```

# --seed--

## --after-user-code--

```js
(function(y){return 'product = '+y;})(product);
```

## --seed-contents--

```js
const product = 2.0 * 0.0;
```

# --solutions--

```js
const product = 2.0 * 2.5;
```

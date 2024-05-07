---
id: 663a695533166e723f6facdd
title: Return a value from a Function
challengeType: 1
dashedName: return-a-value-from-function
---

# --description--

We can pass values into a function with <dfn>arguments</dfn>. You can use a `return` statement to send a value back out of a function.

**Example**

```js
function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
```

`answer` has the value `8`.

`plusThree` takes an <dfn>argument</dfn> for `num` and returns a value equal to `num + 3`.

# --instructions--

Create a function `timesFive` that accepts one argument, multiplies it by `5`, and returns the new value.
<h2>Hinglish</h2>
Hum ek function mein <dfn>arguments</dfn> se values pass kar sakte hain. Aap ek `return` statement ka istemal karke ek value ko function se bahar bhej sakte hain.

**Udahran**

```js
function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
```

`answer` ka value `8` hai.

`plusThree` `num` ke liye ek <dfn>argument</dfn> leta hai aur ek value ko `num + 3` ke barabar return karta hai.

Ek function `timesFive` banaiye jo ek argument accept karta hai, ise `5` se multiply karta hai, aur naya value return karta hai.

# --hints--

`timesFive` should be a function

```js
assert(typeof timesFive === 'function');
```

`timesFive(5)` should return `25`

```js
assert(timesFive(5) === 25);
```

`timesFive(2)` should return `10`

```js
assert(timesFive(2) === 10);
```

`timesFive(0)` should return `0`

```js
assert(timesFive(0) === 0);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function timesFive(num) {
  return num * 5;
}
timesFive(10);
```

---
id: 6606cb5a07022b12f11c53a4
title: Add two numbers with javascript
challengeType: 1
dashedName: add-two-nums
---

# --description--

`Number` is a data type in JavaScript which represents numeric data.

Now let's try to add two numbers using JavaScript.

JavaScript uses the `+` symbol as an addition operator when placed between two numbers.


```js
const myVar = 5 + 10;
```

`myVar` now has the value `15`.



<h2>Hinglish</h2>

`Number` ek data type hai JavaScript mein jo sankhyatmak data ko darshata hai.

Ab hum JavaScript ka istemal karke do numbers ko add karne ki koshish karenge.

JavaScript mein `+` symbol ka istemal ek addition operator ke roop mein hota hai jab ye do numbers ke beech mein rakha jata hai.
**Example:**

```js
const myVar = 5 + 10;
```

Ab `myvar` ki value `15` ho gyi hai.

# --instructions--

Change the `0` so that sum will equal `20`.

`0` ko badal kar aisa karein ki sum `20` ke barabar ho.


# --hints--

`sum` should equal `20`.

```js
assert(sum === 20);
```

You should use the `+` operator.

```js
assert(/\+/.test(__helpers.removeJSComments(code)));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'sum = '+z;})(sum);
```

## --seed-contents--

```js
const sum = 10 + 0;
```

# --solutions--

```js
const sum = 10 + 10;
```

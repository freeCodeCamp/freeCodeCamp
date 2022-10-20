---
id: 597f1e7fbc206f0e9ba95dc4
title: Factors of an integer
challengeType: 1
forumTopicId: 302265
dashedName: factors-of-an-integer
---

# --description--

Write a function that returns the factors of a positive integer as an array.

These factors are the positive integers by which the number being factored can be divided to yield a positive integer result.

# --hints--

`factors` should be a function.

```js
assert(typeof factors === 'function');
```

`factors(45)` should return `[1,3,5,9,15,45]`.

```js
assert.deepEqual(factors(45), ans[0]);
```

`factors(53)` should return `[1,53]`.

```js
assert.deepEqual(factors(53), ans[1]);
```

`factors(64)` should return `[1,2,4,8,16,32,64]`.

```js
assert.deepEqual(factors(64), ans[2]);
```

# --seed--

## --after-user-code--

```js
const ans=[[1,3,5,9,15,45],[1,53],[1,2,4,8,16,32,64]];
```

## --seed-contents--

```js
function factors(num) {

}
```

# --solutions--

```js
function factors(num)
{
 let n_factors = [], i, sqr=Math.floor(Math.sqrt(num));

 for (i = 1; i <=sqr ; i += 1)
  if (num % i === 0)
  {
   n_factors.push(i);
   if (num / i !== i)
    n_factors.push(num / i);
  }
 n_factors.sort(function(a, b){return a - b;});
 return n_factors;
}
```

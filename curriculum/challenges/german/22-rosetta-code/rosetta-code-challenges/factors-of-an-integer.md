---
id: 597f1e7fbc206f0e9ba95dc4
title: Faktoren einer Ganzzahl
challengeType: 1
forumTopicId: 302265
dashedName: factors-of-an-integer
---

# --description--

Write a function that returns the factors of a positive integer as an array.

Die Faktoren sind die positiven Ganzzahlen, durch die die dargestellte Zahl aufgeteilt werden kann, um ein positives Ganzzahlergebnis zu erzielen.

# --hints--

`factors` sollte eine Funktion sein.

```js
assert(typeof factors === 'function');
```

`factors(45)` sollte `[1,3,5,9,15,45]` zurückgeben.

```js
assert.deepEqual(factors(45), ans[0]);
```

`factors(53)` sollte `[1,53]` zurückgeben.

```js
assert.deepEqual(factors(53), ans[1]);
```

`factors(64)` sollte `[1,2,4,8,16,32,64]` zurückgeben.

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

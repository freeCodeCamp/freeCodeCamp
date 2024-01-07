---
id: 5900f36e1000cf542c50fe80
title: 'Problem 1: Multiples of 3 and 5'
challengeType: 1
forumTopicId: 301722
dashedName: problem-1-multiples-of-3-and-5
---

# --description--

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value `number`.

# --hints--

`multiplesOf3and5(10)` should return a number.

```js
assert(typeof multiplesOf3and5(10) === 'number');
```

`multiplesOf3and5(49)` should return 543.

```js
assert.strictEqual(multiplesOf3and5(49), 543);
```

`multiplesOf3and5(1000)` should return 233168.

```js
assert.strictEqual(multiplesOf3and5(1000), 233168);
```

`multiplesOf3and5(8456)` should return 16687353.

```js
assert.strictEqual(multiplesOf3and5(8456), 16687353);
```

`multiplesOf3and5(19564)` should return 89301183.

```js
assert.strictEqual(multiplesOf3and5(19564), 89301183);
```

# --seed--

## --seed-contents--

```js
function multiplesOf3and5(number) {

  return true;
}

multiplesOf3and5(1000);
```

# --solutions--

```js
const multiplesOf3and5 = (number) => {
  var total = 0;

  for(var i = 0; i < number; i++) {
    if(i % 3 == 0 || i % 5 == 0) {
      total += i;
    }
  }
  return total;
};
```

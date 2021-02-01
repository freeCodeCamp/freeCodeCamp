---
id: 5900f3761000cf542c50fe89
title: 'Problem 10: Summation of primes'
challengeType: 5
forumTopicId: 301723
dashedName: problem-10-summation-of-primes
---

# --description--

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below `n`.

# --hints--

`primeSummation(17)` should return a number.

```js
assert(typeof primeSummation(17) === 'number');
```

`primeSummation(17)` should return 41.

```js
assert.strictEqual(primeSummation(17), 41);
```

`primeSummation(2001)` should return 277050.

```js
assert.strictEqual(primeSummation(2001), 277050);
```

`primeSummation(140759)` should return 873608362.

```js
assert.strictEqual(primeSummation(140759), 873608362);
```

`primeSummation(2000000)` should return 142913828922.

```js
assert.strictEqual(primeSummation(2000000), 142913828922);
```

# --seed--

## --seed-contents--

```js
function primeSummation(n) {

  return true;
}

primeSummation(2000000);
```

# --solutions--

```js
function primeSummation(n) {
  if (n < 3) { return 0 };
  let nums = [0, 0, 2];
  for (let i = 3; i < n; i += 2){
    nums.push(i);
    nums.push(0);
  }
  let sum = 2;
  for (let i = 3; i < n; i += 2){
    if (nums[i] !== 0){
      sum += nums[i];
      for (let j = i*i; j < n; j += i){
        nums[j] = 0;
      }
    }
  }
  return sum;
}
```

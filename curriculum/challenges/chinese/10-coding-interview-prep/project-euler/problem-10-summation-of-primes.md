---
id: 5900f3761000cf542c50fe89
title: 问题10：素数的总和
challengeType: 5
videoUrl: ''
dashedName: problem-10-summation-of-primes
---

# --description--

低于10的素数之和为2 + 3 + 5 + 7 = 17.求出n以下所有素数的总和。

# --hints--

`primeSummation(17)`应该返回41。

```js
assert.strictEqual(primeSummation(17), 41);
```

`primeSummation(2001)`应该返回277050。

```js
assert.strictEqual(primeSummation(2001), 277050);
```

`primeSummation(140759)`应该返回873608362。

```js
assert.strictEqual(primeSummation(140759), 873608362);
```

`primeSummation(2000000)`应返回142913828922。

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

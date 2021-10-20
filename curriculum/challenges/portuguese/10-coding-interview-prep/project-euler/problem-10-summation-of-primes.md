---
id: 5900f3761000cf542c50fe89
title: 'Problema 10: Soma dos números primos'
challengeType: 5
forumTopicId: 301723
dashedName: problem-10-summation-of-primes
---

# --description--

A soma dos números primos abaixo de 10 é 2 + 3 + 5 + 7 = 17.

Encontre a soma de todos os números primos abaixo de `n`.

# --hints--

`primeSummation(17)` deve retornar um número.

```js
assert(typeof primeSummation(17) === 'number');
```

`primeSummation(17)` deve retornar 41.

```js
assert.strictEqual(primeSummation(17), 41);
```

`primeSummation(2001)` deve retornar 277050.

```js
assert.strictEqual(primeSummation(2001), 277050);
```

`primeSummation(140759)` deve retornar 873608362.

```js
assert.strictEqual(primeSummation(140759), 873608362);
```

`primeSummation(2000000)` deve retornar 142913828922.

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

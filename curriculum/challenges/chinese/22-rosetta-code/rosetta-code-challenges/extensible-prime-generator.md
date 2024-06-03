---
id: 598ee8b91b410510ae82efef
title: 可扩展素数生成器
challengeType: 1
forumTopicId: 302262
dashedName: extensible-prime-generator
---

# --description--

Write a generator of prime numbers, in order, that will automatically adjust to accommodate the generation of any reasonably high prime.

生成器应该能够：

<ul>
  <li>Show the first <code>n</code> prime numbers</li>
  <li>显示范围内的素数</li>
  <li>显示一个范围内的素数的个数</li>
  <li>显示第 <code>n<sup>th</sup></code> 个素数</li>
</ul>

The function should have two parameters. 第一个将接收 `n` 或范围作为数组。 第二个将接收一个布尔值，它指定函数将素数作为数组返回还是单个数字（范围内的素数数或 <code>n<sup>th</sup></code> 素数）。 According to the parameters the function should return an array.

# --hints--

`primeGenerator` 应该是一个函数。

```js
assert(typeof primeGenerator === 'function');
```

`primeGenerator(20, true)` 应该返回 `[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]`。

```js
assert.deepEqual(primeGenerator(20, true), [
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71
]);
```

`primeGenerator([100, 150], true)` 应该返回 `[101, 103, 107, 109, 113, 127, 131, 137, 139, 149]`。

```js
assert.deepEqual(primeGenerator([100, 150], true), [
  101,
  103,
  107,
  109,
  113,
  127,
  131,
  137,
  139,
  149
]);
```

`primeGenerator([7700, 8000], false)` 应该返回 `30`。

```js
assert.equal(primeGenerator([7700, 8000], false), 30);
```

`primeGenerator(10000, false)` 应该返回 `104729`。

```js
assert.equal(primeGenerator(10000, false), 104729);
```

# --seed--

## --seed-contents--

```js
function primeGenerator(num, showPrimes) {

}
```

# --solutions--

```js
function primeGenerator(num, showPrimes) {
  let i,
    arr = [];

  function isPrime(num) {
    // try primes <= 16
    if (num <= 16) { return (
      num == 2 || num == 3 || num == 5 || num == 7 || num == 11 || num == 13
    ); }
    // cull multiples of 2, 3, 5 or 7
    if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0)
      { return false; }
    // cull square numbers ending in 1, 3, 7 or 9
    for (let i = 10; i * i <= num; i += 10) {
      if (num % (i + 1) == 0) return false;
      if (num % (i + 3) == 0) return false;
      if (num % (i + 7) == 0) return false;
      if (num % (i + 9) == 0) return false;
    }
    return true;
  }

  if (typeof num === 'number') {
    for (i = 0; arr.length < num; i++) if (isPrime(i)) arr.push(i);
    // first x primes
    if (showPrimes) return arr;
    // xth prime
    return arr.pop();
  }

  if (Array.isArray(num)) {
    for (i = num[0]; i <= num[1]; i++) if (isPrime(i)) arr.push(i);
    // primes between x .. y
    if (showPrimes) return arr;
    // number of primes between x .. y
    return arr.length;
  }
}
```

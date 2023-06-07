---
id: 598ee8b91b410510ae82efef
title: 拡張可能な素数ジェネレータ
challengeType: 1
forumTopicId: 302262
dashedName: extensible-prime-generator
---

# --description--

かなり高い素数の生成に対応するために自動的に調整する素数ジェネレータを作成します。

ジェネレータで次のことが可能です。

<ul>
  <li>最初の <code>n</code> 個の素数を表示する</li>
  <li>範囲内に素数を表示する</li>
  <li>範囲内の素数の数を表示する</li>
  <li><code>n<sup>th</sup></code> の素数を表示する</li>
</ul>

関数は二つのパラメーターを使用します。 1つ目は、`n`、つまり配列としての範囲です。 2 つ目は、ブール値です。 ブール値は、関数が素数を配列として返すか、単一の数値 として返すかを指定します (範囲内の素数、または <code>n<sup>th</sup></code> 素数)。 パラメーターに基づき、関数は配列を返します。

# --hints--

`primeGenerator` という関数です。

```js
assert(typeof primeGenerator === 'function');
```

`primeGenerator(20, true)` は `[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]` を返します。

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

`primeGenerator([100, 150], true)` は `[101, 103, 107, 109, 113, 127, 131, 137, 139, 149]` を返します。

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

`primeGenerator([7700, 8000], false)` は `30` を返します。

```js
assert.equal(primeGenerator([7700, 8000], false), 30);
```

`primeGenerator(10000, false)` は `104729` を返します。

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

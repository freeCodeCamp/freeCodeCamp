---
id: 599d0ba974141b0f508b37d5
title: 反向素数
challengeType: 1
forumTopicId: 302253
dashedName: emirp-primes
---

# --description--

An emirp (**prime** spelled backwards) are primes that when reversed (in their decimal representation) are a different prime.

# --instructions--

写一个函数：

<ul>
  <li>Shows the first <code>n</code> emirp numbers.</li>
  <li>显示一个范围内的 emirp 数字。</li>
  <li>显示一个范围内的 emirp 数量。</li>
  <li>显示 <code>n<sup>th</sup></code> emirp 数字。</li>
</ul>

该函数应该有两个参数。 第一个将接收 `n` 或范围作为数组。 第二个将接收一个布尔值，它指定函数将 emirps 作为数组还是单个数字（范围内的素数数量或 <code>n<sup>th</sup></code> 素数）。 根据参数，函数应返回数组或数字。

# --hints--

`emirps` 应该是一个函数。

```js
assert(typeof emirps === 'function');
```

`emirps(20,true)` 应该返回 `[13,17,31,37,71,73,79,97,107,113,149,157,167,179,199,311,337,347,359,389]`

```js
assert.deepEqual(emirps(20, true), [
  13,
  17,
  31,
  37,
  71,
  73,
  79,
  97,
  107,
  113,
  149,
  157,
  167,
  179,
  199,
  311,
  337,
  347,
  359,
  389
]);
```

`emirps(1000)` 应该返回 `70529`

```js
assert.deepEqual(emirps(1000), 70529);
```

`emirps([7700,8000],true)` 应该返回 `[7717,7757,7817,7841,7867,7879,7901,7927,7949,7951,7963]`

```js
assert.deepEqual(emirps([7700, 8000], true), [
  7717,
  7757,
  7817,
  7841,
  7867,
  7879,
  7901,
  7927,
  7949,
  7951,
  7963
]);
```

`emirps([7700,8000],false)` 应该返回 `11`

```js
assert.deepEqual(emirps([7700, 8000], false), 11);
```

# --seed--

## --seed-contents--

```js
function emirps(n) {

}
```

# --solutions--

```js
function emirps(num, showEmirps)
{
  const is_prime = function(n)
    {
    if (!(n % 2) || !(n % 3)) return false;
    let p = 1;
    while (p * p < n)
                    { if (n % (p += 4) == 0 || n % (p += 2) == 0)
                            { return false; } }
    return true;
  };
  const is_emirp = function(n) {
    const r = parseInt(n.toString().split('').reverse().join(''));
    return r != n && is_prime(n) && is_prime(r);
  };

  let i,
    arr = [];
  if (typeof num === 'number') {
    for (i = 0; arr.length < num; i++) if (is_emirp(i)) arr.push(i);
    // first x emirps
    if (showEmirps) return arr;
    // xth emirp
    return arr.pop();
  }

  if (Array.isArray(num)) {
    for (i = num[0]; i <= num[1]; i++) if (is_emirp(i)) arr.push(i);
    // emirps between x .. y
    if (showEmirps) return arr;
    // number of emirps between x .. y
    return arr.length;
  }
}
```

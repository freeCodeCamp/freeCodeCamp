---
id: 599d0ba974141b0f508b37d5
title: エマープ
challengeType: 1
forumTopicId: 302253
dashedName: emirp-primes
---

# --description--

emirp (**prime** の逆さの綴り) は、(10 進数表記で) 逆から読んでも素数になる素数です。

# --instructions--

以下の関数を作成します。

<ul>
  <li>最初の <code>n</code> 個のエマープを表示します。</li>
  <li>範囲内のエマープを表示します。</li>
  <li>範囲内のエマープの数を表示します。</li>
  <li><code>n<sup>th</sup></code> のエマープを表示します。</li>
</ul>

関数は2つのパラメーターを使用します。 1つ目としては、`n` または範囲を配列として受け取ります。 2 つ目は、ブール値です。 ブール値は、関数が エマープを配列として返すか、単一の数値 として返すかを指定します (範囲内の素数、または <code>n<sup>th</sup></code> 素数)。 パラメータに基づき、関数は配列または数値を返します。

# --hints--

`emirps` という関数です。

```js
assert(typeof emirps === 'function');
```

`emirps(20,true)` は `[13,17,31,37,71,73,79,97,107,113,149,157,167,179,199,311,337,347,359,389]` を返します。

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

`emirps(1000)` は `70529` を返します。

```js
assert.deepEqual(emirps(1000), 70529);
```

`emirps([7700,8000],true)` は `[7717,7757,7817,7841,7867,7879,7901,7927,7949,7951,7963]` を返します。

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

`emirps([7700,8000],false)` は `11` を返します。

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

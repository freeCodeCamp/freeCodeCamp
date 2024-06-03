---
id: 5900f3911000cf542c50fea4
title: '問題 37: 切り詰め可能な素数'
challengeType: 1
forumTopicId: 302031
dashedName: problem-37-truncatable-primes
---

# --description--

3797 という数には興味深い性質があります。 その数自体が素数であり、左から右へ 1 桁ずつ消していくと、いずれの段階でも素数のままです (3797, 797, 97, 7)。 右から左へ桁を消しても同じことが起こります (3797, 379, 37, 3)。

左から右、および右から左へ切り詰めても素数のままである、`n` (8 ≤ `n` ≤ 11) 個しかない素数の和を求めなさい。

注: 2, 3, 5, 7 は切り詰め可能な素数とはみなされません。

# --hints--

`truncatablePrimes(8)` は数値を返す必要があります。

```js
assert(typeof truncatablePrimes(8) === 'number');
```

`truncatablePrimes(8)` は 1986 を返す必要があります。

```js
assert(truncatablePrimes(8) == 1986);
```

`truncatablePrimes(9)` は 5123 を返す必要があります。

```js
assert(truncatablePrimes(9) == 5123);
```

`truncatablePrimes(10)` は 8920 を返す必要があります。

```js
assert(truncatablePrimes(10) == 8920);
```

`truncatablePrimes(11)` は 748317 を返す必要があります。

```js
assert(truncatablePrimes(11) == 748317);
```

# --seed--

## --seed-contents--

```js
function truncatablePrimes(n) {

  return n;
}

truncatablePrimes(11);
```

# --solutions--

```js
// solution required
```

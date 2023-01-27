---
id: 5900f38b1000cf542c50fe9e
title: '問題 31: 硬貨の和'
challengeType: 1
forumTopicId: 301965
dashedName: problem-31-coin-sums
---

# --description--

英国の通貨はポンド (£) とペンス (p) からなり、一般に流通している硬貨は次の 8 種類です。

<div style='margin-left: 4em;'>1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), £2 (200p)</div>

次のように 2 ポンドを作ることができます。

<div style='margin-left: 4em;'>1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p</div>

これらの硬貨を使って `n` ペンスを作る方法は何通りありますか。硬貨は何枚でも使えます。

# --hints--

`coinSums(50)` は数値を返す必要があります。

```js
assert(typeof coinSums(50) === 'number');
```

`coinSums(50)` は 451 を返す必要があります。

```js
assert(coinSums(50) == 451);
```

`coinSums(100)` は 4563 を返す必要があります。

```js
assert(coinSums(100) == 4563);
```

`coinSums(150)` は 21873 を返す必要があります。

```js
assert(coinSums(150) == 21873);
```

`coinSums(200)` は 73682 を返す必要があります。

```js
assert(coinSums(200) == 73682);
```

# --seed--

## --seed-contents--

```js
function coinSums(n) {

  return n;
}

coinSums(200);
```

# --solutions--

```js
const coinSums = (n) => {
  const getWays = (n, m=8, c=[1, 2, 5, 10, 20, 50, 100, 200]) => {
    if (n === 0) return 1;
    if (m === 0 || n < 0) return 0;
    return getWays(n - c[m - 1], m, c) + getWays(n, m - 1, c);
  };
  return getWays(n);
};
```

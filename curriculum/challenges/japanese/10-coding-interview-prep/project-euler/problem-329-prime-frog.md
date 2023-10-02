---
id: 5900f4b51000cf542c50ffc8
title: '問題 329: 素数ガエル'
challengeType: 1
forumTopicId: 301986
dashedName: problem-329-prime-frog
---

# --description--

スーザンは素数ガエルを飼っています。

そのカエルは、1 から 500 までの番号が振られた 500 個のマスの上を跳び回ります。

左または右のマスのみへ等しい確率で跳ぶことができ、範囲 [1;500] の外側に跳ぶことはできません。 (いずれかの端に着くと、次に移動できる唯一のマスへ自動的に跳びます。)

素数が書かれたマスにいるとき、次のマスへ跳ぶ直前に、確率 $\frac{2}{3}$で 'P' (素数)、または確率 $\frac{1}{3}$ で 'N' (非素数) と鳴きます。 非素数が書かれたマスにいるとき、次のマスへ跳ぶ直前に、確率 $\frac{1}{3}$で 'P' と鳴くか、確率 $\frac{2}{3}$ で 'N' と鳴きます。

カエルがどのマスから跳び始めるかは、不規則かつすべてのマスで等確率であるとします。カエルの最初の 15 回の鳴き声が PPPPNNPPPNPPNPN の順になる確率を求めなさい。

回答は、既約分数 `p/q` の形式の文字列にすること。

# --hints--

`primeFrog()` は文字列を返す必要があります。

```js
assert(typeof primeFrog() === 'string');
```

`primeFrog()` は文字列 `199740353/29386561536000` を返す必要があります。

```js
assert.strictEqual(primeFrog(), '199740353/29386561536000');
```

# --seed--

## --seed-contents--

```js
function primeFrog() {

  return true;
}

primeFrog();
```

# --solutions--

```js
// solution required
```

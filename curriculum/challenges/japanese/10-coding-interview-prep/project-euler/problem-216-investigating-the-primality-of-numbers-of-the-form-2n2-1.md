---
id: 5900f4451000cf542c50ff57
title: '問題 216: 2n^2-1 で表される数の素数性を調べ上げる'
challengeType: 1
forumTopicId: 301858
dashedName: problem-216-investigating-the-primality-of-numbers-of-the-form-2n2-1
---

# --description--

$n > 1$ を満たす式 $t(n) = 2n^2 - 1$ の $t(n)$ について考えます。

最初の数は 7, 17, 31, 49, 71, 97, 127, 161 です。

$49 = 7 \times 7$ と $161 = 7 \times 23$ のみが素数ではないことが分かります。

$n ≤ 10000$ のとき、素数である数 $t(n)$ は 2202 個あります。

$n ≤ 50\\,000\\,000$ のとき、素数である数 $t(n)$ はいくつありますか。

# --hints--

`primalityOfNumbers()` は `5437849` を返す必要があります。

```js
assert.strictEqual(primalityOfNumbers(), 5437849);
```

# --seed--

## --seed-contents--

```js
function primalityOfNumbers() {

  return true;
}

primalityOfNumbers();
```

# --solutions--

```js
// solution required
```

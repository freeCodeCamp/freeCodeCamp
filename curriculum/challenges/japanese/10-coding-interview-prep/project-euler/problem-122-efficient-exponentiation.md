---
id: 5900f3e61000cf542c50fef9
title: '問題 122: 効率的な累乗法'
challengeType: 1
forumTopicId: 301749
dashedName: problem-122-efficient-exponentiation
---

# --description--

$n^{15}$ の最も単純な計算方法では、14 回の乗算が必要です。

$$n × n × \ldots × n = n^{15}$$

しかし、2 進法を使えば 6 回の乗算で計算できます。

$$\begin{align}   & n × n = n^2\\\\
  & n^2 × n^2 = n^4\\\\   & n^4 × n^4 = n^8\\\\
  & n^8 × n^4 = n^{12}\\\\   & n^{12} × n^2 = n^{14}\\\\
  & n^{14} × n = n^{15} \end{align}$$

しかし、わずか 5 回の乗算で計算することも可能です。

$$\begin{align}   & n × n = n^2\\\\
  & n^2 × n = n^3\\\\   & n^3 × n^3 = n^6\\\\
  & n^6 × n^6 = n^{12}\\\\ & n^{12} × n^3 = n^{15} \end{align}$$

ここで、$n^k$ を計算するための最小の乗算回数を $m(k)$ とします。例えば $m(15) = 5$ です。

$1 ≤ a ≤ 200$ のとき、$\sum{m(k)}$ を求めなさい。

# --hints--

`efficientExponentation()` は `1582` を返す必要があります。

```js
assert.strictEqual(efficientExponentation(), 1582);
```

# --seed--

## --seed-contents--

```js
function efficientExponentation() {

  return true;
}

efficientExponentation();
```

# --solutions--

```js
// solution required
```

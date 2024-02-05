---
id: 5900f50d1000cf542c51001f
title: '問題 417: 逆数の循環節 (2)'
challengeType: 1
forumTopicId: 302086
dashedName: problem-417-reciprocal-cycles-ii
---

# --description--

単位分数とは分子が 1 である分数です。 分母が 2 から 10 までの単位分数を小数で表すと、次のようになります。

$$\begin{align}   & \frac{1}{2}  = 0.5 \\\\
  & \frac{1}{3}  = 0.(3) \\\\   & \frac{1}{4}  = 0.25 \\\\
  & \frac{1}{5}  = 0.2 \\\\   & \frac{1}{6}  = 0.1(6) \\\\
  & \frac{1}{7}  = 0.(142857) \\\\   & \frac{1}{8}  = 0.125 \\\\
  & \frac{1}{9}  = 0.(1) \\\\   & \frac{1}{10} = 0.1 \\\\
\end{align}$$

この中の $0.1(6)$ は $0.16666\ldots$ を意味し、1 桁の循環節を持ちます。 $\frac{1}{7}$ には 6 桁の循環節があることが分かります。

分母の素因数が 2 または 5、あるいはその両方のみであるとき、その単位分数は循環節を持たないとみなされます。 これらの単位分数の循環節の長さを 0 と定義します。

$L(n)$ を $\frac{1}{n}$ の循環節の長さと定義します。 $3 ≤ n ≤ 1\\,000\\,000$ のとき、$\sum L(n)$ = $55\\,535\\,191\\,115$ です。

$3 ≤ n ≤ 100\\,000\\,000$ のとき、$\sum L(n)$ を求めなさい。

# --hints--

`reciprocalCyclesTwo()` は `446572970925740` を返す必要があります。

```js
assert.strictEqual(reciprocalCyclesTwo(), 446572970925740);
```

# --seed--

## --seed-contents--

```js
function reciprocalCyclesTwo() {

  return true;
}

reciprocalCyclesTwo();
```

# --solutions--

```js
// solution required
```

---
id: 5900f5241000cf542c510036
title: '問題 437: フィボナッチ原始根'
challengeType: 1
forumTopicId: 302108
dashedName: problem-437-fibonacci-primitive-roots
---

# --description--

$n$ が 0 から 9 のとき、$8^n$ mod 11 を求めると 1, 8, 9, 6, 4, 10, 3, 2, 5, 7 が得られます。

このように、1 から 10 までのすべての値が現れます。 したがって、 8 は 11 の原始根です。

しかし、話はここで終わりません。

よく見ると次のことが分かります。

$$\begin{align}   & 1 + 8 = 9 \\\\
  & 8 + 9 = 17 ≡ 6\bmod 11 \\\\   & 9 + 6 = 15 ≡ 4\bmod 11 \\\\
  & 6 + 4 = 10 \\\\   & 4 + 10 = 14 ≡ 3\bmod 11 \\\\
  & 10 + 3 = 13 ≡ 2\bmod 11 \\\\   & 3 + 2 = 5 \\\\
  & 2 + 5 = 7 \\\\ & 5 + 7 = 12 ≡ 1\bmod 11. \end{align}$$

したがって、8 の累乗を 11 で除した余りは周期 10 で循環し、$8^n + 8^{n + 1} ≡ 8^{n + 2} (\text{mod } 11)$ です。 8 は 11 のフィボナッチ原始根と呼ばれます。

すべての素数がフィボナッチ原始根を持つわけではありません。 1 つ以上のフィボナッチ原始根を持つ 10000 未満の素数は 323 個あり、それらの和は 1480491 です。

少なくとも 1 つのフィボナッチ原始根を持つ $100\\,000\\,000$ 未満の素数の和を求めなさい。

# --hints--

`fibonacciPrimitiveRoots()` は `74204709657207` を返す必要があります。

```js
assert.strictEqual(fibonacciPrimitiveRoots(), 74204709657207);
```

# --seed--

## --seed-contents--

```js
function fibonacciPrimitiveRoots() {

  return true;
}

fibonacciPrimitiveRoots();
```

# --solutions--

```js
// solution required
```

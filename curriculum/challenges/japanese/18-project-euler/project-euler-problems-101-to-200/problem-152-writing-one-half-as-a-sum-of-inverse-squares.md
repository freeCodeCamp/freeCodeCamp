---
id: 5900f4041000cf542c50ff17
title: '問題 152: 1/2 を平方数の逆数の和で表す'
challengeType: 1
forumTopicId: 301783
dashedName: problem-152-writing-one-half-as-a-sum-of-inverse-squares
---

# --description--

相異なる整数を使用して、その平方数の逆数の和として $\frac{1}{2}$ を表す方法はいくつかあります。

例えば、次のように {2,3,4,5,7,12,15,20,28,35} を使用できます。

$$\frac{1}{2} = \frac{1}{2^2} + \frac{1}{3^2} + \frac{1}{4^2} + \frac{1}{5^2} + \frac{1}{7^2} + \frac{1}{{12}^2} + \frac{1}{{15}^2} + \frac{1}{{20}^2} + \frac{1}{{28}^2} + \frac{1}{{35}^2}$$

実際、2 から 45 までの整数を使うとちょうど 3 通りの方法があります。上記以外の方法で使用するのは、{2,3,4,6,7,9,10,20,28,35,36,45} と {2,3,4,6,7,9,12,15,28,30,35,36,45} です。

2 から 80 までの相異なる整数について、その平方数の逆数の和として $\frac{1}{2}$ を表す方法は何通りありますか。

# --hints--

`sumInverseSquares()` は `301` を返す必要があります。

```js
assert.strictEqual(sumInverseSquares(), 301);
```

# --seed--

## --seed-contents--

```js
function sumInverseSquares() {

  return true;
}

sumInverseSquares();
```

# --solutions--

```js
// solution required
```

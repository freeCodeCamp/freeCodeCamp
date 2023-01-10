---
id: 5900f3d51000cf542c50fee6
title: '問題 104: 両端がパンデジタルであるフィボナッチ数'
challengeType: 1
forumTopicId: 301728
dashedName: problem-104-pandigital-fibonacci-ends
---

# --description--

フィボナッチ数列は次の漸化関係によって定義されます。

$F_n = F_{n − 1} + F_{n − 2}$ ここで、$F_1 = 1$, $F_2 = 1$

これにより、113 桁の $F_{541}$は、下位 9 桁が 1 から 9 のパンデジタル数 (1 から 9 のすべての数字を含むが、必ずしもその順序ではない) になる初めてのフィボナッチ数であることがわかります。 そして 575 桁の $F_{2749}$ は、上位 9 桁が 1 から 9 のパンデジタル数字である、最初のフィボナッチ数です。

上位 9 桁と下位 9 桁の両方が 1 から 9 のパンデジタル数であるような初めてのフィボナッチ数を $F_k$ とし、`k` を求めなさい。

# --hints--

`pandigitalFibonacciEnds()` は `329468` を返す必要があります。

```js
assert.strictEqual(pandigitalFibonacciEnds(), 329468);
```

# --seed--

## --seed-contents--

```js
function pandigitalFibonacciEnds() {

  return true;
}

pandigitalFibonacciEnds();
```

# --solutions--

```js
// solution required
```

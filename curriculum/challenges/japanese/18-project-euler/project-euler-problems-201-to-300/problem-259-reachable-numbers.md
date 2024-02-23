---
id: 5900f4701000cf542c50ff82
title: 'Problem 259: 到達可能な数'
challengeType: 1
forumTopicId: 301907
dashedName: problem-259-reachable-numbers
---

# --description--

次の規則に沿った算術式によって得られる正の整数を、「到達可能な数」と呼ぶことにします。

- 1 から 9 の数字を、この順番でちょうど 1 回ずつ使用する。
- 任意の連続した数字を連結できる (例: 2, 3, 4 を使って 234 を得る)。
- 一般的な 2 項の四則演算 (加算、減算、乗算、除算) のみが許される。
- 各演算は何回でも使用でき、全く使用しなくても良い。
- 単項マイナスは使用できない。
- 演算の順序を指定するために括弧を何個でも使用できる (入れ子も可)。

例えば、$\frac{1}{23} \times ((4 \times 5) - 6) \times (78 - 9) = 42$ なので、42 は到達可能な数です。

到達可能な正の整数の総和を求めなさい。

# --hints--

`reachableNumbers()` は `20101196798` を返す必要があります。

```js
assert.strictEqual(reachableNumbers(), 20101196798);
```

# --seed--

## --seed-contents--

```js
function reachableNumbers() {

  return true;
}

reachableNumbers();
```

# --solutions--

```js
// solution required
```

---
id: 5900f4021000cf542c50ff14
title: '问题 148：帕斯卡三角形的研究'
challengeType: 1
forumTopicId: 301777
dashedName: problem-148-exploring-pascals-triangle
---

# --description--

可以轻易证明，帕斯卡三角形前七行中，没有一个数字可以被 7 整除。

```markup
            1
          1   1
        1   2   1
      1   3   3   1
    1   4   6   4   1
  1   5   10  10  5   1
1   6   15  20  15  6   1
```

但是如果我们检查前一百行，会发现在 5050 个数中只有 2361 个数字不能被 7 整除。

# --instructions--

请找出帕斯卡三角形前十亿（${10}^9$）行中不能被 7 整除的数的个数。

# --hints--

`entriesOfPascalsTriangle()` 应该返回 `2129970655314432`。

```js
assert.strictEqual(entriesOfPascalsTriangle(), 2129970655314432);
```

# --seed--

## --seed-contents--

```js
function entriesOfPascalsTriangle() {

  return true;
}

entriesOfPascalsTriangle();
```

# --solutions--

```js
// solution required
```

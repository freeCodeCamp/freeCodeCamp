---
id: 5900f4021000cf542c50ff14
title: '問題 148：帕斯卡三角形的研究'
challengeType: 1
forumTopicId: 301777
dashedName: problem-148-exploring-pascals-triangle
---

# --description--

可以輕易證明，帕斯卡三角形前七行中，沒有一個數字可以被 7 整除。

```markup
            1
          1   1
        1   2   1
      1   3   3   1
    1   4   6   4   1
  1   5   10  10  5   1
1   6   15  20  15  6   1
```

但是如果我們檢查前一百行，會發現在 5050 個數中只有 2361 個數字不能被 7 整除。

# --instructions--

請找出帕斯卡三角形前十億（${10}^9$）行中不能被 7 整除的數的個數。

# --hints--

`entriesOfPascalsTriangle()` 應該返回 `2129970655314432`。

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

---
id: 5900f3781000cf542c50fe8b
title: 问题12：高度可分的三角数
challengeType: 5
videoUrl: ''
---

# --description--

通过添加自然数生成三角数的序列。所以第7个三角形数字是1 + 2 + 3 + 4 + 5 + 6 + 7 = 28.前十个术语是：

1,3,6,10,15,21,28,36,45,55 ......

让我们列出前七个三角形数字的因子：

**1：** 1

**3：** 1,3

**6：** 1,2,3,6

**10：** 1,2,5,10

**15：** 1,3,5,15

**21：** 1,3,7,21

**28：** 1,2,4,7,14,28

我们可以看到28是第一个超过五个除数的三角形数。超过`n`除数的第一个三角形数的值是多少？

# --hints--

`divisibleTriangleNumber(5)`应该返回28。

```js
assert.strictEqual(divisibleTriangleNumber(5), 28);
```

`divisibleTriangleNumber(23)`应该返回630。

```js
assert.strictEqual(divisibleTriangleNumber(23), 630);
```

divisibleTriangleNumber `divisibleTriangleNumber(167)`应该返回1385280。

```js
assert.strictEqual(divisibleTriangleNumber(167), 1385280);
```

divisibleTriangleNumber `divisibleTriangleNumber(374)`应该返回17907120。

```js
assert.strictEqual(divisibleTriangleNumber(374), 17907120);
```

divisibleTriangleNumber `divisibleTriangleNumber(500)`应该返回76576500。

```js
assert.strictEqual(divisibleTriangleNumber(500), 76576500);
```

# --solutions--


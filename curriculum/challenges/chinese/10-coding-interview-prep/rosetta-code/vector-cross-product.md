---
id: 594810f028c0303b75339ad2
title: 矢量交叉产品
challengeType: 5
videoUrl: ''
---

# --description--

矢量被定义为具有三个维度，由三个数字的有序集合表示：（X，Y，Z）。

任务：

```
 Write a function that takes two vectors (arrays) as input and computes their cross product. 
```

您的函数应在无效输入（即不同长度的向量）上返回`null` 。

# --hints--

dotProduct必须是一个函数

```js
assert.equal(typeof crossProduct, 'function');
```

dotProduct（）必须返回null

```js
assert.equal(crossProduct(), null);
```

crossProduct（[1,2,3]，[4,5,6]）必须返回[-3,6，-3]。

```js
assert.deepEqual(res12, exp12);
```

# --solutions--


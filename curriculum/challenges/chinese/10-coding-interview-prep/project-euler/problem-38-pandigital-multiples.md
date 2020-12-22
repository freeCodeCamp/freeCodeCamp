---
id: 5900f3931000cf542c50fea5
title: 问题38：Pandigital倍数
challengeType: 5
videoUrl: ''
---

# --description--

取数字192并乘以1,2和3中的每一个：192×1 = 192 192×2 = 384 192×3 = 576通过连接每个产品，我们得到1到9 pandigital，192384576。我们将调用192384576 192和（1,2,3）的连接产物。通过从9开始并乘以1,2,3,4和5可以实现相同的目的，得到pandigital，918273645，它是9和（1,2,3,4,5）的连接产物。什么是最大的1到9 pandigital 9位数字，可以形成一个整数与（1,2，...， `n` ）的连接乘积，其中`n` > 1？

# --hints--

pandigitalMultiples `pandigitalMultiples()`应返回932718654。

```js
assert.strictEqual(pandigitalMultiples(), 932718654);
```

# --solutions--


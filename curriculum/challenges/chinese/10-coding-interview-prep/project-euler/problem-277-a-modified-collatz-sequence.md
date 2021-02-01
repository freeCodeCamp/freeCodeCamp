---
id: 5900f4811000cf542c50ff94
title: 问题277：修改的Collat​​z序列
challengeType: 5
videoUrl: ''
dashedName: problem-277-a-modified-collatz-sequence
---

# --description--

通过以下方式从起始值a1获得修改的整数Collat​​z序列：

如果a可以被3整除，则a + 1 = an / 3.我们将此表示为一个大的向下步骤，“D”。

如果除以3得到1的余数，则a + 1 =（4an + 2）/ 3。我们将其称为向上步骤“U”。

如果除以3得到余数为2，则a + 1 =（2an-1）/ 3.我们将这表示为一个小的向下步骤，“d”。

当某些a = 1时，序列终止。

给定任何整数，我们可以列出步骤的顺序。例如，如果a1 = 231，则序列{an} = {231,77,51,17,11,7,10,14,9,3,1}对应于步骤“DdDddUUdDD”。

当然，还有其他序列以相同的序列“DdDddUUdDD ....”开头。例如，如果a1 = 1004064，则序列为DdDddUUdDDDdUDUUUdDdUUDDDUdDD。实际上，1004064是以序列DdDddUUdDD开头的最小可能a1> 106。

从序列“UDDDUdddDDUDDddDdDddDDUDDdUUDd”开始的最小a1> 1015是多少？

# --hints--

`euler277()`应该返回1125977393124310。

```js
assert.strictEqual(euler277(), 1125977393124310);
```

# --seed--

## --seed-contents--

```js
function euler277() {

  return true;
}

euler277();
```

# --solutions--

```js
// solution required
```

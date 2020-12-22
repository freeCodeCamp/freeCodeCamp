---
id: 5900f4511000cf542c50ff63
title: 问题228：Minkowski Sums
challengeType: 5
videoUrl: ''
---

# --description--

设Sn是常规的n边多边形 - 或形状 - 其顶点

vk（k = 1,2，...，n）有坐标：

```
 xk   = cos( 2k-1/n ×180° ) yk   = sin( 2k-1/n ×180° ) 
```

每个Sn都被解释为由周边和内部的所有点组成的填充形状。

两个形状S和T的Minkowski和S + T是结果

将S中的每个点添加到T中的每个点，其中以坐标方式执行点添加：

（u，v）+（x，y）=（u + x，v + y）。

例如，S3和S4的总和是六边形，如下面粉红色所示：

S1864 + S1865 + ... + S1909有多少方面？

# --hints--

`euler228()`应返回86226。

```js
assert.strictEqual(euler228(), 86226);
```

# --solutions--


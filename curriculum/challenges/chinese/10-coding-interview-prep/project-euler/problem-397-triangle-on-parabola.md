---
id: 5900f4f91000cf542c51000c
title: 问题397：抛物线上的三角形
challengeType: 5
videoUrl: ''
---

# --description--

在抛物线y = x2 / k上，选择三个点A（a，a2 / k），B（b，b2 / k）和C（c，c2 / k）。

令F（K，X）为整数四元组（k，a，b，c）的数量，使得三角形ABC的至少一个角度为45度，其中1≤k≤K且-X≤a&lt; b &lt;c≤X。

例如，F（1,10）= 41并且F（10,100）= 12492.找到F（106,109）。

# --hints--

`euler397()`应该返回141630459461893730。

```js
assert.strictEqual(euler397(), 141630459461893730);
```

# --solutions--


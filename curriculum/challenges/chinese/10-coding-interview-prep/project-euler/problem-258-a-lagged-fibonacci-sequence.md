---
id: 5900f46e1000cf542c50ff81
title: 问题258：滞后的斐波那契序列
challengeType: 5
videoUrl: ''
---

# --description--

序列定义为：

gk = 1，对于0≤k≤1999gk = gk-2000 + gk-1999，对于k≥2000。对于k = 1018，找到gk mod 20092010。

# --hints--

`euler258()`应该返回12747994。

```js
assert.strictEqual(euler258(), 12747994);
```

# --solutions--


---
id: 5900f47e1000cf542c50ff90
title: 问题273：正方形的总和
challengeType: 5
videoUrl: ''
---

# --description--

考虑以下形式的方程：a2 + b2 = N，0≤a≤b，a，b和N整数。

对于N = 65，有两种解决方案：a = 1，b = 8，a = 4，b = 7。我们将S（N）称为a2 + b2 = N，0≤a≤b，a，b和N整数的所有解的a的值之和。因此，S（65）= 1 + 4 = 5.找到ΣS（N），对于所有无平均N，只能被4k + 1形式的素数整除，其中4k + 1 &lt;150。

# --hints--

`euler273()`应该返回2032447591196869000。

```js
assert.strictEqual(euler273(), 2032447591196869000);
```

# --solutions--


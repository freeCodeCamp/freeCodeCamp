---
id: 5900f4ea1000cf542c50fffc
title: 问题381：（prime-k）阶乘
challengeType: 5
videoUrl: ''
---

# --description--

对于素数p，令S（p）=（Σ（pk）！）mod（p）1≤k≤5。

例如，如果p = 7，（7-1）！ +（7-2）！ +（7-3）！ +（7-4）！ +（7-5）！ = 6！ + 5！ + 4！ + 3！ + 2！ = 720 + 120 + 24 + 6 + 2 = 872.当872 mod（7）= 4时，S（7）= 4。

对于5≤p&lt;100，可以证实ΣS（p）= 480。

求ΣS（p）为5≤p&lt;108。

# --hints--

`euler381()`应该返回139602943319822。

```js
assert.strictEqual(euler381(), 139602943319822);
```

# --solutions--


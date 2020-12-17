---
id: 5900f4d11000cf542c50ffe4
title: 问题357：Prime生成整数
challengeType: 5
videoUrl: ''
---

# --description--

考虑30：1,2,3,5,6,10,15,30的除数。可以看出，对于每个除数d为30，d + 30 / d是素数。

找出所有正整数n的总和不超过100 000 000，这样对于n的每个除数d，d + n / d是素数。

# --hints--

`euler357()`应该返回1739023853137。

```js
assert.strictEqual(euler357(), 1739023853137);
```

# --solutions--


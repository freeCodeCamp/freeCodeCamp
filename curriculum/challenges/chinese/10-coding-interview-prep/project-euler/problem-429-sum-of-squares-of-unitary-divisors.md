---
id: 5900f5191000cf542c51002c
title: 问题429：单一除数的平方和
challengeType: 5
videoUrl: ''
---

# --description--

数为n的unit除数d是n的除数，其性质为gcd（d，n / d）= 1。

4的除数！ = 24是1、3、8和24。

它们的平方和是12 + 32 + 82 + 242 = 650。

令S（n）表示n的一元除数的平方和。 因此，S（4！）＝ 650。

求S（100000000！）取模1000000009。

# --hints--

`euler429()`应该返回98792821。

```js
assert.strictEqual(euler429(), 98792821);
```

# --solutions--


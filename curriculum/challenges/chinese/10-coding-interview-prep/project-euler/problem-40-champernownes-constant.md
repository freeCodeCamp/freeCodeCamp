---
id: 5900f3941000cf542c50fea7
title: 问题40：Champernowne的常数
challengeType: 5
videoUrl: ''
---

# --description--

通过连接正整数创建无理小数： 0.12345678910 **1** 112131415161718192021 ...可以看出小数部分的<sup>第</sup> 12位是1.如果*d <sub>n</sub>*代表小数部分的<sup>第</sup> *n*位，找到值以下表达式。 d <sub>1</sub> ×d <sub>10</sub> ×d <sub>100</sub> ×d <sub>1000</sub> ×d <sub>10000</sub> ×d <sub>100000</sub> ×d <sub>1000000</sub>

# --hints--

`champernownesConstant(100)`应该返回5。

```js
assert.strictEqual(champernownesConstant(100), 5);
```

`champernownesConstant(1000)`应该返回15。

```js
assert.strictEqual(champernownesConstant(1000), 15);
```

`champernownesConstant(1000000)`应该返回210。

```js
assert.strictEqual(champernownesConstant(1000000), 210);
```

# --solutions--


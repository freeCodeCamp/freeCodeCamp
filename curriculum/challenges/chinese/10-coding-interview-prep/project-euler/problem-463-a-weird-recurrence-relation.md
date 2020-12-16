---
id: 5900f53c1000cf542c51004e
title: 问题463：一种奇怪的复发关系
challengeType: 5
videoUrl: ''
---

# --description--

函数$ f $定义为所有正整数，如下所示：$ f（1）= 1 $ $ f（3）= 3 $ $ f（2n）= f（n）$ $ f（4n + 1）= 2f （2n + 1） - f（n）$ $ f（4n + 3）= 3f（2n + 1） - 2f（n）$

函数$ S（n）$定义为$ \\ sum\_ {i = 1} ^ {n} f（i）$。 $ S（8）= 22 $和$ S（100）= 3604 $。找到$ S（3 ^ {37}）$。给出答案的最后9位数字。

# --hints--

`euler463()`应该返回808981553。

```js
assert.strictEqual(euler463(), 808981553);
```

# --solutions--


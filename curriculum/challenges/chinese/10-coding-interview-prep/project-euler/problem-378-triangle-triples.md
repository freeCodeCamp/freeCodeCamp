---
id: 5900f4e61000cf542c50fff9
title: 问题378：三角形三元组
challengeType: 5
videoUrl: ''
---

# --description--

设T（n）为第n个三角形数，因此T（n）=

n（n + 1）2

。

设dT（n）为T（n）的除数。例如：T（7）= 28且dT（7）= 6。

令Tr（n）为三元组数（i，j，k），使得1≤i&lt;j &lt;k≤n且dT（i）> dT（j）> dT（k）。 Tr（20）= 14，Tr（100）= 5772，Tr（1000）= 11174776。

找Tr（60 000 000）。给出答案的最后18位数字。

# --hints--

`euler378()`应该返回147534623725724700。

```js
assert.strictEqual(euler378(), 147534623725724700);
```

# --solutions--


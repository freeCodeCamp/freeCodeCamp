---
id: 5900f3fd1000cf542c50ff10
title: 问题145：有多少可逆数字低于十亿？
challengeType: 5
videoUrl: ''
---

# --description--

一些正整数n具有sum \[n + reverse（n）]完全由奇数（十进制）数字组成的属性。例如，36 + 63 = 99和409 + 904 = 1313.我们将这些数字称为可逆的;所以36,63,409和904是可逆的。 n或反向（n）中不允许前导零。

有一千个可逆数字低于一千。

有多少可逆数字低于十亿（109）？

# --hints--

`euler145()`应该返回608720。

```js
assert.strictEqual(euler145(), 608720);
```

# --solutions--


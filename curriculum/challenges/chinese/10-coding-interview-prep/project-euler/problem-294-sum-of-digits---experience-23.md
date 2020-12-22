---
id: 5900f4931000cf542c50ffa5
title: 问题294：数字总和-经验＃23
challengeType: 5
videoUrl: ''
---

# --description--

对于正整数k，将d（k）定义为通常的十进制表示形式中k的位数之和。

因此d（42）= 4 + 2 = 6。

对于正整数n，将S（n）定义为具有以下属性的正整数k &lt;10n的数量： k可被23整除 d（k）= 23。

给出S（9）= 263626和S（42）= 6377168878570056。

找到S（1112）并给出答案mod 109。

# --hints--

`euler294()`应该返回789184709。

```js
assert.strictEqual(euler294(), 789184709);
```

# --solutions--


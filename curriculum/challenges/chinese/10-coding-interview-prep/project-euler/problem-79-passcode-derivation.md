---
id: 5900f3bb1000cf542c50fece
title: 问题79：密码派生
challengeType: 5
videoUrl: ''
---

# --description--

用于在线银行业务的常见安全方法是向用户询问密码中的三个随机字符。例如，如果密码是531278，他们可能会要求输入第2，第3和第5个字符;预期的回复是：317。文本文件keylog.txt包含50次成功的登录尝试。鉴于总是按顺序询问三个字符，分析该文件以确定未知长度的最短可能秘密密码。

# --hints--

`euler79()`应该返回73162890。

```js
assert.strictEqual(euler79(), 73162890);
```

# --solutions--


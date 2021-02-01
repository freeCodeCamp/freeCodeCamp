---
id: 5900f3bb1000cf542c50fece
title: 问题79：密码派生
challengeType: 5
videoUrl: ''
dashedName: problem-79-passcode-derivation
---

# --description--

用于在线银行业务的常见安全方法是向用户询问密码中的三个随机字符。例如，如果密码是531278，他们可能会要求输入第2，第3和第5个字符;预期的回复是：317。文本文件keylog.txt包含50次成功的登录尝试。鉴于总是按顺序询问三个字符，分析该文件以确定未知长度的最短可能秘密密码。

# --hints--

`euler79()`应该返回73162890。

```js
assert.strictEqual(euler79(), 73162890);
```

# --seed--

## --seed-contents--

```js
function passcodeDerivation(arr) {

  return true;
}

// Only change code above this line

const keylog = [
  319,680,180,690,129,620,762,689,762,318,368,710,720,710,629,168,160,689,716,731,736,729,316,729,729,710,769,290,719,680,318,389,162,289,162,718,729,319,790,680,890,362,319,760,316,729,380,319,728,716,
];

passcodeDerivation(keylog);
```

# --solutions--

```js
// solution required
```

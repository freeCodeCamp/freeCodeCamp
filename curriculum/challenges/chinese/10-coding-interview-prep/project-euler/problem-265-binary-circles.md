---
id: 5900f4761000cf542c50ff88
title: 问题265：二进制圆圈
challengeType: 5
videoUrl: ''
dashedName: problem-265-binary-circles
---

# --description--

2N二进制数字可以放在一个圆圈中，这样所有N位顺时针子序列都是不同的。

对于N = 3，两个这样的圆形布置是可能的，忽略旋转：

对于第一种布置，顺时针顺序的3位子序列是：000,001,010,101,011,111,110和100。

通过将以全零的子序列开始的二进制数字连接为最高有效位并顺时针进行，可以将每个循环排列编码为数字。因此，N = 3的两种排列表示为23和29：00010111 2 = 23 00011101 2 = 29

调用S（N）唯一数值表示的总和，我们可以看到S（3）= 23 + 29 = 52。

找到S（5）。

# --hints--

`euler265()`应该返回209110240768。

```js
assert.strictEqual(euler265(), 209110240768);
```

# --seed--

## --seed-contents--

```js
function euler265() {

  return true;
}

euler265();
```

# --solutions--

```js
// solution required
```

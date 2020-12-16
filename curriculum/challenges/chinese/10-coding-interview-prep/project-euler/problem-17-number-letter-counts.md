---
id: 5900f37d1000cf542c50fe90
title: 问题17：数字字母计数
challengeType: 5
videoUrl: ''
---

# --description--

如果数字1到5用文字写出：一，二，三，四，五，则总共使用3 + 3 + 5 + 4 + 4 = 19个字母。如果从1到包含`limit`所有数字都用文字写出，那么会使用多少个字母？ **注意：** 不要计算空格或连字符。例如，342（三百四十二）包含23个字母，115（一百一十五）包含20个字母。在写出数字时使用“和”符合英国的用法。

# --hints--

`numberLetterCounts(5)`应返回19。

```js
assert.strictEqual(numberLetterCounts(5), 19);
```

`numberLetterCounts(150)`应该返回1903。

```js
assert.strictEqual(numberLetterCounts(150), 1903);
```

`numberLetterCounts(1000)`应该返回21124。

```js
assert.strictEqual(numberLetterCounts(1000), 21124);
```

# --solutions--


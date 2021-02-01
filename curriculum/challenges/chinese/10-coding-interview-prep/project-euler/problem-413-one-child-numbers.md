---
id: 5900f50a1000cf542c51001c
title: 问题413：独生子女号码
challengeType: 5
videoUrl: ''
dashedName: problem-413-one-child-numbers
---

# --description--

我们说如果其子串中的一个子串可被d整除，则d位正数（无前导零）是一个子数。

例如，5671是一个4位数的单子号码。在其所有子串5,6,7,1,56,67,71,567,671和5671中，只有56可被4整除。类似地，104是3位单子数，因为只有0可被整除3. 1132451是一个7位数的单子号码，因为只有245可被7整除。

设F（N）是小于N的一子数的数。我们可以验证F（10）= 9，F（103）= 389和F（107）= 277674。

找到F（1019）。

# --hints--

`euler413()`应该返回3079418648040719。

```js
assert.strictEqual(euler413(), 3079418648040719);
```

# --seed--

## --seed-contents--

```js
function euler413() {

  return true;
}

euler413();
```

# --solutions--

```js
// solution required
```

---
id: 5900f36e1000cf542c50fe80
title: 问题1：3和5的倍数
challengeType: 5
videoUrl: ''
dashedName: problem-1-multiples-of-3-and-5
---

# --description--

如果我们列出所有10以下是3或5的倍数的自然数，我们会得到3，5，6和9。这些倍数的总和是23。

求出所有在`number`以下的3或5的倍数的总和。

# --hints--

`multiplesOf3and5(1000)`应该返回233168。

```js
assert.strictEqual(multiplesOf3and5(1000), 233168);
```

`multiplesOf3and5(49)`应该返回543。

```js
assert.strictEqual(multiplesOf3and5(49), 543);
```

`multiplesOf3and5(19564)`应该返回89301183。

```js
assert.strictEqual(multiplesOf3and5(19564), 89301183);
```

您的函数未使用我们的测试值返回正确的结果。

```js
assert.strictEqual(multiplesOf3and5(8456), 16687353);
```

# --seed--

## --seed-contents--

```js
function multiplesOf3and5(number) {

  return true;
}

multiplesOf3and5(1000);
```

# --solutions--

```js
const multiplesOf3and5 = (number) => {
  var total = 0;

  for(var i = 0; i < number; i++) {
    if(i % 3 == 0 || i % 5 == 0) {
      total += i;
    }
  }
  return total;
};
```

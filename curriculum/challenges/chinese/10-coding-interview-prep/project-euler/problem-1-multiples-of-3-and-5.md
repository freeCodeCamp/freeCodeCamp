---
id: 5900f36e1000cf542c50fe80
title: '问题 1：3 或 5 的倍数'
challengeType: 1
forumTopicId: 301722
dashedName: problem-1-multiples-of-3-and-5
---

# --description--

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 这些倍数的总和是 23。

在提供的参数值 `number` 下找到所有 3 或 5 的倍数之和。

# --hints--

`multiplesOf3and5(10)` 应该返回一个数字。

```js
assert(typeof multiplesOf3and5(10) === 'number');
```

`multiplesOf3and5(49)` 应该返回 543。

```js
assert.strictEqual(multiplesOf3and5(49), 543);
```

`multiplesOf3and5(1000)` 应该返回 233168。

```js
assert.strictEqual(multiplesOf3and5(1000), 233168);
```

`multiplesOf3and5(8456)` 应该返回 16687353。

```js
assert.strictEqual(multiplesOf3and5(8456), 16687353);
```

`multiplesOf3and5(19564)` 应该返回 89301183。

```js
assert.strictEqual(multiplesOf3and5(19564), 89301183);
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

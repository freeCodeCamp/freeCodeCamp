---
id: 5900f36e1000cf542c50fe81
title: 问题2：斐波那契数列中的偶数
challengeType: 5
videoUrl: ''
dashedName: problem-2-even-fibonacci-numbers
---

# --description--

在斐波那契数列中，每一项都是前两项的和（第一项和第二项除外）。如果从1和2开始，前十项是：

<div style='text-align: center;'>1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...</div>

求出斐波那契数列中值是偶数的项的和，至第`n`项（包括第`n`项）为止。

# --hints--

`fiboEvenSum(10)`应该返回188。

```js
assert.strictEqual(
  fiboEvenSum(10),
  188,
  '<code>fiboEvenSum(10)</code> should return 188.'
);
```

`fiboEvenSum(23)`应该返回60696。

```js
assert.strictEqual(
  fiboEvenSum(23),
  60696,
  '<code>fiboEvenSum(23)</code> should return 60696.'
);
```

`fiboEvenSum(43)`应该返回1485607536。

```js
assert.strictEqual(
  fiboEvenSum(43),
  1485607536,
  '<code>fiboEvenSum(43)</code> should return 1485607536.'
);
```

您的函数未使用我们的测试值返回正确的结果。

```js
assert.strictEqual(
  fiboEvenSum(18),
  3382,
  'Your function is not returning the correct result using our tests values.'
);
```

您的函数应返回`even`数值。

```js
assert.equal(
  fiboEvenSum(31) % 2 === 0,
  true,
  'Your function should return an <code>even</code> value.'
);
```

# --seed--

## --seed-contents--

```js
function fiboEvenSum(n) {

  return true;
}
```

# --solutions--

```js
const fiboEvenSum = (number) => {
  if (number <= 1) {
    return 0;
  } else {
    let evenSum = 0,
      prevFibNum = 1,
      fibNum = 2; // According to problem description our Fibonacci series starts with 1, 2
    for (let i = 2; fibNum <= number; i++) {
      if (fibNum % 2 == 0) {
        evenSum += fibNum;
      }
      [prevFibNum, fibNum] = [fibNum, prevFibNum + fibNum];
    }
    return evenSum;
  }
};
```

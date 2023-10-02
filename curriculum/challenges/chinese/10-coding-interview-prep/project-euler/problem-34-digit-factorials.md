---
id: 5900f38e1000cf542c50fea1
title: '问题 34：数字阶乘'
challengeType: 1
forumTopicId: 301998
dashedName: problem-34-digit-factorials
---

# --description--

145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the numbers and the sum of the numbers which are equal to the sum of the factorial of their digits.

**Note:** as 1! = 1 and 2! = 2 are not sums they are not included.

# --hints--

`digitFactorial()` should return an object.

```js
assert.typeOf(digitFactorial(), 'object');
```

`digitFactorial()` should return { sum: 40730, numbers: [145, 40585] }.

```js
assert.deepEqual(digitFactorial(), { sum: 40730, numbers: [145, 40585] });
```

# --seed--

## --seed-contents--

```js
function digitFactorial() {

  var sum = 0;
  var numbers = [];
  return { sum, numbers };
}

digitFactorial();
```

# --solutions--

```js
// solution required
```

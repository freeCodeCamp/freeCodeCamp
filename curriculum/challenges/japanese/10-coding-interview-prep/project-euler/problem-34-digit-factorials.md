---
id: 5900f38e1000cf542c50fea1
title: '問題 34: 各位の階乗'
challengeType: 1
forumTopicId: 301998
dashedName: problem-34-digit-factorials
---

# --description--

145 は奇妙な数です。1! + 4! + 5! = 1 + 24 + 120 = 145 となるからです。

各位の階乗の和がその数自体と等しくなるような数、およびそれらの和を求めなさい。

**注:** 1! = 1 と 2! = 2 は和でないので含まれません。

# --hints--

`digitFactorial()` はオブジェクトを返す必要があります。

```js
assert.typeOf(digitFactorial(), 'object');
```

`digitFactorial()` は { sum: 40730, numbers: [145, 40585] } を返す必要があります。

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

---
id: 5900f36e1000cf542c50fe81
title: '問題 2: 偶数のフィボナッチ数'
challengeType: 1
forumTopicId: 301838
dashedName: problem-2-even-fibonacci-numbers
---

# --description--

フィボナッチ数列の新しい項はそれぞれ、前の 2 項を足すことによって得られます。 1 と 2 で始めた場合、最初の 10 項は次のとおりです。

<div style='text-align: center;'>1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...</div>

値が `n` 未満であるフィボナッチ数列の項を考え、偶数項の和を求めなさい。

# --hints--

`fiboEvenSum(10)` は数値を返す必要があります。

```js
assert(typeof fiboEvenSum(10) === 'number');
```

Your function should return an even value.

```js
assert.equal(fiboEvenSum(10) % 2 === 0, true);
```

この関数は偶数値のフィボナッチ数の和を求める必要があり、`fiboEvenSum(8)` は 10 を返す必要があります。

```js
assert.strictEqual(fiboEvenSum(8), 10);
```

`fiboEvenSum(10)` は 10 を返す必要があります。

```js
assert.strictEqual(fiboEvenSum(10), 10);
```

`fiboEvenSum(34)` は 44 を返す必要があります。

```js
assert.strictEqual(fiboEvenSum(34), 44);
```

`fiboEvenSum(60)` は 44 を返す必要があります。

```js
assert.strictEqual(fiboEvenSum(60), 44);
```

`fiboEvenSum(1000)` は 798 を返す必要があります。

```js
assert.strictEqual(fiboEvenSum(1000), 798);
```

`fiboEvenSum(100000)` は 60696 を返す必要があります。

```js
assert.strictEqual(fiboEvenSum(100000), 60696);
```

`fiboEvenSum(4000000)` は 4613732 を返す必要があります。

```js
assert.strictEqual(fiboEvenSum(4000000), 4613732);
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

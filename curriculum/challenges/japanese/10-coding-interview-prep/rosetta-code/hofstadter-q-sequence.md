---
id: 59637c4d89f6786115efd814
title: ホフスタッター Q 数列
challengeType: 1
forumTopicId: 302287
dashedName: hofstadter-q-sequence
---

# --description--

The Hofstadter Q sequence is defined as:

$Q(1)=Q(2)=1, \\\\ Q(n)=Q\\big(n-Q(n-1)\\big)+Q\\big(n-Q(n-2)), \\quad n>2.$

It is defined like the Fibonacci sequence, but whereas the next term in the Fibonacci sequence is the sum of the previous two terms, in the Q sequence the previous two terms tell you how far to go back in the Q sequence to find the two numbers to sum to make the next term of the sequence.

# --instructions--

ホフスタッター Q 数列方程式を関数として作成してください。 この関数は、数値`n`を受け取り、整数を返します。

# --hints--

`hofstadterQ` は関数とします。

```js
assert(typeof hofstadterQ === 'function');
```

`hofstadterQ()` は`integer`を返す必要があります。

```js
assert(Number.isInteger(hofstadterQ(1000)));
```

`hofstadterQ(1000)` は`502`を返す必要があります。

```js
assert.equal(hofstadterQ(testCase[0]), res[0]);
```

`hofstadterQ(1500)` は`755`を返す必要があります。

```js
assert.equal(hofstadterQ(testCase[1]), res[1]);
```

`hofstadterQ(2000)` は `1005`を返す必要があります。

```js
assert.equal(hofstadterQ(testCase[2]), res[2]);
```

`hofstadterQ(2500)` は`1261`を返す必要があります。

```js
assert.equal(hofstadterQ(testCase[3]), res[3]);
```

# --seed--

## --after-user-code--

```js
const testCase = [1000, 1500, 2000, 2500];
const res = [502, 755, 1005, 1261];
```

## --seed-contents--

```js
function hofstadterQ(n) {

  return n;
}
```

# --solutions--

```js
function hofstadterQ (n) {
  const memo = [1, 1, 1];
  const Q = function (i) {
    let result = memo[i];
    if (typeof result !== 'number') {
      result = Q(i - Q(i - 1)) + Q(i - Q(i - 2));
      memo[i] = result;
    }
    return result;
  };
  return Q(n);
}
```

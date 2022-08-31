---
id: 59637c4d89f6786115efd814
title: Hofstadter Q sequence
challengeType: 1
forumTopicId: 302287
dashedName: hofstadter-q-sequence
---

# --description--

The Hofstadter Q sequence is defined as:

$Q(1)=Q(2)=1, \\\\ Q(n)=Q\\big(n-Q(n-1)\\big)+Q\\big(n-Q(n-2)), \\quad n>2.$

It is defined like the Fibonacci sequence, but whereas the next term in the Fibonacci sequence is the sum of the previous two terms, in the Q sequence the previous two terms tell you how far to go back in the Q sequence to find the two numbers to sum to make the next term of the sequence.

# --instructions--

Implement the Hofstadter Q Sequence equation as a function. The function should accept number, `n`, and return an integer.

# --hints--

`hofstadterQ` should be a function.

```js
assert(typeof hofstadterQ === 'function');
```

`hofstadterQ()` should return `integer`

```js
assert(Number.isInteger(hofstadterQ(1000)));
```

`hofstadterQ(1000)` should return `502`

```js
assert.equal(hofstadterQ(testCase[0]), res[0]);
```

`hofstadterQ(1500)` should return `755`

```js
assert.equal(hofstadterQ(testCase[1]), res[1]);
```

`hofstadterQ(2000)` should return `1005`

```js
assert.equal(hofstadterQ(testCase[2]), res[2]);
```

`hofstadterQ(2500)` should return `1261`

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

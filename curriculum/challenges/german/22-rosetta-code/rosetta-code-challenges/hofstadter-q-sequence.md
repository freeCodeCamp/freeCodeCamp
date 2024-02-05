---
id: 59637c4d89f6786115efd814
title: Hofstadter Q-Folge
challengeType: 1
forumTopicId: 302287
dashedName: hofstadter-q-sequence
---

# --description--

The Hofstadter Q sequence is defined as:

$Q(1)=Q(2)=1, \\\\ Q(n)=Q\\big(n-Q(n-1)\\big)+Q\\big(n-Q(n-2)), \\quad n>2.$

Sie ist wie die Fibonacci-Folge definiert, aber während der nächste Term in der Fibonacci-Folge die Summe der beiden vorhergehenden Terme ist, geben in der Q-Folge die beiden vorhergehenden Terme an, wie weit man in der Q-Folge zurückgehen muss, um die beiden Zahlen zu finden, die man addieren muss, um den nächsten Term der Folge zu bilden.

# --instructions--

Implementiere die Gleichung der Hofstadter Q-Sequenz als Funktion. Die Funktion sollte eine Zahl, `n`, akzeptieren und eine ganze Zahl zurückgeben.

# --hints--

`hofstadterQ` sollte eine Funktion sein.

```js
assert(typeof hofstadterQ === 'function');
```

`hofstadterQ()` sollte `integer` zurückgeben

```js
assert(Number.isInteger(hofstadterQ(1000)));
```

`hofstadterQ(1000)` sollte `502` zurückgeben

```js
assert.equal(hofstadterQ(testCase[0]), res[0]);
```

`hofstadterQ(1500)` sollte `755` zurückgeben

```js
assert.equal(hofstadterQ(testCase[1]), res[1]);
```

`hofstadterQ(2000)` sollte `1005` zurückgeben

```js
assert.equal(hofstadterQ(testCase[2]), res[2]);
```

`hofstadterQ(2500)` sollte `1261` zurückgeben

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

---
id: 5900f3711000cf542c50fe84
title: 'Завдання 5: Найменше кратне'
challengeType: 1
forumTopicId: 302160
dashedName: problem-5-smallest-multiple
---

# --description--

2520 - це найменше число, яке можна поділити на кожне з чисел від 1 до 10 без остачі.

Яке найменше додатне число ділиться на кожне з чисел від 1 до `n` без остачі?

# --hints--

`smallestMult(5)` має повернути число.

```js
assert(typeof smallestMult(5) === 'number');
```

`smallestMult(5)` має повернути число 60.

```js
assert.strictEqual(smallestMult(5), 60);
```

`smallestMult(7)` має повернути число 420.

```js
assert.strictEqual(smallestMult(7), 420);
```

`smallestMult(10)` має повернути число 2520.

```js
assert.strictEqual(smallestMult(10), 2520);
```

`smallestMult(13)` має повернути число 360360.

```js
assert.strictEqual(smallestMult(13), 360360);
```

`smallestMult(20)` має повернути число 232792560.

```js
assert.strictEqual(smallestMult(20), 232792560);
```

# --seed--

## --seed-contents--

```js
function smallestMult(n) {

  return true;
}

smallestMult(20);
```

# --solutions--

```js
function smallestMult(n){
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a%b); // Euclidean algorithm
  }

  function lcm(a, b) {
    return a * b / gcd(a, b);
  }
  var result = 1;
  for(var i = 2; i <= n; i++) {
    result = lcm(result, i);
  }
  return result;
}
```

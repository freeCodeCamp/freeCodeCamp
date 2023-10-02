---
id: 5900f3711000cf542c50fe84
title: 'Problem 5: Kleinstes Vielfaches'
challengeType: 1
forumTopicId: 302160
dashedName: problem-5-smallest-multiple
---

# --description--

2520 ist die kleinste Zahl, die durch jede der Zahlen von 1 bis 10 geteilt werden kann, ohne dass ein Rest übrig bleibt.

Was ist die kleinste positive Zahl, die durch alle Zahlen von 1 bis `n` gleichmäßig teilbar ist?

# --hints--

`smallestMult(5)` sollte eine Zahl zurückgeben.

```js
assert(typeof smallestMult(5) === 'number');
```

`smallestMult(5)` sollte 60 zurückgeben.

```js
assert.strictEqual(smallestMult(5), 60);
```

`smallestMult(7)` sollte 420 zurückgeben.

```js
assert.strictEqual(smallestMult(7), 420);
```

`smallestMult(10)` sollte 2520 zurückgeben.

```js
assert.strictEqual(smallestMult(10), 2520);
```

`smallestMult(13)` sollte 360360 zurückgeben.

```js
assert.strictEqual(smallestMult(13), 360360);
```

`smallestMult(20)` sollte 232792560 zurückgeben.

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

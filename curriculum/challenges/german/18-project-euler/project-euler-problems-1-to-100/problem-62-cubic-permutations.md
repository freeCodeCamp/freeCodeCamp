---
id: 5900f3aa1000cf542c50febd
title: 'Problem 62: Kubische Permutationen'
challengeType: 1
forumTopicId: 302174
dashedName: problem-62-cubic-permutations
---

# --description--

Der Würfel 41063625 ($345^3$) kann so permutiert werden, dass zwei weitere Würfel entstehen: 56623104 ($384^3$) und 66430125 ($405^3$). Tatsächlich ist 41063625 der kleinste Würfel, der genau drei Permutationen seiner Ziffern hat, die ebenfalls Würfel sind.

Finde den kleinsten Würfel, für den genau `n`-Permutationen seiner Ziffern würfelförmig sind.

# --hints--

`cubicPermutations(2)` sollte eine Zahl zurückgeben.

```js
assert(typeof cubicPermutations(2) === 'number');
```

`cubicPermutations(2)` sollte `125` zurückgeben.

```js
assert.strictEqual(cubicPermutations(2), 125);
```

`cubicPermutations(3)` sollte `41063625` zurückgeben.

```js
assert.strictEqual(cubicPermutations(3), 41063625);
```

`cubicPermutations(4)` sollte `1006012008` zurückgeben.

```js
assert.strictEqual(cubicPermutations(4), 1006012008);
```

`cubicPermutations(5)` sollte `127035954683` zurückgeben.

```js
assert.strictEqual(cubicPermutations(5), 127035954683);
```

# --seed--

## --seed-contents--

```js
function cubicPermutations(n) {

  return true;
}

cubicPermutations(2);
```

# --solutions--

```js
function cubicPermutations(n) {
  function getDigits(num) {
    const digits = [];
    while (num > 0) {
      digits.push(num % 10);
      num = Math.floor(num / 10);
    }
    return digits;
  }

  function getCube(num) {
    return num ** 3;
  }

  const digitsToCubeCounts = {};
  let curNum = 1;
  let digits;

  while (!digitsToCubeCounts[digits] || digitsToCubeCounts[digits].count < n) {
    const cube = getCube(curNum);
    digits = getDigits(cube).sort().join();
    if (!digitsToCubeCounts[digits]) {
      digitsToCubeCounts[digits] = {
        count: 1,
        smallestCube: cube
      };
    } else {
      digitsToCubeCounts[digits].count += 1;
    }

    curNum++;
  }
  return digitsToCubeCounts[digits].smallestCube;
}
```

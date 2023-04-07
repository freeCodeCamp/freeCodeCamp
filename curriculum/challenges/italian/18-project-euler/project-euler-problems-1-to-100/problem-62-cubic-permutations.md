---
id: 5900f3aa1000cf542c50febd
title: 'Problema 62: permutazioni cubiche'
challengeType: 1
forumTopicId: 302174
dashedName: problem-62-cubic-permutations
---

# --description--

Il cubo 41063625 ($345^3$), può essere permutato per produrre altri due cubi: 56623104 ($384^3$) e 66430125 ($405^3$). Infatti, 41063625 è il cubo più piccolo che ha esattamente tre permutazioni delle sue cifre che sono anch'esse dei cubi.

Trova il cubo più piccolo per il quale esattamente `n` permutazioni delle sue cifre sono dei cubi.

# --hints--

`cubicPermutations(2)` dovrebbe restituire un numero.

```js
assert(typeof cubicPermutations(2) === 'number');
```

`cubicPermutations(2)` dovrebbe restituire `125`.

```js
assert.strictEqual(cubicPermutations(2), 125);
```

`cubicPermutations(3)` dovrebbe restituire `41063625`.

```js
assert.strictEqual(cubicPermutations(3), 41063625);
```

`cubicPermutations(4)` dovrebbe restituire `1006012008`.

```js
assert.strictEqual(cubicPermutations(4), 1006012008);
```

`cubicPermutations(5)` dovrebbe restituire `127035954683`.

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

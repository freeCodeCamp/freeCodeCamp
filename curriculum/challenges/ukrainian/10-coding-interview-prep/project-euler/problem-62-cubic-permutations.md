---
id: 5900f3aa1000cf542c50febd
title: 'Завдання 62: Кубічні перестановки'
challengeType: 1
forumTopicId: 302174
dashedName: problem-62-cubic-permutations
---

# --description--

Цифри куба 41063625 ($345^3$) можна переставити, щоб утворити два інших куба: 56623104 ($384^3$) та 66430125 ($405^3$). Насправді, 41063625 це найменший куб, який має рівно три перестановки своїх цифр, які також є кубами.

Знайдіть найменший куб, для якого рівно `n` перестановок його цифр є кубами.

# --hints--

`cubicPermutations(2)` має повернути число.

```js
assert(typeof cubicPermutations(2) === 'number');
```

`cubicPermutations(2)` має повернути `125`.

```js
assert.strictEqual(cubicPermutations(2), 125);
```

`cubicPermutations(3)` має повернути `41063625`.

```js
assert.strictEqual(cubicPermutations(3), 41063625);
```

`cubicPermutations(4)` має повернути `1006012008`.

```js
assert.strictEqual(cubicPermutations(4), 1006012008);
```

`cubicPermutations(5)` має повернути `127035954683`.

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

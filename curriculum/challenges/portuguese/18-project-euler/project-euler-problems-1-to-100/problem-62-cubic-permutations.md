---
id: 5900f3aa1000cf542c50febd
title: 'Problema 62: Permutações cúbicas'
challengeType: 1
forumTopicId: 302174
dashedName: problem-62-cubic-permutations
---

# --description--

O número 41063625 é o resultado do cubo ($345^3$). Esse número pode ser permutado para produzir dois outros números que também são resultados de um cubo: 56623104 ($384^3$) e 66430125 ($405^3$). 41063625 é o menor número que tem exatamente três permutações dos seus algarismos e essas permutações também são o resultado de um cubo.

Encontre o menor cubo onde `n` permutações de seus algarismos são cubos.

# --hints--

`cubicPermutations(2)` deve retornar um número.

```js
assert(typeof cubicPermutations(2) === 'number');
```

`cubicPermutations(2)` deve retornar `125`.

```js
assert.strictEqual(cubicPermutations(2), 125);
```

`cubicPermutations(3)` deve retornar `41063625`.

```js
assert.strictEqual(cubicPermutations(3), 41063625);
```

`cubicPermutations(4)` deve retornar `1006012008`.

```js
assert.strictEqual(cubicPermutations(4), 1006012008);
```

`cubicPermutations(5)` deve retornar `127035954683`.

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

---
id: 5900f3aa1000cf542c50febd
title: '問題 62: 立方数の置換'
challengeType: 1
forumTopicId: 302174
dashedName: problem-62-cubic-permutations
---

# --description--

立方数 41063625 ($345^3$) は、数字を並び替えると 56623104 ($384^3$) と 66430125 ($405^3$) という 2 つの立方数になります。 実際、41063625 は、再び立方数を作るような数字の置き換え方をちょうど 3 通り持つ、最小の立方数です。

再び立方数を作るような数字の置き換え方をちょうど `n` 通り持つ、最小の立方数を求めなさい。

# --hints--

`cubicPermutations(2)` は数値を返す必要があります。

```js
assert(typeof cubicPermutations(2) === 'number');
```

`cubicPermutations(2)` は `125` を返す必要があります。

```js
assert.strictEqual(cubicPermutations(2), 125);
```

`cubicPermutations(3)` は `41063625` を返す必要があります。

```js
assert.strictEqual(cubicPermutations(3), 41063625);
```

`cubicPermutations(4)` は `1006012008` を返す必要があります。

```js
assert.strictEqual(cubicPermutations(4), 1006012008);
```

`cubicPermutations(5)` は `127035954683` を返す必要があります。

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

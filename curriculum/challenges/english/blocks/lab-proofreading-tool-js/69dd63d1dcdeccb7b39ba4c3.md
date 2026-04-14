---
id: 69dd63d1dcdeccb7b39ba4c3
title: Build a Proofreading Tool
challengeType: 26
dashedName: build-a-proofreading-tool
---

# --description--

In this lab, you will build a proofreading tool that scans binary signal sequences for patterns, symmetry, and gaps.

A binary signal sequence is an array of `0`s and `1`s, for example: `[1, 0, 1, 0, 1, 0]`.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should define a function named `findMotif` that takes a `sequence` array and a `motifLength` number as arguments.
2. `findMotif` should use nested loops with an early exit flag to find all positions where the motif (the first `motifLength` elements of `sequence`) repeats. It should return an array of start indices where the motif is found.
3. You should define a function named `detectMirror` that takes a `sequence` array as its argument.
4. `detectMirror` should compare mirrored indices and return an array of `[i, j]` pairs where `sequence[i] !== sequence[j]` (i.e. where the sequence is not symmetrical).
5. You should define a function named `findMissingFrames` that takes a `sequence` array and a `pattern` array as arguments.
6. `findMissingFrames` should scan the sequence in sliding windows of `pattern.length` and return an array of start indices where the window does not match the pattern.
7. You should define a function named `analyzeSequences` that takes an array of sequences as its argument.
8. `analyzeSequences` should call `findMotif` (with `motifLength` of `2`), `detectMirror`, and `findMissingFrames` (with `pattern` of `[1, 0]`) for each sequence, and return an array of objects each with `motifPositions`, `mirrorsBroken`, and `missingFrames` properties.

# --hints--

You should define a function named `findMotif`.

```js
assert.isFunction(findMotif);
```

`findMotif` should accept two parameters.

```js
assert.lengthOf(findMotif, 2);
```

`findMotif` should return an array.

```js
assert.isArray(findMotif([1, 0, 1, 0], 2));
```

`findMotif` should return all start indices where the motif repeats.

```js
assert.sameDeepOrderedMembers(findMotif([1, 0, 1, 0, 1, 0], 2), [0, 2, 4]);
```

`findMotif` should return `[0]` when the motif does not repeat beyond its starting position.

```js
assert.sameDeepOrderedMembers(findMotif([1, 1, 0, 0, 1, 1], 3), [0]);
```

You should define a function named `detectMirror`.

```js
assert.isFunction(detectMirror);
```

`detectMirror` should return an empty array for a perfectly symmetrical sequence.

```js
assert.sameDeepOrderedMembers(detectMirror([1, 0, 1, 0, 1]), []);
```

`detectMirror` should return the mismatched index pairs for a non-symmetrical sequence.

```js
assert.sameDeepOrderedMembers(detectMirror([1, 0, 1, 1, 0]), [[0, 4], [1, 3]]);
```

You should define a function named `findMissingFrames`.

```js
assert.isFunction(findMissingFrames);
```

`findMissingFrames` should return an empty array when all windows match the pattern.

```js
assert.sameDeepOrderedMembers(findMissingFrames([1, 0], [1, 0]), []);
```

`findMissingFrames` should return the start indices of windows that do not match the pattern.

```js
assert.sameDeepOrderedMembers(findMissingFrames([0, 1, 0, 1, 0], [1, 0]), [0, 2]);
```

You should define a function named `analyzeSequences`.

```js
assert.isFunction(analyzeSequences);
```

`analyzeSequences` should return an array of result objects each with `motifPositions`, `mirrorsBroken`, and `missingFrames` properties.

```js
const result = analyzeSequences([[1, 0, 1, 0, 1, 0]]);
assert.isArray(result);
assert.property(result[0], 'motifPositions');
assert.property(result[0], 'mirrorsBroken');
assert.property(result[0], 'missingFrames');
```

`analyzeSequences` should correctly aggregate results for each sequence.

```js
const result = analyzeSequences([[1, 0, 1, 0, 1, 0]]);
assert.sameDeepOrderedMembers(result[0].motifPositions, [0, 2, 4]);
assert.sameDeepOrderedMembers(result[0].mirrorsBroken, [[0, 5], [1, 4], [2, 3]]);
assert.sameDeepOrderedMembers(result[0].missingFrames, [1, 3]);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function findMotif(sequence, motifLength) {
  const motif = sequence.slice(0, motifLength);
  const positions = [];

  for (let i = 0; i <= sequence.length - motifLength; i++) {
    let match = true;
    for (let j = 0; j < motifLength; j++) {
      if (sequence[i + j] !== motif[j]) {
        match = false;
        break;
      }
    }
    if (match) positions.push(i);
  }

  return positions;
}

function detectMirror(sequence) {
  const mismatches = [];

  for (let i = 0; i < Math.floor(sequence.length / 2); i++) {
    const j = sequence.length - 1 - i;
    if (sequence[i] !== sequence[j]) {
      mismatches.push([i, j]);
    }
  }

  return mismatches;
}

function findMissingFrames(sequence, pattern) {
  const missing = [];

  for (let i = 0; i <= sequence.length - pattern.length; i++) {
    let match = true;
    for (let j = 0; j < pattern.length; j++) {
      if (sequence[i + j] !== pattern[j]) {
        match = false;
        break;
      }
    }
    if (!match) missing.push(i);
  }

  return missing;
}

function analyzeSequences(sequences) {
  return sequences.map(seq => ({
    motifPositions: findMotif(seq, 2),
    mirrorsBroken: detectMirror(seq),
    missingFrames: findMissingFrames(seq, [1, 0]),
  }));
}
```

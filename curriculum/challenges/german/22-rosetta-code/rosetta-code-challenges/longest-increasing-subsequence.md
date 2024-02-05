---
id: 5e6dd139859c290b6ab80292
title: Längste aufsteigende Teilfolge
challengeType: 1
forumTopicId: 385272
dashedName: longest-increasing-subsequence
---

# --description--

The longest increasing subsequence problem is to find a subsequence of a given sequence in which the subsequence's elements are in sorted order, lowest to highest, and in which the subsequence is as long as possible. An example:

Für das folgende Array:

```js
const array = [3, 10, 2, 1, 20];
```

Die längste aufsteigende Folge ist:

$\\{3, 10, 20\\}$

# --instructions--

Schreibe eine Funktion, die ein Array an Zahlen als Parameter nimmt und die längste aufsteigende Teilfolge zurückgibt.

Es ist garantiert, dass jedes Feld eine längste aufsteigende Teilfolge hat.

# --hints--

`findSequence` sollte eine Funktion sein.

```js
assert(typeof findSequence == 'function');
```

`findSequence([3, 10, 2, 1, 20])` sollte ein Array zurückgeben.

```js
assert(Array.isArray(findSequence([3, 10, 2, 1, 20])));
```

`findSequence([3, 10, 2, 1, 20])` sollte `[3, 10, 20]` zurückgeben.

```js
assert.deepEqual(findSequence([3, 10, 2, 1, 20]), [3, 10, 20]);
```

`findSequence([2, 7, 3, 5, 8])` sollte `[2, 3, 5, 8]` zurückgeben.

```js
assert.deepEqual(findSequence([2, 7, 3, 5, 8]), [2, 3, 5, 8]);
```

`findSequence([2, 6, 4, 5, 1])` sollte `[2, 4, 5]` zurückgeben.

```js
assert.deepEqual(findSequence([2, 6, 4, 5, 1]), [2, 4, 5]);
```

`findSequence([10, 22, 9, 33, 21, 50, 60, 80])` sollte `[10, 22, 33, 50, 60, 80]` zurückgeben.

```js
assert.deepEqual(findSequence([10, 22, 9, 33, 21, 50, 60, 80]), [
  10,
  22,
  33,
  50,
  60,
  80
]);
```

`findSequence([0, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15])` sollte `[0, 2, 6, 9, 11, 15` zurückgeben.

```js
assert.deepEqual(
  findSequence([0, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]),
  [0, 2, 6, 9, 11, 15]
);
```

# --seed--

## --seed-contents--

```js
function findSequence(input) {

}
```

# --solutions--

```js
function findSequence(input) {
    var len = input.length;
    var result = []
    for (var i = 0; i < len; i++) result.push(1)

    for (var i = 0; i < len; i++)
        for (var j = i - 1; j >= 0; j--)
            if (input[i] > input[j] && result[j] >= result[i])
                result[i] = result[j] + 1;

    var maxValue = Math.max.apply(null, result);
    var maxIndex = result.indexOf(Math.max.apply(Math, result));
    var output = [];
    output.push(input[maxIndex]);
    for (var i = maxIndex; i >= 0; i--) {
        if (maxValue == 0) break;
        if (input[maxIndex] > input[i] && result[i] == maxValue - 1) {
            output.push(input[i]);
            maxValue--;
        }
    }
    output.reverse();
    return output;
}
```

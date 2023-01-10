---
id: 5e6dd139859c290b6ab80292
title: Più lunga sottosequenza crescente
challengeType: 1
forumTopicId: 385272
dashedName: longest-increasing-subsequence
---

# --description--

Il problema di della più lunga sottosequenza crescente è quello di trovare una sottosequenza di una data sequenza in cui gli elementi successivi sono in ordine, dal più basso al più alto, e in cui la sottosequenza è la più lunga possibile. Un esempio:

Per il seguente array:

```js
const array = [3, 10, 2, 1, 20];
```

La sequenza crescente più lunga è:

$\\{3, 10, 20\\}$

# --instructions--

Scrivere una funzione che prende un array di numeri come parametro e restituisce la più lunga sottosequenza crescente.

È garantito che ogni array avrà una sottosequenza crescente più lunga.

# --hints--

`findSequence` dovrebbe essere una funzione.

```js
assert(typeof findSequence == 'function');
```

`findSequence([3, 10, 2, 1, 20])` dovrebbe restituire un array.

```js
assert(Array.isArray(findSequence([3, 10, 2, 1, 20])));
```

`findSequence([3, 10, 2, 1, 20])` dovrebbe restituire `[3, 10, 20]`.

```js
assert.deepEqual(findSequence([3, 10, 2, 1, 20]), [3, 10, 20]);
```

`findSequence([2, 7, 3, 5, 8])` dovrebbe restituire `[2, 3, 5, 8]`.

```js
assert.deepEqual(findSequence([2, 7, 3, 5, 8]), [2, 3, 5, 8]);
```

`findSequence([2, 6, 4, 5, 1])` dovrebbe restituire `[2, 4, 5]`.

```js
assert.deepEqual(findSequence([2, 6, 4, 5, 1]), [2, 4, 5]);
```

`findSequence([10, 22, 9, 33, 21, 50, 60, 80])` dovrebbe restituire `[10, 22, 33, 50, 60, 80]`.

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

`findSequence([0, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15])` dovrebbe restituire `[0, 2, 6, 9, 11, 15`.

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

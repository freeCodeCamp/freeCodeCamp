---
id: 5e6dd139859c290b6ab80292
title: Найдовша зростаюча підпослідовність
challengeType: 1
forumTopicId: 385272
dashedName: longest-increasing-subsequence
---

# --description--

Умова задачі про найдовшу зростаючу підпослідовність: потрібно знайти підпослідовність даної послідовності, де елементи підпослідовності розташовані в порядку зростання, а сама підпослідовність є якомога довшою. Наприклад:

Для наступного масиву:

```js
const array = [3, 10, 2, 1, 20];
```

Найдовшою зростаючою послідовністю є:

$\\{3, 10, 20\\}$

# --instructions--

Напишіть функцію, яка приймає масив чисел як параметр і повертає найдовшу зростаючу підпослідовність.

Гарантовано, що кожен масив матиме найдовшу зростаючу підпослідовність.

# --hints--

`findSequence` має бути функцією.

```js
assert(typeof findSequence == 'function');
```

`findSequence([3, 10, 2, 1, 20])` має повернути масив.

```js
assert(Array.isArray(findSequence([3, 10, 2, 1, 20])));
```

`findSequence([3, 10, 2, 1, 20])` має повернути `[3, 10, 20]`.

```js
assert.deepEqual(findSequence([3, 10, 2, 1, 20]), [3, 10, 20]);
```

`findSequence([2, 7, 3, 5, 8])` має повернути `[2, 3, 5, 8]`.

```js
assert.deepEqual(findSequence([2, 7, 3, 5, 8]), [2, 3, 5, 8]);
```

`findSequence([2, 6, 4, 5, 1])` має повернути `[2, 4, 5]`.

```js
assert.deepEqual(findSequence([2, 6, 4, 5, 1]), [2, 4, 5]);
```

`findSequence([10, 22, 9, 33, 21, 50, 60, 80])` має повернути `[10, 22, 33, 50, 60, 80]`.

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

`findSequence([0, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15])` має повернути `[0, 2, 6, 9, 11, 15`.

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

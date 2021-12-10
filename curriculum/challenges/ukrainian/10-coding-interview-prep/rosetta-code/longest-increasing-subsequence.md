---
id: 5e6dd139859c290b6ab80292
title: Задача про найдовшу зростаючу підпослідовність
challengeType: 5
forumTopicId: 385272
dashedName: longest-increasing-subsequence
---

# --description--

Задача про найдовшу зростаючу підпослідовність полягає у пошуку підпослідовності даної послідовності, в якій елементи підпослідовності розташовані в порядку зростання, тобто, кожен наступний елемент підпослідовності більше попереднього, також, підпослідовність є якомога довшою. Наприклад:

Для наступного масиву:

$\\{3, 10, 2, 1, 20\\}$

Найдовша зростаюча підпослідовність:

$\\{3, 10, 20\\}$

Для отримання додаткової інформації про цю задачу, будь ласка, перейдіть за посиланням [Wikipedia](https://en.wikipedia.org/wiki/Longest increasing subsequence).

# --instructions--

Напишіть функцію, яка приймає масив чисел як параметр і виводить найдовшу зростаючу послідовність.

Гарантовано, що кожен масив матиме найдовшу зростаючу послідовність.

# --hints--

`findSequence` має бути функцією.

```js
assert(typeof findSequence == 'function');
```

`findSequence([3, 10, 2, 1, 20])` повинен видати масив.

```js
assert(Array.isArray(findSequence([3, 10, 2, 1, 20])));
```

`findSequence([3, 10, 2, 1, 20])` повинен видати `[3, 10, 20]`.

```js
assert.deepEqual(findSequence([3, 10, 2, 1, 20]), [3, 10, 20]);
```

`findSequence([2, 7, 3, 5, 8])` повинен видати `[2, 3, 5, 8]`.

```js
assert.deepEqual(findSequence([2, 7, 3, 5, 8]), [2, 3, 5, 8]);
```

`findSequence([2, 6, 4, 5, 1])` повинен видати `[2, 4, 5]`.

```js
assert.deepEqual(findSequence([2, 6, 4, 5, 1]), [2, 4, 5]);
```

`findSequence([10, 22, 9, 33, 21, 50, 60, 80])` повинен видати `[10, 22, 33, 50, 60, 80]`.

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

`findSequence([0, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15])` повинен видати `[0, 2, 6, 9, 11, 15`.

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

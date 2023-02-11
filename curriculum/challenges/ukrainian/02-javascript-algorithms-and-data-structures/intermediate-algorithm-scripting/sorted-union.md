---
id: a105e963526e7de52b219be9
title: Сортування масиву
challengeType: 1
forumTopicId: 16077
dashedName: sorted-union
---

# --description--

Напишіть функцію, яка приймає два або більше масивів та повертає новий масив унікальних значень у порядку наданих початкових масивів.

Іншими словами, усі значення, що є в масиві, повинні бути в початковому порядку, але в кінцевому масиві не повинно бути повторень.

Унікальні числа повинні бути відсортовані за початковим порядком, але кінцевий масив не повинен бути відсортованим за числовим порядком.

Ознайомтеся з тестами тверджень для прикладу.

# --hints--

`uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])` має повертати `[1, 3, 2, 5, 4]`.

```js
assert.deepEqual(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
```

`uniteUnique([1, 2, 3], [5, 2, 1])` має повертати `[1, 2, 3, 5]`.

```js
assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5]);
```

`uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])` має повертати `[1, 2, 3, 5, 4, 6, 7, 8]`.

```js
assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), [
  1,
  2,
  3,
  5,
  4,
  6,
  7,
  8
]);
```

`uniteUnique([1, 3, 2], [5, 4], [5, 6])` має повертати `[1, 3, 2, 5, 4, 6]`.

```js
assert.deepEqual(uniteUnique([1, 3, 2], [5, 4], [5, 6]), [1, 3, 2, 5, 4, 6]);
```

`uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])` має повертати `[1, 3, 2, 5, 4]`.

```js
assert.deepEqual(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
```

# --seed--

## --seed-contents--

```js
function uniteUnique(arr) {
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```

# --solutions--

```js
function uniteUnique(arr) {
  return [].slice.call(arguments).reduce(function(a, b) {
    return [].concat(
      a, 
      b.filter(function(e, currentIndex) {
        return b.indexOf(e) === currentIndex && a.indexOf(e) === -1;
      }));
  }, []);
}
```

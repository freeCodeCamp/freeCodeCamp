---
id: a6e40f1041b06c996f7b2406
title: Раз знайшов, значить моє
challengeType: 1
forumTopicId: 16016
dashedName: finders-keepers
---

# --description--

Створіть функцію, яка переглядає масив `arr` та повертає перший елемент у ньому, який проходить тест на «істинність». Це означає, що даний елемент `x` пройшов тест на «істинність», якщо `func(x)` є `true`. Якщо жодний елемент не проходить тест, поверніть `undefined`.

# --hints--

`findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })` має повертати `8`.

```js
assert.strictEqual(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  }),
  8
);
```

`findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })` має повертати `undefined`.

```js
assert.strictEqual(
  findElement([1, 3, 5, 9], function (num) {
    return num % 2 === 0;
  }),
  undefined
);
```

# --seed--

## --seed-contents--

```js
function findElement(arr, func) {
  let num = 0;
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```

# --solutions--

```js
function findElement(arr, func) {
  return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```

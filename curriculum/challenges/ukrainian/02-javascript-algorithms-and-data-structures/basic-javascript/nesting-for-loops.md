---
id: 56533eb9ac21ba0edf2244e1
title: Вкладення для циклів
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6GHM'
forumTopicId: 18248
dashedName: nesting-for-loops
---

# --description--

Якщо ви маєте багатовимірний масив, ви можете використати ту ж логіку, що і в попередній точці проходження до циклу через масив і будь-які підмасиви. Ось приклад:

```js
const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
```

Це виводить кожен піделемент у `arr` по одному. Зверніть увагу, що для внутрішнього циклу ми перевіряємо `.length` цього `arr[i]`, оскільки `arr[i]` і є масивом.

# --instructions--

Змініть функцію `multiplyAll` для того, щоб повернути добуток усіх чисел у підмасивах `arr`.

# --hints--

`multiplyAll([[1], [2], [3]])` повинен повернути `6`

```js
assert(multiplyAll([[1], [2], [3]]) === 6);
```

`multiplyAll([[1, 2], [3, 4], [5, 6, 7]])` повинен повернути `5040`

```js
assert(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
  ]) === 5040
);
```

`multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]])` повинен повернути `54`

```js
assert(
  multiplyAll([
    [5, 1],
    [0.2, 4, 0.5],
    [3, 9]
  ]) === 54
);
```

# --seed--

## --seed-contents--

```js
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line

  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
```

# --solutions--

```js
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
```

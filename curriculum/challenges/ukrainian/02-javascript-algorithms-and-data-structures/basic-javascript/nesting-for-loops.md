---
id: 56533eb9ac21ba0edf2244e1
title: Вкладення циклів for
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6GHM'
forumTopicId: 18248
dashedName: nesting-for-loops
---

# --description--

Ви можете використати ту ж логіку для перебору як масиву, так і вкладених масивів, якщо перед вами багатовимірний масив. Ось приклад:

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

Це виводить кожен вкладений елемент в `arr` по одному. Зверніть увагу, що для внутрішнього циклу ми перевіряємо `.length` цього `arr[i]`, оскільки `arr[i]` і є масивом.

# --instructions--

Змініть функцію `multiplyAll` так, щоб повертався добуток усіх чисел у підмасивах `arr`.

# --hints--

`multiplyAll([[1], [2], [3]])` має повертати `6`

```js
assert(multiplyAll([[1], [2], [3]]) === 6);
```

`multiplyAll([[1, 2], [3, 4], [5, 6, 7]])` має повертати `5040`

```js
assert(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
  ]) === 5040
);
```

`multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]])` має повертати `54`

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

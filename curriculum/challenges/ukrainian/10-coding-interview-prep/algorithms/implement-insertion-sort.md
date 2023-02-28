---
id: 587d8259367417b2b2512c86
title: Реалізація сортування вставками
challengeType: 1
forumTopicId: 301613
dashedName: implement-insertion-sort
---

# --description--

Наступний метод сортування, який ми розглянемо - це сортування вставками. Це метод створення відсортованого масиву на початку списку. Так, відсортований масив починається з першого елементу. Тоді йде перевірка наступного елемента і зміна його положення у відсортованому масиві, доки він не отримає відсортовану позицію. Після цього, список продовжує оновлюватися, а нові елементи стають на відсортовану позицію, аж поки сортування не завершиться. Цей алгоритм має квадратичну складність часу як у звичайних, так і у найгірших випадках.

**Instructions:** Напишіть функцію `insertionSort`, де масив цілих чисел - це вхідні дані, і масив цих цілих чисел сортується від найменшого до найбільшого.

# --hints--

`insertionSort` має бути функцією.

```js
assert(typeof insertionSort == 'function');
```

`insertionSort` має повернути впорядкований масив (від найменшого до найбільшого).

```js
assert(
  isSorted(
    insertionSort([
      1,
      4,
      2,
      8,
      345,
      123,
      43,
      32,
      5643,
      63,
      123,
      43,
      2,
      55,
      1,
      234,
      92
    ])
  )
);
```

`insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` має повернути масив без змін, окрім послідовності.

```js
assert.sameMembers(
  insertionSort([
    1,
    4,
    2,
    8,
    345,
    123,
    43,
    32,
    5643,
    63,
    123,
    43,
    2,
    55,
    1,
    234,
    92
  ]),
  [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
);
```

`insertionSort([5, 4, 33, 2, 8])` має повернути `[2, 4, 5, 8, 33]`.

```js
assert.deepEqual(insertionSort([5, 4, 33, 2, 8]), [2, 4, 5, 8, 33])
```

`insertionSort` не слід використовувати вбудований `.sort()` метод.

```js
assert(isBuiltInSortUsed());
```

# --seed--

## --after-user-code--

```js
function isSorted(a){
  for(let i = 0; i < a.length - 1; i++)
    if(a[i] > a[i + 1])
      return false;
  return true;
}

function isBuiltInSortUsed(){
  let sortUsed = false;
  Array.prototype.sort = () => sortUsed = true;
  insertionSort([0, 1]);
  return !sortUsed;
}
```

## --seed-contents--

```js
function insertionSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}
```

# --solutions--

```js
function insertionSort (array) {
  for (let currentIndex = 0; currentIndex < array.length; currentIndex++) {
    let current = array[currentIndex];
    let j = currentIndex - 1;
    while (j > -1 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}
```

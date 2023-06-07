---
id: 587d825a367417b2b2512c89
title: Реалізуйте швидке сортування
challengeType: 1
forumTopicId: 301615
dashedName: implement-quick-sort
---

# --description--

Зараз ми перейдемо до проміжного алгоритму сортування: швидкого сортування. Швидке сортування — це ефективний рекурсивний підхід до сортування масиву «Розділяй та володарюй». У цьому методі вибирається опорне значення у вихідному масиві. Потім масив розділяється на два підмасиви зі значеннями, меншими і більшими за опорне значення. Потім ми об’єднуємо результат рекурсивного виклику алгоритму швидкого сортування в обидвох підмасивах. Це продовжується поки не буде досягнутий базовий випадок порожнього або єдиного елементу масиву, який ми повертаємо. Розмотування рекурсивних викликів повертає нам відсортований масив.

Швидке сортування є дуже ефективним методом, який в середньому забезпечує продуктивність *O(nlog(n))*. Також його відносно легко реалізувати. Ці властивості роблять його популярним і корисним методом сортування.

**Інструкція:** напишіть функцію `quickSort`, яка приймає масив цілих чисел як ввід та повертає масив цих цілих чисел у відсортованому порядку (від найменшого до найбільшого). Попри те, що вибір опорного значення є важливим, для нашої мети підійде будь-яке значення. Щоб було простіше, то можна використати перший або останній елемент.

# --hints--

`quickSort` має бути функцією.

```js
assert(typeof quickSort == 'function');
```

`quickSort` має повернути впорядкований масив (від найменшого до найбільшого).

```js
assert(
  isSorted(
    quickSort([
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

`quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` має повернути масив без змін, окрім послідовності.

```js
assert.sameMembers(
  quickSort([
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

`quickSort` не має використовувати вбудований метод `.sort()`.

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
  quickSort([0, 1]);
  return !sortUsed;
}
```

## --seed-contents--

```js
function quickSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}
```

# --solutions--

```js
function quickSort(array) {
  if (array.length === 0) {
    return [];
  } else {
    const pivotValue = array[0];

    // Sort elements into three piles
    let lesser = [];
    let equal = [];
    let greater = [];
    for (let e of array) {
      if (e < pivotValue) {
        lesser.push(e);
      } else if (e > pivotValue) {
        greater.push(e);
      } else {
        equal.push(e);
      }
    }

    return [...quickSort(lesser), ...equal, ...quickSort(greater)];
  }
}
```

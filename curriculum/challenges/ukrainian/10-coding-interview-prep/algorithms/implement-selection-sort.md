---
id: 587d8259367417b2b2512c85
title: Реалізація сортування вибором
challengeType: 1
forumTopicId: 301616
dashedName: implement-selection-sort
---

# --description--

Тут ми виконаємо сортування вибором. Сортування вибором здійснюється шляхом вибору мінімального значення зі списку та його обміну з першим значенням у списку. Потім початок йде з другої позиції, обирається найменше значення з решти списку та здійснюється обмін цього значення з другим елементом. І такий процес обміну елементів продовжується, доки не дійдемо до кінця списку. Тепер список відсортовано. Сортування вибором завжди має квадратичну складність.

**Instructions**: Напишіть функцію `selectionSort`, де масив цілих чисел - це вхідні дані, і масив цих цілих чисел сортується від найменшого до найбільшого.

# --hints--

`selectionSort` має бути функцією.

```js
assert(typeof selectionSort == 'function');
```

`selectionSort` має повернути впорядкований масив (від найменшого до найбільшого).

```js
assert(
  isSorted(
    selectionSort([
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

`selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` має повернути масив без змін, окрім послідовності.

```js
assert.sameMembers(
  selectionSort([
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

`selectionSort` не повинен використовувати вбудований `.sort()` метод.

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
  selectionSort([0, 1]);
  return !sortUsed;
}
```

## --seed-contents--

```js
function selectionSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}
```

# --solutions--

```js
function selectionSort(array) {
  for (let i = 0; i < array.length-1; i++) {
    let minimumIndex = i;
    for (let j = i+1; j < array.length; j++){
      if (array[j] < array[minimumIndex]) {
        minimumIndex = j;
      }
    }
    let value = array[minimumIndex];
    array[minimumIndex] = array[i];
    array[i] = value;
  }
    return array;
}
```

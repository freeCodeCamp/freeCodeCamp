---
id: 8d5123c8c441eddfaeb5bdef
title: Реалізація бульбашкового сортування
challengeType: 1
forumTopicId: 301612
dashedName: implement-bubble-sort
---

# --description--

Це перше із кількох завдань що стосуються алгоритмів сортування. Враховуючи масив несортованих елементів, ми хочемо повернути впорядкований масив. Ми побачимо кілька різних методів для цього і вивчимо певні компроміси між цими різними підходами. Хоча більшість сучасних мов мають вбудовані методи сортування для таких операцій, все ж важливо зрозуміти деякі загальні основні підходи та дізнатися, як їх можна здійснити.

Тут ми розглянемо бульбашкове сортування. Метод бульбашкового сортування розпочинається на початку несортованого масиву і збільшує невідсортовані значення до кінця, повторюючи через масив поки він не буде повністю відсортованим. Це робиться шляхом порівняння суміжних елементів і їх заміни, якщо вони вийшли з ладу. Метод продовжує цикл по масиву, поки не відбудеться обмін, в якому масив буде відсортовано.

Цей метод вимагає кількох ітерацій через масив, а для найгірших випадків має квадратичну складність часу. В той час як проста складність, як правило, непрактична у більшості ситуацій.

**Instructions:** Напишіть функцію `bubbleSort` яка приймає масив цілих чисел як введення і повертає масив цих цілих чисел у відсортованому порядку від найменшого до найбільшого.

# --hints--

`bubbleSort` має бути функцією.

```js
assert(typeof bubbleSort == 'function');
```

`bubbleSort` має повернути впорядкований масив (від найменшого до найбільшого).

```js
assert(
  isSorted(
    bubbleSort([
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

`bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` має повернути масив без змін, окрім послідовності.

```js
assert.sameMembers(
  bubbleSort([
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

`bubbleSort` не повинен використовувати вбудований `.sort()` метод.

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
  bubbleSort([0, 1]);
  return !sortUsed;
}
```

## --seed-contents--

```js
function bubbleSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}
```

# --solutions--

```js
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let swapped = false;
    for (let j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        let temp = array[j-1];
        array[j-1] =  array[j];
        array[j] = temp;
        swapped = true;
      }
    }
    if (swapped === false) {
      break;
    }
  }
  return array;
}
```

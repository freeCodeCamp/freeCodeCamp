---
id: 61abc7ebf3029b56226de5b6
title: Реалізуйте двійковий пошук
challengeType: 1
forumTopicId: 487618
dashedName: implement-binary-search
---

# --description--

Двійковий пошук — це алгоритм для пошуку елемента у відсортованому масиві з ефективністю **O(log(n))**. Він працює за допомогою таких кроків:

1. Знайдіть середнє значення (`value`) відсортованого масиву. Якщо `value == target`, поверніть `true` (значення знайдено та пошук завершено).
1. Якщо `value < target`, шукайте праву половину масиву під час наступного порівняння.
1. Якщо `value > target`, шукайте ліву половину масиву під час наступного порівняння.
1. Якщо після пошуку в усьому масиві значення відсутнє, поверніть `false` (в масиві було проведено пошук, а значення в масиві немає).

Як бачите, ви послідовно ділите масив навпіл, що дає вам ефективність log(n). У цьому завданні ми хочемо, щоб ви показали свою роботу — як ви досягли цільового значення... шлях, який ви пройшли!

# --instructions--

Напишіть функцію `binarySearch`, яка реалізує алгоритм бінарного пошуку в масиві, повертаючи шлях, який ви обрали (порівняння кожного середнього значення), щоб знайти ціль в масиві.

Функція приймає відсортований масив цілих чисел та цільове значення як ввід. Вона повертає масив, що містить (за порядком) середнє значення, яке ви знайшли при кожному діленні вихідного масиву навпіл, доки не знайдете цільове значення. Цільове значення повинне бути останнім елементом повернутого масиву. Якщо значення не знайдено, поверніть рядок `Value Not Found`.

Наприклад, `binarySearch([1,2,3,4,5,6,7], 5)` поверне `[4,6,5]`.

При діленні навпіл у цьому завданні ОБОВ’ЯЗКОВО використайте `Math.floor()`: `Math.floor(x/2)`. Це дасть послідовний, перевірений шлях.

**Примітка:** у тестах використовуватиметься цей масив:

```js
const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];
```

# --hints--

`binarySearch` має бути функцією.

```js
assert(typeof binarySearch == 'function');
```

`binarySearch(testArray, 0)` має повернути `[13, 5, 2, 0]`.

```js
assert.deepEqual(binarySearch(_testArray, 0), [13, 5, 2, 0]);
```

`binarySearch(testArray, 1)` має повернути `[13, 5, 2, 0, 1]`.

```js
assert.deepEqual(binarySearch(_testArray, 1), [13, 5, 2, 0, 1]);
```


`binarySearch(testArray, 2)` має повернути `[13, 5, 2]`.

```js
assert.deepEqual(binarySearch(_testArray, 2), [13, 5, 2]);
```

`binarySearch(testArray, 6)` має повернути рядок `Value Not Found`.

```js
assert.strictEqual(binarySearch(_testArray, 6), 'Value Not Found');
```

`binarySearch(testArray, 11)` має повернути `[13, 5, 10, 11]`.

```js
assert.deepEqual(binarySearch(_testArray, 11), [13, 5, 10, 11])
```

`binarySearch(testArray, 13)` має повернути `[13]`.

```js
assert.deepEqual(binarySearch(_testArray, 13), [13]);
```

`binarySearch(testArray, 70)` має повернути `[13, 19, 22, 49, 70]`.

```js
assert.deepEqual(binarySearch(_testArray, 70), [13, 19, 22, 49, 70]);
```

# --seed--

## --after-user-code--

```js
const _testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];
```

## --seed-contents--

```js
function binarySearch(searchList, value) {
  let arrayPath = [];
  return arrayPath;
}
```



# --solutions--

```js
let binarySearch = (searchList, value) => {
  let arrayPath = [];

  // set initial L - M - R
  let left = 0;
  let right = searchList.length - 1;
  let middle = Math.floor(right / 2);

  // if first comparison finds value
  if (searchList[middle] == value) {
    arrayPath.push(searchList[middle]);
    return arrayPath;
  }

  while (searchList[middle] !== value) {
    // add to output array
    arrayPath.push(searchList[middle]);

    // not found
    if (right < left) {
      return 'Value Not Found';
    }
    // value is in left or right portion of array
    // update L - M - R
    if (searchList[middle] > value) {
      right = middle - 1;
      middle = left + Math.floor((right - left) / 2);
    } else {
      left = middle + 1;
      middle = left + Math.floor((right - left) / 2);
    }

    // if found update output array and exit
    if (searchList[middle] == value) {
      arrayPath.push(searchList[middle]);

      break;
    }
  }
  return arrayPath;
};
```

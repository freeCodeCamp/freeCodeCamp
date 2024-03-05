---
id: 5a23c84252665b21eecc7ec4
title: JortSort
challengeType: 1
forumTopicId: 302293
dashedName: jortsort
---

# --description--

jortSort — це набір інструментів для сортування, за допомогою яких користувач виконує роботу, і гарантує ефективність, оскільки більше не доведеться сортувати. Вперше цей набір був представлений Дженн Шиффер на престижній конференції JSConf2014.

jortSort має бути функцією, яка приймає масив порівнюваних об’єктів як аргумент. Потім вона сортує масив у порядку зростання та порівнює відсортований масив з початковим масивом. Якщо масиви збігаються (тобто початковий масив вже був відсортований), функція повертає true. Якщо масиви не збігаються (тобто вихідний масив не був відсортований), функція повертає false.

# --hints--

`jortsort` має бути функцією.

```js
assert(typeof jortsort == 'function');
```

`jortsort([1,2,3,4,5])` має повернути булеве значення.

```js
assert(typeof jortsort([1, 2, 3, 4, 5]) == 'boolean');
```

`jortsort([1,2,3,4,5])` має повернути `true`.

```js
assert.equal(jortsort([1, 2, 3, 4, 5]), true);
```

`jortsort([1,2,13,4,5])` має повернути `false`.

```js
assert.equal(jortsort([1, 2, 13, 4, 5]), false);
```

`jortsort([12,4,51,2,4])` має повернути `false`.

```js
assert.equal(jortsort([12, 4, 51, 2, 4]), false);
```

`jortsort([1,2])` має повернути `true`.

```js
assert.equal(jortsort([1, 2]), true);
```

`jortsort([5,4,3,2,1])` має повернути `false`.

```js
assert.equal(jortsort([5, 4, 3, 2, 1]), false);
```

`jortsort([1,1,1,1,1])` має повернути `true`.

```js
assert.equal(jortsort([1, 1, 1, 1, 1]), true);
```

# --seed--

## --seed-contents--

```js
function jortsort(array) {

}
```

# --solutions--

```js
function jortsort(array) {
  // sort the array
  var originalArray = array.slice(0);
  array.sort( function(a,b){return a - b} );

  // compare to see if it was originally sorted
  for (var i = 0; i < originalArray.length; ++i) {
    if (originalArray[i] !== array[i]) return false;
  }

  return true;
};
```

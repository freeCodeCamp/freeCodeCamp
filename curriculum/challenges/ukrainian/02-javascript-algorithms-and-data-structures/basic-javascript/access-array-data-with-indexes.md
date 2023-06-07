---
id: 56bbb991ad1ed5201cd392ca
title: Доступ до даних масиву за допомогою індексів
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQbTz'
forumTopicId: 16158
dashedName: access-array-data-with-indexes
---

# --description--

Ми можемо отримати доступ до даних всередині масивів за допомогою <dfn>індексів</dfn>.

Індекс масивів, так як і в рядках, написаний у дужковій нотації. Однак вони вказують не символ, а певний запис у масиві. Як і рядки, масиви використовують індексування <dfn>на основі нуля</dfn>, тому перший елемент у масиві має індекс `0`.

<br>

**Наприклад**

```js
const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
```

`console.log(array[0])` друкує `50`, і `data` має значення `60`.

# --instructions--

Створіть змінну під назвою `myData` і встановіть її рівною першому значенню `myArray`, використовуючи дужкову нотацію.

# --hints--

Змінна `myData` повинна дорівнювати першому значенню `myArray`.

```js
assert(
  (function () {
    if (
      typeof myArray !== 'undefined' &&
      typeof myData !== 'undefined' &&
      myArray[0] === myData
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

До даних у змінній `myArray` можна отримати доступ за допомогою дужкової нотації.

```js
assert(
  (function () {
    if (code.match(/\s*=\s*myArray\[0\]/g)) {
      return true;
    } else {
      return false;
    }
  })()
);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined" && typeof myData !== "undefined"){(function(y,z){return 'myArray = ' + JSON.stringify(y) + ', myData = ' + JSON.stringify(z);})(myArray, myData);}
```

## --seed-contents--

```js
const myArray = [50, 60, 70];


```

# --solutions--

```js
const myArray = [50, 60, 70];
const myData = myArray[0];
```

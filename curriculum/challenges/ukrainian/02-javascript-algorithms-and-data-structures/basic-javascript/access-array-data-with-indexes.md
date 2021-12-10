---
id: 56bbb991ad1ed5201cd392ca
title: Доступ до елементу в масиві за допомогою індексу
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQbTz'
forumTopicId: 16158
dashedName: access-array-data-with-indexes
---

# --description--

Ми можемо отримати доступ до даних всередині масивів за допомогою <dfn>індексів</dfn>.

Індекс масивів, так як і в рядках, вказується у квадратних дужках ([]). Однак індекс в масивах використовується для отримання доступу до певного елемента в масиві. Як і рядки, масиви використовують індексування <dfn>на основі нуля</dfn>, тому перший елемент у масиві має індекс `0`.

<br>

**Наприклад**

```js
const array = [50, 60, 70];
array[0];
const data = array[1];
```

`array[0]` становить `50`, і`data` має значення `60`.

**Примітка:** ніколи не вставляйте пробіл між ім'ям масиву і квадратними дужками, наприклад `array [0]`. Хоча JavaScript прочитає це правильно, але це може створити труднощі для інших програмістів, які читатимуть ваш код.

# --instructions--

Створіть змінну з назвою `myData` і встановіть її значення рівне до першому елементу `myArray`, використовуючи квадратні дужки.

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

До даних в змінній `myArray` слід отримати доступ за допомогою індексу у квадратних дужках.

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

---
id: 56592a60ddddeae28f7aa8e1
title: Доступ до багатовимірних масивів за допомогою індексів
challengeType: 1
videoUrl: 'https://scrimba.com/c/ckND4Cq'
forumTopicId: 16159
dashedName: access-multi-dimensional-arrays-with-indexes
---

# --description--

<dfn>Багатовимірний масив</dfn> можна описати як *масив масивів*. Коли ви використовуєте дужки для доступу до масиву, перша пара дужок стосується записів зовнішнього (перший рівень) масиву, і кожна додаткова пара дужок стосується наступного рівня записів.

**Приклад**

```js
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];
```

У цьому прикладі `subarray` має значення `[[10, 11, 12], 13, 14]`, `nestedSubarray` має значення `[10, 11, 12]`, а `element` має значення `11`.

**Примітка:** ніколи не вставляйте пробіл між назвою масиву і квадратними дужками. Наприклад, `array [0][0]` або `array [0] [0]`. Хоча JavaScript і може це обробити, таке написання може ускладнити читання коду для інших програмістів.

# --instructions--

Використовуючи дужкову нотацію, виберіть елемент із `myArray` таким чином, щоб значення `myData` дорівнювало `8`.

# --hints--

`myData` має дорівнювати `8`.

```js
assert(myData === 8);
```

Ви повинні використати дужкову нотацію, щоб зчитати правильне значення з `myArray`.

```js
assert(/myData=myArray\[2\]\[1\]/.test(__helpers.removeWhiteSpace(code)));
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return "myData: " + myData + " myArray: " + JSON.stringify(myArray);})();}
```

## --seed-contents--

```js
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[0][0];
```

# --solutions--

```js
const myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
const myData = myArray[2][1];
```

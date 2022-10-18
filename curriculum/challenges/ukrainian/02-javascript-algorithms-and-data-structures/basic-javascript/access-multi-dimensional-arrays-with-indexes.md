---
id: 56592a60ddddeae28f7aa8e1
title: Доступ до багатовимірних масивів за допомогою індексів
challengeType: 1
videoUrl: 'https://scrimba.com/c/ckND4Cq'
forumTopicId: 16159
dashedName: access-multi-dimensional-arrays-with-indexes
---

# --description--

<dfn>Багатовимірні масиви</dfn> можна також описати як *масиви в масивах*. Коли ви використовуєте дужки для доступу до масиву, перша пара дужок відноситься до матеріалів зовнішнього (перший рівень) масиву, і кожна додаткова пара дужок стосується наступного рівня матеріалів.

**Наприклад**

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

In this example, `subarray` has the value `[[10, 11, 12], 13, 14]`, `nestedSubarray` has the value `[10, 11, 12]`,   and `element` has the value `11` .

**Примітка:** ніколи не вставляйте пробіл між ім'ям масиву і квадратними дужками, наприклад, так `array [0][0]` і навіть так `array [0] [0]` не можна робити. Незважаючи на те, що для JavaScript це є дрібницею, ця звичка може ускладнити читання коду іншими програмістами.

# --instructions--

За допомогою квадратних дужок виберіть елемент із `myArray` таким чином, щоб `myData` дорівнював `8`.

# --hints--

`myData` має дорівнювати `8`.

```js
assert(myData === 8);
```

Ви маєте використовувати квадратні дужки, щоб зчитати правильне значення з `myArray`.

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

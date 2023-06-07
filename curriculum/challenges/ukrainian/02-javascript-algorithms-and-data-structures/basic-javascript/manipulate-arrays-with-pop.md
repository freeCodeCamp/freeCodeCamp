---
id: 56bbb991ad1ed5201cd392cc
title: Маніпулювання масивами за допомогою методу pop
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRbVZAB'
forumTopicId: 18236
dashedName: manipulate-arrays-with-pop
---

# --description--

Змінити дані у масиві також можна за допомогою функції `.pop()`.

`.pop()` використовують для виведення останнього значення масиву. Ми можемо зберігати виведене значення, присвоюючи його змінній. Іншими словами, `.pop()` видаляє останній елемент з масиву і повертає цей елемент.

З масиву можна вивести будь-який запис: числа, рядки, навіть вкладені масиви.

```js
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
```

Перший `console.log` показуватиме значення `6`, а другий показуватиме `[1, 4]`.

# --instructions--

Використайте функцію `.pop()`, щоб вилучити останній елемент з `myArray` та призначити виведене значення до нової змінної `removedFromMyArray`.

# --hints--

`myArray` має містити лише `[["John", 23]]`.

```js
assert(
  (function (d) {
    if (d[0][0] == 'John' && d[0][1] === 23 && d[1] == undefined) {
      return true;
    } else {
      return false;
    }
  })(myArray)
);
```

Ви повинні використати `pop()` на `myArray`.

```js
assert(/removedFromMyArray\s*=\s*myArray\s*.\s*pop\s*(\s*)/.test(code));
```

`removedFromMyArray` має містити лише `["cat", 2]`.

```js
assert(
  (function (d) {
    if (d[0] == 'cat' && d[1] === 2 && d[2] == undefined) {
      return true;
    } else {
      return false;
    }
  })(removedFromMyArray)
);
```

# --seed--

## --after-user-code--

```js
if (typeof removedFromMyArray !== 'undefined') (function(y, z){return 'myArray = ' + JSON.stringify(y) + ' & removedFromMyArray = ' + JSON.stringify(z);})(myArray, removedFromMyArray);
```

## --seed-contents--

```js
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line

```

# --solutions--

```js
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();
```

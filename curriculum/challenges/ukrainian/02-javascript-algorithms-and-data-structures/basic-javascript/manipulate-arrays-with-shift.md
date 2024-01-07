---
id: 56bbb991ad1ed5201cd392cd
title: Маніпулювання масивами за допомогою методу shift
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRbVETW'
forumTopicId: 18238
dashedName: manipulate-arrays-with-shift
---

# --description--

`pop()` завжди видаляє останній елемент масиву. А якщо потрібно видалити перший?

Саме тут нам на допомогу приходить `.shift()`. Він працює так само, як і `.pop()`, але видаляє перший елемент замість останнього.

Приклад:

```js
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
```

`removedFromOurArray` матиме значення рядка `Stimpson`, а `ourArray` матиме значення `["J", ["cat"]]`.

# --instructions--

Використайте функцію `.shift()`, щоб вилучити перший елемент з `myArray` та призначити виведене значення до нової змінної `removedFromMyArray`.

# --hints--

Тепер `myArray` має дорівнювати `[["dog", 3]]`.

```js
assert(
  (function (d) {
    if (d[0][0] == 'dog' && d[0][1] === 3 && d[1] == undefined) {
      return true;
    } else {
      return false;
    }
  })(myArray)
);
```

`removedFromMyArray` має містити `["John", 23]`.

```js
assert(
  (function (d) {
    if (
      d[0] == 'John' &&
      d[1] === 23 &&
      typeof removedFromMyArray === 'object'
    ) {
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
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line

```

# --solutions--

```js
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();
```

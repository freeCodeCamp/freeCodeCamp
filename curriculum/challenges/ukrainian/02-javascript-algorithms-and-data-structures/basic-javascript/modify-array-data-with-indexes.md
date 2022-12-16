---
id: cf1111c1c11feddfaeb8bdef
title: Зміна даних масиву за допомогою індексів
challengeType: 1
videoUrl: 'https://scrimba.com/c/czQM4A8'
forumTopicId: 18241
dashedName: modify-array-data-with-indexes
---

# --description--

На відміну від рядків, записи масиву <dfn>можуть бути змінювані</dfn>, навіть якщо масив був оголошений з `const`.

**Приклад**

```js
const ourArray = [50, 40, 30];
ourArray[0] = 15;
```

`ourArray` має значення `[15, 40, 30]`.

**Примітка:** ніколи не вставляйте пробіл між іменем масиву і квадратними дужками, наприклад `array [0]`. Хоча JavaScript прочитає це правильно, але це може створити труднощі для інших програмістів, які читатимуть ваш код.

# --instructions--

Змінюйте дані, що зберігаються в індексі `0` масиву `myArray` до значення `45`.

# --hints--

`myArray` тепер повинен бути `[45, 64, 99]`.

```js
assert(
  (function () {
    if (
      typeof myArray != 'undefined' &&
      myArray[0] == 45 &&
      myArray[1] == 64 &&
      myArray[2] == 99
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

Слід використовувати правильний індекс для зміни значення у `myArray`.

```js
assert(
  (function () {
    if (code.match(/myArray\[0\]\s*=\s*/g)) {
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
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [18, 64, 99];

// Only change code below this line

```

# --solutions--

```js
const myArray = [18, 64, 99];
myArray[0] = 45;
```

---
id: cf1111c1c11feddfaeb8bdef
title: Зміна даних масиву за допомогою індексів
challengeType: 1
videoUrl: 'https://scrimba.com/c/czQM4A8'
forumTopicId: 18241
dashedName: modify-array-data-with-indexes
---

# --description--

На відміну від рядків, записи масиву є <dfn>мінливими</dfn> та їх легко змінити, навіть якщо масив оголошено з `const`.

**Приклад**

```js
const ourArray = [50, 40, 30];
ourArray[0] = 15;
```

Тепер `ourArray` має значення `[15, 40, 30]`.

**Примітка:** ніколи не вставляйте пробіл між назвою масиву і квадратними дужками, наприклад `array [0]`. Хоча JavaScript і може це обробити, таке написання може ускладнити читання коду для інших програмістів.

# --instructions--

Змініть дані в індексі `0` масиву `myArray` на значення `45`.

# --hints--

Тепер `myArray` повинен бути `[45, 64, 99]`.

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

Ви повинні використати правильний індекс, щоб змінити значення у `myArray`.

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

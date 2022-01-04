---
id: 5cfa3679138e7d9595b9d9d4
title: Заміна циклів за допомогою рекурсії
challengeType: 1
videoUrl: >-
  https://www.freecodecamp.org/news/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9/
forumTopicId: 301175
dashedName: replace-loops-using-recursion
---

# --description--

Рекурсія - це концепція, згідно з якою функція може бути вираженою в термінах сама по собі. Щоб краще зрозуміти це, почніть з роздумів про наступне завдання: перемножте перші `n` елементів масиву, щоб створити добуток цих елементів. Ви могли б це зробити, використовуючи цикл `for`:

```js
  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
```

Проте, зверніть увагу, що `multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]`. Це означає, що ви можете перезаписати `multiply` саме по собі і ніколи не використовувати цикл.

```js
  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
```

Рекурсивна версія `multiply` переривається таким чином. У <dfn>base case</dfn>, де `n <= 0`, повертає до 1. Для більших значень `n`, він викликає сам себе, але з `n - 1`. Цей виклик функції обчислюється так само, викликаючи `multiply` знову до `n <= 0`. На даному етапі, всі функції можуть повертати результат і початковий `multiply` повертає відповідь.

**Примітка:** Рекурсивні функції повинні мати базовий регістр, коли вони повертають результат, не викликаючи функцію знову (в цьому прикладі, коли `n <= 0`), інакше вони ніколи не зможуть закінчити виконання.

# --instructions--

Напишіть рекурсивну функцію, `sum(arr, n)`, що повертає суму перших `n` елементів масиву `arr`.

# --hints--

`sum([1], 0)` повинен дорівнювати 0.

```js
assert.equal(sum([1], 0), 0);
```

`sum([2, 3, 4], 1)` повинен дорівнювати 2.

```js
assert.equal(sum([2, 3, 4], 1), 2);
```

`sum([2, 3, 4, 5], 3)` повинен дорівнювати 9.

```js
assert.equal(sum([2, 3, 4, 5], 3), 9);
```

Ваш код не має опиратися на жодні цикли (`for`, `while` або функції більш високої послідовності, такі як `forEach`, `map`, `filter` або `reduce`.).

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

Вам слід використати рекурсію, щоб вирішити цю проблему.

```js
assert(
  sum.toString().match(/sum\(.*\)/g).length > 1
);
```

# --seed--

## --seed-contents--

```js
function sum(arr, n) {
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
function sum(arr, n) {
  // Only change code below this line
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}
```

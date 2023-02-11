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

Рекурсія – це концепція того, що функція може бути виражена сама собою. Щоб краще зрозуміти, подумайте над наступним завданням: перемножте перші `n` елементи масиву, щоб отримати їх добуток. Ви могли б це зробити, використовуючи цикл `for`:

```js
  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
```

Проте, зверніть увагу, що `multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]`. Це означає, що ви можете переписати `multiply` у самій функції і ніколи не використовувати цикл.

```js
  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
```

Рекурсивна версія `multiply` розбивається таким чином. У <dfn>базовому випадку</dfn>, де `n <= 0`, повертається 1. Функція викликає сама себе, якщо значення `n` більше, але `n - 1`. Цей виклик функції обчислюється так само, викликаючи `multiply` знову, доки `n <= 0`. На даному етапі всі функції можуть повертатися, а вихідна функція `multiply` повертає відповідь.

**Примітка:** рекурсивні функції повинні мати базовий випадок, коли вони повертаються без повторного виклику функції (у цьому прикладі, коли `n <= 0`), інакше вони ніколи не завершаться.

# --instructions--

Напишіть рекурсивну функцію `sum(arr, n)`, яка повертає суму перших `n` елементів масиву `arr`.

# --hints--

`sum([1], 0)` має дорівнювати 0.

```js
assert.equal(sum([1], 0), 0);
```

`sum([2, 3, 4], 1)` має дорівнювати 2.

```js
assert.equal(sum([2, 3, 4], 1), 2);
```

`sum([2, 3, 4, 5], 3)` має дорівнювати 9.

```js
assert.equal(sum([2, 3, 4, 5], 3), 9);
```

Ваш код не повинен опиратися на жодні цикли (`for`, `while` або функції вищого порядку, як-от `forEach`, `map`, `filter` або `reduce`.).

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

Ви повинні використати рекурсію, щоб розв’язати це завдання.

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

---
id: 587d825b367417b2b2512c8c
title: Реалізуйте пірамідальне сортування на неспадній купі
challengeType: 1
forumTopicId: 301643
dashedName: implement-heap-sort-with-a-min-heap
---

# --description--

Тепер ми можемо додавати та видаляти елементи, тому розберемо, де можна використовувати купи. Купи зазвичай використовуються для реалізації черг з пріоритетом, оскільки вони завжди зберігають елемент найбільшого чи найменшого значення на першій позиції. Крім того, їх застосовують для реалізації алгоритму сортування, який називають пірамідальним сортуванням. У цьому завданні ми розглянемо, як реалізувати його. Пірамідальне сортування використовує неспадну купу, яка є протилежною до незростаючої купи. Неспадна купа завжди зберігає елемент з найменшим значенням в корені.

Пірамідальне сортування працює таким чином: приймає невідсортований масив, додає кожен елемент масиву до неспадної купи, а тоді вилучає елементи з цієї неспадної купи до нового масиву. Структура неспадної купи гарантує, що новий масив міститиме вхідні елементи від найменшого до найбільшого. Це один з найефективніших алгоритмів сортування, виконання якого в середньому та найгіршому випадках становить O(nlog(n)).

# --instructions--

Реалізуємо пірамідальне сортування на неспадній купі. Ви можете адаптувати свій код незростаючої купи. Створіть об’єкт `MinHeap` з методами `insert`, `remove` та `sort`. Метод `sort` має повертати масив усіх елементів неспадної купи, де вони відсортовані від найменшого до найбільшого.

# --hints--

Має існувати структура даних `MinHeap`.

```js
assert(
  (function () {
    var test = false;
    if (typeof MinHeap !== 'undefined') {
      test = new MinHeap();
    }
    return typeof test == 'object';
  })()
);
```

Структура `MinHeap` повинна мати метод під назвою `insert`.

```js
assert(
  (function () {
    var test = false;
    if (typeof MinHeap !== 'undefined') {
      test = new MinHeap();
    } else {
      return false;
    }
    return typeof test.insert == 'function';
  })()
);
```

Структура `MinHeap` повинна мати метод під назвою `remove`.

```js
assert(
  (function () {
    var test = false;
    if (typeof MinHeap !== 'undefined') {
      test = new MinHeap();
    } else {
      return false;
    }
    return typeof test.remove == 'function';
  })()
);
```

Структура `MinHeap` повинна мати метод під назвою `sort`.

```js
assert(
  (function () {
    var test = false;
    if (typeof MinHeap !== 'undefined') {
      test = new MinHeap();
    } else {
      return false;
    }
    return typeof test.sort == 'function';
  })()
);
```

Метод `sort` має повернути масив, що містить всі елементи, додані до неспадної купи, у відсортованому порядку.

```js
assert(
  (() => {
    if (typeof MinHeap === 'undefined') {
      return false;
    }

    const heap = new MinHeap();
    const arr = createRandomArray(25);

    for (let i of arr) {
      heap.insert(i);
    }

    const result = heap.sort();
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== result[i]) {
        return false;
      }
    }
    return true;
  })()
);
```

# --seed--

## --seed-contents--

```js
function isSorted(a){
  for(let i = 0; i < a.length - 1; i++)
    if(a[i] > a[i + 1])
      return false;
  return true;
}
// Generate a randomly filled array
function createRandomArray(size = 5){
  let a = new Array(size);
  for(let i = 0; i < size; i++)
    a[i] = Math.floor(Math.random() * 100);

  return a;
}
const array = createRandomArray(25);

var MinHeap = function() {
  // Only change code below this line

  // Only change code above this line
};
```

# --solutions--

```js
// solution required
```

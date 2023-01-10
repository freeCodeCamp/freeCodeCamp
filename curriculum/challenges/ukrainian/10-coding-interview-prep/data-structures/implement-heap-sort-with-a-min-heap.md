---
id: 587d825b367417b2b2512c8c
title: Пірамідальне сортування за допомогою неспадної купи
challengeType: 1
forumTopicId: 301643
dashedName: implement-heap-sort-with-a-min-heap
---

# --description--

Тепер, коли ми можемо додавати та видаляти елементи, подивимось, для яких програм можна використовувати купи. Купи зазвичай використовуються для реалізації черг з пріоритетом, оскільки вони завжди зберігають елемент найбільшого чи найменшого значення на першій позиції. Крім того, їх застосовують для реалізації алгоритму сортування, який називається пірамідальне сортування. Тут ми побачимо, як реалізувати даний алгоритм. Пірамідальне сортування використовує неспадну купу, яка є протилежною до незростаючої купи. Неспадна купа завжди зберігає елемент з найменшим значенням в корені дерева (піраміди).

Пірамідальне сортування працює таким чином: кожен елемент додається до неспадної купи в несортованому масиві, а тоді кожен елемент вилучається з цієї неспадної купи до нового відсортованого масиву. Структура неспадної купи гарантує, що у новому масиві вхідні елементи будуть розташовані від найменшого до найбільшого. Це один з найефективніших алгоритмів сортування у середньому та найгіршому випадках складності O(nlog(n)).

# --instructions--

Реалізуймо пірамідальне сортування з неспадною купою. Не соромтеся адаптувати свій код незростаючої купи. Створіть об'єкт `MinHeap` з методами `insert`, `remove` та `sort`. Метод `sort` повинен повертати масив усіх елементів у неспадну купу, де вони будуть відсортовані від найменшого до найбільшого.

# --hints--

The `MinHeap` data structure should exist.

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

`MinHeap` повинен мати метод під назвою `insert`.

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

`MinHeap` повинен мати метод під назвою `remove`.

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

`MinHeap` повинен мати метод під назвою `sort`.

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

The `sort` method should return an array containing all items added to the min heap in sorted order.

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

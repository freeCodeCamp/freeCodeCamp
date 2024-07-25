---
id: 587d825b367417b2b2512c8b
title: Видаліть елемент з незростаючої купи
challengeType: 1
forumTopicId: 301710
dashedName: remove-an-element-from-a-max-heap
---

# --description--

Ми вже вміємо додавати елементи до купи, а тепер навчимося їх видаляти. Алгоритми видалення та додавання вимагають схожої логіки. Зазвичай з незростаючої купи видаляють найбільше значення, тому його потрібно просто вилучити з кореня дерева. Властивість купи у цьому дереві зруйнується, а отже її потрібно якось відновити. У випадку з незростаючою купою це можна зробити таким чином:

<ol>
  <li>Перемістіть останній елемент купи до кореневої позиції.</li>
  <li>Якщо будь-який дочірній елемент кореня більший за корінь, то корінь та більшу за значенням дитину потрібно поміняти місцями.</li>
  <li>Продовжуйте змінювати елементи місцями, поки значення батьківського елемента не буде більшим за обох дітей, або поки не досягнете останнього рівня дерева.</li>
</ol>

# --instructions--

Інструкція: додайте до незростаючої купи метод під назвою `remove`. Цей метод повинен повернути найбільше значення, додане до незростаючої купи, та видалити його з цієї купи. Він також має змінити порядок розміщення елементів, щоб зберегти властивість незростаючої купи. Після видалення елементу коренем повинен стати наступний найбільший елемент купи.

# --hints--

Має існувати структура даних `MaxHeap`.

```js
assert(
  (function () {
    let test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    }
    return typeof test == 'object';
  })()
);
```

Структура `MaxHeap` повинна мати метод під назвою `print`.

```js
assert(
  (function () {
    let test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    return typeof test.print == 'function';
  })()
);
```

Структура `MaxHeap` повинна мати метод під назвою `insert`.

```js
assert(
  (function () {
    let test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    return typeof test.insert == 'function';
  })()
);
```

Структура `MaxHeap` повинна мати метод під назвою `remove`.

```js
assert(
  (function () {
    let test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    return typeof test.remove == 'function';
  })()
);
```

Метод `remove` має видалити найбільший елемент з незростаючої купи, при цьому зберігаючи властивість незростаючої купи.

```js
function isHeap(arr, i, n) {
    if( arr[i] < arr[2 * i + 1] || arr[i] < arr[2 * i + 2] ){
        return false;
    }
    if (i > (n - 1) / 2) {
        return true;
    }
    if (isHeap(arr, 2 * i + 1, n) && isHeap(arr, 2 * i + 2, n)) {
        return true;
    }
    return false;
}


assert(
  (function () {
    let test = false;

    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }

    let max = Infinity;
    const [result, vals] = [[], [9, 3, 5, 2, 15, 3, 7, 12, 7, 10, 90]];

    vals.forEach((val) => test.insert(val));

    for (let i = 0; i < vals.length; i++) {
      const curHeap = test.print();
      const arr = curHeap[0] === null ? curHeap.slice(1) : curHeap;

      if (!isHeap(arr, 0, arr.length - 1)) {
        return false;
      }

      const removed = test.remove();
      if (!vals.includes(removed)) return false;
      if (removed > max) return false
      max = removed;
      result.push(removed);
    }

    for (let i = 0; i < vals.length; i++) {
      if (!result.includes(vals[i])) {
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
const MaxHeap = function () {
  this.heap = [];
  this.parent = index => {
    return Math.floor((index - 1) / 2);
  }
  this.insert = element => {
    this.heap.push(element);
    this.heapifyUp(this.heap.length - 1);
  }
  this.heapifyUp = index => {
    let currentIndex = index,
    parentIndex = this.parent(currentIndex);
    while (currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.parent(parentIndex);
    }
  }
  this.swap = (index1, index2) => {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }
  this.print = () => {
    return this.heap;
  }
  // Only change code below this line

  // Only change code above this line
};
```

# --solutions--

```js
// solution required
```

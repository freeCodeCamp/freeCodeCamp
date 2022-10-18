---
id: 587d825b367417b2b2512c8b
title: Вилучення елементів з незростаючої купи
challengeType: 1
forumTopicId: 301710
dashedName: remove-an-element-from-a-max-heap
---

# --description--

Ми вже вміємо додавати елементи до нашої купи, тож тепер навчимося їх видаляти. Насправді алгоритми видалення та додавання елементів є схожими. У незростаючій купі зазвичай видаляють найбільше значення, тому потрібно просто вилучити його з кореня дерева. Властивість купи у цьому дереві зруйнується, а отже потрібно якось її відновити. У випадку з незростаючою купою це можна зробити таким чином:

<ol>
  <li>Перемістіть останній елемент купи до кореневої позиції.</li>
  <li>Якщо будь-який дочірній елемент кореня більший, ніж сам корінь, то треба замінити корінь дочірнім елементом з більшим значенням.</li>
  <li>Продовжуйте заміну до тих пір, поки батьківський вузол не стане більшим за обидва дочірні, або ж поки не дійдете до останнього рівня у дереві.</li>
</ol>

# --instructions--

Інструкції: Додайте до незростаючої купи метод під назвою `remove`. Цей метод повинен повернути найбільше значення, додане до незростаючої купи, та видалити його з цієї купи. Він також має змінити порядок розміщення в купі, щоб зберегти її властивість. Після видалення елементу коренем повинен стати наступний найбільший елемент купи.

# --hints--

The `MaxHeap` data structure should exist.

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    }
    return typeof test == 'object';
  })()
);
```

`MaxHeap` повинен мати метод під назвою `print`.

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    return typeof test.print == 'function';
  })()
);
```

`MaxHeap` повинен мати метод під назвою `insert`.

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    return typeof test.insert == 'function';
  })()
);
```

`MaxHeap` повинен мати метод під назвою `remove`.

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    return typeof test.remove == 'function';
  })()
);
```

The `remove` method should remove the greatest element from the max heap while maintaining the max heap property.

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    test.insert(30);
    test.insert(300);
    test.insert(500);
    test.insert(10);
    let result = [];
    result.push(test.remove());
    result.push(test.remove());
    result.push(test.remove());
    result.push(test.remove());
    return result.join('') == '5003003010';
  })()
);
```

# --seed--

## --seed-contents--

```js
var MaxHeap = function () {
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

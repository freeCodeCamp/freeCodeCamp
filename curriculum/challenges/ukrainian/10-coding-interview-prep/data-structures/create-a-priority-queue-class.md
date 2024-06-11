---
id: 587d8255367417b2b2512c74
title: Створіть клас Priority Queue
challengeType: 1
forumTopicId: 301630
dashedName: create-a-priority-queue-class
---

# --description--

У цьому завданні ви створите чергу з пріоритетом. Черга з пріоритетом — це особливий тип черги, де елементи можуть мати додаткову інформацію про свій пріоритет. Його можна просто представити цілим числом. Пріоритет елементів замінить порядок їх розміщення в черзі та визначить, в якій послідовності елементи вилучатимуться з неї. Якщо елемент з вищим пріоритетом розташований після елементу з нижчим пріоритетом, то першим все одно вилучиться елемент з вищим пріоритетом.

Припустимо, що маємо чергу з пріоритетом з трьох елементів:

```js
[['kitten', 2], ['dog', 2], ['rabbit', 2]]
```

Друге значення (яке є цілим числом) вказує на пріоритет елемента. Якщо ми додамо в чергу елемент `['human', 1]` з пріоритетом `1` (за умови, що елементи з нижчим пріоритетом знаходяться перед ним), то саме цей елемент буде виключено з черги першим. Колекція виглядатиме так:

```js
[['human', 1], ['kitten', 2], ['dog', 2], ['rabbit', 2]]
```

Ми почали писати `PriorityQueue` в редакторі коду. Вам потрібно написати метод `enqueue`, щоб додати елементи з пріоритетом; метод `dequeue`, щоб видалити та повернути елементи; метод `size`, щоб повернути кількість елементів в черзі; метод `front`, щоб повернути перший елемент; метод `isEmpty`, який повертає `true`, якщо черга порожня, або `false`, якщо ні.

Метод `enqueue` має приймати елементи у форматі, який показано вище (`['human', 1]`), де `1` — це пріоритет. Методи `dequeue` та `front` мають повертати лише назву елемента, а не його пріоритет.

# --hints--

Клас `PriorityQueue` повинен мати метод `enqueue`.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.enqueue === 'function';
  })()
);
```

Клас `PriorityQueue` повинен мати метод `dequeue`.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.dequeue === 'function';
  })()
);
```

Клас `PriorityQueue` повинен мати метод `size`.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.size === 'function';
  })()
);
```

Клас `PriorityQueue` повинен мати метод `front`.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.front === 'function';
  })()
);
```

Клас `PriorityQueue` повинен мати метод `isEmpty`.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.isEmpty === 'function';
  })()
);
```

Клас `PriorityQueue` має правильно відстежувати кількість елементів за допомогою методу `size`, оскільки елементи додаються та вилучаються.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    test.enqueue(['David Brown', 2]);
    test.enqueue(['Jon Snow', 1]);
    var size1 = test.size();
    test.dequeue();
    var size2 = test.size();
    test.enqueue(['A', 3]);
    test.enqueue(['B', 3]);
    test.enqueue(['C', 3]);
    return size1 === 2 && size2 === 1 && test.size() === 4;
  })()
);
```

Метод `front` має повернути правильний перший елемент, оскільки елементи додаються та вилучаються.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    test.enqueue(['David Brown', 2]);
    var front1 = test.front();
    test.enqueue(['Jon Snow', 1]);
    var front2 = test.front();
    test.dequeue();
    test.enqueue(['A', 3]);
    var front3 = test.front();
    test.enqueue(['B', 3]);
    test.enqueue(['C', 3]);
    test.dequeue();
    var front4 = test.front();
    return (
      front1 === 'David Brown' &&
      front2 === 'Jon Snow' &&
      front3 === 'David Brown' &&
      front4 === 'A'
    );
  })()
);
```

Метод `isEmpty` має повернути `true`, якщо черга порожня.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    test.enqueue(['A', 1]);
    test.enqueue(['B', 1]);
    test.dequeue();
    var first = test.isEmpty();
    test.dequeue();
    return !first && test.isEmpty();
  })()
);
```

Черга з пріоритетом має повертати елементи з вищим пріоритетом перед елементами з нижчим пріоритетом, а в іншому випадку — повертати елементи за принципом «першим прийшло — першим пішло».

```js
assert(
  (function () {
    var test = new PriorityQueue();
    test.enqueue(['A', 5]);
    test.enqueue(['B', 5]);
    test.enqueue(['C', 5]);
    test.enqueue(['D', 3]);
    test.enqueue(['E', 1]);
    test.enqueue(['F', 7]);
    var result = [];
    result.push(test.dequeue());
    result.push(test.dequeue());
    result.push(test.dequeue());
    result.push(test.dequeue());
    result.push(test.dequeue());
    result.push(test.dequeue());
    return result.join('') === 'EDABCF';
  })()
);
```

# --seed--

## --seed-contents--

```js
function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
function PriorityQueue() {
  this.collection = [];
  this.printCollection = function () {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function (newitem) {
    if (this.isEmpty()) {
      return this.collection.push(newitem);
    }

    this.collection = this.collection.reverse();
    var found_index = this.collection.findIndex(function (item) {
      return newitem[1] >= item[1];
    });
    if (found_index === -1) {
      this.collection.push(newitem);
    } else {
      this.collection.splice(found_index, 0, newitem);
    }
    this.collection = this.collection.reverse();
  };
  this.dequeue = function () {
    if (!this.isEmpty()) {
      return this.collection.shift()[0];
    } else {
      return "The queue is empty.";
    }
  };
  this.size = function () {
    return this.collection.length;
  };
  this.front = function () {
    return this.collection[0][0];
  };
  this.isEmpty = function () {
    return this.size() > 0 ? false : true;
  };
  // Only change code above this line
}
```

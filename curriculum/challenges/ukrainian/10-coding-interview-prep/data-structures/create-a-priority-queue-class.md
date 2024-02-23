---
id: 587d8255367417b2b2512c74
title: Створення черги з пріоритетами
challengeType: 1
forumTopicId: 301630
dashedName: create-a-priority-queue-class
---

# --description--

В цьому завданні ви навчитеся створювати чергу з пріоритетами. Черга з пріоритетами - це особливий тип черги, в якій елементи можуть мати додаткову інформацію про їх пріоритет. Його можна просто представити цілим числом. Пріоритет елементів замінить порядок їх розміщення в черзі та визначить, в якій послідовності елементи вилучатимуться з неї. Якщо елемент з вищим пріоритетом розташований після елементу з нижчим пріоритетом, то першим все одно вилучиться елемент з вищим пріоритетом.

До прикладу, уявімо, що в нашій черзі з пріоритетом є три елементи:

```js
[['kitten', 2], ['dog', 2], ['rabbit', 2]]
```

Тут друге значення (яке є цілим числом) вказує на пріоритет елемента. Якщо ми додамо в чергу елемент `['human', 1]` з пріоритетом `1` (за умови, що елементи з нижчим пріоритетом знаходяться перед ним), то саме цей елемент буде виключено з черги першим. Набір елементів має виглядати так:

```js
[['human', 1], ['kitten', 2], ['dog', 2], ['rabbit', 2]]
```

Ми почали писати чергу з пріоритетом `PriorityQueue` в редакторі коду. Вам потрібно буде додати метод `enqueue` для додавання елементів з пріоритетами, метод `dequeue` - для видалення та повернення елементів, метод `size` - для повернення кількості елементів в черзі, метод `front` - для повернення елементу на початок черги й нарешті метод `isEmpty`, який повертає `true`, якщо черга порожня, або `false`, якщо ні.

Метод `enqueue` має приймати елементи у форматі, який показано вище (`['human', 1]`) де `1` - це пріоритет. Метод `dequeue` та `front` повинні повернути тільки ім'я елементу, а не його пріоритет.

# --hints--

Ваша черга з пріоритетом `PriorityQueue` повинна мати метод `enqueue`.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.enqueue === 'function';
  })()
);
```

Ваш `PriorityQueue` повинна мати `dequeue` метод.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.dequeue === 'function';
  })()
);
```

Ваша черга з пріоритетом `PriorityQueue` повинна мати метод `size`.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.size === 'function';
  })()
);
```

Ваша черга з пріоритетом `PriorityQueue` повинна мати метод `front`.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.front === 'function';
  })()
);
```

Ваша черга з пріоритетом `PriorityQueue` повинна мати метод `isEmpty`.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.isEmpty === 'function';
  })()
);
```

Ваша черга з пріоритетом `PriorityQueue` повинна правильно відстежувати поточну кількість елементів, використовуючи метод `size`, оскільки елементи додаються до та вилучаються з черги.

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

Метод `front` повинен правильно повертати елементи на початок черги, позаяк елементи додаються та вилучаються з черги.

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

Метод `isEmpty` повинен повернути `true`, коли черга порожня.

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

Черга з пріоритетом повинна повертати елементи з вищим пріоритетом перед елементами з нижчим пріоритетом, а в іншому випадку - повертати елементи в порядку "перший прийшов - перший пішов".

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

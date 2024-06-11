---
id: 587d8250367417b2b2512c60
title: Створіть клас Queue
challengeType: 1
forumTopicId: 301631
dashedName: create-a-queue-class
---

# --description--

Подібно до стеків, черги — це колекції елементів. Але на відміну від стеків, черги керуються принципом <dfn>першим прийшло — першим пішло</dfn>. Елементи, додані до черги, переміщаються в кінець, а вилучити можна лише перший елемент.

Для представлення черги можна було б використати масив, але як і у випадку зі стеками, ми хочемо обмежити контроль над чергами.

Клас Queue має два основні методи: `enqueue` та `dequeue`. Метод `enqueue` додає елемент у кінець черги, а метод `dequeue` видаляє та повертає перший елемент. Іншими корисними методами є `front`, `size` та `isEmpty`.

# --instructions--

Напишіть метод `enqueue`, щоб додати елемент в кінець черги; метод `dequeue`, щоб видалити та повернути перший елемент; метод `front`, щоб побачити перший елемент; метод `size`, щоб дізнатися довжину черги; метод `isEmpty`, щоб перевірити, чи черга порожня.

# --hints--

Клас `Queue` повинен мати метод `enqueue`.

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.enqueue === 'function';
  })()
);
```

Клас `Queue` повинен мати метод `dequeue`.

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.dequeue === 'function';
  })()
);
```

Клас `Queue` повинен мати метод `front`.

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.front === 'function';
  })()
);
```

Клас `Queue` повинен мати метод `size`.

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.size === 'function';
  })()
);
```

Клас `Queue` повинен мати метод `isEmpty`.

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.isEmpty === 'function';
  })()
);
```

Метод `dequeue` має видалити та повернути перший елемент черги.

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    test.enqueue('John');
    return test.dequeue() === 'Smith';
  })()
);
```

Метод `front` має повернути значення першого елемента черги.

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    test.enqueue('John');
    return test.front() === 'Smith';
  })()
);
```

Метод `size` має повернути довжину черги.

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    return test.size() === 1;
  })()
);
```

Метод `isEmpty` має повернути `false`, якщо черга порожня.

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    return !test.isEmpty();
  })()
);
```

# --seed--

## --seed-contents--

```js
function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
function Queue () { 
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Only change code below this line
    this.enqueue = function(item) {
        collection.push(item);
    }

    this.dequeue = function() {
        return collection.shift();
    }

    this.front = function() {
        return collection[0];
    }

    this.size = function(){
        return collection.length;
    }

    this.isEmpty = function() {
        return collection.length === 0 ? true : false;
    }
    // Only change code above this line
}
```

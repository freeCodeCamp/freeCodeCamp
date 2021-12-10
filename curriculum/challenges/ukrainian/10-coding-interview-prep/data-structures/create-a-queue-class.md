---
id: 587d8250367417b2b2512c60
title: Створення класу Queue (черга)
challengeType: 1
forumTopicId: 301631
dashedName: create-a-queue-class
---

# --description--

Подібно до стеків, черги — це набір елементів. Але на відміну від стеків, черги керуються принципом "перший прийшов — перший пішов". Елементи, додані до черги, переміщаються в кінець черги (її хвіст), і лише її початковий елемент може бути вилучений.

Для представлення черги можна було б використати масив, але як і у випадку зі стеками, ми хочемо обмежити контроль над чергами.

Два основні методи класу черга — це додавання до черги (enqueue) й вилучення з черги (dequeue). Метод додавання до черги (enqueue) переміщає елемент у кінець черги, а метод вилучення з черги (dequeue) вилучає та повертає елемент на початок. Іншими корисними методами є методи front, size та isEmpty.

# --instructions--

Напишіть метод `enqueue`, щоб перемістити елемент у кінець черги; метод `dequeue` - щоб вилучити й повернути початковий елемент; метод `front` - щоб побачити початковий елемент; метод `size` - щоб дізнатися довжину черги; метод `isEmpty` - щоб перевірити, чи черга порожня.

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

Метод `dequeue` має вилучати й повертати передній елемент черги

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

Метод `front` має повертати значення переднього елемента черги

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

Метод `size` має повертати довжину черги

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    return test.size() === 1;
  })()
);
```

Метод `isEmpty` має повертати `false` у разі наявності елементів у черзі

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

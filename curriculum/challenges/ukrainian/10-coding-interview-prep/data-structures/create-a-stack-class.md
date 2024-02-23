---
id: 587d8250367417b2b2512c5f
title: Створення класу Stack
challengeType: 1
forumTopicId: 301633
dashedName: create-a-stack-class
---

# --description--

В останньому розділі ми розібрали, що таке стек і як можна його представити за допомогою масиву. У цьому розділі ми створимо власний клас Stack. Хоча його й можна створити за допомогою масивів, все ж іноді краще обмежити контроль, який властивий стекам. Окрім методів `push` та `pop`, стеки мають й інші корисні методи. Додаймо до нашого класу Stack такі методи: `peek`, `isEmpty` та `clear`.

# --instructions--

Напишіть метод `push`, який додає елемент на верхівку стека; метод `pop`, який видаляє та повертає елемент, що знаходиться у верхівці стека; метод `peek`, який переглядає верхній елемент у стеку; метод `isEmpty`, який перевіряє, чи стек порожній; метод `clear`, який видаляє всі елементи зі стека. Також ми додали допоміжний метод `print`, який виводить набір консолі. Щоправда, стеки цього методу зазвичай не мають.

# --hints--

Ваш клас `Stack` повинен містити метод `push`.

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.push === 'function';
  })()
);
```

Ваш клас `Stack` повинен містити метод `pop`.

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.pop === 'function';
  })()
);
```

Ваш клас `Stack` повинен містити метод `peek`.

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.peek === 'function';
  })()
);
```

Ваш клас `Stack` повинен містити метод `isEmpty`.

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.isEmpty === 'function';
  })()
);
```

Ваш клас `Stack` повинен містити метод `clear`.

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.clear === 'function';
  })()
);
```

Метод `peek` повинен повернути верхній елемент стека

```js
assert(
  (function () {
    var test = new Stack();
    test.push('CS61');
    test.push('CS50');
    return test.peek() === 'CS50' && test.peek() === 'CS50';
  })()
);
```

Метод `pop` повинен видалити та повернути верхній елемент стека

```js
assert(
  (function () {
    var test = new Stack();
    test.push('CS61');
    test.push('CS50');
    return test.pop() === 'CS50' && test.pop() === 'CS61';
  })()
);
```

Метод `isEmpty` повинен повернути true, якщо стек порожній

```js
assert(
  (function () {
    var test = new Stack();
    return test.isEmpty();
  })()
);
```

Метод `clear` повинен видалити всі елементи зі стека

```js
assert(
  (function () {
    var test = new Stack();
    test.push('CS61');
    test.push('CS50');
    test.clear();
    return test.isEmpty();
  })()
);
```

# --seed--

## --seed-contents--

```js
function Stack() {
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
class Stack {
  constructor() {
    this.collection = [];
  }
  print() {
    console.log(this.collection);
  }
  push(val) {
    this.collection.push(val);
  }
  pop() {
    return this.collection.pop();
  }
  peek() {
    return this.collection[this.collection.length - 1];
  }
  isEmpty() {
    return this.collection.length === 0;
  }
  clear() {
    return (this.collection.length = 0);
  }
}
```

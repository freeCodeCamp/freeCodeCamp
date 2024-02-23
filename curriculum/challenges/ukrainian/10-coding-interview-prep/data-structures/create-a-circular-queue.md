---
id: 587d8255367417b2b2512c75
title: Створення кругової черги
challengeType: 1
forumTopicId: 301625
dashedName: create-a-circular-queue
---

# --description--

У цьому завданні ви навчитеся створювати кругову чергу. Циклічна черга - це черга фіксованого розміру, яка записує до кінця набору даних, а потім починає перезаписувати її початок. Цей тип структури даних є корисним у певних ситуаціях. Наприклад, кругову чергу можна використати для медіапотоку. Після заповнення черги нові медіадані перезапишуть старі.

Добре проілюструвати цю концепцію можна за допомогою масиву довжиною `5`:

```js
[null, null, null, null, null]
 ^Read @ 0
 ^Write @ 0
```

Тут і читання, і запис знаходяться на позиції `0`. Зараз черга отримує 3 нові записи `a`, `b` і `c`. Тепер наша черга виглядає так:

```js
[a, b, c, null, null]
 ^Read @ 0
          ^Write @ 3
```

При зчитуванні вказівник читання може видаляти або залишати значення:

```js
[null, null, null, null, null]
                   ^Read @ 3
                   ^Write @ 3
```

Тепер ми записуємо у чергу значення `d`, `e` і `f`. Як тільки запис досягне кінця масиву, він повернеться до початку:

```js
[f, null, null, d, e]
                ^Read @ 3
    ^Write @ 1
```

Цей підхід потребує сталого обсягу пам'яті, але дозволяє обробляти файли набагато більшого розміру.

# --instructions--

У цьому завданні ми реалізуємо кругову чергу. Кругова черга повинна забезпечувати методи `enqueue` і `dequeue`, які дозволять читати з черги та записувати в неї. Сам клас також повинен прийняти цілий аргумент, який визначає розмір черги при її створенні. Ми написали початкову версію цього класу для вас у редакторі коду.

Коли ви записуєте елементи в чергу, то вказівник запису повинен рухатись вперед і повернутися до початку після того, як він досягне кінця черги. В разі успішного додавання метод `enqueue` повинен повернути доданий елемент; в іншому випадку він поверне `null`.

Аналогічно при видаленні елементів з черги вказівник читання повинен рухатись вперед. Під час видалення елементу з черги, повинен повертатися цей елемент. Якщо ви не можете отримати елемент - повинен повернутися `null`.

Вказівник запису не може пройти повз вказівника зчитування (наш клас не дозволить переписати дані, які ще не були зчитаними), і вказівник зчитування не може пройти повз дані, що ви записали.

# --hints--

Метод `enqueue` повинен додати елементи до кругової черги.

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(591);
    var print = test.print();
    return print[0] === 17 && print[1] === 32 && print[2] === 591;
  })()
);
```

Ви не можете записати елементи повз вказівника зчитування.

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(591);
    test.enqueue(13);
    test.enqueue(25);
    test.enqueue(59);
    var print = test.print();
    return print[0] === 17 && print[1] === 32 && print[2] === 591;
  })()
);
```

Метод `dequeue` повинен отримати елементи з черги.

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(591);
    return (
      test.dequeue() === 17 && test.dequeue() === 32 && test.dequeue() === 591
    );
  })()
);
```

Після того як елемент був отриманий, його позиція в черзі повинна бути скинути до `null`.

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(672);
    test.dequeue();
    test.dequeue();
    var print = test.print();
    return print[0] === null && print[1] === null && print[2] === 672;
  })()
);
```

Спроба отримання елемента повз вказівника запиту повинна повернути `null` і не обганяє значення вказівника запису.

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(591);
    return (
      test.dequeue() === 17 &&
      test.dequeue() === 32 &&
      test.dequeue() === 591 &&
      test.dequeue() === null &&
      test.dequeue() === null &&
      test.dequeue() === null &&
      test.dequeue() === null &&
      test.enqueue(100) === 100 &&
      test.dequeue() === 100
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
class CircularQueue {
  constructor(size) {

    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line

    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line

    // Only change code above this line
  }
}
```

# --solutions--

```js
class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line
    console.log(this.write, this.max);
    if (this.queue[this.write] === null) {
      this.queue[this.write++] = item;

      if (this.write > this.max) {
        this.write = 0;
      }
      return item;
    }
    return null;
    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line
    if (this.queue[this.read] !== null) {
      let item = this.queue[this.read];
      this.queue[this.read++] = null;
      if (this.read > this.max) {
        this.read = 0;
      }
      return item;
    }
    return null;
    // Only change code above this line
  }
}
```

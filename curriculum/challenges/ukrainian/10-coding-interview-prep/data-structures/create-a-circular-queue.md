---
id: 587d8255367417b2b2512c75
title: Створіть кругову чергу
challengeType: 1
forumTopicId: 301625
dashedName: create-a-circular-queue
---

# --description--

У цьому завданні ви створите кругову чергу. Кругова черга — це черга, де нові елементи записуються в кінці колекції, а потім перезаписуються на її початку. Цей тип структури даних корисний в певних ситуаціях. Наприклад, кругову чергу можна використати для медіапотоку. Коли черга буде повною, нові медіадані замінять старі.

Використаємо масив з `5` елементів, щоб проілюструвати це поняття:

```js
[null, null, null, null, null]
 ^Read @ 0
 ^Write @ 0
```

І `read`, і `write` знаходяться на позиції `0`. Черга отримає три нові записи: `a`, `b` та `c`. Тепер наша черга виглядає так:

```js
[a, b, c, null, null]
 ^Read @ 0
          ^Write @ 3
```

Під час прочитання вказівником `read`, він може видаляти значення або залишати їх:

```js
[null, null, null, null, null]
                   ^Read @ 3
                   ^Write @ 3
```

Тепер записуємо значення `d`, `e` та `f` в чергу. Як тільки `write` досягне кінця масиву, він повернеться до початку:

```js
[f, null, null, d, e]
                ^Read @ 3
    ^Write @ 1
```

Цей підхід потребує сталого обсягу пам’яті, але дозволяє обробляти файли набагато більшого розміру.

# --instructions--

У цьому завданні ми реалізуємо кругову чергу. Кругова черга має надавати методи `enqueue` та `dequeue`, які дозволять читати та записувати чергу. Сам клас також має приймати цілочисельний аргумент, який вказує розмір черги при її створенні. Ми написали початкову версію цього класу в редакторі коду.

Коли ви записуєте елементи в чергу, то вказівник запису має рухатись вперед і повернутися на початок після того, як досягне кінця черги. Метод `enqueue` має повернути доданий елемент, якщо операція успішна; в іншому випадку — `null`.

Аналогічно, вказівник читання має рухатись вперед при видаленні елементів з черги. Метод має повернути видалений елемент. Якщо елемент неможливо видалити, метод має повернути `null`.

Вказівник запису не може пройти повз вказівника читання (наш клас не дозволить переписати ще не прочитані дані), і вказівник читання не може пройти повз дані, які ви записали.

# --hints--

Метод `enqueue` має додавати елементи до кругової черги.

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

Не записуйте елементи повз вказівника читання.

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

Метод `dequeue` має видаляти елементи з черги.

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

Скиньте позицію видаленого елемента на `null`.

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

Метод має повернути `null` при спробі видалити елемент повз вказівник запису і не дозволити обганяти значення вказівника запису.

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

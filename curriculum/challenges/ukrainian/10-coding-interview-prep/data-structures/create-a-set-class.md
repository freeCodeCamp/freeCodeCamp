---
id: 8d1323c8c441eddfaeb5bdef
title: Створіть клас Set
challengeType: 1
forumTopicId: 301632
dashedName: create-a-set-class
---

# --description--

У цій вправі ми створимо клас під назвою `Set`, щоб емулювати абстрактну структуру даних під назвою «множина». На відміну від масиву, множина не може містити ідентичних значень. Цей тип даних часто використовують, якщо потрібно перевірити, чи в коді наявний певний елемент. Нижче можна побачити, як працює об’єкт `Set` в ES6:

```js
const set1 = new Set([1, 2, 3, 5, 5, 2, 0]);
console.log(set1);
// output: {1, 2, 3, 5, 0}
console.log(set1.has(1));
// output: true
console.log(set1.has(6));
// output: false
```

Спочатку ми створимо метод `add`, який додає значення до множини, якщо цього значення ще немає. Потім ми створимо метод `remove`, який видаляє значення з множини, якщо воно вже є. Наприкінці створимо метод `size`, який повертає кількість елементів у множині.

# --instructions--

Створіть метод `add`, який додає унікальне значення до множини та повертає `true`, якщо це значення додано успішно, а в іншому випадку — `false`.

Створіть метод `remove`, який приймає значення та перевіряє, чи воно існує в множині. Якщо так, то метод має видалити його з множини і повернути `true`. В іншому випадку він має повернути `false`. Створіть метод `size`, який повертає розмір множини.

# --hints--

Клас `Set` повинен мати метод `add`.

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.add === 'function';
  })()
);
```

Метод `add` не повинен додавати ідентичні значення.

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    test.add('b');
    test.add('a');
    var vals = test.values();
    return vals[0] === 'a' && vals[1] === 'b' && vals.length === 2;
  })()
);
```

Метод `add` має повернути `true`, якщо значення додано успішно.

```js
assert(
  (function () {
    var test = new Set();
    var result = test.add('a');
    return result != undefined && result === true;
  })()
);
```

Метод `add` має повернути `false`, якщо додано ідентичне значення.

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    var result = test.add('a');
    return result != undefined && result === false;
  })()
);
```

Клас `Set` повинен мати метод `remove`.

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.remove === 'function';
  })()
);
```

Метод `remove` має видаляти лише ті елементи, які наявні в множині.

```js
assert.deepEqual(
  (function () {
    var test = new Set();
    test.add('a');
    test.add('b');
    test.remove('c');
    return test.values();
  })(),
  ['a', 'b']
);
```

Метод `remove` має видаляти наданий елемент з множини.

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    test.add('b');
    test.remove('a');
    var vals = test.values();
    return vals[0] === 'b' && vals.length === 1;
  })()
);
```

Клас `Set` повинен мати метод `size`.

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.size === 'function';
  })()
);
```

Метод `size` має повернути кількість елементів у множині.

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    test.add('b');
    test.remove('a');
    return test.size() === 1;
  })()
);
```

# --seed--

## --seed-contents--

```js
class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }

  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
class Set {
  constructor() {
    this.dictionary = {};
    this.length = 0;
  }

  has(element) {
    return this.dictionary[element] !== undefined;
  }

  values() {
    return Object.values(this.dictionary);
  }

  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = element;
      this.length++;
      return true;
    }

    return false;
  }

  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }

  size() {
    return this.length;
  }
}
```

---
id: 8d1323c8c441eddfaeb5bdef
title: Створення класу Set
challengeType: 1
forumTopicId: 301632
dashedName: create-a-set-class
---

# --description--

У цій вправі ми створимо клас, який називається `Set`, для емуляції структури абстрактних даних під назвою "set". На відміну від масиву, вона не може містити однотипних значень. Цей тип даних часто використовують тоді, коли потрібно перевірити, чи наявний у коді певний елемент. Нижче можна побачити, як об'єкт `Set` працює в ES6:

```js
const set1 = new Set([1, 2, 3, 5, 5, 2, 0]);
console.log(set1);
// output: {1, 2, 3, 5, 0}
console.log(set1.has(1));
// output: true
console.log(set1.has(6));
// output: false
```

Спочатку ми створимо метод add, що додає значення до набору множини, якщо цього значення там ще немає. Потім ми запустимо метод remove, який вилучає значення з множини, якщо воно там уже є. Наприкінці згенеруємо метод size, який повертає кількість елементів у наборі множини.

# --instructions--

Створіть метод `add`, що додає унікальне значення до набору множини та повертає `true`, якщо це значення було додано успішно, і `false` — якщо ні.

Створіть метод `remove`, який приймає значення та перевіряє, чи існує воно в множині. Якщо так, метод видалить його з набору множини й поверне `true`. В іншому випадку результатом буде `false`. Створіть метод `size`, що повертає розмір набору множини.

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

Метод `add` не повинен додавати однотипні значення.

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

Метод `add` має повертати `true`, якщо значення додалося правильно.

```js
assert(
  (function () {
    var test = new Set();
    var result = test.add('a');
    return result != undefined && result === true;
  })()
);
```

Метод `add` поверне `false` за умови, що ви додали однотипне значення.

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

Метод `remove` повинен видаляти лише ті елементи даних, які наявні в множині.

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

Метод `remove` має видалити даний елемент із множини.

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

Метод `size` має повернути кількість елементів у наборі.

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

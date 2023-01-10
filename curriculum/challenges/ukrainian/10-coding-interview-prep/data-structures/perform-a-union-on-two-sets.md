---
id: 587d8253367417b2b2512c6c
title: Об'єднання двох множин
challengeType: 1
forumTopicId: 301708
dashedName: perform-a-union-on-two-sets
---

# --description--

У цій вправі ви навчитеся виконувати об'єднання двох множин даних. У нашій структурі даних `Set` ми створимо метод під назвою `union`. Цей метод повинен використовувати іншу множину `Set` як аргумент та повертати `union` (об'єднання) двох множин, виключаючи будь-які повторювані у цих множинах значення.

Наприклад, якщо множина `setA = ['a','b','c']`, а множина `setB = ['a','b','d','e']`, то об'єднання множин setA та setB буде таким: `setA.union(setB) = ['a', 'b', 'c', 'd', 'e']`.

# --hints--

Ваш клас `Set` повинен мати метод `union`.

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.union === 'function';
  })()
);
```

The union of a `Set` containing values `["a", "b", "c"]` and a `Set` containing values `["c", "d"]` should return a new `Set` containing values `["a", "b", "c", "d"]`.

```js
assert(
  (function () {
    var setA = new Set();
    var setB = new Set();
    setA.add('a');
    setA.add('b');
    setA.add('c');
    setB.add('c');
    setB.add('d');
    var unionSetAB = setA.union(setB);
    var final = unionSetAB.values();
    return (
      final.indexOf('a') !== -1 &&
      final.indexOf('b') !== -1 &&
      final.indexOf('c') !== -1 &&
      final.indexOf('d') !== -1 &&
      final.length === 4
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
class Set {
  constructor() {
    // This will hold the set
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
  // This method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = element;
      this.length++;
      return true;
    }

    return false;
  }
  // This method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // This method will return the size of the set
  size() {
    return this.length;
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

  union(set) {
    const newSet = new Set();
    this.values().forEach(value => {
      newSet.add(value);
    })
    set.values().forEach(value => {
      newSet.add(value);
    })

    return newSet;
  }
}
```

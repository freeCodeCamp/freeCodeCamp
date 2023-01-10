---
id: 587d825b367417b2b2512c8e
title: Створення геш-таблиці
challengeType: 1
forumTopicId: 301627
dashedName: create-a-hash-table
---

# --description--

У даному завданні ми вивчимо геш-таблиці. Геш-таблицю використовують для реалізації асоціативних масивів або для зберігання пар (ключ, значення), як-от об'єкти та карти, які ми нещодавно вивчали. Як приклад, ми можемо внести об'єкт JavaScript у вигляді геш-таблиці (практична реалізація чого залежатиме від середовища запуску). Геш-таблиці функціонують таким чином: вони приймають вхідний ключ й конвертують його у числове значення визначеним шляхом. Згодом це числове значення використовується як дійсний ключ, за яким зберігається числове значення, що асоціюється з цим ключем. Якщо ви згодом захочете отримати доступ до того самого ключа ще раз, геш-функція опрацює ключ і поверне те саме числове значення, за допомогою якого можна знайти асоціативне значення. Тому цей процес є ефективним і час його виконання становить в середньому 0(1).

Геш-таблиці можна ще реалізувати у вигляді масивів, і тоді вони вираховуватимуть індекси за допомогою геш-функцій відповідно до заданого діапазону. У такому випадку визначення розміру масиву і сама геш-функція однаково важливі. А якщо геш-функція містить однакові значення для двох різних ключів? Що тоді? Такий випадок називається колізією (зіткненням). Як варіант, в такій ситуації можна зберегти обидві пари ключів-значень під одним індексом. Далі при пошуку кожної з них треба повторно переглянути всі елементи, щоб знайти потрібний ключ. Хороша геш-функція мінімізує колізії, щоб зберегти ефективний час пошуку.

Поки що ми не будемо детально розглядати гешування чи реалізацію геш-таблиць, але спробуємо зрозуміти загальний принцип їх роботи.

# --instructions--

Створімо основні функції геш-таблиці. Ми створили для вас просту геш-функцію. Якщо ви задасте дані рядка для функції `hash`, то отримаєте геш-значення, яке можна використати як ключ для зберігання. Збережіть елементи, що базуються на цьому геш-значенні, в об'єкті під назвою `this.collection`. Створіть такі три методи: `add`, `remove`, та `lookup`. Перший повинен отримати пару ключ-значення, щоб додати їх до геш-таблиці. Другий метод повинен видалити пару ключ-значення після перегляду ключа. Третій метод повинен прийняти ключ та повернути пов'язане з ним значення або `null`, якщо ключ не був знайдений.

Обов'язково напишіть код з врахуванням колізій!

** Зауважте: ** Тестування методу `remove` не буде вважатися завершеним, допоки методи `add` та `lookup` не будуть реалізовані правильно.

# --hints--

The `HashTable` data structure should exist.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    return typeof test === 'object';
  })()
);
```

The `HashTable` should have an `add` method.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    return typeof test.add === 'function';
  })()
);
```

The `HashTable` should have a `lookup` method.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    return typeof test.lookup === 'function';
  })()
);
```

The `HashTable` should have a `remove` method.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    return typeof test.remove === 'function';
  })()
);
```

The `add` method should add key value pairs and the `lookup` method should return the values associated with a given key.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    test.add('key', 'value');
    return test.lookup('key') === 'value';
  })()
);
```

The `remove` method should accept a key as input and should remove the associated key value pair.

```js
assert(
  (function () {
    var test = false;
    var hashValue = hash('key');
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    test.add('key', 'value');

    test.remove('key');
    return !test.collection.hasOwnProperty(hashValue);
  })()
);
```

The `remove` method should only remove the correct key value pair.

```js
assert(
  (function () {
    var test = false;
    var hashValue = hash('key');
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    test.add('key', 'value');
    test.add('yek', 'value');
    test.add('altKey', 'value');

    test.remove('yek');
    if (test.lookup('yek') || !test.lookup('key') || !test.lookup('altKey')) {
      return false;
    }

    test.remove('key');

    return !test.collection.hasOwnProperty(hashValue) && test.lookup('altKey');
  })()
);
```

Елементи мають бути додані за допомогою геш-функції.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    called = 0;
    test.add('key1', 'value1');
    test.add('key2', 'value2');
    test.add('key3', 'value3');
    return called >= 3 && called % 3 === 0;
  })()
);
```

Геш-таблиці повинні опрацьовувати колізії.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    called = 0;
    test.add('key1', 'value1');
    test.add('1key', 'value2');
    test.add('ke1y', 'value3');
    return (
      test.lookup('key1') === 'value1' &&
      test.lookup('1key') == 'value2' &&
      test.lookup('ke1y') == 'value3'
    );
  })()
);
```

# --seed--

## --before-user-code--

```js
var called = 0;
var hash = string => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash;
};
```

## --seed-contents--

```js
var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function() {
  this.collection = {};
  // Only change code below this line

  // Only change code above this line
};
```

# --solutions--

```js
var called = 0;
var hash = (string) => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); }
  return hash;
};
var HashTable = function() {
  this.collection = {};
  // Only change code below this line

  this.add = function(key, val) {
    var theHash = hash(key);
    if (!this.collection.hasOwnProperty(theHash)) {
      this.collection[theHash] = {};
    }
    this.collection[theHash][key] = val;
  }

  this.remove = function(key) {
    var theHash = hash(key);
    var hashedObj = this.collection[theHash];
    if (hashedObj.hasOwnProperty(key)) {
      delete hashedObj[key];
    }
    if (!Object.keys(hashedObj).length) {
      delete this.collection[theHash];
    }
  }

  this.lookup = function(key) {
    var theHash = hash(key);
    if (this.collection.hasOwnProperty(theHash)) {
      return this.collection[theHash][key];
    }
    return null
  }
  // Only change code above this line
};
```

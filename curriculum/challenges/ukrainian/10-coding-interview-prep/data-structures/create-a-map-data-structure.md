---
id: 8d5823c8c441eddfaeb5bdef
title: Створення структури даних Map (карта)
challengeType: 1
forumTopicId: 301629
dashedName: create-a-map-data-structure
---

# --description--

Наступні кілька завдань будуть присвячені картам та геш-таблицям. Карти - це структури даних, в яких зберігаються пари ключ-значення. В JavaScript вони доступні нам у вигляді об'єктів. Карти забезпечують швидкий пошук збережених елементів на основі ключових значень та є дуже поширеними й корисними структурами даних.

# --instructions--

Попрактикуймося ж трохи у створенні нашої власної карти. Оскільки об'єкти JavaScript забезпечують ефективнішу структуру карт, ніж будь-що, що ми могли б написати тут, ця вправа насамперед є навчальною. Однак об'єкти JavaScript лише надають нам доступ до певних операцій. А якщо ж ми захочемо визначити власні операції для користувачів? Використовуйте наданий тут об'єкт `Map` як обгортку навколо `object` у JavaScript. Створіть такі методи та операції для об'єкта Map:

<ul>
<li><code>add</code> приймає пару <code>key, value</code> і додає до карти.</li>
<li><code>remove</code> приймає ключ та видаляє пов'язану з ним пару <code>key, value</code></li>
<li><code>get</code> приймає ключ <code>key</code> та повертає збережене значення <code>value</code></li>
<li><code>has</code> приймає ключ <code>key</code> та повертає <dfn>true</dfn>, якщо ключ існує, або <dfn>false</dfn>, якщо його не існує.</li>
<li><code>values</code> повертається як масив усіх значень на карті</li>
<li><code>size</code> повертається як кількість елементів на карті</li>
<li><code>clear</code> очищає карту</li>
</ul>

# --hints--

Повинна існувати структура даних Map.

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    return typeof test == 'object';
  })()
);
```

Об'єкт Map має містити такі методи: add, remove, get, has, values, clear, and size.

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    return (
      typeof test.add == 'function' &&
      typeof test.remove == 'function' &&
      typeof test.get == 'function' &&
      typeof test.has == 'function' &&
      typeof test.values == 'function' &&
      typeof test.clear == 'function' &&
      typeof test.size == 'function'
    );
  })()
);
```

Метод add має додавати елементи до карти.

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add(5, 6);
    test.add(2, 3);
    test.add(2, 5);
    return test.size() == 2;
  })()
);
```

Метод has має повертати true для доданих елементів та false - для відсутніх.

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add('test', 'value');
    return test.has('test') && !test.has('false');
  })()
);
```

Метод get має приймати ключі в якості вхідних даних та повертати пов'язані з ними значення.

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add('abc', 'def');
    return test.get('abc') == 'def';
  })()
);
```

Метод values має повертати всі значення, що зберігаються в карті, у вигляді рядків масиву.

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add('a', 'b');
    test.add('c', 'd');
    test.add('e', 'f');
    var vals = test.values();
    return (
      vals.indexOf('b') != -1 &&
      vals.indexOf('d') != -1 &&
      vals.indexOf('f') != -1
    );
  })()
);
```

Метод clear має очистити карту, а метод size - повернути кількість елементів, що місяться в карті.

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add('b', 'b');
    test.add('c', 'd');
    test.remove('asdfas');
    var init = test.size();
    test.clear();
    return init == 2 && test.size() == 0;
  })()
);
```

# --seed--

## --seed-contents--

```js
var Map = function() {
  this.collection = {};
  // Only change code below this line

  // Only change code above this line
};
```

# --solutions--

```js
var Map = function() {
    this.collection = {};
    // Only change code below this line

    this.add = function(key,value) {
      this.collection[key] = value;
    }

    this.remove = function(key) {
      delete this.collection[key];
    }

    this.get = function(key) {
      return this.collection[key];
    }

    this.has = function(key) {
      return this.collection.hasOwnProperty(key)
    }

    this.values = function() {
      return Object.values(this.collection);
    }

    this.size = function() {
      return Object.keys(this.collection).length;
    }

    this.clear = function() {
      for(let item of Object.keys(this.collection)) {
        delete this.collection[item];
      }
    }
    // Only change code above this line
};
```

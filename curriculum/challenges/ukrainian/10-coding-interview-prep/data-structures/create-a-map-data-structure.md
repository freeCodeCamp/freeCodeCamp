---
id: 8d5823c8c441eddfaeb5bdef
title: Створіть структуру даних map
challengeType: 1
forumTopicId: 301629
dashedName: create-a-map-data-structure
---

# --description--

Наступні декілька завдань присвячені структурі map та хеш-таблицям. Структура map — це структура даних, яка зберігає пари ключ-значення. В JavaScript вони доступні у вигляді об’єктів. Структури map є дуже поширеними й корисними, а також забезпечують швидкий пошук збережених елементів на основі ключових значень.

# --instructions--

Трішки попрактикуємось, створивши власну структуру map. Оскільки об’єкти JavaScript забезпечують ефективнішу структуру map, ніж будь-що інше, що ми могли б написати тут, ця вправа насамперед є навчальною. Однак об’єкти JavaScript надають лише певні операції. А якщо ми захочемо визначити власні операції? Використайте наданий об’єкт `Map` як обгортку навколо об’єкту JavaScript. Створіть такі методи та операції для об’єкта Map:

<ul>
<li><code>add</code> приймає пару ключ-значення, яку додає до структури map</li>
<li><code>remove</code> приймає ключ та видаляє пов’язану пару ключ-значення</li>
<li><code>get</code> приймає ключ та повертає збережене значення</li>
<li><code>has</code> приймає ключ та повертає <dfn>true</dfn>, якщо ключ існує, а в іншому випадку — <dfn>false</dfn></li>
<li><code>values</code> повертає масив усіх значень в структурі map</li>
<li><code>size</code> повертає кількість елементів в структурі map</li>
<li><code>clear</code> очищає структуру map</li>
</ul>

# --hints--

Має існувати структура даних `Map`.

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

Об’єкт `Map` повинен мати такі методи: `add`, `remove`, `get`, `has`, `values`, `clear` та `size`.

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

Метод `add` має додавати елементи до структури map.

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

Метод `has` має повернути `true` для доданих елементів, а `false` — для відсутніх.

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

Метод `get` має приймати ключі як вхідні дані та повернути пов’язані значення.

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

Метод `values` має повернути всі значення, збережені в структурі map, у вигляді рядків в масиві.

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

Метод `clear` має очистити структуру map, а метод `size` має повернути кількість елементів в структурі map.

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

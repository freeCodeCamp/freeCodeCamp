---
id: a97fd23d9b809dac9921074f
title: Необов'язкові аргументи
challengeType: 5
forumTopicId: 14271
dashedName: arguments-optional
---

# --description--

Створіть функцію, яка додає два аргументи. Якщо вказано лише один аргумент, то повертається функція, яка приймає один аргумент і повертає суму.

Наприклад, `addTogether(2, 3)` повинен повертатися як `5`, а `addTogether(2)` повинен повертати функцію.

Якщо ви викличете цю функцію, повернуту з одним аргументом, ви отримаєте суму:

```js
var sumTwoAnd = addTogether(2);
```

`sumTwoAnd(3)` повертається `5`.

Якщо один із аргументів не є дійсним числом, повертається невизначено.

# --hints--

`addTogether(2, 3)` повинен повертатися як 5.

```js
assert.deepEqual(addTogether(2, 3), 5);
```

`addTogether(23, 30)` повинен повертатися як 53.

```js
assert.deepEqual(addTogether(23, 30), 53);
```

`addTogether(5)(7)` повинен повертатися як 12.

```js
assert.deepEqual(addTogether(5)(7), 12);
```

`addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")` повинен повертатися як `undefined`.

```js
assert.isUndefined(addTogether('https://www.youtube.com/watch?v=dQw4w9WgXcQ'));
```

`addTogether(2, "3")` повинен повертатися як `undefined`.

```js
assert.isUndefined(addTogether(2, '3'));
```

`addTogether(2)([3])` повинен повертатися як `undefined`.

```js
assert.isUndefined(addTogether(2)([3]));
```

# --seed--

## --seed-contents--

```js
function addTogether() {
  return false;
}

addTogether(2,3);
```

# --solutions--

```js
function addTogether() {
  var a = arguments[0];
  if (toString.call(a) !== '[object Number]') return;
  if (arguments.length === 1) {
    return function(b) {
      if (toString.call(b) !== '[object Number]') return;
      return a + b;
    };
  }
  var b = arguments[1];
  if (toString.call(b) !== '[object Number]') return;
  return a + arguments[1];
}
```

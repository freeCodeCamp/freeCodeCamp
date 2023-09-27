---
id: a97fd23d9b809dac9921074f
title: Додаткові аргументи
challengeType: 1
forumTopicId: 14271
dashedName: arguments-optional
---

# --description--

Створіть функцію, яка додає два аргументи. Якщо вказано лише один аргумент, то поверніть функцію, яка очікує один аргумент і повертає суму.

Наприклад, `addTogether(2, 3)` має повертати `5`, а `addTogether(2)` має повертати функцію.

Якщо викликати функцію, повернуту з одним аргументом, то повернеться сума:

```js
var sumTwoAnd = addTogether(2);
```

`sumTwoAnd(3)` повертає `5`.

Якщо жоден з аргументів не є дійсним числом, поверніть undefined.

# --hints--

`addTogether(2, 3)` має повертати 5.

```js
assert.deepEqual(addTogether(2, 3), 5);
```

`addTogether(23.4, 30)` should return 53.4.

```js
assert.deepEqual(addTogether(23.4, 30), 53.4);
```

`addTogether("2", 3)` має повертати `undefined`.

```js
assert.isUndefined(addTogether('2', 3));
```

`addTogether(5, undefined)` має повертати `undefined`.

```js
assert.isUndefined(addTogether(5, undefined));
```

`addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")` має повертати `undefined`.

```js
assert.isUndefined(addTogether('https://www.youtube.com/watch?v=dQw4w9WgXcQ'));
```

`addTogether(5)` має повертати функцію.

```js
assert.deepEqual(typeof(addTogether(5)), 'function');
```

`addTogether(5)(7)` має повертати 12.

```js
assert.deepEqual(addTogether(5)(7), 12);
```

`addTogether(2)([3])` має повертати `undefined`.

```js
assert.isUndefined(addTogether(2)([3]));
```

`addTogether(2, "3")` має повертати `undefined`.

```js
assert.isUndefined(addTogether(2, '3'));
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
  const first = arguments[0];
  if (typeof(first) !== 'number') {
    return undefined;
  }
  if (arguments.length === 1) {
    return function(second) {
      if (typeof(second) !== 'number') {
        return undefined;
      }
      return first + second;
    };
  }
  const second = arguments[1];
  if (typeof(second) !== 'number') {
    return undefined;
  }
  return first + second;
}
```

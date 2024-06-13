---
id: 587d8254367417b2b2512c71
title: Видаліть елементи з множини в ES6
challengeType: 1
forumTopicId: 301713
dashedName: remove-items-from-a-set-in-es6
---

# --description--

Попрактикуємо видалення елементів з множини ES6 за допомогою методу `delete`.

Спочатку створіть множину ES6:

```js
var set = new Set([1,2,3]);
```

Тепер видаліть елемент з множини за допомогою методу `delete`.

```js
set.delete(1);
console.log([...set]) // should return [ 2, 3 ]
```

# --instructions--

А тепер створіть множину з цілими числами 1, 2, 3, 4, 5.

Видаліть значення 2 і 5, а тоді поверніть цю множину.

# --hints--

Множина має містити значення 1, 3, 4.

```js
assert(
  (function () {
    var test = checkSet();
    return test.has(1) && test.has(3) && test.has(4) && test.size === 3;
  })()
);
```

# --seed--

## --seed-contents--

```js
function checkSet(){
  // Only change code below this line
  var set = null;

  // Only change code above this line
  return set;   
}
```

# --solutions--

```js
function checkSet(){
var set = new Set([1,2,3,4,5]);
set.delete(2);
set.delete(5);
return set;}
```

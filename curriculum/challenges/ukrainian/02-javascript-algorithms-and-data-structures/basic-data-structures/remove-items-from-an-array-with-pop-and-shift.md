---
id: 587d78b2367417b2b2512b0f
title: Видалити елементи з масиву за допомогою функцій pop() і shift()
challengeType: 1
forumTopicId: 301165
dashedName: remove-items-from-an-array-with-pop-and-shift
---

# --description--

Обидві функції `push()` і `unshift()` використовують відповідні методи, які за функціями майже протилежні: `pop()` та `shift()`. Як ви вже, напевне, зрозуміли, `pop()` *видаляє* елемент з кінця масиву, а не додає його, тоді як `shift()` видаляє елемент з початку. Ключова різниця між `pop()` і `shift()` та їх "ріднею", тобто `push()` і `unshift()` полягає в тому, що жоден метод не приймає параметри, а тільки дозволяє масиву змінюватися за допомогою одного елемента одночасно.

Звернімо увагу:

```js
let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
```

`greetings` отримала б значення `['whats up?', 'hello']`.

```js
greetings.shift();
```

`greetings` отримала б значення `['hello']`.

Ми також можемо повернути значення видаленого елемента за допомогою будь-якого з цих методів:

```js
let popped = greetings.pop();
```

`greetings` отримала б значення `[]`, а `popped` отримала б значення `hello`.

# --instructions--

Ми визначили функцію, `popShift`, яка приймає масив як аргумент і повертає новий масив. Змініть функцію, використовуючи `pop()` і `shift()`, щоб видалити перший та останній елементи масиву аргументів і призначити видалені елементи до їх відповідних змінних, щоб повернутий масив містив їхні значення.

# --hints--

`popShift(["challenge", "is", "not", "complete"])` має повернути `["challenge", "complete"]`

```js
assert.deepEqual(popShift(['challenge', 'is', 'not', 'complete']), [
  'challenge',
  'complete'
]);
```

Функція `popShift` повинна використовувати метод `pop()`

```js
assert.notStrictEqual(popShift.toString().search(/\.pop\(/), -1);
```

Функція `popShift` повинна використовувати метод `shift()`

```js
assert.notStrictEqual(popShift.toString().search(/\.shift\(/), -1);
```

# --seed--

## --seed-contents--

```js
function popShift(arr) {
  let popped; // Change this line
  let shifted; // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
```

# --solutions--

```js
function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}
```

---
id: 587d78b2367417b2b2512b0f
title: Видалення елементів з масиву за допомогою pop() та shift()
challengeType: 1
forumTopicId: 301165
dashedName: remove-items-from-an-array-with-pop-and-shift
---

# --description--

`push()` та `unshift()` мають відповідні методи, які за функціями майже протилежні: `pop()` та `shift()`. Напевно ви вже зрозуміли, що `pop()` *видаляє* елемент з кінця масиву, а не додає його, тоді як `shift()` видаляє елемент на початку. Ключова різниця між `pop()` й `shift()` та їхньою «сім’єю» (тобто `push()` й `unshift()`) полягає в тому, що жоден метод не приймає параметри, а тільки дозволяє масиву змінювати один елемент за раз.

Розглянемо приклад:

```js
let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
```

`greetings` матиме значення `['whats up?', 'hello']`.

```js
greetings.shift();
```

`greetings` матиме значення `['hello']`.

Ми також можемо повернути значення видаленого елемента за допомогою будь-якого з цих методів:

```js
let popped = greetings.pop();
```

`greetings` матиме значення `[]`, а `popped` матиме значення `hello`.

# --instructions--

Ми визначили функцію `popShift`, яка приймає масив як аргумент і повертає новий масив. Змініть функцію, використовуючи `pop()` й `shift()`, щоб видалити перший та останній елементи масиву аргументів і призначити видалені елементи до відповідних змінних, щоб повернутий масив містив їхні значення.

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

---
id: 587d7b7b367417b2b2512b17
title: Об'єднайте масиви з Spread-оператором
challengeType: 1
forumTopicId: 301156
dashedName: combine-arrays-with-the-spread-operator
---

# --description--

Ще одна величезна перевага <dfn>spread</dfn>-оператора - це можливість комбінувати масиви або вставляти всі елементи одного масиву в інший по будь-якому індексу. Використовуючи більш традиційні види синтаксу, ми можемо об'єднувати масиви, але це дозволяє нам об'єднувати масиви тільки в кінці одного і на початку іншого. Функція Spread Synrax робить наступну операцію надзвичайно простою:

```js
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
```

`thatArray` буде мати значення `['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']`.

Використовуючи функцію spread synrax, ми щойно виконали операцію, яка була б складнішою і більш детальною, якби ми використовували традиційні методи.

# --instructions--

Ми визначили функцію `spreadOut`, яка повертає змінну `sentence`. Змініть функцію використовуючи <dfn>spread</dfn> оператор, щоб вона повертала масив `['learning', 'to', 'code', 'is', 'fun']`.

# --hints--

`spreadOut` повинен повернути `["learning", "to", "code", "is", "fun"]`

```js
assert.deepEqual(spreadOut(), ['learning', 'to', 'code', 'is', 'fun']);
```

Функція `spreadOut` повинна використовувати spread syntax

```js
assert.notStrictEqual(spreadOut.toString().search(/[...]/), -1);
```

# --seed--

## --seed-contents--

```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // Change this line
  return sentence;
}

console.log(spreadOut());
```

# --solutions--

```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}
```

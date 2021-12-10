---
id: 587d7b88367417b2b2512b46
title: Виставлення параметрів за замовчуванням для ваших функцій
challengeType: 1
forumTopicId: 301209
dashedName: set-default-parameters-for-your-functions
---

# --description--

Для допомоги у створенні більш гнучких функцій, ES6 пропонує <dfn>default parameters</dfn> для функцій.

Погляньте на цей код:

```js
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
```

Консоль буде відображати рядки `Hello John` та `Hello Anonymous`.

Параметр за замовчуванням спрацьовує, коли аргумент не вказано (не визначено). Як можна побачити у прикладі вище, параметр `name` отримає за замовчуванням значення `Anonymous`, якщо ви не вказали значення цього параметру. Ви можете додати значення за замовчуванням будь-якій кількості параметрів.

# --instructions--

Модифікуйте функцію `increment`, додавши параметри за замовчуванням, щоб одиниця була додана до `number`, якщо `value` не вказано.

# --hints--

Результатом `increment(5, 2)` повинен бути `7`.

```js
assert(increment(5, 2) === 7);
```

Результатом `increment(5)` повинен бути `6`.

```js
assert(increment(5) === 6);
```

Значення параметру за замовчуванням `1` слід використовувати для `value`.

```js
assert(code.match(/value\s*=\s*1/g));
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
const increment = (number, value) => number + value;
// Only change code above this line
```

# --solutions--

```js
const increment = (number, value = 1) => number + value;
```

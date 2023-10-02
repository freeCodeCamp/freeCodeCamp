---
id: 587d7b88367417b2b2512b46
title: Налаштування параметрів функцій за замовчуванням
challengeType: 1
forumTopicId: 301209
dashedName: set-default-parameters-for-your-functions
---

# --description--

ES6 пропонує <dfn>параметри за замовчуванням</dfn>, щоб допомогти у створенні гнучкіших функцій.

Погляньте на цей код:

```js
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
```

Консоль показуватиме рядки `Hello John` та `Hello Anonymous`.

Параметр за замовчуванням спрацює, якщо аргумент не вказано (не визначено). Як можна побачити у прикладі вище, параметр `name` отримає значення `Anonymous` за замовчуванням, якщо для цього параметру не вказано значення. Ви можете додати значення за замовчуванням будь-якій кількості параметрів.

# --instructions--

Змініть функцію `increment`, додавши параметри за замовчуванням, щоб до `number` додавалась одиниця, якщо не вказано `value`.

# --hints--

Результатом `increment(5, 2)` має бути `7`.

```js
assert(increment(5, 2) === 7);
```

Результатом `increment(5)` має бути `6`.

```js
assert(increment(5) === 6);
```

Для `value` потрібно використати значення параметру за замовчуванням `1`.

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

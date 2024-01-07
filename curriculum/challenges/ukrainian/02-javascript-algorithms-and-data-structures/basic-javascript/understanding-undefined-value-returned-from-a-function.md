---
id: 598e8944f009e646fc236146
title: Невизначене значення, повернуте з функції
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2p7cL'
forumTopicId: 301177
dashedName: understanding-undefined-value-returned-from-a-function
---

# --description--

Функція може містити інструкцію `return`, але це необов’язково. Якщо функція не має інструкції `return`, то під час виклику функція обробляє внутрішній код, але поверненим значенням є `undefined`.

**Приклад**

```js
let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
```

`addSum` є функцією без інструкції `return`. Функція змінить глобальну змінну `sum`, але поверненим значенням функції буде `undefined`.

# --instructions--

Створіть функцію `addFive` без аргументів. Ця функція додає 5 до змінної `sum`, але поверненим значенням є `undefined`.

# --hints--

`addFive` має бути функцією.

```js
assert(typeof addFive === 'function');
```

Після запуску обидвох функцій, `sum` має дорівнювати `8`.

```js
assert(sum === 8);
```

Поверненим значенням з `addFive` повинне бути `undefined`.

```js
assert(addFive() === undefined);
```

Всередині функції `addFive` ви повинні додати `5` до змінної `sum`.

```js
assert(
  __helpers.removeWhiteSpace(addFive.toString()).match(/sum=sum\+5|sum\+=5/)
);
```

# --seed--

## --seed-contents--

```js
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line


// Only change code above this line

addThree();
addFive();
```

# --solutions--

```js
let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

addThree();
addFive();
```

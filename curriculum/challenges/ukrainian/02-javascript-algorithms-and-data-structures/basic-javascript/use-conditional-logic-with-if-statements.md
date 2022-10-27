---
id: cf1111c1c12feddfaeb3bdef
title: Використання умовної логіки з командою if
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87mf3'
forumTopicId: 18348
dashedName: use-conditional-logic-with-if-statements
---

# --description--

Інструкції `If` використовуються для прийняття рішень у коді. Ключове слово `if` наказує JavaScript виконати код у фігурних дужках за певних умов, вказаних у круглих дужках. Ці умови ще називаються умовами `Boolean` і вони можуть бути лише `true` або `false`.

Коли умова є оціненою як `true`, програма виконує команду у фігурних дужках. Коли булева умова є оцінена як `false`, команда у фігурних дужках не буде виконана.

**Псевдокод**

<blockquote>if (<i>condition is true</i>) {<br>  <i>statement is executed</i><br>}</blockquote>

**Наприклад:**

```js
function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
```

`test(true)` повертає рядок `It was true`, а `test(false)` повертає рядок `It was false`.

Коли `test` отримує значення `true`, оператор `if` оцінює `myCondition`, щоб побачити чи воно є `true` чи ні. Оскільки це `true`, функція повертає `It was true`. Коли ми викликаємо `test` зі значенням `false`, `myCondition` *не* `true`, інструкція у круглих дужках не виконується та функція повертає `It was false`.

# --instructions--

Створіть оператора `if` всередині функції, щоб повернути `Yes, that was true`, якщо параметр `wasThatTrue` є `true` та повернути `No, that was false` у протилежному випадку.

# --hints--

`trueOrFalse` повинен бути функцією

```js
assert(typeof trueOrFalse === 'function');
```

`trueOrFalse(true)` повинен повертати рядок

```js
assert(typeof trueOrFalse(true) === 'string');
```

`trueOrFalse(false)` повинен повертати рядок

```js
assert(typeof trueOrFalse(false) === 'string');
```

`trueOrFalse(true)` повинен повернути рядок `Yes, that was true`

```js
assert(trueOrFalse(true) === 'Yes, that was true');
```

`trueOrFalse(false)` повинен повернути рядок `No, that was false`

```js
assert(trueOrFalse(false) === 'No, that was false');
```

# --seed--

## --seed-contents--

```js
function trueOrFalse(wasThatTrue) {
  // Only change code below this line



  // Only change code above this line

}
```

# --solutions--

```js
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
```
